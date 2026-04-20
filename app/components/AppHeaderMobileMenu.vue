<template>
  <div class="sb-header-mo-menu">
    <div class="sb-header-mo-menu-head">
      <div class="sb-header-mo-mode">
        <Button variant="text" @click="toggleMode()">
          <template #icon>
            <IconSystemModeLight v-if="isDark" class="ico-system-mode-light" />
            <IconSystemModeDark v-else class="ico-system-mode-dark" />
          </template>
        </Button>
      </div>
      <div class="sb-header-mo-notification">
        <Button variant="text" @click="controls.openNotification">
          <template #icon>
            <IconSystemBellOn class="ico-system-bell-on" />
          </template>
        </Button>
      </div>
      <div class="sb-header-mo-menu">
        <Button variant="text" @click="closeMenu">
          <template #icon>
            <IconSystemClose class="ico-system-close" />
          </template>
        </Button>
      </div>
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
      <div class="sb-header-mo-menu-profile">
        <div class="sb-header-mo-menu-profile__thumb">
          <IconIllustrationSmile class="ico-illustration-smile" />
        </div>
        <div class="sb-header-mo-menu-profile__info">
          <div class="sb-header-mo-menu-profile__text">
            서비스 이용을 위해<br />
            <NuxtLink to="/auth/login/index02">로그인</NuxtLink>을 해주세요.
          </div>
        </div>
      </div>
      <AppSnb />
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue';
import { useThemeStore } from '@/stores/useTheme';

import IconProfileBadgeLevel1Small from '@/assets/icons/profile/badge-level1-small.svg';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconSystemModeDark from '@/assets/icons/system/mode-dark.svg?component';
import IconSystemModeLight from '@/assets/icons/system/mode-light.svg?component';
import IconSystemBellOn from '@/assets/icons/system/bell-on.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

const controls = inject('dialogControls');

// theme
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const { toggleMode } = themeStore;

const isMoMenuOpen = useState('isMoMenuOpen', () => false);

const closeMenu = () => {
  isMoMenuOpen.value = false;
};
</script>
