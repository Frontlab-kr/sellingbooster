<template>
  <Button variant="text" @click="toggleOverlaySearchHistory">
    <span class="p-button-label">최근 검색 내역</span>
    <IconArrowAchevronDown class="ico-arrow-achevron-down" />
  </Button>
  <Popover ref="overlaySearchHistory" class="sb-popover-search-history-layer">
    <div class="sb-popover-search-history">
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
              <IconSystemSmartstore
                v-else-if="item.type === 'store'"
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
  </Popover>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue';
import IconArrowAchevronUp from '@/assets/icons/arrow/achevron-up.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconSystemSmartstore from '@/assets/icons/system/smartstore.svg?component';

//popover
const overlaySearchHistory = ref();

const toggleOverlaySearchHistory = (event) => {
  overlaySearchHistory.value.toggle(event);

  // Popover가 완전히 나타난 후 높이를 계산해야 정확합니다.
  // nextTick 이후에도 transition 효과 때문에 높이가 즉시 잡히지 않을 수 있으므로
  // setTimeout을 사용하거나 Popover의 @show 이벤트를 활용하는 것이 좋습니다.
  nextTick(() => {
    setTimeout(handleScroll, 50);
  });
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
  // 컴포넌트가 마운트될 때 리스트가 짧아서 스크롤이 아예 없는 경우 처리
  handleScroll();
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

<style scoped>
/* 팝오버가 버튼 위로 올라가지 않도록 강제 설정 */
:deep(.sb-popover-search-history-layer) {
  /* 라이브러리가 계산한 top 값을 무시하고 싶을 때 사용 */
  /* 단, 버튼의 위치가 고정적일 때 유용합니다. */
  margin-top: 8px !important;
}

/* 팝오버의 화살표(꼬리표) 방향 고정 */
:deep(.p-popover:before),
:deep(.p-popover:after) {
  content: '';
  position: absolute;
  bottom: 100% !important; /* 항상 위쪽에 화살표가 오도록 (아래로 열림) */
  top: auto !important;
  border-bottom-color: var(--p-popover-background) !important; /* 화살표 색상 */
}
</style>
