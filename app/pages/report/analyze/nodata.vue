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
            <ClientOnly>
              <Swiper
                :slidesPerView="3"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }"
                :spaceBetween="8"
                :breakpoints="{
                  0: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    loop: true,
                  },
                  1440: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                    loop: false,
                  },
                  1801: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                    loop: false,
                  },
                }"
                :navigation="{
                  nextEl: '.sb-swiper-controls__next',
                }"
                :modules="modules"
              >
                <SwiperSlide>
                  <div class="sb-report-analyze-swiper-item">
                    <div class="sb-report-analyze-swiper-item__text">
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
                    <div class="sb-report-analyze-swiper-item__time">
                      6시간 전
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide v-for="n in 10" :key="n">
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
                </SwiperSlide>
                <SwiperSlide class="pc"></SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
          <div class="sb-swiper-controls">
            <Button rounded severity="neutral" class="sb-swiper-controls__next">
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
                    <SbChartGaugeCircle :score="36" />
                    <div class="sb-report-analyze-record-chart-text">
                      <p>달성율</p>
                      <div class="sb-report-analyze-record-chart-text__percent">
                        <h1>36</h1>
                        <h3>%</h3>
                      </div>
                    </div>
                  </div>
                  <div class="sb-report-analyze-record-chart-contents">
                    <div class="sb-report-analyze-record-chart-contents-price">
                      <dl>
                        <dt>이번달 누적 매출액</dt>
                        <dd>
                          <h4>12,680,760원</h4>
                        </dd>
                      </dl>
                      <dl>
                        <dt>예상 마진</dt>
                        <dd>
                          <h6 class="text-up">45%</h6>
                          <h4 class="color-etc">5,706,342원</h4>
                        </dd>
                      </dl>
                    </div>
                    <div
                      class="sb-report-analyze-record-chart-contents__expect"
                    >
                      <dl>
                        <dt>데이터 기반 분석 예측</dt>
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
                  <div class="sb-nodata">
                    <IconIllustrationSmile class="ico-illustration-smile" />
                    <div class="sb-nodata__text">
                      <h6>금주 일정이 없습니다.</h6>
                      <p>
                        중요한 일정들을 등록해 두시면 <br />
                        셀링부스터가 알려드립니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="sb-report-analyze-schedule-button">
                  <Button severity="contrast" outlined label="일정 등록 하기" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sb-report-analyze-level">
          <div class="sb-report-analyze-level-head">
            <h5>다음 레벨까지 얼마나 남았을까요?</h5>
          </div>
          <div class="sb-report-analyze-level-list">
            <div class="sb-report-analyze-level-list-item level01">
              <div class="sb-report-analyze-level-list-item__tooltip">
                <p>현재 레벨</p>
              </div>
              <ul>
                <li class="active">
                  <IconSystemCheckS class="ico-system-check-s" />사업자 정보
                  입력
                </li>
                <li class="active">
                  <IconSystemCheckS class="ico-system-check-s" />관심 카테고리
                  설정
                </li>
                <li class="active">
                  <IconSystemCheckS class="ico-system-check-s" />온보딩 시나리오
                </li>
              </ul>
            </div>
            <div class="sb-report-analyze-level-list-item level02 active">
              <div class="sb-report-analyze-level-list-item__tooltip">
                <p>현재 레벨</p>
              </div>
              <div class="sb-report-analyze-level-list-item__line">
                <IconProfileLevelLine class="ico-profile-level-line" />
              </div>
              <ul>
                <li class="active">
                  <IconSystemCheckS class="ico-system-check-s" />스토어 연동
                </li>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />상품명
                  점검(35/50
                </li>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />최적가
                  조정(42/50)
                </li>
              </ul>
            </div>
            <div class="sb-report-analyze-level-list-item level03">
              <div class="sb-report-analyze-level-list-item__tooltip">
                <p>현재 레벨</p>
              </div>
              <div class="sb-report-analyze-level-list-item__line">
                <IconProfileLevelLine class="ico-profile-level-line" />
              </div>
              <ul>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />자금 진단 및
                  대출 조회
                </li>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />경쟁사 정밀
                  모니터링
                </li>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />광고 효율 관리
                </li>
              </ul>
            </div>
            <div class="sb-report-analyze-level-list-item level04">
              <div class="sb-report-analyze-level-list-item__tooltip">
                <p>현재 레벨</p>
              </div>
              <div class="sb-report-analyze-level-list-item__line">
                <IconProfileLevelLine class="ico-profile-level-line" />
              </div>
              <ul>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />매출 달성 및
                  성장율 조회
                </li>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />심층 외부
                  동향(뉴스/논문)
                </li>
                <li>
                  <IconSystemCheckS class="ico-system-check-s" />
                  커뮤니티 노하우 공유
                </li>
              </ul>
            </div>
          </div>
          <div class="sb-report-analyze-level-text">
            <p>
              <span
                >상품명 점검을 <strong>15건</strong>과 최적가 가격 조정
                <strong>8건</strong>을 더 완료하면</span
              >
              <span class="sb-report-analyze-level-text__badge">
                <Badge value="Level 3" severity="level3"></Badge>
              </span>
              <span
                ><strong class="text-level03">LV3. BOOSTER(부스터)</strong>로
                레벨업 할 수 있어요.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import AppTimeline from '@/pages/planner/components/AppTimeline.vue';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';
import IconProfileLevelLine from '@/assets/icons/profile/level-line.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '성장 리포트' },
  { label: '성과 분석' },
]);

//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const modules = [Autoplay, Navigation];
</script>
