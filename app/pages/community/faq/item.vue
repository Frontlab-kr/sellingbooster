<template>
  <button
    class="sb-faq-list-item"
    v-if="item"
    @click="$emit('item-click', item)"
  >
    <div class="sb-faq-list-item__badge">
      <Badge
        :value="getStatusDetail(item.status).label"
        :style="getStatusDetail(item.status)"
      />
    </div>
    <h6 class="sb-faq-list-item__title">{{ item.title }}</h6>
    <div class="sb-faq-list-item__foot">
      <Icon24upRight class="ico-24-up-right" />
    </div>
  </button>
</template>

<script setup>
import { useStatus } from '@/composables/useStatus';
import Icon24upRight from '@/assets/icons/24/up-right.svg?component';

const { getStatusDetail } = useStatus();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

defineEmits(['item-click']);
</script>
