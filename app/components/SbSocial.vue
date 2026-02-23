<template>
  <div class="sb-social">
    <Button
      size="small"
      variant="text"
      class="sb-social__like"
      v-if="show('like')"
      @click="isLiked = !isLiked"
    >
      <Icon32like :class="['ico-32-like', { active: isLiked }]" />
      <span class="p-button-label">{{ likeCount }}</span>
    </Button>
    <Button
      size="small"
      variant="text"
      class="sb-social__comment"
      v-if="show('comment')"
    >
      <Icon32message class="ico-32-message" />
      <span class="p-button-label">{{ commentCount }}</span>
    </Button>
    <Button
      size="small"
      variant="text"
      class="sb-social__share"
      v-if="show('share')"
      @click="menuToggle"
    >
      <Icon32share class="ico-32-share" />
      <span class="p-button-label">{{ shareCount }}</span>
    </Button>

    <TieredMenu
      ref="menu"
      :model="socialMenuItems"
      popup
      class="sb-social-layer"
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
    <Button
      size="small"
      variant="text"
      class="sb-social__reply"
      v-if="show('reply')"
    >
      <span class="p-button-label"><strong>답글달기</strong></span>
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon32like from '@/assets/icons/32/like.svg?component';
import Icon32message from '@/assets/icons/32/message.svg?component';
import Icon32share from '@/assets/icons/32/share.svg?component';

import IconSocialFacebook from '@/assets/icons/social/facebook.svg?component';
import IconSocialX from '@/assets/icons/social/x.svg?component';
import IconSocialKakaotalk from '@/assets/icons/social/kakaotalk.svg?component';
import IconSocialNaverblog from '@/assets/icons/social/naverblog.svg?component';
import IconSocialCopy from '@/assets/icons/social/copy.svg?component';

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
const socialMenuItems = ref([
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
