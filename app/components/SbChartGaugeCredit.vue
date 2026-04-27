<template>
  <div class="sb-chart-gauge-credit">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  score: { type: Number, default: 0 },
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
  const colorActive = getCssVar('--chart-gauge-credit-active');
  const colorBackground = getCssVar('--chart-gauge-credit-background');
  const colorText = getCssVar('--chart-gauge-credit-text-color');

  const isZero = props.score === 0;

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },

    series: [
      {
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        radius: '90%',
        pointer: { show: false },
        progress: {
          show: !isZero,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            // 진행 바 색상 (단색)
            color: colorActive,
            borderWidth: 0,
          },
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 32, // 게이지 두께
            color: [[1, colorBackground]], // 배경 트랙 색상
          },
        },
        splitLine: { show: false }, // 굵은 구분선 숨김
        axisTick: { show: false },
        axisLabel: {
          show: true,
          distance: -60, // 값이 작을수록 중심에서 멀어짐 (트랙 아래로 배치)
          color: colorText, // 스크린샷의 흐린 회색 텍스트 색상
          fontSize: 12,
          fontWeight: 'bold',
          formatter: function (value) {
            if (value === 0) return '0';
            if (value === 100) return '100';
            return '';
          },
        },
        data: [{ value: chartValue }],
        detail: { show: false },
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
