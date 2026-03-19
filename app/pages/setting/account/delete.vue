<template>
  <div class="sb-auth">
    <h5 class="sb-auth__title">
      그동안 함께해 주셔서 감사했어요.<br />
      필요할 땐 언제든 다시 만나요.
    </h5>
    <div class="sb-auth-form">
      <div class="sb-auth-form-item">
        <label>이메일<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <SbInput
            placeholder="이메일 주소를 입력해주세요."
            :model-value="'email@mail.com'"
            disabled
          />
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
      </div>
      <div class="sb-auth-form-item">
        <label>비밀번호 확인<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <Password
            toggleMask
            :feedback="false"
            placeholder="비밀번호를 한 번 더 입력해 주세요."
            invalid="false"
          />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="error" variant="simple"
            >비밀번호가 서로 다릅니다. 다시 입력해 주세요.</Message
          >
        </div>
      </div>
      <div class="sb-auth-form-item">
        <div class="sb-auth-survey">
          <div class="sb-auth-survey__title">
            사이트를 이용하시는데 불편하신 점이 있으셨나요?<br />
            더 나은 서비스를 위해 탈퇴 사유를 알려주시면 서비스 개선에 적극
            반영하겠습니다.
          </div>
          <div class="sb-checkbox">
            <div
              v-for="option in concernOptions"
              :key="option.id"
              class="sb-checkbox-item"
            >
              <Checkbox
                v-model="selectedConcerns"
                :inputId="option.id"
                :value="option.label"
              />
              <label :for="option.id">{{ option.label }}</label>
            </div>

            <div v-if="isCustomInputVisible">
              <SbInput
                v-model="customConcernText"
                placeholder="추가로 남기고 싶은 내용을 편하게 남겨주세요."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <div class="sb-caution">
          <ul>
            <li>탈퇴 시 일부 정보는 복구가 어렵습니다.</li>
            <li>탈퇴 최소는 불가능 합니다.</li>
            <li>
              언제든지 재 가입이 가능합니다.<br />
              (기존 가입하셨던 이메일 주소로 재가입은 불가능 합니다.)
            </li>
          </ul>
        </div>
        <div class="sb-auth-checkbox">
          <div class="sb-checkbox">
            <div class="sb-checkbox-item">
              <Checkbox
                inputId="memberDelete"
                v-model="isMemberDelete"
                :binary="true"
              />
              <label for="memberDelete">
                유의 사항을 모두 확인 하였습니다.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sb-auth__button">
      <Button label="취소" severity="contrast" size="large" outlined />
      <Button label="탈퇴하기" severity="primary" size="large" disabled />
    </div>
  </div>
</template>

<script setup>
const isMemberDelete = ref(false);

// 체크박스 옵션 데이터
const concernOptions = [
  { id: 'opt-end', label: '셀러 활동 종료' },
  { id: 'opt-tech', label: '기술적 문제' },
  { id: 'opt-quality', label: '서비스 퀄리티 낮음' },
  { id: 'opt-benefit', label: '이용 혜택이 부족함' },
  { id: 'opt-business', label: '비지니스 활용도 낮음' },
  { id: 'opt-alt', label: '대체 서비스 찾음' },
  { id: 'opt-privacy', label: '개인정보 제공을 원치 않음' },
  { id: 'opt-etc', label: '(직접 입력)기타' },
];

const selectedConcerns = ref([]);
const customConcernText = ref('');

const isCustomInputVisible = computed(() => {
  return selectedConcerns.value.includes('(직접 입력)기타');
});
</script>
