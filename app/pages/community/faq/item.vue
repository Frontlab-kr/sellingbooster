<template>
  <button
    class="sb-faq-list-item"
    v-if="item"
    @click="$emit('item-click', item)"
  >
    <div class="sb-faq-list-item__badge">
      <Badge v-bind="item.badge" />
    </div>
    <h6 class="sb-faq-list-item__title">{{ item.title }}</h6>
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
});

defineEmits(['item-click']);
</script>
