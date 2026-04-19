<template>
  <div
    ref="containerRef"
    :class="[
      'sb-chart-segment',
      className,
      { 'sb-chart-segment--icon': showIcon },
    ]"
  >
    <div
      v-for="(item, index) in animatedData"
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
              ? `${(totalSegments - n) * 0.08}s`
              : '0s',
          }"
        ></span>
      </div>

      <div class="sb-chart-segment-item__legend" v-if="item.name">
        {{ item.name }}
      </div>

      <div v-if="item.badgeValue" class="sb-chart-segment-item__badge">
        <Badge :value="item.badgeValue" :severity="item.badgeSeverity"></Badge>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';

const props = defineProps({
  chartData: { type: Array, required: true, default: () => [] },
  showPercent: { type: Boolean, default: false },
  showIcon: { type: Boolean, default: false },
  totalSegments: { type: Number, default: 20 },
  maxValue: { type: Number, default: 500 },
  unitText: { type: String, default: '건' },
  className: { type: String, default: '' },
});

const containerRef = ref(null);
const isVisible = ref(false); // 화면 노출 여부 상태
let observer = null;

const isSegmentActive = (item, n) => {
  return props.totalSegments - n + 1 <= item.filledCount;
};

// 화면 노출 상태에 따라 데이터 가공
const animatedData = computed(() => {
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
    const severity = item.color ? item.color.replace('Color', '') : 'info';

    // 핵심: 화면에 보이지 않을 때는 filledCount를 0으로 고정
    const actualFilledCount = Math.round(
      (item.value / props.maxValue) * props.totalSegments,
    );
    const filledCount = isVisible.value ? actualFilledCount : 0;

    return {
      ...item,
      textClass: classMap[item.color] || '',
      badgeSeverity: severity,
      percent: percentage.toFixed(1),
      filledCount: filledCount,
    };
  });
});

onMounted(async () => {
  await nextTick();

  const options = {
    threshold: 0.5, // 절반 이상 보일 때 애니메이션 시작
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // 한 번 실행 후 감시 종료
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (containerRef.value) {
    observer.observe(containerRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
