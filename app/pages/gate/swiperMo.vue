<template>
  <ClientOnly>
    <Swiper
      :modules="modules"
      :effect="'fade'"
      :loop="true"
      :autoplay="{
        delay: 4000,
      }"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
      @autoplay-time-left="onAutoplayTimeLeft"
    >
      <SwiperSlide>
        <NuxtLink to="/" class="sb-gate-swiper-item">
          <h4>
            셀링부스터와 함께<br />
            더 빠르게!<br />
            성장하는 셀러가 되세요.
          </h4>
          <p>
            판매 기회 발견부터 매출 관리까지<br />
            셀러의 성장을 지원합니다.
          </p>
          <img src="./../../assets/images/gate/swiper-mo-img01.png" />
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink to="/" class="sb-gate-swiper-item">
          <h4>
            단일 마켓을 넘어<br />
            멀티 채널로 확장하라
          </h4>
          <p>
            스마트스토어, 쿠팡, 자사몰을 동시에<br />
            효울적으로 운영하는 통합 관리 노하우
          </p>
          <img src="./../../assets/images/gate/swiper-mo-img02.png" />
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink to="/" class="sb-gate-swiper-item">
          <h4>
            월 매출 50만원에서<br />
            5,000만원 만든<br />
            노하우 공개!
          </h4>
          <p>
            리빙 소품 샵 “달빚가게” 정대표님의<br />
            현실적인 노하우를 공개합니다.
          </p>
          <img src="./../../assets/images/gate/swiper-mo-img03.png" />
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink to="/" class="sb-gate-swiper-item">
          <h4>
            투잡으로 시작해서<br />
            전업 셀러로 독립하기까지
          </h4>
          <p>
            평범한 직장인이였으나<br />
            브랜드를 런칭하고 자립 할 수 있었던<br />
            솔직한 여정담
          </p>
          <img src="./../../assets/images/gate/swiper-mo-img04.png" />
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide>
        <NuxtLink to="/" class="sb-gate-swiper-item">
          <h4>
            다가오는 가정의 달 시즌,<br />
            미리 준비하는<br />
            품절 대란 아이템
          </h4>
          <p>
            다양한 카테고리별 키워드 분석으로<br />
            다가오는 5월 미리 예측
          </p>
          <img src="./../../assets/images/gate/swiper-mo-img05.png" />
        </NuxtLink>
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
        <div class="sb-gate-swiper-controls__pagination-inner"></div>
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
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

const modules = [Autoplay, Navigation, Pagination, EffectFade];

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
  el: '.sb-gate-swiper .mo .sb-gate-swiper-controls__pagination-inner',
  type: 'fraction',
  formatFractionCurrent: (number) => `${number}`.slice(-2), // 01, 02 형태로 포맷팅
  formatFractionTotal: (number) => `${number}`.slice(-2),
};
</script>
