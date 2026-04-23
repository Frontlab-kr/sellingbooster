<template>
  <div class="sb-mobile-info">
    <div class="sb-mobile-info__contents">
      <div class="sb-mobile-info__text">
        <IconillustrationPc class="ico-illustration-pc" />
        <h4>PC에서 만나요!</h4>
        <p>해당 서비스는 PC에서만 이용이 가능해요.</p>
      </div>
      <div class="sb-mobile-info__button">
        <Button severity="contrast" outlined size="small">
          <IconSystemKakaotalk class="ico-system-kakaotalk" />
          <span class="p-button-label">카카오톡 공유하기</span>
        </Button>
        <Button
          severity="contrast"
          outlined
          size="small"
          @click="handleCopyLink"
        >
          <IconSystemCopy class="ico-system-copy" />
          <span class="p-button-label">링크 복사하기</span>
        </Button>
      </div>
      <div class="sb-mobile-info__back">
        <Button variant="text" label="이전 페이지" @click="goBack">
          <template #icon>
            <IconArrowLeft class="ico-arrow-left" />
          </template>
        </Button>
      </div>
    </div>
  </div>
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import IconillustrationPc from '@/assets/icons/illustration/pc.svg?component';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';

const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.back();
};

const layoutClass = useState('globalLayoutClass');

onMounted(() => {
  // 컴포넌트가 나타날 때 클래스 추가
  layoutClass.value = 'sb--mobile-info';
});

onUnmounted(() => {
  // 컴포넌트가 사라질 때 클래스 초기화 (중요!)
  layoutClass.value = '';
});

//toast
const toast = useToast();

const handleCopyLink = async () => {
  try {
    // 현재 페이지의 URL을 클립보드에 복사
    await navigator.clipboard.writeText(window.location.href);

    // 복사 성공 시 토스트 알림
    toast.add({
      detail: '링크가 복사 되었습니다.',
      group: 'bc',
      life: 3000,
    });
  } catch (err) {
    console.error('복사에 실패했습니다:', err);
    toast.add({
      severity: 'error',
      detail: '복사에 실패했습니다. 다시 시도해주세요.',
      group: 'bc',
      life: 3000,
    });
  }
};
</script>
