<template>
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>CS 센터</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-contents-head">
        <h4>
          AI가 문의 데이터를 분석해<br />
          유형별ㆍ분위기별ㆍ상품별 패턴과 운영 인사이트를 도출해드려요.
        </h4>
      </div>
      <div class="sb-tab">
        <Button
          label="상품 문의 내역"
          variant="text"
          :class="{ active: activeTab === 0 }"
          @click="activeTab = 0"
        />
        <Button
          label="스토어 문의 내역"
          variant="text"
          :class="{ active: activeTab === 1 }"
          @click="activeTab = 1"
        />
      </div>
      <div class="sb-sales-cs" v-if="activeTab === 0">
        <div class="sb-sales-cs-head">
          <div class="sb-sales-cs-chart__text">
            네이버 쇼핑 기준 데이터 입니다.
          </div>
          <div class="sb-sales-cs-chart">
            <div class="grid">
              <div class="col">
                <dl>
                  <dt>총 문의 건수</dt>
                  <dd>
                    <h4>122</h4>
                  </dd>
                </dl>
              </div>
              <div class="col">
                <dl>
                  <dt>답변 완료율</dt>
                  <dd>
                    <h4>98</h4>
                    <h5>%</h5>
                  </dd>
                </dl>
              </div>
              <div class="col">
                <dl>
                  <dt>분석 기간</dt>
                  <dd>
                    <h4>03.01~03.02</h4>
                  </dd>
                </dl>
              </div>
              <div class="col">
                <dl>
                  <dt>문의 유형 수</dt>
                  <dd>
                    <h4>7</h4>
                    <h5>개</h5>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-sales-cs-body">
          <div class="sb-sales-cs-product-head">
            <div class="sb-chip">
              <div class="sb-chip__title">분석 기간 선택</div>
              <div class="sb-radio">
                <div
                  class="sb-radio-item"
                  v-for="item in radioRange"
                  :key="item.id"
                >
                  <RadioButton
                    v-model="selectedRevenue"
                    :inputId="item.id"
                    :value="item.value"
                    name="revenueRange"
                  />
                  <label :for="item.id">{{ item.label }}</label>
                </div>
              </div>
            </div>
            <Button
              severity="primary"
              size="large"
              label="문의 데이터 분석 시작"
            />
          </div>
          <div class="sb-sales-cs-product-body">
            <div class="sb-sales-cs-product-status">
              <div class="sb-sales-cs-product-status__text">
                분위기가 복합적인 경우 주된 감정으로 분류됩니다.
              </div>
              <div class="grid">
                <div class="col-9">
                  <dl>
                    <dt>
                      <h5>문의 유형 분포</h5>
                    </dt>
                    <dd>
                      <SbChartSegmentBar
                        :chart-data="inquiryTypeStats"
                        :maxValue="50"
                        unit-text="건"
                        show-percent
                      />
                    </dd>
                  </dl>
                </div>
                <div class="col-3">
                  <dl>
                    <dt><h5>문의 분위기 종류</h5></dt>
                    <dd></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="sb-sales-cs-product-table">
              <div class="sb-table">
                <DataTable
                  v-model:expandedRows="expandedRows"
                  :value="productQnaList"
                  dataKey="id"
                  :rowClass="rowClass"
                  responsiveLayout="scroll"
                  class="table-expanded"
                >
                  <Column
                    field="productName"
                    header="상품명"
                    style="width: 300px"
                  >
                    <template #body="slotProps">
                      <div
                        class="flex align-items-center"
                        @click="toggleRow(slotProps.data)"
                      >
                        <span>{{ slotProps.data.productName }}</span>
                      </div>
                    </template>
                  </Column>

                  <Column
                    field="sizeInquiry"
                    header="사이즈 문의"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.sizeInquiry
                    }}</template>
                  </Column>

                  <Column
                    field="deliveryInquiry"
                    header="배송 문의"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.deliveryInquiry
                    }}</template>
                  </Column>

                  <Column
                    field="stockOption"
                    header="재고 / 옵션"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.stockOption
                    }}</template>
                  </Column>

                  <Column
                    field="exchangeReturn"
                    header="교환 / 반품"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.exchangeReturn
                    }}</template>
                  </Column>

                  <Column
                    field="productInfo"
                    header="상품 정보"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.productInfo
                    }}</template>
                  </Column>

                  <Column
                    field="priceDiscount"
                    header="가격 / 할인"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.priceDiscount
                    }}</template>
                  </Column>

                  <Column
                    field="etc"
                    header="기타"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">
                      {{ slotProps.data.etc === 0 ? '-' : slotProps.data.etc }}
                    </template>
                  </Column>

                  <Column
                    field="total"
                    header="합계"
                    bodyClass="text-right"
                    style="width: 150px"
                  >
                    <template #body="slotProps">{{
                      slotProps.data.total
                    }}</template>
                  </Column>
                  <template #expansion="slotProps">
                    <SbChartStackedBar :chart-data="ageStats" />
                  </template>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-sales-cs" v-else-if="activeTab === 1">
        <div class="sb-sales-cs-head">
          <div class="sb-sales-cs-chart">
            <div class="grid">
              <div class="col-7">
                <div class="grid">
                  <div class="col-6">
                    <dl>
                      <dt>전체 문의 현황</dt>
                      <dd>
                        <h4>999,999</h4>
                        <h5>건</h5>
                      </dd>
                    </dl>
                  </div>
                  <div class="col-6">
                    <dl>
                      <dt>답변 완료 현황</dt>
                      <dd>
                        <h4 class="text-info">19,999</h4>
                        <h5>건</h5>
                      </dd>
                    </dl>
                  </div>
                  <div class="col-6">
                    <dl>
                      <dt>오늘자 신규 등록 현황</dt>
                      <dd>
                        <h4>19</h4>
                        <h5>건</h5>
                      </dd>
                    </dl>
                  </div>
                  <div class="col-6">
                    <dl>
                      <dt>7일 이상 지연된 미답변 현황</dt>
                      <dd>
                        <h4 class="text-danger">999</h4>
                        <h5>건</h5>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <dl class="sb-sales-cs-chart-item">
                  <dt>문의 유형 별 현황</dt>
                  <dd>
                    <SbChartDoughnut02 :chartData="csChartData" />
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-sales-cs-body">
          <div class="sb-sales-cs-search">
            <div class="sb-sales-cs-search-item">
              <label>기간</label>
              <div class="sb-sales-cs-search-item-form">
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  style="min-width: 190px"
                />
                <DatePicker v-model="dates" selectionMode="range" />
              </div>
            </div>
            <div class="sb-sales-cs-search-item">
              <label>유형</label>
              <div class="sb-checkbox">
                <div
                  v-for="opt in filterOptions.types"
                  :key="opt.value"
                  class="sb-checkbox-item"
                >
                  <Checkbox
                    :inputId="'type-' + opt.value"
                    name="typeGroup"
                    :value="opt.value"
                    v-model="selectedTypes"
                  />
                  <label :for="'type-' + opt.value">{{ opt.label }}</label>
                </div>
              </div>
            </div>
            <div class="sb-sales-cs-search-item">
              <label>답변 여부</label>
              <div class="sb-checkbox">
                <div
                  v-for="opt in filterOptions.replyStatus"
                  :key="opt.value"
                  class="sb-checkbox-item"
                >
                  <Checkbox
                    :inputId="'reply-' + opt.value"
                    name="replyGroup"
                    :value="opt.value"
                    v-model="selectedReplyStatus"
                  />
                  <label :for="'reply-' + opt.value">{{ opt.label }}</label>
                </div>
              </div>
            </div>
            <div class="sb-sales-cs-search-item">
              <label>분석 여부</label>
              <div class="sb-checkbox">
                <div
                  v-for="opt in filterOptions.analysisStatus"
                  :key="opt.value"
                  class="sb-checkbox-item"
                >
                  <Checkbox
                    :inputId="'analysis-status-' + opt.value"
                    name="analysisStatusGroup"
                    :value="opt.value"
                    v-model="selectedAnalysisStatus"
                  />
                  <label :for="'analysis-status-' + opt.value">{{
                    opt.label
                  }}</label>
                </div>
              </div>
            </div>
            <div class="sb-sales-cs-search-item">
              <label>분석 유형</label>
              <div class="sb-checkbox">
                <div
                  v-for="opt in filterOptions.analysisTypes"
                  :key="opt.value"
                  class="sb-checkbox-item"
                >
                  <Checkbox
                    :inputId="'analysis-type-' + opt.value"
                    name="analysisTypeGroup"
                    :value="opt.value"
                    v-model="selectedAnalysisTypes"
                  />
                  <label :for="'analysis-type-' + opt.value">{{
                    opt.label
                  }}</label>
                </div>
              </div>
            </div>
            <div class="sb-sales-cs-search-item">
              <label>검색어</label>
              <div class="sb-sales-cs-search-item-form">
                <Select
                  v-model="selectedValue02"
                  :options="selectedOption02"
                  optionLabel="name"
                  style="min-width: 190px"
                />

                <div style="width: 388px">
                  <SbInput
                    v-model="searchKeyword"
                    show-search
                    @search="onSearch"
                    placeholder="검색어를 입력하세요"
                    class="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="sb-sales-cs-tab">
            <div class="sb-tab-circle">
              <Button label="전체" variant="text" class="active" />
              <Button label="상품" variant="text" />
              <Button label="배송" variant="text" />
              <Button label="반품" variant="text" />
              <Button label="교환" variant="text" />
              <Button label="환불" variant="text" />
              <Button label="기타" variant="text" />
            </div>
          </div>
          <div class="sb-sales-cs-store-table">
            <div class="sb-sales-cs-store-table-head">
              <div class="sb-sales-cs-store-table-head__amount">
                총 <strong>4999,999</strong>건
              </div>
              <div class="sb-sales-cs-store-table-head__status">
                <p>
                  진행 중인 분석 : <strong class="text-primary">2</strong>건
                </p>
                <p>답변 대기 : <strong class="text-primary">1</strong>건</p>
                <p>답변 완료 : <strong class="text-primary">1 </strong>건</p>
              </div>
            </div>
            <div class="sb-sales-cs-store-table-body">
              <div class="sb-table">
                <DataTable
                  :value="storeQnaList"
                  responsiveLayout="scroll"
                  class="sb-store-table"
                >
                  <Column
                    field="id"
                    header="문의 번호"
                    style="width: 170px"
                  ></Column>
                  <Column
                    field="type"
                    header="유형"
                    style="width: 80px"
                  ></Column>
                  <Column
                    field="title"
                    header="제목"
                    style="width: 350px"
                    bodyClass="text-left"
                  >
                    <template #body="slotProps">
                      <div class="sb-table-ellipsis">
                        {{ slotProps.data.title }}
                      </div>
                    </template></Column
                  >
                  <Column
                    field="userId"
                    header="문의자"
                    style="width: 110px"
                  ></Column>
                  <Column
                    field="regDate"
                    header="등록일"
                    sortable
                    style="width: 140px"
                  ></Column>
                  <Column
                    field="replyStatus"
                    header="답변"
                    sortable
                    style="width: 160px"
                  >
                    <template #body="slotProps">
                      {{ slotProps.data.replyStatus }}
                      <div
                        class="sb-table-date"
                        v-if="slotProps.data.replyDate"
                      >
                        {{ slotProps.data.replyDate }}
                      </div>
                    </template>
                  </Column>

                  <Column
                    field="productName"
                    header="상품명"
                    style="width: 350px"
                    bodyClass="text-left"
                  >
                    <template #body="slotProps">
                      <div class="sb-table-ellipsis">
                        {{ slotProps.data.productName }}
                      </div>
                    </template>
                  </Column>

                  <Column
                    field="analysisStatus"
                    header="분석"
                    sortable
                    style="width: 140px"
                  >
                    <template #body="slotProps">
                      <Badge
                        :value="getAnalysisLabel(slotProps.data.analysisStatus)"
                        :severity="slotProps.data.analysisStatus"
                      />

                      <div
                        v-if="slotProps.data.analysisDate"
                        class="sb-table-date"
                      >
                        {{ slotProps.data.analysisDate }}
                      </div>
                    </template>
                  </Column>
                </DataTable>
              </div>
              <SbPaginator />
            </div>
          </div>
        </div>
        <SbBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: 'CS 센터' },
]);

//
const selectedRevenue = ref('1d'); // 기본 선택값

const radioRange = [
  { id: 'range1', label: '1일', value: '1d' },
  { id: 'range2', label: '7일', value: '7d' },
  { id: 'range3', label: '1달', value: '1m' },
  { id: 'range4', label: '6개월', value: '6m' },
];

//datepicker
const date = ref();

//tab
const activeTab = ref(0);

//select
const selectedOption = ref([
  { name: '1일' },
  { name: '1주' },
  { name: '1개월' },
  { name: '6개월' },
  { name: '1년' },
]);
const selectedValue = ref(selectedOption.value[0]);
const selectedOption02 = ref([
  { name: '제목+내용' },
  { name: '문의 번호' },
  { name: '문의자' },
  { name: '상품명' },
]);
const selectedValue02 = ref(selectedOption02.value[0]);

//data
const productQnaList = ref([
  {
    id: 1,
    productName: '삼소니 봄신상 데일리세트 모음전 키즈...',
    sizeInquiry: 14,
    deliveryInquiry: 13,
    stockOption: 10,
    exchangeReturn: 5,
    productInfo: 4,
    priceDiscount: 4,
    etc: 0,
    total: 55,
  },
  {
    id: 2,
    productName: '삼소니 봄신상 데일리세트 모음전 키즈...',
    sizeInquiry: 14,
    deliveryInquiry: 13,
    stockOption: 10,
    exchangeReturn: 5,
    productInfo: 4,
    priceDiscount: 4,
    etc: 0,
    total: 55,
  },
  // ... 동일한 객체를 필요한 만큼 반복
]);

// 1. 초기값을 배열이 아닌 빈 객체로 설정
const expandedRows = ref({});

// 2. 토글 함수 수정
const toggleRow = (data) => {
  // 객체 전개 연산자를 사용하여 반응성을 강제로 업데이트합니다.
  const newExpandedRows = { ...expandedRows.value };

  if (newExpandedRows[data.id]) {
    // 이미 ID가 존재하면 삭제 (닫기)
    delete newExpandedRows[data.id];
  } else {
    // 없으면 ID를 키로 추가 (열기)
    // 값은 true나 data 객체 아무거나 상관없습니다.
    newExpandedRows[data.id] = true;
  }

  expandedRows.value = newExpandedRows;
};

// 3. 확장 여부 확인 함수
const isRowExpanded = (data) => {
  return !!expandedRows.value[data.id];
};

// 행에 동적 클래스를 부여하는 함수
const rowClass = (data) => {
  // 현재 행이 확장된 상태인지 확인
  return isRowExpanded(data) ? 'p-row-expanded' : '';
};

//chart
const csChartData = ref([
  { value: 30, name: '상품', color: '--chart-doughnut02-success' },
  { value: 40, name: '배송', color: '--chart-doughnut02-secondary' },
  { value: 10, name: '반품', color: '--chart-doughnut02-info' },
  { value: 5, name: '교환', color: '--chart-doughnut02-warn' },
  { value: 10, name: '환불', color: '--chart-doughnut02-danger' },
  { value: 5, name: '기타', color: '--chart-doughnut02-neutral' },
]);
const inquiryTypeStats = ref([
  { value: 43, name: '사이즈 문의', color: 'infoColor' },
  { value: 24, name: '배송 문의', color: 'successColor' },
  { value: 23, name: '재고/옵션', color: 'secondaryColor' },
  { value: 16, name: '교환/반품', color: 'dangerColor' },
  { value: 8, name: '상품 정보', color: 'warnColor' },
  { value: 7, name: '가격/할인', color: 'primaryColor' },
  { value: 10, name: '기타', color: 'contrastColor' },
]);
const ageStats = ref([
  { name: '10', value: 3, color: '#C2F4F8' },
  { name: '20', value: 12, color: '#3ADDE9' },
  { name: '30', value: 26, color: '#00B1BD' },
  { name: '40', value: 35, color: '#23858C' },
  { name: '50', value: 24, color: '#1A6369' },
]);

// 1. 기간 (Select/Date 관련 데이터는 생략하고 체크박스 중심 구성)
const selectedTypes = ref(['all']); // 유형 (기본값: 전체)
const selectedReplyStatus = ref(['all']); // 답변 여부
const selectedAnalysisStatus = ref(['all']); // 분석 여부
const selectedAnalysisTypes = ref(['all']); // 분석 유형

// 2. 체크박스 옵션 리스트
const filterOptions = {
  // 유형
  types: [
    { label: '전체', value: 'all' },
    { label: '상품', value: 'product' },
    { label: '배송', value: 'delivery' },
    { label: '반품', value: 'return' },
    { label: '교환', value: 'exchange' },
    { label: '환불', value: 'refund' },
    { label: '기타', value: 'etc' },
  ],
  // 답변 여부
  replyStatus: [
    { label: '전체', value: 'all' },
    { label: '완료', value: 'completed' },
    { label: '미 답변', value: 'pending' },
  ],
  // 분석 여부
  analysisStatus: [
    { label: '전체', value: 'all' },
    { label: '완료', value: 'completed' },
    { label: '미 답변', value: 'pending' },
  ],
  // 분석 유형 (긍정/중립/부정)
  analysisTypes: [
    { label: '전체', value: 'all' },
    { label: '긍정', value: 'positive' },
    { label: '중립', value: 'neutral' },
    { label: '부정', value: 'negative' },
  ],
};

// 스토어 문의 내역 데이터 리스트
const storeQnaList = ref([
  {
    id: '20260310132535',
    type: '상품',
    title:
      '갤럭시S26 울트라 보호필름 재고 문의드립니다.갤럭시S26 울트라 보호필름 재고 문의드립니다.갤럭시S26 울트라 보호필름 재고 문의드립니다.갤럭시S26 울트라 보호필름 재고 문의드립니다.갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName:
      '상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)상품정보(상품명+상품 주문 옵션)',
    analysisStatus: 'success', // 긍정
    analysisDate: '2026.03.10',
  },
  {
    id: '20260310132535',
    type: '배송',
    title: '갤럭시',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary', // 분석하기
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상ㅇㅇㄴㄹ)',
    analysisStatus: 'warn', // 중립
    analysisDate: '2026.03.10',
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'danger', // 부정
    analysisDate: '2026.03.10',
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'contrast', // 분석중
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'contrast',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'contrast',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'contrast',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary', // 분석하기 버튼들 시작
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary',
    analysisDate: null,
  },
  {
    id: '20260310132535',
    type: '상품',
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'secondary',
    analysisDate: null,
  },
]);

const getAnalysisLabel = (severity) => {
  const labelMap = {
    success: '긍정',
    warn: '중립',
    danger: '부정',
    contrast: '분석중',
    secondary: '분석하기',
  };
  return labelMap[severity] || '분석하기';
};
</script>
