<template>
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
            v-if="slotProps.data.products && slotProps.data.products.length"
            class="sb-table-body-product"
          >
            <img
              v-for="(img, index) in slotProps.data.products"
              :key="index"
              :src="img"
              v-tooltip.top="{
                value: `<div class='sb-tooltip-product'>
              <p>폴햄 여성 플리스 스트레이트 팬츠 상품명은 영역 전체 상품명 다 툴팁으로 노출</p>
              <p><strong class='text-success'>148</strong>/130개</p>
            </div>`,
                escape: false,
              }"
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
</template>

<script setup>
//data
const campaigns = ref([
  {
    period: '2026.01.01 ~ 2026.01.31',
    targetAmount: 15000000,
    achievedAmount: 13500000,
    achievementRate: 96.3,
    products: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/200',
      'https://picsum.photos/200/100',
    ],
    finalStatus: [
      { label: '목표 금액', value: '미달' },
      { label: '상품 판매', value: '달성' },
    ],
  },
  {
    period: '2026.01.01 ~ 2026.01.31',
    targetAmount: 15000000,
    achievedAmount: 13500000,
    achievementRate: 108.8,
    products: [],
    finalStatus: [{ label: '목표 금액', value: '달성' }],
  },
  {
    period: '2026.01.01 ~ 2026.01.31',
    targetAmount: null,
    achievedAmount: null,
    achievementRate: null,
    products: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/200',
    ],
    userClosed: true,
  },
  {
    period: '2026.01.01 ~ 2026.01.31',
    targetAmount: 15000000,
    achievedAmount: 13500000,
    achievementRate: 96.3,
    products: [],
    finalStatus: [{ label: '상품 판매', value: '미달' }],
  },
  {
    period: '2026.01.01 ~ 2026.01.31',
    targetAmount: 15000000,
    achievedAmount: 13500000,
    achievementRate: 100,
    products: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/200',
    ],
    finalStatus: [
      { label: '목표 금액', value: '달성' },
      { label: '상품 판매', value: '미달' },
    ],
  },
]);
</script>
