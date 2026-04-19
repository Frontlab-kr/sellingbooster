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
          <img
            src="./../../../assets/icons/system/naver.svg"
            class="ico-etc-naver"
            alt="네이버"
          />
          <span class="p-button-label">네이버로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__kakao">
          <img
            src="./../../../assets/icons/system/kakaotalk.svg"
            class="ico-etc-kakaotalk"
            alt="카카오톡"
          />
          <span class="p-button-label">카카오로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__google">
          <img
            src="./../../../assets/icons/system/google.svg"
            class="ico-etc-google"
            alt="구글"
          />
          <span class="p-button-label">Google로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__apple">
          <img
            src="./../../../assets/icons/system/apple.svg"
            class="ico-etc-apple"
            alt="애플"
          />
          <span class="p-button-label">Apple로 로그인</span>
        </Button>
        <Button size="large" class="sb-login-form-sns__sellpick">
          <img
            src="./../../../assets/icons/system/sellpick.svg"
            class="ico-etc-sellpick"
            alt="셀픽"
          />
          <span class="p-button-label">셀픽으로 로그인</span>
        </Button>
      </div>
      <div class="sb-login-form-link">
        <NuxtLink to="/">
          <Button variant="text" label="회원 가입 하기" />
        </NuxtLink>
      </div>
      <div class="sb-login-form__text">
        로그인 / 회원 가입에 문제가 있을 경우 <br class="mo" />
        <NuxtLink to="/">FAQ</NuxtLink>에서 궁금하신 사항을 확인해주세요.
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
  layoutClass: 'sb--login',
});
</script>
