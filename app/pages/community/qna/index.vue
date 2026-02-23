<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>Q&A</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <button class="sb-ai" @click="writeOpen">
          <div class="sb-ai__tooltip">
            <p>질문하고 바로 답변받기 👆</p>
          </div>
        </button>
      </div>
    </div>
    <div class="sb-community-sort">
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
    <div class="sb-qna">
      <client-only>
        <masonry-wall
          :items="qnaList"
          :column-width="600"
          :gap="20"
          class="sb-qna-list"
        >
          <template #default="{ item }">
            <QnaItem :item="item" @item-click="viewOpen" />
          </template>
        </masonry-wall>
      </client-only>
      <SbLoading />
    </div>
  </div>

  <Dialog v-model:visible="dialogWrite" modal class="p-dialog--full">
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">Q&A 작성하기</h5>
      <QnaWrite />
    </div>
  </Dialog>

  <Dialog v-model:visible="dialogView" modal>
    <QnaView />
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import QnaItem from './item.vue';
import QnaWrite from './write.vue';
import QnaView from './view.vue';

import MasonryWall from '@yeger/vue-masonry-wall';

//dialog
const dialogWrite = ref(false);
const dialogView = ref(false);

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'Q&A' },
]);

//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '답변 대기' },
  { name: '답변 완료' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

const viewOpen = () => {
  dialogView.value = true;
};
const writeOpen = () => {
  dialogWrite.value = true;
};

//data
const qnaList = ref([
  {
    id: 1,
    title: '서비스 이용 문의',
    date: '2026.01.14',
    status: 'pending',
    content:
      '안녕하세요. 어제 판매 데이터를 엑셀로 내려받아 정산해 봤는데, 대시보드 메인 화면에 보이는 "총 매출액"과 약 12,000원 정도 차이가 납니다. 대시보드 데이터는 실시간 반영인가요? 아니면 특정 시점에 갱신되는 건지 궁금합니다.안녕하세요. 어제 판매 데이터를 엑셀로 내려받아 정산해 봤는데, 대시보드 메인 화면에 보이는 "총 매출액"과 약 12,000원 정도 차이가 납니다. 대시보드 데이터는 실시간 반영인가요? 아니면 특정 시점에 갱신되는 건지 궁금합니다.',
  },
  {
    id: 2,
    title: '로그인 문의',
    date: '2026.01.14',
    status: 'pending',
    content: '안녕하세요,',
  },
  {
    id: 3,
    title: '회원 문의',
    date: '2026.01.14',
    status: 'pending',
    content:
      '처음에 개인 사업자로 가입해서 대시보드를 이용 중이었는데, 이번에 법인으로 전환하게 되었습니다. 계정을 새로 만들어야 하나요? 아니면 기존 데이터를 유지하면서 사업자 정보만 변경할 수 있는지 확인 부탁드립니다.',
  },
  {
    id: 4,
    title: '회원 문의',
    date: '2026.01.14',
    status: 'completed',
    content:
      '처음에 개인 사업자로 가입해서 대시보드를 이용 중이었는데, 이번에 법인으로 전환하게 되었습니다. 계정을 새로 만들어야 하나요? 아니면 기존 데이터를 유지하면서 사업자 정보만 변경할 수 있는지 확인 부탁드립니다.',
  },
  {
    id: 5,
    title: '로그인 문의',
    date: '2026.01.14',
    status: 'completed',
    content:
      '안녕하세요, 로그인을 하려고 하니 예전 휴대폰으로 인증번호가 전송되는데 현재 기기를 변경해서 번호를 받을 수가 없습니다. 이럴 때는 어떻게 본인 인증을 하고 로그인해야 하나요? 급하게 송장을 뽑아야 해서 빠른 처리 부탁드립니다.',
  },
  {
    id: 6,
    title: '서비스 이용 문의',
    date: '2026.01.14',
    status: 'completed',
    content: '안녕하세요.',
  },
  {
    id: 7,
    title: '결제/환불 문의',
    date: '2026.01.14',
    status: 'completed',
    content:
      '프리미엄 플랜 결제했는데, 이용권 중복 결제된 것 같아요. 오늘 오전 10시쯤 자동 결제가 되었는데, 카드사 문자가 두 번 왔습니다. 확인해 보니 지난달 결제 건과 이번 달 결제 건이 겹친 건지, 아니면 시스템 오류인지 모르겠네요. 한 건은 취소해 주시고 환불 처리 부탁드립니다.프리미엄 플랜 결제했는데, 이용권 중복 결제된 것 같아요. 오늘 오전 10시쯤 자동 결제가 되었는데, 카드사 문자가 두 번 왔습니다. 확인해 보니 지난달 결제 건과 이번 달 결제 건이 겹친 건지, 아니면 시스템 오류인지 모르겠네요. 한 건은 취소해 주시고 환불 처리 부탁드립니다.',
  },
  {
    id: 8,
    title: '결제/환불 문의',
    date: '2026.01.14',
    status: 'completed',
    content:
      '프리미엄 플랜 결제했는데, 이용권 중복 결제된 것 같아요. 오늘 오전 10시쯤 자동 결제가 되었는데, 카드사 문자가 두 번 왔습니다. 확인해 보니 지난달 결제 건과 이번 달 결제 건이 겹친 건지, 아니면 시스템 오류인지 모르겠네요. 한 건은 취소해 주시고 환불 처리 부탁드립니다.프리미엄 플랜 결제했는데, 이용권 중복 결제된 것 같아요. 오늘 오전 10시쯤 자동 결제가 되었는데, 카드사 문자가 두 번 왔습니다. 확인해 보니 지난달 결제 건과 이번 달 결제 건이 겹친 건지, 아니면 시스템 오류인지 모르겠네요. 한 건은 취소해 주시고 환불 처리 부탁드립니다.',
  },
]);
</script>
