<template>
  <div :class="['sb-chart-comparisonbar', className]">
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
});

const chartRef = ref(null);
let chart = null;
let ioObserver = null; // Intersection Observer용
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
  const labelColor = getCssVar('--chart-label-color01');
  const barBgColor = getCssVar('--chart-comparisonbar-background');
  const chartComparisonbarTooltipBackground = getCssVar(
    '--chart-comparisonbar-tooltip-background',
  );

  // [핵심] 범례 이름을 추출
  const legendNames = firstItem.data.map((d) => d.label);
  const categories = props.chartData.map((item) => item.name);

  // legendData 구성 수정: 아이콘 색상(itemStyle)을 막대 색상과 동기화
  const legendData = legendNames.map((name, index) => {
    // 해당 인덱스의 막대 색상을 가져옴
    const colorKey = firstItem.data[index]?.color;
    const actualColor = getCssVar(colorMap[colorKey]) || colorKey || '#ccc';

    return {
      name: name,
      // 아이콘 색상을 막대 색상으로 강제 지정
      itemStyle: {
        color: actualColor,
      },
      textStyle: {
        color: labelColor, // 텍스트는 기존 라벨 컬러 유지
        fontSize: 12,
      },
    };
  });

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
      barWidth: 24,
      barGap: '50%',
      showBackground: true,
      backgroundStyle: { color: barBgColor, borderRadius: [24, 24, 8, 8] },
      itemStyle: { borderRadius: [24, 24, 8, 8] },
    };
  });

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '24%',
      containLabel: true,
    },
    legend: {
      right: '0',
      top: '8',
      icon: 'circle',
      data: legendData,
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 20,
      textStyle: { color: labelColor, fontSize: 12 },
    },
    tooltip: {
      show: true,
      trigger: 'item',
      axisPointer: { type: 'none' },
      backgroundColor: chartComparisonbarTooltipBackground,
      borderWidth: 0,
      //alwaysShowContent: true,
      extraCssText:
        'border-radius: 20px; box-shadow: var(--chart-comparisonbar-tooltip-boxshadow);',
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
        const unit = params.data.unit || '';

        return `<div class="sb-chart-comparisonbar-tooltip">
                  <p><span style='background:${params.color};'></span> ${params.seriesName}</p>
                  <strong>
                    ${params.value.toLocaleString()}${unit}
                  </strong>
                </div>`;
      },
    },

    xAxis: {
      type: 'category',
      data: categories,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: labelColor, fontSize: 12, margin: 15 },
    },
    yAxis: { type: 'value', show: false },
    series: series,
  };

  option.animation = true;
  option.animationDuration = 1000;
  option.animationEasing = 'cubicOut';

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
        if (entry.isIntersecting) {
          // 화면에 보이면 차트 초기화 (애니메이션 시작)
          initChart();
          // 한 번 실행 후 감시 종료 (원치 않으시면 이 줄을 삭제하세요)
          ioObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 },
  ); // 10%만 보여도 시작

  if (chartRef.value) {
    ioObserver.observe(chartRef.value);
  }
  // --------------------------------

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
