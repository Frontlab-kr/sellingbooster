<template>
  <div class="sb-chart-combined">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  salesData: { type: Array, required: true, default: () => [] },
  countData: { type: Array, required: true, default: () => [] },
  boosterDays: { type: Array, default: () => [4, 12, 18, 26] },
  days: {
    type: Array,
    default: () => Array.from({ length: 30 }, (_, i) => `${i + 1}일`),
  },
});

const chartRef = ref(null);
let chart = null;
let observer = null;

const customFontFamily =
  "'Pretendard JP Variable', 'Pretendard JP', 'Pretendard', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'PingFang TC', 'Noto Sans TC', sans-serif";

const getCssVar = (varName) => {
  if (typeof window !== 'undefined') {
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim() || '#666'
    );
  }
  return '#666';
};

const initChart = () => {
  if (!chartRef.value) return;
  if (chart) chart.dispose();

  chart = echarts.init(chartRef.value);

  const chartBackground = getCssVar('--chart-background');
  const labelColor = getCssVar('--chart-label-color01');
  const borderColor = getCssVar('--chart-combined-border-color');
  const warnColor = getCssVar('--chart-combined-warn');
  const secondaryColor = getCssVar('--chart-combined-secondary');

  const chartCombinedTooltipBackground = getCssVar(
    '--chart-combined-tooltip-background',
  );

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: { type: 'none' },
      backgroundColor: chartCombinedTooltipBackground,
      borderWidth: 0,
      alwaysShowContent: true,
      extraCssText:
        'border-radius: 20px; box-shadow: var(--chart-combined-tooltip-boxshadow);',
      borderRadius: 24,
      padding: [6, 16],
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
        let listItems = '';

        params.forEach((param) => {
          if (param.seriesName === '매출액' || param.seriesName === '건수') {
            const dotColor =
              param.seriesName === '건수' ? param.borderColor : param.color;
            const unit = param.seriesName === '매출액' ? '만원' : '건';

            listItems += `
        <p>
          <span>
            <i style="background:${dotColor};"></i>
            ${param.seriesName}
          </span>
          <strong>
            ${param.value.toLocaleString()}
          </strong>
        </p>`;
          }
        });

        return `
        <div class="sb-chart-combined-tooltip">
          <dl>
            <dt>${params[0].name}</dt>
            <dd>
              ${listItems}
            </dd>
          </dl>
        </div>`;
      },
    },

    grid: {
      left: '80',
      right: '80',
      bottom: '0',
      top: '60',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: props.days,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: labelColor, fontSize: 14, interval: 0 },
    },
    yAxis: [
      {
        type: 'value',
        name: '결\n제\n금\n액\n(만원)',
        position: 'left',
        nameLocation: 'middle',
        nameGap: 90,
        nameRotate: 0,
        nameTextStyle: {
          color: labelColor,
          fontSize: 14,
          fontWeight: 'bold',
          lineHeight: 22,
          align: 'center',
        },
        axisLabel: { color: labelColor, fontSize: 14, margin: 12 },
        splitLine: {
          lineStyle: {
            color: borderColor,
            type: 'dashed',
          },
        },
      },
      {
        type: 'value',
        name: '결\n제\n건\n수\n(건)',
        position: 'right',
        nameLocation: 'middle',
        nameGap: 80,
        nameRotate: 0,
        nameTextStyle: {
          color: labelColor,
          fontSize: 14,
          fontWeight: 'bold',
          lineHeight: 18,
          align: 'center',
        },
        axisLabel: { color: labelColor, fontSize: 14, margin: 12 },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: '매출액',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 12,
        data: props.salesData,
        itemStyle: {
          color: secondaryColor,
          borderRadius: [8, 8, 0, 0],
        },
      },
      {
        name: '건수',
        type: 'line',
        yAxisIndex: 1,
        data: props.countData,
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { color: warnColor, width: 2 },
        itemStyle: {
          color: '#fff',
          borderColor: warnColor,
          borderWidth: 2,
        },
      },
      {
        name: '셀링부스터 액션',
        type: 'scatter',
        yAxisIndex: 1,
        data: props.boosterDays.map((day) => ({
          value: [day - 1, props.countData[day - 1] + 32],
          symbol: 'image:///icons/pin.svg',
          symbolSize: [24, 24],
          emphasis: {
            itemStyle: {
              scale: 1.2,
            },
          },
        })),
        tooltip: {
          show: true,
          trigger: 'item',
          axisPointer: { type: 'none' },
          backgroundColor: chartCombinedTooltipBackground,
          borderWidth: 0,
          alwaysShowContent: true,
          extraCssText:
            'border-radius: 20px; box-shadow: var(--chart-combined-tooltip-boxshadow);',
          borderRadius: 24,
          padding: [6, 16],
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
          formatter: (param) => {
            const day = param.data.value[0] + 1;
            return `<div class="sb-chart-combined-tooltip w-auto">상품명 7건 변경</div>`;
          },
        },
      },
    ],
    legend: {
      show: false,
    },
  };

  chart.setOption(option);
};

watch(
  [
    () => props.salesData,
    () => props.countData,
    () => props.boosterDays,
    () => props.days,
  ],
  initChart,
  { deep: true },
);

onMounted(async () => {
  await nextTick();
  initChart();

  observer = new MutationObserver(initChart);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  window.addEventListener('resize', () => chart?.resize());
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => chart?.resize());
  observer?.disconnect();
  chart?.dispose();
});
</script>
