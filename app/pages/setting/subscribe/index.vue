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
  </div>
  <div class="sb-subscribe">
    <div class="sb-subscribe__title">
      <h4>요금제 관리 및 결제 정보 한눈에 확인하세요.</h4>
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
                    <p>-</p>
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
        </div>
        <div class="sb-subscribe-index-item">
          <div class="sb-subscribe-index-item__title">크레딧 구매</div>
          <div class="sb-subscribe-credit-list">
            <div class="sb-subscribe-credit-list-item">
              <div class="sb-subscribe-credit-list-item__title">C1</div>
              <dl>
                <dt>
                  <strong>40</strong>
                  <span>CREDIT</span>
                </dt>
                <dd>
                  <strong>4,000원</strong>
                  <span></span>
                </dd>
              </dl>
            </div>
            <div
              class="sb-subscribe-credit-list-item sb-subscribe-credit-list-item--best"
            >
              <div class="sb-subscribe-credit-list-item__title">C2</div>
              <dl>
                <dt>
                  <strong>110</strong>
                  <span>CREDIT</span>
                </dt>
                <dd>
                  <strong>10,000원</strong>
                  <span>10% 보너스</span>
                </dd>
              </dl>
            </div>
            <div class="sb-subscribe-credit-list-item">
              <div class="sb-subscribe-credit-list-item__title">C3</div>
              <dl>
                <dt>
                  <strong>600</strong>
                  <span>CREDIT</span>
                </dt>
                <dd>
                  <strong>50,000원</strong>
                  <span>20% 보너스</span>
                </dd>
              </dl>
            </div>
          </div>
          <div class="sb-subscribe-credit-list__button">
            <Button label="결제 하기" severity="primary" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="activeTab === 1" class="tab02"></div>
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

import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

const activeTab = ref(0);

//dialog
const dialog01 = ref(false);

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
</script>
