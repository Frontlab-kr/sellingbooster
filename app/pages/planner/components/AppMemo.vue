<template>
  <div class="sb-planner-app">
    <div class="sb-planner-app-head">
      <div class="sb-planner-app-head-control">
        <div class="sb-planner-app-head-control__select">
          <Select
            ref="dateRef"
            v-model="selectedDateObj"
            :options="dateOptions"
            optionLabel="name"
            size="small"
            class="p-select-text"
            panelClass="p-select-overlay--text"
            :pt="{
              overlay: {
                onclick: (event) => {
                  if (event.target === event.currentTarget) {
                    dateRef.hide();
                  }
                },
              },
            }"
          />
        </div>

        <div class="sb-planner-app-head-control__button">
          <Button variant="text" @click="prevMonth">
            <template #icon>
              <IconArrowAchevronLeft class="ico-arrow-achevron-left" />
            </template>
          </Button>
          <Button variant="text" @click="nextMonth">
            <template #icon>
              <IconArrowAchevronRight class="ico-arrow-achevron-right" />
            </template>
          </Button>
        </div>
      </div>

      <div class="sb-planner-app-head-checkbox">
        <div class="sb-planner-app-head-checkbox__toggle">
          <Button variant="text" @click="openFilter">
            <template #icon>
              <IconSystemFilter class="ico-system-filter" />
            </template>
          </Button>
        </div>

        <div class="sb-checkbox">
          <div
            v-for="cat in categories"
            :key="cat.key"
            class="sb-checkbox-item"
          >
            <Checkbox
              :inputId="cat.key"
              v-model="activeFilters"
              :value="cat.key"
              @change="handleFilterChange(cat.key)"
            />
            <label :for="cat.key" :class="cat.color">
              {{ cat.label }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="sb-memo-list">
      <client-only>
        <masonry-wall
          :items="sortedDays"
          :max-columns="5"
          :column-width="284"
          :gap="12"
        >
          <template #default="{ item: day }">
            <div class="sb-memo-list-item" @click="openSchedule">
              <div class="pc">
                <div class="sb-memo-list-item__date">
                  {{ day.formattedDate }} ({{ day.weekday }})
                </div>
              </div>

              <div class="mo">
                <div class="sb-memo-list-item__date">
                  <strong>{{ day.dayOnly }}</strong>
                  <span>{{ day.weekday }}</span>
                </div>
              </div>

              <div class="sb-memo-list-item__contents">
                <ul>
                  <li
                    v-for="event in day.events"
                    :key="event.id"
                    :class="getCategoryClass(event.extendedProps.category)"
                  >
                    <p>{{ event.title }}</p>
                    <Button variant="text" v-if="event.extendedProps.isEdit">
                      <template #icon>
                        <IconSystemEdit class="ico-system-edit" />
                      </template>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </masonry-wall>
      </client-only>

      <div class="sb-nodata" v-if="sortedDays.length === 0">
        <IconIllustrationSmile class="ico-illustration-smile" />
        <div class="sb-nodata__text">
          <p>
            {{ selectedDateObj.year }}년 {{ selectedDateObj.month }}월에 등록된
            이벤트가 없습니다.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="dialogSchedule"
    modal
    :dismissableMask="true"
    class="sb-dialog-schedule"
    :pt="{
      mask: {
        class: 'sb-dialog-schedule-mask',
      },
    }"
  >
    <DialogSchedule />
  </Dialog>

  <Dialog
    v-model:visible="dialogFilter"
    modal
    :dismissableMask="true"
    :pt="{
      mask: {
        class: 'sb-dialog-bottom',
      },
    }"
  >
    <div class="sb-planner-app">
      <div class="sb-planner-app-head-checkbox">
        <div class="sb-checkbox">
          <div
            v-for="cat in categories"
            :key="cat.key"
            class="sb-checkbox-item"
          >
            <Checkbox
              :inputId="cat.key"
              v-model="activeFilters"
              :value="cat.key"
              @change="handleFilterChange(cat.key)"
            />
            <label :for="cat.key" :class="cat.color">
              {{ cat.label }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import MasonryWall from '@yeger/vue-masonry-wall';

import DialogSchedule from '@/pages/planner/components/DialogSchedule.vue';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';
import IconSystemFilter from '@/assets/icons/system/filter.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

const dialogSchedule = ref(null);
const dialogFilter = ref(null);

const openSchedule = () => {
  dialogSchedule.value = true;
};
const openFilter = () => {
  dialogFilter.value = true;
};

const dateRef = ref(null);

// --- 1. 연/월 옵션 동적 생성 로직 ---
const dateOptions = ref([]);
const selectedDateObj = ref(null);

const initDateOptions = () => {
  const options = [];
  const now = new Date();

  for (let i = 3; i >= -3; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const isCurrent = i === 0;

    options.push({
      name: `${year}년 ${month}월`,
      year: year,
      month: month,
      value: `${year}-${String(month).padStart(2, '0')}`,
    });

    if (isCurrent) {
      selectedDateObj.value = options[options.length - 1];
    }
  }
  dateOptions.value = options;
};

initDateOptions();

// --- 카테고리 및 필터 ---
const categories = ref([
  { key: 'all', label: '전체' },
  { key: 'product', label: '상품 소싱', color: 'color-info' },
  { key: 'sales', label: '판매 관리', color: 'color-success' },
  { key: 'schedule', label: '정산 일정', color: 'color-danger' },
  { key: 'marketing', label: '광고/마케팅', color: 'color-secondary' },
  { key: 'tax', label: '세금/회계', color: 'color-warn' },
  { key: 'loan', label: '대출/자금', color: 'color-primary' },
  { key: 'memo', label: '메모', color: 'color-contrast' },
]);

const activeFilters = ref([
  'all',
  'product',
  'sales',
  'schedule',
  'marketing',
  'tax',
  'loan',
  'memo',
]);

const allEvents = ref([
  {
    id: '1',
    title: '원천세 및 지방세 납부',
    start: '2026-03-05',
    extendedProps: { category: 'tax' },
  },
  {
    id: '2',
    title: '스마트스토어 광고 종료',
    start: '2026-03-05',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '3',
    title: '지마켓 정산 점검',
    start: '2026-03-06',
    extendedProps: { category: 'schedule', isEdit: true },
  },
  {
    id: '4',
    title: '원천세 및 지방세 납부',
    start: '2026-03-06',
    extendedProps: { category: 'tax' },
  },
  {
    id: '5',
    title: '스마트스토어 광고 종료스마트스토어 광고 종료스마트스토어 광고 종료',
    start: '2026-03-06',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '6',
    title: '쿠팡 광고 종료',
    start: '2026-03-06',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '7',
    title: '11번가 정산',
    start: '2026-03-06',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '8',
    title: '광고 예산 점검',
    start: '2026-03-06',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '9',
    title: '지방세 납부',
    start: '2026-03-06',
    extendedProps: { category: 'tax' },
  },
  {
    id: '10',
    title: '베스트 상품 전시',
    start: '2026-03-06',
    extendedProps: { category: 'product' },
  },
  {
    id: '11',
    title: '스마트스토어 광고 종료',
    start: '2026-03-07',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '12',
    title: '쿠팡 광고 종료',
    start: '2026-03-07',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '13',
    title: '광고 예산 점검',
    start: '2026-03-07',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '14',
    title: '쿠팡 광고 종료',
    start: '2026-03-10',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '15',
    title: '11번가 정산',
    start: '2026-03-10',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '16',
    title: '광고 예산 점검',
    start: '2026-03-10',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '17',
    title: '베스트 상품 전시',
    start: '2026-03-13',
    extendedProps: { category: 'sales' },
  },
  {
    id: '18',
    title: '쿠팡 광고 종료',
    start: '2026-03-18',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '19',
    title: '11번가 정산',
    start: '2026-03-18',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '20',
    title: '기업은행 대출 만기',
    start: '2026-03-18',
    extendedProps: { category: 'loan' },
  },
  {
    id: '21',
    title: '광고 예산 점검',
    start: '2026-03-18',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '22',
    title: '광고 예산 점검',
    start: '2026-03-25',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '23',
    title: '베스트 상품 전시',
    start: '2026-03-25',
    extendedProps: { category: 'sales' },
  },
  {
    id: '24',
    title: '광고 예산 점검',
    start: '2026-03-31',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '25',
    title: '판매 점검',
    start: '2026-03-31',
    extendedProps: { category: 'sales' },
  },
  {
    id: '26',
    title: '광고 예산 점검',
    start: '2026-04-05',
    extendedProps: { category: 'marketing', isEdit: false },
  },
  {
    id: '27',
    title: '원천세 및 지방세 납부',
    start: '2026-04-05',
    extendedProps: { category: 'tax', isEdit: false },
  },
  {
    id: '28',
    title: '쿠팡 정산',
    start: '2026-04-06',
    extendedProps: { category: 'schedule', isEdit: false },
  },
  {
    id: '29',
    title: '재고 체크 및 월 지출 내역서 정리',
    start: '2026-04-10',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '30',
    title: '스마트스토어 키워드 광고 종료',
    start: '2026-04-13',
    extendedProps: { category: 'marketing', isEdit: false },
  },
  {
    id: '31',
    title: '주간 지출 내역서 정리',
    start: '2026-04-18',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '32',
    title: '원천세 및 지방세 납부 원천세 및 지방세 납부 원천세',
    start: '2026-04-23',
    extendedProps: { category: 'tax', isEdit: false },
  },
  {
    id: '33',
    title: '광고 예산 점검 광고 예산 점검 광고후 광고 예산 점검',
    start: '2026-04-23',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '34',
    title: '11번가 정산',
    start: '2026-04-23',
    extendedProps: { category: 'schedule', isEdit: false },
  },
  {
    id: '35',
    title: '이월 상품 재고 관리',
    start: '2026-04-25',
    extendedProps: { category: 'sales', isEdit: false },
  },
  {
    id: '36',
    title: '재고 체크 및 월 지출 내역서 정리',
    start: '2026-04-31',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '37',
    title: '가정의 달 기획전 오픈',
    start: '2026-05-01',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '38',
    title: '어린이날 배송 마감 공지',
    start: '2026-05-03',
    extendedProps: { category: 'sales' },
  },
  {
    id: '39',
    title: '종합소득세 신고 기간 시작',
    start: '2026-05-04',
    extendedProps: { category: 'tax' },
  },
  {
    id: '40',
    title: '어버이날 선물세트 배송 집중',
    start: '2026-05-07',
    extendedProps: { category: 'sales' },
  },
  {
    id: '41',
    title: '카카오페이 가맹점 정산',
    start: '2026-05-12',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '42',
    title: '스승의 날 감사제 마케팅',
    start: '2026-05-15',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '43',
    title: '하반기 상품 소싱 해외 출장',
    start: '2026-05-19',
    extendedProps: { category: 'product' },
  },
  {
    id: '44',
    title: '종합소득세 최종 납부 확인',
    start: '2026-05-25',
    extendedProps: { category: 'tax' },
  },
  {
    id: '45',
    title: '사업 확장 자금 추가 상담',
    start: '2026-05-28',
    extendedProps: { category: 'loan' },
  },
  {
    id: '46',
    title: '5월 운영비 지출 증빙 정리',
    start: '2026-05-30',
    extendedProps: { category: 'memo' },
  },
]);

const getCategoryClass = (categoryKey) => {
  const cat = categories.value.find((c) => c.key === categoryKey);
  return cat ? cat.color : '';
};

// --- 필터링 및 정렬 ---
const filteredEvents = computed(() => {
  if (!selectedDateObj.value) return [];

  let events = allEvents.value.filter((event) => {
    const eventDate = new Date(event.start);
    return (
      eventDate.getFullYear() === selectedDateObj.value.year &&
      eventDate.getMonth() + 1 === selectedDateObj.value.month
    );
  });

  if (!activeFilters.value.includes('all')) {
    events = events.filter((e) =>
      activeFilters.value.includes(e.extendedProps.category),
    );
  }
  return events;
});

const sortedDays = computed(() => {
  const map = new Map();
  filteredEvents.value.forEach((event) => {
    if (!map.has(event.start)) map.set(event.start, []);
    map.get(event.start).push(event);
  });

  const days = Array.from(map.entries()).map(([dateStr, dayEvents]) => {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return {
      dateStr,
      formattedDate: `${month}.${day}`,
      dayOnly: day,
      weekday: date.toLocaleDateString('ko-KR', { weekday: 'short' }),
      events: dayEvents,
    };
  });

  return days.sort((a, b) => a.dateStr.localeCompare(b.dateStr));
});

// --- 핸들러 함수 ---
const handleFilterChange = (key) => {
  // 1. '전체'를 클릭한 경우
  if (key === 'all') {
    if (activeFilters.value.includes('all')) {
      // '전체'가 체크되었다면 모든 카테고리 키를 배열에 삽입
      activeFilters.value = categories.value.map((cat) => cat.key);
    } else {
      // '전체'가 해제되었다면 모든 선택 해제
      activeFilters.value = [];
    }
  }
  // 2. 개별 카테고리를 클릭한 경우
  else {
    const categoryKeysWithoutAll = categories.value
      .map((cat) => cat.key)
      .filter((k) => k !== 'all');

    // 모든 개별 항목이 체크되었는지 확인
    const isAllOthersSelected = categoryKeysWithoutAll.every((k) =>
      activeFilters.value.includes(k),
    );

    if (isAllOthersSelected) {
      // 모든 항목이 체크되었다면 'all'도 추가 (중복 방지를 위해 Set 등을 쓸 수 있지만 단순 push도 가능)
      if (!activeFilters.value.includes('all')) {
        activeFilters.value.push('all');
      }
    } else {
      // 하나라도 체크 해제되었다면 'all'을 제거
      activeFilters.value = activeFilters.value.filter((k) => k !== 'all');
    }
  }
};

const prevMonth = () => {
  const currentIndex = dateOptions.value.findIndex(
    (opt) => opt.value === selectedDateObj.value.value,
  );
  if (currentIndex < dateOptions.value.length - 1) {
    selectedDateObj.value = dateOptions.value[currentIndex + 1];
  }
};

const nextMonth = () => {
  const currentIndex = dateOptions.value.findIndex(
    (opt) => opt.value === selectedDateObj.value.value,
  );
  if (currentIndex > 0) {
    selectedDateObj.value = dateOptions.value[currentIndex - 1];
  }
};
</script>
