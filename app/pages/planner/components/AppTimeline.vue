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

    <div class="sb-timeline-list">
      <div
        v-for="day in sortedDays"
        :key="day.dateStr"
        class="sb-timeline-list-item"
        @mouseenter="toggleOverlayEffect"
        @mouseleave="toggleOverlayEffect"
      >
        <div class="sb-timeline-list-item__date">
          {{ day.formattedDate }} {{ day.weekday }}
        </div>

        <div class="sb-timeline-list-item__contents">
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

      <div v-if="sortedDays.length === 0" class="no-events">
        {{ selectedDateObj.year }}년 {{ selectedDateObj.month }}월에 등록된
        이벤트가 없습니다.
      </div>
    </div>
  </div>

  <Popover ref="overlayEffect" class="sb-popover-tag"> 1 </Popover>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';

//
const overlayEffect = ref();
const toggleOverlayEffect = (event) => {
  if (event.type === 'mouseenter') {
    overlayEffect.value.show(event);
  } else {
    overlayEffect.value.hide();
  }
};

const dateRef = ref(null);

// --- 1. 연/월 옵션 동적 생성 로직 ---
const dateOptions = ref([]);
const selectedDateObj = ref(null);

const initDateOptions = () => {
  const options = [];
  const now = new Date(); // 현재 날짜 (2026-03 기준)

  // 이후 3개월(+3)부터 이전 3개월(-3)까지 역순으로 생성
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

    // 현재 월을 기본 선택값으로 설정
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

const activeFilters = ref(['all']);

const allEvents = ref([
  {
    id: '1',
    title: '광고 예산 점검',
    start: '2026-03-05',
    extendedProps: { category: 'marketing', isEdit: true },
  },
  {
    id: '2',
    title: '원천세 및 지방세 납부',
    start: '2026-03-05',
    extendedProps: { category: 'tax', isEdit: true },
  },
  {
    id: '3',
    title: '쿠팡 정산',
    start: '2026-03-06',
    extendedProps: { category: 'schedule', isEdit: true },
  },
  {
    id: '4',
    title: '재고 체크 및 월 지출 내역서 정리',
    start: '2026-03-10',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '5',
    title: '스마트스토어 키워드 광고 종료',
    start: '2026-03-13',
    extendedProps: { category: 'marketing', isEdit: false },
  },
  {
    id: '6',
    title: '주간 지출 내역서 정리',
    start: '2026-03-18',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '7',
    title: '원천세 및 지방세 납부 원천세 및 지방세 납부 원천세',
    start: '2026-03-23',
    extendedProps: { category: 'tax', isEdit: false },
  },
  {
    id: '8',
    title: '광고 예산 점검 광고 예산 점검 광고후 광고 예산 점검',
    start: '2026-03-23',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '9',
    title: '11번가 정산',
    start: '2026-03-23',
    extendedProps: { category: 'schedule', isEdit: false },
  },
  {
    id: '10',
    title: '이월 상품 재고 관리',
    start: '2026-03-25',
    extendedProps: { category: 'sales', isEdit: false },
  },
  {
    id: '11',
    title: '재고 체크 및 월 지출 내역서 정리',
    start: '2026-03-31',
    extendedProps: { category: 'memo', isEdit: true },
  },
  {
    id: '11',
    title: '만우절 깜짝 타임세일',
    start: '2026-04-01',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '12',
    title: '여름 의류 선발주 소싱',
    start: '2026-04-03',
    extendedProps: { category: 'product' },
  },
  {
    id: '13',
    title: '부가가치세 예정 고지 납부',
    start: '2026-04-05',
    extendedProps: { category: 'tax', isEdit: true },
  },
  {
    id: '14',
    title: '지마켓/옥션 정산 확인',
    start: '2026-04-07',
    extendedProps: { category: 'schedule', isEdit: true },
  },
  {
    id: '15',
    title: 'SNS 인플루언서 협업 미팅',
    start: '2026-04-10',
    extendedProps: { category: 'marketing', isEdit: true },
  },
  {
    id: '16',
    title: '정부 지원금 신청 서류 준비',
    start: '2026-04-18',
    extendedProps: { category: 'loan' },
  },
  {
    id: '17',
    title: '중간고사 시즌 마케팅',
    start: '2026-04-18',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '18',
    title: '물류 창고 이전 견적 비교',
    start: '2026-04-18',
    extendedProps: { category: 'memo' },
  },
  {
    id: '19',
    title: '1분기 매출 실적 분석',
    start: '2026-04-18',
    extendedProps: { category: 'sales' },
  },
  {
    id: '20',
    title: '4월 급여 지급 및 정산',
    start: '2026-04-28',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '21',
    title: '가정의 달 기획전 오픈',
    start: '2026-05-01',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '22',
    title: '어린이날 배송 마감 공지',
    start: '2026-05-03',
    extendedProps: { category: 'sales' },
  },
  {
    id: '23',
    title: '종합소득세 신고 기간 시작',
    start: '2026-05-04',
    extendedProps: { category: 'tax' },
  },
  {
    id: '24',
    title: '어버이날 선물세트 배송 집중',
    start: '2026-05-07',
    extendedProps: { category: 'sales' },
  },
  {
    id: '25',
    title: '카카오페이 가맹점 정산',
    start: '2026-05-12',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '26',
    title: '스승의 날 감사제 마케팅',
    start: '2026-05-15',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '27',
    title: '하반기 상품 소싱 해외 출장',
    start: '2026-05-19',
    extendedProps: { category: 'product' },
  },
  {
    id: '28',
    title: '종합소득세 최종 납부 확인',
    start: '2026-05-25',
    extendedProps: { category: 'tax' },
  },
  {
    id: '29',
    title: '사업 확장 자금 추가 상담',
    start: '2026-05-28',
    extendedProps: { category: 'loan' },
  },
  {
    id: '30',
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
    return {
      dateStr,
      formattedDate: dateStr.replace(/-/g, '.').slice(5),
      weekday: `(${date.toLocaleDateString('ko-KR', { weekday: 'short' })})`,
      events: dayEvents,
    };
  });
  return days.sort((a, b) => a.dateStr.localeCompare(b.dateStr));
});

// --- 핸들러 함수 ---
const handleFilterChange = (key) => {
  if (key === 'all') {
    activeFilters.value = ['all'];
  } else {
    activeFilters.value = activeFilters.value.filter((k) => k !== 'all');
    if (activeFilters.value.length === 0) activeFilters.value = ['all'];
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
