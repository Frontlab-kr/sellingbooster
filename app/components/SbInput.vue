<template>
  <div
    class="sb-input"
    :class="{
      'sb-input--search': showSearch,
      'sb-input--disabled': disabled,
    }"
  >
    <div class="sb-input__length" v-if="showLength">
      <strong>{{ currentLength }}</strong> / {{ maxlength }}
    </div>
    <div class="sb-input__time" v-if="time">{{ time }}</div>
    <InputText
      v-model="model"
      v-bind="$attrs"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <div class="sb-input__search" v-if="showSearch">
      <Button severity="white" @click="handleSearch">
        <template #icon>
          <IconSystemSearch class="ico-system-search" />
        </template>
      </Button>
    </div>
    <div class="sb-input__button">
      <Button variant="text" rounded @click="clearText">
        <template #icon>
          <IconSystemDelete class="ico-system-delete" />
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';
import IconSystemSearch from '@/assets/icons/system/search.svg?component';

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  maxlength: {
    type: [Number, String],
    default: 300,
  },
  showLength: { type: Boolean, default: false },
  showSearch: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  time: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['search']);

const model = defineModel({ type: String, default: '' });

const currentLength = computed(() => (model.value ? model.value.length : 0));

defineOptions({
  inheritAttrs: false,
});

const clearText = () => {
  model.value = '';
};

const handleSearch = () => {
  emit('search', model.value);
};
</script>
