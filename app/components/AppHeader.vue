<template>
  <header class="sb-header" :class="{ 'sb-header--search': isSearchOpen }">
    <AppHeaderMenu v-model:isSearchOpen="isSearchOpen" />
  </header>

  <div class="sb-snb">
    <NuxtLink to="/" class="sb-snb-logo">Selling Booster</NuxtLink>

    <div class="sb-snb-menu">
      <PanelMenu :model="menu01" v-model:expandedKeys="expandedKeys">
        <template #item="{ item, props }">
          <a
            v-if="item.items && item.items.length > 0"
            class="p-panelmenu-header-link"
            :class="[
              {
                'has-children': item.items?.length > 0,
                'p-panelmenu-header-active': isActive(item.route),
              },
            ]"
            v-bind="props.action"
            @click.stop.prevent="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
          </a>

          <a
            v-else-if="item.route"
            class="p-panelmenu-header-link"
            :class="{ 'p-panelmenu-header-active': isActive(item.route) }"
            v-bind="props.action"
            @click="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
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

  <header
    class="sb-header-mo"
    :class="{ 'sb-header-mo--search': isSearchOpen, 'is-scrolled': isScrolled }"
  >
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
      <!-- <Button rounded severity="white" @click="toggleMode()">
        <template #icon>
          <IconSystemModeLight v-if="isDark" class="ico-system-mode-light" />
          <IconSystemModeDark v-else class="ico-system-mode-dark" />
        </template>
      </Button> -->
      <!-- <Button variant="text">
        <template #icon>
          <IconSystemBellOn class="ico-system-bell-on" />
        </template>
      </Button> -->
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
      <Button variant="text">
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
import IconSystemClose from '@/assets/icons/system/close.svg?component';

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
    route: '/trend/recommend',
    items: [
      { label: '추천 기회', route: '/trend/recommend' },
      { label: '키워드 분석', route: '/trend/keyword' },
      { label: '상품 분석', route: '/trend/product' },
      { label: '분석 결과', route: '/trend/analysis' },
    ],
  },
  {
    key: 'execution',
    label: '판매 가속',
    icon: IconSnbStar,
    route: '/sales',
    items: [
      { label: '가격 실행', route: '/sales/price' },
      { label: 'CS 센터', route: '/sales/cs' },
      { label: '상품명 점검', route: '/sales/product' },
    ],
  },
  {
    key: 'performance',
    label: '성과 리포트',
    icon: IconSnbChart,
    route: '/report',
    items: [
      { label: '성과 요약', route: '/report/summary' },
      { label: '성과 분석', route: '/report/analyze' },
      { label: '성과 히스토리', route: '/report/history' },
    ],
  },
  {
    key: 'planner',
    label: '셀링 플래너',
    icon: IconSnbPlanner,
    route: '/planner/timeline',
    items: [
      { label: '타임라인', route: '/planner/timeline' },
      { label: '캘린더', route: '/planner/calendar' },
      { label: '메모', route: '/planner/memo' },
    ],
  },
  {
    key: 'community',
    label: '커뮤니티',
    icon: IconSnbChat,
    route: '/community/qna',
    items: [
      { label: 'Q&A', route: '/community/qna' },
      { label: '공지사항', route: '/community/notice' },
      { label: 'FAQ', route: '/community/faq' },
      { label: '성장 스토리', route: '/community/story' },
      { label: '자유 게시판', route: '/community/board' },
      { label: 'K-trend', route: '/community/k-trend' },
      { label: '블로그', route: '/community/blog' },
    ],
  },
]);

const menu02 = ref([
  { label: '설정/관리', icon: IconSnbSetting, route: '/setting' },
  { label: '로그아웃', icon: IconSnbLogout, route: '/logout' },
  { id: 'toggle-btn', label: '메뉴 닫기', icon: IconSnbMenuClose },
]);

const isSearchOpen = ref(false);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

const onSearch = (value) => {
  console.log('Search:', value);
  isSearchOpen.value = false;
};

/** 2. 메뉴 및 네비게이션 로직 */
const toggleMenu = () => {
  isFolded.value = !isFolded.value;
};

const handleLinkClick = (event, item) => {
  const hasChildren = item.items?.length > 0;

  if (isFolded.value) {
    if (hasChildren) {
      isFolded.value = false;
      expandedKeys.value = { [item.key]: true };
      return;
    }
    if (item.route) router.push(item.route);
    return;
  }

  if (hasChildren) {
    if (expandedKeys.value[item.key]) {
      expandedKeys.value = {};
    } else {
      expandedKeys.value = { [item.key]: true };
    }
  } else if (item.route) {
    router.push(item.route);
  }
};

const openActiveMenu = () => {
  const activeParent = menu01.value.find(
    (item) =>
      item.items && item.items.some((sub) => route.path.startsWith(sub.route)),
  );

  if (activeParent && activeParent.key) {
    expandedKeys.value = { [activeParent.key]: true };
  } else {
    expandedKeys.value = {};
  }
};

const updateTitle = async (path) => {
  // 1. 클라이언트 사이드에서만 DOM 접근 (가장 중요!)
  if (process.client) {
    await nextTick(); // DOM이 완전히 렌더링된 후에 읽기
    await nextTick(); // 한 번 더 안전하게

    const plannerTitleEl = document.querySelector('.sb-planner-head__title h5');

    if (plannerTitleEl && plannerTitleEl.textContent.trim()) {
      pageTitle.value = plannerTitleEl.textContent.trim();
      return;
    }
  }

  // 2. planner 제목이 없거나 서버 사이드일 경우 → 기존 메뉴 라벨로 fallback
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
      break;
    }
  }

  pageTitle.value = targetLabel || 'Selling Booster';
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

const isActive = (itemRoute) => {
  if (!itemRoute) return false;

  // 하위 메뉴(items)가 있는 메뉴는 startsWith 유지 (하위 페이지에서도 부모 메뉴 활성화)
  const isParentMenu = menu01.value.some(
    (m) => m.route === itemRoute && m.items,
  );

  if (isParentMenu) {
    return route.path.startsWith(itemRoute);
  }

  // 하위 메뉴가 없는 단일 메뉴(대시보드 등)는 정확히 일치할 때만 활성
  return route.path === itemRoute;
};

/** 3. UI 제어 및 테마 로직 */
const handleClickOutside = (event) => {
  // 1374px 미만이고 사이드바가 펼쳐져 있을 때만 동작
  if (window.innerWidth < 1374 && !isFolded.value) {
    const snbElement = document.querySelector('.sb-snb');
    const toggleBtn = document.querySelector('.sb-header-mo-end'); // 모바일 메뉴 버튼 등 제외 필요 시 추가

    // 클릭된 타겟이 SNB 내부가 아니면 접음
    if (snbElement && !snbElement.contains(event.target)) {
      // 메뉴 토글 버튼 자체를 누를 때는 제외 (중복 이벤트 방지)
      if (toggleBtn && toggleBtn.contains(event.target)) return;

      isFolded.value = true;
    }
  }
};
const handleResize = () => {
  // 화면 너비가 1374px 미만이면 자동으로 접힘(true)
  if (window.innerWidth < 1374) {
    isFolded.value = true;
  } else {
    isFolded.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

/** 4. 감시자 및 생명주기 관리 */
watch(isFolded, (newValue) => {
  if (newValue === true) {
    expandedKeys.value = {};
  } else {
    // 이미 handleLinkClick에서 expandedKeys를 설정했다면 openActiveMenu를 건너뜁니다.
    // 만약 expandedKeys가 비어있을 때만(토글 버튼 등으로 펼칠 때) 실행되게 합니다.
    if (Object.keys(expandedKeys.value).length === 0) {
      openActiveMenu();
    }
  }
});

watch(
  () => route.path,
  (newPath) => {
    updateTitle(newPath);
    isSearchOpen.value = false;

    if (process.client && window.innerWidth < 1374) {
      isFolded.value = true;
    }
  },
  { immediate: true },
);

onMounted(() => {
  handleResize();

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  window.addEventListener('mousedown', handleClickOutside);

  if (!isFolded.value) openActiveMenu();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('mousedown', handleClickOutside);
});
</script>
