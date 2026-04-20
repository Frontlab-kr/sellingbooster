<template>
  <div class="sb-policy">
    <div class="sb-policy-head">
      <div class="sb-policy-head__title">
        <h6>서비스 이용약관</h6>
        <Select
          ref="selectRef"
          v-model="selectedSort"
          :options="selectedSortOption"
          optionLabel="name"
          size="small"
          class="p-select-text"
          panelClass="p-select-overlay--text"
          :pt="{
            overlay: {
              onclick: (event) => {
                if (event.target === event.currentTarget) {
                  selectRef.hide();
                }
              },
            },
          }"
        />
      </div>
    </div>
    <PolicyServicePolicy />
  </div>
</template>

<script setup>
//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '공고일자 :  2026년 01월 15일 (현행)' },
  { name: '공고일자 :  2025년 01월 15일' },
  { name: '공고일자 :  2024년 01월 15일' },
]);
const selectedSort = ref(selectedSortOption.value[0]);
</script>
