<template>
  <div class="p-dialog-inner">
    <div class="sb-dialog-workspace">
      <h6 class="p-dialog-title">워크스페이스 생성</h6>
      <div class="sb-dialog-workspace-form">
        <div class="sb-dialog-workspace-form-item">
          <label>이름 <strong>*</strong></label>
          <SbInput placeholder="공백 포함 최대 15자 이내 작성" />
        </div>
        <div class="sb-dialog-workspace-form-item">
          <label>설명</label>
          <SbInput placeholder="공백 포함 최대 30자 이내 작성" />
        </div>
        <div class="sb-dialog-workspace-form-item">
          <label> 멤버 초대 </label>
          <div class="sb-dialog-workspace-member">
            <div class="sb-dialog-workspace-form">
              <div class="sb-dialog-workspace-form-item">
                <SbInput placeholder="이메일 주소를 입력해주세요." />
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="신고 사유를 선택해주세요."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-dialog-workspace-button">
        <Button severity="primary" label="목표 세우기" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

import IconIllustrationEmptySearch from '@/assets/icons/illustration/empty-search.svg?component';

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

//
const selectedValue = ref();
const selectedOption = ref([
  { name: '구분 선택' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);
</script>
