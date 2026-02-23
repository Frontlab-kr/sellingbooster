<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>FAQ</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-community-menu">
      <div class="sb-tab">
        <Button label="전체(999)" variant="text" class="active" />
        <Button label="사용방법" variant="text" />
        <Button label="가입방법" variant="text" />
        <Button label="기능소개" variant="text" />
      </div>
      <SbSearchbar v-model="searchKeyword" placeholder="FAQ 검색" />
    </div>
    <div class="sb-faq">
      <div class="sb-faq-list">
        <Item
          v-for="faq in list"
          :key="faq.id"
          :item="faq"
          @item-click="viewOpen"
        />
      </div>
      <div class="sb-faq-list-button">
        <Button severity="contrast" outlined>
          <span class="p-button-label">더보기(16/83)</span>
          <Icon24down class="ico-24-down" />
        </Button>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogView" modal>
    <View />
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Item from './item.vue';
import View from './view.vue';

import Icon24down from '@/assets/icons/24/down.svg?component';

//dialog
const dialogView = ref(false);

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'FAQ' },
]);

//data
const list = ref([
  {
    status: 'guide',
    title: '판매 데이터를 엑셀 파일로 한 번에 내려받으려면 어떻게 하나요?',
  },
  {
    status: 'feature',
    title: '실시간 매출 현황은 얼마나 자주 업데이트되나요?',
  },
  {
    status: 'guide',
    title: '대시보드 메인 화면의 위젯 위치를 제 취향대로 바꿀 수 있나요?',
  },
  {
    status: 'signup',
    title: '개인 사업자에서 법인 사업자로 전환할 때 필요한 서류는 무엇인가요?',
  },
  {
    status: 'feature',
    title: "'성장스토리'는 어떤 데이터를 기반으로 분석해주나요?",
  },
  {
    status: 'signup',
    title: '하나의 계정으로 여러 개의 쇼핑몰을 연동해서 관리할 수 있나요?',
  },
  {
    status: 'feature',
    title: '품절 임박 상품을 미리 알려주는 재고 알림 설정은 어떻게 하나요?',
  },
  {
    status: 'guide',
    title: '정산 예정 금액과 실제 입금액이 다른데 어디서 상세 내역을 보나요?',
  },
  {
    status: 'signup',
    title:
      '회원 가입 시 휴대폰 본인 인증이 자꾸 실패하는데 해결 방법이 있을까요?',
  },
  {
    status: 'guide',
    title: '모바일 웹에서도 PC와 동일한 모든 기능을 사용할 수 있나요?',
  },
  {
    status: 'signup',
    title: '개인 사업자에서 법인 사업자로 전환할 때 필요한 서류는 무엇인가요?',
  },
  {
    status: 'feature',
    title: '실시간 매출 현황은 얼마나 자주 업데이트되나요?',
  },
]);

const viewOpen = () => {
  dialogView.value = true;
};
</script>
