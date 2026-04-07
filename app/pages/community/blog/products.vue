<template>
  <div class="sb-blog-products">
    <div class="sb-blog-products-head">
      <h5>관련 상품</h5>
      <div class="sb-blog-products-head__button">
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
    <div class="sb-blog-products-list">
      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :slides-per-view="swiperParams.slidesPerView"
          :space-between="swiperParams.spaceBetween"
          :breakpoints="JSON.stringify(swiperParams.breakpoints)"
          @swiperactiveindexchange="onSlideChange"
        >
          <swiper-slide v-for="n in 3">
            <div class="sb-trend-top-list">
              <NuxtLink
                v-for="item in categoryTop30"
                :key="item.rank"
                to="/"
                class="sb-trend-top-list-item"
              >
                <div class="sb-trend-top-list-item__thumb">
                  <img :src="item.imgSrc" :alt="item.title" />
                </div>
                <div class="sb-trend-top-list-item__contents">
                  <div class="sb-trend-top-list-item__category">
                    <span>{{ item.brand }}</span>
                    <span>{{ item.mall }}</span>
                  </div>
                  <div class="sb-trend-top-list-item__title">
                    {{ item.title }}
                  </div>
                  <div class="sb-trend-top-list-item__price">
                    {{ item.price.toLocaleString() }}원
                  </div>
                </div>
              </NuxtLink>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SbInfo from '@/pages/community/components/SbInfo.vue';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

const containerRef = ref(null);
const isBeginning = ref(true); // 시작 상태 (초기값 true)
const isEnd = ref(false); // 끝 상태

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
};

const swiper = useSwiper(containerRef, swiperParams);

// 슬라이드가 바뀔 때마다 실행되어 상태를 업데이트하는 함수
const onSlideChange = () => {
  // swiper.instance가 Ref라면 .value로 접근해야 합니다.
  const swiperInst = swiper.instance.value;

  if (swiperInst) {
    isBeginning.value = (swiperInst as any).isBeginning;
    isEnd.value = (swiperInst as any).isEnd;
  }
};

onMounted(() => {
  // 초기 렌더링 시 상태 체크
  setTimeout(() => {
    onSlideChange();
  }, 100); // Swiper 초기화 시간을 벌어주기 위해 약간의 지연을 둡니다.
});

const categoryTop30 = ref([
  {
    rank: 1,
    imgSrc: '/temp/top1.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 H2.0 플로우스테이트 텀블러',
    price: 28000,
  },
  {
    rank: 2,
    imgSrc: '/temp/top2.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 프로듀어 플립 스트로 텀블러 887ml 크림',
    price: 22580,
  },
  {
    rank: 3,
    imgSrc: '/temp/top3.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title:
      '락앤락 텀블러 손잡이 스텐 텀블러 메트로 머그 475ml 보온 보냉 컵 커피 티',
    price: 23200,
  },
  {
    rank: 4,
    imgSrc: '/temp/top4.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 퀜처 플로우 스테이트 텀블러 H2.0',
    price: 38630,
  },
  {
    rank: 5,
    imgSrc: '/temp/top5.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 바이탈라이즈 쉐이커 텀블러 591ml + 컨테이너 103ml 세트',
    price: 57660,
  },
  {
    rank: 6,
    imgSrc: '/temp/top6.png',
    brand: '보아르',
    mall: '네이버쇼핑',
    title: '보아르 투웨이 대용량 손잡이 스텐 보온 보냉 텀블러...',
    price: 22700,
  },
]);
</script>
