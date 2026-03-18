<template>
  <button
    class="sb-faq-list-item"
    v-if="item"
    @click="$emit('item-click', item)"
  >
    <div class="sb-faq-list-item__badge">
      <Badge v-bind="item.badge" />
    </div>
    <h6 class="sb-faq-list-item__title" v-html="noticeTitle"></h6>
    <div class="sb-faq-list-item__foot">
      <IconArrowUpRight class="ico-arrow-up-right" />
    </div>
  </button>
</template>

<script setup>
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';

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

defineEmits(['item-click']);
</script>
