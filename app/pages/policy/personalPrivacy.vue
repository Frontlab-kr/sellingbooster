<template>
  <div class="sb-privacypolicy">
    <div class="sb-privacypolicy-title">
      <h4>개인정보 처리 방침</h4>

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
    <div class="sb-privacypolicy-index">
      <div class="sb-privacypolicy-index-item">
        <NuxtLink to="#section01">
          <p>제1조 개인정보의 처리 목적</p>
        </NuxtLink>
        <NuxtLink to="#section02">
          <p>제2조 개인정보의 수집 항목 및 방법</p>
        </NuxtLink>
        <NuxtLink to="#section03">
          <p>제3조 개인정보의 처리 및 보유 기간</p>
        </NuxtLink>
        <NuxtLink to="#section04">
          <p>제4조 개인정보의 제3자 제공</p>
        </NuxtLink>
        <NuxtLink to="#section05">
          <p>제5조 개인정보 처리 위탁</p>
        </NuxtLink>
        <NuxtLink to="#section06">
          <p>제6조 개인정보의 국외 이전</p>
        </NuxtLink>
        <NuxtLink to="#section07">
          <p>제7조 개인정보의 파기</p>
        </NuxtLink>
        <NuxtLink to="#section08">
          <p>제8조 정보주체와 법정대리인의 권리•의무 및 행사방법</p>
        </NuxtLink>
      </div>
      <div class="sb-privacypolicy-index-item">
        <NuxtLink to="#section09">
          <p>제9조 개인정보의 안전성 확보조치</p>
        </NuxtLink>
        <NuxtLink to="#section10">
          <p>제10조 링크사이트</p>
        </NuxtLink>
        <NuxtLink to="#section11">
          <p>제11조 광고성 정보 전송</p>
        </NuxtLink>
        <NuxtLink to="#section12">
          <p>
            제12조 개인정보의 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항
          </p>
        </NuxtLink>
        <NuxtLink to="#section13">
          <p>제13조 개인정보보호 책임자 및 관리자</p>
        </NuxtLink>
        <NuxtLink to="#section14">
          <p>제14조 의견수렴 및 불만처리</p>
        </NuxtLink>
        <NuxtLink to="#section15">
          <p>제15조 고지의 의무</p>
        </NuxtLink>
      </div>
    </div>
    <PolicyPersonalPrivacy />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
});

//sort
const selectRef = ref(null);
const selectedSortOption = ref([{ name: '2026년 01월 15일 (현행)' }]);
const selectedSort = ref(selectedSortOption.value[0]);
</script>
