<template>
  <div class="sb-social">
    <Button
      variant="text"
      class="sb-social__like"
      v-if="show('like')"
      @click="emit('update:likeActive', !likeActive)"
    >
      <IconSystemLikeActive v-if="likeActive" class="ico-system-like active" />
      <IconSystemLike v-else class="ico-system-like" />
      <span class="p-button-label">{{ likeCount }}</span>
    </Button>
    <Button variant="text" class="sb-social__comment" v-if="show('comment')">
      <IconSystemMessage class="ico-system-message" />
      <span class="p-button-label">{{ commentCount }}</span>
    </Button>
    <Button
      variant="text"
      class="sb-social__share"
      v-if="show('share')"
      @click="menuToggle"
    >
      <IconSystemShare class="ico-system-share" />
      <span class="p-button-label">{{ shareCount }}</span>
    </Button>

    <TieredMenu ref="menu" :model="menuItems" popup class="sb-social-layer">
      <template #item="{ item, props }">
        <a v-bind="props.action" class="p-tieredmenu-item-link">
          <div class="p-tieredmenu-item-icon">
            <component :is="item.icon" v-if="item.icon" />
          </div>
          <span class="p-tieredmenu-item-label">{{ item.label }}</span>
        </a>
      </template>
    </TieredMenu>
    <Button
      variant="text"
      class="sb-social__reply"
      v-if="show('reply')"
      @click="emit('reply')"
    >
      <span class="p-button-label">답글달기</span>
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemLike from '@/assets/icons/system/like.svg?component';
import IconSystemLikeActive from '@/assets/icons/system/like-active.svg?component';
import IconSystemMessage from '@/assets/icons/system/message.svg?component';
import IconSystemShare from '@/assets/icons/system/share.svg?component';

import IconSystemFacebook from '@/assets/icons/system/facebook.svg?component';
import IconSystemX from '@/assets/icons/system/x.svg?component';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemNaverblog from '@/assets/icons/system/naverblog.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';

const emit = defineEmits(['reply', 'update:likeActive']);

const props = defineProps({
  likeCount: { type: [String, Number], default: '0' },
  likeActive: { type: Boolean, default: false },
  commentCount: { type: [String, Number], default: '0' },
  shareCount: { type: [String, Number], default: '0' },
  visibleButtons: {
    type: Array,
    default: () => ['like', 'comment', 'share', 'reply'],
  },
});

const menu = ref();
const show = (btnName) => props.visibleButtons.includes(btnName);
const menuItems = ref([
  {
    label: '페이스북',
    icon: IconSystemFacebook,
  },
  {
    label: '트위터',
    icon: IconSystemX,
  },
  {
    label: '카카오톡',
    icon: IconSystemKakaotalk,
  },
  {
    label: '네이버블로그',
    icon: IconSystemNaverblog,
  },
  {
    label: 'URL',
    icon: IconSystemCopy,
  },
]);

const menuToggle = (event) => {
  menu.value.toggle(event);
};
</script>
