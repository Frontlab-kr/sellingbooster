<template>
  <div class="sb-auth">
    <h5 class="sb-auth__title">
      셀러가 되는 첫 순간,<br />
      셀링부스터와 함께라면 든든합니다.
    </h5>
    <div class="sb-caution">
      <p>[카카오톡]간편 가입을 위해 필수 약관에 동의해 주세요.</p>
      <p>[이름]님의 소중한 정보는 안전하게 관리됩니다.</p>
      <ul>
        <li>
          <strong>이메일 주소:test@test.com</strong>
        </li>
      </ul>
    </div>
    <div class="sb-auth-form">
      <div class="sb-auth-form-item">
        <label>휴대폰 번호<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <SbInput placeholder="휴대폰 번호를 입력해주세요." phone />
          <Button label="인증코드 발송" severity="primary" outlined />
        </div>
        <div class="sb-auth-form-item__input">
          <SbInput
            v-model="authCode"
            placeholder="인증번호를 입력해주세요."
            time="03:59"
            number
          />
          <Button label="코드 인증" severity="primary" outlined />
        </div>
        <div class="sb-auth-form-item__message">
          <Message size="small" severity="neutral" variant="simple">
            코드가 만료되었거나 문자가 오지 않을 경우 재 발송을 해주세요.<br />
            통신사에 따라 문자가 수신되기까지 다소 시간이 걸릴 수 있습니다.
          </Message>
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
    <div class="sb-auth__button">
      <Button label="가입하기" severity="primary" size="large" disabled />
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
definePageMeta({
  layout: 'auth',
});

import { reactive, computed } from 'vue';
import Policy from '@/pages/auth/signup/policy.vue';
import Policy02 from '@/pages/auth/signup/policy02.vue';
import Policy03 from '@/pages/auth/signup/policy03.vue';

const authCode = ref('');

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
</script>
