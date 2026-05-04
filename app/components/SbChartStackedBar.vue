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
  gridLeft: {
    type: [Number, String],
    default: 0,
  },
  gridTop: {
    type: [Number, String],
    default: 0,
  },
  gridRight: {
    type: [Number, String],
    default: 0,
  },
  gridBottom: {
    type: [Number, String],
    default: 30,
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
  const chartsStackedbarBackground = getCssVar('--chart-stackedbar-background');

  const dataTotalSum = props.chartData.reduce((acc, cur) => acc + cur.value, 0);
  const isZeroAll = dataTotalSum === 0;

  const dataSeries = props.chartData.map((item, index) => {
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
      zIndex: 2,
    };
  });

  const backgroundSeries = {
    name: '배경',
    type: 'bar',
    barWidth: props.barWidth,
    silent: true,
    itemStyle: {
      color: chartsStackedbarBackground,
      borderRadius: 10,
    },
    // 데이터가 0일 때는 전체를 채우고, 있을 때는 합계만큼 채워 바닥에 깔아줌
    data: [isZeroAll ? 100 : dataTotalSum],
    animation: false,
    zIndex: 1,
    // [핵심] 다른 바와 겹치게 설정하여 간격 차이 방지
    barGap: '-100%',
  };

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    grid: {
      top: props.gridTop,
      left: props.gridLeft,
      right: props.gridRight,
      bottom: props.gridBottom,
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: isZeroAll ? 100 : dataTotalSum,
      show: false,
    },
    yAxis: {
      type: 'category',
      data: [''],
      show: false,
    },
    legend: {
      bottom: '0',
      left: 'center',
      icon: 'circle',
      itemWidth: 8,
      itemGap: 16,
      formatter: function (name) {
        const item = props.chartData.find((d) => d.name === name);
        const val = item ? item.value : 0;
        return `{name|${name}} {value|${val}${props.unitText}}`;
      },
      textStyle: {
        rich: {
          name: { fontSize: 12, color: chartLabelColor01 },
          value: { fontSize: 12, color: chartLabelColor02 },
        },
      },
    },

    series: [backgroundSeries, ...dataSeries],
  };

  chart.setOption(option);
};

// 데이터 변경 감지
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
  const options = {
    root: null,
    threshold: 0.5, // 50%가 보일 때 작동
  };

  ioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // 만약 0.5가 너무 엄격해서 작동안할 경우를 대비해 isIntersecting 확인
      if (entry.isIntersecting) {
        initChart();
        ioObserver.unobserve(entry.target);
      }
    });
  }, options);

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
