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
          <p>클릭 후 궁금한 내용을 남겨주세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>클릭 후 질문을 작성해보세요.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>질문 남기고 고민 해결하기</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>궁금한 건 언제든 물어보세요.</p>
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
