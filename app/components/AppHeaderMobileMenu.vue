<template>
  <div class="sb-header-mo-menu">
    <div class="sb-header-mo-menu-head">
      <Button variant="text" @click="toggleMode()">
        <template #icon>
          <IconSystemModeLight v-if="isDark" class="ico-system-mode-light" />
          <IconSystemModeDark v-else class="ico-system-mode-dark" />
        </template>
      </Button>
      <Button variant="text">
        <template #icon>
          <IconSystemBellOn class="ico-system-bell-on" />
        </template>
      </Button>
      <Button variant="text" @click="closeMenu">
        <template #icon>
          <IconSystemClose class="ico-system-close" />
        </template>
      </Button>
    </div>
    <div class="sb-header-mo-menu-body">
      <div class="sb-header-mo-menu-profile">
        <div class="sb-header-mo-menu-profile__thumb">
          <IconProfileBadgeLevel1Small />
        </div>
        <div class="sb-header-mo-menu-profile__info">
          <div class="sb-header-mo-menu-profile__name">셀링부스터님</div>
          <p><strong>Lv.1</strong><span>Visitor</span></p>
        </div>
      </div>
      <AppSnb />
    </div>
  </div>
</template>
<script setup>
import { useThemeStore } from '@/stores/useTheme';

import IconProfileBadgeLevel1Small from '@/assets/icons/profile/badge-level1-small.svg';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconSystemModeDark from '@/assets/icons/system/mode-dark.svg?component';
import IconSystemModeLight from '@/assets/icons/system/mode-light.svg?component';
import IconSystemBellOn from '@/assets/icons/system/bell-on.svg?component';

// theme
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const { toggleMode } = themeStore;

const isMoMenuOpen = useState('isMoMenuOpen', () => false);

const closeMenu = () => {
  isMoMenuOpen.value = false;
};
</script>
