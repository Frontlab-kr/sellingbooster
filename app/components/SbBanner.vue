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
            <div class="sb-banner-item">
              <div class="sb-banner-item__title">
                <h4>
                  <span class="text-primary">셀링부스터</span>와 함께 더
                  빠르게!<br class="mo" />
                  성장하는 셀러가 되세요.
                </h4>
                <h5>
                  판매 기회 발견부터 매출 관리까지 셀러의 성장을 지원합니다.
                </h5>
              </div>
              <div
                class="sb-banner-item__background"
                style="background-color: #efefef"
              >
                <img
                  src="./../assets/images/banner/banner01-pc.png"
                  alt=""
                  class="pc"
                />
                <img
                  src="./../assets/images/banner/banner01-mo.png"
                  alt=""
                  class="mo"
                />
              </div>
            </div>
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink to="/">
            <div class="sb-banner-item">
              <div class="sb-banner-item__title">
                <h4>트렌디한 셀러의 기준</h4>
                <h5>지금 시작하세요</h5>
              </div>
              <div
                class="sb-banner-item__background"
                style="background-color: #e0f2fd"
              >
                <img
                  src="./../assets/images/banner/banner02-pc.png"
                  alt=""
                  class="pc"
                />
                <img
                  src="./../assets/images/banner/banner02-mo.png"
                  alt=""
                  class="mo"
                />
              </div>
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
