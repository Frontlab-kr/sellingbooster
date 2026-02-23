<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>자유게시판</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
      <div class="sb-community-head__button">
        <NuxtLink to="/community/board/write" class="sb-ai">
          <div class="sb-ai__tooltip">
            <p>셀러들 모여라! 가겹게 수다 나눠요!</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-community-menu">
      <div></div>
      <SbSearchbar v-model="searchKeyword" placeholder="자유게시판 검색" />
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
import MasonryWall from '@yeger/vue-masonry-wall';
import Item from './item.vue';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '자유게시판' },
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
    title: '오늘 반품 들어왔는데 이유가 좀 허무하네요',
    content:
      '제품 문제는 전혀 없는데 "단순 변심"으로 반품 들어왔어요. 포장부터 배송비까지 생각하면 남는 게 없네요... 이럴 때마다 온라인 판매가 쉽지 않다는 걸 느낍니다. 다들 반품 많은 편이신가요? 어떻게 관리하고 계신지도 궁금해요.',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '자연광 촬영 vs 조명 촬영 아직도 고민입니다',
    content:
      '자연광으로 찍으면 분위기는 좋은데 날씨 영향도 많이 받고 조명 세팅하면 일정하게 찍을 수는 있지만 또 세팅 시간이 오래 걸려서 매번 촬영할 때마다 어떤 방식이 더 효율적인지 고민하게 됩니다. 제품 특성마다 다른 것 같기도 하고 아직 제 촬영 방식이 완전히 정리되지 않은 느낌이라 다른 셀러님들은 어떻게 촬영하고 계신지 궁...',
    image: 'https://picsum.photos/id/1/200/200', // 카메라 이미지 반영
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '운영 기준 다들 어떻게 잡고 계세요?',
    content:
      '잘 나가던 상품이 갑자기 멈추거나, 반대로 예상보다 빠르게 소진되는 상황이 반복되다 보니 재고를 어느 선에서 운영하는 게 적절한지 늘 어렵게 느껴집니다. 특히 시즌이나 트렌드 영향을 크게 받는 상품은 타이밍을 조금만 놓쳐도 애매하게 재고가 남거나, 품절로 판...',
    image: 'https://picsum.photos/id/2/200/200', // 노트북 이미지 반영
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '이번 달은 운영 흐름이 조금 정리된 느낌입니다',
    content:
      '예전에는 주문 처리, 상품 등록, 광고 관리까지 전부 정신없이 했는데 요즘은 나름대로 루틴이 생겨서 하루 업무 흐름이 조금 정리된 느낌입니다. 여전히 바쁘긴 하지만 어디서 시간을 써야 하는지 감이 잡히니까 괜히 마음도 덜 급해지고 장기적으로 운영할 수 있겠다는 생각이 들어서 스스로 조금 성장한 것 같아 뿌듯한 요즘입니다.',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '휴대폰 촬영 vs 카메라 촬영 차이 많이 날까요',
    content:
      '지금은 대부분 휴대폰으로 촬영하고 보정해서 사용 중인데 카메라로 넘어가야 하나 계속 고민 중입니다. 장비 투자 대비 체감되는 퀄리티 차이가 있는지 실제로 바꿔보신 셀러님들 의견 듣고 싶어요.',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '할인 이벤트 자주 하는 게 맞을까요?',
    content:
      '매출을 위해 할인 이벤트를 자주 해야 하는지 아니면 브랜드 이미지나 마진을 위해 일정 간격을 두고 운영하는 게 맞는 것인지 잡기가 점점 어려워지는 것 같습니다. 할인 들어가면 확실히 주문이 늘고 유입도 올라와서 당장 매출은 좋아지는데, 이벤트 끝나면 다시 조용해지는 흐름이 반복되다 보니 이게 맞는 방향인지 계속 고민하게...',
    image: 'https://picsum.photos/id/3/200/200', // 쇼핑백 이미지 반영
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title: '혼자 운영하다 보니 방향 고민이 많아지네요',
    content:
      '상품 등록부터 재고, 광고, CS, 정산까지 전부 혼자 하다 보니 어느 순간 업무는 익숙해졌는데 방향을 잘 잡고 있는 건지 고민이 많아지는 시기가 오는 것 같습니다. 직원을 쓰거나 외주를 주기엔 아직 이르고 그렇다고 혼자 하기엔 한계도 느껴져서 비슷한 상황인 셀러님들은 어떻게 운영 방향 잡고 계신지 이야기 들어보고 싶습...',
    likeCount: '9,000',
    commentCount: '9,000',
    shareCount: '9,000',
  },
]);
</script>
