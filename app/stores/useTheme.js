// stores/useTheme.js
import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);
  const isForcedLight = ref(false); // 레이아웃에 의해 강제된 상태

  const updateTheme = () => {
    // 강제 라이트 모드 상태가 아닐 때만 다크모드 클래스 적용
    if (isDark.value && !isForcedLight.value) {
      document.documentElement.classList.add('p-dark');
    } else {
      document.documentElement.classList.remove('p-dark');
    }

    // 로컬 스토리지 저장은 강제 상태가 아닐 때만 업데이트
    if (!isForcedLight.value) {
      localStorage.setItem('sb-theme', isDark.value ? 'dark' : 'light');
    }
  };

  const toggleMode = () => {
    isDark.value = !isDark.value;
    updateTheme();
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem('sb-theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
    updateTheme();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'F8') {
      event.preventDefault();
      toggleMode();
    }
  };

  // 스토어가 처음 사용될 때 초기화
  onMounted(() => {
    initTheme();
    window.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });

  return { isDark, isForcedLight, updateTheme, toggleMode, initTheme };
});
