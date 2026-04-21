<template>
  <div
    :class="[
      'sb sb-main',
      route.meta.layoutClass,
      {
        'sb--fold': isFolded,
        'sb--mo-menu': isMoMenuOpen,
      },
    ]"
  >
    <AppChromeExtension v-if="route.meta.showExtension" />
    <AppHeader />
    <div class="sb-contents">
      <slot />
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useThemeStore } from '@/stores/useTheme';

const route = useRoute();
const themeStore = useThemeStore();
const isFolded = useState('isFolded', () => false);
const isMoMenuOpen = useState('isMoMenuOpen', () => false);

onMounted(() => {
  // 메인 레이아웃 진입 시 라이트 모드 강제
  themeStore.isForcedLight = true;
  themeStore.updateTheme();
});

onUnmounted(() => {
  // 레이아웃을 벗어날 때 강제 모드 해제 및 기존 테마 복구
  themeStore.isForcedLight = false;
  themeStore.updateTheme();
});
</script>
