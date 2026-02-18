<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>공지사항</h4>
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
      <SbSearchbar v-model="searchKeyword" />
    </div>
    <div class="sb-notice">
      <div class="sb-notice-list">
        <NoticeItem
          v-for="(item, index) in noticeData"
          :key="index"
          :notice="item"
          :search-text="searchKeyword"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NoticeItem from './NoticeItem.vue';

const searchKeyword = ref('오류');

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '공지사항' },
]);

// 공지사항 데이터 리스트
const noticeData = ref([
  {
    badgeColor: 'bg_9aa3af',
    badgeText: '기술',
    title: '네이버 로그인 기능 오류 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    badgeColor: 'bg_eaecf1',
    badgeText: '기타',
    title: '알림 기능 오류 안내',
    date: '2026.01.14',
    attachment: false,
  },
  {
    badgeColor: 'bg_9aa3af',
    badgeText: '기술',
    title: '네이버 로그인 기능 오류 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    badgeColor: 'bg_eaecf1',
    badgeText: '기타',
    title: '알림 기능 오류 안내',
    date: '2026.01.14',
    attachment: false,
  },
]);
</script>
