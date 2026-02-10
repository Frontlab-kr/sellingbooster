<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>성장스토리</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-story-view">
      <div class="sb-story-view__head">
        <div class="sb-story-view__thumb"></div>
        <div class="sb-story-view__name">
          <p>셀링부스터</p>
          <span>2026.02.14</span>
        </div>
        <div class="sb-story-view__menu">
          <Button variant="text" @click="menuToggle">
            <template #icon>
              <Icon name="sb:32-dotmenu" class="ico-32-dotmenu" />
            </template>
          </Button>
          <TieredMenu ref="menu" :model="menuItems" popup />
        </div>
      </div>

      <h6 class="sb-story-view__title">작은 시작에서, 꾸준한 성장까지</h6>
      <div class="sb-story-view__contents">
        <p>
          처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이
          많았고, <br />
          판매가 일어나지 않는 날엔 “내가 잘하고 있는 걸까?”라는 생각이 들기도
          했어요. <br />
          하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에
          귀 기울였습니다. <br />
          작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시
          도전할 수 있는 힘이 되었습니다.<br />
          지금도 완성형은 아니지만,셀러로서 성장하는 과정 자체가 값진 자산이
          되었다고 느낍니다.이 스토리가 같은 길을 걷고 있는 누군가에게 작은
          용기가 되었으면 합니다.<br />
        </p>
        <img src="https://picsum.photos/id/1/800/800" alt="" />
      </div>
      <div class="sb-story-view__foot">
        <Button size="small" variant="text">
          <Icon name="sb:24-like" class="ico-24-like" />
          <span class="p-button-label">9,000</span>
        </Button>
        <Button size="small" variant="text">
          <Icon name="sb:24-message" class="ico-24-message" />
          <span class="p-button-label">9,000</span>
        </Button>
        <Button size="small" variant="text">
          <Icon name="sb:24-share" class="ico-24-share" />
          <span class="p-button-label">9,000</span>
        </Button>
      </div>
    </div>
    <div class="sb-notice-view__button">
      <Button outlined>
        <Icon name="sb:24-back" class="ico-24-back" />
        <span class="p-button-label">목록으로</span>
      </Button>
    </div>
    <SbComment />
  </div>

  <Dialog v-model:visible="dialogReport" modal>
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">신고하기</h5>
      <StoryReport />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import StoryReport from './StoryReport.vue';

//dialog
const dialogReport = ref(false);

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '성장스토리' },
]);

//menu
const menu = ref();
const menuItems = ref([
  {
    label: '차단',
    icon: 'ico-24-block',
  },
  {
    label: '신고',
    icon: 'ico-24-report',
    command: () => {
      reportOpen();
    },
  },
  {
    label: '수정',
    icon: 'ico-24-edit',
  },
  {
    label: '삭제',
    icon: 'ico-24-trash',
  },
]);

const menuToggle = (event) => {
  menu.value.toggle(event);
};
const reportOpen = () => {
  dialogReport.value = true;
};
</script>
