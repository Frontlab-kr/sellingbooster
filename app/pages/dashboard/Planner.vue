<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>오늘(2026.04.06)의 플래너 체크하세요.</h5>
      <div class="sb-dashboard-card-head-menu">
        <NuxtLink to="/">
          <Button variant="text" severity="white">
            <template #icon>
              <IconArrowUpRight class="ico-arrow-up-right" />
            </template>
          </Button>
        </NuxtLink>
        <SbMenu :items="menuItems" />
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-dashboard-planner-list" v-scroll-end>
        <div class="sb-dashboard-planner-scroll">
          <NuxtLink to="/" class="sb-dashboard-planner-item" v-for="n in 3">
            <div class="sb-dashboard-planner-item__title">
              <p>
                부가세신고일자 부가세 신고필 제목 입력 글자수는
                30자부가세신고일자 부가세 신고필 제목 입력 글자수는
                30자부가세신고일자 부가세 신고필 제목 입력 글자수는 30자
              </p>
            </div>
            <div class="sb-dashboard-planner-item__text">
              스마트스토어 키워드 광고종료 내용 영역의 최대 입력 글자수는 공백
              포함해서 50자로 제안스마트스토어 키워드 광고종료 내용 영역의 최대
              입력 글자수는 공백 포함해서 50자로 제안스마트스토어 키워드
              광고종료 내용 영역의 최대 입력 글자수는 공백 포함해서 50자로 제안
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//menu
const emit = defineEmits(['edit-widget']);
const menuItems = ref([
  {
    label: '편집',
    icon: IconSystemEdit,
    command: () => {
      emit('edit-widget');
    },
  },
]);
</script>
