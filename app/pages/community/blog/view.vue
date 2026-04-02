<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>블로그</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-blog-view">
      <div class="sb-blog-view__head">
        <div class="sb-blog-view__thumb">
          <IconProfileDefault class="ico-profile-default" />
        </div>
        <div class="sb-blog-view__name">
          <p>셀링부스터</p>
          <span>2026.02.14</span>
        </div>
      </div>
      <div class="sb-blog-view__info">
        <div class="sb-blog-view__badge">
          <Badge value="NEW" severity="warn"></Badge>
          <Badge value="셀링트렌드 " severity="success"></Badge>
        </div>
        <SbInfo
          :visible-buttons="['read', 'thema']"
          :read-time="'12분 분량'"
          :themaText="'3월 시즌'"
          class="sb-info--small"
        />
      </div>
      <div class="sb-blog-view__title">
        <h6>작은 시작에서, 꾸준한 성장까지</h6>
      </div>
      <div class="sb-blog-view__contents">
        처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이 많았고,
        <br />
        판매가 일어나지 않는 날엔 “내가 잘하고 있는 걸까?”라는 생각이 들기도
        했어요. <br />
        하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에 귀
        기울였습니다. <br />
        작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시
        도전할 수 있는 힘이 되었습니다.<br />
        지금도 완성형은 아니지만,<br />
        셀러로서 성장하는 과정 자체가 값진 자산이 되었다고 느낍니다.<br />
        이 스토리가 같은 길을 걷고 있는 누군가에게 작은 용기가 되었으면 합니다.
        <br /><br />
        <img src="https://picsum.photos/id/1/800/800" alt="" />
      </div>
      <div class="sb-attachment">
        <NuxtLink
          to="https://picsum.photos/id/1/800/800"
          target="_blank"
          class="sb-attachment-item"
        >
          <p>
            파일 첨부했을 경우 첨부파일 정보가 노출.jpg파일 첨부했을 경우
            첨부파일 정보가 노출.jpg파일 첨부했을 경우 첨부파일 정보가
            노출.jpg파일 첨부했을 경우 첨부파일 정보가 노출.jpg
          </p>

          <div class="sb-attachment-item__size">13MB</div>
          <IconSystemDownload class="ico-system-download" />
        </NuxtLink>
      </div>
      <div class="sb-blog-view__foot">
        <SbSocial
          :visible-buttons="['like', 'comment', 'share']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>
      <div class="sb-chip">
        <div class="sb-chip-list">
          <Chip label="초보셀러 처음 시작하는 방법" />
          <Chip label="스마트스토어 처음 운영하는 법" />
          <Chip label="쇼핑몰 창업준비 과정 정리" />
          <Chip label="초보셀러 매출 올리는 방법" />
          <Chip label="상품선정 어떻게 해야할까" />
        </div>
      </div>
    </div>
    <products />
    <contents />
    <div class="sb-blog-view__button">
      <NuxtLink to="/community/blog/">
        <Button severity="primary" outlined>
          <IconArrowLeft class="ico-arrow-left" />
          <span class="p-button-label">목록으로</span>
        </Button>
      </NuxtLink>
    </div>

    <SbComment />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SbInfo from '@/pages/community/components/SbInfo.vue';
import SbSocial from '@/pages/community/components/SbSocial.vue';
import SbComment from '@/pages/community/components/SbComment.vue';
import contents from '@/pages/community/blog/contents';
import products from '@/pages/community/blog/products';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconSystemDownload from '@/assets/icons/system/download.svg?component';
import IconProfileDefault from '@/assets/icons/profile/default.svg?component';

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '블로그' },
]);

//
const item = ref({
  likeCount: '0',
  commentCount: '0',
  shareCount: '0',
});
</script>
