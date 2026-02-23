<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>공지사항</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-community-menu">
      <div class="sb-tab">
        <Button label="전체(132)" variant="text" class="active" />
        <Button label="서비스" variant="text" />
        <Button label="업데이트" variant="text" />
        <Button label="이벤트" variant="text" />
        <Button label="작업" variant="text" />
      </div>
      <SbSearchbar />
    </div>
    <div class="sb-nodata">
      <Icon100smile class="ico-100-smile" />
      <div class="sb-nodata__text">
        <p>
          아직 준비된 소식이 없어요.<br />
          새로운 소식으로 곧 찾아뵐게요!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon100smile from '@/assets/icons/100/smile.svg?component';

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '공지사항' },
]);
</script>
