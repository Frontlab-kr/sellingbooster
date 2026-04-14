<template>
  <div class="sb-dashboard">
    <div class="sb-dashboard-head">
      <div class="sb-dashboard-head-title">
        <h4>반가워요 셀링부스터님</h4>
        <h3>시작 전 체크해 볼까요?</h3>
      </div>
      <div class="sb-dashboard-head-swiper"></div>
      <div class="sb-dashboard-head-swiper">
        <div class="sb-dashboard-head-swiper-inner">
          <ClientOnly>
            <swiper-container
              ref="containerRef"
              :slides-per-view="swiperParams.slidesPerView"
              :space-between="swiperParams.spaceBetween"
              :breakpoints="JSON.stringify(swiperParams.breakpoints)"
              @swiperactiveindexchange="onSlideChange"
            >
              <swiper-slide class="swiper-slide">
                <div class="sb-dashboard-head-swiper-item">
                  <div class="sb-dashboard-head-swiper-item__text">
                    <strong>
                      현재 네이버스토어 유입량이 목표대비
                      <span class="text-primary">20% 부족</span>합니다.
                    </strong>
                    <p>상품명 점검을 통해 검색 노출을 높여보세요.</p>
                  </div>
                  <div class="sb-dashboard-head-swiper-item__time">
                    6시간 전
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide v-for="n in 10" :key="n" class="swiper-slide">
                <div class="sb-dashboard-head-swiper-item">
                  <div class="sb-dashboard-head-swiper-item__text">
                    <strong>
                      현재 네이버스토어 유입량이 목표대비
                      <span class="text-primary">20% 부족</span>합니다.
                    </strong>
                    <p>상품명 점검을 통해 검색 노출을 높여보세요.</p>
                    <Button variant="text">
                      <span class="p-button-label">상품명 점검 하기</span>
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </div>
                  <div class="sb-dashboard-head-swiper-item__time">
                    6시간 전
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide"></swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
        <div class="sb-swiper-controls">
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
    <div class="grid">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>오늘(2026.04.06)의 플래너 체크하세요.</h5>
            <div class="sb-dashboard-card-head-menu">
              <Button variant="text" severity="white">
                <template #icon>
                  <IconArrowUpRight class="ico-arrow-up-right" />
                </template>
              </Button>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body"></div>
        </div>
      </div>
      <div class="col-6">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>내 상품 키워드 TOP 10 분석</h5>
            <div class="sb-dashboard-card-head-menu">
              <Button variant="text" severity="white">
                <template #icon>
                  <IconArrowUpRight class="ico-arrow-up-right" />
                </template>
              </Button>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body"></div>
        </div>
      </div>
      <div class="col-6">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>판매 속도를 높이는 AI의 가격 제안</h5>
            <div class="sb-dashboard-card-head-menu">
              <Button variant="text" severity="white">
                <template #icon>
                  <IconArrowUpRight class="ico-arrow-up-right" />
                </template>
              </Button>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="5000"
              :price-initial-recommended="4900"
              :price-average="8000"
            >
              <template #badge>
                <Badge value="좋음" severity="secondary" />
              </template>
            </SbPriceSetting>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>내 상품 카테고리 급상승 키워드</h5>
            <div class="sb-dashboard-card-head-menu">
              <Button variant="text" severity="white">
                <template #icon>
                  <IconArrowUpRight class="ico-arrow-up-right" />
                </template>
              </Button>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//swiper
const containerRef = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const swiperParams = {
  slidesPerView: 4,
  spaceBetween: 8,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const swiper = useSwiper(containerRef, swiperParams);

const onSlideChange = () => {
  const swiperInst = swiper.instance.value;

  if (swiperInst) {
    isBeginning.value = (swiperInst as any).isBeginning;
    isEnd.value = (swiperInst as any).isEnd;
  }
};

onMounted(() => {
  setTimeout(() => {
    onSlideChange();
  }, 100);
});

//menu
const menuItems = ref([
  {
    label: '수정',
    icon: IconSystemEdit,
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);
</script>
