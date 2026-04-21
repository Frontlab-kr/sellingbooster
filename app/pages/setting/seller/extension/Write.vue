<template>
  <div class="p-dialog-inner">
    <h6 class="p-dialog-title">판매 목표 수립</h6>
    <div class="sb-dialog-extension-write">
      <div class="sb-dialog-extension-write__text">
        목표 금액을 설정하거나, 주력 상품의 개별 판매 목표를 직접 관리해 보세요.
      </div>

      <div class="sb-dialog-extension-write-form">
        <div class="sb-dialog-extension-write-form-item">
          <label>목표 기간</label>
          <div
            class="p-datepicker-mask"
            :class="{ active: datePickerRef?.overlayVisible }"
            @click="closeCalendar"
          ></div>
          <DatePicker
            v-model="dates"
            selectionMode="range"
            showButtonBar
            placeholder="날짜를 선택해주세요"
            class="w-full"
            ref="datePickerRef"
            @date-select="onDateSelect"
          />
        </div>
        <div class="sb-dialog-extension-write-form-item">
          <label>목표 금액</label>
          <SbInput placeholder="숫자만 입력해주세요." number />
        </div>
        <div class="sb-dialog-extension-write-form-item">
          <label>
            상품 개별 판매<br />
            목표 수립<br />
            (최대 5개)
          </label>
          <div class="sb-dialog-extension-write-search">
            <SbInput
              v-model="searchKeyword"
              show-search
              @search="onSearch"
              placeholder="공지사항 검색"
            />
          </div>
        </div>
      </div>
      <div class="sb-dialog-extension-write-button">
        <Button severity="primary" label="목표 세우기" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
const searchKeyword = ref('');

//datepicker
const dates = ref(null);
const datePickerRef = ref(null);

const onDateSelect = async () => {
  if (
    Array.isArray(dates.value) &&
    dates.value.length === 2 &&
    dates.value[1]
  ) {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 400));

    const dp = datePickerRef.value;
    if (dp) {
      dp.overlayVisible = false;
      if (typeof dp.hide === 'function') {
        dp.hide();
      }
    }
  }
};
</script>
