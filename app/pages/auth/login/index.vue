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
        <Button rounded severity="white">
          <template #icon>
            <IconEtcnaver class="ico-etc-naver" />
          </template>
        </Button>
        <Button rounded severity="white">
          <template #icon>
            <IconEtckakaotalk class="ico-etc-kakaotalk" />
          </template>
        </Button>
        <Button rounded severity="white">
          <template #icon>
            <IconEtcgoogle class="ico-etc-google" />
          </template>
        </Button>
        <Button rounded severity="white">
          <template #icon>
            <IconEtcapple class="ico-etc-apple" />
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
import IconEtcnaver from '@/assets/icons/etc/naver.svg?component';
import IconEtckakaotalk from '@/assets/icons/etc/kakaotalk.svg?component';
import IconEtcgoogle from '@/assets/icons/etc/google.svg?component';
import IconEtcapple from '@/assets/icons/etc/apple.svg?component';

const isSaveId = ref(false);
</script>
