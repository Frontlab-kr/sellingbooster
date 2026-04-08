<template>
  <div class="sb-error">
    <div class="sb-error__inner">
      <div class="sb-error__number">500</div>
      <div class="sb-error__icon">
        <IconEtcError500 class="ico-etc-error500" />
      </div>
      <div class="sb-error__title">Error</div>
      <div class="sb-error__text">
        요청하신 페이지에<br class="mo" />
        오류가 발생하였습니다.
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
import IconEtcError500 from '@/assets/icons/etc/error-500.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';

definePageMeta({
  layout: 'error',
});
</script>
