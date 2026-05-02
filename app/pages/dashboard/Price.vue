<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>판매 속도를 높이는 AI의 가격 제안</h5>
      <div class="sb-dashboard-card-head-menu">
        <NuxtLink to="/">
          <Button variant="text" severity="white">
            <template #icon>
              <IconArrowUpRight class="ico-arrow-up-right" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-sales-price-list-item-head">
        <div class="sb-sales-price-list-item-head__thumb">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="sb-sales-price-list-item-head__contents">
          <div class="sb-sales-price-list-item-head__title">
            <h6>뉴트리코어 하이퍼셀오메가3</h6>
          </div>
          <div class="sb-sales-price-list-item-head__category">
            <p>
              <span>식품</span>
              <span>건강식품</span>
              <span>영양제</span>
              <span>오메가3</span>
            </p>
            <p>
              <span>건가보조식품</span>
              <span>혈행개선</span>
              <span>오메가</span>
              <span>오메가3</span>
            </p>
            <p>
              <span>식품</span>
              <span>건강식품</span>
              <span>영양제</span>
              <span>기타영양제</span>
              <span>오메가3</span>
            </p>
          </div>
        </div>
      </div>
      <SbPriceSetting
        :price-min="0"
        :price-max="25000"
        :price-current="16500"
        :price-initial-recommended="14900"
        :price-average="17800"
      >
        <template #badge>
          <Badge value="매우 좋음" severity="success" />
        </template>
      </SbPriceSetting>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
</script>
