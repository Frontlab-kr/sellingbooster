<template>
  <Card class="sb-dashboard-spc">
    <template #title>
      <h5>현재 매출 기록</h5>
    </template>
    <template #content>
      <div class="sb-dashboard-spc-text">
        <dl>
          <dt></dt>
          <dd>
            <p>12,680,760원</p>
          </dd>
          <dd>Lv.2 목표까지 <strong>22,319,240원</strong> 남았어요!</dd>
        </dl>
      </div>
      <div class="sb-dashboard-spc-button"></div>
      <div class="sb-dashboard-spc-chart">
        <v-chart :option="chartOption" autoresize />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GaugeChart } from 'echarts/charts'; // Pie 대신 Gauge 사용
import VChart from 'vue-echarts';

use([CanvasRenderer, GaugeChart]);

const rate = 36; // 달성률 데이터

const chartOption = ref({
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '95%', // 차트 크기 꽉 차게
      pointer: { show: false }, // 바늘 숨김
      progress: {
        show: true,
        overlap: false,
        roundCap: true, // 끝부분을 둥글게
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#fff',
          // 그라데이션 설정
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#ffffff' }, // 시작색 (연한 오렌지)
              { offset: 1, color: '#FF4D00' }, // 끝색 (진한 오렌지)
            ],
          },
        },
      },
      axisLine: {
        lineStyle: {
          width: 20, // 게이지 두께
          color: [[1, '#fff']], // 배경 트랙 색상
        },
      },
      splitLine: { show: false }, // 굵은 구분선 숨김
      axisTick: {
        distance: -14, // 안쪽 눈금 위치
        length: 10,
        lineStyle: {
          color: '#9AA3AF',
          width: 1,
        },
      },
      axisLabel: { show: false }, // 숫자 라벨 숨김
      data: [{ value: rate }],
      detail: {
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, '5%'], // 중앙 위치 조정
        fontWeight: '700',
        formatter: (value) => {
          return `{label|달성률}\n{value|${value}}{unit|%}`;
        },
        rich: {
          label: {
            fontSize: 18,
            color: '#64748b',
            padding: [0, 0, 10, 0],
          },
          value: {
            fontSize: 60,
            color: '#475569',
            fontWeight: 'bold',
          },
          unit: {
            fontSize: 24,
            color: '#475569',
            padding: [0, 0, 10, 5],
          },
        },
      },
    },
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      z: 3, // 이 숫자가 높을수록 위로 올라옵니다!
      pointer: {
        show: true,
        icon: 'circle',
        length: '238%', // 오렌지 바 두께 중심에 맞게 조절
        width: 12,
        itemStyle: {
          color: '#fff',
        },
      },
      // 포인터 외의 모든 요소는 숨김 처리
      progress: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [{ value: rate }],
    },
  ],
});
</script>
