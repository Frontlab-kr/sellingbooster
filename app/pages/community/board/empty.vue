<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>자유게시판</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <NuxtLink to="/community/board/write" class="sb-ai">
          <div class="sb-ai__tooltip">
            <p>셀러들 모여라! 가겹게 수다 나눠요!</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-community-menu">
      <div></div>
      <SbInput
        v-model="searchKeyword"
        show-search
        @search="onSearch"
        placeholder="자유게시판 검색"
      />
    </div>
    <div class="sb-nodata">
      <IconIllustrationFrown class="ico-illustration-frown" />
      <div class="sb-nodata__text">
        <p>
          앗, 검색된 내용이 없어요.<br />
          다른 키워드로 다시 검색해볼까요?
        </p>
      </div>
      <div class="sb-nodata__button">
        <Button severity="contrast" outlined>
          <IconSystemRefresh class="ico-system-refresh" />
          <span class="p-button-label">검색 재설정</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemRefresh from '@/assets/icons/system/refresh.svg?component';
import IconIllustrationFrown from '@/assets/icons/illustration/frown.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '자유게시판' },
]);
</script>
