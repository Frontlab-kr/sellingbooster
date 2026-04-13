<template>
  <div class="sb-dialog-memowrite">
    <div class="sb-dialog-memowrite-form">
      <div class="sb-dialog-memowrite-form-item">
        <label>일자</label>
        <DatePicker
          v-model="dates"
          selectionMode="range"
          showButtonBar
          placeholder="날짜를 선택해주세요"
          class="w-full"
        />
      </div>
      <div class="sb-dialog-memowrite-form-item">
        <label>항목</label>
        <Select
          v-model="selectedValue"
          :options="selectedOption"
          optionLabel="name"
          placeholder="항목을 선택해주세요."
          class="w-full"
        />
      </div>
      <div class="sb-dialog-memowrite-form-item">
        <label>제목</label>
        <SbInput placeholder="공백 포함 최대 30자 이내 작성" />
      </div>
      <div class="sb-dialog-memowrite-form-item">
        <label>내용</label>
        <SbInput placeholder="공백 포함 최대 50자 이내 작성" />
      </div>
    </div>
    <div class="pc">
      <div class="sb-dialog-memowrite-button">
        <Button severity="contrast" label="삭제" outlined />
        <Button severity="primary" label="저장" />
      </div>
    </div>
    <div class="mo">
      <div class="sb-dialog-memowrite-button">
        <Button severity="contrast" label="삭제" outlined size="large" />
        <Button severity="primary" label="저장" size="large" />
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedValue = ref();
const selectedOption = ref([
  { name: '상품 소싱' },
  { name: '판매 관리' },
  { name: '정산 일정' },
  { name: '광고/마케팅' },
  { name: '세금/회계' },
  { name: '대출/자금' },
  { name: '메모' },
]);
</script>
