<template>
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h4>상품명 생성 하기</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-product">
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              상품 정보를 입력하시면 최적의 상품명을 자동으로 추천해드려요.
            </h5>
          </div>
        </div>
        <div class="sb-trend-product-write">
          <div class="grid">
            <div class="col">
              <div class="sb-trend-product-write-form">
                <div class="sb-trend-product-write-form-item">
                  <label>브랜드<strong>*</strong></label>
                  <div class="sb-trend-product-write-form-item__input">
                    <SbInput placeholder="브랜드를 입력해주세요." />
                  </div>
                  <div class="sb-trend-product-write-form-item__message">
                    <Message size="small" severity="neutral" variant="simple"
                      >최대 20자로 사용해 주세요.</Message
                    >
                  </div>
                </div>
                <div class="sb-trend-product-write-form-item">
                  <label>핵심 키워드<strong>*</strong></label>
                  <div class="sb-trend-product-write-form-item__input">
                    <SbInput placeholder="브랜드를 입력해주세요." />
                  </div>
                  <div class="sb-trend-product-write-form-item__message">
                    <Message size="small" severity="neutral" variant="simple"
                      >, 표로 구분하여 최대 3개 입력 ex) 건강식, 비타민,
                      영양제</Message
                    >
                  </div>
                </div>
                <div class="sb-trend-product-write-form-item">
                  <label>사이즈</label>
                  <div class="sb-trend-product-write-form-item__input">
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="사이즈를 선택해주세요."
                      class="w-full"
                    />
                  </div>
                </div>
                <div class="sb-trend-product-write-form-item">
                  <label>용량</label>
                  <div class="sb-trend-product-write-form-item__input">
                    <SbInput placeholder="용량을 입력해주세요." />
                  </div>
                  <div class="sb-trend-product-write-form-item__message">
                    <Message size="small" severity="neutral" variant="simple"
                      >10ml, 12*20 Inch</Message
                    >
                  </div>
                </div>
                <div class="sb-trend-product-write-form-item">
                  <label>언어 선택</label>
                  <div class="sb-radio">
                    <div class="sb-radio-item">
                      <RadioButton
                        v-model="radioNotification"
                        inputId="radioNotificationNo"
                        name="radioNotification"
                        value="radioNotificationNo"
                      />
                      <label for="radioNotificationNo">한국어</label>
                    </div>
                    <div class="sb-radio-item">
                      <RadioButton
                        v-model="radioNotification"
                        inputId="radioNotificationYes"
                        name="radioNotification"
                        value="radioNotificationYes"
                      />
                      <label for="radioNotificationYes">영어</label>
                    </div>
                    <div class="sb-radio-item">
                      <RadioButton
                        v-model="radioNotification"
                        inputId="radioNotificationYes"
                        name="radioNotification"
                        value="radioNotificationYes"
                      />
                      <label for="radioNotificationYes">중국어</label>
                    </div>
                    <div class="sb-radio-item">
                      <RadioButton
                        v-model="radioNotification"
                        inputId="radioNotificationYes"
                        name="radioNotification"
                        value="radioNotificationYes"
                      />
                      <label for="radioNotificationYes">일본어</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sb-trend-product-write-form__button">
                <Button severity="primary" label="생성" size="large" />
              </div>
            </div>
            <div class="col">
              <div class="sb-trend-product-write-form">
                <div class="sb-trend-product-write-form-item">
                  <label>추천 상품명(Product Title)</label>
                  <div class="sb-trend-product-write-form-item__input">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="정보를 입력하시면 정보를 기반으로 상품명을 추천해드려요."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const radioNotification = ref('radioNotificationNo');

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '상품명 생성 하기' },
]);

const searchKeyword = ref('');

const selectedValue = ref();
const selectedOption = ref([
  { name: '스팸홍보/도배글입니다.' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);

const products = ref([
  {
    keyword: '무선 키보드',
    category: '컴퓨터 주변기기',
    influence: '상',
    avgPrice: 45000,
    productCount: 12500,
    pcSearchVol: 5200,
    moSearchVol: 18000,
    avgClick: 450,
    competition: '높음',
  },
  {
    keyword: '친환경 텀블러',
    category: '주방용품',
    influence: '중',
    avgPrice: 18900,
    productCount: 3400,
    pcSearchVol: 1200,
    moSearchVol: 5400,
    avgClick: 210,
    competition: '보통',
  },
  {
    keyword: '캠핑용 의자',
    category: '스포츠/레저',
    influence: '상',
    avgPrice: 32000,
    productCount: 8900,
    pcSearchVol: 3100,
    moSearchVol: 12500,
    avgClick: 380,
    competition: '치열',
  },
  {
    keyword: '가습기 살균제 <i class="ico-24-back">ss</i>',
    category: '생활용품',
    influence: '하',
    avgPrice: 8500,
    productCount: 120,
    pcSearchVol: 450,
    moSearchVol: 900,
    avgClick: 45,
    competition: '낮음',
  },
]);
const productsNodata = ref(null);

//
const keywords = [
  { id: 1, name: '위스키테이스팅잔', category: '유리컵' },
  { id: 2, name: '싱글몰트잔', category: '도구' },
  { id: 3, name: '싱글몰트 위스키 잔', category: '유리컵' },
  { id: 4, name: '위스키테이스팅잔', category: '유리컵' },
  { id: 5, name: '튤립위스키잔', category: '주방용품' },
  { id: 6, name: '양주잔', category: '주방용품' },
  { id: 7, name: '위스키잔', category: '주방용품' },
];
</script>
