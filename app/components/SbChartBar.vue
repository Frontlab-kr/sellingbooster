<template>
  <div class="sb-chart-bar">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  chartData: {
    type: Array,
    required: true,
    default: () => [],
  },
  className: {
    type: String,
    default: '',
  },
});

const chartRef = ref(null);
let chart = null;
let ioObserver = null; // 화면 노출 감지용
let themeObserver = null; // 테마 감지용

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

  // 초기화 시 기존 차트가 있으면 삭제 (안전장치)
  if (chart) chart.dispose();
  chart = echarts.init(chartRef.value);

  const data = props.chartData.map((item) => item.value);
  const months = props.chartData.map((item) => item.name);

  const chartBackground = getCssVar('--chart-background');
  const chartLabelColor01 = getCssVar('--chart-label-color01');
  const chartLabelColor02 = getCssVar('--chart-label-color02');
  const chartBarColor01Start = getCssVar('--chart-bar-color01-start');
  const chartBarColor01End = getCssVar('--chart-bar-color01-end');
  const chartBarColor02Start = getCssVar('--chart-bar-color02-start');
  const chartBarColor02End = getCssVar('--chart-bar-color02-end');
  const chartBarBorderColor = getCssVar('--chart-bar-border-color');

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    animation: true,
    animationDuration: 1000,
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '20%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: months,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: chartLabelColor01,
        fontSize: 12,
        margin: 6,
      },
    },
    yAxis: {
      type: 'value',
      show: false, // Y축 숨김
    },
    series: [
      {
        name: '비율',
        type: 'bar',
        barWidth: 30,
        data: data.map((value, index) => {
          // 4월(마지막 데이터)만 강조 색상 적용
          const isLast = index === 3;
          return {
            value: value,
            itemStyle: {
              // 막대 그라데이션 설정
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: isLast ? chartBarColor01Start : chartBarColor02Start,
                },
                {
                  offset: 1,
                  color: isLast ? chartBarColor01End : chartBarColor02End,
                },
              ]),
              // 상단 둥글게 (Top-left, Top-right, Bottom-right, Bottom-left)
              borderRadius: [40, 40, 0, 0],
            },
            label: {
              show: true,
              position: 'top',
              distance: 8,
              formatter: '{c}%',
              fontSize: 12,
              color: isLast ? chartBarColor01Start : chartLabelColor01,
            },
          };
        }),
        // 상단 흰색 원 포인트 구현을 위한 마크포인트
        markPoint: {
          symbol: 'circle',
          symbolSize: 8,
          data: data.map((value, index) => {
            const isLast = index === data.length - 1;
            return {
              coord: [index, value],
              itemStyle: {
                color: isLast ? chartBarColor01Start : chartBarColor02Start,
                borderColor: chartBarBorderColor,
                borderWidth: 2,
              },
            };
          }),
          label: { show: false },
        },
      },
    ],
  };

  chart.setOption(option);
};

watch(
  () => props.chartData,
  () => {
    if (chart) initChart();
  },
  { deep: true },
);

onMounted(async () => {
  await nextTick();

  // --- Intersection Observer 설정 ---
  ioObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 차트가 화면에 50% 이상 보일 때 실행
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          initChart();
          ioObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: [0, 0.5] },
  );

  if (chartRef.value) {
    ioObserver.observe(chartRef.value);
  }

  // 테마(다크모드) 감지
  themeObserver = new MutationObserver(() => {
    if (chart) initChart();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (ioObserver) ioObserver.disconnect();
  if (themeObserver) themeObserver.disconnect();
  if (chart) chart.dispose();
});

const handleResize = () => {
  if (chart) chart.resize();
};
</script>
