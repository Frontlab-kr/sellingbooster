<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>분석 결과</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>데이터로 보는 판매전략 상품 분석에서 시작하세요.</h4>
      </div>
      <div class="sb-trend-table">
        <div class="sb-trend-table-head">
          <div class="sb-trend-table-head__title">
            <div class="sb-tab">
              <Button
                v-for="tab in tabs"
                :key="tab.id"
                :label="tab.label"
                variant="text"
                :class="{ active: currentTab === tab.id }"
                @click="changeTab(tab.id)"
              />
            </div>
          </div>
        </div>
        <div v-if="currentTab === 'keyword'">
          <div class="sb-table">
            <DataTable
              v-scroll-end
              :value="keywordList"
              responsiveLayout="scroll"
              removableSort
              scrollable
            >
              <Column field="keyword" header="키워드" style="width: 225px">
                <template #body="slotProps">
                  <div class="sb-table-body-title">
                    <Button
                      variant="text"
                      @click="
                        slotProps.data.isFavorite = !slotProps.data.isFavorite
                      "
                    >
                      <template #icon>
                        <IconActionFavoriteFull
                          v-if="slotProps.data.isFavorite"
                          class="ico-action-favorite-full"
                        />
                        <IconActionFavorite
                          v-else
                          class="ico-action-favorite"
                        />
                      </template>
                    </Button>
                    <strong>{{ slotProps.data.keyword }}</strong>
                  </div>
                </template>
              </Column>
              <Column
                field="influence"
                header="영향력"
                sortable
                headerClass="text-center"
                bodyClass="text-center"
                style="width: 150px"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.influence"></span>
                </template>
              </Column>
              <Column
                field="avgPrice"
                header="평균가"
                sortable
                style="width: 150px"
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.avgPrice"></span>
                </template>
              </Column>
              <Column
                field="productCount"
                header="상품수"
                sortable
                style="width: 225px"
                headerClass="text-right"
                bodyClass="text-right"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.productCount"></span>
                </template>
              </Column>
              <Column
                field="pcSearchVol"
                header="PC 월 검색량"
                sortable
                style="width: 225px"
                headerClass="text-right"
                bodyClass="text-right"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.pcSearchVol"></span>
                </template>
              </Column>
              <Column
                field="moSearchVol"
                header="MO 월 검색량"
                sortable
                style="width: 225px"
                headerClass="text-right"
                bodyClass="text-right"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.moSearchVol"></span>
                </template>
              </Column>
              <Column
                field="avgClick"
                header="평균 클릭 수"
                sortable
                style="width: 150px"
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
        <div v-if="currentTab === 'category'">
          <div class="sb-trend-category">
            <IconActionFavoriteFull class="ico-action-favorite-full" />
            <p>
              <span>생활/건강</span>
              <span>주방용품</span>
              <span>와인용품</span>
              <span>디켄터</span>
            </p>
          </div>
          <div class="sb-table">
            <DataTable
              v-scroll-end
              :value="categoryList"
              responsiveLayout="scroll"
              removableSort
              scrollable
            >
              <Column
                field="top50"
                header="TOP 50"
                headerClass="text-center"
                bodyClass="text-center"
                style="width: 80px"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.top50"></span>
                </template>
              </Column>
              <Column field="keyword" header="키워드" style="width: 242px">
                <template #body="slotProps">
                  <div class="sb-table-body-title">
                    <Button
                      variant="text"
                      @click="
                        slotProps.data.isFavorite = !slotProps.data.isFavorite
                      "
                    >
                      <template #icon>
                        <IconActionFavoriteFull
                          v-if="slotProps.data.isFavorite"
                          class="ico-action-favorite-full"
                        />
                        <IconActionFavorite
                          v-else
                          class="ico-action-favorite"
                        />
                      </template>
                    </Button>
                    <strong>{{ slotProps.data.keyword }}</strong>
                  </div>
                </template>
              </Column>
              <Column
                field="influence"
                header="영향력"
                sortable
                headerClass="text-center"
                bodyClass="text-center"
                style="width: 150px"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.influence"></span>
                </template>
              </Column>
              <Column
                field="avgPrice"
                header="평균가"
                sortable
                style="width: 150px"
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.avgPrice"></span>
                </template>
              </Column>
              <Column
                field="productCount"
                header="상품수"
                sortable
                style="width: 242px"
                headerClass="text-right"
                bodyClass="text-right"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.productCount"></span>
                </template>
              </Column>
              <Column
                field="pcSearchVol"
                header="PC 월 검색량"
                sortable
                style="width: 242px"
                headerClass="text-right"
                bodyClass="text-right"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.pcSearchVol"></span>
                </template>
              </Column>
              <Column
                field="moSearchVol"
                header="MO 월 검색량"
                sortable
                style="width: 242px"
                headerClass="text-right"
                bodyClass="text-right"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.moSearchVol"></span>
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
      </div>

      <div class="sb-trend-button" v-if="currentTab === 'category'">
        <NuxtLink to="/">
          <Button severity="primary" outlined>
            <IconArrowLeft class="ico-arrow-left" />
            <span class="p-button-label">목록으로</span>
          </Button>
        </NuxtLink>
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

      <div class="sb-banner">
        <NuxtLink to="/">
          <img src="/temp/banner.png" alt="" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '분석 결과' },
]);

//popover
const popoverScore = ref();
const togglePopover = (event) => {
  if (event.type === 'mouseenter') {
    popoverScore.value.show(event);
  } else {
    popoverScore.value.hide();
  }
};

//관심 키워드
const keywordList = ref([
  {
    ranking: 14,
    isFavorite: true,
    keyword: '도브센시티브바',
    influence: '높음',
    avgPrice: '높음',
    productCount: '1,671개',
    pcSearchVol: '449,700건',
    moSearchVol: '449,700건',
    avgClick: '4163.3',
    competition: 0.41,
  },
  {
    ranking: 18,
    isFavorite: false,
    keyword: '디올립글로우',
    influence: '높음',
    avgPrice: '높음',
    productCount: '1,412개',
    pcSearchVol: '113,700건',
    moSearchVol: '113,700건',
    avgClick: '449.4',
    competition: 0.26,
  },
  {
    ranking: 5,
    isFavorite: true,
    keyword: '록시땅핸드크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '121개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    avgClick: '1259.7',
    competition: 0.02,
  },
  {
    ranking: 12,
    isFavorite: false,
    keyword: '립밤',
    influence: '중간',
    avgPrice: '중간',
    productCount: '63,231개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    avgClick: '1207.6',
    competition: 0.07,
  },
  {
    ranking: 9,
    isFavorite: false,
    keyword: '마데카크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '576개',
    pcSearchVol: '51,500건',
    moSearchVol: '51,500건',
    avgClick: '519.5',
    competition: 0.02,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    avgClick: '1794.9',
    competition: 0.6,
  },
  {
    ranking: 5,
    isFavorite: true,
    keyword: '록시땅핸드크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '121개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    avgClick: '1259.7',
    competition: 0.02,
  },
  {
    ranking: 12,
    isFavorite: false,
    keyword: '립밤',
    influence: '중간',
    avgPrice: '중간',
    productCount: '63,231개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    avgClick: '1207.6',
    competition: 0.07,
  },
  {
    ranking: 9,
    isFavorite: false,
    keyword: '마데카크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '576개',
    pcSearchVol: '51,500건',
    moSearchVol: '51,500건',
    avgClick: '519.5',
    competition: 0.02,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    avgClick: '1794.9',
    competition: 0.6,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    avgClick: '1794.9',
    competition: 0.6,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    avgClick: '1794.9',
    competition: 0.6,
  },
]);

//관심 카테고리
const categoryList = ref([
  {
    top50: 50,
    isFavorite: true,
    keyword: '도브센시티브바',
    influence: '높음',
    avgPrice: '높음',
    productCount: '1,671개',
    pcSearchVol: '449,700건',
    moSearchVol: '449,700건',
    competition: 0.41,
  },
  {
    top50: 49,
    isFavorite: false,
    keyword: '디올립글로우',
    influence: '높음',
    avgPrice: '높음',
    productCount: '1,412개',
    pcSearchVol: '113,700건',
    moSearchVol: '113,700건',
    competition: 0.26,
  },
  {
    top50: 48,
    isFavorite: true,
    keyword: '록시땅핸드크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '121개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    top50: 47,
    isFavorite: false,
    keyword: '립밤',
    influence: '중간',
    avgPrice: '중간',
    productCount: '63,231개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    top50: 46,
    isFavorite: false,
    keyword: '마데카크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '576개',
    pcSearchVol: '51,500건',
    moSearchVol: '51,500건',
    competition: 0.02,
  },
  {
    top50: 45,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    top50: 44,
    isFavorite: true,
    keyword: '록시땅핸드크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '121개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    top50: 43,
    isFavorite: false,
    keyword: '립밤',
    influence: '중간',
    avgPrice: '중간',
    productCount: '63,231개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    top50: 42,
    isFavorite: false,
    keyword: '마데카크림',
    influence: '높음',
    avgPrice: '높음',
    productCount: '576개',
    pcSearchVol: '51,500건',
    moSearchVol: '51,500건',
    competition: 0.02,
  },
  {
    top50: 41,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    top50: 40,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    top50: 39,
    isFavorite: false,
    keyword: '바디로션',
    influence: '높음',
    avgPrice: '높음',
    productCount: '33,309개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
]);

//탭
const currentTab = ref('keyword'); // 기본값: 관심 키워드
const tabs = [
  { id: 'keyword', label: '관심 키워드' },
  { id: 'category', label: '관심 카테고리' },
];
const changeTab = (tabId) => {
  currentTab.value = tabId;
};
</script>
