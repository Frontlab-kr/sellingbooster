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
            <p>※ 네이버 쇼핑 기준 데이터 입니다.</p>
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
      <div class="sb-trend-top">
        <div class="sb-trend-top__title">
          <h5>카테고리 연관 상품 TOP 30</h5>
          <p>※ 네이버 쇼핑 기준</p>
        </div>
        <div class="sb-nodata">
          <IconIllustrationSmile class="ico-illustration-smile" />
          <div class="sb-nodata__text">
            <p>
              궁금한 카테고리가 있다면 지금 검색해보세요<br />
              정확한 분석 데이터가 기다리고 있어요.
            </p>
          </div>
        </div>
      </div>
      <SbBanner />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

const op = ref();

const togglePopover = (event) => {
  // toggle 대신 show/hide를 사용하여 마우스 오버에 정확히 반응하게 함
  if (event.type === 'mouseenter') {
    op.value.show(event);
  } else {
    op.value.hide();
  }
};

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천 기회' },
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

const top30 = ref([]);
</script>
