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
          <div class="sb-sales-cs-product-head__text">
            네이버 쇼핑 기준 데이터 입니다.
          </div>
        </div>
        <div class="sb-sales-cs-body">
          <div class="sb-sales-cs-product-status"></div>
          <div class="sb-sales-cs-product-table">
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
                headerClass="text-center"
                bodyClass="text-center"
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
                headerClass="text-right"
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
                headerClass="text-right"
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
                headerClass="text-right"
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
                headerClass="text-right"
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
                headerClass="text-right"
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
                headerClass="text-right"
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
                headerClass="text-right"
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
                headerClass="text-right"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.total
                }}</template>
              </Column>
              <template #expansion="slotProps">
                <div class="p-4">11</div>
              </template>
            </DataTable>
          </div>
        </div>
      </div>
      <div class="sb-sales-cs" v-else-if="activeTab === 1">
        <div class="sb-sales-cs-head">
          <div class="sb-sales-cs-chart">
            <div class="grid">
              <div class="col-8">
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
                        <h4>19,999</h4>
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
                        <h4>999</h4>
                        <h5>건</h5>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="col">
                  <dl>
                    <dt>문의 유형 별 현황</dt>
                    <dd>
                      <SbChartDoughnut02 :chartData="csChartData" />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-sales-cs-body">
          <div class="sb-sales-cs-store-search">
            <div class="sb-sales-cs-store-search-item">
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

            <div class="sb-sales-cs-store-search-item">
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

            <div class="sb-sales-cs-store-search-item">
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

            <div class="sb-sales-cs-store-search-item">
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
          </div>
          <div class="sb-tab-circle">
            <Button label="전체" variant="text" class="active" />
            <Button label="상품 " variant="text" />
            <Button label="배송" variant="text" />
            <Button label="반품" variant="text" />
            <Button label="교환" variant="text" />
            <Button label="환불" variant="text" />
            <Button label="기타" variant="text" />
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
            <div class="-body">
              <DataTable
                :value="storeQnaList"
                responsiveLayout="scroll"
                class="sb-store-table"
              >
                <Column
                  field="id"
                  header="문의 번호"
                  style="width: 150px"
                ></Column>
                <Column
                  field="type"
                  header="유형"
                  headerClass="text-center"
                  bodyClass="text-center"
                  style="width: 80px"
                ></Column>
                <Column
                  field="title"
                  header="제목"
                  style="min-width: 200px"
                ></Column>
                <Column
                  field="userId"
                  header="문의자"
                  style="width: 100px"
                ></Column>
                <Column
                  field="regDate"
                  header="등록일"
                  sortable
                  style="width: 150px"
                ></Column>

                <Column
                  field="replyStatus"
                  header="답변"
                  sortable
                  style="width: 150px"
                >
                  <template #body="slotProps">
                    <div class="flex flex-column">
                      <span
                        :class="{
                          'text-primary': slotProps.data.replyStatus === '완료',
                        }"
                      >
                        {{ slotProps.data.replyStatus }}
                      </span>
                      <span
                        v-if="slotProps.data.replyDate"
                        class="text-xs text-400"
                      >
                        {{ slotProps.data.replyDate }}
                      </span>
                    </div>
                  </template>
                </Column>

                <Column
                  field="productName"
                  header="상품명"
                  style="min-width: 200px"
                ></Column>

                <Column
                  field="analysisStatus"
                  header="분석"
                  sortable
                  style="width: 120px"
                  bodyClass="text-center"
                >
                  <template #body="slotProps">
                    <div
                      v-if="getAnalysisBadge(slotProps.data.analysisStatus)"
                      class="flex flex-column align-items-center"
                    >
                      <Badge
                        :value="
                          getAnalysisBadge(slotProps.data.analysisStatus).value
                        "
                        :severity="
                          getAnalysisBadge(slotProps.data.analysisStatus)
                            .severity
                        "
                        class="mb-1"
                      ></Badge>
                      <span
                        v-if="slotProps.data.analysisDate"
                        class="text-xs text-400"
                      >
                        {{ slotProps.data.analysisDate }}
                      </span>
                    </div>

                    <div v-else>
                      <Button
                        label="분석하기"
                        variant="text"
                        size="small"
                        class="p-0 text-primary"
                      />
                    </div>
                  </template>
                </Column>
              </DataTable>
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

//tab
const activeTab = ref(1);

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
    title: '갤럭시S26 울트라 보호필름 재고 문의드립니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'positive', // 긍정
    analysisDate: '2026.03.10',
  },
  {
    id: '20260310132536',
    type: '배송',
    title: '배송이 언제쯤 도착할까요?',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '미답변',
    replyDate: null,
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'none', // 분석하기 버튼 노출
    analysisDate: null,
  },
  {
    id: '20260310132537',
    type: '상품',
    title: '재입고 일정 문의합니다.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'neutral', // 중립
    analysisDate: '2026.03.10',
  },
  {
    id: '20260310132538',
    type: '상품',
    title: '제품 불량인 것 같아요.',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'negative', // 부정
    analysisDate: '2026.03.10',
  },
  {
    id: '20260310132539',
    type: '기타',
    title: '이벤트 참여 방법 문의',
    userId: 'USER_ID',
    regDate: '2026.03.01 13:25:35',
    replyStatus: '완료',
    replyDate: '2026.03.01 13:25:35',
    productName: '상품정보(상품명+상품 주문 옵션: 최대 1줄(...생략))',
    analysisStatus: 'loading', // 분석 중
    analysisDate: null,
  },
]);

// 분석 상태별 뱃지 설정 매핑
const getAnalysisBadge = (status) => {
  const map = {
    positive: { value: '긍정', severity: 'success' },
    neutral: { value: '중립', severity: 'warn' },
    negative: { value: '부정', severity: 'danger' },
    loading: { value: '분석 중', severity: 'secondary' },
  };
  return map[status] || null;
};
</script>
