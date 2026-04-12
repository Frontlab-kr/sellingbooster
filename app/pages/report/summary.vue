<template>
  <SbMobileInfo />
  <div class="sb-report">
    <div class="sb-report-head">
      <div class="sb-report-head__title">
        <h5>성과 요약</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-report-contents">
      <div class="sb-report-contents-head">
        <h4>성과 확인, 성장 포인트를 빠르게 확인하세요.</h4>
      </div>
      <div class="sb-report-summary">
        <div class="sb-report-summary-section">
          <div class="sb-report-summary-section-head">
            <h5>
              <img
                :src="IconSystemSmartstore"
                alt="smart store"
                class="ico-system-smartstore"
              />
              스마트스토어
            </h5>
          </div>
          <div class="grid">
            <div class="col">
              <dl>
                <dt>전일 매출 / 주문 요약</dt>
                <dd>
                  <SbChartComparisonBar :chartData="salesStatsData" />
                </dd>
              </dl>
            </div>
            <div class="col">
              <dl>
                <dt>오늘 해야 할 CS 운영</dt>
                <dd>
                  <SbChartDoughnut02
                    :chartData="csChartData"
                    :show-center-text="true"
                  />
                </dd>
              </dl>
            </div>
            <div class="col">
              <dl>
                <dt>셀링부스터 적용 상품 (최근 7일)</dt>
                <dd>
                  <div class="sb-report-summary-head-list">
                    <ul>
                      <li>
                        <p>셀부에 연동된 전체 상품 수</p>
                        <div class="sb-report-summary-head-list__number">
                          <h4 class="color-up">781,913</h4>
                          <h5>건</h5>
                        </div>
                      </li>
                      <li>
                        <p>최적가 가격 조정 상품 수</p>
                        <div class="sb-report-summary-head-list__number">
                          <h4 class="color-down">9,238</h4>
                          <h5>건</h5>
                        </div>
                      </li>
                      <li>
                        <p>상품명 점검 상품 수</p>
                        <div class="sb-report-summary-head-list__number">
                          <h4 class="color-down">9,238</h4>
                          <h5>건</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="sb-report-summary-section">
          <div class="sb-report-summary-section-head">
            <h5>오늘의 성과를 바로 비교해보세요.</h5>
            <p>데이터 동기화 일시 : 2026.03.20 15:49:26</p>
          </div>
        </div>

        <div class="sb-report-summary-section">
          <div class="sb-report-summary-section-head">
            <h5></h5>
            <p>데이터 동기화 일시 : 2026.03.20 15:49:26</p>
          </div>
          <div class="sb-report-summary-chart">
            <SbChartComparisonBar :chartData="comparisonStatsData" />
          </div>
          <DataTable
            v-scroll-end
            :value="dailyStats"
            responsiveLayout="scroll"
            scrollable
            class="sb-ktrend-datatable"
          >
            <Column field="date" header="일자" style="min-width: 150px">
              <template #body="slotProps">
                {{ slotProps.data.date }}
              </template>
            </Column>

            <Column
              field="orderCount"
              header="주문 건수"
              headerClass="justify-content-end"
              bodyClass="text-right"
              style="min-width: 150px"
            >
              <template #body="slotProps">
                {{ slotProps.data.orderCount }}
              </template>
            </Column>

            <Column
              field="totalAmount"
              header="총 결제 금액"
              headerClass="justify-content-end"
              bodyClass="text-right"
              style="min-width: 180px"
            >
              <template #body="slotProps">
                {{ slotProps.data.totalAmount }}
              </template>
            </Column>

            <Column
              field="confirmCount"
              header="결제 확정 건수"
              headerClass="justify-content-end"
              bodyClass="text-right"
              style="min-width: 150px"
            >
              <template #body="slotProps">
                {{ slotProps.data.confirmCount }}
              </template>
            </Column>

            <Column
              field="refundCount"
              header="환불 건수"
              headerClass="justify-content-end"
              bodyClass="text-right"
              style="min-width: 150px"
            >
              <template #body="slotProps">
                {{ slotProps.data.refundCount }}
              </template>
            </Column>

            <Column
              field="cancelCount"
              header="취소 건수"
              headerClass="justify-content-end"
              bodyClass="text-right"
              style="min-width: 150px"
            >
              <template #body="slotProps">
                {{ slotProps.data.cancelCount }}
              </template>
            </Column>

            <template #empty>
              <div class="sb-nodata">
                <IconIllustrationSmile class="ico-illustration-smile" />
                <div class="sb-nodata__text">
                  <p>조회된 데이터가 없습니다.</p>
                </div>
              </div>
            </template>
          </DataTable>
        </div>

        <div class="sb-report-summary-section">
          <div class="sb-report-summary-section-head">
            <h5></h5>
            <p>최근 3일간의 주문 데이터 입니다.</p>
          </div>
          <div class="grid">
            <div class="col-3">
              <div class="grid">
                <div class="col">
                  <dl>
                    <dt>오늘 주문 건수</dt>
                    <dd>
                      <div class="sb-report-summary-number">
                        <h4>123,456</h4>
                        <h5>건</h5>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="grid">
                <div class="col">
                  <dl>
                    <dt>오늘 총 결제 금액</dt>
                    <dd>
                      <div class="sb-report-summary-number">
                        <h4>123,456</h4>
                        <h5>건</h5>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="col-9">
              <dl>
                <dd></dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="sb-report-summary-section">
          <div class="sb-report-summary-section-head">
            <h5>관리중인 상품들 한눈에 확인하세요.</h5>
            <p>데이터 동기화 일시 : 2026.03.20 15:49:26</p>
          </div>
          <div class="sb-report-summary-product">
            <div class="sb-report-summary-product-item">
              <div class="grid">
                <div class="col">
                  <dl>
                    <dt>스토어 전체 상품</dt>
                    <dd>
                      <h6>781,913 건</h6>
                    </dd>
                  </dl>
                </div>
                <div class="col">
                  <dl>
                    <dt>가격 최적가 적응</dt>
                    <dd>
                      <h6>123,456 원</h6>
                    </dd>
                  </dl>
                </div>
                <div class="col">
                  <dl>
                    <dt>가격 최적가 제안</dt>
                    <dd>
                      <h6>234,567 원</h6>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="grid">
                <div class="col">
                  <dl>
                    <dt>
                      <h5>가격 경쟁력 분석</h5>
                    </dt>
                    <dd>
                      <SbChartSegmentBar
                        :chart-data="inquiryTypeStats"
                        :maxValue="30000"
                        unit-text="건"
                      />
                    </dd>
                  </dl>
                </div>
              </div>

              <div class="sb-report-summary-product-list">
                <div class="sb-report-summary-product-list-head">
                  최근 변경 상품 : <strong class="text-primary">10</strong>
                </div>
                <div class="sb-report-summary-product-list-body" v-scroll-end>
                  <div class="sb-report-summary-product-list-scroll">
                    <NuxtLink
                      to="/"
                      class="sb-report-summary-product-list-item"
                      v-for="value in 8"
                    >
                      <div class="sb-report-summary-product-list-item__thumb">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div
                        class="sb-report-summary-product-list-item__contents"
                      >
                        <div class="sb-report-summary-product-list-item__title">
                          뉴트리코어 하이퍼셀오메가3
                        </div>
                        <div class="sb-report-summary-product-list-item__price">
                          <span>변경 전 28,000원</span>
                          <IconArrowRight class="ico-arrow-right" />
                          <strong>변경가 28,000원</strong>
                        </div>
                        <div class="sb-report-summary-product-list-item__text">
                          (최적가 변경일 : 2026.03.13 16:23:16)
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
                <div class="sb-report-summary-product-list-foot">
                  <Button
                    label="최저가 상품품 제안 보기"
                    severity="contrast"
                    outlined
                  />
                </div>
              </div>
            </div>
            <div class="sb-report-summary-product-item">
              <div class="grid">
                <div class="col">
                  <dl>
                    <dt>스토어 전체 상품</dt>
                    <dd>
                      <h6>781,913 건</h6>
                    </dd>
                  </dl>
                </div>
                <div class="col">
                  <dl>
                    <dt>가격 최적가 적응</dt>
                    <dd>
                      <h6>123,456 원</h6>
                    </dd>
                  </dl>
                </div>
                <div class="col">
                  <dl>
                    <dt>가격 최적가 제안</dt>
                    <dd>
                      <h6>234,567 원</h6>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="grid">
                <div class="col">
                  <dl>
                    <dt>
                      <h5>가격 경쟁력 분석</h5>
                    </dt>
                    <dd>
                      <SbChartSegmentBar
                        :chart-data="inquiryTypeStats"
                        :maxValue="30000"
                        unit-text="건"
                      />
                    </dd>
                  </dl>
                </div>
              </div>

              <div class="sb-report-summary-product-list">
                <div class="sb-report-summary-product-list-head">
                  최근 변경 상품 : <strong class="text-primary">10</strong>
                </div>
                <div class="sb-report-summary-product-list-body" v-scroll-end>
                  <div class="sb-report-summary-product-list-scroll">
                    <NuxtLink
                      to="/"
                      class="sb-report-summary-product-list-item"
                      v-for="value in 8"
                    >
                      <div class="sb-report-summary-product-list-item__thumb">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div
                        class="sb-report-summary-product-list-item__contents"
                      >
                        <div class="sb-report-summary-product-list-item__title">
                          뉴트리코어 하이퍼셀오메가3
                        </div>
                        <div class="sb-report-summary-product-list-item__price">
                          <span>변경 전 28,000원</span>
                          <IconArrowRight class="ico-arrow-right" />
                          <strong>변경가 28,000원</strong>
                        </div>
                        <div class="sb-report-summary-product-list-item__text">
                          (최적가 변경일 : 2026.03.13 16:23:16)
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
                <div class="sb-report-summary-product-list-foot">
                  <NuxtLink to="/sales/product">
                    <Button
                      label="상품명 점검 하기"
                      severity="contrast"
                      outlined
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sb-report-summary-section">
          <div class="sb-report-summary-section-head">
            <h5>CS 현황을 빠르게 확인하세요.</h5>
          </div>
          <div class="sb-report-summary-cs">
            <div class="grid">
              <div class="col-3">
                <div class="grid">
                  <div class="col-12">
                    <dl>
                      <dt>총 문의 건수</dt>
                      <dd>
                        <h6>123,122건</h6>
                      </dd>
                    </dl>
                  </div>
                  <div class="col-12">
                    <dl>
                      <dt>답변 완료율</dt>
                      <dd>
                        <h6>72%</h6>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <dl>
                  <dt>최근 7일간 CS 현황(2026.03.13~2026.03.20)</dt>
                  <dd>
                    <div class="sb-report-summary-chart">
                      <SbChartStackedBar
                        :chart-data="categoryStats"
                        :bar-width="20"
                        :grid-left="76"
                        :grid-right="76"
                        unit-text=""
                      />
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="grid">
              <div class="col-4">
                <dl>
                  <dt>오늘 문의 건수</dt>
                  <dd>
                    <h6>1,456건</h6>
                  </dd>
                </dl>
              </div>
              <div class="col-4">
                <dl>
                  <dt>답변 완료 건수</dt>
                  <dd>
                    <h6>1123,456건</h6>
                  </dd>
                </dl>
              </div>
              <div class="col-4">
                <dl>
                  <dt>미 답변 건수</dt>
                  <dd>
                    <h6>123,456건</h6>
                  </dd>
                </dl>
              </div>
              <div class="col-4">
                <dl>
                  <dt>AI 답변 생성 대기 건수</dt>
                  <dd>
                    <h6>123,456건</h6>
                  </dd>
                </dl>
              </div>
              <div class="col-4">
                <dl>
                  <dt>취소 요청 건수</dt>
                  <dd>
                    <h6>123,456건</h6>
                  </dd>
                </dl>
              </div>
              <div class="col-4">
                <dl>
                  <dt>반품 진행 건수</dt>
                  <dd>
                    <h6>123,456건</h6>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
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
  { label: '성과 요약' },
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
