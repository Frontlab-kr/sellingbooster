<template>
  <header class="sb-header">
    <div class="sb-header-menu">
      <div class="sb-header-search">
        <Button rounded severity="white" size="large">
          <template #icon>
            <Icon name="sb:24-search" class="ico-24-search" />
          </template>
        </Button>
      </div>
      <div class="sb-header-language">
        <Button rounded severity="white" size="large">
          <template #icon>
            <Icon name="sb:24-globe" class="ico-24-globe" />
          </template>
        </Button>
      </div>
      <div class="sb-header-notification">
        <Button rounded severity="white" size="large">
          <template #icon>
            <Icon name="sb:24-bellon" class="ico-24-bellon" />
          </template>
        </Button>
      </div>
      <div class="sb-header-user">
        <div class="sb-header-user__thumb">
          <img src="../assets/icons/48/lv1.svg" alt="" />
          <strong>Lv.1</strong>
        </div>
        <div class="sb-header-user__text">
          <strong>셀링부스터</strong>
          <p>26.01.31 접속</p>
        </div>
      </div>
    </div>
  </header>

  <div class="sb-snb">
    <NuxtLink to="/" class="sb-snb-logo">Selling Booster</NuxtLink>

    <div class="sb-snb-menu">
      <PanelMenu :model="menu01">
        <template #item="{ item, props }">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            class="p-panelmenu-header-link"
            v-bind="props.action"
          >
            <span
              v-if="item.icon"
              :class="['p-menuitem-icon', item.icon]"
            ></span>
            <span class="p-panelmenu-header-label">
              {{ item.label }}
            </span>
          </NuxtLink>

          <a v-else class="p-panelmenu-header-link" v-bind="props.action">
            <span
              v-if="item.icon"
              :class="['p-menuitem-icon', item.icon]"
            ></span>
            <span class="p-panelmenu-header-label">
              {{ item.label }}
            </span>
          </a>
        </template>
      </PanelMenu>
    </div>

    <div class="sb-snb-menu">
      <PanelMenu :model="menu02">
        <template #item="{ item, props }">
          <NuxtLink
            v-if="item.route"
            :to="item.route"
            class="p-panelmenu-header-link"
            v-bind="props.action"
          >
            <span
              v-if="item.icon"
              :class="['p-menuitem-icon', item.icon]"
            ></span>
            <span class="p-panelmenu-header-label">
              {{ item.label }}
            </span>
          </NuxtLink>

          <a v-else class="p-panelmenu-header-link" v-bind="props.action">
            <span
              v-if="item.icon"
              :class="['p-menuitem-icon', item.icon]"
            ></span>
            <span class="p-panelmenu-header-label">
              {{ item.label }}
            </span>
          </a>
        </template>
      </PanelMenu>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menu01 = ref([
  {
    label: '대시보드',
    icon: 'sb-snb-home',
    route: '/dashboard',
  },
  {
    label: '기회 찾기',
    icon: 'sb-snb-document',
    items: [
      { label: '추천 기회', route: '/' },
      { label: '직접(검색) 탐색', route: '/' },
      { label: '관심 상품', route: '/' },
      { label: '관심 키워드', route: '/' },
    ],
  },
  {
    label: '바로 실행',
    icon: 'sb-snb-star',
    items: [
      { label: '가격 실행', route: '/' },
      { label: '프로모션 실행', route: '/' },
      { label: 'CS센터', route: '/' },
      { label: '리뷰 분석', route: '/' },
      { label: '상품 설명 생성', route: '/' },
    ],
  },
  {
    label: '성과 보기',
    icon: 'sb-snb-chart',
    items: [
      { label: '성과 요약', route: '/' },
      { label: '성장 인사이트', route: '/' },
      { label: '성장 히스토리', route: '/' },
    ],
  },
  {
    label: '커뮤니티',
    icon: 'sb-snb-chat',
    items: [
      { label: 'Q&A', route: '/community/Qna' },
      { label: '공지사항', route: '/community/Notice' },
      { label: 'FAQ', route: '/community/Faq' },
      { label: '성장스토리', route: '/community/Story' },
      { label: '트랜드', route: '/' },
    ],
  },
]);

const menu02 = ref([
  { label: '설정/관리', icon: 'sb-snb-setting', route: '/' },
  { label: '로그아웃', icon: 'sb-snb-logout', route: '/' },
  { label: '메뉴 닫기', icon: 'sb-snb-menuOpen' },
]);
</script>
<!-- 
<style scoped>
/* NuxtLink가 활성화될 때 부여되는 클래스를 통해 스타일링 */
:deep(.router-link-active) {
  background-color: rgba(0, 0, 0, 0.04); /* 활성화 배경 예시 */
  color: #000 !important;
  font-weight: 700;
}

/* 텍스트 색상 강제 적용 필요 시 */
:deep(.router-link-active .p-panelmenu-header-label),
:deep(.router-link-active .p-panelmenu-item-label) {
  color: var(--primary-color, #007bff);
}
</style> -->
