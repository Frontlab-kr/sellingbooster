<template>
  <header class="sb-header">
    <div class="sb-header-menu">
      <div class="sb-header-search"></div>
      <div class="sb-header-language"></div>
      <div class="sb-header-notification"></div>
      <div class="sb-header-user"></div>
      header
    </div>
  </header>
  <div class="sb-snb">
    <NuxtLink to="" class="sb-snb-logo">Selling Booster</NuxtLink>
    <div class="sb-snb-menu">
      <PanelMenu :model="menu01" />
    </div>
    <div class="sb-snb-menu">
      <PanelMenu :model="menu02" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menu01 = ref([
  {
    label: '대시보드',
    icon: 'sb-snb-home',
    items: [
      {
        label: '2depth',
      },
    ],
  },
  {
    label: '기회 찾기',
    icon: 'sb-snb-document',
  },
  {
    label: '바로 실행',
    icon: 'sb-snb-star',
  },
  {
    label: '성과 보기',
    icon: 'sb-snb-chart',
  },
  {
    label: '커뮤니티',
    icon: 'sb-snb-chat',
    items: [
      {
        label: 'Q&A',
      },
      {
        label: '공지사항',
      },
      {
        label: 'FAQ',
      },
      {
        label: '성장 스토리',
      },
      {
        label: '트랜드',
      },
    ],
  },
]);
const menu02 = ref([
  {
    label: '설정/관리',
    icon: 'sb-snb-setting',
  },
  {
    label: '로그아웃',
    icon: 'sb-snb-logout',
  },
  {
    label: '메뉴 닫기',
    icon: 'sb-snb-menuOpen',
  },
]);
</script>
