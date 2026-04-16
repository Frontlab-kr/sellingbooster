<template>
  <div :class="['sb-info', className]">
    <Button
      v-if="visibleButtons.includes('view')"
      variant="text"
      class="sb-info__view"
    >
      <IconSystemEyeOpen class="ico-system-eye-open" />
      <span class="p-button-label">{{ viewCount }}</span>
    </Button>

    <Button
      v-if="visibleButtons.includes('read')"
      variant="text"
      class="sb-info__read"
    >
      <IconSystemClock class="ico-system-clock" />
      <span class="p-button-label">{{ readTime }}</span>
    </Button>

    <Button
      v-if="visibleButtons.includes('thema')"
      variant="text"
      class="sb-info__thema"
    >
      <IconSystemThema class="ico-system-thema" />
      <span class="p-button-label">{{ themaText }}</span>
    </Button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import IconSystemEyeOpen from '@/assets/icons/system/eye-open.svg?component';
import IconSystemClock from '@/assets/icons/system/clock.svg?component';
import IconSystemThema from '@/assets/icons/system/thema.svg?component';

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  visibleButtons: {
    type: Array,
    default: () => ['view', 'read', 'thema'],
  },
  viewCount: {
    type: [String, Number],
    default: 0,
  },
  readTime: {
    type: String,
    default: '',
  },
  themaText: {
    type: String,
    default: '',
  },
});
</script>
