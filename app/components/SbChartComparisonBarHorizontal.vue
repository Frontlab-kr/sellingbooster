<template>
  <div class="sb-chart-comparisonbar-horizontal-wrap">
    <div class="sb-chart-comparisonbar-horizontal">
      <div
        v-for="(item, index) in data"
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
const props = defineProps({
  data: {
    type: Array,
  },
});
</script>
