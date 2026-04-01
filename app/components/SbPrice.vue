<template>
  <div class="sb-price">
    <div class="sb-price-head">
      <div class="sb-price-head-form">
        <div class="sb-price-head-form-item">
          <dl>
            <dt>현재가</dt>
            <dd>
              <div class="sb-price-head-form-item__text">
                <p>{{ priceCurrent.toLocaleString() }}원</p>
                <Badge :value="badgeText" :severity="badgeSeverity" />
              </div>
            </dd>
          </dl>
        </div>
        <div class="sb-price-head-form-item">
          <dl>
            <dt>추천가</dt>
            <dd>
              <div class="sb-price-head-form-item__input">
                <SbInput
                  v-model="priceRecommended"
                  type="number"
                  @update:modelValue="handlePriceRecommendedChange"
                />
                <span class="unit">원</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="sb-price-head__button">
        <Button
          severity="primary"
          outlined
          size="small"
          label="추천가 자동 적용"
          @click="resetPriceRecommended"
        />
        <Button
          severity="contrast"
          outlined
          size="small"
          label="내가 직접 조정"
        />
      </div>
    </div>

    <div class="sb-price-slider">
      <Slider
        v-model="priceRecommended"
        :min="priceMin"
        :max="priceMax"
        :step="100"
      />
      <div class="sb-price-slider-bg__slider"></div>
      <div
        class="sb-price-slider-bg__average"
        :style="{ width: priceBgWidth + '%' }"
      ></div>
      <div
        class="sb-price-slider-bg__current"
        :style="{
          width: priceCurrentPercent + '%',
        }"
      ></div>

      <div
        class="sb-price-slider__recommended"
        :style="{
          left: priceRecommendedPercent + '%',
        }"
      >
        추천가 {{ priceRecommended.toLocaleString() }}원
      </div>
      <div class="sb-price-slider__label">
        <p>최저<br />{{ priceMin.toLocaleString() }}원</p>

        <div
          class="sb-price-slider__current"
          :style="{
            left: priceCurrentPercent + '%',
          }"
        >
          현재가 {{ priceCurrent.toLocaleString() }}원
        </div>

        <div
          class="sb-price-slider__average"
          :style="{ left: priceAveragePercent + '%' }"
        >
          <div class="marker-text">
            평균가<br />
            {{ priceAverage.toLocaleString() }}원
          </div>
        </div>
        <p>최대<br />{{ priceMax.toLocaleString() }}원</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import Slider from 'primevue/slider';
import Badge from 'primevue/badge';
import Button from 'primevue/button';

const props = defineProps({
  priceMin: { type: Number, default: 0 },
  priceMax: { type: Number, default: 25000 },
  priceCurrent: { type: Number, default: 16500 },
  priceInitialRecommended: { type: Number, default: 14900 },
  priceAverage: { type: Number, default: 17800 },
});

// 슬라이더 조작 값 = 추천가
const priceRecommended = ref(props.priceInitialRecommended);

// 공통 위치 계산 함수
const calculatePosition = (value) => {
  if (props.priceMax <= props.priceMin) return 50;
  const percent =
    ((value - props.priceMin) / (props.priceMax - props.priceMin)) * 100;
  return Math.max(0, Math.min(100, percent));
};

// 실시간 위치 계산 (추천가 포함 모두 계산)
const priceRecommendedPercent = computed(() =>
  calculatePosition(priceRecommended.value),
);
const priceCurrentPercent = computed(() =>
  calculatePosition(props.priceCurrent),
);
const priceAveragePercent = computed(() =>
  calculatePosition(props.priceAverage),
);

const priceBgWidth = computed(() => {
  return 100 - calculatePosition(props.priceAverage);
});

// 배지 및 핸들러 로직
const badgeText = computed(() => {
  if (props.priceCurrent <= priceRecommended.value * 0.95) return '매우 좋음';
  if (props.priceCurrent <= priceRecommended.value * 1.05) return '보통';
  return '매우 나쁨';
});

const badgeSeverity = computed(() => {
  if (props.priceCurrent <= priceRecommended.value * 0.95) return 'success';
  if (props.priceCurrent <= priceRecommended.value * 1.05) return 'warning';
  return 'danger';
});

const handlePriceRecommendedChange = (newVal) => {
  priceRecommended.value = Number(newVal) || props.priceMin;
};

const resetPriceRecommended = () => {
  priceRecommended.value = props.priceInitialRecommended;
};

watch(
  () => props.priceInitialRecommended,
  (newVal) => {
    priceRecommended.value = newVal;
  },
);
</script>
