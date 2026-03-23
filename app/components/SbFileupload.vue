<template>
  <div class="sb-fileupload">
    <FileUpload
      name="demo[]"
      url="/api/upload"
      @upload="onTemplatedUpload($event)"
      :multiple="false"
      :maxFileSize="50000000"
      :fileLimit="limit"
      :accept="accept"
      @select="onSelectedFiles"
    >
      <template
        #header="{ chooseCallback, uploadCallback, clearCallback, files }"
      >
        <div class="sb-fileupload__button">
          <Button
            @click="chooseCallback()"
            severity="contrast"
            label="파일 찾기"
            size="small"
            :disabled="files.length >= limit"
          />
        </div>
      </template>
      <template
        #content="{
          files,
          uploadedFiles,
          removeUploadedFileCallback,
          removeFileCallback,
        }"
        v-if="files.length > 0"
      >
        <div class="sb-attachment">
          <div
            target="_blank"
            class="sb-attachment-item"
            v-for="(file, index) of files"
            :key="file.name + file.type + file.size"
          >
            <a :href="file.objectURL">
              {{ file.name }}
            </a>

            <div class="sb-attachment-item__size">
              <strong>{{ formatSize(file.size) }}</strong> / 50MB
            </div>
            <Button
              variant="text"
              @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
            >
              <template #icon>
                <IconSystemDelete class="ico-system-delete" />
              </template>
            </Button>
          </div>
        </div>
      </template>
      <template #empty> </template>
    </FileUpload>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { usePrimeVue } from 'primevue/config';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';

const props = defineProps({
  accept: {
    type: String,
    default: '*',
  },
  limit: {
    type: Number,
    default: 5,
  },
});

const $primevue = usePrimeVue();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
  files.value = event.files;
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = (callback) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const onTemplatedUpload = () => {};

const formatSize = (bytes) => {
  const k = 1024;
  const sizes = $primevue.config.locale.fileSizeTypes;

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = Math.ceil(bytes / Math.pow(k, i));

  return `${formattedSize}${sizes[i]}`;
};
</script>
