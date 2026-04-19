<template>
  <div :class="['sb-chart-bar-double', className]">
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
  className: {
    type: String,
    default: '',
  },
});

const chartRef = ref(null);
let chart = null;
let ioObserver = null;
let themeObserver = null;

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

  if (chart) chart.dispose();
  chart = echarts.init(chartRef.value);

  const dates = props.chartData.map((item) => item.date);
  const counts = props.chartData.map((item) => item.count);
  const amounts = props.chartData.map((item) => item.amount);

  const chartBackground = getCssVar('--chart-background') || 'transparent';
  const labelColor = getCssVar('--chart-label-color01');
  const borderColor = getCssVar('--chart-bar-dashboard-border-color');
  const circleBorderColor = getCssVar(
    '--chart-bar-dashboard-circle-border-color',
  );

  const chartBarDashboardTooltipBackground = getCssVar(
    '--chart-bar-dashboard-tooltip-background',
  );

  const colorPrimary = ['#00B1BD', 'rgba(0, 177, 189, 0)'];
  const colorSecondary = ['#6466FA', 'rgba(100, 102, 250, 0)'];

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    animation: true,
    animationDuration: 1200,
    animationEasing: 'cubicOut',
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '0', // 상단 툴팁 공간 확보
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'none' },
      backgroundColor: chartBarDashboardTooltipBackground,
      borderWidth: 0,
      alwaysShowContent: true,
      padding: [8, 16],
      extraCssText:
        'border-radius: 20px; box-shadow: var(--chart-line-tooltip-boxshadow);',

      position: function (point, params, dom, rect, size) {
        const x = point[0];
        const y = point[1];
        const viewWidth = size.viewSize[0];
        const viewHeight = size.viewSize[1];
        const tooltipWidth = size.contentSize[0];
        const tooltipHeight = size.contentSize[1];

        let posX = x - tooltipWidth / 2;
        let posY = y - tooltipHeight - 20; // 기본 위쪽 배치
        let side = 'bottom';

        // 화면 위쪽으로 나갈 경우 아래로 배치
        if (posY < 0) {
          posY = y + 20;
          side = 'top';
        }
        // 좌우 경계 처리
        if (posX < 0) posX = 5;
        if (posX + tooltipWidth > viewWidth)
          posX = viewWidth - tooltipWidth - 5;

        return [posX, posY];
      },
      formatter: function (params) {
        let html = `<div class="sb-chart-bar-dashboard-tooltip">`;
        params.forEach((item) => {
          const unit = item.seriesName === '주문 건수' ? '건' : '원';
          html += `
            <div class="sb-chart-bar-dashboard-tooltip-item">
              <p>
                <span style="background:${item.color.colorStops[0].color};"></span>
                <strong>${item.seriesName}</strong>
              </p>
              <span>${item.value.toLocaleString()}${unit}</span>
            </div>`;
        });
        html += `</div>`;
        return html;
      },
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: labelColor, fontSize: 12, margin: 15 },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { lineStyle: { type: 'dashed', color: borderColor } },
    },
    series: [
      {
        name: '주문 건수',
        type: 'bar',
        barWidth: 30,
        barGap: '30%',
        data: counts,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colorPrimary[0] },
            { offset: 1, color: colorPrimary[1] },
          ]),
          borderRadius: [30, 30, 0, 0],
        },
        // 막대 상단 흰색 원
        markPoint: {
          symbol: 'circle',
          symbolSize: 10,
          label: { show: false },
          data: counts.map((val, idx) => ({
            coord: [idx, val],
            itemStyle: {
              color: colorPrimary[0],
              borderColor: circleBorderColor,
              borderWidth: 2,
            },
          })),
          silent: true,
        },
      },
      {
        name: '주문 금액',
        type: 'bar',
        barWidth: 30,
        data: amounts,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colorSecondary[0] },
            { offset: 1, color: colorSecondary[1] },
          ]),
          borderRadius: [30, 30, 0, 0],
        },
        markPoint: {
          symbol: 'circle',
          symbolSize: 10,
          label: { show: false },
          data: amounts.map((val, idx) => ({
            coord: [idx, val],
            itemStyle: {
              color: colorSecondary[0],
              borderColor: circleBorderColor,
              borderWidth: 2,
            },
          })),
          silent: true,
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

  // Intersection Observer 설정
  ioObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initChart();
          ioObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  if (chartRef.value) {
    ioObserver.observe(chartRef.value);
  }

  // 테마 감지
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

const handleResize = () => chart && chart.resize();
</script>

<style scoped>
.sb-chart-bar-double {
  width: 100%;
  height: 350px;
}
.echart {
  width: 100%;
  height: 100%;
}
</style>
