<template>
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>판매 가속</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-contents-head">
        <h4>가격 조정으로 더 많은 판매 기회를 잡아보세요.</h4>
      </div>
      <SbPrice
        :price-min="0"
        :price-max="25000"
        :price-initial-current="16500"
        :price-initial-recommended="14900"
        :price-average="17800"
      />
    </div>
  </div>
</template>

<script setup>
//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '키워드 분석' },
]);
</script>
