<template>
  <SbMobileInfo />

  <div class="sb-seller-extension">
    <div class="sb-seller-extension-head">
      <h5>셀러의 성공을 위한 셀러 확장</h5>
    </div>
    <div class="sb-seller-extension-body">
      <div class="sb-seller-extension-dashboard">
        <div class="sb-seller-extension-dashboard-status">
          <div class="sb-seller-extension-dashboard-status-chart">
            <SbChartGaugeCircle :score="72" />
            <div class="sb-seller-extension-dashboard-status-chart__text">
              <p>달성율</p>
              <div class="sb-seller-extension-dashboard-status-chart__percent">
                <h1>72</h1>
                <h3>%</h3>
              </div>
            </div>
          </div>

          <div class="sb-seller-extension-dashboard-status-contents">
            <div class="sb-seller-extension-dashboard-status-date">
              <label> 2026.02.01~2026.05.31 </label>
              <p>
                <span>남은 기간 : <span class="text-primary">55</span>일</span>
                <Badge value="진행 중" severity="success"></Badge>
              </p>
            </div>
            <div class="sb-seller-extension-dashboard-status-price">
              <dl>
                <dt>목표 금액</dt>
                <dd>
                  <h4>12,680,760원</h4>
                </dd>
              </dl>
              <dl>
                <dt>달성 금액</dt>
                <dd>
                  <h4>5,706,342원</h4>
                </dd>
              </dl>
            </div>
            <div class="sb-seller-extension-dashboard-status-product">
              <div class="sb-seller-extension-dashboard-status-none">
                판매 상품을 정해놓으신 것이 있으신가요?<br />
                <strong>목표 수정에서 상품을 설정</strong> 해주세요.<br />
                목표 판매량을 실시간으로 확인할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
        <div class="sb-seller-extension-dashboard-ai" v-scroll-end>
          <div class="sb-seller-extension-dashboard-ai-scroll">
            <div class="sb-ai sb-ai--right">
              <div class="sb-ai__tooltip">
                <p>AI의 추천 전략</p>
              </div>
            </div>
            <div class="sb-seller-extension-dashboard-ai-list">
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>
                  지난주 대비, 현재까지 매출이
                  <strong>0% 성장한 상황</strong>이며, 목표 기간까지
                  <strong>목표 금액의 28% 미달</strong>될 것으로 예상이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-seller-extension-dashboard-button">
        <Button
          severity="contrast"
          outlined
          label="종료하기"
          @click="confirm1()"
        />
        <Button severity="primary" label="목표 수정하기" @click="confirm2()" />
      </div>
    </div>
    <div class="sb-seller-extension-foot">
      <div class="sb-seller-extension-table">
        <div class="sb-seller-extension-table-head">
          <strong>지난 레포트</strong>
        </div>

        <ExtensionTable />
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogWrite01" modal>
    <Write01 />
  </Dialog>

  <Dialog v-model:visible="dialogWrite02" modal>
    <Write02 />
  </Dialog>

  <Dialog v-model:visible="dialogWrite03" modal>
    <Write03 />
  </Dialog>

  <ConfirmDialog></ConfirmDialog>
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
import { ref } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

import ExtensionTable from './ExtensionTable.vue';
import Write01 from './Write01.vue';
import Write02 from './Write02.vue';
import Write03 from './Write03.vue';

//dialog
const dialogWrite01 = ref(false);
const dialogWrite02 = ref(false);
const dialogWrite03 = ref(false);

//confirm
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: '진행 중인 계획을 종료 하시겠습니까?',
    rejectProps: {
      label: '아니오',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '예',
    },
  });
};
const confirm2 = () => {
  confirm.require({
    message: '진행 중인 계획을 수정 하시겠습니까?',
    rejectProps: {
      label: '아니오',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '예',
    },
  });
};

//toast
const toast = useToast();

const showToast = () => {
  toast.add({
    detail: '계획이 종료 되었습니다. \n 새로운 목표로 다시 도전해보세요.',
    group: 'bc',
    life: 3000,
  });
};

onMounted(() => {
  setTimeout(() => {
    showToast();
  }, 2000);
});
</script>
