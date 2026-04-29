<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>관심 키워드</h5>
      <div class="sb-dashboard-card-head-menu">
        <NuxtLink to="/">
          <Button variant="text" severity="white">
            <template #icon>
              <IconArrowUpRight class="ico-arrow-up-right" />
            </template>
          </Button>
        </NuxtLink>
        <SbMenu :items="menuItems" />
      </div>
    </div>

    <div class="sb-dashboard-card-body">
      <div class="sb-table">
        <DataTable
          v-scroll-end
          :value="interestKeyword"
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
              <strong>{{ slotProps.data.keyword }}</strong>
            </template>
          </Column>

          <Column
            field="searchVol"
            header="월 검색량"
            bodyClass="text-right"
            style="width: 133px"
          >
            <template #body="slotProps">
              <span>{{ slotProps.data.searchVol }}</span>
            </template>
          </Column>

          <Column
            field="avgClickPrice"
            header="평균 클릭비"
            bodyClass="text-right"
            style="width: 150px"
          >
            <template #body="slotProps">
              <span>{{ slotProps.data.avgClickPrice }}</span>
            </template>
          </Column>

          <Column
            field="ranking"
            header="카테고리내 순위"
            bodyClass="text-right"
            style="width: 133px"
          >
            <template #body="slotProps">
              <span>{{ slotProps.data.ranking }}위</span>
            </template>
          </Column>

          <Column
            field="productCount"
            header="상품 수"
            bodyClass="text-right"
            style="width: 133px"
          >
            <template #body="slotProps">
              <span>{{ slotProps.data.productCount }}</span>
            </template>
          </Column>

          <template #empty>
            <div class="sb-nodata">
              <IconIllustrationSmile class="ico-illustration-smile" />
              <div class="sb-nodata__text">
                <p>
                  궁금한 키워드가 있다면 지금 검색해보세요<br />
                  정확한 분석 데이터가 기다리고 있어요.
                </p>
              </div>
            </div>
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//menu
const emit = defineEmits(['edit-widget']);
const menuItems = ref([
  {
    label: '편집',
    icon: IconSystemEdit,
    command: () => {
      emit('edit-widget');
    },
  },
]);

//data
const interestKeyword = ref([
  {
    keyword: '크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '피부과',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '마데카크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '멜라논크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '라로슈포제',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '도미나크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '재생크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '닥터지수분크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '키엘',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '달팽이크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '피부과',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '마데카크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '멜라논크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '라로슈포제',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '도미나크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '재생크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '닥터지수분크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '키엘',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '달팽이크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
]);
</script>
