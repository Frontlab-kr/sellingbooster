<template>
  <div class="sb-menu">
    <Button variant="text" @click="menuToggle">
      <template #icon>
        <Icon32dotmenu class="ico-32-dotmenu" />
      </template>
    </Button>
    <TieredMenu
      ref="menu"
      :model="items"
      popup
      popupAlignment="right"
      class="sb-menu-layer"
      @click="menuClose"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon32dotmenu from '@/assets/icons/32/dotmenu.svg?component';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const menu = ref();

const menuToggle = (event) => {
  menu.value.toggle(event);
};
const menuClose = (event) => {
  const rootList = event.currentTarget.querySelector('.p-tieredmenu-root-list');
  if (rootList && rootList.contains(event.target)) {
    return;
  }

  menu.value.hide();
};
</script>
