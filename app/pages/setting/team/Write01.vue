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
                <div class="sb-dialog-workspace-form-item__input">
                  <SbInput placeholder="이메일 주소를 입력해주세요." />
                </div>
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="구분 선택"
                />
              </div>
              <div class="sb-dialog-workspace-form-item">
                <div class="sb-dialog-workspace-form-item__input">
                  <SbInput placeholder="이메일 주소를 입력해주세요." />
                </div>
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="구분 선택"
                />
              </div>
              <div class="sb-dialog-workspace-form-item">
                <div class="sb-dialog-workspace-form-item__input">
                  <SbInput
                    placeholder="이메일 주소를 입력해주세요."
                    invalid="false"
                  />
                  <Message size="small" severity="error" variant="simple">
                    이메일 형식이 아닙니다. 다시 입력해주세요.
                  </Message>
                </div>
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="구분 선택"
                />
              </div>
              <div class="sb-dialog-workspace-form-item">
                <div class="sb-dialog-workspace-form-item__input">
                  <SbInput placeholder="이메일 주소를 입력해주세요." />
                </div>
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="구분 선택"
                />
              </div>
              <div class="sb-dialog-workspace-form-item">
                <div class="sb-dialog-workspace-form-item__input">
                  <SbInput placeholder="이메일 주소를 입력해주세요." />
                </div>
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="구분 선택"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-dialog-workspace-button">
        <Button
          severity="primary"
          label="워크스페이스 생성 및 초대 메일 발송"
        />
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
  { name: '멤버(편집 가능)' },
  { name: '멤버(뷰어만 가능)' },
]);
</script>
