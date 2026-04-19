<template>
  <div class="sb-gate">
    <div class="sb-gate-swiper">
      <swiperItem />
    </div>
    <div class="sb-gate-body">
      <div class="sb-gate-menu">
        <div
          ref="popoverSearchRecent"
          class="sb-gate-search"
          :class="{ active: isSearchRecentOpen }"
        >
          <SbInput
            show-search
            @search="onSearch"
            placeholder="키워드 분석부터 시작해 볼까요?"
            size="large"
            @click="toggleSearchRecent"
          />
          <div class="sb-gate-search-popular">
            <div class="sb-gate-search-popular__title">인기 검색어</div>
            <searchKeyword />
          </div>
          <div class="sb-popover-search-recent">
            <div class="sb-popover-search-recent-history">
              <div class="sb-popover-search-recent-history-head">
                <strong>최근 검색 내역</strong>
                <Button label="전체 삭제" severity="contrast" variant="text" />
              </div>
              <div class="sb-popover-search-recent-history-body">
                <!-- <p>최근 검색 내역이 없습니다.</p> -->
                <div class="sb-chip">
                  <div class="sb-chip-list">
                    <Chip
                      v-for="chip in SearchRecentHistory"
                      :key="chip.id"
                      :label="chip.label"
                      removable
                      @remove="removeChip(chip.id)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="sb-popover-search-recent-popular">
              <div class="sb-popover-search-recent-popular__title">
                인기 검색어
              </div>
              <searchKeyword />
            </div>
          </div>
        </div>
        <div class="sb-gate-link">
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkRecommend />
            <p>추천 기회</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkKeyword />
            <p>키워드 분석</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkProduct />
            <p>상품분석</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkRanking />
            <p>나의 랭킹 찾기</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkStory />
            <p>성장 스토리</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkKtrend />
            <p>K-트렌드</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <IconArrowLinkPlanner />
            <p>셀링플래너</p>
          </NuxtLink>
        </div>
      </div>
      <div class="sb-gate-introduce">
        <h3>
          셀러의 성장을 위한 가장 빠른 길,
          <span class="text-primary">셀링부스터</span>
        </h3>
        <div class="sb-gate-introduce-list">
          <div class="sb-gate-introduce-list-item">
            <Badge value="마켓 트렌드" severity="secondary"></Badge>
            <h4>
              키워드와 시장 분석으로<br />
              <span class="text-primary">새로운 상품 기회</span>를 찾아냅니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img01.png" alt="" />
          </div>
          <div class="sb-gate-introduce-list-item">
            <Badge value="판매 가속" severity="secondary"></Badge>
            <h4>
              <span class="text-primary">가격, CS, 상품명까지 분석</span>을 통해
              <br />성과를 끌어올립니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img02.png" alt="" />
          </div>
          <div class="sb-gate-introduce-list-item">
            <Badge value="성장 리포트" severity="secondary"></Badge>
            <h4>
              매출 데이터를 분석하고 <br />인사이트를
              <span class="text-primary">알기 쉽게 제공</span>합니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img03.png" alt="" />
          </div>
        </div>
        <div class="sb-gate-introduce-list">
          <div class="sb-gate-introduce-list-item">
            <Badge value="상품명 추천" severity="secondary"></Badge>
            <h4>
              <span class="text-primary">최적의 상품명을 제안</span>해 클릭률과
              스토어 유입을 효과적으로 높입니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img04.png" alt="" />
          </div>
          <div class="sb-gate-introduce-list-item">
            <Badge value="셀링 플래너" severity="secondary"></Badge>
            <h4>
              셀러의 일정 알림을 통해 다음을<br />
              <span class="text-primary">미리 준비</span> 할 수 있도록 돕습니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img05.png" alt="" />
          </div>
          <div class="sb-gate-introduce-list-item">
            <Badge value="K-트렌드" severity="secondary"></Badge>
            <h4>
              <span class="text-primary">최신 트렌드 분석</span>으로<br />
              적합한 아이템을 추천해드립니다.
            </h4>
            <img src="./../../assets/images/gate/introduce-img06.png" alt="" />
          </div>
        </div>
      </div>
      <div class="sb-gate-banner">
        <SbBanner />
      </div>
      <div class="sb-gate-board">
        <div class="sb-gate-board-tab">
          <div class="sb-tab">
            <Button variant="text" class="active">
              <h5>K-Trend</h5>
            </Button>
            <Button variant="text">
              <h5>Blog</h5>
            </Button>
            <Button variant="text">
              <h5>성장 스토리</h5>
            </Button>
          </div>
        </div>
        <div class="sb-gate-board-contents">
          <div class="sb-gate-board-list">
            <NuxtLink to="/" class="sb-gate-board-list-item" v-for="n in 6">
              <div class="sb-gate-board-list-item-head">
                <Badge value="NEWS" severity="warn"></Badge>
                <p>2026.02.14</p>
              </div>
              <div class="sb-gate-board-list-item-body">
                <div class="sb-gate-board-list-item-body__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-gate-board-list-item-body__contents">
                  <h6>
                    컨텐츠 제목은 최대 1줄로 처리하고 더 길어질 경우는 ...으로
                    처리하는 것으로 결정
                  </h6>
                  <p>
                    본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는
                    ... 으로 마무리 처리 본문 컨텐츠 내용은 최대 3줄까지
                    노출하고 더 길어질 경우에는 ...으로 마무리 처리 본문 컨텐츠
                    내용은 최대 3줄까지 노출하고 더 길어질 경우에는 ... 으로
                    마무리 처리 본문 컨텐츠 내용은 최대 3줄까지 노출하고 더
                    길어질 경우에는 ...으로 마무리 처리본문 컨텐츠 내용은 최대
                    3줄까지 노출하고 더 길어질 경우에는 ... 으로 마무리 처리
                    본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질 경우에는
                    ...으로 마무리 처리 본문 컨텐츠 내용은 최대 3줄까지 노출하고
                    더 길어질 경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은
                    최대 3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="sb-gate-board-button">
            <NuxtLink to="/">
              <Button severity="primary">
                <span class="p-button-label">더보기</span>
                <IconArrowRight class="ico-arrow-right" />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="sb-gate-news">
        <div class="grid">
          <div class="col-6">
            <dl class="sb-gate-news-item sb-gate-news-item-seller">
              <dt>WANTED</dt>
              <dd>
                <h4>
                  우리와 함께 성장할<br />
                  '트렌디사냥꾼’ 셀러를 찾아요
                </h4>
                <p>
                  트렌드를 읽는 눈이 남다르고,<br />
                  자신의 성장스토리를 멋지게 공유해 줄 셀러님이 있다면?<br />
                  우리가 찾던 바로 그 주인공을 셀링부스터에 알려주세요.
                </p>
                <img src="./../../assets/images/gate/news-seller.png" alt="" />
              </dd>
            </dl>
          </div>
          <div class="col-3">
            <dl class="sb-gate-news-item sb-gate-news-item-qna">
              <dt>자주 묻는 질문</dt>
              <dd>
                <h4>
                  시행착오는 줄이고<br />
                  성과에만 집중하는 방법
                </h4>
                <p>
                  셀링부스터를 더 200% 활용할 수 있도록<br />
                  자주 찾는 질문과 답변을 모아두었어요.
                </p>
                <NuxtLink to="/">
                  <Button variant="text">
                    <span class="p-button-label">보러 가기</span>
                    <IconArrowAchevronRight class="ico-arrow-achevron-right" />
                  </Button>
                </NuxtLink>
                <img src="./../../assets/images/gate/news-qna.png" alt="" />
              </dd>
            </dl>
          </div>
          <div class="col-3">
            <dl class="sb-gate-news-item sb-gate-news-item-introduce">
              <dt>서비스 소개</dt>
              <dd>
                <h4>
                  데이터로 발견하는<br />
                  셀러의 숨은 성장 기회
                </h4>
                <p>
                  복잡한 시장 트렌드와 매출 관리,<br />
                  이제 셀링부스터가 분석해 드려요.
                </p>
                <NuxtLink to="/">
                  <Button variant="text">
                    <span class="p-button-label">보러 가기</span>
                    <IconArrowAchevronRight class="ico-arrow-achevron-right" />
                  </Button>
                </NuxtLink>
                <img
                  src="./../../assets/images/gate/news-introduce.png"
                  alt=""
                />
              </dd>
            </dl>
          </div>
        </div>
        <SbBanner />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
});

import { ref, onMounted, computed, watch, nextTick } from 'vue';

import swiperItem from './swiperItem.vue';
import searchKeyword from './searchKeyword.vue';

import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconArrowLinkRecommend from '@/assets/icons/gate/link-recommend.svg?component';
import IconArrowLinkKeyword from '@/assets/icons/gate/link-keyword.svg?component';
import IconArrowLinkProduct from '@/assets/icons/gate/link-product.svg?component';
import IconArrowLinkRanking from '@/assets/icons/gate/link-ranking.svg?component';
import IconArrowLinkStory from '@/assets/icons/gate/link-story.svg?component';
import IconArrowLinkKtrend from '@/assets/icons/gate/link-ktrend.svg?component';
import IconArrowLinkPlanner from '@/assets/icons/gate/link-planner.svg?component';

const SearchRecentHistory = ref([
  { id: 1, label: '두바이쫀득쿠키' },
  { id: 2, label: '봄동비빔밥' },
  { id: 3, label: '버터떡' },
  { id: 4, label: '강릉샌드' },
  { id: 5, label: '킹크랩' },
  { id: 6, label: '콩커피' },
  { id: 7, label: '초당순두부' },
  { id: 8, label: '가디건' },
  { id: 9, label: '화분' },
]);

//popover
const popoverSearchRecent = ref(null);
const isSearchRecentOpen = ref(false);

const toggleSearchRecent = async () => {
  isSearchRecentOpen.value = !isSearchRecentOpen.value;

  // 열릴 때만 DOM 렌더 후 스크롤 상태 재계산
  if (isSearchRecentOpen.value) {
    await nextTick();
    setTimeout(() => {
      handleScroll();
    }, 0);
  }
};

// 바깥 클릭 시 닫기
const handleClickOutside = (event) => {
  if (!isSearchRecentOpen.value) return;

  const wrapEl = popoverSearchRecent.value;
  if (!wrapEl) return;

  // wrapper 바깥 클릭이면 닫기
  if (!wrapEl.contains(event.target)) {
    isSearchRecentOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
