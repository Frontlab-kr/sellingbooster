<template>
  <div class="sb-dashboard-head">
    <div class="sb-dashboard-head-title">
      <h4>반가워요 셀링부스터님</h4>
      <h3>시작 전 체크해 볼까요?</h3>
    </div>

    <div class="sb-dashboard-head-swiper">
      <div class="sb-dashboard-head-swiper-inner">
        <ClientOnly>
          <Swiper
            :slidesPerView="3"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }"
            :spaceBetween="8"
            :breakpoints="{
              0: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                loop: true,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 8,
                loop: false,
              },
              1801: {
                slidesPerView: 3,
                spaceBetween: 8,
                loop: false,
              },
            }"
            :navigation="{
              nextEl: '.sb-swiper-controls__next',
            }"
            :modules="modules"
          >
            <SwiperSlide v-for="n in 10" :key="n">
              <div class="sb-dashboard-head-swiper-item">
                <div class="sb-dashboard-head-swiper-item__text">
                  <strong>
                    네이버스토어 유입량
                    <span class="text-primary">20% 부족</span>
                  </strong>
                  <p>상품명 점검을 통해 검색 노출을 높여보세요.</p>
                </div>
                <div class="sb-dashboard-head-swiper-item__time">6시간 전</div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="pc"></SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
      <div class="sb-swiper-controls">
        <Button rounded severity="neutral" class="sb-swiper-controls__next">
          <template #icon>
            <IconArrowRight class="ico-arrow-right" />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';

//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const modules = [Autoplay, Navigation];
</script>
