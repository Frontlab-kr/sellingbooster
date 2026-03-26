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
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
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
let scoreAnimationFrame = null;

const ANIMATION_DURATION = 1000;

// 상태별 설정
const statusConfig = computed(() => {
  const configs = {
    high: { color: '#03AB67', text: '최고', iconUrl: DotHighUrl },
    normal: { color: '#52A3F5', text: '보통', iconUrl: DotNormalUrl },
    low: { color: '#FFB22E', text: '낮음', iconUrl: DotLowUrl },
  };
  return configs[props.status] || configs.normal;
});

// 사이즈 계산
const numericSize = computed(() => {
  const n = parseFloat(props.size);
  return Number.isNaN(n) ? 400 : n;
});

// UI 스케일링 (해상도 대응)
const uiScale = computed(() => {
  const ratio = numericSize.value / 400;
  return {
    lineWidth: Math.max(6, Math.round(8 * ratio)),
    markerSize: Math.max(18, Math.round(24 * ratio)),
    labelFont: Math.max(14, Math.round(20 * ratio)),
    scoreFont: Math.max(30, Math.round(50 * ratio)),
    unitFont: Math.max(14, Math.round(20 * ratio)),
  };
});

// 마커(아이콘) 위치 계산
const markerPosition = computed(() => {
  const size = numericSize.value;
  const centerX = size * 0.5;
  const centerY = size * 0.65;
  const radius = size * 0.5 - uiScale.value.lineWidth / 2;

  const ratio = Math.max(0, Math.min(props.score / (props.totalScore || 1), 1));
  const angleDeg = 180 - ratio * 180;
  const angleRad = (angleDeg * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleRad),
    y: centerY - radius * Math.sin(angleRad),
  };
});

// 차트 옵션
const chartOption = computed(() => {
  const { color, text, iconUrl } = statusConfig.value;
  const { x, y } = markerPosition.value;
  const { lineWidth, markerSize, labelFont, scoreFont, unitFont } =
    uiScale.value;

  return {
    animationDuration: ANIMATION_DURATION,
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '65%'],
        radius: '100%',
        min: 0,
        max: props.totalScore,
        progress: { show: true, width: lineWidth, itemStyle: { color } },
        axisLine: { lineStyle: { width: lineWidth, color: [[1, '#EAECF1']] } },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        data: [{ value: props.score }],
        detail: {
          offsetCenter: [0, '-15%'],
          formatter: () =>
            `{label|${props.label}} {status|${text}}\n{score|${displayScore.value}}{unit|점}`,
          rich: {
            label: { fontSize: labelFont, color: '#666', fontWeight: 500 },
            status: { fontSize: labelFont, color, fontWeight: 700 },
            score: {
              fontSize: scoreFont,
              color: '#1A1A1A',
              fontWeight: 700,
              padding: [10, 0, 0, 0],
            },
            unit: {
              fontSize: unitFont,
              color: '#1A1A1A',
              fontWeight: 700,
              padding: [10, 0, 0, 2],
            },
          },
        },
      },
    ],
    graphic: [
      {
        type: 'image',
        id: 'score-marker',
        transition: ['x', 'y'],
        x: x - markerSize / 2,
        y: y - markerSize / 2,
        style: {
          image: iconUrl,
          width: markerSize,
          height: markerSize,
          opacity: 1,
        },
        z: 100,
      },
    ],
  };
});

// 숫자 카운팅 애니메이션 로직
const animateScore = (to) => {
  if (typeof window === 'undefined') {
    displayScore.value = to;
    return;
  }

  if (scoreAnimationFrame) cancelAnimationFrame(scoreAnimationFrame);

  const startValue = displayScore.value;
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

    displayScore.value = Math.round(startValue + (to - startValue) * ease);

    if (progress < 1) {
      scoreAnimationFrame = requestAnimationFrame(step);
    }
  };
  scoreAnimationFrame = requestAnimationFrame(step);
};

// 스코어 변경 감지
watch(
  () => props.score,
  (newVal) => {
    animateScore(newVal);
  },
  { immediate: false },
);

// 초기 마운트 시 실행
onMounted(() => {
  animateScore(props.score);
});

onBeforeUnmount(() => {
  if (scoreAnimationFrame) cancelAnimationFrame(scoreAnimationFrame);
});
</script>

<style scoped>
.sb-chart-pie {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chart {
  width: 100%;
  height: 100%;
}
</style>
