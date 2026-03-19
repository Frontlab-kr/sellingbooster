<template>
  <div class="sb-chart-pie__chart">
    <v-chart class="chart" :option="chartOption" autoresize />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, CustomChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import VChart from 'vue-echarts';

use([CanvasRenderer, PieChart, CustomChart, TitleComponent, TooltipComponent]);

// 1. 부모 컴포넌트에서 props로 score 받아오기
const props = defineProps({
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

// 2. 받아온 props 사용
const TOTAL_SEGMENTS = 15;
const UNFILLED_COLOR = '#EAECF1';
const GAP_ANGLE = 1.5;

// 점수에 따른 그래프 색상 계산
const chartColor = computed(() => {
  if (props.score >= 80) return '#00B1BD'; // 좋음: 초록
  if (props.score >= 40) return '#F2C94C'; // 보통: 노랑
  return '#EB5757'; // 나쁨: 빨강
});

const chartOption = computed(() => {
  const data = [];
  const totalAngle = 180;

  const segmentAngle =
    (totalAngle - GAP_ANGLE * (TOTAL_SEGMENTS - 1)) / TOTAL_SEGMENTS;

  // 3. props.score를 사용하여 계산
  const filledSegments = Math.floor((props.score / 100) * TOTAL_SEGMENTS);

  for (let i = 0; i < TOTAL_SEGMENTS; i++) {
    const isFilled = i < filledSegments;
    data.push({
      itemStyle: {
        color: isFilled ? chartColor.value : UNFILLED_COLOR,
      },
    });
  }

  return {
    series: [
      {
        type: 'pie',
        startAngle: 180,
        endAngle: 0,
        clockwise: true,
        center: ['50%', '50%'],
        radius: ['60%', '100%'],
        label: { show: false },
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 3,
        },
        data: data.map((item) => ({
          value: segmentAngle,
          itemStyle: item.itemStyle,
        })),
      },
    ],
  };
});
</script>
