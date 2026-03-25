<template>
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h4>마켓 트렌드</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <!-- <SbChartPie
      :score="85"
      :total-score="100"
      status-text="매우 좋음"
      main-color="#00B1BD"
      sub-color="#00B1BD"
      pointer-border-color="rgba(0, 177, 189, 0.2)"
    /> -->
    <div class="flex">
      <SbChartPie :score="95" label="상품 등록" status="high" />

      <SbChartPie :score="60" label="판매 관리" status="normal" />

      <SbChartPie :score="30" label="정산 현황" status="low" />
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-detail">
        <div class="grid">
          <div class="col-8">
            <div class="sb-trend-summary">
              <div class="sb-trend-summary-head">
                <div class="sb-trend-summary-product">
                  <div class="sb-trend-summary-product__thumb">
                    <img src="/temp/detail01.png" alt="" />
                  </div>
                  <div class="sb-trend-summary-product__contents">
                    <div class="sb-trend-summary-product__platform">
                      <span>커피하우스 본점</span>
                      <span>네이버쇼핑</span>
                    </div>
                    <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ml</h6>
                    <div class="sb-trend-summary-product__category">
                      <span>생활/건강</span>
                      <span>주방용품</span>
                      <span>잔/컵</span>
                      <span>유리컵</span>
                    </div>
                  </div>
                </div>
                <div class="sb-chart-pie sb-chart-pie--medium">
                  <div class="sb-chart-pie__text">
                    <strong>좋음</strong>
                    <p><span>61점</span>/100점</p>
                  </div>
                </div>
              </div>
              <div class="sb-trend-summary-list">
                <div class="sb-trend-summary-list-item">
                  <strong>가격</strong>
                  <h6>8,480원</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>판매 건수(7일)</strong>
                  <h6>188건</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>예상 매출액(7일)</strong>
                  <h6>-</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>평균 배송일</strong>
                  <h6>1.45일</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>리뷰</strong>
                  <h6>1,195건</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>평점</strong>
                  <h6>4.9점</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>최근 1주간</strong>
                  <h6>73명 구매</h6>
                </div>
                <div class="sb-trend-summary-list-item">
                  <strong>최근 3개월간</strong>
                  <h6>74명 재구매</h6>
                </div>
              </div>
              <div class="sb-trend-summary-text">
                ※ 네이버 쇼핑 기준 데이터 입니다.
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="sb-trend-table">
              <div class="sb-trend-table-head">
                <div class="sb-trend-table-head__title">
                  <h5>상위 키워드</h5>
                </div>
              </div>
              <div class="sb-table">
                <ClientOnly>
                  <DataTable
                    :value="productsNodata"
                    responsiveLayout="scroll"
                    removableSort
                  >
                    <Column
                      field="keyword"
                      header="키워드"
                      sortable
                      style="width: 160px"
                    >
                      <template #body="slotProps">
                        <span v-html="slotProps.data.keyword"></span>
                      </template>
                    </Column>
                    <Column
                      field="pcSearchVol"
                      header="월 검색량"
                      sortable
                      style="width: 160px"
                      headerClass="text-right"
                      bodyClass="text-right"
                    >
                      <template #body="slotProps">
                        <span v-html="slotProps.data.pcSearchVol"></span>
                      </template>
                    </Column>
                    <Column
                      field="avgClick"
                      header="상품 수"
                      sortable
                      style="width: 160px"
                      headerClass="text-right"
                      bodyClass="text-right"
                    >
                      <template #body="slotProps">
                        <span v-html="slotProps.data.avgClick"></span>
                      </template>
                    </Column>
                    <Column
                      field="competition"
                      sortable
                      headerClass="text-right"
                      bodyClass="text-right"
                      style="width: 150px"
                    >
                      <template #header>
                        <div
                          class="sb-table-header-title"
                          @mouseenter="togglePopover"
                          @mouseleave="togglePopover"
                        >
                          <span
                            class="p-datatable-column-title"
                            data-pc-section="columntitle"
                            >경쟁강도</span
                          >
                          <IconSystemInformationCircle
                            class="ico-system-information-circle"
                          />
                        </div>
                      </template>
                      <template #body="slotProps">
                        <div class="sb-legend">
                          <span
                            class="sb-legend-item"
                            :class="
                              slotProps.data.competition >= 0.8
                                ? 'text-primary'
                                : slotProps.data.competition >= 0.6
                                  ? 'text-success'
                                  : slotProps.data.competition >= 0.4
                                    ? 'text-info'
                                    : slotProps.data.competition >= 0.2
                                      ? 'text-warn'
                                      : 'text-danger'
                            "
                          >
                            {{ slotProps.data.competition.toFixed(2) }}
                          </span>
                        </div>
                      </template>
                    </Column>
                  </DataTable>
                </ClientOnly>
                <div class="sb-nodata">
                  <IconIllustrationSmile class="ico-illustration-smile" />
                  <div class="sb-nodata__text">
                    <p>
                      궁금한 카테고리가 있다면 지금 검색해보세요<br />
                      정확한 분석 데이터가 기다리고 있어요
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-8">
            <div class="sb-trend-review">
              <div class="sb-trend-review-head">
                <h5>상위 키워드</h5>
                <div class="sb-trend-review-summary">
                  <div class="sb-trend-review-summary-item">
                    <span>총 평점</span>
                    <p><strong>4.3</strong> / 5.0</p>
                  </div>
                  <div class="sb-trend-review-summary-item">
                    <span>리뷰수</span>
                    <p><strong>1,396</strong></p>
                  </div>
                </div>
              </div>
              <div class="sb-trend-review-list">
                <div class="sb-trend-review-list-item">
                  <div class="sb-trend-review-list-item__title">
                    <h6>긍정 리뷰 요약</h6>
                  </div>
                  <p>
                    대부분의 고객들이 이 제품을 선물로 구매하였으며, 수신자들이
                    만족했다는 리뷰가 많습니다. 그리고 제품의 귀여움, 이동이
                    편리한 무게대부분의 고 객들이 이 제품을 선물로 구매하였으며,
                    수신자들이 만족했다는 리뷰가 많습니다. 그리고 제품의 귀여움,
                    이동이 편리한 무게도 장점입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="sb-trend-keyword">
              <div class="sb-trend-keyword-head">
                <h5>추천 키워드</h5>
              </div>
              <div class="sb-trend-keyword-list">
                <div
                  v-for="item in keywords"
                  :key="item.id"
                  class="sb-trend-keyword-list-item"
                >
                  <p>{{ item.name }}</p>
                  <span>{{ item.category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="sb-trend-evaluation">
              <div class="sb-trend-evaluation-item">
                <div class="sb-trend-evaluation-head">
                  <h5>상품 분석 평가</h5>
                  <p>
                    상품 등록부터 판매 관리, 키워드 경쟁력까지 한 번에 수익으로
                    연결할 수 있는 방법을 분석 및 추천해드릴께요.
                  </p>
                </div>
              </div>
              <div class="sb-trend-evaluation-item">
                <div class="sb-trend-evaluation-head">
                  <h5>상품 등록 평가</h5>
                </div>
                <div class="sb-trend-evaluation-list">
                  <div
                    class="sb-trend-evaluation-list-item"
                    v-for="(item, index) in list01"
                    :key="index"
                    :item="item"
                  >
                    <Badge value="사용방법" severity="success"></Badge>
                    <p>
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.text }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="sb-trend-evaluation-item">
                <div class="sb-trend-evaluation-head">
                  <h5>판매 관리 평가</h5>
                </div>
                <div class="sb-trend-evaluation-list">
                  <div
                    class="sb-trend-evaluation-list-item"
                    v-for="(item, index) in list02"
                    :key="index"
                    :item="item"
                  >
                    <Badge value="사용방법" severity="success"></Badge>
                    <p>
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.text }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="sb-trend-evaluation-item">
                <div class="sb-trend-evaluation-head">
                  <h5>키워드 평가</h5>
                </div>
                <div class="sb-trend-evaluation-list">
                  <div
                    class="sb-trend-evaluation-list-item"
                    v-for="(item, index) in list03"
                    :key="index"
                    :item="item"
                  >
                    <Badge value="사용방법" severity="success"></Badge>
                    <p>
                      <strong>{{ item.title }}</strong>
                      <span>{{ item.text }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '상품 분석' },
]);

const searchKeyword = ref('');

const selectedValue = ref();
const selectedOption = ref([
  { name: '스팸홍보/도배글입니다.' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);

const products = ref([
  {
    keyword: '무선 키보드',
    category: '컴퓨터 주변기기',
    influence: '상',
    avgPrice: 45000,
    productCount: 12500,
    pcSearchVol: 5200,
    moSearchVol: 18000,
    avgClick: 450,
    competition: '높음',
  },
  {
    keyword: '친환경 텀블러',
    category: '주방용품',
    influence: '중',
    avgPrice: 18900,
    productCount: 3400,
    pcSearchVol: 1200,
    moSearchVol: 5400,
    avgClick: 210,
    competition: '보통',
  },
  {
    keyword: '캠핑용 의자',
    category: '스포츠/레저',
    influence: '상',
    avgPrice: 32000,
    productCount: 8900,
    pcSearchVol: 3100,
    moSearchVol: 12500,
    avgClick: 380,
    competition: '치열',
  },
  {
    keyword: '가습기 살균제 <i class="ico-24-back">ss</i>',
    category: '생활용품',
    influence: '하',
    avgPrice: 8500,
    productCount: 120,
    pcSearchVol: 450,
    moSearchVol: 900,
    avgClick: 45,
    competition: '낮음',
  },
]);
const productsNodata = ref(null);

//
const keywords = [
  { id: 1, name: '위스키테이스팅잔', category: '유리컵' },
  { id: 2, name: '싱글몰트잔', category: '도구' },
  { id: 3, name: '싱글몰트 위스키 잔', category: '유리컵' },
  { id: 4, name: '위스키테이스팅잔', category: '유리컵' },
  { id: 5, name: '튤립위스키잔', category: '주방용품' },
  { id: 6, name: '양주잔', category: '주방용품' },
  { id: 7, name: '위스키잔', category: '주방용품' },
];
const list01 = ref([
  {
    status: 'danger',
    title:
      '상품정보 제공고시에 미입력으로 자동입력된 "상세페이지 참조" 등을 5개 이상 수정하여 실제 정보를 입력해주세요.',
    text: '네이버쇼핑 1페이지 판매 상위 상품들의 65.44%는 상세 미표기를 5개 이하로 가지고 있습니다.특히 브랜드/제조사는 상품노출에 중요한 데이터입니다.',
  },
  {
    status: 'danger',
    title:
      '상세페이지의 이미지 개수가 3개 이하 입니다. 이미지를 분할하여 느린 로딩화면을 방지해주세요.',
    text: '인테리어소품 카테고리의 네이버쇼핑 1페이지 판매 상위 상품의 평균 상세페이지 이미지 분할 수는 33.3개입니다.',
  },
  {
    status: 'danger',
    title:
      '상품 할인율에 20%이 적용되어 있습니다. 기본가가 고정된 상품이 아니라면 고객이 메리트를 느낄 수 있는 기본가/할인가를 구성하세요.',
    text: '인테리어소품 카테고리의 네이버쇼핑 1페이지 판매 상위 상품들의 평균 할인율은 58.5% 입니다.',
  },
  {
    status: 'danger',
    title:
      '상세페이지의 각 이미지 사이 설명 문구가 3개 이하 입니다. 이미지를 설명할 간단한 설명구를 추가하세요.',
    text: '인테리어소품 카테고리의 네이버쇼핑 1페이지 판매 상위 상품들은 각 이미지 사이 평균 13.4구간 설명문구를 작성했습니다.',
  },
]);
const list02 = ref([
  {
    status: 'danger',
    title:
      '최근 리뷰 5개 중 판매자 답변이 없습니다. 이 항목은 리뷰 답변이 하나라도 있는지만을 구분합니다.',
    text: '판매자답변은 재구매와 브랜드 신뢰성, 바이럴 마케팅에 좋은 영향을 줄 수 있습니다.',
  },
]);
const list03 = ref([
  {
    status: 'danger',
    title:
      '제목 키워드와 태그에서 3개 이상의 동일한 키워드를 발견했습니다. 태그에는 상품의 소재, 연관 키워드를 사용하여 추가로 검색될 확률을 높이세요.',
    text: '네이버쇼핑 1페이지 상위 상품들의 중복 키워드는 평균 0.64개로 1개이상 겹치지 않습니다.',
  },
  {
    status: 'danger',
    title:
      '제목에 키워드가 12개 배치되어 있습니다. 최근 플랫폼의 상품명 간소화 지향으로 50자 이하, 키워드 7개 이하가 노출에 유리합니다.',
    text: '판매자답변은 재구매와 브랜드 신뢰성, 바이럴 마케팅에 좋은 영향을 줄 수 있습니다.',
  },
]);
</script>
