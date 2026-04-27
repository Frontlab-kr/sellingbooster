<template>
  <SbMobileInfo />
  <div class="flex gap-2 mb-4">
    <Button variant="text" @click="confirm1()" label="alert01" />
    <Button variant="text" @click="confirm2()" label="alert02" />
    <Button variant="text" @click="confirm3()" label="alert03" />
    <Button variant="text" @click="confirm4()" label="alert04" />
    <Button variant="text" @click="confirm5()" label="alert05" />
  </div>
  <div class="flex gap-2 mb-4">
    <Button variant="text" @click="dialog01 = true" label="dialog01" />
    <Button variant="text" @click="dialog02 = true" label="dialog02" />
    <Button variant="text" @click="dialog03 = true" label="dialog03" />
    <Button variant="text" @click="dialog04 = true" label="dialog04" />
    <Button variant="text" @click="dialog05 = true" label="dialog05" />
  </div>
  <div class="sb-subscribe">
    <div class="sb-subscribe__title">
      <h5>요금제 관리 및 결제 정보 한눈에 확인하세요.</h5>
    </div>
    <div class="sb-tab">
      <Button
        label="요금 및 결제"
        variant="text"
        :class="{ active: activeTab === 0 }"
        @click="activeTab = 0"
      />
      <Button
        label="결제내역"
        variant="text"
        :class="{ active: activeTab === 1 }"
        @click="activeTab = 1"
      />
    </div>
    <div v-if="activeTab === 0">
      <div class="sb-subscribe-index">
        <div class="sb-subscribe-index-item">
          <div class="sb-subscribe-index-item__title">
            이용 중인 플랜 및 결제 정보
          </div>
          <div class="sb-subscribe-info-list">
            <div class="sb-subscribe-info-list-item">
              <div class="sb-subscribe-info-list-item-head">
                <strong>이용중인 요금제</strong>
                <Button variant="text">
                  <span class="p-button-label" data-pc-section="label" data-p=""
                    >변경</span
                  >
                  <IconArrowAchevronRight class="ico-arrow-achevron-right" />
                </Button>
              </div>
              <div class="sb-subscribe-info-list-item-body">
                <ul>
                  <li>
                    <strong>무료</strong>
                    <p></p>
                  </li>
                  <li>
                    <strong>다음 결제일</strong>
                    <p class="sb-subscribe-info-list-item-body__none">-</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sb-subscribe-info-list-item">
              <div class="sb-subscribe-info-list-item-head">
                <strong>결제 수단</strong>
                <Button variant="text">
                  <span class="p-button-label" data-pc-section="label" data-p=""
                    >등록</span
                  >
                  <IconArrowAchevronRight class="ico-arrow-achevron-right" />
                </Button>
              </div>
              <div class="sb-subscribe-info-list-item-body">
                <div class="sb-subscribe-info-list-item-body__none">
                  등록된 결제 수단이 없습니다.<br />
                  결제 수단을 등록하고 편하게 결제 하세요.
                </div>
              </div>
            </div>
          </div>
          <div class="sb-subscribe-info-list__button">
            <Button label="카드 관리" severity="contrast" outlined />
            <Button label="계좌 관리" severity="contrast" outlined />
          </div>
        </div>
        <div class="sb-subscribe-index-item">
          <div class="sb-subscribe-index-item__title">크레딧 관리</div>
          <div class="sb-subscribe-index-chart">
            <div class="sb-subscribe-index-chart__title">
              <strong>CREDIT</strong>
              <h5><span>50</span>/100</h5>
            </div>
            <SbChartGaugeCredit :score="36" />
          </div>
        </div>
        <div class="sb-subscribe-index-item">
          <div class="sb-subscribe-index-item__title">크레딧 구매</div>
          <div class="sb-subscribe-credit-list">
            <button
              type="button"
              class="sb-subscribe-credit-list-item"
              :class="{ active: selectedCredit === 'C1' }"
              @click="selectedCredit = 'C1'"
            >
              <div class="sb-subscribe-credit-list-item__title">C1</div>
              <dl>
                <dt>
                  <h4>40</h4>
                  <span>CREDIT</span>
                </dt>
                <dd>
                  <strong>4,000원</strong>
                  <span></span>
                </dd>
              </dl>
            </button>
            <button
              type="button"
              class="sb-subscribe-credit-list-item"
              :class="{ active: selectedCredit === 'C2' }"
              @click="selectedCredit = 'C2'"
            >
              <div class="sb-subscribe-credit-list-item__best">
                <IconEtcBest class="ico-etc-best" />
                <p>BEST</p>
              </div>
              <div class="sb-subscribe-credit-list-item__title">C2</div>
              <dl>
                <dt>
                  <h4>110</h4>
                  <span>CREDIT</span>
                </dt>
                <dd>
                  <strong>10,000원</strong>
                  <span>10% 보너스</span>
                </dd>
              </dl>
            </button>
            <button
              type="button"
              class="sb-subscribe-credit-list-item"
              :class="{ active: selectedCredit === 'C3' }"
              @click="selectedCredit = 'C3'"
            >
              <div class="sb-subscribe-credit-list-item__title">C3</div>
              <dl>
                <dt>
                  <h4>600</h4>
                  <span>CREDIT</span>
                </dt>
                <dd>
                  <strong>50,000원</strong>
                  <span>20% 보너스</span>
                </dd>
              </dl>
            </button>
          </div>
          <div class="sb-subscribe-credit-list__button">
            <Button label="결제 하기" severity="primary" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="activeTab === 1" class="tab02">
      <div class="sb-subscribe-history">
        <div class="sb-subscribe-index">
          <div class="sb-subscribe-index-item">
            <div class="sb-subscribe-info-list">
              <div class="sb-subscribe-info-list-item">
                <div class="sb-subscribe-info-list-item-head">
                  <strong>이용중인 플랜 및 결제 정보</strong>
                </div>
                <div class="sb-subscribe-info-list-item-body">
                  <ul>
                    <li>
                      <strong>Pro 플랜 </strong>
                      <p>월 29,000원</p>
                    </li>
                    <li>
                      <strong>다음 결제일</strong>
                      <p>
                        <strong class="text-primary">2026.04.05</strong>
                      </p>
                      <strong>마지막 결제일</strong>
                      <p>
                        <strong>2026.04.05</strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="sb-subscribe-info-list-item">
                <div class="sb-subscribe-info-list-item-head">
                  <strong>결제 수단</strong>
                </div>
                <div class="sb-subscribe-info-list-item-body">
                  <div class="sb-subscribe-info-list-item-card">
                    <div class="sb-subscribe-info-list-item-card__icon">
                      <img src="./../../../assets/icons/card/kb.png" alt="" />
                    </div>
                    <dl>
                      <dt>
                        <strong>KB국민카드</strong>
                        <Badge
                          value="대표 결제 수단"
                          severity="success"
                        ></Badge>
                      </dt>
                      <dd>1234-****-****-6789</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div class="sb-subscribe-info-list__button">
              <Button
                label="요금 및 결제 관리하기"
                severity="contrast"
                outlined
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-subscribe-table">
        <div class="sb-subscribe-table-tab">
          <div class="sb-tab-circle">
            <Button
              label="결제"
              variant="text"
              :class="{ active: activeTab02 === 0 }"
              @click="activeTab02 = 0"
            />
            <Button
              label="결제 실패"
              variant="text"
              :class="{ active: activeTab02 === 1 }"
              @click="activeTab02 = 1"
            />
          </div>
        </div>
        <div v-if="activeTab02 === 0">
          <div class="sb-subscribe-table-head">
            <div class="sb-subscribe-table-head__date">
              <div class="sb-chip">
                <div class="sb-chip__title">분석 기간 선택</div>
                <div class="sb-radio">
                  <div
                    class="sb-radio-item"
                    v-for="item in radioRange"
                    :key="item.id"
                  >
                    <RadioButton
                      v-model="selectedRevenue"
                      :inputId="item.id"
                      :value="item.value"
                      name="revenueRange"
                    />
                    <label :for="item.id">{{ item.label }}</label>
                  </div>
                </div>
              </div>
              <DatePicker
                v-model="dates1"
                selectionMode="range"
                showButtonBar
                placeholder="날짜를 선택해주세요"
                ref="datePickerRef1"
                @date-select="onDateSelect(dates1, datePickerRef1)"
                style="min-width: 260px"
              />
            </div>
            <div class="sb-subscribe-table-head__sort">
              <strong> 결제 상태 </strong>
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
          <div class="sb-table">
            <DataTable
              v-scroll-end
              :value="paymentHistory"
              responsiveLayout="scroll"
              removableSort
              scrollable
            >
              <Column
                field="paymentDate"
                header="결제일시"
                sortable
                style="width: 200px"
              />

              <Column
                field="productName"
                header="상품명"
                bodyClass="text-left"
                style="min-width: 300px"
              >
                <template #body="slotProps">
                  {{ slotProps.data.productName }}
                </template>
              </Column>

              <Column
                field="amount"
                header="결제 금액"
                sortable
                bodyClass="text-right"
                style="width: 160px"
              >
                <template #body="slotProps">
                  {{ slotProps.data.amount.toLocaleString() }}원
                </template>
              </Column>

              <Column
                field="paymentMethod"
                header="결제 수단"
                style="width: 200px"
              />

              <Column field="status" header="결제 상태" style="width: 200px">
                <template #body="slotProps">
                  <span
                    :class="{
                      'text-danger':
                        slotProps.data.status === '취소' ||
                        slotProps.data.status === '환불',
                    }"
                  >
                    {{ slotProps.data.status }}
                  </span>
                </template>
              </Column>

              <Column field="receipt" header="영수증" style="width: 200px">
                <template #body="slotProps">
                  {{ slotProps.data.receipt || '-' }}
                </template>
              </Column>

              <Column header="비고" style="width: 200px">
                <template #body="slotProps">
                  <Button
                    v-if="slotProps.data.status === '환불'"
                    variant="text"
                    label="재시도"
                    class="underline text-danger"
                    @click="handleRetry(slotProps.data)"
                  />
                  <Button
                    v-else
                    variant="text"
                    label="상세"
                    class="underline"
                    @click="handleDetail(slotProps.data)"
                  />
                </template>
              </Column>
            </DataTable>
          </div>
          <SbPaginator />
        </div>
        <div v-if="activeTab02 === 1">
          <div class="sb-subscribe-table-head">
            <div class="sb-subscribe-table-head__date">
              <div class="sb-chip">
                <div class="sb-chip__title">분석 기간 선택</div>
                <div class="sb-radio">
                  <div
                    class="sb-radio-item"
                    v-for="item in radioRange"
                    :key="item.id"
                  >
                    <RadioButton
                      v-model="selectedRevenue"
                      :inputId="item.id"
                      :value="item.value"
                      name="revenueRange"
                    />
                    <label :for="item.id">{{ item.label }}</label>
                  </div>
                </div>
              </div>
              <DatePicker
                v-model="dates1"
                selectionMode="range"
                showButtonBar
                placeholder="날짜를 선택해주세요"
                ref="datePickerRef1"
                @date-select="onDateSelect(dates1, datePickerRef1)"
                style="min-width: 260px"
              />
            </div>
          </div>
          <div class="sb-table">
            <DataTable
              v-scroll-end
              :value="paymentFailureList"
              responsiveLayout="scroll"
              removableSort
              scrollable
            >
              <Column
                field="paymentDate"
                header="결제일시"
                sortable
                style="width: 260px"
              />

              <Column
                field="productName"
                header="상품명"
                bodyClass="text-left"
                style="min-width: 260px"
              >
                <template #body="slotProps">
                  {{ slotProps.data.productName }}
                </template>
              </Column>

              <Column
                field="amount"
                header="결제 금액"
                sortable
                bodyClass="text-right"
                style="width: 160px"
              >
                <template #body="slotProps">
                  {{ slotProps.data.amount.toLocaleString() }}원
                </template>
              </Column>

              <Column
                field="paymentMethod"
                header="결제 수단"
                style="width: 260px"
              />

              <Column
                field="failureReason"
                header="실패 사유"
                style="width: 260px"
              >
                <template #body="slotProps">
                  <span class="text-danger">
                    {{ slotProps.data.failureReason }}
                  </span>
                </template>
              </Column>

              <Column field="memo" header="비고" style="width: 260px">
                <template #body="slotProps">
                  {{ slotProps.data.memo || '-' }}
                </template>
              </Column>
            </DataTable>
          </div>
          <SbPaginator />
        </div>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="dialog01" modal class="p-dialog-sm">
    <dialog01Contents />
  </Dialog>

  <Dialog v-model:visible="dialog02" modal>
    <dialog02Contents />
  </Dialog>

  <Dialog v-model:visible="dialog03" modal>
    <dialog03Contents />
  </Dialog>

  <Dialog v-model:visible="dialog04" modal>
    <dialog04Contents />
  </Dialog>

  <Dialog
    v-model:visible="dialog05"
    modal
    style="min-width: 600px; width: 600px"
  >
    <dialog05Contents />
  </Dialog>

  <ConfirmDialog></ConfirmDialog>
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import dialog01Contents from './dialog01.vue';
import dialog02Contents from './dialog02.vue';
import dialog03Contents from './dialog03.vue';
import dialog04Contents from './dialog04.vue';
import dialog05Contents from './dialog05.vue';

import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconEtcBest from '@/assets/icons/etc/best.svg?component';

const activeTab = ref(0);
const activeTab02 = ref(0);

//radio
const selectedRevenue = ref('1d'); // 기본 선택값

const radioRange = [
  { id: 'range1', label: '1일', value: '1d' },
  { id: 'range2', label: '7일', value: '7d' },
  { id: 'range3', label: '1달', value: '1m' },
  { id: 'range4', label: '6개월', value: '6m' },
];

//datepicker
const dates1 = ref(null);
const dates2 = ref(null);

const datePickerRef1 = ref(null);
const datePickerRef2 = ref(null);

const onDateSelect = async (modelValue, targetRef) => {
  // 범위 선택 완료 확인
  if (Array.isArray(modelValue) && modelValue.length === 2 && modelValue[1]) {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (targetRef) {
      targetRef.overlayVisible = false;
      if (typeof targetRef.hide === 'function') {
        targetRef.hide();
      }
    }
  }
};

//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '전체' },
  { name: '완료' },
  { name: '취소' },
  { name: '실패' },
  { name: '환불' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

//credit
const selectedCredit = ref('C2');
const selectCredit = (id) => {
  selectedCredit.value = id;
};

//dialog
const dialog01 = ref(false);
const dialog02 = ref(false);
const dialog03 = ref(false);
const dialog04 = ref(false);
const dialog05 = ref(false);

//alert
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message:
      '등록된 결제 수단이 없습니다.\n주로 이용하실 결제 수단을 먼저 등록해주세요.',
    rejectClass: 'hidden',
    acceptProps: {
      label: '확인',
    },
  });
};
const confirm2 = () => {
  confirm.require({
    message: 'Pro 플랜 서비스를 선택 결제 하시겠습니까?',
    rejectProps: {
      label: '아니오',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '예',
    },
    accept: () => {
      showToast01();
    },
  });
};
const confirm3 = () => {
  confirm.require({
    message:
      'Pro 플랜이 결제되었습니다.\n지금부터 Pro 플랜의\n다양한 서비스를 이용하실 수 있습니다.',
    rejectClass: 'hidden',
    acceptProps: {
      label: '확인',
    },
  });
};
const confirm4 = () => {
  confirm.require({
    message: '대표 결제 수단을 변경하시겠습니까?',
    rejectProps: {
      label: '아니오',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '예',
    },
    accept: () => {
      showToast02();
    },
  });
};
const confirm5 = () => {
  confirm.require({
    message: '해당 결제 수단을 삭제하시겠습니까?',
    rejectProps: {
      label: '아니오',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '예',
    },
    accept: () => {
      showToast03();
    },
  });
};

//toast
const toast = useToast();

const showToast01 = () => {
  toast.add({
    detail: '무료 플랜 서비스가 정상적으로 선택되었습니다.',
    group: 'bc',
    life: 3000,
  });
};
const showToast02 = () => {
  toast.add({
    detail: '대표 결제 수단이 변경되었습니다.',
    group: 'bc',
    life: 3000,
  });
};
const showToast03 = () => {
  toast.add({
    detail: '결제 수단이 삭제되었습니다.',
    group: 'bc',
    life: 3000,
  });
};

const paymentHistory = ref([
  {
    paymentDate: '2026.03.31',
    productName: 'Pro 플랜(월간)',
    amount: 999999999,
    paymentMethod: '신용카드(KB국민)',
    status: '결제 완료',
    receipt: '-',
    id: 1,
  },
  {
    paymentDate: '2026.03.31',
    productName: '500 크레딧(+10% 추가)',
    amount: 50000,
    paymentMethod: '계좌이체(신한은행)',
    status: '취소',
    receipt: '현금 영수증(개인)',
    id: 2,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    status: '환불',
    receipt: '사업자 영수증',
    id: 3,
  },
  {
    paymentDate: '2026.03.31',
    productName: 'Pro 플랜(월간)',
    amount: 29000,
    paymentMethod: '신용카드(KB국민)',
    status: '결제 완료',
    receipt: '-',
    id: 4,
  },
  {
    paymentDate: '2026.03.31',
    productName: '500 크레딧(+10% 추가)',
    amount: 50000,
    paymentMethod: '계좌이체(신한은행)',
    status: '취소',
    receipt: '현금 영수증(개인)',
    id: 5,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    status: '환불',
    receipt: '사업자 영수증',
    id: 6,
  },
  {
    paymentDate: '2026.03.31',
    productName: 'Pro 플랜(월간)',
    amount: 29000,
    paymentMethod: '신용카드(KB국민)',
    status: '결제 완료',
    receipt: '-',
    id: 7,
  },
  {
    paymentDate: '2026.03.31',
    productName: '500 크레딧(+10% 추가)',
    amount: 50000,
    paymentMethod: '계좌이체(신한은행)',
    status: '취소',
    receipt: '현금 영수증(개인)',
    id: 8,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    status: '환불',
    receipt: '사업자 영수증',
    id: 9,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    status: '환불',
    receipt: '사업자 영수증',
    id: 10,
  },
]);

const paymentFailureList = ref([
  {
    paymentDate: '2026.03.31',
    productName: 'Pro 플랜(월간)',
    amount: 999999999,
    paymentMethod: '신용카드(KB국민)',
    failureReason: '카드 유효기간 만료',
    memo: '',
    id: 11,
  },
  {
    paymentDate: '2026.03.31',
    productName: '500 크레딧(+10% 추가)',
    amount: 50000,
    paymentMethod: '계좌이체(신한은행)',
    failureReason: '잔액 부족',
    memo: '',
    id: 12,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    failureReason: '시스템 점검',
    memo: '',
    id: 13,
  },
  {
    paymentDate: '2026.03.31',
    productName: 'Pro 플랜(월간)',
    amount: 29000,
    paymentMethod: '신용카드(KB국민)',
    failureReason: '한도 초과',
    memo: '',
    id: 14,
  },
  {
    paymentDate: '2026.03.31',
    productName: '500 크레딧(+10% 추가)',
    amount: 50000,
    paymentMethod: '계좌이체(신한은행)',
    failureReason: '시스템 점검',
    memo: '',
    id: 15,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    failureReason: '거래 정지 카드',
    memo: '',
    id: 16,
  },
  {
    paymentDate: '2026.03.31',
    productName: 'Pro 플랜(월간)',
    amount: 29000,
    paymentMethod: '신용카드(KB국민)',
    failureReason: '잔액 부족',
    memo: '',
    id: 17,
  },
  {
    paymentDate: '2026.03.31',
    productName: '500 크레딧(+10% 추가)',
    amount: 50000,
    paymentMethod: '계좌이체(신한은행)',
    failureReason: '사용자 결제 중단',
    memo: '',
    id: 18,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    failureReason: '할부 개월 수 초과',
    memo: '',
    id: 19,
  },
  {
    paymentDate: '2026.03.31',
    productName: '스타터 플랜(연간)',
    amount: 180000,
    paymentMethod: '간편결제(카카오페이)',
    failureReason: '시스템 오류',
    memo: '',
    id: 20,
  },
]);
</script>
