<template>
  <ClientOnly>
    <div class="sb-banner">
      <Swiper
        :effect="'fade'"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        :pagination="{
          type: 'fraction',
          clickable: true,
        }"
        :modules="modules"
      >
        <SwiperSlide v-for="n in 3" :key="n">
          <NuxtLink to="/">
            <img src="/temp/banner02.png" alt="" />
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Pagination, EffectFade } from 'swiper/modules';

const modules = [Autoplay, Pagination, EffectFade];
</script>
