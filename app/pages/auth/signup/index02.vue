<template>
  <div class="sb-login">
    <div class="sb-login__title">
      <h4>
        <strong>성공을 향한 가벼운 첫걸음</strong><br />
        지금 바로 시작하세요.
      </h4>
    </div>
    <div class="sb-login-form">
      <div class="sb-login-form-sns">
        <Button size="large" class="sb-login-form-sns__naver">
          <IconSystemNaver class="ico-system-naver" />
          <span class="p-button-label">네이버로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__kakao">
          <IconSystemKakaotalk class="ico-system-kakaotalk" />
          <span class="p-button-label">카카오로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__google">
          <IconSystemGoogle class="ico-system-google" />
          <span class="p-button-label">Google로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__apple">
          <IconSystemApple class="ico-system-apple" />
          <span class="p-button-label">Apple로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__sellpick">
          <IconSystemSellpick class="ico-system-sellpick" />
          <span class="p-button-label">셀픽으로 로그인</span>
        </Button>
      </div>
      <div class="sb-login-form-link">
        <p>이미 계정이 있으신가요?</p>
        <NuxtLink to="/">
          <Button variant="text" label="로그인 하기" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSystemNaver from '@/assets/icons/system/naver.svg?component';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemGoogle from '@/assets/icons/system/google.svg?component';
import IconSystemApple from '@/assets/icons/system/apple.svg?component';
import IconSystemSellpick from '@/assets/icons/system/sellpick.svg?component';
definePageMeta({
  layout: 'auth',
  layoutClass: 'sb--login',
});
</script>
