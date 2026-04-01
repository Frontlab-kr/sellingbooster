<template>
  <div :class="['sb-chart-segment', className]">
    <div
      v-for="(item, index) in processedData"
      :key="`col-${index}`"
      :class="['sb-chart-segment-item', item.textClass]"
    >
      <div class="sb-chart-segment-item__value">
        {{ item.value.toLocaleString() }}{{ unitText }}
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
    primaryColor: 'text-primary',
    secondaryColor: 'text-secondary',
    infoColor: 'text-info',
    warnColor: 'text-warn',
    dangerColor: 'text-danger',
  };

  return props.chartData.map((item) => ({
    ...item,
    textClass: classMap[item.color] || '', // 클래스가 없으면 빈 문자열
    filledCount: Math.round(
      (item.value / props.maxValue) * props.totalSegments,
    ),
  }));
});
</script>
