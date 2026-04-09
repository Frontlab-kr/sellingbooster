<template>
  <div class="sb-planner">
    <div class="sb-planner-head">
      <div class="sb-planner-head__title">
        <h5>타임라인</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-planner-contents">
      <div class="sb-planner-contents-head">
        <h4>
          판매, 정산, 광고, 세금등<br />
          해야할 일들을 놓치지 마시고 미리 챙겨보세요.
        </h4>
      </div>
      <div class="sb-planner-body">
        <div class="sb-planner-body-tab">
          <div class="sb-tab">
            <Button label="타임라인" variant="text" class="active" />
            <NuxtLink to="/planner/calendar">
              <Button label="캘린더" variant="text" />
            </NuxtLink>
            <!-- <NuxtLink to="/planner/memo">
              <Button label="메모" variant="text" />
            </NuxtLink> -->
          </div>
        </div>
        <ClientOnly>
          <AppTimeline />
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
import AppTimeline from './components/AppTimeline.vue';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '셀링 플래너' },
  { label: '타임라인' },
]);
</script>
