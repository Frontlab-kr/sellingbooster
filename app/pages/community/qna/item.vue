<template>
  <div class="sb-qna-list-item" v-if="item">
    <div class="sb-qna-list-item__head">
      <div class="sb-qna-list-item__head-start">
        <h6 class="sb-qna-list-item__title">{{ item.title }}</h6>
        <div class="sb-qna-list-item__date">{{ item.date }}</div>
      </div>
      <div class="sb-qna-list-item__head-end">
        <div class="sb-qna-list-item__badge">
          <Badge v-bind="item.badge" />
        </div>
        <div class="sb-qna-list-item__menu">
          <SbMenu :items="menuItems" />
        </div>
      </div>
    </div>
    <button
      class="sb-qna-list-item__content"
      @click="$emit('item-click', item)"
    >
      {{ item.content }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['item-click']);

const menuItems = ref([
  {
    label: '수정',
    icon: IconSystemEdit,
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);
</script>
