<template>
  <div class="sb-blog-products">
    <div class="sb-blog-products-head">
      <h5>관련 상품</h5>
      <div class="sb-blog-products-head__button">
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
    <div class="sb-blog-products-list">
      <ClientOnly>
        <Swiper
          :spaceBetween="10"
          :loop="true"
          :navigation="{
            prevEl: '.sb-blog-products .sb-swiper-controls__prev',
            nextEl: '.sb-blog-products .sb-swiper-controls__next',
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="n in 3" :key="n">
            <div class="sb-trend-top-list">
              <div class="sb-trend-top-list-scroll">
                <NuxtLink
                  v-for="item in categoryTop30"
                  :key="item.rank"
                  to="/"
                  class="sb-trend-top-list-item"
                >
                  <div class="sb-trend-top-list-item__thumb">
                    <img :src="item.imgSrc" :alt="item.title" />
                  </div>
                  <div class="sb-trend-top-list-item__contents">
                    <div class="sb-trend-top-list-item__category">
                      <span>{{ item.brand }}</span>
                      <span>{{ item.mall }}</span>
                    </div>
                    <div class="sb-trend-top-list-item__title">
                      {{ item.title }}
                    </div>
                    <div class="sb-trend-top-list-item__price">
                      {{ item.price.toLocaleString() }}원
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const modules = [Autoplay, Navigation];

const categoryTop30 = ref([
  {
    rank: 1,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 H2.0 플로우스테이트 텀블러',
    price: 28000,
  },
  {
    rank: 2,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 프로듀어 플립 스트로 텀블러 887ml 크림',
    price: 22580,
  },
  {
    rank: 3,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title:
      '락앤락 텀블러 손잡이 스텐 텀블러 메트로 머그 475ml 보온 보냉 컵 커피 티',
    price: 23200,
  },
]);
</script>
