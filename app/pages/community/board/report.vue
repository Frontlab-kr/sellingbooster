<template>
  <div class="sb-board-report">
    <Select
      v-model="selectedValue"
      :options="selectedOption"
      optionLabel="name"
      placeholder="신고 사유를 선택해주세요."
      class="w-full"
    />
    <SbTextarea
      v-model="textarea01"
      maxlength="1000"
      placeholder="기타 사유는 필수 입력 항목입니다."
    />
    <div class="sb-board-report__button">
      <Button
        severity="primary"
        label="신고하기"
        size="large"
        :disabled="!textarea01.trim()"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref();
const selectedOption = ref([
  { name: '스팸홍보/도배글입니다.' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);

const textarea01 = ref('');
</script>
