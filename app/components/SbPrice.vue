<template>
  <div class="sb-price">
    <!-- 헤더 부분 -->
    <div class="sb-price-head">
      <div class="sb-price-head-form">
        <!-- 현재가 -->
        <div class="sb-price-head-form-item">
          <dl>
            <dt>현재가</dt>
            <dd>
              <div class="sb-price-head-form-item__text">
                <p>{{ currentPrice.toLocaleString() }}원</p>
                <Badge :value="badgeText" :severity="badgeSeverity" />
              </div>
            </dd>
          </dl>
        </div>

        <!-- 추천가 -->
        <div class="sb-price-head-form-item">
          <dl>
            <dt>추천가</dt>
            <dd>
              <div class="sb-price-head-form-item__input">
                <SbInput
                  v-model="recommendedPrice"
                  type="number"
                  placeholder="추천가"
                  @update:modelValue="handleRecommendedChange"
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
          @click="applyRecommendedToSlider"
        />
        <Button
          severity="contrast"
          outlined
          size="small"
          label="내가 직접 조정"
        />
      </div>
    </div>

    <!-- 슬라이더 영역 -->
    <div class="sb-price-slider">
      <Slider
        v-model="sliderValue"
        :min="minPrice"
        :max="maxPrice"
        :step="100"
        @change="onSliderChange"
      />

      <!-- 가격 레이블 + 추천가 마커 -->
      <div class="sb-price-slider__labels">
        <div class="label-min">
          최저<br />
          <strong>{{ minPrice.toLocaleString() }}원</strong>
        </div>

        <!-- 추천가 마커 -->
        <div
          class="recommended-marker"
          :style="{ left: recommendedPercent + '%' }"
        >
          <div class="marker-dot"></div>
          <div class="marker-label">
            추천가<br />
            <strong>{{ recommendedPrice.toLocaleString() }}원</strong>
          </div>
        </div>

        <div class="label-max">
          최대<br />
          <strong>{{ maxPrice.toLocaleString() }}원</strong>
        </div>
      </div>
    </div>

    <!-- 예상 효과 -->
    <div class="sb-price-percent">
      <div class="sb-price-percent__title">예상 효과</div>
      <div class="sb-price-percent__contents">
        <slot name="effect"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import Slider from 'primevue/slider';
import Badge from 'primevue/badge';
import Button from 'primevue/button';

// Props
const props = defineProps({
  minPrice: {
    type: Number,
    default: 0,
  },
  maxPrice: {
    type: Number,
    default: 25000,
  },
  initialCurrentPrice: {
    type: Number,
    default: 16500,
  },
  initialRecommendedPrice: {
    type: Number,
    default: 14900,
  },
});

// 내부 상태
const sliderValue = ref(props.initialCurrentPrice);
const recommendedPrice = ref(props.initialRecommendedPrice);

// 현재가 (슬라이더와 완전 연동)
const currentPrice = computed({
  get: () => sliderValue.value,
  set: (val) => {
    sliderValue.value = val;
  },
});

// 추천가 위치 계산
const recommendedPercent = computed(() => {
  if (props.maxPrice === props.minPrice) return 50;
  const percent =
    ((recommendedPrice.value - props.minPrice) /
      (props.maxPrice - props.minPrice)) *
    100;
  return Math.max(0, Math.min(100, percent));
});

// 배지 로직
const badgeText = computed(() => {
  if (currentPrice.value <= recommendedPrice.value * 0.95) return '매우 좋음';
  if (currentPrice.value <= recommendedPrice.value * 1.05) return '보통';
  return '매우 나쁨';
});

const badgeSeverity = computed(() => {
  if (currentPrice.value <= recommendedPrice.value * 0.95) return 'success';
  if (currentPrice.value <= recommendedPrice.value * 1.05) return 'warning';
  return 'danger';
});

// 이벤트 핸들러
const onSliderChange = () => {
  // 슬라이더 이동 시 현재가 자동 업데이트 (computed로 처리됨)
};

const handleRecommendedChange = (newVal) => {
  recommendedPrice.value = Number(newVal) || props.minPrice;
};

const applyRecommendedToSlider = () => {
  sliderValue.value = recommendedPrice.value;
};

// Props 변경 감지
watch(
  () => props.initialCurrentPrice,
  (newVal) => {
    sliderValue.value = newVal;
  },
);

watch(
  () => props.initialRecommendedPrice,
  (newVal) => {
    recommendedPrice.value = newVal;
  },
);
</script>
