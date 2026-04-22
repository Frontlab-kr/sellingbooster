<template>
  <div class="sb-chart-loadmap">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  score: { type: Number, default: 0 },
  endColor: { type: String, default: '' },
});

const chartValue = props.score;

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

const initChart = () => {
  if (!chartRef.value) return;

  // 1. 차트 인스턴스 생성 또는 재사용
  if (!chart) {
    chart = echarts.init(chartRef.value);
  }

  const chartBackground = getCssVar('--chart-background');
  const colorStart = '#fff';
  const colorEnd = props.endColor;
  const colorLine = getCssVar('--chart-gauge-circle-line-color');

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },

    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '90%',
        pointer: { show: false },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 0,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: colorStart },
                { offset: 1, color: colorEnd },
              ],
            },
          },
        },
        axisLine: {
          lineStyle: {
            width: 8, // 게이지 두께
            color: [[1, 'transparent']], // 배경 트랙 색상
          },
        },
        splitLine: { show: false }, // 굵은 구분선 숨김
        axisTick: {
          splitNumber: 6,
          distance: -6, // 안쪽 눈금 위치
          length: 4,
          lineStyle: {
            color: colorLine,
            width: 1,
          },
        },
        axisLabel: { show: false }, // 숫자 라벨 숨김
        data: [{ value: chartValue }],
        detail: { show: false },
      },
    ],
  };

  chart.setOption(option, true);
};

watch(
  () => [props.score, props.endColor],
  () => {
    initChart();
  },
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
