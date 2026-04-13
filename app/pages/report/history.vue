<template>
  <SbMobileInfo />
  <div class="sb-report">
    <div class="sb-report-head">
      <div class="sb-report-head__title">
        <h5>성과 히스토리</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-report-contents">
      <div class="sb-report-contents-head">
        <h4>최적가 가격 · 상품명 점검 · CS 대응 성과를 한눈에 확인해보세요.</h4>
      </div>
      <div class="sb-report-history">
        <div class="sb-report-history-result">
          <div class="sb-report-history-chart">
            <div class="sb-report-history-chart-head">
              <h5>판매성과 차트</h5>
              <dl>
                <dt>오늘의 성과</dt>
                <dd>
                  <p>
                    결제 금액 :
                    <strong class="text-primary">123,456,789</strong>원
                  </p>
                  <p>
                    결제 건수:
                    <strong class="text-primary">75</strong>건
                  </p>
                </dd>
              </dl>
            </div>
            <div class="sb-report-history-chart-menu">
              <div class="sb-report-history-chart-menu__tab">
                <div class="sb-tab-circle">
                  <Button
                    label="일"
                    variant="text"
                    class="active"
                    v-tooltip.top="{
                      value: '오늘 기준 이전 30일간 매출',
                    }"
                  />
                  <Button
                    label="주"
                    variant="text"
                    v-tooltip.top="{
                      value: '금주 기준 이전 10주간 매출',
                    }"
                  />
                  <Button
                    label="월"
                    variant="text"
                    v-tooltip.top="{
                      value: '금월 기준 이전 10개월 매출',
                    }"
                  />
                </div>
                <p>기간 : 03.01~03.30 (오늘 기준 이전 30일)</p>
              </div>
              <div class="sb-report-history-chart-menu__label">
                <p>
                  <IconSystemLegendSecondary />
                  결제 금액(만원)
                </p>
                <p>
                  <IconSystemLegendWarn />
                  결제 건수(건)
                </p>
                <p>
                  <IconSystemLegendPin />
                  셀링부스터 액션
                </p>
              </div>
            </div>
            <SbChartCombined
              :sales-data="salesData"
              :count-data="countData"
              :booster-days="boosterDays"
              :days="days"
            />
          </div>
          <div class="sb-report-history-bna">
            <div class="sb-report-history-bna-head">
              <h5>솔루션 이용 전후의 성과 성적표</h5>
            </div>
            <div class="sb-report-history-bna-menu">
              <div class="sb-report-history-bna-menu__date">
                <strong>기준 일자</strong>
                <DatePicker v-model="dates" placeholder="날짜를 선택해주세요" />
              </div>
              <p>산출 대상 기간 : 2026.03.17~2026.03.23</p>
            </div>
            <div class="sb-report-history-bna-list">
              <div class="sb-report-history-bna-list-item">
                <div class="sb-report-history-bna-list-item-head">
                  <h5>최적가 적용 효과 레포트</h5>
                  <p>
                    가격 최적가 조정 상품 수 :
                    <strong class="text-primary">35</strong>개
                  </p>
                </div>
                <div class="sb-report-history-bna-list-item-body">
                  <div class="sb-report-history-bna-list-item-chart">
                    <dl>
                      <dt>
                        <h6>전</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>7일간 매출액</p>
                            <h6>87,620원</h6>
                          </li>
                          <li>
                            <p>7일간 주문량</p>
                            <h6>12건</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <dl class="active">
                      <dt>
                        <h6>후</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>7일간 매출액</p>
                            <h6>587,620원</h6>
                          </li>
                          <li>
                            <p>7일간 주문량</p>
                            <h6>12건</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-foot">
                  <h6>주문량 변화</h6>
                  <div class="sb-report-history-bna-list-item-foot__price">
                    <IconArrowUp class="ico-arrow-up text-up" />
                    <h5>158</h5>
                    <span>%</span>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-button">
                  <NuxtLink to="#bestPrice">
                    <Button severity="contrast" outlined>
                      <span class="p-button-label"
                        >상품별 성과 히스토리 보기</span
                      >
                      <IconArrowAchevronDown class="ico-arrow-achevron-down" />
                    </Button>
                  </NuxtLink>
                </div>
              </div>
              <div class="sb-report-history-bna-list-item">
                <div class="sb-report-history-bna-list-item-head">
                  <h5>상품명 분석/변경 효과 레포트</h5>
                  <p>
                    상품명 분석 진행 상품 :
                    <strong class="text-primary">35</strong>개
                  </p>
                </div>
                <div class="sb-report-history-bna-list-item-body">
                  <div class="sb-report-history-bna-list-item-chart">
                    <dl>
                      <dt>
                        <h6>전</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>7일간 매출액</p>
                            <h6>876,000원</h6>
                          </li>
                          <li>
                            <p>7일간 주문량</p>
                            <h6>10건</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <dl class="active">
                      <dt>
                        <h6>후</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>7일간 매출액</p>
                            <h6>1,752,000원</h6>
                          </li>
                          <li>
                            <p>7일간 주문량</p>
                            <h6>20건</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-foot">
                  <h6>주문량 변화</h6>
                  <div class="sb-report-history-bna-list-item-foot__price">
                    <IconArrowUp class="ico-arrow-up text-up" />
                    <h5>100</h5>
                    <span>%</span>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-button">
                  <NuxtLink to="#productAnalysis">
                    <Button severity="contrast" outlined>
                      <span class="p-button-label"
                        >상품별 성과 히스토리 보기</span
                      >
                      <IconArrowAchevronDown class="ico-arrow-achevron-down" />
                    </Button>
                  </NuxtLink>
                </div>
              </div>
              <div class="sb-report-history-bna-list-item">
                <div class="sb-report-history-bna-list-item-head">
                  <h5>CS 분석 효과 레포트</h5>
                  <p>
                    CS 분석 진행 건수 :
                    <strong class="text-primary">115</strong>개
                  </p>
                </div>
                <div class="sb-report-history-bna-list-item-body">
                  <div class="sb-report-history-bna-list-item-chart">
                    <dl>
                      <dt>
                        <h6>전</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>평균 대응 시간</p>
                            <h6>42분</h6>
                          </li>
                          <li>
                            <p>고객 긍정 비율</p>
                            <h6>72%</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <dl class="active">
                      <dt>
                        <h6>후</h6>
                        <p>(2026.03.11 ~ 2026.03.17)</p>
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            <p>평균 대응 시간</p>
                            <h6>18분</h6>
                          </li>
                          <li>
                            <p>고객 긍정 비율</p>
                            <h6>88%</h6>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-foot">
                  <h6>고객 응대 시간 단축율</h6>
                  <div class="sb-report-history-bna-list-item-foot__price">
                    <IconArrowDown class="ico-arrow-down text-down" />
                    <h5>158</h5>
                    <span>%</span>
                  </div>
                </div>
                <div class="sb-report-history-bna-list-item-button">
                  <Button severity="contrast" outlined>
                    <span class="p-button-label">CS 응대 시간 단축하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-report-history-date">
          <div class="sb-report-history-date-title">
            <h5>일자별 상품 히스토리</h5>
          </div>
          <div class="sb-report-history-date-head">
            <div class="sb-report-history-date-head__date">
              <strong>기준 일자</strong>
              <DatePicker v-model="dates" placeholder="날짜를 선택해주세요" />
            </div>
            <p>산출 대상 기간 : 2026.03.17~2026.03.23</p>
          </div>
          <div class="sb-report-history-date-body">
            <div class="sb-report-history-date-body-section" id="bestPrice">
              <div class="sb-report-history-date-body-head">
                <p>
                  가격 최적가 조정 상품 수 :
                  <strong class="text-primary">35</strong>개
                </p>
                <Button
                  severity="contrast"
                  outlined
                  label="가격 최적가 실행 바로가기"
                  size="small"
                />
              </div>
              <div
                v-for="(item, index) in [0, 1, 2, 3, 4]"
                :key="index"
                class="sb-report-history-date-list"
                :class="{ active: openStates[index] }"
              >
                <div class="sb-report-history-date-list__title">
                  <strong>2026.03.23</strong>
                  <Button variant="text" @click="toggleList(index)">
                    <span class="p-button-label"
                      >4개 {{ openStates[index] ? '닫기' : '보기' }}</span
                    >
                    <IconArrowAchevronDown
                      class="ico-arrow-achevron-down"
                      :style="{
                        transform: openStates[index]
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      }"
                    />
                  </Button>
                </div>
                <div class="sb-report-history-date-list__contents">
                  <div
                    class="sb-report-history-date-list-item"
                    v-for="value in 4"
                  >
                    <div class="sb-report-history-date-list-item__product">
                      <div class="sb-report-history-date-list-item__contents">
                        <div class="sb-report-history-date-list-item__thumb">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </div>
                        <div class="sb-report-history-date-list-item__text">
                          <div class="sb-report-history-date-list-item__title">
                            [네이버 단독 100일분] 블랙모어스 알티지오메가3 호주
                            프리미엄 RTG오메가3 임산부 피쉬오일 미니 캡슐 2+1
                            [네이버 단독 100일분] 블랙모어스 알티지오메가3 호주
                            프리미엄 RTG오메가3 임산부 피쉬오일 미니 캡슐 2+1
                          </div>
                          <div class="sb-report-history-date-list-item__price">
                            <span>변경 전 28,000원</span>
                            <IconArrowRight class="ico-arrow-right" />
                            <strong>변경가 28,000원</strong>
                          </div>
                          <p>(변경일시 : 2026.03.13 16:23:16)</p>
                        </div>
                      </div>
                      <div class="sb-report-history-date-list-item__button">
                        <Button variant="text">
                          <span class="p-button-label"
                            >레포트 보기 : 최근 7일</span
                          >
                          <IconArrowAchevronDown
                            class="ico-arrow-achevron-down"
                          />
                        </Button>
                        <hr />
                        <Button variant="text">
                          <span class="p-button-label">상품 분석 보기</span>
                          <IconArrowAchevronDown
                            class="ico-arrow-achevron-down"
                          />
                        </Button>
                      </div>
                    </div>
                    <div class="sb-report-history-date-list-item__bna">
                      <dl>
                        <dt>
                          <h6>전</h6>
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <p>
                                <span>매출액</span>
                                <strong>876,000원</strong>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>주문량</span>
                                <strong>10건</strong>
                              </p>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl class="active">
                        <dt>
                          <h6>후</h6>
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <p>
                                <span>매출액</span>
                                <strong>1,752,000원</strong>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>주문량</span>
                                <strong>20건</strong>
                              </p>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sb-report-history-date-body-section"
              id="productAnalysis"
            >
              <div class="sb-report-history-date-body-head">
                <p>
                  상품명 분석 진행 상품 :
                  <strong class="text-primary">35</strong>개
                </p>
                <Button
                  severity="contrast"
                  outlined
                  label="상품명 분석 바로가기"
                  size="small"
                />
              </div>
              <div
                v-for="(item, index) in [0, 1, 2, 3, 4]"
                :key="index"
                class="sb-report-history-date-list"
                :class="{ active: openStates[index] }"
              >
                <div class="sb-report-history-date-list__title">
                  <strong>2026.03.23</strong>
                  <Button variant="text" @click="toggleList(index)">
                    <span class="p-button-label"
                      >4개 {{ openStates[index] ? '닫기' : '보기' }}</span
                    >
                    <IconArrowAchevronDown
                      class="ico-arrow-achevron-down"
                      :style="{
                        transform: openStates[index]
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      }"
                    />
                  </Button>
                </div>
                <div class="sb-report-history-date-list__contents">
                  <div
                    class="sb-report-history-date-list-item"
                    v-for="value in 4"
                  >
                    <div class="sb-report-history-date-list-item__product">
                      <div class="sb-report-history-date-list-item__contents">
                        <div class="sb-report-history-date-list-item__thumb">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </div>
                        <div class="sb-report-history-date-list-item__text">
                          <div class="sb-report-history-date-list-item__title">
                            [네이버 단독 100일분] 블랙모어스 알티지오메가3 호주
                            프리미엄 RTG오메가3 임산부 피쉬오일 미니 캡슐 2+1
                            [네이버 단독 100일분] 블랙모어스 알티지오메가3 호주
                            프리미엄 RTG오메가3 임산부 피쉬오일 미니 캡슐 2+1
                          </div>
                          <div class="sb-report-history-date-list-item__price">
                            <span>변경 전 28,000원</span>
                            <IconArrowRight class="ico-arrow-right" />
                            <strong>변경가 28,000원</strong>
                          </div>
                          <p>(변경일시 : 2026.03.13 16:23:16)</p>
                        </div>
                      </div>
                      <div class="sb-report-history-date-list-item__button">
                        <Button variant="text">
                          <span class="p-button-label"
                            >레포트 보기 : 최근 7일</span
                          >
                          <IconArrowAchevronDown
                            class="ico-arrow-achevron-down"
                          />
                        </Button>
                        <hr />
                        <Button variant="text">
                          <span class="p-button-label">상품 분석 보기</span>
                          <IconArrowAchevronDown
                            class="ico-arrow-achevron-down"
                          />
                        </Button>
                      </div>
                    </div>
                    <div class="sb-report-history-date-list-item__bna">
                      <dl>
                        <dt>
                          <h6>전</h6>
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <p>
                                <span>매출액</span>
                                <strong>876,000원</strong>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>주문량</span>
                                <strong>10건</strong>
                              </p>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl class="active">
                        <dt>
                          <h6>후</h6>
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <p>
                                <span>매출액</span>
                                <strong>1,752,000원</strong>
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>주문량</span>
                                <strong>20건</strong>
                              </p>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SbBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconArrowUp from '@/assets/icons/arrow/up.svg?component';
import IconArrowDown from '@/assets/icons/arrow/down.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconSystemLegendSecondary from '@/assets/icons/system/legend-secondary.svg?component';
import IconSystemLegendWarn from '@/assets/icons/system/legend-warn.svg?component';
import IconSystemLegendPin from '@/assets/icons/system/legend-pin.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '성과 리포트' },
  { label: '성과 히스토리' },
]);

// 리스트의 개별 토글 상태 관리 (index를 키로 사용)
const openStates = ref({});

const toggleList = (index) => {
  openStates.value[index] = !openStates.value[index];
};

//chart
const salesData = ref([
  1300, 1600, 1300, 2100, 2200, 2300, 3000, 3100, 2500, 3700, 3000, 4200, 4000,
  3700, 3500, 3000, 3700, 4100, 3100, 2600, 3900, 3700, 3000, 3800, 2600, 2100,
  1300, 1100, 1300, 1900,
]);

const countData = ref([
  220, 240, 210, 280, 270, 310, 340, 380, 280, 430, 370, 460, 390, 340, 420,
  350, 440, 410, 350, 300, 430, 340, 260, 370, 220, 160, 130, 150, 190, 190,
]);

const boosterDays = ref([4, 12, 18, 26]);
</script>
