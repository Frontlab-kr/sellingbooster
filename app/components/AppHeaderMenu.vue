<template>
  <div class="sb-header-menu">
    <div class="sb-header-search">
      <SbInput
        show-search
        @search="handleSearch"
        placeholder="검색어를 입력하세요."
        size="large"
      />
      <div class="sb-header-search__toggle">
        <Button rounded severity="white" @click="handleToggleSearch">
          <template #icon>
            <IconSystemSearch class="ico-system-search" />
          </template>
        </Button>
      </div>
    </div>
    <div class="sb-header-mode">
      <Button rounded severity="white" @click="toggleMode()">
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
          <button class="sb-header-language-list-item">
            <img
              :src="IconGonfalonUs"
              alt="smart store"
              class="ico-gonfalon-us"
            />
            <span class="p-button-label">ENG</span>
          </button>
          <button class="sb-header-language-list-item">
            <img
              :src="IconGonfalonCn"
              alt="smart store"
              class="ico-gonfalon-cn"
            />
            <span class="p-button-label">CHN</span>
          </button>
          <button class="sb-header-language-list-item">
            <img
              :src="IconGonfalonJp"
              alt="smart store"
              class="ico-gonfalon-jp"
            />
            <span class="p-button-label">JPN</span>
          </button>
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
            <strong>알림센터</strong>
            <Button variant="text">
              <template #icon>
                <IconSystemSetting class="ico-system-setting" />
              </template>
            </Button>
          </div>
          <div class="sb-header-notification-center-tab">
            <div class="sb-tab-circle">
              <Button label="전체" variant="text" class="active" />
              <Button label="공지" variant="text" />
              <Button label="시스템" variant="text" />
              <Button label="서비스" variant="text" />
            </div>
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
          <p>26.01.31 접속</p>
        </div>
      </button>
      <div class="sb-header-menu-layer sb-header-user-layer">
        <div class="sb-header-user-list">
          <NuxtLink to="/" class="sb-header-user-list-item">
            <IconSystemUserProfile class="ico-system-user-profile" />
            개인정보관리
          </NuxtLink>
          <NuxtLink to="/" class="sb-header-user-list-item">
            <IconSystemWreach class="ico-system-wreach" />
            셀러 정보 관리
          </NuxtLink>
          <NuxtLink to="/" class="sb-header-user-list-item">
            <IconSystemBellOff class="ico-system-bell-off" />
            알림 관리
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
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
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

//search
const props = defineProps({
  isSearchOpen: Boolean,
});

const emit = defineEmits(['update:isSearchOpen', 'search']);

const handleSearch = (value) => {
  emit('search', value);
};

const handleToggleSearch = () => {
  emit('update:isSearchOpen', !props.isSearchOpen);
};

//light, dark mode
const isDark = ref(false);
const route = useRoute();

const toggleMode = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('p-dark');
    localStorage.setItem('sb-theme', 'dark');
  } else {
    document.documentElement.classList.remove('p-dark');
    localStorage.setItem('sb-theme', 'light');
  }
};

const handleKeyDown = (event) => {
  if (event.key === 'F8') {
    event.preventDefault();
    toggleMode();
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('sb-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true;
    updateTheme();
  }

  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>
