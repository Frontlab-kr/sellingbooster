<template>
  <div class="sb-chart-line">
    <div ref="chartRef" class="echart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let chart = null;
let observer = null;

const customFontFamily =
  "'Pretendard JP Variable', 'Pretendard JP', 'Pretendard', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', 'PingFang TC', 'Noto Sans TC', sans-serif";

// 1. 실시간으로 CSS 변수를 읽어와 ECharts 옵션을 반환하는 함수
const getRuntimeOption = () => {
  if (typeof window === 'undefined') return {};

  const style = window.getComputedStyle(document.documentElement);

  // 변수 추출 및 기본값(Fallback) 설정
  const chartBackground = style.getPropertyValue('--chart-background').trim();
  const chartPrimary = style.getPropertyValue('--chart-line-primary').trim();
  const chartLineTooltipBackground = style
    .getPropertyValue('--chart-line-tooltip-background')
    .trim();
  const chartLinexAxisColor = style
    .getPropertyValue('--chart-line-xAxis-color')
    .trim();
  const chartLineyAxisColor = style
    .getPropertyValue('--chart-line-yAxis-color')
    .trim();
  const chartLineBorderColor = style
    .getPropertyValue('--chart-line-border-color')
    .trim();

  // 그라데이션 변수
  const chartLineMainGradientStart = style
    .getPropertyValue('--chart-line-main-gradient-start')
    .trim();
  const chartLineMainGradientEnd = style
    .getPropertyValue('--chart-line-main-gradient-end')
    .trim();
  const chartLineBgGradientStart = style
    .getPropertyValue('--chart-line-bg-gradient-start')
    .trim();
  const chartLineBgGradientEnd = style
    .getPropertyValue('--chart-line-bg-gradient-end')
    .trim();

  return {
    backgroundColor: chartBackground,
    color: [
      chartPrimary,
      style.getPropertyValue('--chart-line-success').trim(),
      style.getPropertyValue('--chart-line-info').trim(),
      style.getPropertyValue('--chart-line-warn').trim(),
      style.getPropertyValue('--chart-line-danger').trim(),
    ],
    tooltip: {
      backgroundColor: chartLineTooltipBackground,
      axisPointer: {
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: chartLineBgGradientEnd },
            { offset: 1, color: chartLineBgGradientStart },
          ]),
        },
      },
    },
    xAxis: {
      axisLabel: { color: chartLinexAxisColor },
    },
    yAxis: {
      splitLine: { lineStyle: { color: chartLineBorderColor } },
      axisLabel: { color: chartLineyAxisColor },
    },
    series: [
      {
        name: '유산균',
        lineStyle: { color: chartPrimary },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: chartLineMainGradientStart },
            { offset: 1, color: chartLineMainGradientEnd },
          ]),
        },
      },
    ],
  };
};

onMounted(async () => {
  // DOM 부착 보장
  await nextTick();

  if (chartRef.value) {
    // 중복 초기화 방지
    if (chart) chart.dispose();

    chart = echarts.init(chartRef.value);

    // 기본 레이아웃 옵션
    const baseOption = {
      textStyle: { fontFamily: customFontFamily },
      grid: {
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        borderWidth: 0,
        padding: [8, 16],
        extraCssText:
          'border-radius: 20px; box-shadow: var(--chart-line-tooltip-boxshadow);',

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
          let html = `<div class="sb-chart-line-tooltip">`;
          html += `<div class="sb-chart-line-tooltip__title">25년 ${params[0].name}</div>`;
          html += `<ul>`;
          params.forEach((item) => {
            html += `
                <li>
                  <p>
                    <span style="background-color:${item.color};"></span>
                    <strong class="text-${item.color}">${item.seriesName}</strong>
                  </p>
                  <span>${item.value}회</span>
                </li>
              `;
          });
          html += `</ul>`;
          return html;
        },
        axisPointer: {
          type: 'line',
          z: 0,
          lineStyle: { width: 28, type: 'solid' },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { margin: 15, fontSize: 12 },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 900,
        interval: 100,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { lineStyle: { type: 'dashed' } },
        axisLabel: { margin: 34, fontSize: 12 },
      },
      series: [
        {
          name: '유산균',
          data: [100, 280, 290, 480, 460, 520, 350, 680, 810, 480, 630, 530],
          type: 'line',
          smooth: true,
          symbol: 'none',
          zIndex: 10,
        },
        {
          name: '가루 유산균',
          data: [150, 150, 180, 260, 250, 200, 360, 350, 480, 390, 350, 180],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 2, type: 'dashed' },
        },
        {
          name: '고함량 유산균',
          data: [110, 130, 250, 430, 420, 460, 280, 530, 620, 410, 560, 480],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 2, type: 'dashed' },
        },
        {
          name: '어린이 유산균',
          data: [110, 120, 140, 160, 210, 240, 160, 310, 410, 310, 280, 220],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 2, type: 'dashed' },
        },
        {
          name: '임산부 유산균',
          data: [100, 100, 120, 150, 180, 190, 160, 250, 340, 260, 240, 230],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 2, type: 'dashed' },
        },
      ],
    };

    chart.setOption(baseOption);
    chart.setOption(getRuntimeOption());

    // 다크모드 감지 (html 클래스 감시)
    observer = new MutationObserver(() => {
      chart.setOption(getRuntimeOption());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (observer) observer.disconnect();
  if (chart) chart.dispose();
});

const handleResize = () => {
  chart && chart.resize();
};
</script>
