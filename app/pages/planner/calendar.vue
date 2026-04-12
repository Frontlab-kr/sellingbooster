<template>
  <div class="sb-planner">
    <div class="sb-planner-head">
      <div class="sb-planner-head__title">
        <h5>캘린더</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-planner-contents">
      <div class="sb-planner-contents-head">
        <div class="pc">
          <h4>
            판매, 정산, 광고, 세금등<br />
            해야할 일들을 놓치지 마시고 미리 챙겨보세요.
          </h4>
        </div>
        <div class="mo">
          <h5>
            판매, 정산, 광고, 세금등 해야할 일들을<br />
            놓치지 마시고 미리 챙겨보세요.
          </h5>
        </div>
      </div>
      <div class="sb-planner-body">
        <div class="sb-planner-body-tab">
          <div class="sb-tab">
            <NuxtLink to="/planner/timeline">
              <Button label="타임라인" variant="text" />
            </NuxtLink>
            <Button label="캘린더" variant="text" class="active" />
            <NuxtLink to="/planner/memo">
              <Button label="메모" variant="text" />
            </NuxtLink>
          </div>
        </div>
        <ClientOnly>
          <AppCalendar />
        </ClientOnly>
        <div class="sb-planner-body-button">
          <Button label="메모 등록" severity="primary" />
        </div>
      </div>
      <Schedule />
    </div>
  </div>
</template>

<script setup>
import Schedule from './components/Schedule.vue';
import AppCalendar from './components/AppCalendar.vue';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '셀링 플래너' },
  { label: '캘린더' },
]);
</script>
