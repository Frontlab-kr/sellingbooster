<template>
  <div class="sb-gate">
    <div class="sb-gate-swiper sb-gsap" ref="gateSwiper">
      <div class="pc">
        <swiperPc />
      </div>
      <div class="mo">
        <swiperMo />
      </div>
    </div>
    <div class="sb-gate-body">
      <div class="sb-gate-menu sb-gsap" ref="gateMenu">
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
                <Button
                  label="전체 삭제"
                  severity="contrast"
                  variant="text"
                  @click="clearAllHistory"
                />
              </div>
              <div class="sb-popover-search-recent-history-body">
                <div class="sb-chip" v-if="SearchRecentHistory.length > 0">
                  <div class="sb-chip-list">
                    <Chip
                      v-for="chip in SearchRecentHistory"
                      :key="chip.id"
                      :label="chip.label"
                      removable
                      @click.stop
                      @remove="removeChip(chip.id)"
                    />
                  </div>
                </div>
                <p v-else class="no-history">최근 검색 내역이 없습니다.</p>
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
            <img src="./../../assets/icons/gate/link-recommend.png" alt="" />
            <p>추천 기회</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <img src="./../../assets/icons/gate/link-keyword.png" alt="" />
            <p>키워드 분석</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <img src="./../../assets/icons/gate/link-product.png" alt="" />
            <p>상품분석</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <img src="./../../assets/icons/gate/link-ranking.png" alt="" />
            <p>나의 랭킹 찾기</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <img src="./../../assets/icons/gate//link-story.png" alt="" />
            <p>성장 스토리</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <img src="./../../assets/icons/gate/link-ktrend.png" alt="" />
            <p>K-트렌드</p>
          </NuxtLink>
          <NuxtLink to="/" class="sb-gate-link-item">
            <img src="./../../assets/icons/gate/link-planner.png" alt="" />
            <p>셀링플래너</p>
          </NuxtLink>
        </div>
      </div>
      <div class="sb-gate-introduce">
        <h3 class="sb-gsap" ref="gateIntroduceTitle">
          셀러의 성장을 위한<br class="mo" />
          가장 빠른 길,
          <span class="text-primary">셀링부스터</span>
        </h3>
        <div class="pc">
          <div class="sb-gate-introduce-list sb-gsap" ref="gateIntroduceLeft">
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="마켓 트렌드" severity="secondary"></Badge>
              <h4>
                키워드와 시장 분석으로<br />
                <span class="text-primary">새로운 상품 기회</span>를 찾아냅니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img01.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="판매 가속" severity="secondary"></Badge>
              <h4>
                <span class="text-primary">가격, CS, 상품명까지 분석</span>을
                통해 <br />성과를 끌어올립니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img02.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="성장 리포트" severity="secondary"></Badge>
              <h4>
                매출 데이터를 분석하고 <br />인사이트를
                <span class="text-primary">알기 쉽게 제공</span>합니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img03.png"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="sb-gate-introduce-list sb-gsap" ref="gateIntroduceRight">
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="상품명 추천" severity="secondary"></Badge>
              <h4>
                <span class="text-primary">최적의 상품명을 제안</span>해
                클릭률과<br />
                스토어 유입을 효과적으로 높입니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img04.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="셀링 플래너" severity="secondary"></Badge>
              <h4>
                셀러의 일정 알림을 통해 다음을<br />
                <span class="text-primary">미리 준비</span> 할 수 있도록
                돕습니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img05.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="K-트렌드" severity="secondary"></Badge>
              <h4>
                <span class="text-primary">최신 트렌드 분석</span>으로<br />
                적합한 아이템을 추천해드립니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img06.png"
                alt=""
              />
            </NuxtLink>
          </div>
        </div>
        <div class="tablet">
          <div
            class="sb-gate-introduce-list sb-gsap"
            ref="gateIntroduceBottom1"
          >
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="마켓 트렌드" severity="secondary"></Badge>
              <h4>
                키워드와 시장 분석으로<br />
                <span class="text-primary">새로운 상품 기회</span>를 찾아냅니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img01.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="판매 가속" severity="secondary"></Badge>
              <h4>
                <span class="text-primary">가격, CS, 상품명까지 분석</span>을
                통해 <br />성과를 끌어올립니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img02.png"
                alt=""
              />
            </NuxtLink>
          </div>
          <div
            class="sb-gate-introduce-list sb-gsap"
            ref="gateIntroduceBottom2"
          >
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="성장 리포트" severity="secondary"></Badge>
              <h4>
                매출 데이터를 분석하고 <br />인사이트를
                <span class="text-primary">알기 쉽게 제공</span>합니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img03.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="상품명 추천" severity="secondary"></Badge>
              <h4>
                <span class="text-primary">최적의 상품명을 제안</span>해
                클릭률과<br />
                스토어 유입을 효과적으로 높입니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img04.png"
                alt=""
              />
            </NuxtLink>
          </div>
          <div
            class="sb-gate-introduce-list sb-gsap"
            ref="gateIntroduceBottom3"
          >
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="셀링 플래너" severity="secondary"></Badge>
              <h4>
                셀러의 일정 알림을 통해 다음을<br />
                <span class="text-primary">미리 준비</span> 할 수 있도록
                돕습니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img05.png"
                alt=""
              />
            </NuxtLink>
            <NuxtLink to="/" class="sb-gate-introduce-list-item">
              <Badge value="K-트렌드" severity="secondary"></Badge>
              <h4>
                <span class="text-primary">최신 트렌드 분석</span>으로<br />
                적합한 아이템을 추천해드립니다.
              </h4>
              <img
                src="./../../assets/images/gate/introduce-img06.png"
                alt=""
              />
            </NuxtLink>
          </div>
        </div>
        <div class="mo sb-gsap" ref="gateIntroduceMo">
          <introduceMo />
        </div>
      </div>
      <div class="sb-gate-banner sb-gsap" ref="gateBanner">
        <SbBanner />
      </div>
      <div class="sb-gate-board">
        <div class="sb-gate-board-tab sb-gsap" ref="gateBoardTab">
          <div class="sb-tab">
            <Button
              v-for="(tab, index) in tabs"
              :key="index"
              variant="text"
              :class="{ active: activeTab === index }"
              @click="changeTab(index)"
            >
              <h5>{{ tab.label }}</h5>
            </Button>
          </div>
        </div>
        <div class="sb-gate-board-contents sb-gsap" ref="gateBoardContents">
          <div v-if="activeTab === 0">
            <div class="sb-gate-board-list">
              <NuxtLink to="/" class="sb-gate-board-list-item" v-for="n in 6">
                <div class="sb-gate-board-list-item-body">
                  <div class="sb-gate-board-list-item-body__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-gate-board-list-item-body__contents">
                    <div class="sb-gate-board-list-item-head">
                      <div class="sb-gate-board-list-item-head__badge">
                        <Badge value="NEWS" severity="warn" />
                      </div>
                      <p>2026.02.14</p>
                    </div>
                    <h6>
                      컨텐츠 제목은 최대 1줄로 처리하고 더 길어질 경우는 ...으로
                      처리하는 것으로 결정
                    </h6>
                    <p>
                      본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                      본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리
                      처리본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                      본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                    </p>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div class="sb-gate-board-button">
              <div class="pc">
                <NuxtLink to="/">
                  <Button severity="primary">
                    <span class="p-button-label">더보기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </NuxtLink>
              </div>
              <div class="mo">
                <NuxtLink to="/">
                  <Button severity="primary" size="large">
                    <span class="p-button-label">더보기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 1">
            <div class="sb-gate-board-list sb-gate-board-list--blog">
              <NuxtLink to="/" class="sb-gate-board-list-item" v-for="n in 6">
                <div class="sb-gate-board-list-item-body">
                  <div class="sb-gate-board-list-item-body__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-gate-board-list-item-body__contents">
                    <div class="sb-gate-board-list-item-head">
                      <div class="sb-gate-board-list-item-head__badge">
                        <Badge value="NEWS" severity="warn" />
                        <Badge value="셀링트렌드" severity="success" />
                      </div>
                      <p>2026.02.14</p>
                    </div>
                    <h6>
                      컨텐츠 제목은 최대 1줄로 처리하고 더 길어질 경우는 ...으로
                      처리하는 것으로 결정
                    </h6>
                    <p>
                      본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                      본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리
                      처리본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                      본문 컨텐츠 내용은 최대 3줄까지 노출하고 더 길어질
                      경우에는 ... 으로 마무리 처리 본문 컨텐츠 내용은 최대
                      3줄까지 노출하고 더 길어질 경우에는 ...으로 마무리 처리
                    </p>
                  </div>
                </div>
                <div class="sb-gate-board-list-item-foot">
                  <SbInfo
                    :visible-buttons="['view', 'read']"
                    :view-count="'12,325'"
                    :read-time="'12분 분량'"
                  />
                </div>
              </NuxtLink>
            </div>
            <div class="sb-gate-board-button">
              <div class="pc">
                <NuxtLink to="/">
                  <Button severity="primary">
                    <span class="p-button-label">더보기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </NuxtLink>
              </div>
              <div class="mo">
                <NuxtLink to="/">
                  <Button severity="primary" size="large">
                    <span class="p-button-label">더보기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 2">
            <div class="sb-gate-board-list">
              <NuxtLink
                v-for="(item, index) in storyList"
                :key="index"
                to="/community/story/view"
                class="sb-board-list-item"
              >
                <div class="sb-board-list-item__head">
                  <div class="sb-board-list-item__thumb">
                    <img
                      v-if="item.thumb"
                      :src="item.thumb"
                      alt="프로필 이미지"
                    />
                    <IconProfileDefault v-else class="ico-profile-default" />
                  </div>
                  <div class="sb-board-list-item__name">
                    <p>{{ item.author }}</p>
                    <span>{{ item.date }}</span>
                  </div>
                  <!-- <div class="sb-board-list-item__menu" @click.stop.prevent>
                    <SbMenu :items="menuItems" />
                  </div> -->
                </div>

                <h6 class="sb-board-list-item__title">{{ item.title }}</h6>
                <div class="sb-board-list-item__contents">
                  {{ item.content }}
                </div>

                <div class="sb-board-list-item__foot">
                  <SbSocial
                    class="sb-social--disabled"
                    :visible-buttons="['like', 'comment', 'share']"
                    :like-count="item.likeCount"
                    :comment-count="item.commentCount"
                    :share-count="item.shareCount"
                    v-model:like-active="item.likeActive"
                  />
                </div>
              </NuxtLink>
            </div>
            <div class="sb-gate-board-button">
              <div class="pc">
                <NuxtLink to="/">
                  <Button severity="primary">
                    <span class="p-button-label">더보기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </NuxtLink>
              </div>
              <div class="mo">
                <NuxtLink to="/">
                  <Button severity="primary" size="large">
                    <span class="p-button-label">더보기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sb-gate-board-background sb-gsap"
          ref="gateBoardBackground"
        ></div>
      </div>
      <div class="sb-gate-news">
        <div class="grid">
          <div class="col-6 sb-gsap" ref="gateNewsSeller">
            <dl class="sb-gate-news-item sb-gate-news-item-seller">
              <dt>WANTED</dt>
              <dd>
                <h4>
                  우리와 함께 성장할<br />
                  '트렌디사냥꾼’ 셀러를 찾아요
                </h4>
                <div class="pc">
                  <p>
                    트렌드를 읽는 눈이 남다르고,<br />
                    자신의 성장스토리를 멋지게 공유해 줄 셀러님이 있다면?<br />
                    우리가 찾던 바로 그 주인공을 셀링부스터에 알려주세요.
                  </p>
                </div>
                <div class="mo">
                  <p>
                    우리가 찾는 주인공을<br />
                    셀링부스터에 알려주세요.
                  </p>
                </div>
                <img src="./../../assets/images/gate/news-seller.png" alt="" />
              </dd>
            </dl>
          </div>
          <div class="col-3 sb-gsap" ref="gateNewsQna">
            <dl class="sb-gate-news-item sb-gate-news-item-qna">
              <dt>자주 묻는 질문</dt>
              <dd>
                <h4>
                  시행착오는 줄이고<br />
                  성과에만 집중하는 방법
                </h4>
                <div class="pc">
                  <p>
                    셀링부스터를 더 200% 활용할 수 있도록<br />
                    자주 찾는 질문과 답변을 모아두었어요.
                  </p>
                </div>
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
          <div class="col-3 sb-gsap" ref="gateNewsIntroduce">
            <dl class="sb-gate-news-item sb-gate-news-item-introduce">
              <dt>서비스 소개</dt>
              <dd>
                <h4>
                  데이터로 발견하는<br />
                  셀러의 숨은 성장 기회
                </h4>
                <div class="pc">
                  <p>
                    복잡한 시장 트렌드와 매출 관리,<br />
                    이제 셀링부스터가 분석해 드려요.
                  </p>
                </div>
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
        <div class="sb-gsap" ref="gateNewsBanner">
          <SbBanner />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  layoutClass: 'sb--gate',
  showExtension: true,
});

import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';

import swiperPc from './swiperPc.vue';
import swiperMo from './swiperMo.vue';
import introduceMo from './introduceMo.vue';

import searchKeyword from './searchKeyword.vue';

import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemBlock from '@/assets/icons/system/block.svg?component';
import IconSystemReport from '@/assets/icons/system/report.svg?component';
import IconProfileDefault from '@/assets/icons/profile/default.svg?component';

//animation
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const gateSwiper = ref(null);
const gateMenu = ref(null);
const gateIntroduceTitle = ref(null);
const gateIntroduceLeft = ref(null);
const gateIntroduceRight = ref(null);
const gateIntroduceBottom1 = ref(null);
const gateIntroduceBottom2 = ref(null);
const gateIntroduceBottom3 = ref(null);
const gateIntroduceMo = ref(null);
const gateBanner = ref(null);
const gateBoardTab = ref(null);
const gateBoardContents = ref(null);
const gateBoardBackground = ref(null);
const gateNewsSeller = ref(null);
const gateNewsQna = ref(null);
const gateNewsIntroduce = ref(null);
const gateNewsBanner = ref(null);

let lenis = null;
let rafId = null;

onMounted(async () => {
  await nextTick();

  // 1. Lenis 초기화
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);

  // 2. 틱커 함수를 변수에 할당 (나중에 해제하기 위함)
  rafId = (time) => {
    if (lenis) lenis.raf(time * 1000);
  };

  gsap.ticker.add(rafId);
  gsap.ticker.lagSmoothing(0);

  // --- C. 실제 애니메이션 코드 ---
  gsap.fromTo(
    gateSwiper.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
    },
  );

  gsap.fromTo(
    gateMenu.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.4,
      ease: 'power2.out',
    },
  );

  gsap.fromTo(
    gateIntroduceTitle.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: 'power2.out',
    },
  );

  gsap.fromTo(
    gateIntroduceLeft.value,
    { x: -500, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateIntroduceLeft.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateIntroduceRight.value,
    { x: 500, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateIntroduceRight.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateIntroduceBottom1.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateIntroduceBottom1.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateIntroduceBottom2.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateIntroduceBottom2.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateIntroduceBottom3.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateIntroduceBottom3.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateIntroduceMo.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateIntroduceMo.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateBanner.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateBanner.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateBoardTab.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateBoardTab.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateBoardContents.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateBoardContents.value,
        start: 'top 60%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateBoardBackground.value,
    { x: 1920, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateBoardBackground.value,
        start: 'top 100%',
        end: 'top 0%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateNewsSeller.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateNewsSeller.value,
        start: 'top 100%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateNewsQna.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateNewsQna.value,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateNewsIntroduce.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateNewsIntroduce.value,
        start: 'top 60%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    gateNewsBanner.value,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gateNewsBanner.value,
        start: 'top 100%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  ScrollTrigger.refresh();
});

onUnmounted(() => {
  // 1. GSAP 틱커 루프 즉시 정지
  if (rafId) {
    gsap.ticker.remove(rafId);
  }

  // 2. Lenis 파괴 및 메모리 해제
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }

  // 3. ScrollTrigger 모든 인스턴스 죽이기
  ScrollTrigger.getAll().forEach((t) => t.kill());
  ScrollTrigger.clearScrollMemory();

  // 4. HTML/BODY에 남은 Lenis 스타일 강제 복구
  // 다른 페이지에서 휠이 안 먹는 주범인 overflow: hidden을 제거합니다.
  document.documentElement.classList.remove('lenis');
  document.documentElement.style.overflow = '';
  document.documentElement.style.height = '';
  document.body.style.overflow = '';
  document.body.style.height = '';

  // 5. 페이지 최상단으로 강제 이동 (선택 사항)
  window.scrollTo(0, 0);
});

//tab
const activeTab = ref(0);

const tabs = [
  { label: 'K-Trend', value: 'ktrend' },
  { label: 'Blog', value: 'blog' },
  { label: '성장 스토리', value: 'story' },
];

const changeTab = (index) => {
  activeTab.value = index;
  nextTick(() => {
    ScrollTrigger.refresh();
  });
};

//chip
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
const clearAllHistory = () => {
  SearchRecentHistory.value = [];
};

const removeChip = (id) => {
  SearchRecentHistory.value = SearchRecentHistory.value.filter(
    (chip) => chip.id !== id,
  );
};

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

const menuItems = ref([
  {
    label: '차단',
    icon: IconSystemBlock,
    class: 'p-tieredmenu-item-link-danger',
  },
  {
    label: '신고',
    icon: IconSystemReport,
    class: 'p-tieredmenu-item-link-danger',
    command: () => {
      reportOpen();
    },
  },
  {
    label: '수정',
    icon: IconSystemEdit,
    command: () => {
      router.push('./write');
    },
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);

const storyList = ref([
  {
    author: '셀링부스터',
    date: '2026.02.14',
    title:
      '작은 시작에서, 꾸준한 성장까지작은 시작에서, 꾸준한 성장까지작은 시작에서, 꾸준한 성장까지작은 시작에서, 꾸준한 성장까지작은 시작에서, 꾸준한 성장까지작은 시작에서, 꾸준한 성장까지작은 시작에서, 꾸준한 성장까지',
    content:
      '처음부터 모든 게 순조롭진 않았습니다. 상품 등록 하나에도 고민이 많았고, 판매가 일어나지 않는 날엔 "내가 잘하고 있는 걸까?"라는 생각이 들기도 했어요. 하지만 포기하지 않고 하나씩 배워가며 상품을 개선하고, 고객의 목소리에 귀 기울였습니다. 작은 변화들이 쌓이자 조금씩 결과가 보이기 시작했고, 그 경험은 다시 도전할 수 있는 힘이 되었습니다. 지금도 완성형은 아니지만, 셀러로서 성장하는 과정 자체가 값진 자산이 되었다고 느낍니다. 이 스토리가 같은 길을 걷고 있는 누군가에게 작은 용기가 되었으면 합니다.',
    likeCount: '9,000',
    likeActive: true,
    commentCount: '9,000',
    shareCount: '9,000',
  },
  {
    thumb: 'https://picsum.photos/id/1/100/100',
    author: '셀링부스터',
    date: '2026.02.14',
    title: '위기를 기회로, 품절 대란 극복기',
    content: '111',
    image: 'https://picsum.photos/id/1/200/200',
    likeCount: '9,000',
    likeActive: false,
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
    likeActive: false,
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
    likeActive: false,
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
    likeActive: false,
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
    likeActive: false,
    commentCount: '9,000',
    shareCount: '9,000',
  },
]);
</script>
