<template>
  <div class="sb-searchbar">
    <div class="sb-searchbar__input">
      <InputText
        :placeholder="placeholder"
        :model-value="modelValue"
        @update:model-value="modelValue = $event"
      />
      <button class="sb-searchbar__delete" @click="clearInput">
        <Icon20delete class="ico-20-delete" />
      </button>
    </div>
    <div class="sb-searchbar__button">
      <Button rounded severity="white">
        <template #icon>
          <Icon24search class="ico-24-search" />
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Icon24search from '@/assets/icons/24/search.svg?component';
import Icon20delete from '@/assets/icons/20/delete.svg?component';

const props = defineProps({
  placeholder: {
    type: String,
    default: '검색어를 입력하세요',
  },
});

const modelValue = defineModel({ type: String, default: '' });

const emit = defineEmits(['search']);

const clearInput = () => {
  modelValue.value = '';
};
</script>
