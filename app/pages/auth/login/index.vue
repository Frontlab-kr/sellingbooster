<template>
  <div class="sb-login">
    <h4 class="sb-login__title">
      <strong>성공을 향한 가벼운 첫걸음</strong>
      지금 바로 시작하세요
    </h4>
    <div class="sb-login-form">
      <InputText />
      <Password toggleMask />
      <div class="sb-checkbox">
        <div class="sb-checkbox-item">
          <Checkbox inputId="idSave" />
          <label for="idSave"> 아이디 저장 </label>
        </div>
      </div>
      <Button label="로그인" />
      <div class="sb-login-form__link">
        <NuxtLink to="/">계정 찾기</NuxtLink>
        <NuxtLink to="/">회원가입</NuxtLink>
      </div>
      <div class="sb-login-form__social"></div>
      <div class="sb-login-form__text">
        로그인 / 회원 가입에 문제가 있을 경우
        <NuxtLink to="/">CS센터</NuxtLink>로 문의 해주세요.
      </div>
    </div>
  </div>
</template>
