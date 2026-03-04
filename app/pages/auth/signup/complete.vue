<template>
  <div class="sb-auth-complete">
    <div class="sb-auth-complete__icon">
      <Icon64checkCircle class="ico-64-check-circle" />
    </div>
    <div class="sb-auth-complete__title">
      <h4>
        <strong>반가워요, 셀러님</strong><br />
        설레는 시작을 도와드릴게요
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

import { reactive, computed } from 'vue';

import Icon64checkCircle from '@/assets/icons/64/check-circle.svg?component';

// 1. 개별 체크박스 상태 관리
const agreements = reactive({
  agree01: false,
  agree02: false,
  agree03: false,
});

// 2. 전체 동의 계산 및 조작 로직
const allSelected = computed({
  // 모든 항목이 true일 때만 전체 동의 체크박스가 체크됨
  get() {
    return Object.values(agreements).every((status) => status === true);
  },
  // 전체 동의 체크박스를 클릭했을 때 모든 항목을 해당 값(true/false)으로 변경
  set(value) {
    agreements.agree01 = value;
    agreements.agree02 = value;
    agreements.agree03 = value;
  },
});
</script>
