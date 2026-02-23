<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>성장스토리</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <NuxtLink to="./write" class="sb-ai">
          <div class="sb-ai__tooltip">
            <p>셀러님만의 성장 스토리를 알려주세요.</p>
          </div>
        </NuxtLink>
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
        <h6>나만의 노하우를 들려주세요.</h6>
        <p>
          완벽하지 않아도 괜찮아요. <br />
          사소한 경험이 누군가에겐 큰 용기가 됩니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon100smile from '@/assets/icons/100/smile.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '성장스토리' },
]);

//sort
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '댓글 수' },
  { name: '좋아요 수' },
]);
const selectedSort = ref(selectedSortOption.value[0]);
</script>
