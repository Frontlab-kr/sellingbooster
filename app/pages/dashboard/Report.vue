<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>채널별 페이스 리포트</h5>
      <div class="sb-tab-circle">
        <Button label="네이버쇼핑" variant="text" class="active" />
        <Button label="쿠팡" variant="text" />
        <Button label="11번가" variant="text" />
        <Button label="옥션" variant="text" />
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-dashboard-report-contents">
        <div class="sb-dashboard-report-info">
          <div class="sb-dashboard-report-info-item">
            <div class="sb-dashboard-report-info-item__title">
              <strong>주문</strong>
              <Button variant="text">
                <span class="p-button-label">26.01.14 15:38 기준</span>
                <IconSystemRotateRight class="ico-system-rotate-right" />
              </Button>
            </div>
            <div class="sb-dashboard-report-info-item__text">
              <h3>12,356</h3>
              <p>13,123,300원</p>
            </div>
          </div>
          <div class="sb-dashboard-report-info-item">
            <div class="sb-dashboard-report-info-item__title">
              <strong>반품</strong>
              <Button variant="text">
                <span class="p-button-label">26.01.14 15:38 기준</span>
                <IconSystemRotateRight class="ico-system-rotate-right" />
              </Button>
            </div>
            <div class="sb-dashboard-report-info-item__text">
              <h3>6</h3>
              <p>325,300원</p>
            </div>
          </div>
        </div>
        <div class="sb-dashboard-report-chart">
          <div class="sb-dashboard-report-chart-head">
            <Select
              ref="selectRef"
              v-model="selectedSort"
              :options="selectedSortOption"
              optionLabel="name"
              size="small"
              class="p-select-text"
              panelClass="p-select-overlay--text"
              :pt="{
                overlay: {
                  onclick: (event) => {
                    if (event.target === event.currentTarget) {
                      selectRef.hide();
                    }
                  },
                },
              }"
            />
            <div class="sb-dashboard-report-chart-label">
              <p class="color-primary">주문 건수</p>
              <p class="color-secondary">주문 금액</p>
            </div>
          </div>
          <div class="sb-dashboard-report-chart-body">
            <SbChartBarDashboard :chart-data="trendData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemRotateRight from '@/assets/icons/system/rotate-right.svg';

//sort
const selectRef = ref(null);
const selectedSortOption = ref([{ name: '주간' }, { name: '월간' }]);
const selectedSort = ref(selectedSortOption.value[0]);

//data
const trendData = ref([
  { date: '01.02', count: 2500, amount: 3000 },
  { date: '01.03', count: 4800, amount: 5800 },
  { date: '01.04', count: 12356, amount: 15423 }, // 스크린샷 강조 데이터
  { date: '01.05', count: 3200, amount: 4000 },
  { date: '01.06', count: 5600, amount: 8000 },
  { date: '01.07', count: 3800, amount: 5000 },
  { date: '01.08', count: 4800, amount: 9000 },
]);
</script>
