<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>자유게시판</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-board-view">
      <div class="sb-board-view__head">
        <div class="sb-board-view__thumb">
          <IconProfileDefault class="ico-profile-default" />
        </div>
        <div class="sb-board-view__name">
          <p>셀링부스터</p>
          <span>2026.02.14</span>
        </div>
        <div class="sb-board-view__menu">
          <SbMenu :items="menuItems" />
        </div>
      </div>

      <h4 class="sb-board-view__title">
        재고 운영 기준 다들 어떻게 잡고 계세요?
      </h4>
      <div class="sb-board-view__contents">
        <p>
          잘 나가던 상품이 갑자기 멈추거나, 반대로 예상보다 빠르게 소진되는
          상황이 반복되다 보니<br />
          재고를 어느 선에서 운영하는 게 적절한지 늘 어렵게 느껴집니다.특히
          시즌이나 트렌드 영향을 크게 받는 상품은 타이밍을 조금만 놓쳐도
          애매하게 재고가 남거나, <br />
          품절로 판매 흐름을 놓치는 경우가 생겨 기준 잡기가 쉽지 않네요.<br />
          소량 테스트 후 반응을 보며 늘리는 방식이 안전할지, 아니면 초기부터
          어느 정도 물량을 확보해두는 편이 나을지 실제 운영하시는 분들의 판단
          기준이 궁금합니다.
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
      <div class="sb-board-view__foot">
        <SbSocial
          :visible-buttons="['like', 'comment', 'share']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>
    </div>
    <div class="sb-board-view__button">
      <NuxtLink to="/community/board/">
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
      <Report />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Report from './report.vue';
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
  { label: '자유게시판' },
]);

const item = ref({
  likeCount: '100',
  commentCount: '9,000',
  shareCount: '9,000',
});

const menuItems = ref([
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
