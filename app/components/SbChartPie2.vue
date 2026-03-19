<template>
  <div class="sb-chart-pie">
    <v-chart class="chart" :option="chartOption" autoresize />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GaugeChart } from 'echarts/charts';
import VChart from 'vue-echarts';

use([CanvasRenderer, GaugeChart]);

const props = defineProps({
  // 데이터 관련
  score: { type: Number, default: 61 },
  totalScore: { type: Number, default: 100 },
  statusText: { type: String, default: '좋음' },

  // 색상 관련
  mainColor: { type: String, default: '#6466FA' }, // 메인 게이지 & 센터 포인트 색상
  subColor: { type: String, default: '#7060F3' }, // 상단 상태 텍스트 색상
  trackColor: { type: String, default: '#EAECF1' }, // 배경 트랙 색상
  pointerBorderColor: { type: String, default: 'rgba(100, 102, 250, 0.30)' }, // 투명 보더 색상

  // 텍스트 유닛 관련
  unitText: { type: String, default: '점' },
});

const chartOption = computed(() => {
  return {
    series: [
      // 1. 투명 보더 포인터 (가장 뒤)
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '50%'],
        radius: '100%',
        z: 2,
        pointer: {
          show: true,
          icon: 'circle',
          length: '200%',
          width: 24, // 보더 포함 크기
          itemStyle: {
            color: props.pointerBorderColor,
          },
        },
        progress: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: { show: false },
        data: [{ value: props.score }],
      },
      // 2. 메인 게이지 바 및 중앙 텍스트 (중간 레이어)
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '50%'],
        radius: '100%',
        z: 1,
        max: props.totalScore, // 전체 점수 설정
        pointer: { show: false },
        axisLine: {
          lineStyle: {
            width: 12,
            color: [[1, props.trackColor]],
          },
        },
        progress: {
          show: true,
          roundCap: true,
          width: 8,
          itemStyle: {
            color: props.mainColor,
          },
        },
        splitLine: { show: false },
        axisTick: {
          distance: 6,
          length: 3,
          lineStyle: { color: '#9AA3AF', width: 1 },
        },
        axisLabel: { show: false },
        data: [{ value: props.score }],
        detail: {
          offsetCenter: [0, '-45%'],
          formatter: (value) => {
            return `{status|${props.statusText}}\n{score|${value}}{unit|${props.unitText}} {sep|/} {total|${props.totalScore}${props.unitText}}`;
          },
          rich: {
            status: {
              fontSize: 34,
              color: props.subColor,
              fontWeight: 'bold',
              padding: [0, 0, 15, 0],
            },
            score: { fontSize: 48, color: '#1A1A1A', fontWeight: 'bold' },
            unit: { fontSize: 22, color: '#1A1A1A', padding: [0, 0, 8, 2] },
            sep: { fontSize: 22, color: '#D1D5DB', padding: [0, 8, 8, 8] },
            total: { fontSize: 22, color: '#9AA3AF', padding: [0, 0, 8, 0] },
          },
        },
      },
      // 3. 안쪽 포인트 (가장 앞)
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '50%'],
        radius: '100%',
        z: 3,
        pointer: {
          show: true,
          icon: 'circle',
          length: '200%',
          width: 12,
          itemStyle: {
            color: props.mainColor,
          },
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

<style scoped>
.sb-chart-pie {
  position: relative;
  margin: 20px auto;
  width: 400px;
  height: 400px;
}
.chart {
  width: 100%;
  height: 100%;
}
</style>
