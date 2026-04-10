<template>
  <SbMobileInfo />
  <div class="sb-report">
    <div class="sb-report-head">
      <div class="sb-report-head__title">
        <h5>성과 요약</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-report-contents">
      <div class="sb-report-contents-head">
        <h4>성과 확인, 성장 포인트를 빠르게 확인하세요.</h4>
      </div>

      <div class="sb-report-summary-head">
        <h5>스마트스토어</h5>
        <div class="grid">
          <div class="col">
            <dl>
              <dt>전일 매출 / 주문 요약</dt>
              <dd></dd>
            </dl>
          </div>
          <div class="col">
            <dl>
              <dt>오늘 해야 할 CS 운영</dt>
              <dd></dd>
            </dl>
          </div>
          <div class="col">
            <dl>
              <dt>셀링부스터 적용 상품 (최근 7일)</dt>
              <dd>
                <div class="sb-report-summary-head-list">
                  <ul>
                    <li>
                      <p>셀부에 연동된 전체 상품 수</p>
                      <div class="sb-report-summary-head-list__number">
                        <h4 class="color-up">781,913</h4>
                        <h5>건</h5>
                      </div>
                    </li>
                    <li>
                      <p>최적가 가격 조정 상품 수</p>
                      <div class="sb-report-summary-head-list__number">
                        <h4 class="color-down">9,238</h4>
                        <h5>건</h5>
                      </div>
                    </li>
                    <li>
                      <p>상품명 점검 상품 수</p>
                      <div class="sb-report-summary-head-list__number">
                        <h4 class="color-down">9,238</h4>
                        <h5>건</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sb-report-summary-compare">
        <div class="sb-report-summary-compare-head">
          <h5>오늘의 성과를 바로 비교해보세요.</h5>
          <p>데이터 동기화 일시 : 2026.03.20 15:49:26</p>
        </div>
      </div>
      <div class="sb-report-summary-chart">
        <div class="sb-report-summary-chart-head">
          <h5></h5>
          <p>최근 3일간의 주문 데이터 입니다.</p>
        </div>
        <div class="grid">
          <div class="col-3">
            <div class="grid">
              <div class="col">
                <dl>
                  <dt>오늘 주문 건수</dt>
                  <dd>
                    <h4>123,456</h4>
                    <h5>건</h5>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="grid">
              <div class="col">
                <dl>
                  <dt>오늘 주문 건수</dt>
                  <dd>
                    <h4>123,456</h4>
                    <h5>건</h5>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="col-9">
            <dl>
              <dd></dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="sb-report-summary-product"></div>
      <div class="sb-report-summary-cs"></div>
      <SbBanner />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemMessage from '@/assets/icons/system/message.svg?component';
import IconSnbDocument from '@/assets/icons/snb/document.svg?component';
import IconSystemFileCheck from '@/assets/icons/system/file-check.svg?component';
import IconSystemFaceSad from '@/assets/icons/system/face-sad.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '성과 리포트' },
  { label: '성과 요약' },
]);
</script>
