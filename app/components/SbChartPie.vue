<template>
  <div class="sb-chart-pie" :style="{ width: size, height: size }">
    <v-chart class="chart" :option="chartOption" autoresize />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GaugeChart } from 'echarts/charts';
import VChart from 'vue-echarts';

// SVG 아이콘 Import
import DotHigh from '@/assets/icons/chart/dot-high.svg';
import DotNormal from '@/assets/icons/chart/dot-normal.svg';
import DotLow from '@/assets/icons/chart/dot-low.svg';

use([CanvasRenderer, GaugeChart]);

const props = defineProps({
  score: { type: Number, default: 0 },
  label: { type: String, default: '' },
  status: { type: String, default: 'normal' }, // high, normal, low
  size: { type: String, default: '400px' },
  totalScore: { type: Number, default: 100 },
});

// 상태별 설정 매핑
const statusConfig = computed(() => {
  const configs = {
    high: {
      color: '#03AB67',
      text: '최고',
      icon: DotHigh,
    },
    normal: {
      color: '#52A3F5',
      text: '보통',
      icon: DotNormal,
    },
    low: {
      color: '#FFB22E',
      text: '낮음',
      icon: DotLow,
    },
  };
  return configs[props.status] || configs.normal;
});

const chartOption = computed(() => {
  const { color, text, icon } = statusConfig.value;

  return {
    series: [
      // 1. 메인 게이지 및 중앙 텍스트
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '65%'],
        radius: '100%',
        z: 2,
        max: props.totalScore,
        pointer: { show: false },
        axisLine: {
          lineStyle: {
            width: 14,
            color: [[1, '#EAECF1']],
          },
        },
        progress: {
          show: true,
          roundCap: true,
          width: 14,
          itemStyle: { color: color },
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        data: [{ value: props.score }],
        detail: {
          offsetCenter: [0, '-20%'],
          formatter: () => {
            return `{label|${props.label}} {status|${text}}\n{score|${props.score}}{unit|점}`;
          },
          rich: {
            label: {
              fontSize: 26,
              color: '#666',
              fontWeight: '500',
              padding: [0, 5, 0, 0],
            },
            status: {
              fontSize: 26,
              color: color,
              fontWeight: 'bold',
            },
            score: {
              fontSize: 54,
              color: '#1A1A1A',
              fontWeight: 'bold',
              padding: [20, 0, 0, 0],
            },
            unit: {
              fontSize: 26,
              color: '#1A1A1A',
              fontWeight: 'bold',
              padding: [20, 0, 0, 2],
            },
          },
        },
      },
      // 2. 이모지(상태 도트) 포인터
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '65%'],
        radius: '100%',
        z: 3,
        pointer: {
          show: true,
          icon: `image://${icon}`,
          length: '100%',
          width: 22,
          offsetCenter: [0, 0],
        },
        progress: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value: props.score }],
      },
    ],
  };
});
</script>
