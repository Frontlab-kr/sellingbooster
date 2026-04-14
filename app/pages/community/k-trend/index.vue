<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>K-trend</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-ktrend">
      <div class="sb-ktrend-head">
        <div class="sb-ktrend-head-swiper">
          <div class="sb-ktrend-head-swiper__contents">
            <ClientOnly>
              <swiper-container
                ref="containerRef"
                :slides-per-view="swiperParams.slidesPerView"
                :space-between="swiperParams.spaceBetween"
                :effect="swiperParams.effect"
                :breakpoints="JSON.stringify(swiperParams.breakpoints)"
                autoplay-delay="3000"
                autoplay-disable-on-interaction="false"
                loop="true"
                @swiperactiveindexchange="onSlideChange"
              >
                <swiper-slide>
                  <NuxtLink to="/" class="sb-ktrend-head-swiper-item">
                    <div class="sb-ktrend-head-swiper-item__thumb">
                      <img src="./../../../assets/images/blog.png" alt="" />
                    </div>
                    <h4>
                      초보 셀러가 많이 하는 5가지 실수 잊지 말고 이 블로그글을
                      읽고 실수를 미리 방지하세요 최대 2줄까지 노출해주세요초보
                      셀러가 많이 하는 5가지 실수 잊지 말고 이 블로그글을 읽고
                      실수를 미리 방지하세요 최대 2줄까지 노출해주세요
                    </h4>
                  </NuxtLink>
                </swiper-slide>
                <swiper-slide>
                  <NuxtLink to="/" class="sb-ktrend-head-swiper-item">
                    <div class="sb-ktrend-head-swiper-item__thumb">
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
          <div class="sb-ktrend-head-swiper__button">
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
      </div>
      <div class="sb-ktrend-contents">
        <div class="grid">
          <div class="col-12">
            <div class="sb-ktrend-list">
              <div class="sb-ktrend-list-head">
                <div class="sb-ktrend-list-head-tab" v-scroll-end>
                  <div class="sb-ktrend-list-head-tab-scroll">
                    <div class="sb-tab">
                      <Button
                        label="건강기능식품"
                        variant="text"
                        class="active"
                      />
                      <Button label="이너뷰티" variant="text" />
                      <Button label="코스메틱" variant="text" />
                      <Button label="패션" variant="text" />
                      <Button label="펫" variant="text" />
                      <Button label="유아" variant="text" />
                    </div>
                  </div>
                </div>
                <div class="sb-ktrend-list-head-menu">
                  <div class="sb-ktrend-list-head-menu-chip" v-scroll-end>
                    <div class="sb-ktrend-list-head-menu-chip-scroll">
                      <div class="sb-chip">
                        <div class="sb-chip__title">관련 키워드</div>
                        <div class="sb-chip-list">
                          <NuxtLink
                            to="/"
                            v-for="item in keywordOptions"
                            :key="item.value"
                          >
                            <Chip :label="item.label" size="large" />
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sb-ktrend-list-head-menu-sort">
                    <Select
                      ref="selectRef"
                      v-model="selectedSort"
                      :options="selectedSortOption"
                      optionLabel="name"
                      size="small"
                      class="p-select-text"
                      panelClass="p-select-overlay--text"
                      :pt="{
                        overlay: {
                          onclick: (event) => {
                            if (event.target === event.currentTarget) {
                              selectRef.hide();
                            }
                          },
                        },
                      }"
                    />
                  </div>
                </div>
              </div>
              <div class="sb-ktrend-list-grid" v-scroll-end>
                <div class="sb-ktrend-list-grid-scroll">
                  <NuxtLink
                    to="/"
                    class="sb-ktrend-list-item"
                    v-for="item in ktrendList"
                    :key="item.id"
                  >
                    <div class="sb-ktrend-list-item-head">
                      <div class="sb-ktrend-list-item-head__badge">
                        <Badge
                          :value="item.category"
                          :severity="item.severity"
                        ></Badge>
                      </div>
                      <div class="sb-ktrend-list-item-head__date">
                        {{ item.date }}
                      </div>
                    </div>

                    <div class="sb-ktrend-list-item-contents">
                      <div class="sb-ktrend-list-item-contents__thumb">
                        <img :src="item.thumbnail" :alt="item.title" />
                      </div>
                      <div class="sb-ktrend-list-item-contents__text">
                        <h6>{{ item.title }}</h6>
                        <p>{{ item.description }}</p>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-ktrend-keyword">
              <div class="sb-ktrend-keyword-head">
                <h5>K-Culture 키워드</h5>
              </div>
              <div class="sb-ktrend-keyword-chip" v-scroll-end>
                <div class="sb-ktrend-keyword-chip-scroll">
                  <div class="sb-chip">
                    <div class="sb-radio">
                      <div
                        class="sb-radio-item"
                        v-for="item in keywordKCultureOptions"
                        :key="item.value"
                      >
                        <RadioButton
                          v-model="selectedKeywordKCulture"
                          :inputId="item.id"
                          :value="item.value"
                        />
                        <label :for="item.id">{{ item.label }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sb-ktrend-keyword-list">
                <div class="sb-tag">
                  <NuxtLink
                    v-for="(tag, index) in tags"
                    :key="index"
                    to="/"
                    :class="[
                      'sb-tag-item',
                      `sb-tag-item-${tag.type}`,
                      { 'sb-tag-item-outlined': tag.outlined },
                    ]"
                    @mouseenter="openPopover($event)"
                    @mouseleave="closePopover"
                  >
                    {{ tag.label }}
                  </NuxtLink>
                </div>
                <Popover
                  ref="popoverTag"
                  class="sb-popover-tag"
                  :dismissable="true"
                  :pt="{
                    root: { class: 'sb-popover-tag' },
                  }"
                  @mouseenter="cancelClose"
                  @mouseleave="closePopover"
                >
                  <div class="sb-popover-tag-head">
                    <div class="sb-popover-tag-head__title">
                      <IconSystemAi class="ico-system-ai" />
                      K-글로우
                    </div>
                    <p>광고 문구 또는 상품 소개에 활용하세요.</p>
                  </div>
                  <div class="sb-popover-tag-list">
                    <div class="sb-popover-tag-list-item">
                      <p>
                        K-글로우는 단순히 화장품으로 만든 인위적인 광택이
                        아니라, "속부터 건강하게 차오르는 맑고 투명한 피부
                        상태"를 의미합니다. 2026년의 K-글로우는 피부 장벽의
                        건강함과 충분한 수분감이 만들어 내는 자연스러운
                        광채(Bloom Skin)에 집중합니다.
                      </p>
                      <Button variant="text">
                        <template #icon>
                          <IconSystemCopy
                            class="ico-system-copy"
                            @click="showToast"
                          />
                        </template>
                      </Button>
                    </div>
                  </div>
                </Popover>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-ktrend-ranking">
              <div class="sb-ktrend-ranking-head">
                <h5>K-Trend 키워드 랭킹</h5>
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </div>
              <DataTable
                v-scroll-end
                :value="rankingList"
                responsiveLayout="scroll"
                removableSort
                scrollable
                class="sb-ktrend-datatable"
              >
                <Column
                  field="ranking"
                  header="랭킹"
                  style="width: 80px"
                  class="sb-table-pc"
                >
                  <template #body="slotProps">
                    {{ slotProps.data.ranking }}
                  </template>
                </Column>

                <Column field="keyword" header="키워드" style="width: 300px">
                  <template #body="slotProps">
                    {{ slotProps.data.keyword }}
                  </template>
                </Column>

                <Column
                  field="searchVol"
                  header="검색량"
                  headerClass="justify-content-end"
                  bodyClass="text-right"
                  style="width: 100px"
                >
                  <template #body="slotProps">
                    <div
                      class="sb-table-body-ranking"
                      :class="{
                        'text-up': slotProps.data.searchDir === 'up',
                        'text-down': slotProps.data.searchDir === 'down',
                      }"
                    >
                      <IconArrowSmallUp
                        class="ico-arrow-small-up text-up"
                        v-if="slotProps.data.searchDir === 'up'"
                      />
                      <IconArrowSmallDown
                        class="ico-arrow-small-down text-down"
                        v-else
                      />
                      <strong class="sb-table-body-ranking__value">{{
                        slotProps.data.searchVol
                      }}</strong>
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
                    <div class="sb-table-body-badge">
                      <span>{{ slotProps.data.competition }}</span>
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
              <h5>KSnapp</h5>
              <span>정보 출처 K-snapp</span>
            </div>
            <div class="sb-ktrend-ksnapp-list" v-scroll-end>
              <div class="sb-ktrend-ksnapp-list-scroll">
                <NuxtLink
                  to="/"
                  class="sb-ktrend-ksnapp-list-item"
                  v-for="item in ksnappItems"
                  :key="item.rank"
                >
                  <div class="sb-ktrend-ksnapp-list-item__thumb">
                    <Badge
                      :value="item.rank"
                      size="small"
                      class="p-badge-circle"
                      :severity="item.rank > 3 ? 'contrast' : undefined"
                    ></Badge>
                    <img :src="item.thumbnail" :alt="item.title" />
                  </div>

                  <div class="sb-ktrend-ksnapp-list-item__text">
                    <IconSystemUp
                      v-if="item.trend === 'up'"
                      class="ico-system-up"
                    />
                    <IconSystemDown v-else class="ico-system-down" />

                    <h6>{{ item.title }}</h6>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="sb-ktrend-trend">
            <div class="sb-ktrend-trend-head">
              <h5>Selling Trend</h5>
              <div class="sb-ktrend-trend-head__menu">
                <span>해당 컨텐츠는 셀링부스터가 편집하고 발행했습니다.</span>
                <Button variant="text" severity="white">
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

  <Toast position="bottom-center" group="bc" />
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import SbInfo from '@/pages/community/components/SbInfo.vue';
import IconSystemAi from '@/assets/icons/system/ai.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';
import IconArrowSmallUp from '@/assets/icons/arrow/small-up.svg?component';
import IconArrowSmallDown from '@/assets/icons/arrow/small-down.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemUp from '@/assets/icons/system/up.svg?component';
import IconSystemDown from '@/assets/icons/system/down.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import { useToast } from 'primevue/usetoast';

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

//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '전체(235개)' },
  { name: 'NEWS' },
  { name: 'Blog' },
  { name: 'Cafe' },
  { name: 'TikTok' },
  { name: 'YouTube' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

//data
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
  {
    ranking: 10,
    keyword: '카투트효소',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.26',
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

const tags = [
  { label: '이너뷰티-테크', type: 'contrast' },
  { label: '괄사 마사지', type: 'primary', outlined: true },
  { label: 'PDRN', type: 'primary' },
  { label: '블룸스킨', type: 'success' },
  { label: '지성 피부', type: 'primary' },
  { label: '윤광', type: 'info' },
  { label: '투명 피부', type: 'primary' },
  { label: '진정 케어', type: 'secondary' },
  { label: '반짝', type: 'secondary', outlined: true },
  { label: '장벽 강화', type: 'success' },
  { label: '클린', type: 'secondary' },
  { label: '클린', type: 'success' },
  { label: '꾸안꾸 피부', type: 'info' },
  { label: '윤기', type: 'info', outlined: true },
  { label: '생얼 메이크업', type: 'contrast' },
  { label: '케어 스킨케어', type: 'primary' },
  { label: '물', type: 'contrast' },
  { label: '촉촉한', type: 'secondary', outlined: true },
  { label: '내추럴', type: 'contrast' },
  { label: '쫀쫀한 피부', type: 'primary' },
  { label: '데일리 메이크업', type: 'secondary' },
  { label: '투명 메이크업', type: 'success' },
  { label: '회복', type: 'primary' },
  { label: '꾸안꾸', type: 'secondary' },
  { label: '수분', type: 'info' },
  { label: '건강한 광', type: 'success' },
  { label: '유행 메이크업', type: 'primary', outlined: true },
  { label: '수분', type: 'info' },
];

const ksnappItems = [
  {
    rank: 1,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title:
      '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템',
  },
  {
    rank: 2,
    trend: 'down',
    thumbnail: 'https://picsum.photos/200/300',
    title: "안효섭, 올화이트 '수트핏' 눈길 ·· 고급미 물씬",
  },
  {
    rank: 3,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 4,
    trend: 'down',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 5,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 6,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 7,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 8,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
];

const ktrendList = [
  {
    id: 1,
    category: 'NEWS',
    severity: 'warn',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/1/200/300',
    title: '글로벌 이커머스 시장 진출을 위한 필수 전략 가이드',
    description:
      '본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는 말줄임표로 마무리 처리합니다. 해외 시장 조사부터 물류 최적화까지 한 번에 확인하세요. 성공적인 글로벌 셀러가 되기 위한 첫걸음을 지금 시작해보세요.본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는 말줄임표로 마무리 처리합니다. 해외 시장 조사부터 물류 최적화까지 한 번에 확인하세요. 성공적인 글로벌 셀러가 되기 위한 첫걸음을 지금 시작해보세요.본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는 말줄임표로 마무리 처리합니다. 해외 시장 조사부터 물류 최적화까지 한 번에 확인하세요. 성공적인 글로벌 셀러가 되기 위한 첫걸음을 지금 시작해보세요.본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는 말줄임표로 마무리 처리합니다. 해외 시장 조사부터 물류 최적화까지 한 번에 확인하세요. 성공적인 글로벌 셀러가 되기 위한 첫걸음을 지금 시작해보세요.',
  },
  {
    id: 2,
    category: 'Blog',
    severity: 'success',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/2/200/300',
    title: '성공적인 브랜딩을 위한 폰트 선택 노하우 10가지',
    description:
      '디자인의 완성은 폰트라고 해도 과언이 아닙니다. 브랜드의 아이덴티티를 가장 잘 나타낼 수 있는 폰트를 고르는 방법과 가독성을 높이는 레이아웃 설계법을 상세히 공유합니다.',
  },
  {
    id: 3,
    category: 'Cafe',
    severity: 'secondary',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/3/200/300',
    title: '초보 셀러들이 가장 많이 묻는 질문(Q&A) 모음집',
    description:
      '본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리합니다. 정산 주기부터 고객 응대 CS 템플릿까지 커뮤니티에서 가장 반응이 좋았던 질문들만 엄선했습니다.',
  },
  {
    id: 4,
    category: 'TikTok',
    severity: 'contrast',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/4/200/300',
    title: '15초 안에 시청자를 사로잡는 숏폼 영상 편집 기술',
    description:
      '짧지만 강렬한 인상을 남겨야 하는 숏폼 마케팅의 핵심 전략! 시각적 요소를 극대화하고 시청 시간을 늘릴 수 있는 자막 활용법과 배경음악 선정 팁을 소개합니다.',
  },
  {
    id: 5,
    category: 'YouTube',
    severity: 'danger',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/5/200/300',
    title: '2026년 상반기 소비 트렌드 분석: 무엇이 팔리는가?',
    description:
      '데이터로 보는 최신 소비 성향 보고서입니다. 1인 가구의 증가와 가치 소비 트렌드가 이커머스 시장에 미치는 영향력을 심도 있게 분석하여 다음 시즌 주력 상품군을 제안합니다.',
  },
  {
    id: 6,
    category: 'NEWS',
    severity: 'warn',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/6/200/300',
    title: '신규 가입 셀러를 위한 수수료 감면 혜택 안내',
    description:
      '새롭게 시작하는 파트너사를 위해 준비한 파격적인 지원 정책! 첫 3개월간 판매 수수료 0원 혜택과 함께 무료 광고 쿠폰을 지원받아 초기 매출을 빠르게 확보해보세요.',
  },
  {
    id: 7,
    category: 'Cafe',
    severity: 'secondary',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/7/200/300',
    title: '효율적인 재고 관리를 위한 엑셀 템플릿 무료 나눔',
    description:
      '수동으로 관리하기 힘들었던 재고 현황, 이제 이 템플릿 하나로 해결하세요. 입고와 출고 수량을 자동으로 계산해주어 품절 사태를 미연에 방지할 수 있습니다.',
  },
  {
    id: 8,
    category: 'TikTok',
    severity: 'contrast',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/8/200/300',
    title: '바이럴 영상 제작을 위한 스마트폰 촬영 꿀팁',
    description:
      '비싼 장비 없이도 고퀄리티 영상을 만들 수 있습니다. 자연광 활용법부터 흔들림 없는 핸드헬드 촬영 기법까지, 지금 바로 적용 가능한 실전 노하우를 공개합니다.',
  },
  {
    id: 9,
    category: 'YouTube',
    severity: 'danger',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/5/200/300',
    title: '2026년 상반기 소비 트렌드 분석: 무엇이 팔리는가?',
    description:
      '데이터로 보는 최신 소비 성향 보고서입니다. 1인 가구의 증가와 가치 소비 트렌드가 이커머스 시장에 미치는 영향력을 심도 있게 분석하여 다음 시즌 주력 상품군을 제안합니다.',
  },
  {
    id: 10,
    category: 'NEWS',
    severity: 'warn',
    date: '2026.02.14',
    thumbnail: 'https://picsum.photos/id/6/200/300',
    title: '신규 가입 셀러를 위한 수수료 감면 혜택 안내',
    description:
      '새롭게 시작하는 파트너사를 위해 준비한 파격적인 지원 정책! 첫 3개월간 판매 수수료 0원 혜택과 함께 무료 광고 쿠폰을 지원받아 초기 매출을 빠르게 확보해보세요.',
  },
];

//chip
const selectedKeyword = ref([]);
const keywordOptions = [
  {
    id: 'selectedKeyword-1',
    label: '프로바이오틱스',
    value: 'probiotics',
    selected: true,
  },
  {
    id: 'selectedKeyword-2',
    label: '루테인',
    value: 'lutein',
    selected: false,
  },
  {
    id: 'selectedKeyword-3',
    label: '오메가3',
    value: 'omega3',
    selected: false,
  },
  {
    id: 'selectedKeyword-4',
    label: '밀크시슬',
    value: 'milkthistle',
    selected: false,
  },
  {
    id: 'selectedKeyword-5',
    label: '마그네슘',
    value: 'magnesium',
    selected: false,
  },
  {
    id: 'selectedKeyword-6',
    label: '비타민D',
    value: 'vitamind',
    selected: false,
  },
  {
    id: 'selectedKeyword-7',
    label: '비오틴',
    value: 'biotin',
    selected: false,
  },
  {
    id: 'selectedKeyword-8',
    label: '영양제',
    value: 'supplement',
    selected: false,
  },
  {
    id: 'selectedKeyword-9',
    label: '비타민C',
    value: 'vitaminc',
    selected: false,
  },
];

const selectedKeywordKCulture = ref([]);
const keywordKCultureOptions = [
  {
    id: 'selectedKeywordKCulture-1',
    label: '프로바이오틱스',
    value: 'probiotics',
    selected: true,
  },
  {
    id: 'selectedKeywordKCulture-2',
    label: '루테인',
    value: 'lutein',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-3',
    label: '오메가3',
    value: 'omega3',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-4',
    label: '밀크시슬',
    value: 'milkthistle',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-5',
    label: '마그네슘',
    value: 'magnesium',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-6',
    label: '비타민D',
    value: 'vitamind',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-7',
    label: '비오틴',
    value: 'biotin',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-8',
    label: '영양제',
    value: 'supplement',
    selected: false,
  },
  {
    id: 'selectedKeywordKCulture-9',
    label: '비타민C',
    value: 'vitaminc',
    selected: false,
  },
];

//popover
const popoverTag = ref();
let closeTimeout = null;

const openPopover = async (event) => {
  // 1. 기존 예약된 닫기(지연 닫기)가 있다면 무조건 취소
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }

  // 2. 중요: 이미 열려 있다면 "즉시" 닫아서 상태를 초기화합니다.
  // 이 과정이 있어야 태그 간 이동 시 팝오버가 잔상처럼 남지 않습니다.
  if (popoverTag.value?.visible) {
    popoverTag.value.hide();
  }

  // 3. 브라우저가 hide를 인지하고 난 뒤(다음 프레임) 새 타겟에 보여줍니다.
  // setTimeout 0 또는 nextTick을 사용합니다.
  const target = event.currentTarget;
  setTimeout(() => {
    popoverTag.value?.show(event, target);
  }, 0);
};

const closePopover = () => {
  // 태그를 벗어났을 때 0.1초 뒤에 닫기 (팝오버로 진입할 시간 확보)
  closeTimeout = setTimeout(() => {
    if (popoverTag.value) {
      popoverTag.value.hide();
    }
  }, 100);
};

const cancelClose = () => {
  // 팝오버 내부 진입 시 닫기 예약 취소
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

//toast
const toast = useToast();

const showToast = () => {
  toast.add({
    detail: '추천 상품명이 복사 되었습니다. 이용하실 곳에 붙여넣기 하세요.',
    group: 'bc',
    life: 3000,
  });
};
</script>
