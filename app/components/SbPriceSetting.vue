<template>
  <div class="sb-price-setting">
    <div class="sb-price-setting-head">
      <div class="sb-price-setting-form">
        <div class="sb-price-setting-form-item">
          <dl>
            <dt>현재가</dt>
            <dd>
              <div class="sb-price-setting-form-item__text">
                <p>{{ priceCurrent.toLocaleString() }}원</p>
                <slot name="badge"></slot>
              </div>
            </dd>
          </dl>
        </div>
        <div class="sb-price-setting-form-item">
          <dl>
            <dt>추천가</dt>
            <dd>
              <div class="sb-price-setting-form-item__input">
                <SbInput
                  v-model="priceRecommended"
                  type="number"
                  @update:modelValue="handlePriceRecommendedChange"
                  :disabled="isError"
                />
                <span class="unit">원</span>
              </div>
            </dd>
          </dl>
          <div class="sb-price-setting-head__button">
            <Button
              severity="primary"
              outlined
              size="small"
              label="추천가 자동 적용"
              @click="resetPriceRecommended"
              :disabled="isError"
            />
            <Button
              severity="contrast"
              outlined
              size="small"
              label="내가 직접 조정"
              :disabled="isError"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="sb-price-setting-slider" v-if="!isError">
      <Slider
        v-model="priceRecommended"
        :min="priceMin"
        :max="priceMax"
        :step="100"
      />
      <div class="sb-price-setting-slider-bg__slider"></div>
      <div
        class="sb-price-setting-slider-bg__average"
        :style="{ width: priceBgWidth + '%' }"
      ></div>
      <div
        class="sb-price-setting-slider-bg__current"
        :style="{
          width: priceCurrentPercent + '%',
        }"
      ></div>

      <div
        class="sb-price-setting-slider__recommended"
        :style="{
          left: priceRecommendedPercent + '%',
        }"
      >
        <span>추천가</span>
        <span>{{ priceRecommended.toLocaleString() }}원</span>
      </div>
      <div class="sb-price-setting-slider__label">
        <p>최저<br />{{ priceMin.toLocaleString() }}원</p>

        <div
          class="sb-price-setting-slider__current"
          :style="{
            left: priceCurrentPercent + '%',
          }"
        >
          <span>현재가</span> <span>{{ priceCurrent.toLocaleString() }}원</span>

          <Button variant="text" @click="toggleOverlayCurrent">
            <template #icon>
              <IconSystemInformationCircle
                class="ico-system-information-circle"
              />
            </template>
          </Button>

          <Popover ref="overlayCurrent" class="sb-popover-small">
            <div class="sb-price-setting-popover">
              <table>
                <tbody>
                  <tr>
                    <th>2026.02.01</th>
                    <td><strong>19,500원 변경</strong></td>
                  </tr>
                  <tr>
                    <th>2025.12.20</th>
                    <td><strong>23,850원 변경</strong></td>
                  </tr>
                  <tr>
                    <th>2025.08.03</th>
                    <td><strong>22,900원 변경</strong></td>
                  </tr>
                </tbody>
              </table>
              <Button variant="text">
                <span class="p-button-label">성장 리포트 확인 하기</span>
                <IconArrowRight class="ico-arrow-right" />
              </Button>
            </div>
          </Popover>
        </div>

        <div
          class="sb-price-setting-slider__average"
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

    <div class="sb-price-setting-foot" v-if="!isError">
      <dl>
        <dt>예상 효과</dt>
        <dd>
          <div class="sb-price-setting-effect">
            <div class="sb-price-setting-effect-item">
              <div class="sb-price-setting-effect-item__text">
                전환율
                <Button
                  variant="text"
                  @mouseenter="toggleOverlayEffect"
                  @mouseleave="toggleOverlayEffect"
                >
                  <template #icon>
                    <IconSystemInformationCircle
                      class="ico-system-information-circle"
                    />
                  </template>
                </Button>
              </div>
              <div class="sb-price-setting-effect-item__percent">
                <IconArrowUp class="ico-arrow-up" />
                <strong>1.6</strong>
                <span>%</span>
              </div>
            </div>
            <div class="sb-price-setting-effect-item">
              <div class="sb-price-setting-effect-item__text">
                매출
                <Button
                  variant="text"
                  @mouseenter="toggleOverlayEffect"
                  @mouseleave="toggleOverlayEffect"
                >
                  <template #icon>
                    <IconSystemInformationCircle
                      class="ico-system-information-circle"
                    />
                  </template>
                </Button>
              </div>
              <div class="sb-price-setting-effect-item__percent">
                <IconArrowUp class="ico-arrow-up" />
                <strong>8.0</strong>
                <span>%</span>
              </div>
            </div>
          </div>
        </dd>
      </dl>
    </div>

    <div class="sb-price-setting-error" v-if="isError">
      현재 연동 오류로 인해 데이터를 불러오지 못했습니다. <br />
      잠시 후 다시 시도해 주세요. <br />
      지속적으로 문제가 발생할 경우 고객센터로 문의 부탁드립니다.
    </div>

    <Popover ref="overlayEffect" class="sb-popover-small">
      ※ 해당 수치는 이전 30일 데이터 기준으로 분석한 예상 수치입니다.<br />
      ※ 실제 수치와는 차이가 있을 수 있습니다.
    </Popover>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import Slider from 'primevue/slider';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import IconArrowUp from '@/assets/icons/arrow/up.svg?component';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';

const overlayCurrent = ref();
const overlayEffect = ref();

const toggleOverlayCurrent = (event) => {
  overlayCurrent.value.toggle(event);
};
const toggleOverlayEffect = (event) => {
  if (event.type === 'mouseenter') {
    overlayEffect.value.show(event);
  } else {
    overlayEffect.value.hide();
  }
};

//
const props = defineProps({
  priceMin: { type: Number, default: 0 },
  priceMax: { type: Number, default: 0 },
  priceCurrent: { type: Number, default: 0 },
  priceInitialRecommended: { type: Number, default: 0 },
  priceAverage: { type: Number, default: 0 },
  isError: { type: Boolean, default: false },
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
