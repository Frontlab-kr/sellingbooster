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
  barWidth: {
    type: [Number, String],
    default: 40,
  },
  unitText: {
    type: String,
    default: '%',
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

  const colorMap = {
    primaryColor: '--chart-stackedbar-primary',
    successColor: '--chart-stackedbar-success',
    secondaryColor: '--chart-stackedbar-secondary',
    infoColor: '--chart-stackedbar-info',
    warnColor: '--chart-stackedbar-warn',
    dangerColor: '--chart-stackedbar-danger',
    contrastColor: '--chart-stackedbar-contrast',
  };

  const chartBackground = getCssVar('--chart-background');
  const chartLabelColor01 = getCssVar('--chart-label-color01');
  const chartLabelColor02 = getCssVar('--chart-label-color02');

  const dataTotalSum = props.chartData.reduce((acc, cur) => acc + cur.value, 0);

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    grid: {
      top: 0,
      bottom: 30, // 범례가 들어갈 하단 여백
      // left: 76,
      // right: 76,
      left: 0,
      right: 0,
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: dataTotalSum,
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
        return `{name|${name}} {value|${val}${props.unitText}}`;
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
    series: props.chartData.map((item, index) => {
      const targetVar = colorMap[item.color] || item.color;
      const finalColor = getCssVar(targetVar) || targetVar;

      return {
        name: item.name,
        type: 'bar',
        stack: 'total',
        barWidth: props.barWidth,
        data: [item.value],
        itemStyle: {
          color: finalColor,
          borderRadius:
            index === 0
              ? [10, 0, 0, 10]
              : index === props.chartData.length - 1
                ? [0, 10, 10, 0]
                : 0,
        },
        emphasis: { disabled: true },
      };
    }),
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
