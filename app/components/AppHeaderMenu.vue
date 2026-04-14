<template>
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
    </div>
    <div class="sb-header-notification">
      <Button rounded severity="white">
        <template #icon>
          <IconSystemBellOn class="ico-system-bell-on" />
        </template>
      </Button>
    </div>
    <NuxtLink to="/" class="sb-header-user">
      <div class="sb-header-user__thumb">
        <img
          src="./../assets/icons/profile/lv1.png"
          alt=""
          class="ico-profile-lv"
        />
      </div>
      <div class="sb-header-user__text">
        <strong>셀링부스터</strong>
        <p>26.01.31 접속</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import IconSystemSearch from '@/assets/icons/system/search.svg?component';
import IconSystemModeDark from '@/assets/icons/system/mode-dark.svg?component';
import IconSystemModeLight from '@/assets/icons/system/mode-light.svg?component';
import IconSystemGlobe from '@/assets/icons/system/globe.svg?component';
import IconSystemBellOn from '@/assets/icons/system/bell-on.svg?component';

const isDark = ref(false);
const route = useRoute();
const isSearchOpen = defineModel('isSearchOpen', { default: false });

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

const onSearch = (value) => {
  console.log('Search:', value);
  isSearchOpen.value = false;
};

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

watch(
  () => route.path,
  (newPath) => {
    isSearchOpen.value = false;
  },
  { immediate: true },
);

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
