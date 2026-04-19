<template>
  <ClientOnly>
    <div class="sb-gate-search-keyword">
      <Swiper
        :direction="'vertical'"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        :modules="modules"
      >
        <SwiperSlide v-for="n in 5" :key="n">
          <NuxtLink to="/" class="sb-gate-search-keyword-item">
            <strong>{{ n }}</strong>
            <span>글루타치온</span>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const modules = [Autoplay];
</script>
