<template>
  <div class="sb-auth-complete">
    <div class="sb-auth-complete__icon">
      <IconIllustrationCheckCircle class="ico-illustration-check-circle" />
    </div>
    <div class="sb-auth-complete__title">
      <h4>
        <strong>반가워요, 셀러님</strong><br />
        설레는 시작을 도와드릴게요.
      </h4>
    </div>
    <div class="sb-auth-complete__text">
      <p>
        <strong>email@mail.com </strong> 님 환영합니다.<br />
        이제 셀러로서의 첫 걸음을 시작해보세요.<br />
        셀링부스터가 처음부터 끝까지 함께할게요.<br />
      </p>
      <p>
        정보를 입력하고<br class="mo" />
        나만을 위한 맞춤 서비스를 시작해 보세요
      </p>
    </div>
    <div class="sb-auth-complete__button">
      <Button
        label="다음에 하고 로그인"
        size="large"
        severity="contrast"
        outlined
      />
      <Button label="셀러 정보 등록하기" size="large" />
    </div>
    <div class="sb-caution">
      <ul>
        <li>
          셀러 정보 등록은 [환경 설정 > 셀러 정보 관리 >
          <NuxtLink to="/">셀러 정보</NuxtLink>] 메뉴를 통해서도 등록이
          가능합니다.
        </li>
        <li>
          궁금하신 사항은 <NuxtLink to="/">FAQ</NuxtLink>에서 확인해주세요.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
});
import IconIllustrationCheckCircle from '@/assets/icons/illustration/check-circle.svg?component';
</script>
