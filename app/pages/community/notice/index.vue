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
      <SbSearchbar v-model="searchKeyword" placeholder="공지사항 검색" />
    </div>
    <div class="sb-notice">
      <div class="sb-notice-list">
        <NoticeItem
          v-for="(item, index) in noticeData"
          :key="index"
          :item="item"
          :search-text="searchKeyword"
        />
      </div>
      <div class="sb-notice-list-button">
        <Button severity="contrast" outlined>
          <span class="p-button-label">더보기(16/83)</span>
          <Icon24down class="ico-24-down" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NoticeItem from './item.vue';

import Icon24down from '@/assets/icons/24/down.svg?component';

const searchKeyword = ref('');

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '공지사항' },
]);

// 공지사항 데이터 리스트
const noticeData = ref([
  {
    status: 'danger',
    title: '셀링부스터 관계자 관련 피싱 주의 당부',
    date: '2026.01.14',
    attachment: false,
  },
  {
    status: 'default',
    title: '국가정보자원관리원 화재로 인한 일부 서비스 복구 완료 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    status: 'important',
    title: '셀링부스터 사칭 사이트에 대한 주의 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    status: 'technical',
    title: '네이버 로그인 기능 오류 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    status: 'etc',
    title: '알림 기능 오류 안내',
    date: '2026.01.14',
    attachment: false,
  },
  {
    status: 'danger',
    title: '셀링부스터 관계자 관련 피싱 주의 당부',
    date: '2026.01.14',
    attachment: false,
  },
  {
    status: 'important',
    title: '셀링부스터 사칭 사이트에 대한 주의 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    status: 'technical',
    title: '네이버 로그인 기능 오류 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    status: 'etc',
    title: '알림 기능 오류 안내',
    date: '2026.01.14',
    attachment: false,
  },
  {
    status: 'danger',
    title: '셀링부스터 관계자 관련 피싱 주의 당부',
    date: '2026.01.14',
    attachment: false,
  },
  {
    status: 'default',
    title: '국가정보자원관리원 화재로 인한 일부 서비스 복구 완료 안내',
    date: '2026.01.14',
    attachment: true,
  },
  {
    status: 'important',
    title: '셀링부스터 사칭 사이트에 대한 주의 안내',
    date: '2026.01.14',
    attachment: true,
  },
]);
</script>
