<template>
  <div class="sb-company">
    <div class="sb-company-keyvisual">
      <div class="sb-company-keyvisual__title">
        <h1 class="sb-gsap" ref="companyKeyvisualTextLeft">
          데이터로 연결된 세상
        </h1>
        <div
          class="sb-company-keyvisual__video sb-gsap"
          ref="companyKeyvisualVideo"
        >
          <video autoplay loop muted playsinline>
            <source
              src="./../../../assets/images/company/keyvisual.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <h1 class="sb-gsap" ref="companyKeyvisualTextRight">무한한 가능성</h1>
      </div>
      <div class="sb-company-keyvisual__background">
        <keyvisualCircle />
      </div>
    </div>
    <div class="sb-company-text">
      <div class="sb-company-text__title sb-gsap" ref="companyTextTile">
        <LogoHecto />
      </div>
      <div class="sb-company-text__contents">
        <h4 class="sb-gsap" ref="companyTextText01">
          <strong
            >데이터로 시장을 읽고,<br class="mo" />
            기술로 매출을 성장</strong
          >시킵니다.
        </h4>
        <h4 class="sb-gsap" ref="companyTextText02">
          헥토데이터가 셀링부스터로<br class="mo" />
          당신의 비즈니스 한계를 넓힙니다.
        </h4>
      </div>
    </div>
    <div class="sb-company-introduce">
      <div class="sb-company-introduce-about">
        <div
          class="sb-company-introduce-about__title sb-gsap"
          ref="companyAboutTitle"
        >
          <h6>A b o u t</h6>
        </div>
        <div
          class="sb-company-introduce-about__contents sb-gsap"
          ref="companyAboutContents"
        >
          <h5>
            <span>
              헥토데이터는 데이터와 IT 기술력을 기반으로 <br />
              셀러와 브랜드의 성공적인 글로벌 비즈니스 성장을<br class="mo" />
              지원하는 Growth-Tech 컴퍼니입니다.<br />
            </span>
            <span>
              고객의 매출 증대를 최우선 가치로 삼아,<br class="mo" />
              셀링부스터를 통해 이커머스 시장의 <br />
              새로운 기회를 제공합니다.
            </span>
          </h5>
        </div>
      </div>
      <div class="sb-company-introduce-whatwedo">
        <div
          class="sb-company-introduce-whatwedo__title sb-gsap"
          ref="companyWhatwedoTitle"
        >
          <h6>W h a t &nbsp;w e &nbsp;d o</h6>
        </div>
        <div
          class="sb-company-introduce-whatwedo__contents sb-gsap"
          ref="companyWhatwedoContents"
        >
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
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <img
                        src="./../../../assets/images/company/introduce01.png"
                        alt=""
                        class="ico01"
                      />
                    </div>
                    <h4>데이터 연결</h4>
                    <p>
                      고객 행동과 시장 흐름을 분석하여 정확한 인사이트를
                      도출합니다.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 1 }"
                    @mouseenter.stop="setActive(1)"
                  >
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <img
                        src="./../../../assets/images/company/introduce02.png"
                        alt=""
                        class="ico02"
                      />
                    </div>
                    <h4>기술혁신</h4>
                    <p>
                      스크래핑 및 AI 기술로 운영 부담은 줄이고 비즈니스 효율은
                      극대화합니다.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 2 }"
                    @mouseenter.stop="setActive(2)"
                  >
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <img
                        src="./../../../assets/images/company/introduce03.png"
                        alt=""
                        class="ico03"
                      />
                    </div>
                    <h4>매출증대</h4>
                    <p>맞춤형 전략으로 셀러의 성공과 매출 증대를 실현합니다.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    class="sb-company-introduce-whatwedo-list-item"
                    :class="{ active: activeIndex === 3 }"
                    @mouseenter.stop="setActive(3)"
                  >
                    <div class="sb-company-introduce-whatwedo-list-item__icon">
                      <img
                        src="./../../../assets/images/company/introduce04.png"
                        alt=""
                        class="ico04"
                      />
                    </div>
                    <h4>글로벌 연결</h4>
                    <p>
                      고객 행동과 시장 흐름을 분석하여 정확한 인사이트를
                      도출합니다.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
          <div class="sb-company-introduce-whatwedo-button">
            <div class="sb-swiper-controls">
              <Button
                rounded
                severity="neutral"
                class="sb-swiper-controls__prev"
              >
                <template #icon>
                  <IconArrowLeft class="ico-arrow-left" />
                </template>
              </Button>
              <Button
                rounded
                severity="neutral"
                class="sb-swiper-controls__next"
              >
                <template #icon>
                  <IconArrowRight class="ico-arrow-right" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sb-company-foot">
      <div class="sb-company-foot__video sb-gsap" ref="companyFootVideo">
        <video autoplay loop muted playsinline>
          <source
            src="./../../../assets/images/company/doughnut.mov"
            type='video/quicktime; codecs="hvc1"'
          />

          <source
            src="./../../../assets/images/company/doughnut.webm"
            type="video/webm"
          />
        </video>
      </div>
      <div class="sb-company-foot__contents">
        <h4 class="sb-gsap" ref="companyFootText">
          셀링부스터를 통해 이커머스 시장의<br />
          새로운 기회를 잡아보세요.
        </h4>
        <div class="sb-gsap" ref="companyFootButton">
          <NuxtLink to="/">
            <Button size="large" label="핵토데이터 바로가기" />
          </NuxtLink>
        </div>
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
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import keyvisualCircle from '@/assets/images/company/keyvisual-circle.svg';
import LogoHecto from '@/assets/images/company/logo-hecto.svg';
import footLine from '@/assets/images/company/foot-line.svg';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

const modules = [Autoplay, Navigation, EffectFade];

//introduce
const swiperOptions = {
  loop: true,
  autoHeight: true,
  breakpoints: {
    1440: {
      enabled: false,
      loop: false, // PC에서는 복제본 생성 방지
    },
  },
  navigation: {
    prevEl: '.sb-swiper-controls__prev',
    nextEl: '.sb-swiper-controls__next',
  },
};
const activeIndex = ref(0);
const setActive = (index) => {
  activeIndex.value = index;
};

//animation
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const companyKeyvisualTextLeft = ref(null);
const companyKeyvisualTextRight = ref(null);
const companyKeyvisualVideo = ref(null);
const companyTextTile = ref(null);
const companyTextText01 = ref(null);
const companyTextText02 = ref(null);
const companyAboutTitle = ref(null);
const companyAboutContents = ref(null);
const companyWhatwedoTitle = ref(null);
const companyWhatwedoContents = ref(null);
const companyFootVideo = ref(null);
const companyFootText = ref(null);
const companyFootButton = ref(null);

onMounted(() => {
  // --- A. Lenis 초기화 ---
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // --- B. [핵심] Lenis와 ScrollTrigger 연결 ---
  // 이 코드가 있어야 Lenis 스크롤에 맞춰 GSAP 애니메이션이 정확히 동작합니다.
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // --- C. 실제 애니메이션 코드 ---
  const companyKeyvisualCircle = document.querySelectorAll(
    '.sb-company-keyvisual__background svg path',
  );

  gsap.fromTo(
    companyKeyvisualCircle,
    {
      opacity: 0,
      scale: 0.9,
      transformOrigin: 'center center',
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      stagger: {
        each: 0.2,
        //repeat: -1,
        //yoyo: true,
      },
      yoyo: true,
      repeat: -1,
      repeatDelay: 0,
    },
  );

  gsap.fromTo(
    companyKeyvisualTextLeft.value,
    { x: -40, opacity: 0 },
    {
      x: 1,
      opacity: 1,
      duration: 4,
      delay: 0.6,
      ease: 'power2.out',
    },
  );

  gsap.fromTo(
    companyKeyvisualVideo.value,
    { x: -20, opacity: 0 },
    {
      x: 1,
      opacity: 1,
      duration: 1,
      delay: 1.6,
      ease: 'power2.out',
    },
  );

  gsap.fromTo(
    companyKeyvisualTextRight.value,
    { x: -40, opacity: 0 },
    {
      x: 1,
      opacity: 1,
      duration: 1,
      delay: 2.6,
      ease: 'power2.out',
    },
  );

  gsap.fromTo(
    companyTextTile.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyTextTile.value,
        start: 'top 100%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );
  gsap.fromTo(
    companyTextText01.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyTextText01.value,
        start: 'top 100%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );
  gsap.fromTo(
    companyTextText02.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyTextText02.value,
        start: 'top 100%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    companyAboutTitle.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyAboutTitle.value,
        start: 'top 100%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );
  gsap.fromTo(
    companyAboutContents.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyAboutContents.value,
        start: 'top 100%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    companyWhatwedoTitle.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyWhatwedoTitle.value,
        start: 'top 100%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );
  gsap.fromTo(
    companyWhatwedoContents.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyWhatwedoContents.value,
        start: 'top 100%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    companyFootVideo.value,
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyFootVideo.value,
        start: 'top 50%',
        end: 'top 0%',
        pin: true,
        scrub: 1,
        // markers: true,
      },
    },
  );
  gsap.fromTo(
    companyFootText.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyFootText.value,
        start: 'top 100%',
        end: 'top 80%',
        scrub: 1,
      },
    },
  );
  gsap.fromTo(
    companyFootButton.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companyFootButton.value,
        start: 'top 100%',
        end: 'top 80%',
        scrub: 1,
      },
    },
  );

  const companyFootLine = document.querySelectorAll(
    '.sb-company-foot__line svg path',
  );

  companyFootLine.forEach((path, i) => {
    // 각 path마다 서로 다른 속도와 지연시간을 부여
    gsap.to(path, {
      x: -80, // 왼쪽으로 이동할 거리 (SVG 크기에 맞춰 조절)
      duration: 10 + i * 5, // 0번 path는 10초, 1번은 15초... 서로 다른 속도
      repeat: -1, // 무한 반복
      yoyo: true, // 갔다가 다시 돌아오게 (끊김 없는 흐름을 위해)
      ease: 'sine.inOut', // 부드러운 유동적인 움직임
      delay: i * 0.5, // 시작 시점에 차이를 두어 겹치지 않게 함
    });
  });

  // gsap.to(companyFootLine, {
  //   // 왼쪽으로 약간씩 이동하면서 위아래로도 미세하게 움직임
  //   x: -100,
  //   y: 20,
  //   duration: 8,
  //   // stagger를 객체로 활용해 각 path마다 다르게 적용
  //   stagger: {
  //     each: 0.5,
  //     repeat: -1,
  //     yoyo: true,
  //   },
  //   ease: 'power1.inOut',
  // });

  onUnmounted(() => {
    lenis.destroy();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  });
});
</script>
