<template>
  <div class="sb-chart-gauge">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import * as echarts from 'echarts';

import facePrimary from '@/assets/icons/chart/face-primary.svg?url';
import faceSecondary from '@/assets/icons/chart/face-secondary.svg?url';
import faceInfo from '@/assets/icons/chart/face-info.svg?url';
import faceWarn from '@/assets/icons/chart/face-warn.svg?url';
import faceDanger from '@/assets/icons/chart/face-danger.svg?url';

import facePrimaryDark from '@/assets/icons/chart/face-primary-dark.svg?url';
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
        primary: facePrimaryDark,
        secondary: faceSecondaryDark,
        info: faceInfoDark,
        warn: faceWarnDark,
        danger: faceDangerDark,
      }
    : {
        primary: facePrimary,
        secondary: faceSecondary,
        info: faceInfo,
        warn: faceWarn,
        danger: faceDanger,
      };

  if (p >= 80)
    return {
      text: '매우 좋음',
      colorVar: '--color-primary',
      face: icons.primary,
    };
  if (p >= 60)
    return {
      text: '좋음',
      colorVar: '--color-success',
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
      text: '나쁨',
      colorVar: '--color-warn',
      face: icons.warn,
    };
  return {
    text: '매우 나쁨',
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
  const labelColor01 = getCssVar('--chart-gauge-label-color01');
  const labelColor02 = getCssVar('--chart-gauge-label-color02');

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
          offsetCenter: [0, '-33%'],
          formatter: (value) => {
            return `{label|${props.label}} {status|${statusInfo.text}}\n{score|${value}}{unit|${props.unitText}}`;
          },
          rich: {
            label: {
              fontSize: 14,
              color: labelColor01,
              fontWeight: 'normal',
            },
            status: {
              fontSize: 14,
              color: activeColor,
              fontWeight: 'bold',
              padding: [0, 0, 8, 0],
            },
            score: {
              fontSize: 16,
              color: labelColor02,
              fontWeight: 'bold',
            },
            unit: {
              fontSize: 16,
              color: labelColor02,
              padding: [0, 0, 0, 2],
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
  console.log('=== updateMarker ===');
  console.log('isDarkMode:', isDarkMode.value);
  console.log(
    'facePath preview:',
    facePath ? facePath.substring(0, 80) + '...' : 'null',
  );

  if (!chart || !facePath) {
    console.warn('chart or facePath is missing');
    return;
  }

  const width = chart.getWidth();
  const height = chart.getHeight();

  const centerX = width * 0.5;
  const centerY = height * 0.45;
  const baseRadius = Math.min(width, height) * 0.9 * 0.5;

  const ratio = Math.max(0, Math.min(props.score / (props.totalScore || 1), 1));
  const angleDeg = 180 - ratio * 180;
  const angleRad = (angleDeg * Math.PI) / 180;

  const posX = centerX + baseRadius * Math.cos(angleRad);
  const posY = centerY - baseRadius * Math.sin(angleRad);

  const markerSize = 24;

  // ★★★ 핵심: 기존 graphic 완전 제거 + 강제 refresh ★★★
  chart.setOption({ graphic: [] }, false);

  // 약간의 딜레이를 주어 ECharts 내부 캐시가 해제되도록 함
  nextTick(() => {
    chart.setOption(
      {
        graphic: [
          {
            type: 'image',
            id: 'score-marker',
            z: 100,
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
  });
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
