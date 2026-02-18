<template>
  <NuxtLink to="./NoticeView" class="sb-notice-list-item">
    <div class="sb-notice-list-item__head">
      <div class="sb-notice-list-item__badge">
        <Badge
          :value="notice.badgeText"
          :style="getBadgeStyle(notice.badgeColor)"
        />
      </div>
      <div class="sb-notice-list-item__date">{{ notice.date }}</div>
    </div>
    <h6 class="sb-notice-list-item__title" v-html="noticeTitle"></h6>
    <div v-if="notice.attachment" class="sb-notice-list-item__attachment">
      <Icon24paperclip class="ico-24-paperclip" />
    </div>
  </NuxtLink>
</template>

<script setup>
import { useStatus } from '@/composables/useStatus';

import Icon24paperclip from '@/assets/icons/24/paperclip.svg?component';

const { getBadgeStyle } = useStatus();

// props 정의
const props = defineProps({
  notice: {
    type: Object,
    required: true,
  },
  searchText: {
    type: String,
    default: '',
  },
});

const noticeTitle = computed(() => {
  const title = props.notice.title;
  const target = props.searchText;

  if (!target || !title.includes(target)) {
    return title;
  }
  const regex = new RegExp(`(${target})`, 'gi');
  return title.replace(regex, `<span class="text-primary">$1</span>`);
});
</script>
