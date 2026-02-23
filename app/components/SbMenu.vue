<template>
  <div class="sb-menu">
    <Button
      variant="text"
      @click="menuToggle"
      :class="{ 'p-focus': isMenuVisible }"
    >
      <template #icon>
        <Icon32dotmenu class="ico-32-dotmenu" />
      </template>
    </Button>
    <TieredMenu
      ref="menu"
      :model="items"
      popup
      class="sb-menu-layer"
      @show="isMenuVisible = true"
      @hide="isMenuVisible = false"
      @click="menuClose"
    >
      <template #item="{ item, props }">
        <a v-bind="props.action" class="p-tieredmenu-item-link">
          <component
            :is="item.icon"
            v-if="item.icon"
            class="p-tieredmenu-item-icon"
          />
          <span class="p-tieredmenu-item-label">{{ item.label }}</span>
        </a>
      </template>
    </TieredMenu>
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
const isMenuVisible = ref(false);
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
