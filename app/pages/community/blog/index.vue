<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>블로그</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-blog">
      <div class="sb-blog-head">
        <div class="sb-blog-head-title">
          <h4>지금 구독하기 하고, 셀러한테 필요한 정보 꼭 확인하세요!</h4>
        </div>
        <div class="sb-blog-head-swiper">
          <ClientOnly>
            <swiper-container
              ref="containerRef"
              :slides-per-view="swiperParams.slidesPerView"
              :space-between="swiperParams.spaceBetween"
              :breakpoints="JSON.stringify(swiperParams.breakpoints)"
              @swiperactiveindexchange="onSlideChange"
            >
              <swiper-slide v-for="item in blogItems" :key="item.id">
                <NuxtLink to="/" class="sb-blog-head-swiper-item"> 1 </NuxtLink>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
      <div class="sb-community-menu">
        <div class="sb-tab">
          <Button label="전체(132)" variant="text" class="active" />
          <Button label="셀링트렌드" variant="text" />
          <Button label="지식" variant="text" />
          <Button label="이용사례" variant="text" />
          <Button label="뉴스룸" variant="text" />
        </div>
        <SbInput
          v-model="searchKeyword"
          show-search
          @search="onSearch"
          placeholder="블로그 검색"
        />
      </div>

      <div class="sb-blog-sort">
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
      <div class="sb-blog-list">
        <Item
          v-for="(item, index) in list"
          :key="index"
          :item="item"
          :search-text="searchKeyword"
        />
      </div>
      <SbPaginator />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Item from './item.vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';

const searchKeyword = ref('');

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '블로그' },
]);

//swiper
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
  },
};

//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '댓글 수' },
  { name: '좋아요 수' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

// list
const list = [
  {
    id: 1,
    badges: [
      { value: 'NEW', severity: 'warn' },
      { value: '셀링트렌드', severity: 'success' },
    ],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다.<br>초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    text: '광고를 하지 않으면 매출이 안 나온다고 생각하기 쉽습니다. 하지만 초보 셀러일수록 광고보다 중요한 것이 있습니다. 바로 ‘클릭을 부르는 요소’입니다. 썸네일에서 시선을 끌지 못하면 어떤 광고도 의미가 없...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 2,
    badges: [
      { value: 'NEW', severity: 'warn' },
      { value: '셀링트렌드', severity: 'success' },
    ],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '초보 셀러라면 첫 달에 방향을 잘 잡아야 합니다<br>매출 차이를 만드는 반드시 해야 할 5가지 체크리스트',
    text: '처음 셀러를 시작하면 무엇부터 해야 할지 막막합니다. 하지만 첫 달에 어떤 방향을 잡느냐에 따라 이후 매출 흐름이 크게 달라집니다. 첫째, 상품 선정에 너무 많은 시간을 쓰지 마세요. 완벽한 상품보다 빠르게 테스트 가능한...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 3,
    badges: [{ value: '지식', severity: 'secondary' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '이건 무조건 팔릴 줄 알았는데 결과는 정반대였습니다<br>실패한 상품에서 반드시 배워야 할 공통된 이유',
    text: '많은 셀러들이 ‘이건 무조건 팔린다’고 생각하며 상품을 들여옵니다. 하지만 시장은 예상보다 훨씬 냉정합니다....',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 4,
    badges: [{ value: '이용사례', severity: 'neutral' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '반복되는 문의에 지치고 있다면 꼭 정리해야 합니다<br>셀러 운영 효율을 높이는 CS 응대 템플릿 구성 방법',
    text: '셀러 운영에서 가장 지치는 부분은 CS입니다. 같은 질문에 반복적으로 답변하는 것도 큰 부담입니다. 이럴 때는 자주 오는 문의를 정리해 응대 템플릿을 만들어두는 것이 좋습니다. 예를 들어...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 5,
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '리뷰가 없어서 안 팔린다고 생각하고 있다면 틀렸습니다<br>구매를 유도하는 리뷰 구조 만드는 방법',
    text: '리뷰가 없으면 불리한 것은 맞습니다. 하지만 단순히 개수만 늘린다고 해결되지는 않습니다. 중요한 것은 ‘내용’입니다. 사진이 포함된 리뷰, 구체적인 사용 경험이 담긴 리뷰가 훨씬 효과적입니다. 초반에는 지인...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 6,
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '요즘 잘 팔리는 상품은 예전과 완전히 달라졌습니다<br>지금 기준으로 반드시 알아야 할 소비 트렌드 변화',
    text: '최근 소비 트렌드는 빠르게 변하고 있습니다. 예전처럼 단순히 저렴한 상품만으로는 경쟁하기 어렵습니다.',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 7,
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '열심히 했는데도 매출이 안 나오는 이유가 있습니다<br>대부분 셀러가 놓치고 있는 핵심 문제 3가지',
    text: '많은 셀러들이 ‘열심히 하면 된다’고 생각합니다. 하지만 방향이 틀리면 노력은 결과로 이어지지 않습니다. 첫 번째 문제는 타겟이 불명확한 상품입니다. 누구를 위한 상품인지 명확하지 않으면 누구...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 8,
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '잘되는 셀러들은 감이 아니라 데이터를 보고 움직입니다<br>매출을 바꾸는 기본 데이터 보는 방법 정리',
    text: '많은 초보 셀러들이 숫자를 어려워합니다. 하지만 데이터는 가장 솔직한 피드백입니다. 가장 먼저 봐야 할 것은 방문자 수입니다. 유입이 없다면 어떤 개선도 의미가 없습니다. 그 다음은 전환율입니다. 방문 대비 구매가 적다면 상세페이지를 의심해야 합니다....',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 9,
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '상품은 괜찮은데 왜 내 것만 안 팔릴까요<br>경쟁 셀러와 차이가 나는 결정적인 포인트',
    text: '같은 상품인데도 매출 차이는 크게 납니다. 그 차이는 디테일에서 발생합니다. 첫 번째는 썸네일입니다. 고객은 가장 먼저 ‘클릭할지 말지’를 결정합니다. 두 번째는 신뢰 요소입니다. 리뷰, 평점...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
  {
    id: 10,
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    date: '2026.02.14',
    imgSrc: 'https://picsum.photos/200/300',
    title:
      '초반에 매출을 빠르게 만들고 싶다면 이렇게 시작해야 합니다<br>시간 낭비 줄이는 현실적인 셀러 운영 전략',
    text: '처음부터 완벽하게 준비하려고 하면 시작이 늦어집니다. 빠르게 시작하고 빠르게 수정하는 것이 더 중요합니다. 처음에는 상품 수를 늘리기보다 테스트에 집중하는 것이 좋습니다. 반응이 오는 상품에 집...',
    viewCount: '12,325',
    readTime: '12분 분량',
  },
];
</script>
