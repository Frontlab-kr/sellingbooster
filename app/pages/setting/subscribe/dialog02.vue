<template>
  <div class="p-dialog-inner">
    <h6 class="p-dialog-title">요금제 안내</h6>
    <div class="sb-dialog-payment-plan">
      <div class="sb-dialog-payment-plan-item">
        <div class="sb-dialog-payment-plan-item__inner">
          <div class="sb-dialog-payment-plan-item__title">
            <h6>무료 플랜</h6>
          </div>
          <div class="sb-dialog-payment-plan-item__price">
            <span>월</span>
            <h4>0원</h4>
          </div>
          <div class="sb-dialog-payment-plan-item__text">
            <ul>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>무료 플랜에 관련된 혜택1</p>
              </li>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>무료 플랜에 관련된 혜택2</p>
              </li>
            </ul>
          </div>
          <div class="sb-dialog-payment-plan-item__button">
            <div class="pc">
              <Button label="요금제 선택" severity="primary" />
            </div>
            <div class="mo">
              <Button label="요금제 선택" severity="primary" size="large" />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-dialog-payment-plan-item">
        <div class="sb-dialog-payment-plan-item__inner">
          <div class="sb-dialog-payment-plan-item__title">
            <h6>Pro 플랜</h6>
            <Badge value="가장 많이 선택해요" severity="secondary"></Badge>
          </div>
          <div class="sb-dialog-payment-plan-item__price">
            <span>월</span>
            <h4>29,000원</h4>
          </div>
          <div class="sb-dialog-payment-plan-item__text">
            <ul>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>Pro 플랜에 관련된 모든 혜택</p>
              </li>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>Pro 플랜에 관련된 모든 혜택</p>
              </li>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>Pro 플랜에 관련된 모든 혜택</p>
              </li>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>Pro 플랜에 관련된 모든 혜택</p>
              </li>
              <li>
                <IconSystemCheckS class="ico-system-check-s" />
                <p>Pro 플랜에 관련된 모든 혜택</p>
              </li>
            </ul>
          </div>
          <div class="sb-dialog-payment-plan-item__button">
            <div class="pc">
              <Button label="요금제 선택" severity="primary" />
            </div>
            <div class="mo">
              <Button label="요금제 선택" severity="primary" size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';
</script>
