<template>
  <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let myChart = null;

const initChart = () => {
  if (!chartRef.value) return;

  myChart = echarts.init(chartRef.value);

  const data = [15, 15, 18, 12];
  const months = ['1월', '2월', '3월', '4월'];

  const option = {
    backgroundColor: '#ffffff',
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: months,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#6e7079',
        fontSize: 14,
        margin: 20,
      },
    },
    yAxis: {
      type: 'value',
      show: false, // Y축 숨김
    },
    series: [
      {
        name: '비율',
        type: 'bar',
        barWidth: 60,
        data: data.map((value, index) => {
          // 4월(마지막 데이터)만 강조 색상 적용
          const isLast = index === 3;
          return {
            value: value,
            itemStyle: {
              // 막대 그라데이션 설정
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: isLast ? '#00ced1' : '#e0f7fa' },
                {
                  offset: 1,
                  color: isLast
                    ? 'rgba(0, 206, 209, 0.1)'
                    : 'rgba(224, 247, 250, 0.1)',
                },
              ]),
              // 상단 둥글게 (Top-left, Top-right, Bottom-right, Bottom-left)
              borderRadius: [40, 40, 0, 0],
            },
            label: {
              show: true,
              position: 'top',
              distance: 15,
              formatter: '{c}%',
              fontSize: 16,
              fontWeight: 'bold',
              color: isLast ? '#00ced1' : '#6e7079',
            },
          };
        }),
        // 상단 흰색 원 포인트 구현을 위한 마크포인트
        markPoint: {
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#fff',
            borderColor: 'inherit', // 막대 색상을 따라감
            borderWidth: 3,
          },
          data: data.map((value, index) => ({
            coord: [index, value],
            symbolOffset: [0, 0],
          })),
          label: { show: false },
        },
      },
    ],
  };

  myChart.setOption(option);
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', () => myChart?.resize());
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => myChart?.resize());
  myChart?.dispose();
});
</script>
