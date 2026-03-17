<template>
  <div class="sb-social">
    <Button
      variant="text"
      class="sb-social__like"
      v-if="show('like')"
      @click="isLiked = !isLiked"
    >
      <IconSystemLike :class="['ico-system-like', { active: isLiked }]" />
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
          <component
            :is="item.icon"
            v-if="item.icon"
            class="p-tieredmenu-item-icon"
          />
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
import IconSystemMessage from '@/assets/icons/system/message.svg?component';
import IconSystemShare from '@/assets/icons/system/share.svg?component';

import IconSocialFacebook from '@/assets/icons/social/facebook.svg?component';
import IconSocialX from '@/assets/icons/social/x.svg?component';
import IconSocialKakaotalk from '@/assets/icons/social/kakaotalk.svg?component';
import IconSocialNaverblog from '@/assets/icons/social/naverblog.svg?component';
import IconSocialCopy from '@/assets/icons/social/copy.svg?component';

const emit = defineEmits(['reply']);

const props = defineProps({
  likeCount: { type: [String, Number], default: '0' },
  commentCount: { type: [String, Number], default: '0' },
  shareCount: { type: [String, Number], default: '0' },
  visibleButtons: {
    type: Array,
    default: () => ['like', 'comment', 'share', 'reply'],
  },
});

const isLiked = ref(false);
const menu = ref();
const show = (btnName) => props.visibleButtons.includes(btnName);
const menuItems = ref([
  {
    label: '페이스북',
    icon: IconSocialFacebook,
    class: 'ico-social-facebook',
  },
  {
    label: '트위터',
    icon: IconSocialX,
    class: 'ico-social-x',
  },
  {
    label: '카카오톡',
    icon: IconSocialKakaotalk,
    class: 'ico-social-kakaotalk',
  },
  {
    label: '네이버블로그',
    icon: IconSocialNaverblog,
    class: 'ico-social-naverblog',
  },
  {
    label: 'URL',
    icon: IconSocialCopy,
    class: 'ico-social-copy',
  },
]);

const menuToggle = (event) => {
  menu.value.toggle(event);
};
</script>
