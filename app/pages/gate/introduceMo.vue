<template>
  <ClientOnly>
    <Swiper
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 4000000,
      }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <div class="sb-gate-introduce-list">
          <NuxtLink to="/" class="sb-gate-introduce-list-item">
            <Badge value="마켓 트렌드" severity="secondary"></Badge>
            <h4>
              키워드와 시장 분석으로<br />
              <span class="text-primary">새로운 상품 기회</span>를 찾아냅니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img01.png" alt="" />
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-introduce-list-item">
            <Badge value="상품명 추천" severity="secondary"></Badge>
            <h4>
              <span class="text-primary">최적의 상품명을 제안</span>해 클릭률과
              스토어 유입을 효과적으로 높입니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img04.png" alt="" />
          </NuxtLink>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="sb-gate-introduce-list">
          <NuxtLink to="/" class="sb-gate-introduce-list-item">
            <Badge value="판매 가속" severity="secondary"></Badge>
            <h4>
              <span class="text-primary">가격, CS, 상품명까지 분석</span>을 통해
              <br />성과를 끌어올립니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img02.png" alt="" />
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-introduce-list-item">
            <Badge value="셀링 플래너" severity="secondary"></Badge>
            <h4>
              셀러의 일정 알림을 통해 다음을<br />
              <span class="text-primary">미리 준비</span> 할 수 있도록 돕습니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img05.png" alt="" />
          </NuxtLink>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="sb-gate-introduce-list">
          <NuxtLink to="/" class="sb-gate-introduce-list-item">
            <Badge value="성장 리포트" severity="secondary"></Badge>
            <h4>
              매출 데이터를 분석하고 <br />인사이트를
              <span class="text-primary">알기 쉽게 제공</span>합니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img03.png" alt="" />
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-introduce-list-item">
            <Badge value="K-트렌드" severity="secondary"></Badge>
            <h4>
              <span class="text-primary">최신 트렌드 분석</span>으로<br />
              적합한 아이템을 추천해드립니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img06.png" alt="" />
          </NuxtLink>
        </div>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Autoplay, Pagination];
</script>
