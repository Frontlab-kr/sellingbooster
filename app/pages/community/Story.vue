<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>성장스토리</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <NuxtLink to="./StoryWrite">
          <p>셀러님만의 성장 스토리를 알려주세요.</p>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-community-menu">
      <div></div>
      <div class="sb-community-menu-sort">
        <Select
          v-model="selectedSort"
          :options="selectedSortOption"
          optionLabel="name"
          size="small"
          class="p-select-text"
        />
      </div>
    </div>
    <div class="sb-qna">
      <client-only>
        <masonry-wall :items="faqList" :column-width="600" :gap="20">
          <template #default="{ item }">
            <StoryItem :item="item" />
          </template>
        </masonry-wall>
      </client-only>
    </div>
  </div>

  <Dialog v-model:visible="dialogReport" modal>
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">신고하기</h5>
      <StoryReport />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import StoryItem from './StoryItem.vue';
import StoryReport from './StoryReport.vue';
import MasonryWall from '@yeger/vue-masonry-wall';

//dialog
const dialogReport = ref(false);

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '성장스토리' },
]);

//data
const faqList = ref([
  {
    id: 1,
    thumb: 'https://picsum.photos/id/1/200/300',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '작은 시작에서, 꾸준한 성장까지',
    content:
      '처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이 많았고, 판매가 일어나지 않는 날엔 "내가 잘하고 있는 걸까?"라는 생각이 들기도 했어요. 하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에 귀 기울였습니다. 작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시 도전할 수 있는 힘이 되었습니다. 지금도 완성형은 아니지만, 셀러로서 성장하는 과정 자체가 값진 자산이 되었다고 느낍니다. 이 스토리가 같은 길을 걷고 있는 누군가에게 작은 용기가 되었으면 합니다.',
    likeCount: '1,200',
    commentCount: '15',
    shareCount: '15',
  },
  {
    id: 2,
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '위기를 기회로, 품절 대란 극복기',
    content:
      '예상치 못한 인기 폭주로 갑작스러운 품절 사태가 발생했습니다. 당황스러웠지만 고객들께 정중히 사과드리고 재입고 알림 신청을 유도했더니, 재입고 당일 역대 최고 매출을 기록했습니다. 소통의 중요성을 다시 배웁니다.',
    image: 'https://picsum.photos/id/1/200/200',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    id: 1,
    thumb: 'https://picsum.photos/id/1/200/300',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '작은 시작에서, 꾸준한 성장까지',
    content:
      '처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이 많았고, 판매가 일어나지 않는 날엔 "내가 잘하고 있는 걸까?"라는 생각이 들기도 했어요. 하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에 귀 기울였습니다. 작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시 도전할 수 있는 힘이 되었습니다. 지금도 완성형은 아니지만, 셀러로서 성장하는 과정 자체가 값진 자산이 되었다고 느낍니다. 이 스토리가 같은 길을 걷고 있는 누군가에게 작은 용기가 되었으면 합니다.',
    likeCount: '1,200',
    commentCount: '15',
    shareCount: '15',
  },
  {
    id: 2,
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '위기를 기회로, 품절 대란 극복기',
    content:
      '예상치 못한 인기 폭주로 갑작스러운 품절 사태가 발생했습니다. 당황스러웠지만 고객들께 정중히 사과드리고 재입고 알림 신청을 유도했더니, 재입고 당일 역대 최고 매출을 기록했습니다. 소통의 중요성을 다시 배웁니다.',
    image: 'https://picsum.photos/id/1/200/200',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
]);

//sort
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '답변 대기' },
  { name: '답변 완료' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
