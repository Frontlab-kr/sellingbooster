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
          <div class="sb-trend-write-ai" v-scroll-end>
            <div class="sb-trend-write-ai-scroll">
              <div class="sb-ai sb-ai--right">
                <div class="sb-ai__tooltip">
                  <p>AI가 상품명을 추천해드려요</p>
                </div>
              </div>
              <div class="sb-trend-write-ai-list">
                <div class="sb-trend-write-ai-list-item">
                  <p>
                    [올리스] 26년 1월 수확 신선한 햇올리브로 만든 로스텐토
                    프리미엄 엑스트라 버진 올리브오일 500ml 고급 요리용 풍미
                    가득 건강한 식용 오일
                  </p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>
                    유기농 냉압착 엑스트라버진 올리브오일 올리브유 250ml x 2병 /
                    스페인산 피쿠알 품종 올리브 저온압착 고급 식용 올리브 오일
                  </p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>2026 햇올리브, 올리스 엑스트라 버진 500ml 올리브오일</p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>
                    [올리스] 26년 1월 수확 신선한 햇올리브로 만든 로스텐토
                    프리미엄 엑스트라 버진 올리브오일 500ml 고급 요리용 풍미
                    가득 건강한 식용 오일
                  </p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>
                    유기농 냉압착 엑스트라버진 올리브오일 올리브유 250ml x 2병 /
                    스페인산 피쿠알 품종 올리브 저온압착 고급 식용 올리브 오일
                  </p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>2026 햇올리브, 올리스 엑스트라 버진 500ml 올리브오일</p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>
                    [올리스] 26년 1월 수확 신선한 햇올리브로 만든 로스텐토
                    프리미엄 엑스트라 버진 올리브오일 500ml 고급 요리용 풍미
                    가득 건강한 식용 오일
                  </p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>
                    유기농 냉압착 엑스트라버진 올리브오일 올리브유 250ml x 2병 /
                    스페인산 피쿠알 품종 올리브 저온압착 고급 식용 올리브 오일
                  </p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
                <div class="sb-trend-write-ai-list-item">
                  <p>2026 햇올리브, 올리스 엑스트라 버진 500ml 올리브오일</p>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemCopy
                        class="ico-system-copy"
                        @click="showToast"
                      />
                    </template>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
import { ref } from 'vue';

import IconSystemCopy from '@/assets/icons/system/copy.svg?component';

import { useToast } from 'primevue/usetoast';
const toast = useToast();

const showToast = () => {
  toast.add({
    detail: '추천 상품명이 복사 되었습니다. 이용하실 곳에 붙여넣기 하세요.',
    group: 'bc',
    life: 300000,
  });
};

//radio
const selectedMarket = ref('naver');
const selectedLanguage = ref('KO');

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천 기회' },
  { label: '상품명 생성하기' },
]);
</script>
