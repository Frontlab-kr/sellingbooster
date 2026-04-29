<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>내 상품 카테고리 급상승 키워드</h5>
      <div class="sb-dashboard-card-head-menu">
        <div class="sb-dashboard-card-head-menu__text">최근 7일 기준</div>
        <SbMenu :items="menuItems" />
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-tab">
        <div class="pc">
          <Button label="건강기능식품" variant="text" class="active" />
        </div>
        <div class="mo">
          <Button label="건기식" variant="text" class="active" />
        </div>
        <Button label="이너뷰티" variant="text" />
        <Button label="코스메틱" variant="text" />
        <Button label="패션" variant="text" />
        <Button label="펫" variant="text" />
      </div>
      <div class="sb-dashboard-trend-contents">
        <div class="sb-dashboard-trend-table">
          <div class="sb-table">
            <DataTable
              v-scroll-end
              :value="trendKeyword"
              responsiveLayout="scroll"
              removableSort
              scrollable
            >
              <Column
                field="keyword"
                header="급상승 키워드"
                bodyClass="text-left"
                style="width: 346px"
              >
                <template #body="slotProps">
                  <span>{{ slotProps.data.keyword }}</span>
                </template>
              </Column>

              <Column
                field="growthRate"
                header="상승률"
                bodyClass="text-center"
                style="width: 346px"
              >
                <template #body="slotProps">
                  <div class="pc">
                    <div class="sb-table-body-progress">
                      <div class="sb-table-body-progress__title">
                        {{ slotProps.data.growthRate }}%
                      </div>
                      <div class="sb-table-body-progress__contents">
                        <ProgressBar
                          :value="slotProps.data.growthRate"
                        ></ProgressBar>
                      </div>
                    </div>
                  </div>
                  <div class="mo">{{ slotProps.data.growthRate }}%</div>
                </template>
              </Column>

              <Column
                field="reason"
                header="상승 사유 요약"
                bodyClass="text-left"
                style="width: 346px"
              >
                <template #body="slotProps">
                  <span>{{ slotProps.data.reason }}</span>
                </template>
              </Column>

              <template #empty>
                <div class="sb-nodata">
                  <IconIllustrationSmile class="ico-illustration-smile" />
                  <div class="sb-nodata__text">
                    <p>분석된 급상승 키워드가 없습니다.</p>
                  </div>
                </div>
              </template>
            </DataTable>
          </div>
        </div>
        <div class="sb-dashboard-trend-product">
          <div class="sb-dashboard-trend-product-head">
            <strong>시너지를 높여줄 추천 상품</strong>
            <NuxtLink to="/">
              <Button variant="text">
                <span class="p-button-label">내 상품 랭킹 확인하기</span>
                <IconArrowSmallRight class="ico-arrow-small-right" />
              </Button>
            </NuxtLink>
          </div>
          <div class="sb-dashboard-trend-product-list" v-scroll-end>
            <div class="sb-dashboard-trend-product-list-scroll">
              <NuxtLink
                to="/"
                class="sb-dashboard-trend-product-list-item"
                v-for="n in 4"
                :key="n"
              >
                <div class="sb-dashboard-trend-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-dashboard-trend-product-list-item__contents">
                  <div class="sb-dashboard-trend-product-list-item__category">
                    <span>뉴트리코어</span>
                    <span>11번가</span>
                  </div>
                  <div class="sb-dashboard-trend-product-list-item__title">
                    하이퍼셀 오메가3 식물성 알티지(RTG오메가 3)하이퍼셀 오메가3
                    식물성 알티지(RTG오메가 3)
                  </div>
                  <div class="sb-dashboard-trend-product-list-item__price">
                    16,000원
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="sb-dashboard-mobile-notice">
          PC 브라우저로 더 많은 상세 정보를 확인하세요.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import IconArrowSmallRight from '@/assets/icons/arrow/small-right.svg?component';
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
const trendKeyword = ref([
  {
    keyword: '혈당컷',
    growthRate: 84,
    reason: '중장년 다이어트 관심 증가',
  },
  {
    keyword: '마그네슘 글라시네이트',
    growthRate: 59,
    reason: '수면/근육 이슈 콘텐츠 확산',
  },
  {
    keyword: 'NMN',
    growthRate: 52,
    reason: '항노화 트렌드 재부상',
  },
  {
    keyword: '관절 MSM',
    growthRate: 34,
    reason: '환절기 관절 키워드 증가',
  },
  {
    keyword: '프로바이오틱스',
    growthRate: 31,
    reason: '장 건강 이슈 지속',
  },
  {
    keyword: '혈당컷',
    growthRate: 84,
    reason: '중장년 다이어트 관심 증가',
  },
  {
    keyword: '마그네슘 글라시네이트',
    growthRate: 59,
    reason: '수면/근육 이슈 콘텐츠 확산',
  },
  {
    keyword: 'NMN',
    growthRate: 52,
    reason: '항노화 트렌드 재부상',
  },
  {
    keyword: '관절 MSM',
    growthRate: 34,
    reason: '환절기 관절 키워드 증가',
  },
  {
    keyword: '프로바이오틱스',
    growthRate: 31,
    reason: '장 건강 이슈 지속',
  },
]);
</script>
