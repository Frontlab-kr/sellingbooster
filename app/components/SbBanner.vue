<template>
  <ClientOnly>
    <div class="sb-banner">
      <Swiper
        :effect="'fade'"
        :loop="true"
        :pagination="{
          type: 'fraction',
          clickable: true,
        }"
        :modules="modules"
      >
        <SwiperSlide>
          <NuxtLink to="/">
            <div class="pc">
              <img src="/temp/banner.png" alt="" />
            </div>
            <div class="mo">
              <img src="/temp/banner-mo01.png" alt="" />
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/">
            <div class="pc">
              <img src="/temp/banner02.png" alt="" />
            </div>
            <div class="mo">
              <img src="/temp/banner-mo02.png" alt="" />
            </div>
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
