<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>Q&A</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <button class="sb-ai" @click="writeOpen">
          <div class="sb-ai__tooltip">
            <p>질문하고 바로 답변받기 👆</p>
          </div>
        </button>
      </div>
    </div>
    <div class="sb-nodata">
      <IconIllustrationSmile class="ico-illustration-smile" />
      <div class="sb-nodata__text">
        <p>
          사소한것도 좋아요.<br />
          혼자 고민하지 말고 편하게 물어보세요.
        </p>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogWrite" modal class="p-dialog--full">
    <div class="p-dialog-inner">
      <h6 class="p-dialog-title">Q&A 작성하기</h6>
      <Write />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

import Write from './write.vue';

//dialog
const dialogWrite = ref(false);
const dialogView = ref(false);

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'Q&A' },
]);

const writeOpen = () => {
  dialogWrite.value = true;
};
</script>
