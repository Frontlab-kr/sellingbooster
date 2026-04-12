<template>
  <div class="sb-planner-app">
    <div class="sb-planner-app-head">
      <div class="sb-planner-app-head-control">
        <div class="sb-planner-app-head-control__today">
          <Button
            severity="contrast"
            outlined
            size="small"
            label="오늘"
            @click="goToToday"
          />
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
    <FullCalendar ref="fullCalendarRef" :options="calendarOptions" />
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
import { ref, onMounted, nextTick, computed, watch } from 'vue';
import DialogSchedule from '@/pages/planner/components/DialogSchedule.vue';

import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';
import IconSystemFilter from '@/assets/icons/system/filter.svg?component';

const dialogSchedule = ref(null);
const dialogFilter = ref(null);

const openSchedule = () => {
  dialogSchedule.value = true;
};
const openFilter = () => {
  dialogFilter.value = true;
};

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
  '2026-04-01': '만우절',
  '2026-04-02': '대체휴일',
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
  // 업무 일정
  {
    id: '1',
    title: '광고 예산 점검',
    start: '2026-04-03',
    className: 'color-secondary',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '2',
    title: '상품 소싱',
    start: '2026-04-11',
    className: 'color-info',
    extendedProps: { category: 'product' },
  },
  {
    id: '3',
    title: '판매 관리 판매 관리',
    start: '2026-04-11',
    end: '2026-04-13',
    className: 'color-success',
    extendedProps: { category: 'sales' },
  },
  {
    id: '4',
    title: '키워드 광고 종료',
    start: '2026-04-13',
    className: 'color-contrast',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '5',
    title: '부가세 신고 준비',
    start: '2026-04-16',
    className: 'color-contrast',
    extendedProps: { category: 'tax' },
  },
  {
    id: '6',
    title: '원천세 및 지방세 납부의 날',
    start: '2026-04-20',
    end: '2026-04-25',
    className: 'color-warn',
    extendedProps: { category: 'tax' },
  },
  {
    id: '7',
    title: '스마트스토어 입점',
    start: '2026-04-24',
    className: 'color-success',
    extendedProps: { category: 'sales' },
  },
  {
    id: '8',
    title:
      '신한은행 대출 이자 출금일 신한은행 대출 이자 출금일신한은행 대출 이자 출금일.',
    start: '2026-04-26',
    className: 'color-primary',
    extendedProps: { category: 'loan' },
  },
  {
    id: '9',
    title: '지마켓 정산',
    start: '2026-04-26',
    className: 'color-danger',
    extendedProps: { category: 'schedule' },
  },
]);

const filteredEvents = computed(() => {
  if (!selectedDateObj.value) return [];

  return allEvents.value.filter((event) => {
    const eventDate = new Date(event.start);
    const isSameMonth =
      eventDate.getFullYear() === selectedDateObj.value.year &&
      eventDate.getMonth() + 1 === selectedDateObj.value.month;

    // 카테고리 필터링 (activeFilters에 해당 카테고리가 있는지 확인)
    const isFiltered = activeFilters.value.includes(
      event.extendedProps.category,
    );

    return isSameMonth && isFiltered;
  });
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
  eventClick: function (info) {
    // info.event를 통해 클릭된 이벤트의 정보에 접근할 수 있습니다.
    console.log('클릭된 이벤트:', info.event.title);
    openSchedule();
  },
  dayCellDidMount: function (info) {
    const year = info.date.getFullYear();
    const month = String(info.date.getMonth() + 1).padStart(2, '0');
    const day = String(info.date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    // 해당 날짜가 공휴일인지 확인
    if (holidays[dateStr]) {
      // 1. 날짜 숫자 요소(.fc-daygrid-day-number)를 찾아서 클래스 추가
      const dayNumberEl = info.el.querySelector('.fc-daygrid-day-number');
      if (dayNumberEl) {
        dayNumberEl.classList.add('is-holiday');
      }

      // 2. (선택사항) 셀 전체(.fc-daygrid-day)에 클래스를 넣고 싶다면
      // info.el.classList.add('holiday-cell');
    }
  },

  dayCellContent: function (info) {
    const year = info.date.getFullYear();
    const month = String(info.date.getMonth() + 1).padStart(2, '0');
    const day = String(info.date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    const dayNumber = info.dayNumberText.replace('일', '');
    const holidayName = holidays[dateStr];

    if (holidayName) {
      // 숫자 뒤에 공휴일 명칭만 추가 (HTML 구조 유지)
      return {
        html: `<span class="fc-day-number-text">${dayNumber}</span>
               <span class="fc-day-holiday-name">${holidayName}</span>`,
      };
    }
    return dayNumber;
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
  // 1. '전체' 체크박스를 클릭한 경우
  if (key === 'all') {
    if (activeFilters.value.includes('all')) {
      // '전체'가 체크됨 -> 모든 카테고리 키를 배열에 삽입
      activeFilters.value = categories.value.map((cat) => cat.key);
    } else {
      // '전체'가 해제됨 -> 모든 선택 해제
      activeFilters.value = [];
    }
  }
  // 2. 개별 카테고리(상품 소싱, 판매 관리 등)를 클릭한 경우
  else {
    // '전체(all)'를 제외한 실제 카테고리 키들만 추출
    const categoryKeysWithoutAll = categories.value
      .map((cat) => cat.key)
      .filter((k) => k !== 'all');

    // 현재 체크된 항목들 중 개별 카테고리가 모두 포함되어 있는지 확인
    const isAllOthersSelected = categoryKeysWithoutAll.every((k) =>
      activeFilters.value.includes(k),
    );

    if (isAllOthersSelected) {
      // 모든 개별 항목이 체크되었다면 'all' 키도 추가 (전체 체크박스 활성화)
      if (!activeFilters.value.includes('all')) {
        activeFilters.value.push('all');
      }
    } else {
      // 하나라도 체크 해제되었다면 'all' 키를 제거 (전체 체크박스 비활성화)
      activeFilters.value = activeFilters.value.filter((k) => k !== 'all');
    }
  }
};

onMounted(async () => {
  await nextTick();
  jumpToDate();
});
</script>
