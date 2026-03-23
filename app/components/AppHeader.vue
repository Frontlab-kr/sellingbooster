<template>
  <header class="sb-header" :class="{ 'sb-header--search': isSearchOpen }">
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
  </header>

  <div class="sb-snb">
    <NuxtLink to="/" class="sb-snb-logo">Selling Booster</NuxtLink>

    <div class="sb-snb-menu">
      <PanelMenu :model="menu01" v-model:expandedKeys="expandedKeys">
        <template #item="{ item, props }">
          <a
            v-if="item.route"
            class="p-panelmenu-header-link"
            :class="[
              {
                'has-children': item.items?.length > 0,
                'p-panelmenu-header-active': isActive(item.route),
              },
            ]"
            v-bind="props.action"
            @click.prevent="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
          </a>

          <a
            v-else
            class="p-panelmenu-header-link"
            v-bind="props.action"
            @click.stop.prevent="item.id === 'toggle-btn' ? toggleMenu() : null"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="getMenuIcon(item)" />
            </div>
            <span class="p-panelmenu-header-label">{{
              getMenuLabel(item)
            }}</span>
          </a>
        </template>
      </PanelMenu>
    </div>

    <div class="sb-snb-menu">
      <PanelMenu :model="menu02" v-model:expandedKeys="expandedKeys">
        <template #item="{ item, props }">
          <a
            v-if="item.route"
            class="p-panelmenu-header-link"
            :class="[
              {
                'has-children': item.items?.length > 0,
                'p-panelmenu-header-active': isActive(item.route),
              },
            ]"
            v-bind="props.action"
            @click.prevent="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
          </a>

          <a
            v-else
            class="p-panelmenu-header-link"
            v-bind="props.action"
            @click.stop.prevent="item.id === 'toggle-btn' ? toggleMenu() : null"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="getMenuIcon(item)" />
            </div>
            <span class="p-panelmenu-header-label">{{
              getMenuLabel(item)
            }}</span>
          </a>
        </template>
      </PanelMenu>
    </div>
  </div>

  <header class="sb-header-mo" :class="{ 'is-scrolled': isScrolled }">
    <div class="sb-header-mo-start">
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
      <Button variant="text">
        <template #icon>
          <IconSystemBellOn class="ico-system-bell-on" />
        </template>
      </Button>
      <Button variant="text">
        <template #icon>
          <IconSystemMenu class="ico-system-menu" />
        </template>
      </Button>
    </div>
  </header>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import IconSystemSearch from '@/assets/icons/system/search.svg?component';
import IconSystemModeDark from '@/assets/icons/system/mode-dark.svg?component';
import IconSystemModeLight from '@/assets/icons/system/mode-light.svg?component';
import IconSystemGlobe from '@/assets/icons/system/globe.svg?component';
import IconSystemBellOn from '@/assets/icons/system/bell-on.svg?component';

import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconSystemMenu from '@/assets/icons/system/menu.svg?component';

import IconSnbHome from '@/assets/icons/snb/home.svg?component';
import IconSnbDocument from '@/assets/icons/snb/document.svg?component';
import IconSnbStar from '@/assets/icons/snb/star.svg?component';
import IconSnbChart from '@/assets/icons/snb/chart.svg?component';
import IconSnbChat from '@/assets/icons/snb/chat.svg?component';
import IconSnbPlanner from '@/assets/icons/snb/planner.svg?component';

import IconSnbSetting from '@/assets/icons/snb/setting.svg?component';
import IconSnbLogout from '@/assets/icons/snb/logout.svg?component';
import IconSnbMenuClose from '@/assets/icons/snb/menu-close.svg?component';
import IconSnbMenuOpen from '@/assets/icons/snb/menu-open.svg?component';

/** 1. 상태 정의 (State) */
const isFolded = useState('isFolded', () => false);
const pageTitle = useState('pageTitle', () => '');
const isDark = ref(false);
const isScrolled = ref(false);
const expandedKeys = ref({});
const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.back();
};

const menu01 = ref([
  {
    key: 'dashboard',
    label: '대시보드',
    icon: IconSnbHome,
    route: '/dashboard',
  },
  {
    key: 'opportunity',
    label: '마켓 트렌드',
    icon: IconSnbDocument,
    route: '/1',
  },
  { key: 'execution', label: '판매 가속', icon: IconSnbStar, route: '/2' },
  { key: 'performance', label: '성장 리포트', icon: IconSnbChart, route: '/3' },
  { key: 'planner', label: '셀링 플래너', icon: IconSnbPlanner, route: '/3' },
  {
    key: 'community',
    label: '커뮤니티',
    icon: IconSnbChat,
    route: '/community/qna',
    items: [
      { label: 'Q&A', route: '/community/qna/' },
      { label: '공지사항', route: '/community/notice' },
      { label: 'FAQ', route: '/community/faq' },
      { label: '성장스토리', route: '/community/story' },
      { label: '자유게시판', route: '/community/board' },
      { label: '트랜드', route: '/community/treand' },
    ],
  },
]);

const menu02 = ref([
  { label: '설정/관리', icon: IconSnbSetting, route: '/setting' },
  { label: '로그아웃', icon: IconSnbLogout, route: '/logout' },
  { id: 'toggle-btn', label: '메뉴 닫기', icon: IconSnbMenuClose },
]);

const isSearchOpen = ref(false);

/** 2. 메뉴 및 네비게이션 로직 */
const toggleMenu = () => {
  isFolded.value = !isFolded.value;
};

const handleLinkClick = (event, item) => {
  const hasChildren = item.items?.length > 0;
  if (isFolded.value) {
    event.preventDefault();
    event.stopPropagation();
    if (item.route) router.push(item.route);
  } else {
    if (hasChildren) event.preventDefault();
    else if (item.route) router.push(item.route);
  }
};

const openActiveMenu = () => {
  const activeParent = menu01.value.find(
    (item) =>
      item.items && item.items.some((sub) => route.path.startsWith(sub.route)),
  );
  if (activeParent && activeParent.key) {
    expandedKeys.value = { [activeParent.key]: true };
  }
};

const updateTitle = (path) => {
  const allMenus = [...menu01.value, ...menu02.value];
  let targetLabel = '';
  for (const mainItem of allMenus) {
    if (mainItem.items) {
      const subItem = mainItem.items.find(
        (s) => s.route && path.startsWith(s.route),
      );
      if (subItem) {
        targetLabel = subItem.label;
        break;
      }
    }
    if (mainItem.route && path.startsWith(mainItem.route))
      targetLabel = mainItem.label;
  }
  pageTitle.value = targetLabel || '';
};

const getMenuIcon = (item) => {
  if (item.id === 'toggle-btn') {
    // 접혀있을 때(true)는 Open 아이콘, 펼쳐져있을 때(false)는 Close 아이콘
    return isFolded.value ? IconSnbMenuOpen : IconSnbMenuClose;
  }
  return item.icon;
};

const getMenuLabel = (item) => {
  if (item.id === 'toggle-btn') {
    // 접혀있을 때(true)는 '메뉴 열기', 펼쳐져있을 때(false)는 '메뉴 닫기'
    return isFolded.value ? '메뉴 열기' : '메뉴 닫기';
  }
  return item.label;
};

const isActive = (itemRoute) => itemRoute && route.path.startsWith(itemRoute);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

// 검색 실행 시 검색창을 닫고 싶다면 handleSearch에 추가
const onSearch = (value) => {
  console.log('Search:', value);
  isSearchOpen.value = false; // 검색 후 닫기 (선택 사항)
};

/** 3. UI 제어 및 테마 로직 */
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
/** 단축키 핸들러: F8 */
const handleKeyDown = (event) => {
  // F8 키를 눌렀을 때
  if (event.key === 'F8') {
    event.preventDefault(); // 기본 동작 방지 (대부분의 브라우저에서 비어있음)
    toggleMode();
  }
};
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

/** 4. 감시자 및 생명주기 관리 */
watch(isFolded, (newValue) => {
  if (newValue === true) expandedKeys.value = {};
  else openActiveMenu();
});

watch(
  () => route.path,
  (newPath) => updateTitle(newPath),
  { immediate: true },
);

onMounted(() => {
  const savedTheme = localStorage.getItem('sb-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true;
    updateTheme();
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleKeyDown);
  if (!isFolded.value) openActiveMenu();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeyDown);
});
</script>
