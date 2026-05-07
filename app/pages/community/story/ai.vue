<template>
  <ClientOnly>
    <div class="sb-ai__tooltip">
      <Swiper
        :direction="'vertical'"
        :effect="'fade'"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        :modules="modules"
        :initial-slide="randomStartIndex"
      >
        <SwiperSlide>
          <p>클릭 후 성장 경험을 공유해보세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>운영 노하우 공유하기</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>나만의 판매 경험을 공유해보세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>성장 과정을 기록하고, 나눠보세요.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const modules = [Autoplay, EffectFade];

const totalSlides = 4;
const randomStartIndex = Math.floor(Math.random() * totalSlides);
</script>
