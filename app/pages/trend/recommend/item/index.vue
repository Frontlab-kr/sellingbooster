<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>아이템 소싱</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>
          사진 한 장이면 끝! AI가 상품 분석부터 연관 아이템까지 싹 찾아드려요
        </h4>
      </div>
      <div class="sb-trend-sourcing">
        <div class="sb-tab">
          <Button
            label="파일 업로드"
            variant="text"
            :class="{ active: activeTab === 'upload' }"
            @click="activeTab = 'upload'"
          />
          <Button
            label="이미지 URL"
            variant="text"
            :class="{ active: activeTab === 'url' }"
            @click="activeTab = 'url'"
          />
        </div>
        <div v-if="activeTab === 'upload'">1 (파일 업로드 영역)</div>
        <div v-else-if="activeTab === 'url'">2 (이미지 URL 영역)</div>
      </div>
      <SbBanner />
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
  { label: '아이템 소싱' },
]);

//tab
const activeTab = ref('upload');
</script>
