<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>공지사항</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-community-menu">
      <div class="sb-tab">
        <Button label="전체(132)" variant="text" class="active" />
        <Button label="서비스" variant="text" />
        <Button label="업데이트" variant="text" />
        <Button label="이벤트" variant="text" />
        <Button label="작업" variant="text" />
      </div>
      <SbInput v-model="searchKeyword" show-search @search="onSearch" />
    </div>
    <div class="sb-notice">
      <div class="sb-notice-list">
        <NoticeItem
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          :search-text="searchKeyword"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NoticeItem from './item.vue';

const searchKeyword = ref('오류');

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '공지사항' },
]);

// data
const list = ref([
  {
    badge: { value: '긴급', severity: 'danger' },
    title: '네이버 로그인 기능 오류 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    badge: { value: '기본', severity: 'secondary' },
    title: '알림 기능 오류 안내',
    date: '2026.01.14',
    attachment: false,
  },
  {
    badge: { value: '중요', severity: 'warn' },
    title: '네이버 로그인 기능 오류 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    badge: { value: '기술', severity: 'info' },
    title: '알림 기능 오류 안내',
    date: '2026.01.14',
    attachment: false,
  },
]);
</script>
