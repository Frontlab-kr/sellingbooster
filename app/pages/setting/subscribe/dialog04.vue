<template>
  <div class="p-dialog-inner">
    <h6 class="p-dialog-title">결제 수단 관리</h6>
    <div class="sb-dialog-payment">
      <div class="sb-dialog-payment-section">
        <div class="sb-dialog-payment-section-item">
          <div class="sb-dialog-payment-section__title">
            카드 <strong class="text-primary">2</strong>건
          </div>
          <div class="sb-dialog-payment-list">
            <div class="sb-dialog-payment-list-item">
              <div class="sb-dialog-payment-list-item-start">
                <div class="sb-dialog-payment-list-item__icon">
                  <img
                    src="./../../../assets/icons/card/shinhan.png"
                    alt=""
                    style="width: 26px"
                  />
                </div>
                <dl>
                  <dt>
                    <strong>신한카드</strong>
                  </dt>
                  <dd>1234-****-****-6789</dd>
                </dl>
              </div>
              <div class="sb-dialog-payment-list-item-end">
                <div class="sb-radio">
                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="primaryPayment"
                      inputId="pay_card_shinhan"
                      name="primaryPayment"
                      value="card_shinhan"
                    />
                    <label for="pay_card_shinhan">대표 결제 수단</label>
                  </div>
                </div>
                <Button variant="text">
                  <template #icon>
                    <IconSystemTrash class="ico-system-trash" />
                  </template>
                </Button>
              </div>
            </div>
            <div class="sb-dialog-payment-list-item">
              <div class="sb-dialog-payment-list-item-start">
                <div class="sb-dialog-payment-list-item__icon">
                  <img
                    src="./../../../assets/icons/card/hyundai.png"
                    alt=""
                    style="width: 31px"
                  />
                </div>
                <dl>
                  <dt>
                    <strong>현대카드</strong>
                  </dt>
                  <dd>1234-****-****-6789</dd>
                </dl>
              </div>
              <div class="sb-dialog-payment-list-item-end">
                <div class="sb-radio">
                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="primaryPayment"
                      inputId="pay_card_hyundai"
                      name="primaryPayment"
                      value="card_hyundai"
                    />
                    <label for="pay_card_hyundai">대표 결제 수단</label>
                  </div>
                </div>
                <Button variant="text">
                  <template #icon>
                    <IconSystemTrash class="ico-system-trash" />
                  </template>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-dialog-payment-section-item">
          <div class="sb-dialog-payment-section__title">
            계좌 <strong class="text-primary">2</strong>건
          </div>
          <div class="sb-dialog-payment-list sb-dialog-payment-list--bank">
            <div class="sb-dialog-payment-list-item">
              <div class="sb-dialog-payment-list-item-start">
                <div class="sb-dialog-payment-list-item__icon">
                  <img
                    src="./../../../assets/icons/card/kakaobank.png"
                    alt=""
                    style="width: 15px"
                  />
                </div>
                <dl>
                  <dt>
                    <strong>카카오뱅크</strong>
                  </dt>
                  <dd>1234-****-****-6789</dd>
                </dl>
              </div>
              <div class="sb-dialog-payment-list-item-end">
                <div class="sb-radio">
                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="primaryPayment"
                      inputId="pay_bank_kakao"
                      name="primaryPayment"
                      value="bank_kakao"
                    />
                    <label for="pay_bank_kakao">대표 결제 수단</label>
                  </div>
                </div>
                <Button variant="text">
                  <template #icon>
                    <IconSystemTrash class="ico-system-trash" />
                  </template>
                </Button>
              </div>
            </div>
            <div class="sb-dialog-payment-list-item">
              <div class="sb-dialog-payment-list-item-start">
                <div class="sb-dialog-payment-list-item__icon">
                  <img
                    src="./../../../assets/icons/card/shinhan.png"
                    alt=""
                    style="width: 26px"
                  />
                </div>
                <dl>
                  <dt>
                    <strong>신한은행</strong>
                  </dt>
                  <dd>1234-****-****-6789</dd>
                </dl>
              </div>
              <div class="sb-dialog-payment-list-item-end">
                <div class="sb-radio">
                  <div class="sb-radio-item">
                    <RadioButton
                      v-model="primaryPayment"
                      inputId="pay_bank_shinhan"
                      name="primaryPayment"
                      value="bank_shinhan"
                    />
                    <label for="pay_bank_shinhan">대표 결제 수단</label>
                  </div>
                </div>
                <Button variant="text">
                  <template #icon>
                    <IconSystemTrash class="ico-system-trash" />
                  </template>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-dialog-payment__button">
        <div class="pc">
          <Button severity="primary" label="결제 수단 추가 등록" />
        </div>
        <div class="mo">
          <Button severity="primary" label="결제 수단 추가 등록" size="large" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

const primaryPayment = ref('card_shinhan');
</script>
