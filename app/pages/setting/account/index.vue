<template>
  <div class="sb-auth">
    <h5 class="sb-auth__title">
      소중한 개인 정보<br />
      언제든지 수정하고 관리하실 수 있어요.
    </h5>
    <div class="sb-auth-form">
      <div class="sb-auth-form-item">
        <label>아이디</label>
        <div class="sb-auth-form-item__input">
          <SbInput value="User_id" readonly />
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>SNS 계정</label>
        <div class="sb-auth-form-item__input">
          <div class="sb-auth-form-item-sns__input">
            <IconSystemNaver class="ico-system-naver" />
            <SbInput value="네이버" readonly />
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>SNS 계정</label>
        <div class="sb-auth-form-item__input">
          <div class="sb-auth-form-item-sns__input">
            <IconSystemKakaotalk class="ico-system-kakaotalk" />
            <SbInput value="카카오톡" readonly />
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>SNS 계정</label>
        <div class="sb-auth-form-item__input">
          <div class="sb-auth-form-item-sns__input">
            <IconSystemGoogle class="ico-system-google" />
            <SbInput value="구글" readonly />
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>SNS 계정</label>
        <div class="sb-auth-form-item__input">
          <div class="sb-auth-form-item-sns__input">
            <IconSystemApple class="ico-system-apple" />
            <SbInput value="애플" readonly />
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>SNS 계정</label>
        <div class="sb-auth-form-item__input">
          <div class="sb-auth-form-item-sns__input">
            <IconSystemSellpick class="ico-system-sellpick" />
            <SbInput value="셀픽" readonly />
          </div>
        </div>
      </div>

      <div class="sb-auth-form-item">
        <label>알림 이메일</label>
        <div v-if="!isEditingEmail" class="sb-auth-form-item__input">
          <SbInput value="email@mail.com" readonly />
          <Button
            label="변경하기"
            severity="primary"
            outlined
            @click="enableEmailEdit"
          />
        </div>
        <template v-else>
          <div class="sb-auth-form-item__input">
            <SbInput
              placeholder="이메일 주소를 입력해주세요."
              value="user_emil1234@mail.com"
              cancel
              @cancel="disableEmailEdit"
            />
            <Button label="인증하기" severity="primary" outlined />
          </div>
          <div class="sb-auth-form-item__input">
            <SbInput
              placeholder="인증코드를 입력해주세요."
              time="03:59"
              number
            />
            <Button label="코드 인증" severity="primary" outlined disabled />
          </div>
          <div class="sb-auth-form-item__message">
            <Message size="small" severity="neutral" variant="simple"
              >링크가 만료되었거나 메일이 오지 않았을 경우 재인증을
              해주세요.</Message
            >
          </div>
        </template>
      </div>
      <div class="sb-auth-form-item">
        <label>닉네임<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <SbInput :model-value="'몰지각한오렌지주스'" />
          <Button label="추천 변경" severity="primary" outlined />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="neutral" variant="simple"
            >닉네임 변경을 원하시면 [추천 변경 버튼]을 클릭 해주세요.</Message
          >
        </div>
      </div>
    </div>
    <div class="sb-auth-agree">
      <dl>
        <dt>
          <div class="sb-auth-agree-item">
            <div class="sb-checkbox">
              <div class="sb-checkbox-item">
                <Checkbox
                  inputId="agreeAll"
                  v-model="allSelected"
                  :binary="true"
                />
                <label for="agreeAll">
                  <strong>모두 동의합니다.</strong>
                </label>
              </div>
            </div>
          </div>
        </dt>
        <dd>
          <div class="sb-auth-agree-item">
            <div class="sb-checkbox">
              <div class="sb-checkbox-item">
                <Checkbox
                  inputId="agreeCheck01"
                  v-model="agreements.agree01"
                  :binary="true"
                />
                <label for="agreeCheck01">
                  (필수) 개인정보 처리방침 동의
                </label>
              </div>
            </div>
            <Button
              label="보기"
              severity="contrast"
              variant="link"
              @click="dialogPolicy01 = true"
            />
          </div>
          <div class="sb-auth-agree-item">
            <div class="sb-checkbox">
              <div class="sb-checkbox-item">
                <Checkbox
                  inputId="agreeCheck02"
                  v-model="agreements.agree02"
                  :binary="true"
                />
                <label for="agreeCheck02">(필수) 서비스 이용약관 동의 </label>
              </div>
            </div>
            <Button
              label="보기"
              severity="contrast"
              variant="link"
              @click="dialogPolicy02 = true"
            />
          </div>
          <div class="sb-auth-agree-item">
            <div class="sb-checkbox">
              <div class="sb-checkbox-item">
                <Checkbox
                  inputId="agreeCheck03"
                  v-model="agreements.agree03"
                  :binary="true"
                />
                <label for="agreeCheck03"> (선택) 마케팅 수집동의 </label>
              </div>
            </div>
            <Button
              label="보기"
              severity="contrast"
              variant="link"
              @click="dialogPolicy03 = true"
            />
          </div>
        </dd>
      </dl>
    </div>
    <div class="sb-auth-link">
      <NuxtLink to="/setting/account/delete">
        <Button variant="text" label="Text button">
          <span class="p-button-label">회원탈퇴</span>
          <IconArrowAchevronRight class="ico-arrow-achevron-right" />
        </Button>
      </NuxtLink>
    </div>
    <div class="sb-auth__button">
      <Button label="취소" severity="contrast" size="large" outlined />
      <Button label="저장하기" severity="primary" size="large" disabled />
    </div>
  </div>

  <Dialog v-model:visible="dialogPolicy01" modal>
    <Policy />
  </Dialog>
  <Dialog v-model:visible="dialogPolicy02" modal>
    <Policy02 />
  </Dialog>
  <Dialog v-model:visible="dialogPolicy03" modal>
    <Policy03 />
  </Dialog>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Policy from '@/pages/auth/signup/policy.vue';
import Policy02 from '@/pages/auth/signup/policy02.vue';
import Policy03 from '@/pages/auth/signup/policy03.vue';

import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconSystemNaver from '@/assets/icons/system/naver.svg?component';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemGoogle from '@/assets/icons/system/google.svg?component';
import IconSystemApple from '@/assets/icons/system/apple.svg?component';
import IconSystemSellpick from '@/assets/icons/system/sellpick.svg?component';

// 비밀번호 변경 모드 상태 관리
const isChangingPassword = ref(false);

//dialog
const dialogPolicy01 = ref(false);
const dialogPolicy02 = ref(false);
const dialogPolicy03 = ref(false);

const radioNotification = ref('radioNotificationNo');
const selectedServices = ref([]);

const agreements = reactive({
  agree01: false,
  agree02: false,
  agree03: false,
});

const allSelected = computed({
  get() {
    return Object.values(agreements).every((status) => status === true);
  },
  set(value) {
    agreements.agree01 = value;
    agreements.agree02 = value;
    agreements.agree03 = value;
  },
});

//
const isEditingPhone = ref(false);
const enablePhoneEdit = () => {
  isEditingPhone.value = true;
};
const disablePhoneEdit = () => {
  isEditingPhone.value = false;
};

const isEditingEmail = ref(false);
const enableEmailEdit = () => {
  isEditingEmail.value = true;
};
const disableEmailEdit = () => {
  isEditingEmail.value = false;
};
</script>
