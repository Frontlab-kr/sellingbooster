<template>
  <header class="sb-header" :class="{ 'sb-header--search': isSearchOpen }">
    <NuxtLink to="/" class="sb-header-logo"> Selling Booster </NuxtLink>
    <div class="sb-header-gnb">
      <NuxtLink to="/trend/recommend" class="sb-header-gnb-item"
        >마켓트렌드</NuxtLink
      >
      <NuxtLink to="/sales/price" class="sb-header-gnb-item"
        >판매 가속</NuxtLink
      >
      <NuxtLink to="/report/summary" class="sb-header-gnb-item"
        >성장 리포트</NuxtLink
      >
      <NuxtLink to="/planner/timeline" class="sb-header-gnb-item"
        >셀링 플래너</NuxtLink
      >
      <NuxtLink to="/community/qna" class="sb-header-gnb-item"
        >커뮤니티</NuxtLink
      >
    </div>
    <div class="sb-header-menu">
      <div class="sb-header-search">
        <SbInput
          show-search
          @search="onSearch"
          placeholder="검색어를 입력하세요."
          size="large"
        />
        <div class="sb-header-search__toggle">
          <Button rounded severity="white" @click="toggleSearch">
            <template #icon>
              <IconSystemSearch class="ico-system-search" />
            </template>
          </Button>
        </div>
      </div>
      <div class="sb-header-mode">
        <Button rounded severity="white" @click="toggleMode">
          <template #icon>
            <IconSystemModeLight v-if="isDark" class="ico-system-mode-light" />
            <IconSystemModeDark v-else class="ico-system-mode-dark" />
          </template>
        </Button>
      </div>
      <div class="sb-header-language">
        <Button rounded severity="white">
          <template #icon>
            <IconSystemGlobe class="ico-system-globe" />
          </template>
        </Button>
        <div class="sb-header-menu-layer sb-header-language-layer">
          <div class="sb-header-language-list">
            <NuxtLink to="/" class="sb-header-language-list-item">
              <img
                :src="IconGonfalonUs"
                alt="smart store"
                class="ico-gonfalon-us"
              />
              <span class="p-button-label">ENG</span>
            </NuxtLink>
            <NuxtLink to="/" class="sb-header-language-list-item">
              <img
                :src="IconGonfalonCn"
                alt="smart store"
                class="ico-gonfalon-cn"
              />
              <span class="p-button-label">CHN</span>
            </NuxtLink>
            <NuxtLink to="/" class="sb-header-language-list-item">
              <img
                :src="IconGonfalonJp"
                alt="smart store"
                class="ico-gonfalon-jp"
              />
              <span class="p-button-label">JPN</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="sb-header-notification">
        <Button rounded severity="white">
          <template #icon>
            <IconSystemBellOn class="ico-system-bell-on" />
          </template>
        </Button>
        <div class="sb-header-menu-layer sb-header-notification-layer">
          <div class="sb-header-notification-center">
            <div class="sb-header-notification-center-head">
              <strong>알림함</strong>
              <Button variant="text" @click="controls.openMarketing">
                <template #icon>
                  <IconSystemSetting class="ico-system-setting" />
                </template>
              </Button>
            </div>
            <div class="sb-header-notification-center-tab">
              <div class="sb-tab-circle">
                <Button label="전체" variant="text" class="active" />
                <Button label="시스템" variant="text" />
                <Button label="공지" variant="text" />
                <Button label="서비스" variant="text" />
                <Button label="긴급" variant="text" />
                <Button label="중요" variant="text" />
              </div>
            </div>
            <div class="sb-header-notification-center-text">
              <p>최근 7일간의 알림</p>
            </div>
            <div class="sb-header-notification-center-list" v-scroll-end>
              <div class="sb-header-notification-center-list-scroll">
                <NuxtLink
                  to="/"
                  class="sb-header-notification-center-list-item"
                  v-for="n in 10"
                >
                  <div class="sb-header-notification-center-list-item__head">
                    <Badge value="공지" severity="warn"></Badge>
                    <!-- <Badge value="서비스" severity="secondary"></Badge>
                  <Badge value="시스템" severity="contrast"></Badge> -->
                    <p>2026.02.01</p>
                  </div>
                  <div class="sb-header-notification-center-list-item__title">
                    셀링부스터님은 1인 사업자로 2025년 2기 부가가치세 확정신고를
                    1월 26일까지 하셔야 해요.셀링부스터님은 1인 사업자로 2025년
                    2기 부가가치세 확정신고를 1월 26일까지 하셔야 해요.
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="sb-header-notification-center-button">
              <Button variant="text">
                <span class="p-button-label">알람 더보기</span>
                <IconArrowAchevronRight class="ico-arrow-achevron-right" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-header-user">
        <button class="sb-header-user-button">
          <div class="sb-header-user__thumb">
            <IconProfileBadgeLevel1Small />
          </div>
          <div class="sb-header-user__text">
            <strong>셀링부스터</strong>
            <p><strong>Lv.1</strong> Visitor</p>
          </div>
        </button>
        <div class="sb-header-menu-layer sb-header-user-layer">
          <div class="sb-header-user-list">
            <NuxtLink to="/setting/account/" class="sb-header-user-list-item">
              <IconSystemUserProfile class="ico-system-user-profile" />
              개인정보관리
            </NuxtLink>
            <NuxtLink to="/" class="sb-header-user-list-item">
              <IconSystemWreach class="ico-system-wreach" />
              셀러 정보 관리
            </NuxtLink>
            <NuxtLink to="/" class="sb-header-user-list-item">
              <IconSystemManagement class="ico-system-management" />
              팀/권한 관리
            </NuxtLink>
            <NuxtLink to="/" class="sb-header-user-list-item">
              <IconSystemBookmark class="ico-system-bookmark" />
              구독 관리
            </NuxtLink>
            <NuxtLink to="/" class="sb-header-user-list-item">
              <IconSystemExit class="ico-system-exit" />
              로그아웃
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { inject } from 'vue';
import { ref, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/useTheme';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconSystemSearch from '@/assets/icons/system/search.svg?component';
import IconSystemModeDark from '@/assets/icons/system/mode-dark.svg?component';
import IconSystemModeLight from '@/assets/icons/system/mode-light.svg?component';
import IconSystemGlobe from '@/assets/icons/system/globe.svg?component';
import IconSystemBellOn from '@/assets/icons/system/bell-on.svg?component';
import IconProfileBadgeLevel1Small from '@/assets/icons/profile/badge-level1-small.svg';
import IconSystemUserProfile from '@/assets/icons/system/user-profile.svg?component';
import IconSystemWreach from '@/assets/icons/system/wreach.svg?component';
import IconSystemBellOff from '@/assets/icons/system/bell-off.svg?component';
import IconSystemManagement from '@/assets/icons/system/management.svg?component';
import IconSystemBookmark from '@/assets/icons/system/bookmark.svg?component';
import IconSystemExit from '@/assets/icons/system/exit.svg?component';
import IconSystemSetting from '@/assets/icons/system/setting.svg?component';
import IconGonfalonKr from '@/assets/icons/gonfalon/kr.png';
import IconGonfalonJp from '@/assets/icons/gonfalon/jp.png';
import IconGonfalonUs from '@/assets/icons/gonfalon/us.png';
import IconGonfalonCn from '@/assets/icons/gonfalon/cn.png';

const controls = inject('dialogControls');

// theme
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const { toggleMode } = themeStore;

// search
const isSearchOpen = ref(false);

// 검색 토글
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

// 검색 실행
const onSearch = (value) => {
  console.log('검색어:', value);
  // 검색 후 검색창 자동으로 닫기
  isSearchOpen.value = false;
};

// ==================== 페이지 제목 자동 설정 ====================
const pageTitle = useState('pageTitle', () => '');

const updateTitle = async () => {
  if (process.client) {
    await nextTick();
    await nextTick();

    const selectors = [
      '.sb-trend-head__title h5',
      '.sb-sales-head__title h5',
      '.sb-report-head__title h5',
      '.sb-planner-head__title h5',
      '.sb-community-head__title h5',
    ];

    let foundText = '';

    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (el && el.textContent?.trim()) {
        foundText = el.textContent.trim();
        break;
      }
    }

    pageTitle.value = foundText;
  }
};

// 페이지 이동 시 검색창 닫기 + 제목 업데이트
const route = useRoute();

watch(
  () => route.path,
  () => {
    updateTitle();
    isSearchOpen.value = false; // 페이지 이동하면 검색창 닫기
  },
  { immediate: true },
);
</script>
