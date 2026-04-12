<template>
  <div class="sb-planner-schedule">
    <h5>샌드위치 연휴 5.1(금)~5.5(화) 최대 5일 휴가 준비</h5>
    <div class="sb-planner-schedule__contents">
      <div class="sb-chip" v-for="(group, index) in plannerData" :key="index">
        <div class="sb-chip-list">
          <Chip :label="group.category" size="large" class="active" />
          <NuxtLink v-for="(item, i) in group.items" :key="i" to="/">
            <Chip :label="'#' + item" size="large" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

const plannerData = ref([
  {
    category: '#가정의 달',
    items: [
      '어린이날 선물',
      '피크닉추천장소',
      '프로야구개막',
      '5월기념일',
      '서울5월행사',
      '어버이날선물',
      '스승의날',
      '프로야구개막',
      '가정의달이벤트',
      'BTS5월스케줄',
    ],
  },
  {
    category: '#부모님부모님 선물',
    items: [
      '안마의자',
      '한우선물세트',
      '송이버섯',
      '족욕기',
      '무릎마사지기',
      '홍삼선물세트',
    ],
  },
  {
    category: '#여행',
    items: [
      '오사카2박3일',
      '유럽여행',
      '후쿠오카',
      '5월국내가볼만한곳',
      '해외여행추천',
      '유럽4인가족경비',
      '스승의날',
    ],
  },
]);
</script>
