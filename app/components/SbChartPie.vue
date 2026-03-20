<template>
  <div class="sb-chart-pie" :style="{ width: size, height: size }">
    <v-chart
      ref="chartRef"
      class="chart"
      :option="chartOption"
      :init-options="{ renderer: 'svg' }"
      autoresize
    />
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { GaugeChart } from 'echarts/charts';
import { GraphicComponent } from 'echarts/components';
import VChart from 'vue-echarts';

import DotHighUrl from '@/assets/icons/chart/dot-high.svg?url';
import DotNormalUrl from '@/assets/icons/chart/dot-normal.svg?url';
import DotLowUrl from '@/assets/icons/chart/dot-low.svg?url';

use([SVGRenderer, GaugeChart, GraphicComponent]);

const props = defineProps({
  score: { type: Number, default: 0 },
  label: { type: String, default: '' },
  status: { type: String, default: 'normal' },
  size: { type: String, default: '400px' },
  totalScore: { type: Number, default: 100 },
});

const chartRef = ref(null);
const displayScore = ref(0);

const ANIMATION_DURATION = 800;
const FADE_IN_DURATION = 800; // 페이드인 시간 (게이지보다 짧게)

const statusConfig = computed(() => {
  const configs = {
    high: { color: '#03AB67', text: '최고', iconUrl: DotHighUrl },
    normal: { color: '#52A3F5', text: '보통', iconUrl: DotNormalUrl },
    low: { color: '#FFB22E', text: '낮음', iconUrl: DotLowUrl },
  };
  return configs[props.status] || configs.normal;
});

const numericSize = computed(() => {
  const n = parseFloat(props.size);
  return Number.isNaN(n) ? 400 : n;
});

const safeScore = computed(() => {
  const total = props.totalScore || 0;
  return Math.max(0, Math.min(props.score, total));
});

const uiScale = computed(() => {
  const size = numericSize.value;
  const ratio = size / 400;
  return {
    lineWidth: Math.max(6, Math.round(8 * ratio)),
    markerSize: Math.max(18, Math.round(24 * ratio)),
    labelFont: Math.max(16, Math.round(26 * ratio)),
    scoreFont: Math.max(34, Math.round(54 * ratio)),
    unitFont: Math.max(16, Math.round(26 * ratio)),
    scoreTopPadding: Math.max(10, Math.round(20 * ratio)),
  };
});

const markerPosition = computed(() => {
  const size = numericSize.value;
  const centerX = size * 0.5;
  const centerY = size * 0.65;
  const radius = size * 0.5 + 2;

  const total = props.totalScore || 1;
  const ratio = safeScore.value / total;

  const angleDeg = 180 - ratio * 180;
  const angleRad = (angleDeg * Math.PI) / 180;

  const x = centerX + radius * Math.cos(angleRad);
  const y = centerY - radius * Math.sin(angleRad);

  return { x, y };
});

const chartOption = computed(() => {
  const { color, text, iconUrl } = statusConfig.value;
  const { x, y } = markerPosition.value;
  const {
    lineWidth,
    markerSize,
    labelFont,
    scoreFont,
    unitFont,
    scoreTopPadding,
  } = uiScale.value;

  const markerHalf = markerSize / 2;

  return {
    animation: true,
    animationDuration: ANIMATION_DURATION,
    animationDurationUpdate: ANIMATION_DURATION,
    animationEasingUpdate: 'cubicOut',

    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '65%'],
        radius: '100%',
        z: 2,
        max: props.totalScore,
        pointer: { show: false },
        axisLine: {
          lineStyle: { width: lineWidth, color: [[1, '#EAECF1']] },
        },
        progress: {
          show: true,
          roundCap: true,
          width: lineWidth,
          itemStyle: { color },
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        data: [{ value: safeScore.value }],
        detail: {
          offsetCenter: [0, '-20%'],
          formatter: () =>
            `{label|${props.label}} {status|${text}}\n{score|${displayScore.value}}{unit|점}`,
          rich: {
            label: {
              fontSize: labelFont,
              color: '#666666',
              fontWeight: 500,
              padding: [0, 5, 0, 0],
            },
            status: {
              fontSize: labelFont,
              color,
              fontWeight: 700,
            },
            score: {
              fontSize: scoreFont,
              color: '#1A1A1A',
              fontWeight: 700,
              padding: [scoreTopPadding, 0, 0, 0],
            },
            unit: {
              fontSize: unitFont,
              color: '#1A1A1A',
              fontWeight: 700,
              padding: [scoreTopPadding, 0, 0, 2],
            },
          },
        },
      },
    ],

    graphic: [
      {
        id: 'score-marker',
        type: 'image',
        z: 20,
        silent: true,
        x: x - markerHalf,
        y: y - markerHalf,
        style: {
          image: iconUrl,
          width: markerSize,
          height: markerSize,
          opacity: 0, // 초기 숨김
        },
      },
    ],
  };
});

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

let scoreAnimationFrame = null;

function animateDisplayScore(from, to, duration = ANIMATION_DURATION) {
  if (!import.meta.client) {
    displayScore.value = to;
    fadeInMarker();
    return;
  }

  if (scoreAnimationFrame) cancelAnimationFrame(scoreAnimationFrame);

  const start = performance.now();

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    displayScore.value = Math.round(from + (to - from) * eased);

    const chart = chartRef.value?.chart;
    if (chart) {
      chart.setOption({
        series: [
          {
            detail: {
              formatter: () =>
                `{label|${props.label}} {status|${statusConfig.value.text}}\n{score|${displayScore.value}}{unit|점}`,
            },
          },
        ],
      });
    }

    if (progress < 1) {
      scoreAnimationFrame = requestAnimationFrame(step);
    } else {
      displayScore.value = to;
      scoreAnimationFrame = null;
      fadeInMarker(); // 애니메이션 끝난 후 페이드인
    }
  };

  scoreAnimationFrame = requestAnimationFrame(step);
}

/**
 * 아이콘 페이드인
 */
function fadeInMarker() {
  const chart = chartRef.value?.chart;
  if (!chart) return;

  chart.setOption({
    graphic: [
      {
        id: 'score-marker',
        style: {
          opacity: 1,
        },
        transition: ['opacity'],
        animationDuration: FADE_IN_DURATION,
        animationEasing: 'cubicOut',
      },
    ],
  });
}

async function updateChart() {
  await nextTick();
  const chart = chartRef.value?.chart;
  if (!chart) return;

  const { color, text, iconUrl } = statusConfig.value;
  const { x, y } = markerPosition.value;
  const {
    lineWidth,
    markerSize,
    labelFont,
    scoreFont,
    unitFont,
    scoreTopPadding,
  } = uiScale.value;

  const markerHalf = markerSize / 2;

  chart.setOption({
    animationDurationUpdate: ANIMATION_DURATION,
    animationEasingUpdate: 'cubicOut',

    series: [
      {
        max: props.totalScore,
        axisLine: { lineStyle: { width: lineWidth, color: [[1, '#EAECF1']] } },
        progress: { width: lineWidth, itemStyle: { color } },
        data: [{ value: safeScore.value }],
        detail: {
          formatter: () =>
            `{label|${props.label}} {status|${text}}\n{score|${displayScore.value}}{unit|점}`,
          rich: {
            label: {
              fontSize: labelFont,
              color: '#666666',
              fontWeight: 500,
              padding: [0, 5, 0, 0],
            },
            status: { fontSize: labelFont, color, fontWeight: 700 },
            score: {
              fontSize: scoreFont,
              color: '#1A1A1A',
              fontWeight: 700,
              padding: [scoreTopPadding, 0, 0, 0],
            },
            unit: {
              fontSize: unitFont,
              color: '#1A1A1A',
              fontWeight: 700,
              padding: [scoreTopPadding, 0, 0, 2],
            },
          },
        },
      },
    ],

    graphic: [
      {
        id: 'score-marker',
        x: x - markerHalf,
        y: y - markerHalf,
        style: {
          image: iconUrl,
          width: markerSize,
          height: markerSize,
          opacity: 0, // 상태 변경 시에도 처음엔 숨김
        },
      },
    ],
  });

  // 상태/사이즈 변경 시에도 페이드인
  fadeInMarker();
}

watch(
  () => props.score,
  (newScore, oldScore) => {
    const from = Math.max(0, Math.min(oldScore ?? 0, props.totalScore || 0));
    const to = Math.max(0, Math.min(newScore ?? 0, props.totalScore || 0));

    animateDisplayScore(from, to);
  },
  { immediate: true },
);

watch(
  () => [props.status, props.label, props.totalScore, props.size],
  () => {
    updateChart();
  },
  { immediate: true },
);
</script>

<style scoped>
.sb-chart-pie {
  position: relative;
}
.chart {
  width: 100%;
  height: 100%;
}
</style>
