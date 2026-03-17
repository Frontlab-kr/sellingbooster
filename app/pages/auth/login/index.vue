<template>
  <div class="sb-login">
    <div class="sb-login__title">
      <h4>
        <strong>성공을 향한 가벼운 첫걸음</strong><br />
        지금 바로 시작하세요.
      </h4>
    </div>
    <div class="sb-login-form">
      <div class="sb-login-form__input">
        <InputText placeholder="아이디" />
        <Password toggleMask :feedback="false" placeholder="비밀번호" />
      </div>
      <div class="sb-checkbox">
        <div class="sb-checkbox-item">
          <Checkbox inputId="idSave" v-model="isSaveId" :binary="true" />
          <label for="idSave"> 아이디 저장 </label>
        </div>
      </div>
      <Button size="large" label="로그인" />
      <div class="sb-login-form__link">
        <NuxtLink to="/">계정 찾기</NuxtLink>
        <hr />
        <NuxtLink to="/">회원가입</NuxtLink>
      </div>
      <div class="sb-login-form__social">
        <Button rounded>
          <template #icon>
            <img
              src="./../../../assets/icons/etc/naver.png"
              class="ico-etc-naver"
              alt="네이버"
            />
          </template>
        </Button>
        <Button rounded>
          <template #icon>
            <img
              src="./../../../assets/icons/etc/kakaotalk.png"
              class="ico-etc-kakaotalk"
              alt="카카오톡"
            />
          </template>
        </Button>
        <Button rounded>
          <template #icon>
            <img
              src="./../../../assets/icons/etc/google.png"
              class="ico-etc-google"
              alt="구글"
            />
          </template>
        </Button>
        <Button rounded>
          <template #icon>
            <img
              src="./../../../assets/icons/etc/apple.png"
              class="ico-etc-apple"
              alt="애플"
            />
          </template>
        </Button>
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
});

import { ref } from 'vue';

const isSaveId = ref(false);
</script>
