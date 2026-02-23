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
        <div class="sb-story-view__thumb">
          <IconProfileDefault class="ico-profile-default" />
        </div>
        <div class="sb-story-view__name">
          <p>셀링부스터</p>
          <span>2026.02.14</span>
        </div>
        <div class="sb-story-view__menu">
          <SbMenu :items="storyMenuItems" />
        </div>
      </div>

      <h4 class="sb-story-view__title">작은 시작에서, 꾸준한 성장까지</h4>
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
          용기가 되었으면 합니다.
        </p>
        <br />
        <img src="https://picsum.photos/id/1/800/800" alt="" />
      </div>
      <div class="sb-attachment">
        <NuxtLink to="" class="sb-attachment-item">
          <p>
            파일 첨부했을 경우 첨부파일 정보가 노출.jpg파일 첨부했을 경우
            첨부파일 정보가 노출.jpg파일 첨부했을 경우 첨부파일 정보가
            노출.jpg파일 첨부했을 경우 첨부파일 정보가 노출.jpg
          </p>

          <div class="sb-attachment-item__size">13MB</div>
          <Icon24download class="ico-24-download" />
        </NuxtLink>
      </div>
      <div class="sb-story-view__foot">
        <SbSocial
          :visible-buttons="['like', 'comment', 'share']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>
    </div>
    <div class="sb-story-view__button">
      <NuxtLink to="/community/story/">
        <Button severity="primary" size="large">
          <Icon24back class="ico-24-back" />
          <span class="p-button-label">목록으로</span>
        </Button>
      </NuxtLink>
    </div>
    <SbComment />
  </div>

  <Dialog v-model:visible="dialogReport" modal class="p-dialog-sm">
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">신고하기</h5>
      <StoryReport />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import StoryReport from './report.vue';

import Icon24back from '@/assets/icons/24/back.svg?component';
import Icon24download from '@/assets/icons/24/download.svg?component';

import Icon24edit from '@/assets/icons/24/edit.svg?component';
import Icon24trash from '@/assets/icons/24/trash.svg?component';
import Icon24block from '@/assets/icons/24/block.svg?component';
import Icon24report from '@/assets/icons/24/report.svg?component';
import IconProfileDefault from '@/assets/icons/profile/default.svg?component';

//dialog
const dialogReport = ref(false);

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '성장스토리' },
]);

const item = ref({
  likeCount: '100',
  commentCount: '9,000',
  shareCount: '9,000',
});

const storyMenuItems = ref([
  {
    label: '차단',
    icon: Icon24block,
    class: 'p-tieredmenu-item-link-danger',
  },
  {
    label: '신고',
    icon: Icon24report,
    class: 'p-tieredmenu-item-link-danger',
    command: () => {
      reportOpen();
    },
  },
  {
    label: '수정',
    icon: Icon24edit,
  },
  {
    label: '삭제',
    icon: Icon24trash,
  },
]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
