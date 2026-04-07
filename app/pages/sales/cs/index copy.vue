<template>
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>CS 센터</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-contents-head">
        <h4>
          AI가 문의 데이터를 분석해<br />
          유형별ㆍ분위기별ㆍ상품별 패턴과 운영 인사이트를 도출해드려요.
        </h4>
      </div>
      <div class="sb-tab">
        <Button
          label="상품 문의 내역"
          variant="text"
          :class="{ active: activeTab === 0 }"
          @click="activeTab = 0"
        />
        <Button
          label="스토어 문의 내역"
          variant="text"
          :class="{ active: activeTab === 1 }"
          @click="activeTab = 1"
        />
      </div>
      <div class="sb-sales-cs-product" v-if="activeTab === 0">
        <div class="sb-sales-cs-product-head">
          <div class="sb-sales-cs-product-head__text">
            네이버 쇼핑 기준 데이터 입니다.
          </div>
        </div>
        <div class="sb-sales-cs-product-body">
          <div class="sb-sales-cs-product-status"></div>
          <div class="sb-sales-cs-product-table">
            <DataTable
              :value="productQnaList"
              responsiveLayout="scroll"
              removableSort
            >
              <Column field="productName" header="상품명" style="width: 300px">
                <template #body="slotProps">
                  <div class="flex align-items-center">
                    <i class="pi pi-chevron-down mr-2 text-sm text-400"></i>
                    <span>{{ slotProps.data.productName }}</span>
                  </div>
                </template>
              </Column>

              <Column
                field="sizeInquiry"
                header="사이즈 문의"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.sizeInquiry
                }}</template>
              </Column>

              <Column
                field="deliveryInquiry"
                header="배송 문의"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.deliveryInquiry
                }}</template>
              </Column>

              <Column
                field="stockOption"
                header="재고 / 옵션"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.stockOption
                }}</template>
              </Column>

              <Column
                field="exchangeReturn"
                header="교환 / 반품"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.exchangeReturn
                }}</template>
              </Column>

              <Column
                field="productInfo"
                header="상품 정보"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.productInfo
                }}</template>
              </Column>

              <Column
                field="priceDiscount"
                header="가격 / 할인"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.priceDiscount
                }}</template>
              </Column>

              <Column
                field="etc"
                header="기타"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">
                  {{ slotProps.data.etc === 0 ? '-' : slotProps.data.etc }}
                </template>
              </Column>

              <Column
                field="total"
                header="합계"
                bodyClass="text-right"
                style="width: 150px"
              >
                <template #body="slotProps">{{
                  slotProps.data.total
                }}</template>
              </Column>
              <template #expansion="slotProps">
                <div class="p-4">
                  <h5>Orders for {{ slotProps.data.name }}</h5>
                  <DataTable :value="slotProps.data.orders">
                    <Column field="id" header="Id" sortable></Column>
                    <Column
                      field="customer"
                      header="Customer"
                      sortable
                    ></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" sortable>
                      <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.amount) }}
                      </template>
                    </Column>
                    <Column field="status" header="Status" sortable>
                      <template #body="slotProps">
                        <Tag
                          :value="slotProps.data.status.toLowerCase()"
                          :severity="getOrderSeverity(slotProps.data)"
                        />
                      </template>
                    </Column>
                    <Column headerStyle="width:4rem">
                      <template #body>
                        <Button icon="pi pi-search" />
                      </template>
                    </Column>
                  </DataTable>
                </div>
              </template>
            </DataTable>
          </div>
        </div>
      </div>
      <div class="sb-sales-cs-store" v-else-if="activeTab === 1">
        <div class="sb-sales-cs-store-head"></div>
        <div class="sb-sales-cs-store-body">
          <div class="sb-sales-cs-store-search"></div>
          <div class="sb-sales-cs-store-table"></div>
        </div>
        <SbBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: 'CS 센터' },
]);

const activeTab = ref(0);

const productQnaList = ref([
  {
    productName: '삼소니 봄신상 데일리세트 모음전 키즈...',
    sizeInquiry: 14,
    deliveryInquiry: 13,
    stockOption: 10,
    exchangeReturn: 5,
    productInfo: 4,
    priceDiscount: 4,
    etc: 0,
    total: 55,
  },
  {
    productName: '삼소니 봄신상 데일리세트 모음전 키즈...',
    sizeInquiry: 14,
    deliveryInquiry: 13,
    stockOption: 10,
    exchangeReturn: 5,
    productInfo: 4,
    priceDiscount: 4,
    etc: 0,
    total: 55,
  },
  // ... 동일한 객체를 필요한 만큼 반복
]);
</script>
