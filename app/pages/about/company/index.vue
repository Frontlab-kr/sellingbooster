<template>
  <div class="sb-company">
    <div class="sb-company-keyvisual">
      <div class="sb-company-keyvisual__title">
        <h1>데이터로 연결된 세상</h1>
        <div class="sb-company-keyvisual__video">
          <video autoplay loop muted playsinline>
            <source
              src="./../../../assets/images/company/keyvisual.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h1>무한한 가능성</h1>
      </div>
      <div class="sb-company-keyvisual__background">
        <keyvisualCircle />
      </div>
    </div>
    <div class="sb-company-text">
      <div class="sb-company-text__title">
        <LogoHecto />
      </div>
      <div class="sb-company-text__contents">
        <h4>
          <strong>데이터로 시장을 읽고, 기술로 매출을 성장</strong>시킵니다.
        </h4>
        <h4>헥토데이터가 셀링부스터로 당신의 비즈니스 한계를 넓힙니다.</h4>
      </div>
    </div>
    <div class="sb-company-introduce">
      <div class="sb-company-introduce-about">
        <div class="sb-company-introduce-about__title">
          <h6>A b o u t</h6>
        </div>
        <div class="sb-company-introduce-about__contents">
          <h5>
            헥토데이터는 데이터와 IT 기술력을 기반으로 <br />
            셀러와 브랜드의 성공적인 글로벌 비즈니스 성장을 지원하는 Growth-Tech
            컴퍼니입니다.<br />
            고객의 매출 증대를 최우선 가치로 삼아, 셀링부스터를 통해 이커머스
            시장의 <br />
            새로운 기회를 제공합니다.
          </h5>
        </div>
      </div>
      <div class="sb-company-introduce-whatwedo">
        <div class="sb-company-introduce-whatwedo__title">
          <h6>W h a t &nbsp;w e &nbsp;d o</h6>
        </div>
        <div class="sb-company-introduce-whatwedo__contents">
          <div class="sb-company-introduce-whatwedo-list">
            <ClientOnly>
              <Swiper
                :modules="modules"
                :effect="'fade'"
                :navigation="navigationConfig"
                v-bind="swiperOptions"
              >
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 0 }"
                    @mouseenter.stop="setActive(0)"
                  >
                    <h4>데이터 연결</h4>
                    <p>
                      고객 행동과 시장 흐름을 분석하여 정확한 인사이트를
                      도출합니다.
                    </p>
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <introduce01 />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 1 }"
                    @mouseenter.stop="setActive(1)"
                  >
                    <h4>기술혁신</h4>
                    <p>
                      스크래핑 및 AI 기술로 운영 부담은 줄이고 비즈니스 효율은
                      극대화합니다.
                    </p>
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <introduce02 />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 2 }"
                    @mouseenter.stop="setActive(2)"
                  >
                    <h4>매출증대</h4>
                    <p>맞춤형 전략으로 셀러의 성공과 매출 증대를 실현합니다.</p>
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <introduce03 />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 3 }"
                    @mouseenter.stop="setActive(3)"
                  >
                    <h4>글로벌 연결</h4>
                    <p>
                      고객 행동과 시장 흐름을 분석하여 정확한 인사이트를
                      도출합니다.
                    </p>
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <introduce04 />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <div class="sb-company-foot">
      <div class="sb-company-foot__video">
        <video autoplay loop muted playsinline>
          <source
            src="./../../../assets/images/company/doughnut.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="sb-company-foot__contents">
        <h4>
          셀링부스터를 통해 이커머스 시장의<br />
          새로운 기회를 잡아보세요.
        </h4>
        <NuxtLink to="">
          <Button size="large" label="핵토데이터 바로가기" />
        </NuxtLink>
      </div>
      <div class="sb-company-foot__line">
        <footLine />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  layoutClass: 'sb--company',
});
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import keyvisualCircle from '@/assets/images/company/keyvisual-circle.svg';
import LogoHecto from '@/assets/images/company/logo-hecto.svg';

import introduce01 from '@/assets/images/company/introduce01.svg';
import introduce02 from '@/assets/images/company/introduce02.svg';
import introduce03 from '@/assets/images/company/introduce03.svg';
import introduce04 from '@/assets/images/company/introduce04.svg';

import footLine from '@/assets/images/company/foot-line.svg';

const modules = [Autoplay, Navigation, EffectFade];

//introduce
const swiperOptions = {
  loop: true,
  breakpoints: {
    1025: {
      enabled: false,
      loop: false, // PC에서는 복제본 생성 방지
    },
  },
};

const activeIndex = ref(0);
const setActive = (index) => {
  activeIndex.value = index;
};
</script>
