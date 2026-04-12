<template>
  <div :class="['sb-chart-comparison-bar', className]">
    <div ref="chartRef" class="echart" style="width: 100%; height: 350px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  chartData: {
    type: Array,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});

const chartRef = ref(null);
let chart = null;

const getCssVar = (varName) => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  return '';
};

const initChart = () => {
  // 방어 코드: 데이터가 비어있으면 초기화하지 않음
  if (!chartRef.value || !props.chartData || props.chartData.length === 0)
    return;

  const firstItem = props.chartData[0];
  if (!firstItem || !firstItem.data) return;

  if (chart) chart.dispose();
  chart = echarts.init(chartRef.value);

  const colorMap = {
    primaryColor: '--chart-comparisonbar-primary',
    successColor: '--chart-comparisonbar-success',
    secondaryColor: '--chart-comparisonbar-secondary',
    infoColor: '--chart-comparisonbar-info',
    warnColor: '--chart-comparisonbar-warn',
    dangerColor: '--chart-comparisonbar-danger',
    contrastColor: '--chart-comparisonbar-contrast',
    neutralColor: '--chart-comparisonbar-neutral',
  };

  const chartBackground = getCssVar('--chart-background');
  const labelColor = getCssVar('--chart-label-color') || '#999';
  const barBgColor = getCssVar('--chart-bar-neutral') || '#f0f2f5';

  // [핵심] 범례 이름을 자동으로 추출 (D-2, D-1, 오늘 등)
  const legendNames = firstItem.data.map((d) => d.label);
  const categories = props.chartData.map((item) => item.name);

  // [핵심] 시리즈 동적 생성 (인덱스 오류 해결)
  const series = legendNames.map((label, index) => {
    return {
      name: label,
      type: 'bar',
      data: props.chartData.map((item) => {
        const d = item.data[index]; // 해당 날짜의 데이터 포인트 접근
        return {
          value: d ? d.value : 0,
          // 툴팁에서 단위를 꺼내쓰기 위해 데이터를 객체 형태로 저장
          unit: item.unit || '건',
          itemStyle: {
            color: getCssVar(colorMap[d?.color]) || d?.color || '#ccc',
          },
        };
      }),
      barWidth: legendNames.length > 2 ? 18 : 24,
      barGap: '30%',
      showBackground: true,
      backgroundStyle: { color: barBgColor, borderRadius: 12 },
      itemStyle: { borderRadius: 12 },
    };
  });

  const option = {
    backgroundColor: chartBackground,
    grid: {
      left: '3%',
      right: '3%',
      bottom: '10%',
      top: '15%',
      containLabel: true,
    },
    legend: {
      right: '0',
      top: '0',
      icon: 'circle',
      data: legendNames,
      textStyle: { color: labelColor, fontSize: 13 },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: { type: 'none' },
      backgroundColor: '#1f2937',
      borderRadius: 12,
      padding: [8, 12],
      textStyle: { color: '#fff', fontSize: 12 },
      formatter: function (params) {
        // '오늘' 시리즈를 찾거나, 없으면 마지막 시리즈를 타겟으로 잡음
        const target =
          params.find((p) => p.seriesName === '오늘') ||
          params[params.length - 1];
        if (!target) return '';

        // 데이터 가공 시 넣어둔 unit을 꺼내옴
        const unit = target.data.unit || '';

        return `<div style="display:flex; align-items:center; gap:8px;">
                  <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${target.color};"></span>
                  <span>${target.seriesName}</span>
                  <span style="font-weight:bold; margin-left:10px;">
                    ${target.value.toLocaleString()}${unit}
                  </span>
                </div>`;
      },
    },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: labelColor, fontSize: 12, margin: 20 },
    },
    yAxis: { type: 'value', show: false },
    series: series,
  };

  chart.setOption(option);
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
  window.addEventListener('resize', () => chart && chart.resize());
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => chart && chart.resize());
  if (chart) chart.dispose();
});
</script>
