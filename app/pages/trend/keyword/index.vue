<template>
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h4>마켓 트렌드</h4>
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
          <div class="sb-trend-search-form-item">
            <SbInput
              v-model="searchKeyword"
              show-search
              @search="onSearch"
              placeholder="검색하실 키워드를 입력하세요."
              size="large"
            />
            <div class="sb-chip">
              <div class="sb-chip__title">최근 검색어</div>
              <div class="sb-chip-list">
                <Chip
                  v-for="item in keywords"
                  :key="item.id"
                  :label="item.label"
                  removable
                  @remove="removeKeyword(item.id)"
                />
              </div>
              <div class="sb-chip__button">
                <Button variant="text" @click="clearAllKeywords">
                  <IconSystemTrash class="ico-system-trash" />
                  <span class="p-button-label">전체삭제</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-trend-table">
        <div class="sb-trend-table-head">
          <div class="sb-trend-table-head__title">
            <h5>키워드 목록</h5>
            <p>※ 네이버 쇼핑 기준 데이터 입니다.</p>
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
                field="category"
                header="카테고리"
                sortable
                style="width: 160px"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.category"></span>
                </template>
              </Column>
              <Column
                field="influence"
                header="영향력"
                sortable
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.influence"></span>
                </template>
              </Column>
              <Column
                field="avgPrice"
                header="평균가"
                sortable
                style="width: 160px"
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
                style="width: 160px"
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
                style="width: 160px"
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
                style="width: 160px"
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
                header="경쟁강도"
                sortable
                style="width: 160px"
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.competition"></span>
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
      <div class="sb-trend-table">
        <div class="sb-trend-table-head">
          <div class="sb-trend-table-head__title">
            <h5>나의 관심 키워드</h5>
          </div>
        </div>
        <div class="sb-table">
          <ClientOnly>
            <DataTable
              :value="products"
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
                field="category"
                header="카테고리"
                sortable
                style="width: 160px"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.category"></span>
                </template>
              </Column>
              <Column
                field="influence"
                header="영향력"
                sortable
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.influence"></span>
                </template>
              </Column>
              <Column
                field="avgPrice"
                header="평균가"
                sortable
                style="width: 160px"
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
                style="width: 160px"
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
                style="width: 160px"
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
                style="width: 160px"
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
                header="경쟁강도"
                sortable
                style="width: 160px"
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span v-html="slotProps.data.competition"></span>
                </template>
              </Column>
            </DataTable>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//breadcrumb
const breadcrumb = ref([{ label: '마켓 트렌드' }, { label: '키워드 랭킹' }]);

//
const searchKeyword = ref('');

//
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

//
const keywords = ref([
  { id: 1, label: '스텐리' },
  { id: 2, label: '유니클로' },
  { id: 3, label: '두쫀쿠' },
  { id: 4, label: '카다이프' },
  { id: 5, label: '피스타치오' },
  { id: 6, label: '피스타치오스프레드' },
]);

// 검색어 개별 삭제
const removeKeyword = (id) => {
  keywords.value = keywords.value.filter((item) => item.id !== id);
};

// 검색어 전체 삭제
const clearAllKeywords = () => {
  keywords.value = [];
};

//
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
</script>
