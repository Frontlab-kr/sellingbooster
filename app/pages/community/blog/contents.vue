<template>
  <div class="sb-blog-contents">
    <div class="sb-blog-contents-head">
      <h5>이전 발행 컨텐츠</h5>
      <div class="sb-blog-contents-head__button">
        <div class="sb-swiper-controls">
          <Button
            rounded
            severity="neutral"
            :disabled="isBeginning"
            @click="swiper.prev()"
          >
            <template #icon>
              <IconArrowLeft class="ico-arrow-left" />
            </template>
          </Button>
          <Button
            rounded
            severity="neutral"
            :disabled="isEnd"
            @click="swiper.next()"
          >
            <template #icon>
              <IconArrowRight class="ico-arrow-right" />
            </template>
          </Button>
        </div>
      </div>
    </div>
    <div class="sb-blog-contents-list">
      <ClientOnly>
        <swiper-container
          ref="containerRef"
          :slides-per-view="swiperParams.slidesPerView"
          :space-between="swiperParams.spaceBetween"
          :breakpoints="JSON.stringify(swiperParams.breakpoints)"
          @swiperactiveindexchange="onSlideChange"
        >
          <swiper-slide v-for="item in blogItems" :key="item.id">
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
                  class="sb-info--small"
                />
              </div>
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SbInfo from '@/pages/community/components/SbInfo.vue';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

const containerRef = ref(null);
const isBeginning = ref(true); // 시작 상태 (초기값 true)
const isEnd = ref(false); // 끝 상태

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
  },
};

const swiper = useSwiper(containerRef, swiperParams);

// 슬라이드가 바뀔 때마다 실행되어 상태를 업데이트하는 함수
const onSlideChange = () => {
  // swiper.instance가 Ref라면 .value로 접근해야 합니다.
  const swiperInst = swiper.instance.value;

  if (swiperInst) {
    isBeginning.value = (swiperInst as any).isBeginning;
    isEnd.value = (swiperInst as any).isEnd;
  }
};

onMounted(() => {
  // 초기 렌더링 시 상태 체크
  setTimeout(() => {
    onSlideChange();
  }, 100); // Swiper 초기화 시간을 벌어주기 위해 약간의 지연을 둡니다.
});

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
