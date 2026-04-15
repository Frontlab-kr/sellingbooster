// stores/useTheme.js
import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('p-dark');
      localStorage.setItem('sb-theme', 'dark');
    } else {
      document.documentElement.classList.remove('p-dark');
      localStorage.setItem('sb-theme', 'light');
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

  return {
    isDark, // reactive하게 사용 가능
    toggleMode,
    initTheme, // 필요하면 직접 호출 가능
  };
});
