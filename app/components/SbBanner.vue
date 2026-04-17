<template>
  <div class="sb-banner">
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :slides-per-view="swiperParams.slidesPerView"
        :space-between="swiperParams.spaceBetween"
        :breakpoints="JSON.stringify(swiperParams.breakpoints)"
        :loop="swiperParams.loop"
        :effect="swiperParams.effect"
        :autoplay="swiperParams.autoplay"
        @swiperslidechange="onSlideChange"
      >
        <swiper-slide class="swiper-slide">
          <NuxtLink to="/">
            <img src="/temp/banner.png" alt="" />
          </NuxtLink>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <NuxtLink to="/">
            <img src="/temp/banner.png" alt="" />
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <div class="sb-banner-pagination">
      <strong>{{ currentSlide }}</strong>
      <span>/</span>
      <span>{{ totalSlides }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// refs
const containerRef = ref<HTMLElement | null>(null);
const currentSlide = ref(1); // 표시용 (1부터 시작)
const totalSlides = ref(2); // 슬라이드 총 개수

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1800: {
      slidesPerView: 1,
    },
  },
};

// useSwiper 훅 (기존에 사용 중인 것 유지)
const swiper = useSwiper(containerRef, swiperParams);

const onSlideChange = (e: any) => {
  const swiperInst =
    swiper.instance.value || e?.target?.swiper || e?.detail?.[0];

  if (swiperInst) {
    // loop 모드에서는 realIndex를 사용해야 실제 슬라이드 번호가 나옴
    const realIdx = swiperInst.realIndex ?? 0;
    currentSlide.value = realIdx + 1;
  }
};

onMounted(() => {
  // Swiper 초기화 후 약간의 지연을 주고 업데이트
  setTimeout(() => {
    onSlideChange(null);
  }, 150);
});
</script>
