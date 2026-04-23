<template>
  <div class="flex gap-2 mb-4">
    <Button variant="text" @click="confirm1()" label="alert01" />
  </div>
  <div class="p-dialog-inner">
    <div class="sb-dialog-extension-write">
      <h6 class="p-dialog-title">판매 목표 수립</h6>
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
            <div class="sb-dialog-extension-write-search-head">
              <SbInput
                v-model="searchKeyword"
                show-search
                @search="onSearch"
                placeholder="상품명 또는 상품 코드 검색"
              />
            </div>
            <div class="sb-dialog-extension-write-search-body">
              <div class="sb-dialog-extension-write-search-list" v-scroll-end>
                <div class="sb-dialog-extension-write-search-list-scroll">
                  <div
                    v-for="item in productList"
                    :key="item.id"
                    class="sb-dialog-extension-write-search-list-item"
                    @click="toggleSelection(item.id)"
                  >
                    <div
                      class="sb-dialog-extension-write-search-list-item__check"
                    >
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="selectedProducts"
                            :inputId="'agreeCheck' + item.id"
                            :value="item.id"
                            @change="checkMaxSelection"
                            @click.stop
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sb-dialog-extension-write-search-list-item__thumb"
                    >
                      <img :src="item.thumbnail" :alt="item.title" />
                    </div>

                    <div
                      class="sb-dialog-extension-write-search-list-item__contents"
                    >
                      <div
                        class="sb-dialog-extension-write-search-list-item__text"
                      >
                        <p>{{ item.title }}</p>
                        <strong>{{ item.price }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sb-dialog-extension-write-search-button">
                <Button
                  variant="text"
                  :disabled="selectedProducts.length === 0"
                >
                  <IconSystemCheckS class="ico-system-check-s" />
                  <span class="p-button-label">선택 완료</span>
                </Button>
              </div>
            </div>
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
import { useConfirm } from 'primevue/useconfirm';

import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';

const searchKeyword = ref('');
const selectedProducts = ref([]);

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

const productList = [
  {
    id: 1,
    thumbnail: 'https://picsum.photos/200/300',
    title:
      '[2종세트] 26SS 루즈 스트레이트 데님 [2종세트] 26SS 루즈 스트레이트 데님[2종세트] 26SS 루즈 스트레이트 데님 [2종세트] 26SS 루즈 스트레이트 데님',
    price: '79,410원',
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/200/200',
    title: '폴햄 여성 플리스 스트레이트 팬츠',
    price: '79,410원',
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/200/300',
    title:
      '[2종세트] 26SS 루즈 스트레이트 데님 [2종세트] 26SS 루즈 스트레이트 데님[2종세트] 26SS 루즈 스트레이트 데님 [2종세트] 26SS 루즈 스트레이트 데님',
    price: '79,410원',
  },
  {
    id: 4,
    thumbnail: 'https://picsum.photos/200/200',
    title: '폴햄 여성 플리스 스트레이트 팬츠',
    price: '79,410원',
  },
];

const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: '최대 5개까지만 선택 할 수 있습니다.',
    rejectClass: 'hidden',
    acceptProps: {
      label: '확인',
    },
  });
};

const toggleSelection = (id) => {
  const index = selectedProducts.value.indexOf(id);

  if (index > -1) {
    selectedProducts.value.splice(index, 1);
  } else {
    if (selectedProducts.value.length >= 5) {
      confirm1();
      return;
    }
    selectedProducts.value.push(id);
  }
};

const checkMaxSelection = (event) => {
  if (selectedProducts.value.length > 5) {
    selectedProducts.value.pop();
    confirm1();
  }
};
</script>
