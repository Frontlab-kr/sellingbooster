<template>
  <div class="sb-chart-gauge-circle">
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
  if (p >= 80) return { text: '매우 좋음', colorVar: '--color-success' };
  if (p >= 60) return { text: '좋음', colorVar: '--color-secondary' };
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

  const rate = 36;

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },

    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '95%', // 차트 크기 꽉 차게
        pointer: { show: false }, // 바늘 숨김
        progress: {
          show: true,
          overlap: false,
          roundCap: true, // 끝부분을 둥글게
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: '#fff',
            // 그라데이션 설정
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#ffffff' }, // 시작색 (연한 오렌지)
                { offset: 1, color: '#FF4D00' }, // 끝색 (진한 오렌지)
              ],
            },
          },
        },
        axisLine: {
          lineStyle: {
            width: 20, // 게이지 두께
            color: [[1, '#fff']], // 배경 트랙 색상
          },
        },
        splitLine: { show: false }, // 굵은 구분선 숨김
        axisTick: {
          distance: -14, // 안쪽 눈금 위치
          length: 10,
          lineStyle: {
            color: '#9AA3AF',
            width: 1,
          },
        },
        axisLabel: { show: false }, // 숫자 라벨 숨김
        data: [{ value: rate }],
        detail: {
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '5%'], // 중앙 위치 조정
          fontWeight: '700',
          formatter: (value) => {
            return `{label|달성률}\n{value|${value}}{unit|%}`;
          },
          rich: {
            label: {
              fontSize: 18,
              color: '#64748b',
              padding: [0, 0, 10, 0],
            },
            value: {
              fontSize: 60,
              color: '#475569',
              fontWeight: 'bold',
            },
            unit: {
              fontSize: 24,
              color: '#475569',
              padding: [0, 0, 10, 5],
            },
          },
        },
      },
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        z: 3, // 이 숫자가 높을수록 위로 올라옵니다!
        pointer: {
          show: true,
          icon: 'circle',
          length: '238%', // 오렌지 바 두께 중심에 맞게 조절
          width: 12,
          itemStyle: {
            color: '#fff',
          },
        },
        // 포인터 외의 모든 요소는 숨김 처리
        progress: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value: rate }],
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
