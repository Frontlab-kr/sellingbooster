<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>추천기회</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>
          요즘 셀러들이 주목하는 키워드는 뭘까요?<br />
          관심 키워드를 저장하고 판매 가능성을 확인해보세요.
        </h4>
        <div class="sb-trend-search-form">
          <div class="sb-trend-search-form-item">
            <div class="sb-trend-search-form-item__body">
              <Select
                v-model="selectedValue"
                :options="selectedOption"
                optionLabel="name"
                placeholder="1차 카테고리"
                class="w-full"
              />
              <Select
                v-model="selectedValue"
                :options="selectedOption"
                optionLabel="name"
                placeholder="2차 카테고리"
                class="w-full"
                disabled
              />
              <Select
                v-model="selectedValue"
                :options="selectedOption"
                optionLabel="name"
                placeholder="3차 카테고리"
                class="w-full"
                disabled
              />
              <Select
                v-model="selectedValue"
                :options="selectedOption"
                optionLabel="name"
                placeholder="4차 카테고리"
                class="w-full"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-trend-table">
        <div class="sb-trend-table-head">
          <div class="sb-trend-table-head__title">
            <h5>TOP 30</h5>
            <p>네이버 쇼핑 기준 데이터 입니다.</p>
          </div>
        </div>
        <div class="sb-trend-table-tab">
          <div class="sb-tab">
            <Button label="일간" variant="text" class="active" />
            <Button label="주간" variant="text" />
            <Button label="월간" variant="text" />
          </div>
        </div>
        <div class="sb-table">
          <DataTable :value="top30" responsiveLayout="scroll" removableSort>
            <Column field="ranking" header="랭킹" style="width: 80px">
              <template #body="slotProps">
                {{ slotProps.data.ranking }}
              </template>
            </Column>

            <Column field="keyword" header="키워드" style="width: 600px">
              <template #body="slotProps">
                <span v-html="slotProps.data.keyword"></span>
              </template>
            </Column>

            <Column
              field="influence"
              header="영향력"
              sortable
              style="width: 150px"
            >
              <template #body="slotProps">
                <span>{{ slotProps.data.influence }}</span>
              </template>
            </Column>

            <Column
              field="productCount"
              header="상품수"
              sortable
              bodyClass="text-right"
              style="width: 235px"
            >
              <template #body="slotProps">
                {{ slotProps.data.productCount.toLocaleString() }}개
              </template>
            </Column>

            <Column
              field="searchVol"
              header="검색량"
              sortable
              bodyClass="text-right"
              style="width: 235px"
            >
              <template #body="slotProps">
                {{ slotProps.data.searchVol.toLocaleString() }}건
              </template>
            </Column>

            <Column
              field="competition"
              sortable
              bodyClass="text-right"
              style="width: 200px"
            >
              <template #header>
                <div class="sb-table-header-title">
                  <span
                    class="p-datatable-column-title"
                    data-pc-section="columntitle"
                    >경쟁강도</span
                  >
                  <div
                    class="sb-table-header-title__icon"
                    @mouseenter="togglePopover"
                    @mouseleave="togglePopover"
                  >
                    <IconSystemInformationCircle
                      class="ico-system-information-circle"
                    />
                  </div>
                </div>
              </template>
              <template #body="slotProps">
                <div class="sb-legend">
                  <span
                    class="sb-legend-item"
                    :class="
                      slotProps.data.competition >= 0.8
                        ? 'text-success'
                        : slotProps.data.competition >= 0.6
                          ? 'text-secondary'
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
            <template #empty>
              <div class="sb-nodata">
                <IconIllustrationSmile class="ico-illustration-smile" />
                <div class="sb-nodata__text">
                  <p>
                    궁금한 카테고리가 있다면 지금 검색해보세요<br />
                    정확한 분석 데이터가 기다리고 있어요.
                  </p>
                </div>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
      <Popover
        ref="popoverScore"
        :pt="{
          root: {
            class: 'p-popover-flipped sb-table-popover',
          },
        }"
      >
        <SbLegend />
      </Popover>
      <div class="sb-trend-top">
        <div class="sb-trend-top__title">
          <h5>카테고리 연관 상품 TOP 30</h5>
          <p>네이버 쇼핑 기준 데이터 입니다.</p>
        </div>
        <div class="sb-trend-top-list">
          <NuxtLink
            v-for="item in categoryTop30"
            :key="item.rank"
            to="/"
            class="sb-trend-top-list-item"
          >
            <div class="sb-trend-top-list-item__thumb">
              <Badge
                :value="item.rank"
                size="small"
                class="p-badge-circle"
                :severity="item.rank > 3 ? 'contrast' : undefined"
              ></Badge>
              <img :src="item.imgSrc" :alt="item.title" />
            </div>
            <div class="sb-trend-top-list-item__contents">
              <div class="sb-trend-top-list-item__category">
                <span>{{ item.brand }}</span>
                <span>{{ item.mall }}</span>
              </div>
              <div class="sb-trend-top-list-item__title">
                {{ item.title }}
              </div>
              <div class="sb-trend-top-list-item__price">
                {{ item.price.toLocaleString() }}원
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <SbBanner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';

//popover
const popoverScore = ref();
const togglePopover = (event) => {
  if (event.type === 'mouseenter') {
    popoverScore.value.show(event);
  } else {
    popoverScore.value.hide();
  }
};

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천기회' },
]);

//select
const selectedValue = ref();
const selectedOption = ref([
  { name: '패션의류' },
  { name: '화장품/미용' },
  { name: '가구/인테리어' },
  { name: '식품' },
  { name: '생활/건강' },
]);

const top30 = ref([
  {
    ranking: 19,
    keyword: '오메가3',
    influence: '높음',
    productCount: 19327,
    searchVol: 9999,
    competition: 6.05,
  },
  {
    ranking: 14,
    keyword: '정관장',
    influence: '높음',
    productCount: 1671,
    searchVol: 9999,
    competition: 0.41,
  },
  {
    ranking: 18,
    keyword: '유산균',
    influence: '높음',
    productCount: 1412,
    searchVol: 9999,
    competition: 0.26,
  },
  {
    ranking: 5,
    keyword: '마그네슘',
    influence: '높음',
    productCount: 121,
    searchVol: 9999,
    competition: 0.02,
  },
  {
    ranking: 19,
    keyword: '오메가3',
    influence: '높음',
    productCount: 19327,
    searchVol: 9999,
    competition: 6.05,
  },
  {
    ranking: 14,
    keyword: '정관장',
    influence: '높음',
    productCount: 1671,
    searchVol: 9999,
    competition: 0.41,
  },
  {
    ranking: 18,
    keyword: '유산균',
    influence: '높음',
    productCount: 1412,
    searchVol: 9999,
    competition: 0.26,
  },
  {
    ranking: 5,
    keyword: '마그네슘',
    influence: '높음',
    productCount: 121,
    searchVol: 9999,
    competition: 0.02,
  },
  {
    ranking: 5,
    keyword: '마그네슘',
    influence: '높음',
    productCount: 121,
    searchVol: 9999,
    competition: 0.02,
  },
  {
    ranking: 19,
    keyword: '오메가3',
    influence: '높음',
    productCount: 19327,
    searchVol: 9999,
    competition: 6.05,
  },
]);

const categoryTop30 = ref([
  {
    rank: 1,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 H2.0 플로우스테이트 텀블러',
    price: 28000,
  },
  {
    rank: 2,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 프로듀어 플립 스트로 텀블러 887ml 크림',
    price: 22580,
  },
  {
    rank: 3,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title:
      '락앤락 텀블러 손잡이 스텐 텀블러 메트로 머그 475ml 보온 보냉 컵 커피 티',
    price: 23200,
  },
  {
    rank: 4,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 퀜처 플로우 스테이트 텀블러 H2.0',
    price: 38630,
  },
  {
    rank: 5,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 바이탈라이즈 쉐이커 텀블러 591ml + 컨테이너 103ml 세트',
    price: 57660,
  },
  {
    rank: 6,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '보아르',
    mall: '네이버쇼핑',
    title: '보아르 투웨이 대용량 손잡이 스텐 보온 보냉 텀블러...',
    price: 22700,
  },
  {
    rank: 7,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title: '락앤락 모그 스텐 머그컵 텀블러',
    price: 24790,
  },
  {
    id: 'stanley-aerolight-33',
    rank: 8,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리',
    mall: '네이버쇼핑',
    title: '스텐리 아이스플로우 에어로라이트 패스트플로우 텀블러',
    price: 33490,
    to: '/product/stanley-aerolight-33',
  },
  {
    rank: 9,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title: '락앤락 메트로카페 세라믹 텀블러 바닐라라떼 650ml',
    price: 24570,
  },
]);
</script>
