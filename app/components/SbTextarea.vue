<template>
  <div
    :class="[
      'sb-textarea',
      size ? `sb-textarea--${size}` : '',
      disabled ? 'sb-textarea--disabled' : '',
      invalid ? 'sb-textarea--error' : '',
      $attrs.class,
    ]"
  >
    <div class="sb-textarea-head">
      <div class="sb-textarea-head__name">닉네임</div>
    </div>
    <div class="sb-textarea-contents">
      <Textarea
        autoResize
        v-model="internalValue"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :size="size"
      />
    </div>

    <div class="sb-textarea-foot">
      <div class="sb-textarea-foot__length">
        <strong>{{ currentLength }}</strong> / {{ maxlength }}
      </div>
      <div class="sb-textarea-foot__button">
        <Button
          size="small"
          severity="contrast"
          outlined
          label="취소"
          :disabled="disabled || !internalValue.trim()"
        />
        <Button
          size="small"
          severity="primary"
          label="등록"
          :disabled="disabled || !internalValue.trim()"
        />
      </div>
    </div>
  </div>
  <div v-if="invalid">
    <Message size="small" severity="error" variant="simple">Alert text</Message>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({
  inheritAttrs: false,
});

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
  size: {
    type: String,
    default: '',
  },
  disabled: { type: Boolean, default: false },
  invalid: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

// props.modelValue 대신 내부 computed 값을 참조해야
// 부모 업데이트와 상관없이 화면에 즉시 반영됩니다.
const currentLength = computed(() => internalValue.value.length);
</script>
