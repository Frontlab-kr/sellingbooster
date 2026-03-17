<template>
  <NuxtLink to="/community/notice/view" class="sb-notice-list-item" v-if="item">
    <div class="sb-notice-list-item__head">
      <div class="sb-notice-list-item__badge">
        <Badge v-bind="item.badge" />
      </div>
      <div class="sb-notice-list-item__date">{{ item.date }}</div>
    </div>
    <h6 class="sb-notice-list-item__title" v-html="noticeTitle"></h6>
    <div v-if="item.attachment" class="sb-notice-list-item__attachment">
      <IconSystemPaperclip class="ico-system-paperclip" />
    </div>
  </NuxtLink>
</template>

<script setup>
import IconSystemPaperclip from '@/assets/icons/system/paperclip.svg?component';

// props 정의
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  searchText: {
    type: String,
    default: '',
  },
});

const noticeTitle = computed(() => {
  const title = props.item.title;
  const target = props.searchText;

  if (!target || !title.includes(target)) {
    return title;
  }
  const regex = new RegExp(`(${target})`, 'gi');
  return title.replace(regex, `<span class="text-primary">$1</span>`);
});
</script>
