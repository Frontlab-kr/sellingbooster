<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>FAQ</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-community-menu">
      <div class="sb-tab">
        <Button label="전체(0)" variant="text" class="active" />
        <Button label="사용방법" variant="text" />
        <Button label="가입방법" variant="text" />
        <Button label="기능소개" variant="text" />
      </div>
      <SbInput
        v-model="searchKeyword"
        show-search
        @search="onSearch"
        placeholder="FAQ 검색"
      />
    </div>
    <div class="sb-nodata">
      <IconIllustrationSmile class="ico-illustration-smile" />
      <div class="sb-nodata__text">
        <p>
          궁금하신 내용을<br class="mo" />
          준비하고 있습니다.
        </p>
      </div>
      <div class="sb-nodata__button">
        <Button severity="contrast" outlined>
          <span class="p-button-label">문의하기</span>
          <IconArrowUpRight class="ico-arrow-up-right" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'FAQ' },
]);
</script>
