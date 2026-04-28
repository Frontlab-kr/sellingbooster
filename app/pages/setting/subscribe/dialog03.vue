<template>
  <div class="p-dialog-inner">
    <h6 class="p-dialog-title">결제 수단 등록</h6>
    <div class="sb-dialog-payment">
      <div class="sb-tab">
        <Button
          label="카드"
          variant="text"
          :class="{ active: activeTab === 0 }"
          @click="activeTab = 0"
        />
        <Button
          label="계좌"
          variant="text"
          :class="{ active: activeTab === 1 }"
          @click="activeTab = 1"
        />
      </div>
      <div v-if="activeTab === 0">
        <div class="sb-dialog-payment-form">
          <div class="sb-dialog-payment-form-col">
            <div class="sb-dialog-payment-form-item w-full">
              <label>카드번호</label>
              <div class="sb-dialog-payment-form-item__input">
                <SbInput
                  v-model="cardInfo.number"
                  placeholder="0000-0000-0000-0000"
                  mask="9999-9999-9999-9999"
                  class="w-full max-w-full"
                  number
                />
                <div class="sb-checkbox-item">
                  <Checkbox
                    v-model="isDefault"
                    inputId="check-default-payment"
                    :binary="true"
                  />
                  <label for="check-default-payment">대표 결제 수단</label>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-dialog-payment-form-col">
            <div class="sb-dialog-payment-form-item">
              <label>유효기간</label>
              <div class="sb-dialog-payment-form-item__input">
                <SbInput
                  v-model="cardExpiry"
                  placeholder="MM/YY"
                  class="w-full"
                  mask="99/99"
                />
              </div>
            </div>
            <div class="sb-dialog-payment-form-item">
              <label>CVC</label>
              <div class="sb-dialog-payment-form-item__input">
                <Password
                  placeholder="카드 뒷면 3자리 숫자"
                  class="w-full"
                  :inputProps="{ maxlength: 3 }"
                  :feedback="false"
                  toggleMask
                />
              </div>
            </div>
          </div>
          <div class="sb-dialog-payment-form-col">
            <div class="sb-dialog-payment-form-item">
              <label>비밀번호</label>
              <div class="sb-dialog-payment-form-item__input">
                <Password
                  placeholder="앞 2자리"
                  class="w-full"
                  :inputProps="{ maxlength: 2 }"
                  :feedback="false"
                  toggleMask
                />
              </div>
            </div>
          </div>
        </div>
        <div class="sb-dialog-payment-form__button">
          <div class="pc">
            <Button severity="primary" label="등록" />
          </div>
          <div class="mo">
            <Button severity="primary" label="등록" size="large" />
          </div>
        </div>
      </div>
      <div v-if="activeTab === 1">
        <div class="sb-dialog-payment-form">
          <div class="sb-dialog-payment-form-col">
            <div class="sb-dialog-payment-form-item w-full">
              <div class="sb-dialog-payment-form-item__input">
                <Select
                  v-model="selectedValue"
                  :options="bankOptions"
                  optionLabel="name"
                  placeholder="은행 선택"
                  style="min-width: 160px"
                />
                <SbInput
                  placeholder="계좌번호(숫자만 입력) / 가상ㆍ적금ㆍ펀드 계좌 불가"
                  class="w-full max-w-full"
                  number
                />
                <div class="sb-checkbox-item">
                  <Checkbox
                    v-model="consentMethods"
                    inputId="method-talk"
                    value="talk"
                  />
                  <label for="method-talk"> 대표 결제 수단 </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-dialog-payment-form__button">
          <div class="pc">
            <Button severity="primary" label="인증" />
          </div>
          <div class="mo">
            <Button severity="primary" label="인증" size="large" />
          </div>
        </div>
        <div class="sb-caution">
          <div class="sb-caution__title">계좌 등록 주의 사항 안내</div>
          <ul>
            <li>본인 명의가 아닌 계좌</li>
            <li>가상계좌/적금/펀드/정기예금 등의 계좌</li>
            <li>휴대폰 번호 등으로 만든 평생 계좌번호</li>
            <li>계좌에 문제가 있는 경우 (예: 지급정지 또는 해약된 경우)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref(0);
const cardInfo = reactive({
  number: '',
  expiry: '',
  cvc: '',
  password: '',
});

//
const selectedValue = ref();
const bankOptions = ref([
  { name: '카카오뱅크' },
  { name: '농협' },
  { name: '국민' },
  { name: '신한' },
  { name: '우리' },
  { name: '기업' },
  { name: '하나' },
  { name: '새마을금고' },
  { name: '우체국' },
  { name: 'SC제일' },
  { name: 'iM뱅크(대구)' },
  { name: '부산' },
  { name: '경남' },
  { name: '광주' },
  { name: '신협' },
  { name: '수협' },
  { name: '한국산업' },
  { name: '전북' },
  { name: '제주' },
  { name: '씨티' },
  { name: '케이뱅크' },
  { name: '토스뱅크' },
]);
</script>
