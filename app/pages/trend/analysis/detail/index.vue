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
            <p>네이버 쇼핑 기준 데이터 입니다.</p>
          </div>
        </div>
        <div class="sb-trend-table-tab-center">
          <div class="sb-tab-circle">
            <Button label="전체" variant="text" class="active" />
            <Button label="벤치마킹(2)" variant="text" />
            <Button label="경쟁사(6)" variant="text" />
            <Button label="트렌드(1)" variant="text" />
            <Button label="광고(1)" variant="text" />
            <Button label="판매" variant="text" />
            <Button label="구매(20)" variant="text" />
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
              <Column field="keyword" header="키워드" style="width: 200px">
                <template #body="slotProps">
                  <div class="sb-table-body-title">
                    <Button
                      variant="text"
                      @click="
                        ((slotProps.data.isFavorite =
                          !slotProps.data.isFavorite),
                        (dialogKeyword = true))
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
                field="category"
                header="카테고리"
                sortable
                style="width: 150px"
              />

              <Column
                field="type"
                header="구분"
                sortable
                style="width: 150px"
              />

              <Column
                field="influence"
                header="영향력"
                sortable
                style="width: 150px"
              />

              <Column
                field="avgPrice"
                header="평균가"
                sortable
                style="width: 150px"
              />

              <Column
                field="productCount"
                header="상품수"
                sortable
                bodyClass="text-right"
                style="width: 200px"
              />

              <Column
                field="pcSearchVol"
                header="PC 월 검색량"
                sortable
                bodyClass="text-right"
                style="width: 200px"
              />

              <Column
                field="moSearchVol"
                header="MO 월 검색량"
                sortable
                bodyClass="text-right"
                style="width: 150px"
              />

              <Column
                field="competition"
                sortable
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
              <Column field="keyword" header="키워드" style="width: 250px">
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
                field="type"
                header="구분"
                sortable
                style="width: 150px"
              />

              <Column
                field="influence"
                header="영향력"
                sortable
                style="width: 150px"
              />

              <Column
                field="avgPrice"
                header="평균가"
                sortable
                style="width: 150px"
              />

              <Column
                field="productCount"
                header="상품수"
                sortable
                style="width: 230px"
                bodyClass="text-right"
              />

              <Column
                field="pcSearchVol"
                header="PC 월 검색량"
                sortable
                style="width: 250px"
                bodyClass="text-right"
              />

              <Column
                field="moSearchVol"
                header="MO 월 검색량"
                sortable
                style="width: 150px"
                bodyClass="text-right"
              />

              <Column
                field="competition"
                sortable
                style="width: 150px"
                bodyClass="text-right"
              >
                <template #header>
                  <div class="sb-table-header-title">
                    <span class="p-datatable-column-title">경쟁강도</span>
                    <div class="sb-table-header-title__icon">
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
                      :class="{
                        'text-info':
                          slotProps.data.competition >= 0.4 &&
                          slotProps.data.competition < 0.6,
                        'text-success':
                          slotProps.data.competition >= 0.25 &&
                          slotProps.data.competition < 0.4,
                        'text-danger': slotProps.data.competition < 0.1,
                        'text-warn': slotProps.data.competition >= 0.6,
                      }"
                    >
                      {{ slotProps.data.competition.toFixed(2) }}
                    </span>
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>
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

      <SbBanner />

      <Dialog v-model:visible="dialogKeyword" modal>
        <div class="p-dialog-inner">
          <h6 class="p-dialog-title">관심 키워드 저장</h6>
          <div class="sb-dialog-keyword">
            <div class="sb-chip">
              <div class="sb-checkbox">
                <div
                  class="sb-checkbox-item"
                  v-for="item in interestOptions"
                  :key="item.value"
                >
                  <Checkbox
                    v-model="selectedInterests"
                    :inputId="item.id"
                    :value="item.value"
                  />
                  <label :for="item.id">
                    {{ item.label }}
                    <span
                      ><strong>{{ item.count }}</strong
                      >/{{ item.total }}</span
                    >
                  </label>
                </div>
              </div>
            </div>
            <div class="sb-caution">
              <ul>
                <li>저장하려는 키워드의 관심 그룹을 선택해주세요.</li>
                <li>관심 키워드는 그룹 당 최대 20개씩 저장 가능해요.</li>
                <li>저장한 키워드는 분석결과 목록에서 확인할 수 있어요.</li>
              </ul>
            </div>
            <div class="sb-dialog-keyword__button">
              <Button
                label="확인"
                severity="primary"
                @click="dialogKeyword = false"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '분석 결과' },
]);

//dialog
const dialogKeyword = ref(false);

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
    isFavorite: true,
    keyword: '도브센시티브바',
    category: '의류',
    type: '벤치마킹',
    influence: '높음',
    avgPrice: '중간',
    productCount: '449,700개',
    pcSearchVol: '449,700건',
    moSearchVol: '449,700건',
    competition: 0.41,
  },
  {
    isFavorite: false,
    keyword: '디올립글로우',
    category: '라면/면류',
    type: '벤치마킹',
    influence: '높음',
    avgPrice: '높음',
    productCount: '113,700개',
    pcSearchVol: '113,700건',
    moSearchVol: '113,700건',
    competition: 0.26,
  },
  {
    isFavorite: true,
    keyword: '록시땅핸드크림',
    category: '휴대폰액세서리',
    type: '트렌드',
    influence: '높음',
    avgPrice: '높음',
    productCount: '102,580개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '립밤',
    category: '여성가방',
    type: '광고',
    influence: '중간',
    avgPrice: '중간',
    productCount: '51,520개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    isFavorite: false,
    keyword: '마데카크림',
    category: '농산물',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '51,500개',
    pcSearchVol: '51,500건',
    moSearchVol: '46,600건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '바디로션',
    category: '휴대폰',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '46,600개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    isFavorite: true,
    keyword: '록시땅핸드크림',
    category: '게임기/타이틀',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '102,580개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '립밤',
    category: '색조메이크업',
    type: '구매',
    influence: '중간',
    avgPrice: '중간',
    productCount: '51,520개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    isFavorite: false,
    keyword: '마데카크림',
    category: '의류',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '51,500개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '바디로션',
    category: '휴대폰',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '46,600개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    isFavorite: true,
    keyword: '도브센시티브바',
    category: '의류',
    type: '벤치마킹',
    influence: '높음',
    avgPrice: '중간',
    productCount: '449,700개',
    pcSearchVol: '449,700건',
    moSearchVol: '449,700건',
    competition: 0.41,
  },
  {
    isFavorite: false,
    keyword: '디올립글로우',
    category: '라면/면류',
    type: '벤치마킹',
    influence: '높음',
    avgPrice: '높음',
    productCount: '113,700개',
    pcSearchVol: '113,700건',
    moSearchVol: '113,700건',
    competition: 0.26,
  },
  {
    isFavorite: true,
    keyword: '록시땅핸드크림',
    category: '휴대폰액세서리',
    type: '트렌드',
    influence: '높음',
    avgPrice: '높음',
    productCount: '102,580개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '립밤',
    category: '여성가방',
    type: '광고',
    influence: '중간',
    avgPrice: '중간',
    productCount: '51,520개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    isFavorite: false,
    keyword: '마데카크림',
    category: '농산물',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '51,500개',
    pcSearchVol: '51,500건',
    moSearchVol: '46,600건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '바디로션',
    category: '휴대폰',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '46,600개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    isFavorite: true,
    keyword: '록시땅핸드크림',
    category: '게임기/타이틀',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '102,580개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '립밤',
    category: '색조메이크업',
    type: '구매',
    influence: '중간',
    avgPrice: '중간',
    productCount: '51,520개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    isFavorite: false,
    keyword: '마데카크림',
    category: '의류',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '51,500개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '바디로션',
    category: '휴대폰',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '46,600개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
]);

const categoryList = ref([
  {
    isFavorite: true,
    keyword: '도브센시티브바',
    type: '벤치마킹',
    influence: '높음',
    avgPrice: '중간',
    productCount: '449,700개',
    pcSearchVol: '449,700건',
    moSearchVol: '449,700건',
    competition: 0.41,
  },
  {
    isFavorite: false,
    keyword: '디올립글로우',
    type: '벤치마킹',
    influence: '높음',
    avgPrice: '높음',
    productCount: '113,700개',
    pcSearchVol: '113,700건',
    moSearchVol: '113,700건',
    competition: 0.26,
  },
  {
    isFavorite: true,
    keyword: '록시땅핸드크림',
    type: '트렌드',
    influence: '높음',
    avgPrice: '높음',
    productCount: '102,580개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '립밤',
    type: '광고',
    influence: '중간',
    avgPrice: '중간',
    productCount: '51,520개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    isFavorite: false,
    keyword: '마데카크림',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '51,500개',
    pcSearchVol: '51,500건',
    moSearchVol: '46,600건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '바디로션',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '46,600개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
  {
    isFavorite: true,
    keyword: '록시땅핸드크림',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '102,580개',
    pcSearchVol: '102,580건',
    moSearchVol: '102,580건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '립밤',
    type: '구매',
    influence: '중간',
    avgPrice: '중간',
    productCount: '51,520개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.07,
  },
  {
    isFavorite: false,
    keyword: '마데카크림',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '51,500개',
    pcSearchVol: '51,520건',
    moSearchVol: '51,520건',
    competition: 0.02,
  },
  {
    isFavorite: false,
    keyword: '바디로션',
    type: '구매',
    influence: '높음',
    avgPrice: '높음',
    productCount: '46,600개',
    pcSearchVol: '46,600건',
    moSearchVol: '46,600건',
    competition: 0.6,
  },
]);

//탭
const currentTab = ref('category');
const tabs = [
  { id: 'keyword', label: '관심 키워드' },
  { id: 'category', label: '관심 카테고리' },
];
const changeTab = (tabId) => {
  currentTab.value = tabId;
};

//chip
const interestOptions = ref([
  {
    id: 'benchmarking',
    label: '벤치마킹',
    value: 'benchmarking',
    count: 0,
    total: 20,
  },
  { id: 'trend', label: '트렌드', value: 'trend', count: 0, total: 20 },
  {
    id: 'competitor',
    label: '경쟁사',
    value: 'competitor',
    count: 0,
    total: 20,
  },
  { id: 'ad', label: '광고', value: 'ad', count: 0, total: 20 },
  { id: 'sales', label: '판매', value: 'sales', count: 0, total: 20 },
  { id: 'purchase', label: '구매', value: 'purchase', count: 0, total: 20 },
]);

const selectedInterests = ref([]); // 선택된 값들이 담길 배열
</script>
