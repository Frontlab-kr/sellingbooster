<template>
  <div ref="container" class="sb-chart-comparisonbar-horizontal-wrap">
    <div class="sb-chart-comparisonbar-horizontal">
      <div
        v-for="(item, index) in animatedData"
        :key="index"
        :class="['sb-chart-comparisonbar-horizontal-item', item.colorClass]"
      >
        <div class="sb-chart-comparisonbar-horizontal-item__title">
          {{ item.title }}
        </div>
        <ProgressBar :value="item.value"></ProgressBar>
        <div class="sb-chart-comparisonbar-horizontal-item__text">
          {{ item.count.toLocaleString() }}건
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const container = ref(null);
const animatedData = ref(props.data.map((item) => ({ ...item, value: 0 })));

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 1. 요소가 화면에 교차(노출)되었는지 확인
        if (entry.isIntersecting) {
          // 2. 실제 값으로 업데이트하여 애니메이션 트리거
          animatedData.value = animatedData.value.map((item, index) => ({
            ...item,
            value: props.data[index].value,
          }));

          // 3. 한 번 애니메이션이 실행된 후에는 관찰을 중단 (선택 사항)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // 요소가 20% 정도 보였을 때 실행
    },
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>
