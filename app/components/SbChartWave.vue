<template>
  <div ref="container" class="sb-wave-icon">
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.481 10.5463C80.7673 15.84 80.76 24.4121 75.4664 29.6984L56.9131 48.2225C51.6194 53.5089 43.0473 53.5016 37.761 48.2079C32.4746 42.9143 32.4819 34.3422 37.7756 29.0559L56.3289 10.5317C61.6226 5.24539 70.1946 5.25269 75.481 10.5463Z"
        fill="var(--chart-wave-background01)"
      />
      <path
        d="M79.6284 44.4186C84.9148 49.705 84.9148 58.2843 79.6284 63.5707L61.316 81.8831C56.0297 87.1694 47.4503 87.1694 42.164 81.8831C36.8776 76.5967 36.8776 68.0174 42.164 62.731L60.4764 44.4186C65.7627 39.1323 74.3421 39.1323 79.6284 44.4186Z"
        fill="var(--chart-wave-background01)"
      />
      <path
        d="M35.6549 65.0446C38.9303 59.0545 36.7296 51.5433 30.7395 48.2679C24.7495 44.9925 17.2383 47.1932 13.9629 53.1833C10.6875 59.1734 12.8882 66.6845 18.8783 69.9599C24.8683 73.2353 32.3795 71.0347 35.6549 65.0446Z"
        fill="var(--chart-wave-background01)"
      />
      <mask
        id="mask0_3935_13789"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="92"
        height="92"
      >
        <path
          d="M75.481 10.5463C80.7673 15.84 80.76 24.4121 75.4664 29.6984L56.9131 48.2225C51.6194 53.5089 43.0473 53.5016 37.761 48.2079C32.4746 42.9143 32.4819 34.3422 37.7756 29.0559L56.3289 10.5317C61.6226 5.24539 70.1946 5.25269 75.481 10.5463Z"
          fill="var(--chart-wave-background02)"
        />
        <path
          d="M79.6284 44.4186C84.9148 49.705 84.9148 58.2843 79.6284 63.5707L61.316 81.8831C56.0297 87.1694 47.4503 87.1694 42.164 81.8831C36.8776 76.5967 36.8776 68.0174 42.164 62.731L60.4764 44.4186C65.7627 39.1323 74.3421 39.1323 79.6284 44.4186Z"
          fill="var(--chart-wave-background02)"
        />
        <path
          d="M35.6549 65.0446C38.9303 59.0545 36.7296 51.5433 30.7395 48.2679C24.7495 44.9925 17.2383 47.1932 13.9629 53.1833C10.6875 59.1734 12.8882 66.6845 18.8783 69.9599C24.8683 73.2353 32.3795 71.0347 35.6549 65.0446Z"
          fill="var(--chart-wave-background02)"
        />
      </mask>
      <g mask="url(#mask0_3935_13789)">
        <path
          :class="{ 'wave-path': animatedPercent > 0 && animatedPercent < 100 }"
          d="M61.2318 3.15384C73.4172 1.35164 86.8212 5.85714 92 8.33516V82H0V0C34.1192 13.0659 46 5.40659 61.2318 3.15384Z"
          :fill="waveColor"
          :style="waveStyle"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  percent: {
    type: Number,
    default: 0,
  },
});

const container = ref(null);
const animatedPercent = ref(0); // 0에서 시작
let observer = null;

const waveColor = computed(() => {
  const p = animatedPercent.value;
  // 초기 0일 때 색상이 갑자기 변하지 않도록 기본색 설정 가능
  if (p === 0) return 'transparent';
  if (p >= 80) return 'var(--color-success)';
  if (p >= 60) return 'var(--color-secondary)';
  if (p >= 40) return 'var(--color-info)';
  if (p >= 20) return 'var(--color-warn)';
  return 'var(--color-danger)';
});

const waveStyle = computed(() => ({
  // 0%일 때 바닥 위치(83px)에 미리 배치됨
  transform: `translateY(${83 - 79 * (animatedPercent.value / 100)}px)`,
  transformOrigin: '50% 0',
  // transition이 transform과 fill 모두에 적용됨
  transition: 'transform 1.5s cubic-bezier(0.33, 1, 0.68, 1), fill 0.8s ease',
}));

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 약간의 지연 후 실행 (브라우저가 0인 상태를 인지할 시간 확보)
          setTimeout(() => {
            animatedPercent.value = props.percent;
          }, 100);

          // 한 번 보였을 때만 애니메이션을 원한다면 주석 해제
          //observer.unobserve(entry.target);
        } else {
          // 화면에서 벗어나면 다시 0으로 초기화하고 싶을 때 (선택 사항)
          animatedPercent.value = 0;
        }
      });
    },
    { threshold: 0.2 }, // 0.8은 너무 높아서 아이콘이 거의 다 보여야 작동하므로 0.2 추천
  );

  if (container.value) observer.observe(container.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.sb-wave-icon {
  display: inline-block;
  width: 92px;
  height: 92px;
}
.wave-path {
  animation: wave-movement 3s infinite linear;
}

@keyframes wave-movement {
  0% {
    translate: -8px 0;
    scale: 1 1;
  }
  50% {
    translate: 8px 0;
    scale: 1.05 0.95;
  }
  100% {
    translate: -8px 0;
    scale: 1 1;
  }
}
</style>
