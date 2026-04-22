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
              <dl>
                <dt>판매 상품</dt>
                <dd>
                  <div
                    class="sb-seller-extension-dashboard-status-product-list"
                    v-scroll-end
                  >
                    <div
                      class="sb-seller-extension-dashboard-status-product-list-scroll"
                    >
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>72</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>48</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>20</strong>/60개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>52</strong>/80개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>72</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>48</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>20</strong>/60개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>52</strong>/80개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>72</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>48</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>20</strong>/60개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>52</strong>/80개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>72</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>48</strong>/100개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>20</strong>/60개</p>
                      </div>
                      <div
                        class="sb-seller-extension-dashboard-status-product-item"
                        v-tooltip.top="{
                          value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                          escape: false,
                        }"
                      >
                        <img src="https://picsum.photos/200/300" alt="" />
                        <p><strong>52</strong>/80개</p>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
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
                  5개 상품 중 3개 상품은 목표 기간 내에 목표 달성이 가능할 것
                  같습니다.
                </p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 28개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 35개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 28개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 35개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 28개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 35개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 28개</strong> 팔아야 합니다.</p>
              </div>
              <div class="sb-seller-extension-dashboard-ai-list-item">
                <p>{상품명} 상품을 <strong>하루 35개</strong> 팔아야 합니다.</p>
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
