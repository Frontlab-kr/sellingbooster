<template>
  <div class="sb-dashboard">
    <div class="grid">
      <div class="col-12">
        <Notice />
      </div>
      <div class="col-6">
        <Status />
      </div>
      <div class="col-6 sb-dashboard-planner">
        <Planner />
      </div>
      <template v-for="widget in activeWidgets" :key="widget.id">
        <div :class="[widget.fullWidth ? 'col-12' : 'col-6', widget.className]">
          <component
            :is="getWidgetComponent(widget.id)"
            @edit-widget="dialogEdit = true"
          />
        </div>
      </template>
    </div>
    <SbBanner />
  </div>

  <Dialog v-model:visible="dialogEdit" modal>
    <DialogEdit
      :initial-data="allWidgets"
      :default-data="defaultWidgets"
      @save="updateWidgets"
    />
  </Dialog>

  <AppFooter />
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
definePageMeta({
  layoutClass: 'sb-dashboard',
});

import { ref, onMounted, computed } from 'vue';
import Notice from './Notice.vue';
import Status from './Status.vue';
import Planner from './Planner.vue';
import KeywordTop10 from './KeywordTop10.vue';
import Price from './Price.vue';
import Trend from './Trend.vue';
import Report from './Report.vue';
import Banner from './Banner.vue';
import Ksnapp from './Ksnapp.vue';
import Ktrend from './Ktrend.vue';
import Interest from './Interest.vue';
import CategoryTop10 from './CategoryTop10.vue';
import DialogEdit from './DialogEdit.vue';

// 위젯 ID와 컴포넌트 객체 매핑
const widgetComponents = {
  notice: Notice,
  status: Status,
  planner: Planner,
  'keyword-top': KeywordTop10,
  'price-ai': Price,
  'trend-keyword': Trend,
  report: Report,
  banner: Banner,
  ksnapp: Ksnapp,
  ktrend: Ktrend,
  interest: Interest,
  'category-top': CategoryTop10,
};

// ID를 받아 컴포넌트를 반환하는 함수
const getWidgetComponent = (id) => {
  return widgetComponents[id] || null;
};

//dialog
const dialogEdit = ref(false);

//toast
const toast = useToast();

const checkViewportAndShowToast = () => {
  if (window.innerWidth < 1440) {
    toast.add({
      detail:
        '일부 서비스는 PC에서만 지원이 됩니다. \n PC 브라우저로 접속해주세요.',
      group: 'bc',
      life: 4000,
    });
  }
};

const STORAGE_KEY = 'sb_dashboard_widgets';

// 1. 기본 위젯 데이터 (초기값)
const defaultWidgets = [
  {
    id: 'keyword-top',
    title: '내 상품 키워드 TOP',
    fullWidth: false,
    visible: true,
    className: 'sb-dashboard-keyword-top10',
  },
  {
    id: 'price-ai',
    title: 'AI 가격 제안',
    fullWidth: false,
    visible: true,
    className: 'sb-dashboard-price',
  },
  {
    id: 'trend-keyword',
    title: '내 상품 카테고리 급상승 키워드',
    fullWidth: true,
    visible: true,
    className: 'sb-dashboard-trend',
  },
  {
    id: 'report',
    title: '채널별 페이스 리포트',
    fullWidth: true,
    visible: true,
    className: 'sb-dashboard-report',
  },
  {
    id: 'banner',
    fullWidth: true,
    visible: false,
    className: 'sb-dashboard-banner',
  },
  {
    id: 'ksnapp',
    title: 'K-snapp',
    fullWidth: false,
    visible: true,
    className: 'sb-dashboard-ksnapp',
  },
  {
    id: 'ktrend',
    title: 'Selling Trend',
    fullWidth: false,
    visible: true,
    className: 'sb-dashboard-ktrend',
  },
  {
    id: 'interest',
    title: '관심 키워드',
    fullWidth: false,
    visible: true,
    className: 'sb-dashboard-interest',
  },
  {
    id: 'category-top',
    title: '관심 카테고리 상품 TOP 10',
    fullWidth: false,
    visible: true,
    className: 'sb-dashboard-category-top10',
  },
];

const allWidgets = ref(defaultWidgets);

// 2. 초기 로드 시 저장된 데이터 불러오기
onMounted(() => {
  // 토스트 체크
  checkViewportAndShowToast();

  // 로컬스토리지 복원
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      allWidgets.value = JSON.parse(savedData);
    } catch (e) {
      allWidgets.value = defaultWidgets;
    }
  } else {
    allWidgets.value = defaultWidgets;
  }
});

// 3. 팝업에서 '저장' 버튼 클릭 시 호출
const updateWidgets = (newWidgets) => {
  allWidgets.value = newWidgets;

  // 로컬 스토리지에 저장 (JSON 문자열로 변환)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newWidgets));

  dialogEdit.value = false;

  // 토스트 알림 등 추가 피드백 (선택 사항)
  // toast.add({ severity: 'success', summary: '저장 완료', detail: '대시보드 설정이 저장되었습니다.', life: 3000 });
};

const activeWidgets = computed(() => allWidgets.value.filter((w) => w.visible));
</script>
