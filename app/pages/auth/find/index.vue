<template>
  <div class="sb-auth">
    <h5 class="sb-auth__title">
      비밀번호를 새로 만들게요<br />
      안전하게 변경하고 바로 시작하세요
    </h5>
    <div class="sb-auth-form">
      <div class="sb-auth-form-item">
        <label>이메일<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <InputText placeholder="이메일 주소를 입력해주세요." />
          <Button label="인증 코드 발송" severity="primary" outlined disabled />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="neutral" variant="simple"
            >인증번호를 보냈어요. 메일함을 확인해 주세요.</Message
          >
        </div>
        <div class="sb-auth-form-item__input">
          <div class="sb-input">
            <InputNumber placeholder="인증코드 입력를 입력해주세요." />
            <div class="sb-input__time">03:59</div>
          </div>
          <Button label="코드 인증" severity="primary" outlined disabled />
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>비밀번호<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <Password
            toggleMask
            :feedback="false"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="neutral" variant="simple"
            >영문, 숫자, 특수문자를 혼합하여 8~16자로 사용해 주세요.</Message
          >
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>비밀번호 확인<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <Password
            toggleMask
            :feedback="false"
            placeholder="비밀번호를 한 번 더 입력해 주세요."
          />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="success" variant="simple"
            >비밀번호가 서로 일치해요.</Message
          >
        </div>
      </div>
    </div>

    <div class="sb-auth__button">
      <Button label="비밀번호 변경" severity="primary" size="large" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
});
</script>
