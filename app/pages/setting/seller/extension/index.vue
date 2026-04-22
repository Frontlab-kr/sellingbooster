<template>
  <SbMobileInfo />
  <div class="flex gap-2 mb-4">
    <Button
      severity="contrast"
      outlined
      size="small"
      label="02등록&수정"
      @click="dialogWrite01 = true"
    />
    <Button
      severity="contrast"
      outlined
      size="small"
      label="03상품검색상태"
      @click="dialogWrite02 = true"
    />
    <Button
      severity="contrast"
      outlined
      size="small"
      label="04상품선택및수정모드"
      @click="dialogWrite03 = true"
    />
  </div>

  <div class="sb-seller-extension">
    <div class="sb-seller-extension-head">
      <h5>셀러의 성공을 위한 셀러 확장</h5>
    </div>
    <div class="sb-seller-extension-body">
      <!-- <div class="sb-seller-extension-body-head">
        <div></div>
        <Button variant="text">
          <span class="p-button-label">새로운 목표 세우기</span>
          <IconSystemPlus class="ico-system-plus" />
        </Button>
      </div> -->
      <div class="sb-seller-extension-index">
        <IconIllustrationEmptyFlag class="ico-illustration-empty-flag" />
        <div class="sb-seller-extension-index__text">
          성공적인 쇼핑몰 운영의 첫걸음!<br />
          매출 데이터 기반 AI 스마트 전략 추천으로 셀러님의 목표 달성을
          지원합니다.
        </div>
        <Button label="지금 시작하기" severity="primary" outlined />
      </div>
    </div>
    <div class="sb-seller-extension-foot">
      <div class="sb-seller-extension-table">
        <div class="sb-seller-extension-table-head">
          <strong>지난 레포트</strong>
        </div>

        <div class="sb-table">
          <DataTable :value="campaigns" responsiveLayout="scroll">
            <Column field="period" header="기간" style="width: 233px"></Column>
            <Column
              field="targetAmount"
              header="목표금액"
              bodyClass="text-right"
              style="width: 233px"
            >
              <template #body="slotProps">
                {{
                  slotProps.data.targetAmount
                    ? slotProps.data.targetAmount.toLocaleString() + ' 원'
                    : '-'
                }}
              </template>
            </Column>

            <Column
              field="achievedAmount"
              header="달성금액"
              bodyClass="text-right"
              style="width: 233px"
            >
              <template #body="slotProps">
                {{
                  slotProps.data.achievedAmount
                    ? slotProps.data.achievedAmount.toLocaleString() + ' 원'
                    : '-'
                }}
              </template>
            </Column>

            <Column
              field="achievementRate"
              header="달성률"
              bodyClass="text-right"
              style="width: 233px"
            >
              <template #body="slotProps">
                <span
                  v-if="slotProps.data.achievementRate"
                  :class="
                    slotProps.data.achievementRate >= 100
                      ? 'text-success'
                      : 'text-danger'
                  "
                >
                  {{ slotProps.data.achievementRate }}%
                </span>
                <span v-else>-</span>
              </template>
            </Column>

            <Column header="목표 상품 판매량" style="width: 300px">
              <template #body="slotProps">
                <div
                  v-if="
                    slotProps.data.products && slotProps.data.products.length
                  "
                  class="sb-table-body-product"
                >
                  <img
                    v-for="(img, index) in slotProps.data.products"
                    :key="index"
                    :src="img"
                  />
                </div>
                <span v-else>-</span>
              </template>
            </Column>

            <Column header="최종 상태" style="width: 233px">
              <template #body="slotProps">
                <div class="sb-table-body-tags">
                  <div
                    v-for="(status, index) in slotProps.data.finalStatus"
                    :key="index"
                    class="sb-table-body-tags-item"
                  >
                    <spa>{{ status.label }} :</spa>
                    <Badge
                      :value="status.value"
                      :severity="status.value === '달성' ? 'success' : 'danger'"
                    ></Badge>
                  </div>
                  <Badge
                    v-if="slotProps.data.userClosed"
                    value="사용자 종료"
                    severity="contrast"
                  ></Badge>
                </div>
              </template>
            </Column>
            <template #empty>
              <div class="sb-nodata">
                <IconIllustrationSmile class="ico-illustration-smile" />
                <div class="sb-nodata__text">
                  <p>지난 레포트가 없습니다.</p>
                </div>
              </div>
            </template>
          </DataTable>
        </div>
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
</template>

<script setup>
import { ref } from 'vue';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import IconIllustrationEmptyFlag from '@/assets/icons/illustration/empty-flag.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemPlus from '@/assets/icons/system/plus.svg?component';

import Table from './Table.vue';
import Write01 from './Write01.vue';
import Write02 from './Write02.vue';
import Write03 from './Write03.vue';

const dialogWrite01 = ref(false);
const dialogWrite02 = ref(false);
const dialogWrite03 = ref(false);
</script>
