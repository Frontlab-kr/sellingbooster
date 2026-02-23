<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>Q&A</h4>
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
    <div class="sb-community-sort">
      <Select
        v-model="selectedSort"
        :options="selectedSortOption"
        optionLabel="name"
        size="small"
        class="p-select-text"
        panelClass="p-select-overlay--text"
      />
    </div>
    <div class="sb-nodata">
      <Icon100smile class="ico-100-smile" />
      <div class="sb-nodata__text">
        <p>
          사소한것도 좋아요.<br />
          혼자 고민하지 말고 편하게 물어보세요.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon100smile from '@/assets/icons/100/smile.svg?component';

//dialog
const dialogWrite = ref(false);
const dialogView = ref(false);

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'Q&A' },
]);

//sort
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '답변 대기' },
  { name: '답변 완료' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

const viewOpen = () => {
  dialogView.value = true;
};
const writeOpen = () => {
  dialogWrite.value = true;
};
</script>
