<template>
  <div class="sb-faq-view">
    <div class="sb-faq-view__badge">
      <Badge
        :value="getStatusDetail(item.status).label"
        :style="getStatusDetail(item.status)"
      />
    </div>
    <h5 class="sb-faq-view__title">
      <div class="sb-faq-view__q">Q</div>
      판매 데이터를 엑셀 파일로 한 번에 내려받으려면 어떻게 하나요?
    </h5>

    <div class="sb-faq-view__text">
      <div class="sb-faq-view__a">A</div>
      <div>
        판매 데이터는
        <NuxtLink to="/"><strong>[매출 관리 > 상세 내역]</strong></NuxtLink>
        메뉴에서 기간 설정을 통해 엑셀 파일로 내려받으실 수 있습니다.<br />
        <ol>
          <li>우측 상단의 '다운로드' 버튼을 클릭하세요.</li>
          <li>원하는 파일 형식을 선택하신 후 저장 버튼을 누르면 완료됩니다.</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStatus } from '@/composables/useStatus';

const { getStatusDetail } = useStatus();

const item = ref({
  status: 'guide',
});
</script>
