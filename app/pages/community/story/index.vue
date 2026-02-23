<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>성장스토리</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <NuxtLink to="/community/story/write" class="sb-ai">
          <div class="sb-ai__tooltip">
            <p>셀러님만의 성장 스토리를 알려주세요.</p>
          </div>
        </NuxtLink>
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
    <div class="sb-board">
      <client-only>
        <masonry-wall
          :items="list"
          :column-width="600"
          :gap="20"
          class="sb-board-list"
        >
          <template #default="{ item }">
            <Item :item="item" @report="reportOpen" />
          </template>
        </masonry-wall>
      </client-only>
      <SbLoading />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Item from './item.vue';
import MasonryWall from '@yeger/vue-masonry-wall';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '성장스토리' },
]);

//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '댓글 수' },
  { name: '좋아요 수' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

//data
const list = ref([
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '작은 시작에서, 꾸준한 성장까지',
    content:
      '처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이 많았고, 판매가 일어나지 않는 날엔 "내가 잘하고 있는 걸까?"라는 생각이 들기도 했어요. 하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에 귀 기울였습니다. 작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시 도전할 수 있는 힘이 되었습니다. 지금도 완성형은 아니지만, 셀러로서 성장하는 과정 자체가 값진 자산이 되었다고 느낍니다. 이 스토리가 같은 길을 걷고 있는 누군가에게 작은 용기가 되었으면 합니다.',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
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
    thumb: 'https://picsum.photos/id/1/200/300',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '첫 해외 배송 주문이 들어왔을 때의 설렘과 긴박했던 발송 현장 스케치',
    content:
      '처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이 많았고, 판매가 일어나지 않는 날엔 "내가 잘하고 있는 걸까?"라는 생각이 들기도 했어요. 하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에 귀 기울였습니다. 작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시 도전할 수 있는 힘이 되었습니다. 지금도 완성형은 아니지만, 셀러로서 성장하는 과정 자체가 값진 자산이 되었다고 느낍니다. 이 스토리가 같은 길을 걷고 있는 누군가에게 작은 용기가 되었으면 합니다.',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '셀러로서의 1주년, 나에게 주는 선물',
    content:
      '홀로 컴퓨터 앞에서 시작했던 판매가 어느덧 1주년을 맞이했습니다. 밤새워 박스를 테이핑하던 기억들이 주마등처럼 스쳐 지나가네요. 스스로에게 "고생했다"고 말해주며, 앞으로의 10년을 위한 새로운 목표를 세워봅니다.',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '단골 고객의 진심 어린 리뷰 한 줄의 힘',
    content:
      '예상치 못한 인기 폭주로 갑작스러운 품절 사태가 발생했습니다. 당황스러웠지만 고객들께 정중히 사과드리고 재입고 알림 신청을 유도했더니, 재입고 당일 역대 최고 매출을 기록했습니다. 소통의 중요성을 다시 배웁니다.',
    image: 'https://picsum.photos/id/1/200/200',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '단골 고객의 진심 어린 리뷰 한 줄의 힘',
    content:
      '예상치 못한 인기 폭주로 갑작스러운 품절 사태가 발생했습니다. 당황스러웠지만 고객들께 정중히 사과드리고 재입고 알림 신청을 유도했더니, 재입고 당일 역대 최고 매출을 기록했습니다. 소통의 중요성을 다시 배웁니다.',
    image: 'https://picsum.photos/id/1/200/200',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '단골 고객의 진심 어린 리뷰 한 줄의 힘',
    content:
      '예상치 못한 인기 폭주로 갑작스러운 품절 사태가 발생했습니다. 당황스러웠지만 고객들께 정중히 사과드리고 재입고 알림 신청을 유도했더니, 재입고 당일 역대 최고 매출을 기록했습니다. 소통의 중요성을 다시 배웁니다.',

    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
]);
</script>
