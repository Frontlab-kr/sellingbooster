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
        <InputText placeholder="이메일" />
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
            <Icon48naver class="ico-48-naver" />
          </template>
        </Button>
        <Button rounded severity="white">
          <template #icon>
            <Icon48kakaotalk class="ico-48-kakaotalk" />
          </template>
        </Button>
        <Button rounded severity="white">
          <template #icon>
            <Icon48google class="ico-48-google" />
          </template>
        </Button>
        <Button rounded severity="white">
          <template #icon>
            <Icon48apple class="ico-48-apple" />
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
import Icon48naver from '@/assets/icons/48/naver.svg?component';
import Icon48kakaotalk from '@/assets/icons/48/kakaotalk.svg?component';
import Icon48google from '@/assets/icons/48/google.svg?component';
import Icon48apple from '@/assets/icons/48/apple.svg?component';

const isSaveId = ref(false);
</script>
