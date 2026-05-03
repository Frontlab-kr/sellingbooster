<template>
  <ClientOnly>
    <Swiper
      :modules="modules"
      :effect="'coverflow'"
      :coverflow-effect="{
        rotate: 0,
        stretch: 540 /* 기본값 */,
        depth: 240,
        modifier: 1,
        slideShadows: false,
      }"
      :breakpoints="swiperBreakpoints"
      :slides-per-view="1"
      :centered-slides="true"
      :loop-additional-slides="1"
      :loop="true"
      :autoplay="{
        delay: 4000,
      }"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
      @autoplay-time-left="onAutoplayTimeLeft"
    >
      <SwiperSlide>
        <div class="sb-gate-swiper-item">
          <h4>
            셀링부스터와 함께<br />
            더 빠르게! 성장하는 셀러가 되세요.
          </h4>
          <p>판매 기회 발견부터 매출 관리까지 셀러의 성장을 지원합니다.</p>

          <div class="sb-gate-swiper-item__button">
            <NuxtLink to="/">
              <Button severity="primary" label="무료로 시작하기" />
            </NuxtLink>
          </div>
          <img src="./../../assets/images/gate/swiper-img01.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="sb-gate-swiper-item">
          <h4>
            단일 마켓을 넘어<br />
            멀티 채널로 확장하라
          </h4>
          <p>
            스마트스토어, 쿠팡, 자사몰을 동시에<br />
            효울적으로 운영하는 통합 관리 노하우
          </p>

          <div class="sb-gate-swiper-item__button">
            <NuxtLink to="/">
              <Button severity="primary" label="보러가기" />
            </NuxtLink>
          </div>
          <img src="./../../assets/images/gate/swiper-img02.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="sb-gate-swiper-item">
          <h4>
            월 매출 50만원에서<br />
            5,000만원 만든 노하우 공개!
          </h4>
          <p>
            리빙 소품 샵 “달빚가게” 정대표님의<br />
            현실적인 노하우를 공개합니다.
          </p>

          <div class="sb-gate-swiper-item__button">
            <NuxtLink to="/">
              <Button severity="primary" label="보러가기" />
            </NuxtLink>
          </div>
          <img src="./../../assets/images/gate/swiper-img03.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="sb-gate-swiper-item">
          <h4>
            투잡으로 시작해서<br />
            전업 셀러로 독립하기까지
          </h4>
          <p>
            평범한 직장인이였으나<br />
            브랜드를 런칭하고 자립 할 수 있었던 솔직한 여정담
          </p>

          <div class="sb-gate-swiper-item__button">
            <NuxtLink to="/">
              <Button severity="primary" label="보러가기" />
            </NuxtLink>
          </div>
          <img src="./../../assets/images/gate/swiper-img04.png" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="sb-gate-swiper-item">
          <h4>
            다가오는 가정의 달 시즌,<br />
            미리 준비하는 품절 대란 아이템
          </h4>
          <p>다양한 카테고리별 키워드 분석으로 다가오는 5월 미리 예측</p>

          <div class="sb-gate-swiper-item__button">
            <NuxtLink to="/">
              <Button severity="primary" label="보러가기" />
            </NuxtLink>
          </div>
          <img src="./../../assets/images/gate/swiper-img05.png" />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="sb-gate-swiper-controls">
      <div class="sb-gate-swiper-controls__progress">
        <span :style="{ width: progressWidth + '%' }"></span>
      </div>
      <Button variant="text" class="sb-gate-swiper-controls__prev">
        <template #icon>
          <IconArrowAchevronLeft class="ico-arrow-achevron-left" />
        </template>
      </Button>
      <div class="sb-gate-swiper-controls__pagination">
        <div class="sb-gate-swiper-controls__pagination-inner">1</div>
      </div>
      <Button variant="text" class="sb-gate-swiper-controls__next">
        <template #icon>
          <IconArrowAchevronRight class="ico-arrow-achevron-right" />
        </template>
      </Button>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

const modules = [Autoplay, Navigation, Pagination, EffectCoverflow];

const navigationConfig = {
  prevEl: '.sb-gate-swiper .sb-gate-swiper-controls__prev',
  nextEl: '.sb-gate-swiper .sb-gate-swiper-controls__next',
};

//progress
const progressWidth = ref(0);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressWidth.value = (1 - progress) * 100;
};
const paginationConfig = {
  el: '.sb-gate-swiper .pc .sb-gate-swiper-controls__pagination-inner',
  type: 'fraction',
  formatFractionCurrent: (number) => `${number}`.slice(-2), // 01, 02 형태로 포맷팅
  formatFractionTotal: (number) => `${number}`.slice(-2),
};

const swiperBreakpoints = {
  // 1440: 기준점(1920)보다 약 25% 작음
  1440: {
    coverflowEffect: { stretch: 140, depth: 240 },
  },
  1540: {
    coverflowEffect: { stretch: 240, depth: 240 },
  },
  1640: {
    coverflowEffect: { stretch: 340, depth: 240 },
  },
  1740: {
    coverflowEffect: { stretch: 440, depth: 240 },
  },
  // 1920: 요청하신 기준점
  1840: {
    coverflowEffect: { stretch: 540, depth: 240 },
  },
  // 2134: 기준점보다 약 11% 증가
  2130: {
    coverflowEffect: { stretch: 740, depth: 240 },
  },
  // 2400: QHD급 진입
  2380: {
    coverflowEffect: { stretch: 1000, depth: 240 },
  },
  // 2560: QHD 표준
  2540: {
    coverflowEffect: { stretch: 1160, depth: 240 },
  },
  // 2880: 5K급 혹은 고해상도 모니터
  2860: {
    coverflowEffect: { stretch: 1480, depth: 240 },
  },
  // 3840: 4K UHD
  3820: {
    coverflowEffect: { stretch: 2440, depth: 240 },
  },
};
</script>
