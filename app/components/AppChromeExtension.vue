<template>
  <div v-if="show" class="sb-chrome-extension" :class="{ active: isActive }">
    <div class="sb-chrome-extension-contents">
      <div class="sb-chrome-extension-contents__text">
        <img src="./../assets/icons/etc/chrome.png" alt="" />
        <p>
          <strong
            >확장 프로그램(Chrome Extensions)으로 셀링부스터를 폭넓게 이용해
            보세요.</strong
          >
          <span
            >상품 분석부터 이미지 분석까지 다양한 분석 및 추천 서비스를 경험 할
            수 있어요.</span
          >
        </p>
      </div>
      <Button
        severity="contrast"
        outlined
        label="크롬익스텐션 설치하기"
      ></Button>
    </div>
    <div class="sb-chrome-extension-button">
      <Button variant="text" @click="show = false">
        <template #icon>
          <IconSystemClose class="ico-system-close" />
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemClose from '@/assets/icons/system/close.svg?component';

const show = ref(true);
const isActive = ref(false);

onMounted(() => {
  // 컴포넌트 마운트 직후 active 클래스를 활성화하여 애니메이션 트리거가 가능하게 합니다.
  setTimeout(() => {
    isActive.value = true;
  }, 1000);
});
</script>
