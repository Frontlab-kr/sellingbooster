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
      <div class="sb-sales-product">
        <div class="sb-nodata">
          <IconIllustrationFrown class="ico-illustration-frown" />
          <div class="sb-nodata__text">
            <p>검색 결과 매칭되는 상품이 없습니다.</p>
          </div>
        </div>
        <div class="sb-caution">
          <ul>
            <li>
              채널 연동이 모두 되어있는지 확인해주세요.

              <NuxtLink to="/">
                <Button variant="text">
                  <span class="p-button-label">채널 연동하러 가기</span>
                  <IconArrowAchevronRight class="ico-arrow-achevron-right" />
                </Button>
              </NuxtLink>
            </li>
            <li>일시적인 오류일 수 있으니 다시 한번 시도해보세요.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconIllustrationFrown from '@/assets/icons/illustration/frown.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '상품명 점검' },
]);
</script>
