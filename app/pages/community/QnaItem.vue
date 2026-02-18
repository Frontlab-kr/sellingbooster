<template>
  <div class="sb-qna-list-item" v-if="item">
    <div class="sb-qna-list-item__head">
      <div class="sb-qna-list-item__head-start">
        <h6 class="sb-qna-list-item__title">{{ item.title }}</h6>
        <div class="sb-qna-list-item__date">{{ item.date }}</div>
      </div>
      <div class="sb-qna-list-item__head-end">
        <div class="sb-qna-list-item__badge">
          <Badge
            :value="item.badgeText"
            :style="getBadgeStyle(item.badgeColor)"
          />
        </div>
        <div class="sb-qna-list-item__menu">
          <SbMenu :items="qnaMenuItems" />
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
import { useStatus } from '@/composables/useStatus';

const { getBadgeStyle } = useStatus();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['item-click']);

const qnaMenuItems = ref([
  {
    label: '수정',
    icon: 'ico-24-edit',
  },
  {
    label: '삭제',
    icon: 'ico-24-trash',
  },
]);

const menuToggle = (event) => {
  menu.value.toggle(event);
};
</script>
