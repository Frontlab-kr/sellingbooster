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
                <Button variant="text" class="active">
                  <IconSystemCheckS class="ico-system-check-s" />
                  <span class="p-button-label">대표 결제 수단</span>
                </Button>
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
                <Button variant="text">
                  <IconSystemCheckS class="ico-system-check-s" />
                  <span class="p-button-label">대표 결제 수단</span>
                </Button>
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
                <Button variant="text">
                  <IconSystemCheckS class="ico-system-check-s" />
                  <span class="p-button-label">대표 결제 수단</span>
                </Button>
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
                <Button variant="text">
                  <IconSystemCheckS class="ico-system-check-s" />
                  <span class="p-button-label">대표 결제 수단</span>
                </Button>
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
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';

const primaryPayment = ref('card_shinhan');
</script>
