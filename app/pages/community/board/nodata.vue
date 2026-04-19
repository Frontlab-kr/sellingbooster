<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>자유게시판</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <NuxtLink to="/community/board/write" class="sb-ai">
          <div class="sb-ai__tooltip">
            <p>셀러들 모여라! 가볍게 수다 나눠요!</p>
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
      <IconIllustrationSmile class="ico-illustration-smile" />
      <div class="sb-nodata__text">
        <p>
          텅 빈 게시판이 셀러님을 기다려요!<br />
          첫 글의 주인공이 되어 이곳을 활기차게 채워주실래요?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

const searchKeyword = ref('');

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '자유게시판' },
]);
</script>
