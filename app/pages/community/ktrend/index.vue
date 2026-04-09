<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>K-trend</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-ktrend">
      <div class="sb-blog-head">
        <div class="sb-blog-head__title">
          <h4>
            지금 구독하기 하고,<br class="mo" />
            셀러한테 필요한 정보 꼭 확인하세요!
          </h4>
        </div>
        <div class="sb-blog-head-swiper">
          <div class="sb-blog-head-swiper__contents">
            <ClientOnly>
              <swiper-container
                ref="containerRef"
                :slides-per-view="swiperParams.slidesPerView"
                :space-between="swiperParams.spaceBetween"
                :effect="swiperParams.effect"
                :breakpoints="JSON.stringify(swiperParams.breakpoints)"
                @swiperactiveindexchange="onSlideChange"
              >
                <swiper-slide>
                  <NuxtLink to="/" class="sb-blog-head-swiper-item">
                    <div class="sb-blog-head-swiper-item__thumb">
                      <img src="./../../../assets/images/blog.png" alt="" />
                    </div>
                    <h4>
                      초보 셀러가 많이 하는 5가지 실수 제목은<br />
                      최대 2줄까지 노출해주세요
                    </h4>
                  </NuxtLink>
                </swiper-slide>
                <swiper-slide>
                  <NuxtLink to="/" class="sb-blog-head-swiper-item">
                    <div class="sb-blog-head-swiper-item__thumb">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <h4>
                      초보 셀러가 많이 하는 5가지 실수 제목은<br />
                      최대 2줄까지 노출해주세요
                    </h4>
                  </NuxtLink>
                </swiper-slide>
              </swiper-container>
            </ClientOnly>
          </div>
          <div class="sb-blog-head-swiper__button">
            <div class="sb-swiper-controls">
              <Button
                rounded
                severity="neutral"
                :disabled="isBeginning"
                @click="swiper.prev()"
              >
                <template #icon>
                  <IconArrowLeft class="ico-arrow-left" />
                </template>
              </Button>
              <Button
                rounded
                severity="neutral"
                :disabled="isEnd"
                @click="swiper.next()"
              >
                <template #icon>
                  <IconArrowRight class="ico-arrow-right" />
                </template>
              </Button>
            </div>
          </div>
        </div>
        <div class="sb-blog-head__button">
          <Button severity="primary" label="셀링블로그 구독하기" />
        </div>
      </div>
      <div class="sb-ktrend-list">
        <div class="grid">
          <div class="col-12">
            <div class="sb-ktrend-list">
              <div class="sb-ktrend-list-head">
                <div class="sb-tab">
                  <Button label="건강기능식품" variant="text" class="active" />
                  <Button label="이너뷰티" variant="text" />
                  <Button label="코스메틱" variant="text" />
                  <Button label="패션" variant="text" />
                  <Button label="펫" variant="text" />
                  <Button label="유아" variant="text" />
                </div>
                <div class="sb-ktrend-list-head-chip">
                  <div class="sb-chip">
                    <div class="sb-chip__title">관련 키워드</div>
                    <div class="sb-checkbox">
                      <div
                        class="sb-checkbox-item"
                        v-for="item in keywordOptions"
                        :key="item.value"
                      >
                        <Checkbox
                          v-model="selectedKeyword"
                          :inputId="item.id"
                          :value="item.value"
                        />
                        <label :for="item.id">{{ item.label }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sb-ktrend-list-grid">
                <NuxtLink to="/" class="sb-ktrend-list-item">
                  <div class="sb-ktrend-list-item-head">
                    <div class="sb-ktrend-list-item-head__badge">
                      <Badge value="답변 대기" severity="danger"></Badge>
                    </div>
                    <div class="sb-ktrend-list-item-head__date">2026.02.14</div>
                  </div>
                  <div class="sb-ktrend-list-item-contents">
                    <div class="sb-ktrend-list-item-contents__thumb">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div class="sb-ktrend-list-item-contents__text">
                      <h6>
                        컨텐츠 제목은 최대 1줄로 처리하고 더 길어질 경우는
                        ...으로 처리하는 것으로 결정
                      </h6>
                      <p>
                        초보 셀러가 많이 하는 5가지 실수 잊지 말고 이 블로그글을
                        읽고 실수를 미리 방지하세요 최대 2줄까지 노출해주세요
                        초보 셀러가 많이 하는 5가지 실수 잊지 말고 이 블로그글을
                        읽고 실수를 미리 방지하세요 최대 2줄까지 노출해주세요
                        초보 셀러가 많이 하는 5가지 실수 잊지 말고 이 블로그글을
                        읽고 실수를 미리 방지하세요 최대 2줄까지 노출해주세요
                        초보 셀러가 많이 하는 5가지 실수 잊지 말고 이 블로그글을
                        읽고 실수를 미리 방지하세요 최대 2줄까지 노출해주세요
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-ktrend-keyword">
              <div class="sb-ktrend-keyword-head">
                <h5>K-Culture 키워드</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-ktrend-ranking">
              <div class="sb-ktrend-ranking-head">
                <h5>K-Trend 키워드 랭킹</h5>
                <Button rounded severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </div>
              <DataTable
                :value="rankingList"
                responsiveLayout="scroll"
                removableSort
                scrollable
                class="sb-ktrend-datatable"
              >
                <Column field="ranking" header="랭킹" style="width: 175px">
                  <template #body="slotProps">
                    <span class="ranking-number">{{
                      slotProps.data.ranking
                    }}</span>
                  </template>
                </Column>

                <Column
                  field="keyword"
                  header="키워드"
                  style="min-width: 175px"
                >
                  <template #body="slotProps">
                    <span class="keyword-text">{{
                      slotProps.data.keyword
                    }}</span>
                  </template>
                </Column>

                <Column
                  field="searchVol"
                  header="검색량"
                  headerClass="justify-content-end"
                  bodyClass="text-right"
                  style="width: 175px"
                >
                  <template #body="slotProps">
                    <div
                      class="flex align-items-center justify-content-end gap-1"
                    >
                      <template v-if="slotProps.data.searchDir === 'up'">
                        <IconArrowUp
                          class="ico-arrow-up text-red-500"
                          style="width: 12px"
                        />
                        <span class="text-red-500 font-bold">{{
                          slotProps.data.searchVol
                        }}</span>
                      </template>
                      <template v-else>
                        <IconArrowDown
                          class="ico-arrow-down text-blue-500"
                          style="width: 12px"
                        />
                        <span class="text-blue-500 font-bold">{{
                          slotProps.data.searchVol
                        }}</span>
                      </template>
                    </div>
                  </template>
                </Column>

                <Column
                  field="competition"
                  header="경쟁강도"
                  bodyClass="text-right"
                  style="width: 175px"
                >
                  <template #body="slotProps">
                    <div
                      class="flex align-items-center justify-content-end gap-2"
                    >
                      <span class="competition-value">{{
                        slotProps.data.competition
                      }}</span>
                      <Badge
                        :value="slotProps.data.status"
                        :severity="
                          slotProps.data.status === '최적'
                            ? 'success'
                            : 'danger'
                        "
                        class="sb-badge-sm"
                      />
                    </div>
                  </template>
                </Column>

                <template #empty>
                  <div class="sb-nodata">
                    <IconIllustrationSmile class="ico-illustration-smile" />
                    <div class="sb-nodata__text">
                      <p>조회된 데이터가 없습니다.</p>
                    </div>
                  </div>
                </template>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="col-6">
          <div class="sb-ktrend-ksnapp">
            <div class="sb-ktrend-ksnapp-head">
              <h5>
                <img src="./../../../assets/images/ksnapp.png" alt="KSnapp" />
              </h5>
              <span>[정보 출처 K-snapp]</span>
            </div>
            <div class="sb-ktrend-ksnapp-list">
              <NuxtLink to="/" class="sb-ktrend-ksnapp-list-item">
                <div class="sb-ktrend-ksnapp-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-ktrend-ksnapp-list-item__text">
                  <IconSystemUp class="ico-system-up" />

                  <p>
                    [리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의
                    뷰티템 [리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄
                    화제의 뷰티템 [리뷰] "백지영도 쓴다" ... 피부 고민 해결 해
                    줄 화제의 뷰티템
                  </p>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="sb-ktrend-ksnapp-list-item">
                <div class="sb-ktrend-ksnapp-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-ktrend-ksnapp-list-item__text">
                  <IconSystemDown class="ico-system-down" />
                  <p>안효섭, 올화이트 '수트핏' 눈길 .•• 고급미 물씬</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="sb-ktrend-trend">
            <div class="sb-ktrend-trend-head">
              <h5>Selling Trend</h5>
              <div class="sb-ktrend-trend-head__menu">
                <span>해당 컨텐츠는 셀링부스터가 편집하고 발행했습니다.</span>
                <Button rounded severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </div>
            </div>
            <div class="sb-ktrend-trend-list" v-scroll-end>
              <div class="sb-ktrend-trend-list-scroll">
                <NuxtLink
                  to="/"
                  class="sb-ktrend-trend-list-item"
                  v-for="n in 10"
                  :key="n"
                >
                  <div class="sb-ktrend-trend-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-ktrend-trend-list-item__contents">
                    <div class="sb-ktrend-trend-list-item__head">
                      <span>
                        <Badge value="NEW" severity="warn"></Badge>
                      </span>
                      <p>2026.02.14</p>
                    </div>
                    <div class="sb-ktrend-trend-list-item__body">
                      <p>
                        광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다.
                        초보 셀러가 먼저 잡아야 할 핵심 구조 정리
                      </p>
                    </div>
                    <div class="sb-ktrend-trend-list-item__foot">
                      <SbInfo
                        :visible-buttons="['view', 'read']"
                        :view-count="'12,325'"
                        :read-time="'12분 분량'"
                        class="sb-info--small"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SbInfo from '@/pages/community/components/SbInfo.vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemUp from '@/assets/icons/system/up.svg?component';
import IconSystemDown from '@/assets/icons/system/down.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

const searchKeyword = ref('');

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'K-trend' },
]);

//swiper
const containerRef = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  effect: 'fade',
};

const swiper = useSwiper(containerRef, swiperParams);

const onSlideChange = () => {
  const swiperInst = swiper.instance.value;

  if (swiperInst) {
    isBeginning.value = (swiperInst as any).isBeginning;
    isEnd.value = (swiperInst as any).isEnd;
  }
};

onMounted(() => {
  setTimeout(() => {
    onSlideChange();
  }, 100);
});

const rankingList = ref([
  {
    ranking: 1,
    keyword: '오메가3',
    searchVol: '12%',
    searchDir: 'up',
    competition: '6.06',
    status: '최적',
  },
  {
    ranking: 2,
    keyword: '정관장',
    searchVol: '4%',
    searchDir: 'down',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 3,
    keyword: '유산균',
    searchVol: '8%',
    searchDir: 'up',
    competition: '0.26',
    status: '최적',
  },
  {
    ranking: 4,
    keyword: '마그네슘',
    searchVol: '3%',
    searchDir: 'up',
    competition: '0.02',
    status: '최저',
  },
  {
    ranking: 5,
    keyword: '알부민',
    searchVol: '25%',
    searchDir: 'up',
    competition: '0.07',
    status: '최적',
  },
  {
    ranking: 6,
    keyword: '비타민C',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.02',
    status: '최저',
  },
  {
    ranking: 7,
    keyword: '홍삼',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.06',
    status: '최적',
  },
  {
    ranking: 8,
    keyword: '뉴케어',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.26',
    status: '최적',
  },
  {
    ranking: 9,
    keyword: '코드로이친',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.06',
    status: '최적',
  },
  {
    ranking: 10,
    keyword: '카투트효소',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.26',
    status: '최적',
  },
]);

const selectedKeyword = ref([]);
const keywordOptions = [
  { id: 'kw-1', label: '프로바이오틱스', value: 'probiotics', selected: true },
  { id: 'kw-2', label: '루테인', value: 'lutein', selected: false },
  { id: 'kw-3', label: '오메가3', value: 'omega3', selected: false },
  { id: 'kw-4', label: '밀크시슬', value: 'milkthistle', selected: false },
  { id: 'kw-5', label: '마그네슘', value: 'magnesium', selected: false },
  { id: 'kw-6', label: '비타민D', value: 'vitamind', selected: false },
  { id: 'kw-7', label: '비오틴', value: 'biotin', selected: false },
  { id: 'kw-8', label: '영양제', value: 'supplement', selected: false },
  { id: 'kw-9', label: '비타민C', value: 'vitaminc', selected: false },
];
</script>
