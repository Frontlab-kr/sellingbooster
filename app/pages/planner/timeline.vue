<template>
  <div class="sb-planner">
    <div class="sb-planner-head">
      <div class="sb-planner-head__title">
        <h5>셀링 플래너</h5>
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
            <Button label="타임라인" variant="text" class="active" />
            <NuxtLink to="/planner/calendar">
              <Button label="캘린더" variant="text" />
            </NuxtLink>
            <NuxtLink to="/planner/memo">
              <Button label="내 일정" variant="text" />
            </NuxtLink>
          </div>
        </div>
        <ClientOnly>
          <AppTimeline @request-open="openMemoWrite" />
        </ClientOnly>
        <div class="sb-planner-body-button">
          <div class="pc">
            <Button
              label="내 일정 등록"
              severity="primary"
              @click="openMemoWrite"
            />
          </div>
          <div class="mo">
            <Button
              label="내 일정 등록"
              severity="primary"
              size="large"
              @click="openMemoWrite"
            />
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  </div>

  <Dialog v-model:visible="dialogMemoWrite" modal>
    <MemoWrite />
  </Dialog>
</template>

<script setup>
import Schedule from './components/Schedule.vue';
import AppTimeline from './components/AppTimeline.vue';
import MemoWrite from './components/MemoWrite.vue';

const dialogMemoWrite = ref(false);

const openMemoWrite = () => {
  dialogMemoWrite.value = true;
};

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '셀링 플래너' },
  { label: '타임라인' },
]);
</script>
