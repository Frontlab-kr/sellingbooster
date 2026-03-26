<template>
  <div class="sb-chart-stackedbar">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  chartData: {
    type: Array,
    required: true,
    default: () => [],
  },
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

const initChart = () => {
  if (!chartRef.value || !props.chartData.length) return;

  if (chart) chart.dispose();
  chart = echarts.init(chartRef.value);

  const chartBackground = getCssVar('--chart-background');
  const chartLabelColor01 = getCssVar('--chart-label-color01');
  const chartLabelColor02 = getCssVar('--chart-label-color02');

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    grid: {
      top: 0,
      bottom: 30, // 범례가 들어갈 하단 여백
      left: 0,
      right: 0,
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: 100,
      show: false,
    },
    yAxis: {
      type: 'category',
      data: [''],
      show: false,
    },
    // [핵심] 커스텀 HTML 대신 ECharts 내부 Legend 사용
    legend: {
      bottom: '0',
      left: 'center',
      icon: 'circle',
      itemWidth: 8,
      itemGap: 16,
      itemStyle: { borderWidth: 0 },
      formatter: function (name) {
        const item = props.chartData.find((d) => d.name === name);
        const val = item ? item.value : 0;
        return `{name|${name}}대 {value|${val}%}`;
      },
      textStyle: {
        rich: {
          name: {
            fontSize: 12,
            color: chartLabelColor01,
          },
          value: {
            fontSize: 12,
            color: chartLabelColor02,
          },
        },
      },
    },
    series: props.chartData.map((item, index) => ({
      name: item.name, // legend와 매칭
      type: 'bar',
      stack: 'total',
      barWidth: 40, // 바 두께
      data: [item.value],
      itemStyle: {
        color: item.color,
        // 첫 번째 조각의 왼쪽, 마지막 조각의 오른쪽만 둥글게
        borderRadius:
          index === 0
            ? [10, 0, 0, 10]
            : index === props.chartData.length - 1
              ? [0, 10, 10, 0]
              : 0,
      },
      emphasis: { disabled: true },
    })),
  };

  chart.setOption(option);
};

// 데이터 변경 감지
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

  // 테마(다크모드) 감지
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
  if (observer) observer.disconnect();
  if (chart) chart.dispose();
});

const handleResize = () => {
  if (chart) chart.resize();
};
</script>
