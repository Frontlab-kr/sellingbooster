<template>
  <button class="sb-faq-list-item" @click="$emit('item-click', item)">
    <h6 class="sb-faq-list-item__title">{{ item.title }}</h6>
    <div class="sb-faq-list-item__foot">
      <div class="sb-faq-list-item__badge">
        <Badge
          :value="item.status === 'done' ? '답변 완료' : '답변 대기'"
          :style="getBadgeStyle(item.status)"
        />
      </div>
      <Icon name="sb:24-up-right" class="ico-24-up-right" />
    </div>
  </button>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

defineEmits(['item-click']);

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
