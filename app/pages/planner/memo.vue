<template>
  <div class="sb-planner">
    <div class="sb-planner-head">
      <div class="sb-planner-head__title">
        <h5>메모</h5>
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
            <NuxtLink to="/planner/calendar">
              <Button label="캘린더" variant="text" />
            </NuxtLink>

            <Button label="메모" variant="text" class="active" />
          </div>
        </div>
        <ClientOnly>
          <AppMemo />
        </ClientOnly>
        <div class="sb-planner-body-button">
          <div class="pc">
            <Button
              label="메모 등록"
              severity="primary"
              @click="openMemoWrite"
            />
          </div>
          <div class="mo">
            <Button
              label="메모 등록"
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
    <div class="p-dialog-inner">
      <h6 class="p-dialog-title">잊으면 안되는 개인 일정을 메모하세요.</h6>
      <MemoWrite />
    </div>
  </Dialog>
</template>

<script setup>
import Schedule from './components/Schedule.vue';
import AppMemo from './components/AppMemo.vue';
import MemoWrite from './components/MemoWrite.vue';

const dialogMemoWrite = ref(false);

const openMemoWrite = () => {
  dialogMemoWrite.value = true;
};

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '셀링 플래너' },
  { label: '메모' },
]);
</script>
