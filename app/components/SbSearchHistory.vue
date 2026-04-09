<template>
  <div
    ref="searchHistoryRef"
    class="sb-popover-search-history"
    :class="{ active: isSearchHistoryOpen }"
  >
    <Button variant="text" @click="toggleOverlaySearchHistory">
      <span class="p-button-label">최근 검색 내역</span>
      <IconArrowAchevronDown class="ico-arrow-achevron-down" />
    </Button>
    <div class="sb-popover-search-history-layer">
      <div class="sb-popover-search-history-head">
        <strong>최근 검색 내역</strong>
        <Button
          label="전체 삭제"
          severity="contrast"
          variant="text"
          v-if="!isNoData"
        />
      </div>
      <div class="sb-popover-search-history-body" v-if="!isNoData">
        <Button variant="text" @click="scrollHistory('up')" :disabled="isAtTop">
          <template #icon>
            <IconArrowAchevronUp class="ico-arrow-achevron-up" />
          </template>
        </Button>
        <div
          class="sb-popover-search-history-list"
          ref="historyListRef"
          @scroll="handleScroll"
        >
          <div
            v-for="(item, index) in historyData"
            :key="index"
            class="sb-popover-search-history-list-item"
          >
            <div class="sb-popover-search-history-list-item-head">
              <span>{{ item.title }}</span>
              <Button variant="text">
                <template #icon
                  ><IconSystemClose class="ico-system-close"
                /></template>
              </Button>
            </div>

            <div class="sb-popover-search-history-list-item-body">
              <Badge
                v-if="item.type === 'default'"
                value="기본"
                severity="neutral"
              />
              <img
                v-else-if="item.type === 'store'"
                :src="IconSystemSmartstore"
                alt="smart store"
                class="ico-system-smartstore"
              />
              <p>{{ item.bodyText }}</p>
            </div>

            <div class="sb-popover-search-history-list-item-foot">
              <span>{{ item.date }}</span>
              <span>상품수 {{ item.productCount }}</span>
            </div>
          </div>
        </div>
        <Button
          variant="text"
          @click="scrollHistory('down')"
          :disabled="isAtBottom"
        >
          <template #icon>
            <IconArrowAchevronDown class="ico-arrow-achevron-down" />
          </template>
        </Button>
      </div>
      <div class="sb-popover-search-history-nodata" v-else>
        최근 검색 내역이 없습니다.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue';
import IconArrowAchevronUp from '@/assets/icons/arrow/achevron-up.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconSystemSmartstore from '@/assets/icons/system/smartstore.png';

//popover
const searchHistoryRef = ref(null);
const isSearchHistoryOpen = ref(false);

const toggleOverlaySearchHistory = async () => {
  isSearchHistoryOpen.value = !isSearchHistoryOpen.value;

  // 열릴 때만 DOM 렌더 후 스크롤 상태 재계산
  if (isSearchHistoryOpen.value) {
    await nextTick();
    setTimeout(() => {
      handleScroll();
    }, 0);
  }
};

// 바깥 클릭 시 닫기
const handleClickOutside = (event) => {
  if (!isSearchHistoryOpen.value) return;

  const wrapEl = searchHistoryRef.value;
  if (!wrapEl) return;

  // wrapper 바깥 클릭이면 닫기
  if (!wrapEl.contains(event.target)) {
    isSearchHistoryOpen.value = false;
  }
};

const props = defineProps({
  historyData: {
    type: Array,
    default: () => [],
  },
});

const isNoData = computed(() => {
  return !props.historyData || props.historyData.length === 0;
});

// 최근 검색 내역
const historyListRef = ref(null);
const isAtTop = ref(true); // 초기값은 맨 위이므로 true
const isAtBottom = ref(false);

const handleScroll = () => {
  const el = historyListRef.value;
  if (!el) return;

  const { scrollTop, scrollHeight, clientHeight } = el;

  // 1. 스크롤 가능 여부 체크 (1px 정도의 여유를 둠)
  const isScrollable = scrollHeight > clientHeight + 1;

  if (!isScrollable) {
    isAtTop.value = true;
    isAtBottom.value = true;
    return;
  }

  // 2. 스크롤 위치 체크
  isAtTop.value = scrollTop <= 1;
  // 하단 여유를 2px 정도로 늘려 계산의 정확도를 높임
  isAtBottom.value = scrollTop + clientHeight >= scrollHeight - 2;
};

// 스크롤 이동 함수
const scrollHistory = (direction) => {
  if (!historyListRef.value) return;
  const SCROLL_AMOUNT = 105;
  const target =
    direction === 'up'
      ? historyListRef.value.scrollTop - SCROLL_AMOUNT
      : historyListRef.value.scrollTop + SCROLL_AMOUNT;

  historyListRef.value.scrollTo({ top: target, behavior: 'smooth' });
};

onMounted(() => {
  handleScroll();

  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

watch(
  () => props.historyData,
  async () => {
    await nextTick(); // DOM 업데이트 후 실행
    handleScroll();
  },
  { deep: true },
);
</script>
