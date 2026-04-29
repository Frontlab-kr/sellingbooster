<template>
  <div class="sb-snb">
    <NuxtLink to="/" class="sb-snb-logo">Selling Booster</NuxtLink>

    <div class="sb-snb-menu">
      <PanelMenu :model="snbMenu" v-model:expandedKeys="expandedKeys">
        <template #item="{ item, props }">
          <a
            v-if="item.items && item.items.length > 0"
            class="p-panelmenu-header-link"
            :class="[
              {
                'has-children': item.items?.length > 0,
                'p-panelmenu-header-active': isActive(item),
              },
            ]"
            v-bind="props.action"
            @click.stop.prevent="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
            <IconSnbArrow class="ico-snb-arrow" />
          </a>

          <a
            v-else-if="item.route"
            class="p-panelmenu-header-link"
            :class="{ 'p-panelmenu-header-active': isActive(item) }"
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

    <div class="sb-snb-utill">
      <PanelMenu :model="pcUtill" v-model:expandedKeys="expandedKeys">
        <template #item="{ item, props }">
          <a
            v-if="item.items && item.items.length > 0"
            class="p-panelmenu-header-link"
            :class="[
              {
                'has-children': item.items?.length > 0,
                'p-panelmenu-header-active': isActive(item),
              },
            ]"
            v-bind="props.action"
            @click.stop.prevent="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
            <IconSnbArrow class="ico-snb-arrow" />
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

    <div class="sb-snb-mo-utill">
      <PanelMenu :model="moUtill" v-model:expandedKeys="expandedKeys">
        <template #item="{ item, props }">
          <a
            v-if="item.items && item.items.length > 0"
            class="p-panelmenu-header-link"
            :class="[
              {
                'has-children': item.items?.length > 0,
                'p-panelmenu-header-active': isActive(item),
              },
            ]"
            v-bind="props.action"
            @click.stop.prevent="handleLinkClick($event, item)"
          >
            <div class="p-menuitem-icon">
              <component v-if="item.icon" :is="item.icon" />
            </div>
            <span class="p-panelmenu-header-label">{{ item.label }}</span>
            <IconSnbArrow class="ico-snb-arrow" />
          </a>

          <a
            v-else-if="item.route"
            class="p-panelmenu-header-link"
            :class="{ 'p-panelmenu-header-active': isActive(item) }"
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
    <div class="sb-snb-mo-logout">
      <Button variant="text">
        <IconSnbLogout class="ico-snb-logout" />
        <span class="p-button-label">로그아웃</span>
      </Button>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted, markRaw } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import IconSnbHome from '@/assets/icons/snb/home.svg?component';
import IconSnbDocument from '@/assets/icons/snb/document.svg?component';
import IconSnbStar from '@/assets/icons/snb/star.svg?component';
import IconSnbChart from '@/assets/icons/snb/chart.svg?component';
import IconSnbChat from '@/assets/icons/snb/chat.svg?component';
import IconSnbShop from '@/assets/icons/snb/shop.svg?component';
import IconSnbPlanner from '@/assets/icons/snb/planner.svg?component';
import IconSnbSetting from '@/assets/icons/snb/setting.svg?component';
import IconSnbLogout from '@/assets/icons/snb/logout.svg?component';
import IconSnbMenuClose from '@/assets/icons/snb/menu-close.svg?component';
import IconSnbMenuOpen from '@/assets/icons/snb/menu-open.svg?component';
import IconSnbArrow from '@/assets/icons/snb/snb-arrow.svg?component';

//data
const snbMenu = ref([
  {
    key: 'dashboard',
    label: '대시보드',
    icon: markRaw(IconSnbHome),
    route: '/dashboard',
  },
  {
    key: 'trend',
    label: '마켓 트렌드',
    icon: markRaw(IconSnbDocument),
    route: '/trend/recommend',
    items: [
      { label: '추천 기회', route: '/trend/recommend' },
      { label: '나의 랭킹찾기', route: '/trend/ranking' },
      { label: '아이템 소싱', route: '/trend/sourcing' },
      { label: '상품명 생성하기', route: '/trend/write' },
      { label: '키워드 분석', route: '/trend/keyword' },
      { label: '상품 분석', route: '/trend/product' },
      { label: '분석 결과', route: '/trend/analysis' },
    ],
  },
  {
    key: 'sales',
    label: '판매 가속',
    icon: markRaw(IconSnbStar),
    route: '/sales/price',
    items: [
      { label: '가격 실행', route: '/sales/price' },
      { label: 'CS 센터', route: '/sales/cs' },
      { label: '상품명 점검', route: '/sales/product' },
    ],
  },
  {
    key: 'report',
    label: '성장 리포트',
    icon: markRaw(IconSnbChart),
    route: '/report/summary',
    items: [
      { label: '성과 요약', route: '/report/summary' },
      { label: '성과 분석', route: '/report/analyze' },
      { label: '성과 히스토리', route: '/report/history' },
    ],
  },
  {
    key: 'planner',
    label: '셀링 플래너',
    icon: markRaw(IconSnbPlanner),
    route: '/planner/timeline',
  },
  {
    key: 'community',
    label: '커뮤니티',
    icon: markRaw(IconSnbChat),
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

const pcUtill = ref([
  {
    key: 'store',
    label: '스토어 관리',
    icon: markRaw(IconSnbShop),
    route: '/policy/personalPrivacy',
    items: [
      { label: '스마트 스토어', route: '/policy/personalPrivacy' },
      { label: '쿠팡', route: '/policy/personalPrivacy' },
    ],
  },
  { id: 'toggle-btn', label: '메뉴 닫기', icon: markRaw(IconSnbMenuClose) },
]);

const moUtill = ref([
  {
    key: 'setting',
    label: '환경 설정',
    route: '/setting/account/',
    items: [
      { label: '개인 정보 관리', route: '/setting/account/' },
      { label: '셀러 정보 관리', route: '/policy/personalPrivacy' },
      { label: '알림 관리', route: '/setting/seller/alarm' },
      { label: '팀/권한 관리', route: '/policy/personalPrivacy' },
      { label: '구독 관리', route: '/policy/personalPrivacy' },
    ],
  },
  {
    key: 'store',
    label: '스토어 관리',
    route: '/policy/personalPrivacy',
    items: [
      { label: '스마트 스토어', route: '/policy/personalPrivacy' },
      { label: '쿠팡', route: '/policy/personalPrivacy' },
    ],
  },
  {
    key: 'language',
    label: '다국어',
    route: '/policy/personalPrivacy',
    items: [
      { label: '영어', route: '/policy/personalPrivacy' },
      { label: '중국어', route: '/policy/personalPrivacy' },
      { label: '일본어', route: '/policy/personalPrivacy' },
    ],
  },
]);

/** 1. 상태 정의 (State) */
const isFolded = useState('isFolded', () => false);
const isScrolled = ref(false);
const expandedKeys = ref({});
const router = useRouter();
const route = useRoute();

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
    // 토글 기능
    expandedKeys.value = expandedKeys.value[item.key]
      ? {}
      : { [item.key]: true };
  } else if (item.route) {
    router.push(item.route);
  }
};

const openActiveMenu = () => {
  if (isFolded.value) return;

  const currentPath = route.path;

  // 현재 경로를 포함하거나, 현재 경로의 상위 경로를 포함하는 하위 메뉴가 있는 부모 찾기
  const activeParent = snbMenu.value.find((item) => {
    return (
      item.items &&
      item.items.some((sub) => {
        if (!sub.route) return false;
        // 정확히 일치하거나, 현재 경로가 메뉴 경로로 시작하는지 확인 (상세 페이지 대응)
        return (
          currentPath === sub.route || currentPath.startsWith(sub.route + '/')
        );
      })
    );
  });

  if (activeParent) {
    expandedKeys.value = { [activeParent.key]: true };
  } else {
    // 1뎁스 전용 메뉴이거나 매칭되는 메뉴가 없으면 닫음
    expandedKeys.value = {};
  }
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

const isActive = (item) => {
  if (!item) return false;
  const currentPath = route.path;

  // 1. 하위 메뉴(items)가 정의된 부모 메뉴일 경우
  if (item.items && item.items.length > 0) {
    return item.items.some((sub) => {
      if (!sub.route) return false;
      return (
        currentPath === sub.route || currentPath.startsWith(sub.route + '/')
      );
    });
  }

  // 2. 1뎁스 전용 메뉴 (planner, dashboard 등)
  if (item.route) {
    // [추가] planner의 경우 /planner/calendar, /planner/memo 등을 모두 포함하도록 처리
    if (item.key === 'planner') {
      return currentPath.startsWith('/planner');
    }

    // 일반적인 1뎁스 메뉴 활성화 조건
    return (
      currentPath === item.route || currentPath.startsWith(item.route + '/')
    );
  }

  return false;
};

/** 3. UI 제어 및 테마 로직 */
const handleClickOutside = (event) => {
  // 1. 1439px 미만인 경우: 외부를 클릭해도 아무 동작도 하지 않음 (isFolded false 유지)
  if (window.innerWidth < 1440) {
    return;
  }

  // 2. 1439px 이상 ~ 1601px 미만인 경우: 외부 클릭 시 메뉴를 접음
  if (window.innerWidth < 1601 && !isFolded.value) {
    const snbElement = document.querySelector('.sb-snb');

    const isClickInsideMenu = event.target.closest('.sb-snb');
    const isClickToggleBtn = event.target.closest('.sb-header-mo-end');

    if (!isClickInsideMenu && !isClickToggleBtn) {
      isFolded.value = true;
    }
  }
};

const handleResize = () => {
  if (window.innerWidth < 1440) {
    isFolded.value = false;
  } else if (window.innerWidth < 1601) {
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
  if (newValue) {
    expandedKeys.value = {};
  } else {
    openActiveMenu();
  }
});

watch(
  () => route.path,
  async (newPath) => {
    // async/await 추가로 렌더링 타이밍 확보
    if (process.client) {
      // 1. 화면 너비에 따른 Fold 상태 결정
      if (window.innerWidth >= 1440 && window.innerWidth < 1601) {
        isFolded.value = true;
      } else if (window.innerWidth >= 1601) {
        isFolded.value = false;
      }

      // 2. DOM 업데이트 이후 실행되도록 nextTick 효과
      setTimeout(() => {
        openActiveMenu();
      }, 50);
    }
  },
  { immediate: true },
);

onMounted(() => {
  handleResize();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  window.addEventListener('mousedown', handleClickOutside);

  openActiveMenu();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('mousedown', handleClickOutside);
});
</script>
