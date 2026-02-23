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
      <Icon100frown class="ico-100-frown" />
      <div class="sb-nodata__text">
        <p>
          앗, 검색된 내용이 없어요.<br />
          다른 키워드로 다시 검색해볼까요?
        </p>
      </div>
      <div class="sb-nodata__button">
        <Button severity="contrast" outlined>
          <Icon24refresh class="ico-24-refresh" />
          <span class="p-button-label">검색 재설정</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon24refresh from '@/assets/icons/24/refresh.svg?component';
import Icon100frown from '@/assets/icons/100/frown.svg?component';

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '공지사항' },
]);
</script>
