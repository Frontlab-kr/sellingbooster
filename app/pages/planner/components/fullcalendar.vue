<template>
  <div class="calendar-wrapper">
    <ClientOnly>
      <!-- 상단 헤더 -->
      <div class="top-header">
        <div class="left-section">
          <button @click="goToToday" class="today-btn">오늘</button>

          <div class="month-year">
            <select
              v-model="selectedMonth"
              @change="jumpToDate"
              class="month-select"
            >
              <option v-for="m in 12" :key="m" :value="m - 1">{{ m }}월</option>
            </select>
            <select
              v-model="selectedYear"
              @change="jumpToDate"
              class="year-select"
            >
              <option v-for="y in years" :key="y" :value="y">{{ y }}년</option>
            </select>
          </div>

          <button @click="prevMonth" class="nav-btn">‹</button>
          <button @click="nextMonth" class="nav-btn">›</button>
        </div>

        <!-- 체크박스 필터 -->
        <div class="filter-section">
          <label v-for="cat in categories" :key="cat.key" class="filter-label">
            <input
              type="checkbox"
              :checked="activeFilters.includes(cat.key)"
              @change="toggleFilter(cat.key)"
            />
            <span
              :style="{ backgroundColor: cat.color }"
              class="color-dot"
            ></span>
            {{ cat.label }}
          </label>
        </div>
      </div>

      <FullCalendar ref="fullCalendarRef" :options="calendarOptions" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const fullCalendarRef = ref(null);

// 카테고리 정의
const categories = ref([
  { key: 'all', label: '전체', color: '#666666' },
  { key: 'marketing', label: '광고/마케팅', color: '#7B8FF7' },
  { key: 'product', label: '상품 소싱', color: '#0090FF' },
  { key: 'sales', label: '판매 관리', color: '#00C38E' },
  { key: 'schedule', label: '정산 일정', color: '#9DA5B2' },
  { key: 'tax', label: '세금/회계', color: '#9DA5B2' },
  { key: 'loan', label: '대출/자금', color: '#00BCD4' },
  { key: 'memo', label: '메모', color: '#FF5252' },
]);

const activeFilters = ref(['all']);

// 전체 이벤트 데이터
const allEvents = ref([
  {
    id: '1',
    title: '광고 예산 점검',
    start: '2026-03-03',
    backgroundColor: '#7B8FF7',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '2',
    title: '상품 소싱',
    start: '2026-03-11',
    backgroundColor: '#0090FF',
    extendedProps: { category: 'product' },
  },
  {
    id: '3',
    title: '판매 관리 판매 관리',
    start: '2026-03-11',
    end: '2026-03-14',
    backgroundColor: '#00C38E',
    extendedProps: { category: 'sales' },
  },
  {
    id: '4',
    title: '키워드 광고 종료',
    start: '2026-03-13',
    backgroundColor: '#9DA5B2',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '5',
    title: '부가세 신고 준비',
    start: '2026-03-16',
    backgroundColor: '#9DA5B2',
    extendedProps: { category: 'tax' },
  },
  {
    id: '6',
    title: '원천세 및 지방세 납부의 날',
    start: '2026-03-20',
    end: '2026-03-23',
    backgroundColor: '#FFB84D',
    extendedProps: { category: 'tax' },
  },
  {
    id: '7',
    title: '스마트스토어 입점',
    start: '2026-03-24',
    backgroundColor: '#00C38E',
    extendedProps: { category: 'sales' },
  },
  {
    id: '8',
    title: '신한은행 대출 이자 출금일...',
    start: '2026-03-26',
    backgroundColor: '#00BCD4',
    extendedProps: { category: 'loan' },
  },
  {
    id: '9',
    title: '지마켓 정산',
    start: '2026-03-26',
    backgroundColor: '#FF5252',
    extendedProps: { category: 'schedule' },
  },
]);

// 필터링된 이벤트 (computed)
const filteredEvents = computed(() => {
  if (activeFilters.value.includes('all')) return allEvents.value;
  return allEvents.value.filter((e) =>
    activeFilters.value.includes(e.extendedProps.category),
  );
});

// calendarOptions를 computed로 만들어 동적 업데이트 보장
const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'ko',
  initialDate: '2026-03-01',
  events: filteredEvents.value, // ← 여기서 computed 사용

  editable: true,
  eventDurationEditable: true,
  eventStartEditable: true,

  nowIndicator: true,
  dayMaxEvents: true,
  fixedWeekCount: false,
  contentHeight: 'auto',

  headerToolbar: false,

  eventDrop: (info) => console.log('이동:', info.event.title),
  eventResize: (info) => console.log('기간 변경:', info.event.title),
}));

const selectedMonth = ref(2);
const selectedYear = ref(2026);
const years = ref(Array.from({ length: 11 }, (_, i) => 2022 + i));

const getCalendarApi = () => fullCalendarRef.value?.getApi?.();

const prevMonth = () => {
  getCalendarApi()?.prev();
  syncSelects();
};
const nextMonth = () => {
  getCalendarApi()?.next();
  syncSelects();
};
const goToToday = () => {
  getCalendarApi()?.today();
  syncSelects();
};

const jumpToDate = () => {
  const api = getCalendarApi();
  if (api) {
    const newDate = `${selectedYear.value}-${String(selectedMonth.value + 1).padStart(2, '0')}-01`;
    api.gotoDate(newDate);
  }
};

const syncSelects = () => {
  const api = getCalendarApi();
  if (api) {
    const current = api.getDate();
    selectedMonth.value = current.getMonth();
    selectedYear.value = current.getFullYear();
  }
};

// 체크박스 토글
const toggleFilter = (key) => {
  if (key === 'all') {
    activeFilters.value = ['all'];
  } else {
    if (activeFilters.value.includes('all')) {
      activeFilters.value = [];
    }

    if (activeFilters.value.includes(key)) {
      activeFilters.value = activeFilters.value.filter((k) => k !== key);
    } else {
      activeFilters.value.push(key);
    }

    if (activeFilters.value.length === 0) activeFilters.value = ['all'];
  }
};

onMounted(async () => {
  await nextTick();
  await nextTick();
  syncSelects();
});
</script>

<style scoped>
.calendar-wrapper {
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.month-year {
  display: flex;
  gap: 6px;
}

.month-select,
.year-select {
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
}

.nav-btn {
  padding: 8px 14px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.today-btn {
  padding: 8px 18px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.filter-section {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 14.5px;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
}

.color-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

/* FullCalendar 스타일 */
:deep(.fc) {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

:deep(.fc-event) {
  border: none !important;
  padding: 4px 8px;
  margin: 2px 0;
  border-radius: 6px;
  font-size: 13px;
  cursor: move;
}

:deep(.fc-day-today) {
  background-color: rgba(0, 144, 255, 0.03) !important;
}

:deep(.fc-day-sun .fc-col-header-cell-cushion),
:deep(.fc-day-sun .fc-daygrid-day-number) {
  color: #ff5252;
}
</style>
