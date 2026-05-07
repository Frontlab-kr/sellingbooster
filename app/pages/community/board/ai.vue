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
      >
        <SwiperSlide>
          <p>클릭 후 자유로운 이야기를 남겨보세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>일상과 고민을 함께 나눠보세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>클릭 후 자유롭게 이야기해보세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>클릭 후 이야기 공유하기</p>
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
</script>
