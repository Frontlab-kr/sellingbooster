<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>내 상품 키워드 TOP 10 분석</h5>
      <div class="sb-dashboard-card-head-menu">
        <div class="sb-dashboard-card-head-menu__text">전일 00시 기준</div>
        <NuxtLink to="/">
          <Button variant="text" severity="white">
            <template #icon>
              <IconArrowUpRight class="ico-arrow-up-right" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-table">
        <DataTable
          v-scroll-end
          :value="keywordTop10"
          responsiveLayout="scroll"
          removableSort
          scrollable
        >
          <Column
            field="keyword"
            header="키워드"
            bodyClass="text-left"
            style="width: 150px"
          >
            <template #body="slotProps">
              <span v-html="slotProps.data.keyword"></span>
            </template>
          </Column>
          <Column
            field="searchVol"
            header="월 검색량"
            bodyClass="text-right"
            style="width: 136px"
          >
            <template #body="slotProps">
              <span v-html="slotProps.data.searchVol"></span>
            </template>
          </Column>
          <Column
            field="ranking"
            header="카테고리내 순위"
            bodyClass="text-right"
            style="width: 136px"
            class="sb-table-pc"
          >
            <template #body="slotProps">
              <span v-html="slotProps.data.ranking"></span>위
            </template>
          </Column>
          <Column
            field="productCount"
            header="상품수"
            bodyClass="text-right"
            style="width: 136px"
            class="sb-table-pc"
          >
            <template #body="slotProps">
              <span v-html="slotProps.data.productCount"></span>
            </template>
          </Column>
          <Column
            field="competition"
            bodyClass="text-right"
            style="width: 136px"
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
          class:
            'p-popover-flipped sb-table-popover sb-table-popover-dashboard',
        },
      }"
    >
      <SbLegend />
    </Popover>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
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

//data
const keywordTop10 = ref([
  {
    ranking: 18,
    isFavorite: false,
    keyword: '크림',
    productCount: '123,456개',
    searchVol: '896,000건',
    competition: 6.05,
  },
  {
    ranking: 9,
    isFavorite: false,
    keyword: '피부과',
    productCount: '1,456개',
    searchVol: '449,700건',
    competition: 0.41,
  },
  {
    ranking: 12,
    isFavorite: false,
    keyword: '마데카크림',
    productCount: '2,506개',
    searchVol: '113,700건',
    competition: 0.26,
  },
  {
    ranking: 24,
    isFavorite: false,
    keyword: '멜라논크림',
    productCount: '1,234개',
    searchVol: '102,580건',
    competition: 0.02,
  },
  {
    ranking: 5,
    isFavorite: false,
    keyword: '라로슈포제B5',
    productCount: '1,234개',
    searchVol: '51,520건',
    competition: 0.77,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '재생크림',
    productCount: '1,234개',
    searchVol: '51,000건',
    competition: 0.32,
  },
  {
    ranking: 24,
    isFavorite: false,
    keyword: '멜라논크림',
    productCount: '1,234개',
    searchVol: '102,580건',
    competition: 0.02,
  },
  {
    ranking: 5,
    isFavorite: false,
    keyword: '라로슈포제B5',
    productCount: '1,234개',
    searchVol: '51,520건',
    competition: 0.77,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '재생크림',
    productCount: '1,234개',
    searchVol: '51,000건',
    competition: 0.32,
  },
  {
    ranking: 24,
    isFavorite: false,
    keyword: '멜라논크림',
    productCount: '1,234개',
    searchVol: '102,580건',
    competition: 0.02,
  },
]);
</script>
