<template>
  <SbMobileInfo />
  <div class="sb-report">
    <div class="sb-report-head">
      <div class="sb-report-head__title">
        <h5>성과 히스토리</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-report-contents">
      <div class="sb-report-contents-head">
        <h4>최적가 가격 · 상품명 점검 · CS 대응 성과를 한눈에 확인해보세요.</h4>
      </div>
      <div class="sb-report-history">
        <div class="sb-report-history-result">
          <div class="sb-report-history-chart">
            <div class="sb-report-history-chart-head">
              <h5>판매성과 차트</h5>
              <dl>
                <dt>오늘의 성과</dt>
                <dd>
                  <p>
                    결제 금액 :
                    <strong class="text-primary">123,456,789</strong>원
                  </p>
                  <p>
                    결제 건수:
                    <strong class="text-primary">75</strong>건
                  </p>
                </dd>
              </dl>
            </div>
            <div class="sb-report-history-chart-menu">
              <div class="sb-report-history-chart-menu__tab">
                <div class="sb-tab-circle">
                  <Button label="일" variant="text" class="active" />
                  <Button label="주" variant="text" />
                  <Button label="월" variant="text" />
                </div>
                <p>기간 : 03.01~03.30 (오늘 기준 이전 30일)</p>
              </div>
              <div class="sb-report-history-chart-menu__label">
                <p>결제 금액(만원)</p>
                <p>결제 건수(건)</p>
                <p>셀링부스터 액션</p>
              </div>
            </div>
          </div>
          <div class="sb-report-history-bna">
            <div class="sb-report-history-bna-head">
              <h5>솔루션 이용 전후의 성과 성적표</h5>
            </div>
            <div class="sb-report-history-bna-menu">
              <div class="sb-report-history-bna-menu__date">
                <strong>기준 일자</strong>
                <DatePicker v-model="dates" placeholder="날짜를 선택해주세요" />
              </div>
              <p>산출 대상 기간 : 2026.03.17~2026.03.23</p>
            </div>
            <div class="sb-report-history-bna-list">
              <div class="sb-report-history-bna-list-item">
                <div class="sb-report-history-bna-list-item-head">
                  <h5>최적가 적용 효과 레포트</h5>
                  <p>
                    가격 최적가 조정 상품 수 :
                    <strong class="text-primary">35</strong>개
                  </p>
                </div>
                <div class="sb-report-history-bna-list-item-body">
                  <div class="sb-report-history-bna-list-item-chart">
                    <dl>
                      <dt>
                        <h6>전</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>7일간 매출액</p>
                            <h6>87,620원</h6>
                          </li>
                          <li>
                            <p>7일간 주문량</p>
                            <h6>12건</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <dl class="active">
                      <dt>
                        <h6>후</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>7일간 매출액</p>
                            <h6>587,620원</h6>
                          </li>
                          <li>
                            <p>7일간 주문량</p>
                            <h6>12건</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-foot">
                  <h6>주문량 변화</h6>
                  <div class="sb-report-history-bna-list-item-foot__price">
                    <h5>158</h5>
                    <span>%</span>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-button">
                  <Button
                    label="상품별 성과 히스토리 보기"
                    severity="contrast"
                    outlined
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-report-history-date"></div>
        <SbBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemMessage from '@/assets/icons/system/message.svg?component';
import IconSnbDocument from '@/assets/icons/snb/document.svg?component';
import IconSystemFileCheck from '@/assets/icons/system/file-check.svg?component';
import IconSystemFaceSad from '@/assets/icons/system/face-sad.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

import IconSystemSmartstore from '@/assets/icons/system/smartstore.png';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '성과 리포트' },
  { label: '성과 히스토리' },
]);

//data
const dailyStats = ref([
  {
    date: '오늘',
    orderCount: '123,456,789 건',
    totalAmount: '123,456,789 건',
    confirmCount: '123,456,789 건',
    refundCount: '123,456,789 건',
    cancelCount: '123,456,789 건',
  },
  {
    date: 'D-1 (어제)',
    orderCount: '123,456,789 건',
    totalAmount: '123,456,789 건',
    confirmCount: '123,456,789 건',
    refundCount: '123,456,789 건',
    cancelCount: '123,456,789 건',
  },
  {
    date: 'D-2 (그제)',
    orderCount: '123,456,789 건',
    totalAmount: '123,456,789 건',
    confirmCount: '123,456,789 건',
    refundCount: '123,456,789 건',
    cancelCount: '123,456,789 건',
  },
]);

//chart
const salesStatsData = ref([
  {
    name: '매출 금액',
    unit: '원',
    data: [
      { label: 'D-1', value: 8500, color: 'successColor' },
      { label: '오늘', value: 1236, color: 'primaryColor' },
    ],
  },
  {
    name: '주문 건수',
    unit: '건',
    data: [
      { label: 'D-1', value: 4225, color: 'successColor' },
      { label: '오늘', value: 2222, color: 'primaryColor' },
    ],
  },
]);
const comparisonStatsData = ref([
  {
    name: '주문 건수',
    unit: '건',
    data: [
      { label: 'D-2', value: 4000, color: 'warnColor' }, // 노란색
      { label: 'D-1', value: 4000, color: 'successColor' }, // 초록색
      { label: '오늘', value: 4000, color: 'primaryColor' }, // 보라색
    ],
  },
  {
    name: '총 결제 금액',
    unit: '원',
    data: [
      { label: 'D-2', value: 4000, color: 'warnColor' },
      { label: 'D-1', value: 4000, color: 'successColor' },
      { label: '오늘', value: 4000, color: 'primaryColor' },
    ],
  },
  {
    name: '결제 확정 건수',
    unit: '건',
    data: [
      { label: 'D-2', value: 4000, color: 'warnColor' },
      { label: 'D-1', value: 4000, color: 'successColor' },
      { label: '오늘', value: 4000, color: 'primaryColor' },
    ],
  },
  {
    name: '환불 건수',
    unit: '건',
    data: [
      { label: 'D-2', value: 4000, color: 'warnColor' },
      { label: 'D-1', value: 4000, color: 'successColor' },
      { label: '오늘', value: 4000, color: 'primaryColor' },
    ],
  },
  {
    name: '취소 건수',
    data: [
      { label: 'D-2', value: 4000, color: 'warnColor' },
      { label: 'D-1', value: 4000, color: 'successColor' },
      { label: '오늘', value: 4000, color: 'primaryColor' },
    ],
  },
]);

const csChartData = ref([
  { value: 2696, name: '일반문의', color: 'secondaryColor' },
  { value: 449, name: '요청/제안', color: 'warnColor' },
  { value: 449, name: '반불만/불평', color: 'neutralColor' },
]);
const categoryStats = ref([
  { value: 13, name: '사이즈 문의', color: 'infoColor' },
  { value: 1, name: '배송 문의', color: 'successColor' },
  { value: 10, name: '재고/옵션', color: 'secondaryColor' },
  { value: 5, name: '교환/반품', color: 'dangerColor' },
  { value: 20, name: '상품 정보', color: 'warnColor' },
  { value: 20, name: '가격/할인', color: 'primaryColor' },
  { value: 24, name: '기타', color: 'contrastColor' },
]);
const inquiryTypeStats = ref([
  {
    value: 20000,
    color: 'successColor',
    badgeValue: '매우좋음',
  },
  { value: 15000, color: 'secondaryColor', badgeValue: '좋음' },
  {
    value: 10000,
    color: 'infoColor',
    badgeValue: '보통',
  },

  { value: 5000, color: 'warnColor', badgeValue: '나쁨' },
  { value: 1000, color: 'dangerColor', badgeValue: '매우나쁨' },
]);
</script>
