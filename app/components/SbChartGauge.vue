<template>
  <div class="sb-chart-gauge">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  score: { type: Number, default: 0 },
  totalScore: { type: Number, default: 100 },
  unitText: { type: String, default: '점' },
});

const chartRef = ref(null);
let chart = null;
let observer = null;

const customFontFamily =
  "'Pretendard JP Variable', 'Pretendard JP', 'Pretendard', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'PingFang TC', 'Noto Sans TC', sans-serif";

const getCssVar = (varName) => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  return '';
};

const getScoreStatus = (p) => {
  if (p >= 80) return { text: '매우 좋음', colorVar: '--color-primary' };
  if (p >= 60) return { text: '좋음', colorVar: '--color-success' };
  if (p >= 40) return { text: '보통', colorVar: '--color-info' };
  if (p >= 20) return { text: '나쁨', colorVar: '--color-warn' };
  return { text: '매우 나쁨', colorVar: '--color-danger' };
};

const getRgba = (hex, opacity) => {
  if (!hex || !hex.startsWith('#')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const initChart = () => {
  if (!chartRef.value) return;

  // 1. 차트 인스턴스 생성 또는 재사용
  if (!chart) {
    chart = echarts.init(chartRef.value);
  }

  const statusInfo = getScoreStatus(props.score);

  const chartBackground = getCssVar('--chart-background');
  const trackColor = getCssVar('--chart-gauge-track-color');
  const activeColor = getCssVar(statusInfo.colorVar);
  const pointerBorderColor = getRgba(activeColor, 0.3);
  const labelColor01 = getCssVar('--chart-gauge-label-color01');
  const labelColor02 = getCssVar('--chart-gauge-label-color02');

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },

    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '45%'],
        radius: '90%',
        z: 1,
        max: props.totalScore,
        pointer: { show: false },
        axisLine: {
          lineStyle: {
            width: 7,
            color: [[1, trackColor]],
          },
        },
        progress: {
          show: true,
          roundCap: true,
          width: 7,
          itemStyle: {
            color: activeColor,
          },
        },
        pointer: {
          show: true,
          icon: 'circle',
          length: '194%',
          width: 12,
          itemStyle: {
            color: activeColor,
            borderColor: pointerBorderColor,
            borderWidth: 12,
          },
        },
        splitLine: { show: false },
        axisTick: {
          distance: 5,
          length: 2,
          lineStyle: { color: '#9AA3AF', width: 1 },
        },
        axisLabel: { show: false },
        data: [{ value: props.score }],
        detail: {
          offsetCenter: [0, '-33%'],
          formatter: (value) => {
            return `{status|${statusInfo.text}}\n{score|${value}}{unit|${props.unitText}}{sep|/}{total|${props.totalScore}${props.unitText}}`;
          },
          rich: {
            status: {
              fontSize: 24,
              color: activeColor,
              fontWeight: 'bold',
            },
            score: { fontSize: 14, color: labelColor02 },
            unit: { fontSize: 14, color: labelColor02 },
            sep: { fontSize: 14, color: labelColor01, padding: [0, 5, 0, 5] },
            total: { fontSize: 14, color: labelColor01 },
          },
        },
      },
    ],
  };

  chart.setOption(option, true);
};

watch(
  () => props.chartData,
  () => {
    initChart();
  },
  { deep: true },
);

onMounted(async () => {
  await nextTick();
  initChart();

  // [추가] 다크모드 감지: html 클래스가 바뀔 때마다 차트 다시 그리기
  observer = new MutationObserver(() => {
    initChart();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (observer) observer.disconnect(); // 옵저버 해제
  if (chart) chart.dispose();
});

const handleResize = () => {
  if (chart) chart.resize();
};
</script>
