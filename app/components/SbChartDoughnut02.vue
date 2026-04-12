<template>
  <div :class="['sb-chart-doughnut02', className]">
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
  },
  className: {
    type: String,
    default: '',
  },
  showCenterText: {
    type: Boolean,
    default: false,
  },
});

const chartRef = ref(null);
let chart = null;
let observer = null;

const customFontFamily =
  "'Pretendard JP Variable', 'Pretendard JP', 'Pretendard', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'PingFang TC', 'Noto Sans TC', sans-serif";

// CSS 변수 가져오기 함수 (다크모드 지원용)
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

  if (chart) chart.dispose();
  chart = echarts.init(chartRef.value);

  const totalValue = props.chartData.reduce((acc, cur) => acc + cur.value, 0);

  const colorMap = {
    primaryColor: '--chart-doughnut02-primary',
    successColor: '--chart-doughnut02-success',
    secondaryColor: '--chart-doughnut02-secondary',
    infoColor: '--chart-doughnut02-info',
    warnColor: '--chart-doughnut02-warn',
    dangerColor: '--chart-doughnut02-danger',
    contrastColor: '--chart-doughnut02-contrast',
    neutralColor: '--chart-doughnut02-neutral',
  };

  const chartBackground = getCssVar('--chart-background');
  const labelColor = getCssVar('--chart-label-color01');
  const percentColor = getCssVar('--chart-label-color02');

  // 데이터 가공: color 속성을 실제 itemStyle에 적용
  const processedData = props.chartData.map((item) => {
    // colorMap에 있는 키워드면 해당 변수명을 사용, 아니면 넘겨받은 값(CSS 변수명 등)을 그대로 사용
    const targetVar = colorMap[item.color] || item.color;

    return {
      value: item.value,
      name: item.name,
      itemStyle: {
        // getCssVar를 통해 최종적으로 HEX/RGB 컬러값을 추출
        color: getCssVar(targetVar) || targetVar,
      },
    };
  });

  const clientWidth = chartRef.value.clientWidth;
  const clientHeight = chartRef.value.clientHeight;

  // 크기 계산 (반응형)
  const chartSize = Math.min(clientWidth * 0.6, clientHeight); // 차트 영역 비율 조절
  const outerRadius = chartSize * 0.45; // 외경
  const innerRadius = chartSize * 0.27; // 내경 (도넛 두께 조절)

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    tooltip: { show: false },

    graphic: props.showCenterText
      ? [
          {
            type: 'text',
            left: '45%',
            top: 'middle',
            style: {
              text: `${totalValue.toLocaleString()}건`,
              textAlign: 'center',
              fill: labelColor,
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: customFontFamily,
            },
            origin: [0, 0],
          },
        ]
      : [],

    legend: {
      orient: 'vertical',
      right: '0%',
      top: 'center',
      icon: 'circle',
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 16,
      width: 100,

      formatter: function (name) {
        const item = props.chartData.find((d) => d.name === name);
        // [수정] value 대신 퍼센트 계산하여 표시
        const percentage =
          totalValue > 0 ? ((item.value / totalValue) * 100).toFixed(0) : 0;
        return `{name|${name}} {value|${percentage}%}`;
      },
      textStyle: {
        rich: {
          name: { fontSize: 12, color: labelColor, padding: [0, 4, 0, 0] },
          value: { fontSize: 12, fontWeight: 'bold', color: percentColor },
        },
      },
    },

    series: [
      {
        type: 'pie',
        // [핵심 수정] 위치 및 크기 조절
        radius: [innerRadius, outerRadius], // 도넛 형태
        center: ['45%', '50%'], // 차트를 왼쪽으로 치우치게 배치
        avoidLabelOverlap: false,

        itemStyle: {
          borderRadius: 0, // 스크린샷은 각진 형태
          borderColor: chartBackground, // 항목 간 간격 효과
          borderWidth: 2,
        },
        label: { show: false }, // 차트 자체 라벨 숨김
        emphasis: { scale: false }, // 마우스 오버 시 크기 변화 없음
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

  // 다크모드 감지 옵저버
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
