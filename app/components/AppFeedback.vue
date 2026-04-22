<template>
  <div class="sb-feedback">
    <div class="sb-feedback-ai">
      <IconAiFeedback class="ico-ai-feedback" />
      <div class="sb-feedback-ai__bubble">
        <IconAiBubbleChat class="ico-ai-bubble-chat" />
      </div>
      <div class="sb-feedback-ai__text"><p>사용 의견을 남겨주세요.</p></div>
    </div>
    <Button rounded severity="white" @click="scrollToTop">
      <template #icon>
        <IconArrowUp class="ico-arrow-up" />
      </template>
    </Button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import IconAiFeedback from '@/assets/icons/ai/ai-feedback.svg';
import IconAiBubbleChat from '@/assets/icons/ai/bubble-chat.svg?component';
import IconArrowUp from '@/assets/icons/arrow/up.svg?component';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

let mouseMoveHandler;

onMounted(() => {
  const ctx = gsap.context(() => {
    // 1. 눈 & 입 깜빡임 동기화 (입이 안 움직인다면 scale 수치를 더 과감하게 조정)
    const blinkTL = gsap.timeline({
      repeat: -1,
      repeatDelay: 3 + Math.random() * 2,
    });

    blinkTL
      .to('.character-eye', {
        duration: 0.1,
        scaleY: 0,
        transformOrigin: 'center',
      })
      .to(
        '.character-mouth',
        {
          duration: 0.1,
          scaleY: 0.5, // 입을 더 확실히 납작하게
          y: 0.3, // 아래로 1px 살짝 내려서 근육 움직임 표현
          transformOrigin: 'center center',
        },
        '<',
      )
      .to(['.character-eye', '.character-mouth'], {
        duration: 0.1,
        scaleY: 1,
        y: 0,
        ease: 'power2.inOut',
      });

    gsap.to('.sb-feedback-ai', {
      y: -4,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // 2. 시선 추적 (입이 눈을 따라 아주 살짝 움직이게)
    const eyeSetter = {
      x: gsap.quickSetter('.character-eye', 'x', 'px'),
      y: gsap.quickSetter('.character-eye', 'y', 'px'),
    };
    const mouthSetter = {
      x: gsap.quickSetter('.character-mouth', 'x', 'px'),
      y: gsap.quickSetter('.character-mouth', 'y', 'px'),
    };

    const handleMouseMove = (e) => {
      const charElement = document.querySelector('.sb-feedback-ai');
      if (!charElement) return;

      const rect = charElement.getBoundingClientRect();
      const charX = rect.left + rect.width / 2;
      const charY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - charY, e.clientX - charX);

      // 입이 안 움직인다고 느껴지면 이 수치를 조금씩 올려보세요 (현재 1.5px)
      const dist = { eye: 0.8, mouth: 0.8 };

      eyeSetter.x(Math.cos(angle) * dist.eye);
      eyeSetter.y(Math.sin(angle) * dist.eye);
      mouthSetter.x(Math.cos(angle) * dist.mouth);
      mouthSetter.y(Math.sin(angle) * dist.mouth);
    };

    window.addEventListener('mousemove', handleMouseMove);
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', mouseMoveHandler);
});
</script>

<style scoped>
/* 3. 필수: scaleY 애니메이션 시 기준점이 틀어지지 않게 설정 */
.character-eye {
  transform-box: fill-box;
}
</style>
