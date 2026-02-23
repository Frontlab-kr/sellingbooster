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
            :value="getStatusDetail(item.status).label"
            :style="getStatusDetail(item.status)"
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

import Icon24edit from '@/assets/icons/24/edit.svg?component';
import Icon24trash from '@/assets/icons/24/trash.svg?component';

const { getStatusDetail } = useStatus();

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
    icon: Icon24edit,
  },
  {
    label: '삭제',
    icon: Icon24trash,
  },
]);

const menuToggle = (event) => {
  menu.value.toggle(event);
};
</script>
