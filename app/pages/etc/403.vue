<template>
  <div class="sb-error">
    <div class="sb-error__inner">
      <div class="sb-error__number">403</div>
      <div class="sb-error__icon">
        <IconEtcError403 class="ico-etc-error403" />
      </div>
      <div class="sb-error__title">Forbidden</div>
      <div class="sb-error__text">
        요청하신 페이지에서 접근이 거부되었습니다.<br />
        입력하신 URL 또는 링크가 정확한지<br class="mo" />
        다시 한번 확인해 주세요.
      </div>
      <div class="sb-error__button">
        <NuxtLink to="/">
          <Button severity="contrast" outlined label="이전 페이지">
            <template #icon>
              <IconArrowLeft class="ico-arrow-left" />
            </template>
          </Button>
        </NuxtLink>
        <NuxtLink to="/">
          <Button
            severity="contrast"
            outlined
            label="메인페이지"
            class="ico-right"
          >
            <template #icon>
              <IconArrowRight class="ico-arrow-right" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconEtcError403 from '@/assets/icons/etc/error-403.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';

definePageMeta({
  layout: 'error',
});
</script>
