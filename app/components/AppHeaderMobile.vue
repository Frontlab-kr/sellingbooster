<template>
  <header
    class="sb-header-mo"
    :class="{ 'sb-header-mo--search': isSearchOpen, 'is-scrolled': isScrolled }"
  >
    <div class="sb-header-mo-start">
      <NuxtLink to="/" class="sb-header-mo-logo">Selling Booster</NuxtLink>
      <Button variant="text" @click="goBack">
        <template #icon>
          <IconArrowAchevronLeft class="ico-arrow-achevron-left" />
        </template>
      </Button>
    </div>
    <div class="sb-header-mo-center">
      <div class="sb-header-mo__title">{{ pageTitle }}</div>
    </div>
    <div class="sb-header-mo-end">
      <div class="sb-header-mo-search">
        <div class="sb-header-mo-search-layer">
          <div class="sb-header-mo-search-layer__button">
            <Button variant="text" @click="toggleSearch">
              <template #icon>
                <IconSystemClose class="ico-system-close" />
              </template>
            </Button>
          </div>
          <SbInput
            show-search
            @search="onSearch"
            placeholder="검색어를 입력하세요."
          />
        </div>
        <div class="sb-header-mo-search__toggle">
          <Button variant="text" @click="toggleSearch">
            <template #icon>
              <IconSystemSearch class="ico-system-search" />
            </template>
          </Button>
        </div>
      </div>
      <Button variant="text" @click="toggleMobileMenu">
        <template #icon>
          <IconSystemMenu class="ico-system-menu" />
        </template>
      </Button>
    </div>
    <div class="sb-header-mo-dimmed" @click="toggleSearch"></div>
  </header>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import IconSystemSearch from '@/assets/icons/system/search.svg?component';
import IconSystemMenu from '@/assets/icons/system/menu.svg?component';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';

const pageTitle = useState('pageTitle', () => '');
const isScrolled = ref(false);
const router = useRouter();
const route = useRoute();
const isSearchOpen = ref(false);
const isMoMenuOpen = useState('isMoMenuOpen', () => false);

const goBack = () => {
  router.back();
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

const onSearch = (value) => {
  console.log('Search:', value);
  isSearchOpen.value = false;
};

const toggleMobileMenu = () => {
  isMoMenuOpen.value = !isMoMenuOpen.value;
  if (isMoMenuOpen.value) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

watch(
  () => route.path,
  () => {
    isSearchOpen.value = false;
    isMoMenuOpen.value = false;
  },
  { immediate: true },
);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
