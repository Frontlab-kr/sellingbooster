<template>
  <SbMobileInfo />
  <div class="sb-report">
    <div class="sb-report-head">
      <div class="sb-report-head__title">
        <h5>성과 분석</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-report-contents">
      <div class="sb-report-contents-head">
        <h4>
          지금 내 매출 상태를 한눈에 보고,<br />
          목표까지 가는 “다음 한 걸음”을 바로 알려드릴게요.
        </h4>
      </div>
      <div class="sb-report-analyze">
        <div class="sb-report-analyze-swiper">
          <div class="sb-report-analyze-swiper-inner">
            <swiper-container
              ref="containerRef"
              :slides-per-view="swiperParams.slidesPerView"
              :space-between="swiperParams.spaceBetween"
              :effect="swiperParams.effect"
              :breakpoints="JSON.stringify(swiperParams.breakpoints)"
              @swiperactiveindexchange="onSlideChange"
            >
              <swiper-slide v-for="n in 10" :key="n" class="swiper-slide">
                <div class="sb-report-analyze-swiper-item">
                  <div class="sb-report-analyze-swiper-item__text">
                    <strong>
                      현재 네이버스토어 유입량이 목표대비
                      <span class="text-primary">20% 부족</span>합니다.
                    </strong>
                    <p>상품명 점검을 통해 검색 노출을 높여보세요.</p>
                  </div>
                  <div class="sb-report-analyze-swiper-item__time">
                    6시간 전
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="swiper-slide"></swiper-slide>
            </swiper-container>
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
        <div class="sb-report-analyze-grid">
          <div class="grid">
            <div class="col-8">
              <div class="sb-report-analyze-record">
                <div class="sb-report-analyze-record-head">
                  <h5>현재 매출 기록</h5>
                </div>
                <div class="sb-report-analyze-record-chart">
                  <div class="sb-report-analyze-record-chart-chart">
                    <SbChartGaugeCircle />
                  </div>
                  <div class="sb-report-analyze-record-chart-contents">
                    <div class="sb-report-analyze-record-chart-contents__price">
                      <dl>
                        <dt>이번달 누적 매출액</dt>
                        <dd>
                          <h4>12,680,760원</h4>
                        </dd>
                      </dl>
                      <dl>
                        <dt>예상 마진</dt>
                        <dd>
                          <h4>45%</h4>
                        </dd>
                        <dd>
                          <h4>5,706,342원</h4>
                        </dd>
                      </dl>
                    </div>
                    <div
                      class="sb-report-analyze-record-chart-contents__expect"
                    >
                      <dl>
                        <dt>현재 흐름에 따른 도달 예측</dt>
                        <dd>
                          <p>
                            <IconSystemCheckS class="ico-system-check-s" />
                            매출 :
                            <strong class="text-up">14,580,860원</strong>예상
                          </p>
                          <p>
                            <IconSystemCheckS class="ico-system-check-s" />
                            목표 대비 : <strong class="text-up">5%</strong>초과
                            달성
                          </p>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="sb-report-analyze-record-button">
                  <Button
                    severity="primary"
                    label="셀러 기능 확장 하기"
                    size="large"
                  />
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="sb-report-analyze-schedule">
                <div class="sb-report-analyze-schedule-head">
                  <h5>금주의 중요한 일정, 놓치지 말고 챙기세요~</h5>
                </div>
                <div class="sb-report-analyze-schedule-body" v-scroll-end>
                  <AppTimeline />
                </div>
                <div class="sb-report-analyze-schedule-button">
                  <Button severity="contrast" outlined label="전체 일정 보기" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-report-analyze-check">
          <div class="sb-report-analyze-check-head">
            <h5>셀링부스터 점검</h5>
          </div>
          <div class="sb-report-analyze-check-list">
            <div class="sb-report-analyze-check-list-item">
              <div class="sb-report-analyze-check-list-item__text">
                <h6>
                  마지막 상품명 점검으로부터
                  <strong class="text-primary">7일</strong>이 지났습니다.
                </h6>
                <p>놓치고 있는 부분은 없는지 업데이트를 체크하세요.</p>
              </div>
              <div class="sb-report-analyze-check-list-item__button">
                <Button severity="contrast" outlined label="상품명 점검 하기" />
              </div>
            </div>
            <div class="sb-report-analyze-check-list-item">
              <div class="sb-report-analyze-check-list-item__text">
                <h6>
                  상품 최적가 진행이
                  <strong class="text-primary">15일</strong> 동안 없었습니다.
                </h6>
                <p>가격 적인 전략에서 뒤쳐지고 있는건 아닌지 체크하세요.</p>
              </div>
              <div class="sb-report-analyze-check-list-item__button">
                <Button
                  severity="contrast"
                  outlined
                  label="가격 최적가 제안 보기"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="sb-report-analyze-level">
          <div class="sb-report-analyze-level-head">
            <h5>다음 레벨까지 얼마나 남았을까요?</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AppTimeline from '@/pages/planner/components/AppTimeline.vue';
import IconSystemSmartstore from '@/assets/icons/system/smartstore.png';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '성과 리포트' },
  { label: '성과 분석' },
]);

//swiper
const containerRef = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const swiperParams = {
  slidesPerView: 4,
  spaceBetween: 8,
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
</script>
