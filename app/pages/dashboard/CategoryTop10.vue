<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>관심 카테고리 상품 TOP 10</h5>
      <div class="sb-dashboard-card-head-menu">
        <div class="sb-dashboard-card-head-menu__text">네이버 쇼핑 기준</div>
        <NuxtLink to="/">
          <Button variant="text" severity="white">
            <template #icon>
              <IconArrowUpRight class="ico-arrow-up-right" />
            </template>
          </Button>
        </NuxtLink>
        <SbMenu :items="menuItems" />
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-tab">
        <Button label="패션" variant="text" class="active" />
        <Button label="이너뷰티" variant="text" />
        <Button label="코스메틱" variant="text" />
        <Button label="건강기능식품" variant="text" />
        <Button label="펫" variant="text" />
        <Button label="유아" variant="text" />
      </div>
      <div class="sb-trend-top sb-trend-top--small" v-scroll-end>
        <div class="sb-trend-top-list">
          <NuxtLink
            v-for="item in top20List"
            :key="item.rank"
            to="/"
            class="sb-trend-top-list-item"
          >
            <div class="sb-trend-top-list-item__thumb">
              <Badge
                :value="item.rank"
                size="small"
                class="p-badge-circle"
                :severity="item.rank > 3 ? 'contrast' : undefined"
              ></Badge>
              <img :src="item.imgSrc" :alt="item.title" />
            </div>
            <div class="sb-trend-top-list-item__contents">
              <div class="sb-trend-top-list-item__category">
                <span>{{ item.brand }}</span>
                <span>{{ item.mall }}</span>
              </div>
              <div class="sb-trend-top-list-item__title">
                {{ item.title }}
              </div>
              <div class="sb-trend-top-list-item__price">
                {{ item.price.toLocaleString() }}원
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//menu
const emit = defineEmits(['edit-widget']);
const menuItems = ref([
  {
    label: '편집',
    icon: IconSystemEdit,
    command: () => {
      emit('edit-widget');
    },
  },
]);

//data
const top20List = ref([
  {
    rank: 1,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 2,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 3,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 4,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 5,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 6,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 7,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 8,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 9,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 10,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 1,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 2,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 3,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 4,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 5,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 6,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 7,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 8,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 9,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 10,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
]);
</script>
