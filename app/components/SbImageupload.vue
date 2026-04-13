<template>
  <div
    class="sb-imageupload"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    :class="{ 'is-dragging': isDragging }"
  >
    <FileUpload
      :key="fileKey"
      ref="fileUploadRef"
      mode="advanced"
      name="demo[]"
      :multiple="limit > 1"
      :maxFileSize="50000000"
      :fileLimit="limit"
      :accept="accept"
      :auto="false"
      @select="onSelectedFiles"
      @clear="onClearFiles"
      @remove="onRemoveFile"
    >
      <template #content> <div></div></template>

      <template #header="{ chooseCallback, files }">
        <div class="sb-imageupload-inner">
          <div class="sb-imageupload-text">
            이미지 파일을 드래그하거나
            <strong>클릭하여 업로드</strong> 해주세요.<br />
            복사(Ctrl+V)를 통해 클립보드 이미지를 추가할 수도 있습니다.
          </div>
          <div class="sb-imageupload-button">
            <Button
              @click="chooseCallback()"
              severity="contrast"
              label="파일 찾기"
              size="small"
            />
          </div>
        </div>
      </template>
    </FileUpload>
  </div>
</template>

<script setup>
import {
  ref,
  defineProps,
  defineEmits,
  defineExpose,
  nextTick,
  onMounted,
  onUnmounted,
} from 'vue';

const props = defineProps({
  accept: { type: String, default: 'image/*' },
  limit: { type: Number, default: 5 },
});

const emit = defineEmits(['update-files']);
const fileUploadRef = ref(null);
const isDragging = ref(false);

// 드래그 오버 (시각적 피드백)
const onDragOver = (e) => {
  isDragging.value = true;
};

// 드래그 떠날 때
const onDragLeave = () => {
  isDragging.value = false;
};

// 드롭 처리 → PrimeVue 내부 file input에 파일 주입
const onDrop = (e) => {
  isDragging.value = false;

  const droppedFiles = Array.from(e.dataTransfer?.files || []);

  if (droppedFiles.length === 0) return;

  if (fileUploadRef.value) {
    // 1. 현재 이미 업로드된 파일 수 확인
    const currentFiles = fileUploadRef.value.files || [];
    const currentCount = currentFiles.length;

    // 2. limit을 초과하지 않도록 파일 자르기
    const allowedCount = Math.max(0, props.limit - currentCount);
    let filesToAdd = droppedFiles.slice(0, allowedCount);

    // 3. 허용된 파일만 DataTransfer에 넣기
    const dt = new DataTransfer();
    filesToAdd.forEach((file) => dt.items.add(file));

    // 4. PrimeVue 내부 input에 파일 설정 및 change 이벤트 트리거
    const input = fileUploadRef.value.$el.querySelector('input[type="file"]');
    if (input && filesToAdd.length > 0) {
      input.files = dt.files;

      const event = new Event('change', { bubbles: true });
      input.dispatchEvent(event);
    }
    // 추가할 파일이 없으면 (이미 limit 꽉 참) 사용자에게 알림 (선택사항)
    else if (filesToAdd.length === 0 && droppedFiles.length > 0) {
      alert(`최대 ${props.limit}개까지만 업로드 가능합니다.`);
    }
  }
};

// 파일 선택
const onSelectedFiles = (event) => {
  if (event?.files) {
    emit('update-files', [...event.files]);
    resetFileInput(); // ← 여기에도 추가
  }
};

// 개별 파일 제거
const onRemoveFile = (event) => {
  emit('update-files', [...event.files]);
  resetFileInput();
};

const resetFileInput = async () => {
  if (!fileUploadRef.value) return;

  await nextTick();

  const input = fileUploadRef.value.$el.querySelector('input[type="file"]');
  if (!input) return;

  // 1. 기본 초기화
  input.value = '';

  // 2. DataTransfer로 완전 새 파일 리스트 생성 (가장 중요!)
  const dt = new DataTransfer();
  input.files = dt.files;

  // 3. PrimeVue 내부 상태도 강제로 동기화
  if (fileUploadRef.value.files) {
    fileUploadRef.value.files = [];
  }
};

// 전체 초기화
const onClearFiles = async () => {
  if (!fileUploadRef.value) return;

  fileUploadRef.value.clear();
  await nextTick();

  emit('update-files', []);

  if (fileUploadRef.value.files) {
    fileUploadRef.value.files = [];
  }
};

const onPaste = (e) => {
  const items = e.clipboardData?.items;
  if (!items) return;

  const files = [];
  for (const item of items) {
    if (item.type.indexOf('image') !== -1) {
      files.push(item.getAsFile());
    }
  }

  if (files.length > 0) {
    // 기존 onDrop 로직을 재사용하거나 별도 함수로 분리하여 호출
    handleManualFileUpload(files);
  }
};

// 파일 주입 로직 공통화
const handleManualFileUpload = (newFiles) => {
  if (!fileUploadRef.value) return;

  const currentFiles = fileUploadRef.value.files || [];
  const allowedCount = Math.max(0, props.limit - currentFiles.length);
  const filesToAdd = newFiles.slice(0, allowedCount);

  if (filesToAdd.length > 0) {
    const dt = new DataTransfer();
    filesToAdd.forEach((file) => dt.items.add(file));

    const input = fileUploadRef.value.$el.querySelector('input[type="file"]');
    if (input) {
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  } else {
    alert(`최대 ${props.limit}개까지만 업로드 가능합니다.`);
  }
};

onMounted(() => {
  window.addEventListener('paste', onPaste);
});

onUnmounted(() => {
  window.removeEventListener('paste', onPaste);
});

defineExpose({
  clear: onClearFiles,
});
</script>
