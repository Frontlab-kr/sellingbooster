<template>
  <div class="sb-blog-contents">
    <div class="sb-blog-contents-head">
      <h5>이전 발행 컨텐츠</h5>
      <div class="sb-blog-contents-head__button">
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
    <div class="sb-blog-contents-list">
      <ClientOnly>
        <Swiper
          :slidesPerView="2"
          :spaceBetween="80"
          :loop="true"
          :navigation="{
            prevEl: '.sb-blog-contents .sb-swiper-controls__prev',
            nextEl: '.sb-blog-contents .sb-swiper-controls__next',
          }"
          :breakpoints="{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
          }"
          :modules="modules"
        >
          <SwiperSlide v-for="item in blogItems" :key="item.id">
            <NuxtLink to="/" class="sb-blog-contents-list-item">
              <div class="sb-blog-contents-list-item__thumb">
                <img :src="item.thumbnailUrl" :alt="item.title" />
              </div>

              <div class="sb-blog-contents-list-item__contents">
                <div class="sb-blog-contents-list-item__info">
                  <div class="sb-blog-contents-list-item__badge">
                    <Badge
                      v-for="(badge, index) in item.badges"
                      :key="index"
                      v-bind="badge"
                      :label="badge.value"
                    />
                  </div>
                  <div class="sb-blog-contents-list-item__date">
                    {{ item.publishedDate }}
                  </div>
                </div>

                <div class="sb-blog-contents-list-item__title">
                  {{ item.title }}
                </div>

                <SbInfo
                  :visible-buttons="['view', 'read']"
                  :view-count="item.views"
                  :read-time="item.readingTime"
                />
              </div>
            </NuxtLink>
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

const blogItems = [
  {
    id: 1,
    thumbnailUrl: 'https://picsum.photos/200/300',
    badges: [
      { value: 'NEW', severity: 'warn' },
      { value: '셀링트렌드', severity: 'success' },
    ],
    publishedDate: '2026.02.14',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리 광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리 광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    views: 12325,
    readingTime: '12분 분량',
  },
  {
    id: 2,
    thumbnailUrl: 'https://picsum.photos/200/300',
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    publishedDate: '2026.02.14',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    views: 12325,
    readingTime: '12분 분량',
  },
  {
    id: 1,
    thumbnailUrl: 'https://picsum.photos/200/300',
    badges: [
      { value: 'NEW', severity: 'warn' },
      { value: '셀링트렌드', severity: 'success' },
    ],
    publishedDate: '2026.02.14',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리 광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리 광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    views: 12325,
    readingTime: '12분 분량',
  },
  {
    id: 2,
    thumbnailUrl: 'https://picsum.photos/200/300',
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    publishedDate: '2026.02.14',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    views: 12325,
    readingTime: '12분 분량',
  },
  {
    id: 1,
    thumbnailUrl: 'https://picsum.photos/200/300',
    badges: [
      { value: 'NEW', severity: 'warn' },
      { value: '셀링트렌드', severity: 'success' },
    ],
    publishedDate: '2026.02.14',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리 광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리 광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    views: 12325,
    readingTime: '12분 분량',
  },
  {
    id: 2,
    thumbnailUrl: 'https://picsum.photos/200/300',
    badges: [{ value: '셀링트렌드', severity: 'success' }],
    publishedDate: '2026.02.14',
    title:
      '광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보 셀러가 먼저 잡아야 할 핵심 구조 정리',
    views: 12325,
    readingTime: '12분 분량',
  },
];
</script>
