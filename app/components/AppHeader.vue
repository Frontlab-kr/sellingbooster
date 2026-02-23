<template>
  <header class="sb-header">
    <div class="sb-header-menu">
      <Button label="다크모드" @click="toggleDarkMode()" />
      <div class="sb-header-search">
        <Button rounded severity="white">
          <template #icon>
            <Icon24search class="ico-24-search" />
          </template>
        </Button>
      </div>
      <div class="sb-header-language">
        <Button rounded severity="white">
          <template #icon>
            <Icon24globe class="ico-24-globe" />
          </template>
        </Button>
      </div>
      <div class="sb-header-notification">
        <Button rounded severity="white">
          <template #icon>
            <Icon24bellOn class="ico-24-bell-on" />
          </template>
        </Button>
      </div>
      <div class="sb-header-user">
        <div class="sb-header-user__thumb">
          <img src="./../assets/icons/48/lv1.svg" alt="" />
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
      <PanelMenu :model="menu02">
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
      <Button variant="text">
        <template #icon>
          <Icon24headerBack class="ico-24-header-back" />
        </template>
      </Button>
    </div>
    <div class="sb-header-mo-center">
      <div class="sb-header-mo__title">{{ pageTitle }}</div>
    </div>
    <div class="sb-header-mo-end">
      <Button variant="text">
        <template #icon>
          <Icon24bellOn class="ico-24-bell-on" />
        </template>
      </Button>
      <Button variant="text">
        <template #icon>
          <Icon24menu class="ico-24-menu" />
        </template>
      </Button>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import Icon24search from '@/assets/icons/24/search.svg?component';
import Icon24globe from '@/assets/icons/24/globe.svg?component';
import Icon24bellOn from '@/assets/icons/24/bell-on.svg?component';

import Icon24headerBack from '@/assets/icons/24/header-back.svg?component';
import Icon24menu from '@/assets/icons/24/header-menu.svg?component';

import IconSnbHome from '@/assets/icons/snb/home.svg?component';
import IconSnbDocument from '@/assets/icons/snb/document.svg?component';
import IconSnbStar from '@/assets/icons/snb/star.svg?component';
import IconSnbChart from '@/assets/icons/snb/chart.svg?component';
import IconSnbChat from '@/assets/icons/snb/chat.svg?component';

import IconSnbSetting from '@/assets/icons/snb/setting.svg?component';
import IconSnbLogout from '@/assets/icons/snb/logout.svg?component';
import IconSnbMenuClose from '@/assets/icons/snb/menu-close.svg?component';

const isFolded = useState('isFolded', () => false);
const router = useRouter();
const route = useRoute();

const pageTitle = useState('pageTitle', () => 'Selling Booster');

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const handleLinkClick = (event, item) => {
  const hasChildren = item.items?.length > 0;

  if (isFolded.value) {
    event.preventDefault();
    event.stopPropagation();
    if (item.route) router.push(item.route);
  } else {
    if (hasChildren) {
      event.preventDefault();
    } else {
      if (item.route) router.push(item.route);
    }
  }
};

const handleGlobalKeyDown = (event) => {
  // 입력 중일 때는 무시
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  // 1. Alt + B : 메뉴 접기/펴기
  if (event.altKey && event.code === 'KeyB') {
    event.preventDefault();
    toggleMenu();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeyDown);
  window.addEventListener('scroll', handleScroll);
  if (!isFolded.value) {
    openActiveMenu();
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeyDown);
  window.removeEventListener('scroll', handleScroll);
});

const expandedKeys = ref({});

watch(isFolded, (newValue) => {
  if (newValue === true) {
    expandedKeys.value = {};
  } else {
    openActiveMenu();
  }
});

const openActiveMenu = () => {
  const activeParent = menu01.value.find(
    (item) =>
      item.items && item.items.some((sub) => route.path.startsWith(sub.route)),
  );

  if (activeParent && activeParent.key) {
    expandedKeys.value = { [activeParent.key]: true };
  }
};

const isActive = (itemRoute) => {
  if (!itemRoute) return false;
  return route.path.startsWith(itemRoute);
};

const toggleMenu = () => {
  isFolded.value = !isFolded.value;
};

const getMenuIcon = (item) => {
  if (item.id === 'toggle-btn') {
    // 문자열이 아닌 컴포넌트 객체를 반환
    return isFolded.value ? IconSnbMenuOpen : IconSnbMenuClose;
  }
  return item.icon;
};

const getMenuLabel = (item) => {
  if (item.id === 'toggle-btn') {
    return isFolded.value ? '메뉴 열기' : '메뉴 닫기';
  }
  return item.label;
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
    label: '기회 찾기',
    icon: IconSnbDocument,
    route: '/1',
  },
  {
    key: 'execution',
    label: '바로 실행',
    icon: IconSnbStar,
    route: '/2',
  },
  { key: 'performance', label: '성과 보기', icon: IconSnbChart, route: '/3' },
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
      { label: '트랜드', route: '/community/treand' },
    ],
  },
]);

const menu02 = ref([
  { label: '설정/관리', icon: IconSnbSetting, route: '/setting' },
  { label: '로그아웃', icon: IconSnbLogout, route: '/logout' },
  { id: 'toggle-btn', label: '메뉴 닫기', icon: IconSnbMenuClose },
]);

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

    if (mainItem.route && path.startsWith(mainItem.route)) {
      targetLabel = mainItem.label;
    }
  }

  pageTitle.value = targetLabel || 'Selling Booster';
};

watch(
  () => route.path,
  (newPath) => {
    updateTitle(newPath);
  },
  { immediate: true },
);

function toggleDarkMode() {
  document.documentElement.classList.toggle('p-dark');
}
// 키보드 핸들러 함수
const handleKeyDown = (event) => {
  // Ctrl + D (또는 Mac의 경우 Cmd + D) 감지
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'd') {
    event.preventDefault(); // 브라우저 즐겨찾기 방지
    toggleDarkMode();
  }
};

onMounted(() => {
  // 컴포넌트가 마운트될 때 전역 키 이벤트 등록
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  // 컴포넌트가 사라질 때 이벤트 리스너 제거 (중요!)
  window.removeEventListener('keydown', handleKeyDown);
});
</script>
