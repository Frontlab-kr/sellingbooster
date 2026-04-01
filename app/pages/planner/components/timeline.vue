<template>
  <div class="timeline-wrapper">
    <!-- 상단 헤더 -->
    <div class="timeline-header">
      <div class="month-nav">
        <button @click="prevMonth" class="arrow-btn">‹</button>

        <div class="current-month">
          <select
            v-model="selectedMonth"
            @change="goToSelectedMonth"
            class="month-select"
          >
            <option v-for="m in 12" :key="m" :value="m">{{ m }}월</option>
          </select>
          <select
            v-model="selectedYear"
            @change="goToSelectedMonth"
            class="year-select"
          >
            <option v-for="y in years" :key="y" :value="y">{{ y }}년</option>
          </select>
        </div>

        <button @click="nextMonth" class="arrow-btn">›</button>
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
            class="color-dot"
            :style="{ backgroundColor: cat.color }"
          ></span>
          {{ cat.label }}
        </label>
      </div>
    </div>

    <!-- 타임라인 리스트 -->
    <div class="timeline-list">
      <div v-for="day in sortedDays" :key="day.dateStr" class="timeline-day">
        <div class="date-column">
          <div class="date">{{ day.formattedDate }}</div>
          <div class="weekday">{{ day.weekday }}</div>
        </div>

        <div class="events-column">
          <div
            v-for="event in day.events"
            :key="event.id"
            class="timeline-event"
            :style="{
              backgroundColor: event.backgroundColor + '15',
              borderLeftColor: event.backgroundColor,
            }"
          >
            {{ event.title }}
          </div>
        </div>
      </div>

      <div v-if="sortedDays.length === 0" class="no-events">
        {{ selectedYear }}년 {{ selectedMonth }}월에 등록된 이벤트가 없습니다.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 카테고리
const categories = ref([
  { key: 'all', label: '전체', color: '#666666' },
  { key: 'marketing', label: '광고/마케팅', color: '#7B8FF7' },
  { key: 'product', label: '상품 소싱', color: '#0090FF' },
  { key: 'sales', label: '판매 관리', color: '#00C38E' },
  { key: 'schedule', label: '정산 일정', color: '#FF5252' },
  { key: 'tax', label: '세금/회계', color: '#FFB84D' },
  { key: 'loan', label: '대출/자금', color: '#00BCD4' },
]);

const activeFilters = ref(['all']);

// === 여러 달 데이터를 추가로 넣음 (테스트용) ===
const allEvents = ref([
  // 3월 데이터
  {
    id: '1',
    title: '광고 예산 점검',
    start: '2026-03-05',
    backgroundColor: '#7B8FF7',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '2',
    title: '원천세 및 지방세 납부',
    start: '2026-03-05',
    backgroundColor: '#FFB84D',
    extendedProps: { category: 'tax' },
  },
  {
    id: '3',
    title: '쿠팡 정산',
    start: '2026-03-06',
    backgroundColor: '#FF5252',
    extendedProps: { category: 'schedule' },
  },
  {
    id: '10',
    title: '이월 상품 재고 관리',
    start: '2026-03-25',
    backgroundColor: '#00C38E',
    extendedProps: { category: 'sales' },
  },

  // 4월 데이터 (화살표로 이동했을 때 보이게)
  {
    id: '11',
    title: '4월 상품 소싱 미팅',
    start: '2026-04-02',
    backgroundColor: '#0090FF',
    extendedProps: { category: 'product' },
  },
  {
    id: '12',
    title: '4월 광고 예산 집행',
    start: '2026-04-08',
    backgroundColor: '#7B8FF7',
    extendedProps: { category: 'marketing' },
  },
  {
    id: '13',
    title: '부가세 신고',
    start: '2026-04-15',
    backgroundColor: '#FFB84D',
    extendedProps: { category: 'tax' },
  },

  // 2월 데이터 (이전 달 테스트용)
  {
    id: '14',
    title: '2월 정산 마감',
    start: '2026-02-28',
    backgroundColor: '#FF5252',
    extendedProps: { category: 'schedule' },
  },
]);

const selectedMonth = ref(3);
const selectedYear = ref(2026);
const years = ref(Array.from({ length: 10 }, (_, i) => 2022 + i));

// 선택된 년/월에 해당하는 이벤트만 필터링
const filteredEvents = computed(() => {
  let events = allEvents.value.filter((event) => {
    const eventDate = new Date(event.start);
    return (
      eventDate.getFullYear() === selectedYear.value &&
      eventDate.getMonth() + 1 === selectedMonth.value
    );
  });

  // 카테고리 필터 적용
  if (!activeFilters.value.includes('all')) {
    events = events.filter((e) =>
      activeFilters.value.includes(e.extendedProps.category),
    );
  }
  return events;
});

// 날짜별 그룹핑
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

// 월 이동 함수
const goToSelectedMonth = () => {
  // 월 변경 시 자동으로 타임라인이 업데이트됨 (computed 덕분)
};

const prevMonth = () => {
  let m = selectedMonth.value;
  let y = selectedYear.value;
  if (m === 1) {
    m = 12;
    y--;
  } else m--;
  selectedMonth.value = m;
  selectedYear.value = y;
};

const nextMonth = () => {
  let m = selectedMonth.value;
  let y = selectedYear.value;
  if (m === 12) {
    m = 1;
    y++;
  } else m++;
  selectedMonth.value = m;
  selectedYear.value = y;
};

const toggleFilter = (key) => {
  if (key === 'all') {
    activeFilters.value = ['all'];
  } else {
    if (activeFilters.value.includes('all')) activeFilters.value = [];
    if (activeFilters.value.includes(key)) {
      activeFilters.value = activeFilters.value.filter((k) => k !== key);
    } else {
      activeFilters.value.push(key);
    }
    if (activeFilters.value.length === 0) activeFilters.value = ['all'];
  }
};
</script>

<style scoped>
.timeline-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  padding: 24px;
  max-width: 100%;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 20px;
}

.month-nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.current-month {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
}

.month-select,
.year-select {
  padding: 8px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  font-size: 18px;
}

.arrow-btn {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.arrow-btn:hover {
  background: #f8f9fa;
  border-color: #aaa;
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
  gap: 7px;
  cursor: pointer;
  user-select: none;
}

.color-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.timeline-list {
  border-top: 1px solid #f1f1f1;
}

.timeline-day {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #f1f1f1;
  gap: 40px;
}

.date-column {
  width: 90px;
  flex-shrink: 0;
  text-align: right;
}

.date {
  font-size: 19px;
  font-weight: 700;
  color: #222;
}

.weekday {
  font-size: 14px;
  color: #888;
  margin-top: 4px;
}

.events-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.timeline-event {
  padding: 11px 16px;
  border-radius: 8px;
  border-left: 5px solid;
  font-size: 15px;
  line-height: 1.45;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-events {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 16px;
}
</style>
