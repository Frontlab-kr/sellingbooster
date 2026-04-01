<template>
  <div class="sb-planner">
    <div class="sb-planner-head">
      <div class="sb-planner-head__title">
        <h5>판매 가속</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-planner-contents">
      <div class="sb-planner-contents-head">
        <h4>가격 조정으로 더 많은 판매 기회를 잡아보세요.</h4>
      </div>
      <ClientOnly>
        <timeline />
        <fullcalendar />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import fullcalendar from './components/fullcalendar.vue';
import timeline from './components/timeline.vue';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '셀링 플래너' },
  { label: '타임라인' },
]);
</script>
