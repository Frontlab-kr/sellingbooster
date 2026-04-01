<template>
  <div :class="['sb-chart-doughnut', className]">
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
  chartBorderColor: {
    type: String,
    default: '',
  },
});

const chartRef = ref(null);
let chart = null;
let observer = null; // 테마 감지용 변수 추가

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
  if (!chartRef.value || !props.chartData || props.chartData.length === 0)
    return;

  // 초기화 시 기존 차트가 있으면 삭제 (안전장치)
  if (chart) chart.dispose();
  chart = echarts.init(chartRef.value);

  const colorMap = {
    primaryColor: getCssVar('--chart-doughnut-primary'),
    successColor: getCssVar('--chart-doughnut-success'),
    infoColor: getCssVar('--chart-doughnut-info'),
    warnColor: getCssVar('--chart-doughnut-warn'),
    dangerColor: getCssVar('--chart-doughnut-danger'),
  };
  const chartBackground = getCssVar('--chart-background');
  const chartLabelColor01 = getCssVar('--chart-label-color01');
  const chartLabelColor02 = getCssVar('--chart-label-color02');
  const finalBorderColor =
    props.chartBorderColor || getCssVar('--chart-doughnut-border-color');

  const processedData = props.chartData.map((item) => ({
    ...item,
    itemStyle: {
      // item.color가 'primaryColor'이면 colorMap에서 실제 값을 가져옴
      color: colorMap[item.color] || item.color,
    },
  }));

  const mainPercent = props.chartData[0]?.value || 0;
  const mainTitleColor =
    colorMap[props.chartData[0]?.color] || colorMap.primaryColor;

  const clientWidth = chartRef.value.clientWidth;
  const clientHeight = chartRef.value.clientHeight;
  const outerRadius = Math.min(clientWidth, clientHeight) * 0.38; // 전체 크기의 약 76% 지점 (0.76 / 2)

  // 2. 고정하고 싶은 두께를 설정합니다. (예: 20px)
  const strokeWidth = 12;
  const innerRadius = outerRadius - strokeWidth;

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    title: {
      text: `${mainPercent}%`,
      left: 'center',
      top: '31%',
      textStyle: {
        color: mainTitleColor,
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: { show: false },
    legend: {
      bottom: '0',
      left: 'center',
      icon: 'circle',
      itemWidth: 8,
      itemGap: 20,
      itemStyle: { borderWidth: 0 },
      formatter: function (name) {
        const item = props.chartData.find((d) => d.name === name);
        const val = item ? item.value : 0;
        return `{name|${name}} {value|${val}%}`;
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
    series: [
      {
        type: 'pie',
        radius: [innerRadius, outerRadius],
        center: ['50%', '38%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: finalBorderColor,
          borderWidth: 3,
        },
        label: { show: false },
        emphasis: { scale: false },
        data: processedData,
      },
    ],
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
