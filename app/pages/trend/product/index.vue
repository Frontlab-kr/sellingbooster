<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>상품 분석</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>성공적인 판매 전략을 위한 데이터 기반 상품 분석의 시작</h4>
        <div class="sb-trend-search-form">
          <div class="sb-trend-search-form-item">
            <SbInput
              show-search
              @search="onSearch"
              placeholder="https://smartstore.naver.com/으로 시작하는 전체 URL을 입력해주세요"
              size="large"
            />
          </div>
        </div>
      </div>
      <div class="sb-trend-product">
        <div class="sb-trend-product-info-text">
          <p>네이버 쇼핑 기준 데이터 입니다.</p>
        </div>
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              분석 가능한 월 횟수<span><strong>2</strong>/3</span>
            </h5>
          </div>
          <div
            class="sb-trend-table-head__popover"
            @mouseenter="togglePopover"
            @mouseleave="togglePopover"
          >
            <IconSystemInformationCircle
              class="ico-system-information-circle"
            />
          </div>
        </div>
        <div class="sb-trend-product-list">
          <div
            v-for="item in analysisProducts"
            :key="item.id"
            class="sb-trend-product-list-item"
          >
            <div class="sb-trend-product-list-item__favorite">
              <Button variant="text" @click="toggleFavorite(item)">
                <template #icon>
                  <IconActionFavoriteFull
                    v-if="item.isFavorite"
                    class="ico-action-favorite-full"
                  />
                  <IconActionFavorite v-else class="ico-action-favorite" />
                </template>
              </Button>
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span><span>네이버쇼핑</span>
              </div>
              <h6>{{ item.title }}</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span v-for="cat in item.category" :key="cat">{{ cat }}</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong :class="item.scoreClass"
                >{{ item.scoreText }} {{ item.score }}점</strong
              >
              <p>{{ item.date }}</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-trend-product">
        <div class="sb-trend-product-info-text">
          <p>네이버 쇼핑 기준 데이터 입니다.</p>
        </div>
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              나의 관심 상품<span><strong>5</strong>/5</span>
            </h5>
          </div>
          <div
            class="sb-trend-table-head__popover"
            @mouseenter="togglePopover"
            @mouseleave="togglePopover"
          >
            <IconSystemInformationCircle
              class="ico-system-information-circle"
            />
          </div>
        </div>
        <div class="sb-trend-product-list">
          <div
            v-for="item in favoriteProducts"
            :key="item.id"
            class="sb-trend-product-list-item"
          >
            <div class="sb-trend-product-list-item__favorite">
              <Button variant="text" @click="toggleFavorite(item)">
                <template #icon>
                  <IconActionFavoriteFull
                    v-if="item.isFavorite"
                    class="ico-action-favorite-full"
                  />
                  <IconActionFavorite v-else class="ico-action-favorite" />
                </template>
              </Button>
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span><span>네이버쇼핑</span>
              </div>
              <h6>{{ item.title }}</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span v-for="cat in item.category" :key="cat">{{ cat }}</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong :class="item.scoreClass"
                >{{ item.scoreText }} {{ item.score }}점</strong
              >
              <p>{{ item.date }}</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Popover
        ref="popoverScore"
        :pt="{
          root: {
            class: 'p-popover-flipped sb-popover-score',
          },
        }"
      >
        <SbLegend />
      </Popover>
      <SbBanner />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '상품 분석' },
]);

const analysisProducts = ref([
  {
    id: 'a1',
    isFavorite: false,
    title:
      '무드등 LED 수유등 수면등 미니조명 인테리어조명무드등 LED 수유등 수면등 미니조명 인테리어조명무드등 LED 수유등 수면등 미니조명 인테리어조명무드등 LED 수유등 수면등 미니조명 인테리어조명무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 60,
    scoreText: '보통',
    scoreClass: 'text-info',
    date: '2026.02.01',
  },
  {
    id: 'a2',
    isFavorite: true,
    title: '무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 36,
    scoreText: '낮음',
    scoreClass: 'text-warn',
    date: '2026.02.01',
  },
]);

// 나의 관심 상품 리스트 데이터
const favoriteProducts = ref([
  {
    id: 'f1',
    isFavorite: true,
    title: '무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 83,
    scoreText: '최고',
    scoreClass: 'text-success',
    date: '2026.02.01',
  },
  {
    id: 'f2',
    isFavorite: true,
    title: '무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 61,
    scoreText: '보통',
    scoreClass: 'text-info',
    date: '2026.02.01',
  },
  {
    id: 'f3',
    isFavorite: true,
    title: '무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 18,
    scoreText: '최저',
    scoreClass: 'text-danger',
    date: '2026.02.01',
  },
  {
    id: 'f4',
    isFavorite: false,
    title: '무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 36,
    scoreText: '낮음',
    scoreClass: 'text-warn',
    date: '2026.02.01',
  },
  {
    id: 'f5',
    isFavorite: false,
    title: '무드등 LED 수유등 수면등 미니조명 인테리어조명',
    category: ['가구/인테리어', '인테리어 소품', '조명', '인테리어 조명'],
    score: 52,
    scoreText: '좋음',
    scoreClass: 'text-secondary',
    date: '2026.02.01',
  },
]);

// 토글 함수
const toggleFavorite = (item) => {
  item.isFavorite = !item.isFavorite;
};

//popover
const popoverScore = ref();
const togglePopover = (event) => {
  if (event.type === 'mouseenter') {
    popoverScore.value.show(event);
  } else {
    popoverScore.value.hide();
  }
};
</script>
