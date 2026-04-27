<template>
  <div
    class="sb-input"
    :class="[
      $attrs.class,
      {
        'sb-input--search': showSearch,
        'sb-input--disabled': disabled,
        'sb-input--clear': model,
        [`sb-input--${size}`]: size,
      },
    ]"
  >
    <div class="sb-input__length" v-if="showLength">
      <strong>{{ currentLength }}</strong> / {{ maxlength }}
    </div>
    <div class="sb-input__time" v-if="time">{{ time }}</div>

    <!-- phone 모드: InputMask + 강제 숫자 청소 -->
    <InputMask
      v-if="phone || mask"
      ref="inputRef"
      v-model="model"
      v-bind="$attrs"
      :mask="activeMask"
      :placeholder="placeholder"
      :disabled="disabled"
      type="tel"
      inputmode="tel"
      @input="handleInput"
      @compositionstart="onCompositionStart"
      @compositionend="handleInput"
      @keypress="restrictToDigits"
    />
    <InputText
      v-else-if="number"
      ref="inputRef"
      v-model="model"
      v-bind="$attrs"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      type="text"
      inputmode="numeric"
      pattern="[0-9]*"
      :size="size"
      @input="handleInput"
      @keypress="restrictToDigits"
      @paste="handlePaste"
    />
    <InputText
      v-else
      v-model="model"
      v-bind="$attrs"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :inputmode="number ? 'numeric' : 'text'"
      :size="size"
      @input="handleInput"
      @keypress="restrictToDigits"
    />

    <div class="sb-input__search" v-if="showSearch">
      <Button severity="white" @click="handleSearch">
        <template #icon>
          <IconSystemSearch class="ico-system-search" />
        </template>
      </Button>
    </div>
    <div class="sb-input__button" v-if="!showLength && !cancel">
      <Button variant="text" rounded @click="clearText">
        <template #icon>
          <IconSystemDelete class="ico-system-delete" />
        </template>
      </Button>
    </div>
    <div class="sb-input__save" v-if="save">
      <Button variant="text" @click="emit('save')">
        <span class="p-button-label">저장</span>
      </Button>
    </div>
    <div class="sb-input__cancel" v-if="cancel">
      <Button variant="text" @click="emit('cancel')">
        <span class="p-button-label">취소</span>
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, nextTick } from 'vue';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';
import IconSystemSearch from '@/assets/icons/system/search.svg?component';

const props = defineProps({
  number: { type: Boolean, default: false },
  phone: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  maxlength: { type: [Number, String], default: 300 },
  showLength: { type: Boolean, default: false },
  showSearch: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  time: { type: String, default: '' },
  size: { type: String, default: '' },
  cancel: { type: Boolean, default: false },
  save: { type: Boolean, default: false },
  mask: { type: String, default: null },
});

const emit = defineEmits(['search', 'cancel', 'save']);

const model = defineModel({ type: String, default: '' }); // 최종 숫자만
const rawValue = ref(''); // InputMask 포맷용
const isComposing = ref(false);

const inputRef = ref(null);

const currentLength = computed(() => String(model.value || '').length);

defineOptions({ inheritAttrs: false });

const clearText = () => {
  model.value = '';
  rawValue.value = '';
};

const handleSearch = () => {
  emit('search', model.value);
};

const activeMask = computed(() => {
  if (props.phone) return '999-9999-9999';
  return props.mask; // 직접 주입받은 마스크 사용
});
const phoneMask = computed(() => (props.phone ? '999-9999-9999' : null));
const phonePlaceholder = computed(() =>
  props.phone ? '010-1234-5678' : props.placeholder,
);

// 숫자만 허용 keypress (영문/기호 차단, IME 조합 중은 패스)
const restrictToDigits = (e) => {
  if (!props.number) return;

  if (isComposing.value) return; // IME 중에는 허용 → 끝난 후 청소

  const allowed = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Tab',
    'Home',
    'End',
  ];

  if (
    (e.ctrlKey || e.metaKey) &&
    ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())
  )
    return;

  if (!allowed.includes(e.key)) {
    e.preventDefault();
  }
};

const onCompositionStart = () => {
  isComposing.value = true;
};

const onCompositionEnd = () => {
  isComposing.value = false;
};

// 입력/조합 끝날 때마다 숫자만 강제 추출 + 업데이트
const handleInput = (e) => {
  if (!props.number && !props.phone && !props.mask) return; // 조건 확장

  const el = inputRef.value?.$el?.input || e.target;
  if (!el) return;

  // InputMask를 쓸 때는 내부적으로 포맷팅된 값을 다루므로
  // 단순 number일 때와 구분해서 처리하는 것이 안전합니다.
  if (props.phone || props.mask) return;

  let current = model.value;
  const cleaned = current.replace(/[^0-9]/g, '');

  if (cleaned !== model.value) {
    model.value = cleaned;
    nextTick(() => {
      el.value = cleaned;
    });
  }
};
</script>
