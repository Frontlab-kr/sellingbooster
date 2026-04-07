<template>
  <SbMobileInfo />
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>상품명 점검</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-search">
        <h4>
          내 상품명 SEO 점검, 가이드라인에 맞게 작성되었나요? <br />
          상품명 상태를 확인하고, 클릭하여 수정이 필요한 키워드를 체크하세요.
        </h4>
        <div class="sb-sales-search-form">
          <div class="sb-sales-search-form-item">
            <div class="sb-sales-search-form-item__body">
              <Select
                v-model="selectedValue"
                :options="selectedOption"
                optionLabel="name"
                placeholder="1차 카테고리"
                style="min-width: 190px"
              />
              <SbInput placeholder="상품 번호를 입력해주세요." />
              <Button severity="primary" label="검색" />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-sales-product-body">
        <div class="sb-nodata">
          <IconIllustrationSmile class="ico-illustration-smile" />
          <div class="sb-nodata__text">
            <p>
              AI가 분석/추천 해주는 상품명 점검 서비스 이용을 위해서 채널 연동이
              필요합니다.
            </p>
          </div>
          <div class="sb-nodata__button">
            <Button
              severity="primary"
              label="채널 연동 하러 가기"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSystemRefresh from '@/assets/icons/system/refresh.svg?component';
import IconIllustrationFrown from '@/assets/icons/illustration/frown.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '상품명 점검' },
]);
</script>
