<template>
  <div
    :class="[
      'sb-chart-segment',
      className,
      { 'sb-chart-segment--icon': showIcon },
      { 'sb-chart-segment--large': processedData.length >= 4 },
    ]"
  >
    <div
      v-for="(item, index) in processedData"
      :key="`col-${index}`"
      :class="['sb-chart-segment-item', item.textClass]"
    >
      <div>
        <div class="sb-chart-segment-item__value">
          {{ item.value.toLocaleString() }}{{ unitText }}
        </div>
        <div v-if="showPercent" class="sb-chart-segment-item__percent">
          {{ item.percent }}%
        </div>
      </div>
      <div class="sb-chart-segment-item__bar">
        <span
          v-for="n in totalSegments"
          :key="`seg-${n}`"
          class="sb-chart-segment-item__segments"
          :class="{ active: isSegmentActive(item, n) }"
          :style="{
            transitionDelay: isSegmentActive(item, n)
              ? `${(totalSegments - n) * 0.03}s`
              : '0s',
          }"
        ></span>
      </div>

      <div class="sb-chart-segment-item__legend">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  chartData: {
    type: Array,
    required: true,
    default: () => [],
  },
  showPercent: {
    type: Boolean,
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  totalSegments: {
    type: Number,
    default: 20,
  },
  maxValue: {
    type: Number,
    default: 500,
  },
  unitText: {
    type: String,
    default: '건',
  },
  className: {
    type: String,
    default: '',
  },
});

const isSegmentActive = (item, n) => {
  return props.totalSegments - n + 1 <= item.filledCount;
};

const processedData = computed(() => {
  const classMap = {
    primaryColor: 'color-primary',
    successColor: 'color-success',
    secondaryColor: 'color-secondary',
    infoColor: 'color-info',
    warnColor: 'color-warn',
    dangerColor: 'color-danger',
    contrastColor: 'color-contrast',
  };

  const totalSum = props.chartData.reduce((acc, cur) => acc + cur.value, 0);

  return props.chartData.map((item) => {
    const percentage = totalSum > 0 ? (item.value / totalSum) * 100 : 0;

    return {
      ...item,
      textClass: classMap[item.color] || '',
      percent: percentage.toFixed(1),
      filledCount: Math.round(
        (item.value / props.maxValue) * props.totalSegments,
      ),
    };
  });
});
</script>
