<template>
  <div class="sb-qna-list-item">
    <div class="sb-qna-list-item__head">
      <h6 class="sb-qna-list-item__title">{{ item.title }}</h6>
      <div class="sb-qna-list-item__date">{{ item.date }}</div>
      <div class="sb-qna-list-item__badge">
        <Badge
          :value="item.status === 'done' ? '답변 완료' : '답변 대기'"
          :style="getBadgeStyle(item.status)"
        />
      </div>
      <div class="sb-qna-list-item__menu">
        <Button variant="text" @click="menuToggle">
          <template #icon>
            <Icon name="sb:32-dotmenu" class="ico-32-dotmenu" />
          </template>
        </Button>
        <TieredMenu ref="menu" :model="menuItems" popup appendTo="body" />
      </div>
    </div>
    <div class="sb-qna-list-item__content" @click="$emit('item-click', item)">
      {{ item.content }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['item-click']);

const menu = ref();
const menuItems = ref([
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

const getBadgeStyle = (status) => {
  //답변 완료
  if (status === 'done') {
    return {
      backgroundColor: '#EBFCFD',
      color: '#2CA6AF',
    };
  }
  //답변 대기
  if (status === 'waiting') {
    return {
      backgroundColor: '#38414F',
      color: '#ffffff',
    };
  }
};
</script>
