<template>
  <div class="sb-chart-gauge">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

import faceSuccess from '@/assets/icons/chart/face-success.svg?url';
import faceSecondary from '@/assets/icons/chart/face-secondary.svg?url';
import faceInfo from '@/assets/icons/chart/face-info.svg?url';
import faceWarn from '@/assets/icons/chart/face-warn.svg?url';
import faceDanger from '@/assets/icons/chart/face-danger.svg?url';

import faceSuccessDark from '@/assets/icons/chart/face-success-dark.svg?url';
import faceSecondaryDark from '@/assets/icons/chart/face-secondary-dark.svg?url';
import faceInfoDark from '@/assets/icons/chart/face-info-dark.svg?url';
import faceWarnDark from '@/assets/icons/chart/face-warn-dark.svg?url';
import faceDangerDark from '@/assets/icons/chart/face-danger-dark.svg?url';

const props = defineProps({
  score: { type: Number, default: 0 },
  totalScore: { type: Number, default: 100 },
  unitText: { type: String, default: '점' },
  label: { type: String, default: '' },
  size: { type: String, default: '100%' },
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

const getPureImagePath = (varName) => {
  const cssValue = getCssVar(varName);
  if (!cssValue || cssValue === 'none') return '';
  return cssValue
    .replace(/^url\(["']?/, '')
    .replace(/["']?\)$/, '')
    .replace(/['"]/g, '');
};

const isDarkMode = ref(false);

const checkTheme = () => {
  isDarkMode.value = document.documentElement.classList.contains('p-dark');
};

const getScoreStatus = (p) => {
  checkTheme();

  const icons = isDarkMode.value
    ? {
        success: faceSuccessDark,
        secondary: faceSecondaryDark,
        info: faceInfoDark,
        warn: faceWarnDark,
        danger: faceDangerDark,
      }
    : {
        success: faceSuccess,
        secondary: faceSecondary,
        info: faceInfo,
        warn: faceWarn,
        danger: faceDanger,
      };

  if (p >= 80)
    return {
      text: '최고',
      colorVar: '--color-success',
      face: icons.success,
    };
  if (p >= 60)
    return {
      text: '좋음',
      colorVar: '--color-secondary',
      face: icons.secondary,
    };
  if (p >= 40)
    return {
      text: '보통',
      colorVar: '--color-info',
      face: icons.info,
    };
  if (p >= 20)
    return {
      text: '낮음',
      colorVar: '--color-warn',
      face: icons.warn,
    };
  return {
    text: '최저',
    colorVar: '--color-danger',
    face: icons.danger,
  };
};

const initChart = () => {
  if (!chartRef.value) return;

  // 기존 차트 완전 제거
  if (chart) {
    chart.dispose();
    chart = null;
  }

  chart = echarts.init(chartRef.value);

  const statusInfo = getScoreStatus(props.score);

  const chartBackground = getCssVar('--chart-background');
  const trackColor = getCssVar('--chart-gauge-track-color');
  const activeColor = getCssVar(statusInfo.colorVar);
  const facePath = statusInfo.face;
  const labelColor01 = getCssVar('--chart-gauge-face-label-color01');
  const labelColor02 = getCssVar('--chart-gauge-face-label-color02');

  const option = {
    backgroundColor: chartBackground,
    textStyle: { fontFamily: customFontFamily },

    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '45%'],
        radius: '90%',
        z: 1,
        max: props.totalScore,
        pointer: { show: false },
        axisLine: {
          lineStyle: {
            width: 7,
            color: [[1, trackColor]],
          },
        },
        progress: {
          show: true,
          roundCap: true,
          width: 7,
          itemStyle: {
            color: activeColor,
          },
        },
        splitLine: { show: false },
        axisTick: {
          show: false,
        },
        axisLabel: { show: false },
        data: [{ value: props.score }],
        detail: {
          offsetCenter: [0, '-35%'],
          formatter: (value) => {
            return `{label|${props.label}}{status|${statusInfo.text}}\n{score|${value}}{unit|${props.unitText}}`;
          },
          rich: {
            label: {
              fontSize: 16,
              color: labelColor01,
              fontWeight: 'bold',
            },
            status: {
              fontSize: 16,
              color: activeColor,
              fontWeight: 'bold',
              padding: [0, 0, 0, 3],
            },
            score: {
              fontSize: 24,
              color: labelColor02,
              fontWeight: 'bold',
              padding: [6, 0, 0, 0],
            },
            unit: {
              fontSize: 24,
              color: labelColor02,
              fontWeight: 'bold',
              padding: [6, 0, 0, 0],
            },
          },
        },
      },
    ],
  };

  chart.setOption(option, true);

  nextTick(() => {
    updateMarker(facePath); // facePath 사용
  });
};

const updateMarker = (facePath) => {
  if (!chart || !facePath) return;

  const width = chart.getWidth();
  const height = chart.getHeight();

  // 1. ECharts의 가상 좌표계를 실제 픽셀 좌표로 변환하기 위해
  // 중심점과 반지름 계산 방식을 series 설정과 동기화합니다.
  const centerX = width * 0.5;
  const centerY = height * 0.45; // series.center와 동일하게 유지

  // series.radius: '90%'는 전체 캔버스 높이/너비 중 작은 쪽의 90%가 아니라
  // 캔버스 크기 자체에 대한 비율이므로 아래와 같이 계산하는 것이 정확합니다.
  const viewSize = Math.min(width, height);
  const baseRadius = (viewSize * 0.86) / 2;

  // 2. 각도 계산 (ECharts Gauge는 180도에서 0도로 흐름)
  const ratio = Math.max(0, Math.min(props.score / (props.totalScore || 1), 1));
  const angleDeg = 180 - ratio * 180;
  const angleRad = (angleDeg * Math.PI) / 180;

  // 3. 선의 두께(width: 7)를 고려하여 마커를 선 위에 안착시킴
  // 만약 아이콘이 선보다 너무 안쪽에 있다면 + 2~3 정도를 더해주세요.
  const offsetRadius = baseRadius;

  const posX = centerX + offsetRadius * Math.cos(angleRad);
  const posY = centerY - offsetRadius * Math.sin(angleRad);

  const markerSize = 24;

  chart.setOption(
    {
      graphic: [
        {
          id: 'score-marker',
          type: 'image',
          z: 100,
          // x, y는 이미지의 좌상단 기준이므로 markerSize의 절반을 빼서 중앙 정렬
          x: posX - markerSize / 2,
          y: posY - markerSize / 2,
          style: {
            image: facePath,
            width: markerSize,
            height: markerSize,
          },
        },
      ],
    },
    false,
  );
};

watch(
  () => isDarkMode.value,
  (newVal) => {
    console.log('watch: isDarkMode changed to', newVal);
    nextTick(() => {
      initChart();
    });
  },
);

onMounted(async () => {
  await nextTick();

  // 최초 테마 체크 + 차트 초기화
  checkTheme();
  initChart();

  // MutationObserver 수정 - p-dark 클래스 감지
  observer = new MutationObserver(() => {
    const wasDark = isDarkMode.value;
    checkTheme();

    if (wasDark !== isDarkMode.value) {
      console.log('🎨 Theme changed! p-dark mode:', isDarkMode.value);
    }

    nextTick(() => {
      initChart();
    });
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
  if (chart) {
    chart.resize();
    initChart(); // 리사이즈 시 마커 좌표 재계산
  }
};
</script>
