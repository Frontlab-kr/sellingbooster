<template>
  <div class="sb-input">
    <InputText
      v-model="internalValue"
      :maxlength="maxlength"
      :placeholder="placeholder"
    />
    <div class="sb-input__length">
      <strong>{{ currentLength }}</strong> / {{ maxlength }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  maxlength: {
    type: [Number, String],
    default: 1000,
  },

  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const currentLength = computed(() => props.modelValue.length);
</script>
