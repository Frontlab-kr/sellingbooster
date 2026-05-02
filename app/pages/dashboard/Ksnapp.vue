<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>KSnapp</h5>
      <div class="sb-dashboard-card-head-menu">
        <div class="sb-dashboard-card-head-menu__text">정보 출처 K-snapp</div>
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <div class="sb-ktrend-ksnapp-list" v-scroll-end>
        <div class="sb-ktrend-ksnapp-list-scroll">
          <NuxtLink
            to="/"
            class="sb-ktrend-ksnapp-list-item"
            v-for="item in ksnappItems"
            :key="item.rank"
          >
            <div class="sb-ktrend-ksnapp-list-item__thumb">
              <Badge
                :value="item.rank"
                size="small"
                class="p-badge-circle"
                :severity="item.rank > 3 ? 'contrast' : undefined"
              ></Badge>
              <img :src="item.thumbnail" :alt="item.title" />
            </div>

            <div class="sb-ktrend-ksnapp-list-item__text">
              <IconSystemUp v-if="item.trend === 'up'" class="ico-system-up" />
              <IconSystemDown v-else class="ico-system-down" />

              <h6>{{ item.title }}</h6>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemUp from '@/assets/icons/system/up.svg?component';
import IconSystemDown from '@/assets/icons/system/down.svg?component';

//data
const ksnappItems = [
  {
    rank: 1,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title:
      '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템',
  },
  {
    rank: 2,
    trend: 'down',
    thumbnail: 'https://picsum.photos/200/300',
    title: "안효섭, 올화이트 '수트핏' 눈길 ·· 고급미 물씬",
  },
  {
    rank: 3,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 4,
    trend: 'down',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 5,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 6,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 7,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 8,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
];
</script>
