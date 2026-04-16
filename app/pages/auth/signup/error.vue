<template>
  <div class="sb-auth">
    <h5 class="sb-auth__title">
      셀러가 되는 첫 순간,<br />
      셀링부스터와 함께라면 든든합니다.
    </h5>
    <div class="sb-auth-form">
      <div class="sb-auth-form-item">
        <label>이메일<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <SbInput
            placeholder="이메일 주소를 입력해주세요."
            value="email@mail.com"
          />
          <Button label="메일 재발송" severity="primary" outlined disabled />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="neutral" variant="simple"
            >인증번호를 보냈어요. 메일함을 확인해 주세요.</Message
          >
        </div>
        <div class="sb-auth-form-item__input">
          <SbInput placeholder="인증코드를 입력해주세요." time="03:00" number />
          <Button label="인증 완료" severity="primary" outlined disabled />
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>비밀번호<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <Password
            toggleMask
            :feedback="false"
            placeholder="비밀번호를 입력해주세요."
            invalid="false"
          />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="error" variant="simple"
            >8~16자 영문, 숫자를 조합해 주세요.</Message
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
        <label>알림 수신 동의<strong>*</strong></label>
        <div class="sb-radio">
          <div class="sb-radio-item">
            <RadioButton
              v-model="radioNotification"
              inputId="radioNotificationNo"
              name="radioNotification"
              value="radioNotificationNo"
            />
            <label for="radioNotificationNo">지금은 받지 않을게요.</label>
          </div>
          <div class="sb-radio-item">
            <RadioButton
              v-model="radioNotification"
              inputId="radioNotificationYes"
              name="radioNotification"
              value="radioNotificationYes"
            />
            <label for="radioNotificationYes">알림 받을게요.</label>
          </div>
        </div>
        <div
          class="sb-auth-form-item__checkbox"
          v-if="radioNotification === 'radioNotificationYes'"
        >
          <div class="sb-checkbox">
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-mail"
                value="mail"
              />
              <label for="check-mail"> 메일 </label>
            </div>
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-sms"
                value="sms"
              />
              <label for="check-sms"> 문자 </label>
            </div>
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-kakao"
                value="kakao"
              />
              <label for="check-kakao"> 알림톡 </label>
            </div>
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-push"
                value="push"
              />
              <label for="check-push"> 앱푸시 </label>
            </div>
          </div>
        </div>
        <div class="sb-auth-form-item__text">
          <Message size="small" severity="neutral" variant="simple"
            >※ 중요 알림 사항은 수신 동의 여부 상관 없이 발송 됩니다.</Message
          >
          <Message size="small" severity="neutral" variant="simple"
            >※ 알림 수신 여부는 [환경설정 >
            <NuxtLink to="/">알림 설정</NuxtLink>] 메뉴에서도 변경
            가능합니다.</Message
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
              @click="dialogPolicy = true"
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
              @click="dialogPolicy = true"
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
              @click="dialogPolicy = true"
            />
          </div>
        </dd>
      </dl>
    </div>
    <div class="sb-auth__button">
      <Button label="가입하기" severity="primary" size="large" />
    </div>
  </div>

  <Dialog v-model:visible="dialogPolicy" modal>
    <Policy />
  </Dialog>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
});

import { reactive, computed } from 'vue';
import Policy from '@/pages/auth/signup/policy.vue';

//dialog
const dialogPolicy = ref(false);

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
</script>
