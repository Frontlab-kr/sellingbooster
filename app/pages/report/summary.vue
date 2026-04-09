<template>
  <SbMobileInfo />
  <div class="sb-report">
    <div class="sb-report-head">
      <div class="sb-report-head__title">
        <h5>성과 요약</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-report-contents">
      <div class="sb-report-contents-head">
        <h4>성과 확인, 성장 포인트를 빠르게 확인하세요.</h4>
      </div>
      <div class="sb-report-contents"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemMessage from '@/assets/icons/system/message.svg?component';
import IconSnbDocument from '@/assets/icons/snb/document.svg?component';
import IconSystemFileCheck from '@/assets/icons/system/file-check.svg?component';
import IconSystemFaceSad from '@/assets/icons/system/face-sad.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '성과 리포트' },
  { label: '성과 요약' },
]);
</script>
