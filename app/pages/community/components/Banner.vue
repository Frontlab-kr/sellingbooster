<template>
  <ClientOnly>
    <div class="sb-community-swiper">
      <Swiper
        :effect="'fade'"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        :navigation="{
          prevEl: '.sb-swiper-controls__prev',
          nextEl: '.sb-swiper-controls__next',
        }"
        :modules="modules"
      >
        <SwiperSlide>
          <NuxtLink to="/" class="sb-community-swiper-item">
            <div class="sb-community-swiper-item__thumb">
              <img src="./../../../assets/images/blog.png" alt="" />
            </div>
            <h4>
              초보 셀러가 많이 하는 5가지 실수 제목은<br />
              최대 2줄까지 노출해주세요
            </h4>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/" class="sb-community-swiper-item">
            <div class="sb-community-swiper-item__thumb">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <h4>
              초보 셀러가 많이 하는 5가지 실수 제목은<br />
              최대 2줄까지 노출해주세요
            </h4>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
      <div class="sb-community-swiper__button">
        <div class="sb-swiper-controls">
          <Button rounded severity="neutral" class="sb-swiper-controls__prev">
            <template #icon>
              <IconArrowLeft class="ico-arrow-left" />
            </template>
          </Button>
          <Button rounded severity="neutral" class="sb-swiper-controls__next">
            <template #icon>
              <IconArrowRight class="ico-arrow-right" />
            </template>
          </Button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

const modules = [Autoplay, Navigation, EffectFade];
</script>
