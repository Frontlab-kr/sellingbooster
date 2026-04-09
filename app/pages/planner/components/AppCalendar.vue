<template>
  <div class="sb-planner-app">
    <div class="sb-planner-app-head">
      <div class="sb-planner-app-head-control">
        <div class="sb-planner-app-head-control__button">
          <button @click="goToToday" class="today-btn">오늘</button>
        </div>
        <div class="sb-planner-app-head-control__select">
          <Select
            ref="dateRef"
            v-model="selectedDateObj"
            :options="dateOptions"
            optionLabel="name"
            size="small"
            class="p-select-text"
            panelClass="p-select-overlay--text"
            @change="jumpToDate"
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
    <FullCalendar ref="fullCalendarRef" :options="calendarOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

const fullCalendarRef = ref(null);
const dateRef = ref(null);

// --- 1. 날짜 제어 로직 (Timeline 형식 통합) ---
const dateOptions = ref([]);
const selectedDateObj = ref(null);

const initDateOptions = () => {
  const options = [];
  const now = new Date(); // 기준 시점: 2026년 3월

  // 타임라인 로직과 동일하게 생성
  for (let i = 3; i >= -3; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;

    options.push({
      name: `${year}년 ${month}월`,
      year: year,
      month: month,
      value: `${year}-${String(month).padStart(2, '0')}`,
    });

    if (i === 0) selectedDateObj.value = options[options.length - 1];
  }
  dateOptions.value = options;
};

initDateOptions();

const holidays = {
  '2026-03-01': '삼일절',
  '2026-03-02': '대체휴일',
  // 추가 공휴일...
};

// --- 2. 카테고리 정의 ---
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
  // 업무 일정
  {
    id: '1',
    title: '광고 예산 점검',
    start: '2026-03-03',
    className: 'color-info',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '2',
    title: '상품 소싱',
    start: '2026-03-11',
    className: 'color-success',
    extendedProps: { category: 'product' },
  },
  {
    id: '3',
    title: '판매 관리 판매 관리',
    start: '2026-03-11',
    end: '2026-03-15',
    className: 'color-danger',
    extendedProps: { category: 'sales' },
  },
  {
    id: '4',
    title: '키워드 광고 종료',
    start: '2026-03-13',
    className: 'color-secondary',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '5',
    title: '부가세 신고 준비',
    start: '2026-03-16',
    className: 'color-warn',
    extendedProps: { category: 'tax' },
  },
  {
    id: '6',
    title: '원천세 및 지방세 납부의 날',
    start: '2026-03-20',
    end: '2026-03-25',
    className: 'color-primary',
    extendedProps: { category: 'tax' },
  },
  {
    id: '7',
    title: '스마트스토어 입점',
    start: '2026-03-24',
    className: 'color-contrast',
    extendedProps: { category: 'sales' },
  },
  {
    id: '8',
    title: '신한은행 대출 이자 출금일...',
    start: '2026-03-26',
    className: 'color-primary',
    extendedProps: { category: 'loan' },
  },
  {
    id: '9',
    title: '지마켓 정산',
    start: '2026-03-26',
    className: 'color-primary',
    extendedProps: { category: 'schedule' },
  },
]);

const filteredEvents = computed(() => {
  if (activeFilters.value.includes('all')) return allEvents.value;
  return allEvents.value.filter((e) =>
    activeFilters.value.includes(e.extendedProps.category),
  );
});

// --- 4. 캘린더 옵션 ---
const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'ko',
  initialDate: '2026-03-01',
  events: filteredEvents.value,
  headerToolbar: false,
  editable: true,
  eventStartEditable: true,
  eventDurationEditable: true,
  dayMaxEvents: true,
  fixedWeekCount: false,
  contentHeight: 'auto',
  dayCellContent: function (info) {
    // 날짜를 YYYY-MM-DD 형식으로 변환 (데이터 매칭용)
    const year = info.date.getFullYear();
    const month = String(info.date.getMonth() + 1).padStart(2, '0');
    const day = String(info.date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    // 숫자만 추출 (1일 -> 1)
    const dayNumber = info.dayNumberText.replace('일', '');

    // 해당 날짜가 공휴일인지 확인
    const holidayName = holidays[dateStr];

    if (holidayName) {
      // 공휴일인 경우: 빨간색 숫자와 공휴일 명칭 반환
      return {
        html: `
          <div class="fc-daygrid-day-number" style="color: #ff4d4f;">
            ${dayNumber} <span class="holiday-name" style="margin-left: 8px; font-weight: normal;">${holidayName}</span>
          </div>
        `,
      };
    }

    // 일반 날짜: 숫자만 반환
    return dayNumber;
  },

  // 일요일 등 특정 요일의 숫자를 빨간색으로 만들고 싶을 때 추가
  dayCellDidMount: function (info) {
    if (info.dow === 0) {
      // 일요일(0)인 경우
      const numberElement = info.el.querySelector('.fc-daygrid-day-number');
      if (numberElement) numberElement.style.color = '#ff4d4f';
    }
  },
}));

// --- 5. 핸들러 함수 ---
const getCalendarApi = () => fullCalendarRef.value?.getApi?.();

// 셀렉트 박스 변경 시 캘린더 이동
const jumpToDate = () => {
  const api = getCalendarApi();
  if (api && selectedDateObj.value) {
    api.gotoDate(`${selectedDateObj.value.value}-01`);
  }
};

const prevMonth = () => {
  const currentIndex = dateOptions.value.findIndex(
    (opt) => opt.value === selectedDateObj.value.value,
  );
  if (currentIndex < dateOptions.value.length - 1) {
    selectedDateObj.value = dateOptions.value[currentIndex + 1];
    jumpToDate();
  }
};

const nextMonth = () => {
  const currentIndex = dateOptions.value.findIndex(
    (opt) => opt.value === selectedDateObj.value.value,
  );
  if (currentIndex > 0) {
    selectedDateObj.value = dateOptions.value[currentIndex - 1];
    jumpToDate();
  }
};
// ... 기존 코드 유지

const goToToday = () => {
  const api = getCalendarApi();
  if (api) {
    api.today(); // 캘린더를 오늘 날짜로 이동

    // 오늘 날짜 정보 가져오기 (연-월 형식)
    const now = new Date();
    const currentVal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    // dateOptions에서 현재 연-월과 일치하는 옵션 찾기
    const todayOption = dateOptions.value.find(
      (opt) => opt.value === currentVal,
    );

    if (todayOption) {
      selectedDateObj.value = todayOption;
    } else {
      // 만약 오늘 날짜가 옵션 범위(현재 기준 ±3개월)를 벗어나 있다면 새로 생성하거나 처리 로직이 필요할 수 있습니다.
      // 현재는 범위 내에 있다는 가정하에 할당합니다.
      selectedDateObj.value = {
        name: `${now.getFullYear()}년 ${now.getMonth() + 1}월`,
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        value: currentVal,
      };
    }
  }
};

const handleFilterChange = (key) => {
  if (key === 'all') {
    activeFilters.value = ['all'];
  } else {
    activeFilters.value = activeFilters.value.filter((k) => k !== 'all');
    if (activeFilters.value.length === 0) activeFilters.value = ['all'];
  }
};

onMounted(async () => {
  await nextTick();
  jumpToDate();
});
</script>
