<template>
  <Dialog
    :visible="modelValue"
    @update:visible="$emit('update:modelValue', $event)"
    modal
    class="sb-dialog-loading"
  >
    <img
      src="./../assets/images/logo-loading.png"
      alt=""
      class="ico-logo-loading"
    />
    <div class="sb-dialog-loading__text">
      <p>
        거의 다 됐어요!<br />
        조금만 더 기다려 주세요.
      </p>
      <span>
        상품 분석 URL만 입력하면<br />
        빠르게 분석해드려요.
      </span>
    </div>
  </Dialog>
</template>

<script setup>
// 부모로부터 v-model로 전달받는 값 정의
defineProps({
  modelValue: Boolean,
});

// 상태 업데이트를 위한 emit 정의
defineEmits(['update:modelValue']);
</script>
