<template>
  <Button variant="text" @click="toggleOverlaySearchHistory">
    <span class="p-button-label">최근 검색 내역</span>
    <IconArrowAchevronDown class="ico-arrow-achevron-down" />
  </Button>
  <Popover ref="overlaySearchHistory" class="sb-popover-search-history-layer">
    <div class="sb-popover-search-history">
      <div class="sb-popover-search-history-head">
        <strong>최근 검색 내역</strong>
        <Button label="전체 삭제" severity="contrast" variant="text" />
      </div>
      <div class="sb-popover-search-history-body">
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
          <div class="sb-popover-search-history-list-item">
            <div class="sb-popover-search-history-list-item-head">
              <span>두바이쫀득쿠쿠기</span>

              <Button variant="text">
                <template #icon>
                  <IconSystemClose class="ico-system-close" />
                </template>
              </Button>
            </div>
            <div class="sb-popover-search-history-list-item-body">
              <Badge value="기본" severity="neutral"></Badge>
              <p>https://smartstore.naver.com/.../...312420</p>
            </div>
            <div class="sb-popover-search-history-list-item-foot">
              <span>2026.02.27 13:20:56</span>
              <span>상품수 1</span>
            </div>
          </div>
          <div class="sb-popover-search-history-list-item">
            <div class="sb-popover-search-history-list-item-head">
              <span>두바이쫀득쿠쿠기</span>

              <Button variant="text">
                <template #icon>
                  <IconSystemClose class="ico-system-close" />
                </template>
              </Button>
            </div>
            <div class="sb-popover-search-history-list-item-body">
              <IconSystemSmartstore class="ico-system-smartstore" />
              <p>가온베이커리 일산버터스콘</p>
            </div>
            <div class="sb-popover-search-history-list-item-foot">
              <span>2026.02.27 13:20:56</span>
              <span>상품수 3</span>
            </div>
          </div>
          <div class="sb-popover-search-history-list-item">
            <div class="sb-popover-search-history-list-item-head">
              <span>두바이쫀득쿠쿠기</span>

              <Button variant="text">
                <template #icon>
                  <IconSystemClose class="ico-system-close" />
                </template>
              </Button>
            </div>
            <div class="sb-popover-search-history-list-item-body">
              <Badge value="기본" severity="neutral"></Badge>
              <p>https://smartstore.naver.com/.../...312420</p>
            </div>
            <div class="sb-popover-search-history-list-item-foot">
              <span>2026.02.27 13:20:56</span>
              <span>상품수 1</span>
            </div>
          </div>
          <div class="sb-popover-search-history-list-item">
            <div class="sb-popover-search-history-list-item-head">
              <span>두바이쫀득쿠쿠기</span>

              <Button variant="text">
                <template #icon>
                  <IconSystemClose class="ico-system-close" />
                </template>
              </Button>
            </div>
            <div class="sb-popover-search-history-list-item-body">
              <Badge value="기본" severity="neutral"></Badge>
              <p>https://smartstore.naver.com/.../...312420</p>
            </div>
            <div class="sb-popover-search-history-list-item-foot">
              <span>2026.02.27 13:20:56</span>
              <span>상품수 1</span>
            </div>
          </div>
          <div class="sb-popover-search-history-list-item">
            <div class="sb-popover-search-history-list-item-head">
              <span>두바이쫀득쿠쿠기</span>

              <Button variant="text">
                <template #icon>
                  <IconSystemClose class="ico-system-close" />
                </template>
              </Button>
            </div>
            <div class="sb-popover-search-history-list-item-body">
              <IconSystemSmartstore class="ico-system-smartstore" />
              <p>가온베이커리 일산버터스콘</p>
            </div>
            <div class="sb-popover-search-history-list-item-foot">
              <span>2026.02.27 13:20:56</span>
              <span>상품수 3</span>
            </div>
          </div>
          <div class="sb-popover-search-history-list-item">
            <div class="sb-popover-search-history-list-item-head">
              <span>두바이쫀득쿠쿠기</span>

              <Button variant="text">
                <template #icon>
                  <IconSystemClose class="ico-system-close" />
                </template>
              </Button>
            </div>
            <div class="sb-popover-search-history-list-item-body">
              <Badge value="기본" severity="neutral"></Badge>
              <p>https://smartstore.naver.com/.../...312420</p>
            </div>
            <div class="sb-popover-search-history-list-item-foot">
              <span>2026.02.27 13:20:56</span>
              <span>상품수 1</span>
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
    </div>
  </Popover>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import IconArrowAchevronUp from '@/assets/icons/arrow/achevron-up.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconSystemSmartstore from '@/assets/icons/system/smartstore.svg?component';

//popover
const overlaySearchHistory = ref();

const toggleOverlaySearchHistory = (event) => {
  overlaySearchHistory.value.toggle(event);
};

// 최근 검색 내역
const historyListRef = ref(null);
const isAtTop = ref(true); // 초기값은 맨 위이므로 true
const isAtBottom = ref(false);

const handleScroll = () => {
  const el = historyListRef.value;
  if (!el) return;

  const { scrollTop, scrollHeight, clientHeight } = el;

  // 1px 정도의 오차 범위를 두어 계산이 정확하게 물리도록 합니다.
  isAtTop.value = scrollTop <= 1;
  isAtBottom.value = scrollTop + clientHeight >= scrollHeight - 1;
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

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천기회' },
  { label: '나의 랭킹 찾기' },
]);
</script>
