<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>상품명 생성하기</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>상품명 고민 끝! 최적의 상품명 바로 만들어드려요.</h4>
      </div>
      <div class="sb-trend-write">
        <div class="sb-trend-write-start">
          <div class="sb-trend-write-form">
            <div class="sb-trend-write-form-item">
              <label>오픈마켓<strong>*</strong></label>
              <div class="sb-trend-write-form-item__input">
                <div class="sb-radio">
                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedMarket"
                      inputId="naverSmartStore"
                      name="market"
                      value="naver"
                    />
                    <label for="naverSmartStore">네이버스마트스토어</label>
                  </div>

                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedMarket"
                      inputId="coupang"
                      name="market"
                      value="coupang"
                    />
                    <label for="coupang">쿠팡</label>
                  </div>

                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedMarket"
                      inputId="gmarket"
                      name="market"
                      value="gmarket"
                    />
                    <label for="gmarket">지마켓</label>
                  </div>

                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedMarket"
                      inputId="elevenStreet"
                      name="market"
                      value="11st"
                    />
                    <label for="elevenStreet">11번가</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sb-trend-write-form-item">
              <label>브랜드<strong>*</strong></label>
              <div class="sb-trend-write-form-item__input">
                <SbInput placeholder="최대 20자" />
              </div>
            </div>
            <div class="sb-trend-write-form-item">
              <label>핵심 키워드<strong>*</strong></label>
              <div class="sb-trend-write-form-item__input">
                <SbInput
                  placeholder="콤마( ,)로 구분해 최대 3개 입력  ex)땀배출, 런닝, 경량 "
                />
              </div>
            </div>
            <div class="sb-trend-write-form-item">
              <label>사이즈<strong>*</strong></label>
              <div class="sb-trend-write-form-item__input">
                <SbInput placeholder="XS, S, M, L XL, XXL" />
              </div>
            </div>
            <div class="sb-trend-write-form-item">
              <label>용량</label>
              <div class="sb-trend-write-form-item__input">
                <SbInput placeholder="10ml, 12*20 Inch" />
              </div>
            </div>
            <div class="sb-trend-write-form-item">
              <label>언어 선택</label>
              <div class="sb-trend-write-form-item__input">
                <div class="sb-radio">
                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedLanguage"
                      inputId="langKO"
                      name="language"
                      value="KO"
                    />
                    <label for="langKO">한국어</label>
                  </div>

                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedLanguage"
                      inputId="langEN"
                      name="language"
                      value="EN"
                    />
                    <label for="langEN">영어</label>
                  </div>

                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedLanguage"
                      inputId="langZH"
                      name="language"
                      value="ZH"
                    />
                    <label for="langZH">중국어</label>
                  </div>

                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="selectedLanguage"
                      inputId="langJA"
                      name="language"
                      value="JA"
                    />
                    <label for="langJA">일본어</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-trend-write-form__button">
            <Button label="생성" size="large" />
          </div>
        </div>
        <div class="sb-trend-write-end">
          <div class="sb-trend-write-ai"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천기회' },
  { label: '상품명 생성하기' },
]);
</script>
