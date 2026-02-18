<template>
  <div class="sb-fileupload">
    <FileUpload
      name="demo[]"
      url="/api/upload"
      @upload="onTemplatedUpload($event)"
      :multiple="true"
      :maxFileSize="50000000"
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
      >
        <div v-if="files.length > 0">
          <div class="sb-attachment">
            <div
              class="sb-attachment-item"
              v-for="(file, index) of files"
              :key="file.name + file.type + file.size"
            >
              <a :href="file.objectURL">
                <p>
                  {{ file.name }}
                </p>

                <div class="sb-attachment-item__size">
                  <strong>{{ formatSize(file.size) }}</strong> / 50MB
                </div>
                <Icon
                  name="sb:24-delete"
                  class="ico-24-delete"
                  @click="
                    onRemoveTemplatingFile(file, removeFileCallback, index)
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </template>
      <template #empty> </template>
    </FileUpload>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';

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
  const k = 10240;
  const dm = 3;
  const sizes = $primevue.config.locale.fileSizeTypes;

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize}${sizes[i]}`;
};
</script>
