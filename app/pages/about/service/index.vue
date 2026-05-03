<template>
  <div class="sb-service">
    <div class="sb-service-word">
      <div class="sb-service-word-head" ref="serviceWord">
        <div class="sb-service-word-head-item">
          <h2>수요는 있을까?</h2>
          <h4>내 가격, 경쟁력 있나?</h4>
        </div>
        <div class="sb-service-word-head-item">
          <h4>남들은 얼마에 팔까?</h4>
          <h2>최저가일까?</h2>
          <h4>지금 소싱해도 될까?</h4>
        </div>
        <div class="sb-service-word-head-item">
          <h4>요즘 트렌드에 맞을까?</h4>
          <h4>혼자 다 할 수 있을까?</h4>
        </div>
        <div class="sb-service-word-head-item">
          <h2>어떤 키워드가 좋을까?</h2>
          <h4>잘 팔리는 상품은 뭘까?</h4>
          <h2>상단 노출 될까?</h2>
        </div>
      </div>
      <div class="sb-service-word-title sb-gsap" ref="serviceWordTitle">
        <h1>
          무엇을 팔아야 할지<br class="mo" />
          아직도 <span class="text-primary">고민 중</span>이신가요?
        </h1>
        <Button severity="primary" size="large" label="무료로 시작하기" />
      </div>
      <div class="sb-service-word-background" ref="serviceWordBackground"></div>
      <div class="sb-service-word-arrow sb-gsap" ref="serviceWordArrow">
        <p>Scroll Down</p>
      </div>
    </div>
    <div class="sb-service-dashboard">
      <div class="sb-service-dashboard__title" ref="serviceDashboardTitle">
        <h2>
          셀링부스터는<br class="mo" />
          흩어진 판매 데이터를
        </h2>
        <h2>통합 대시보드로 제공합니다.</h2>
      </div>
      <div class="sb-service-dashboard-contents">
        <div
          class="sb-service-dashboard-image sb-gsap"
          ref="serviceDashboardImage"
        >
          <div class="pc">
            <img src="./../../../assets/images/service/dashboard.png" alt="" />
          </div>
          <div class="mo">
            <img
              src="./../../../assets/images/service/dashboard-mo.png"
              alt=""
            />
          </div>
        </div>
        <div class="sb-service-dashboard-step">
          <div
            class="sb-service-dashboard-step-item sb-gsap"
            ref="serviceDashboardStep01"
          >
            <strong><span class="pc">STEP</span> 01</strong>
            <h4>
              기회<br class="mo" />
              발견
            </h4>
          </div>
          <div
            class="sb-service-dashboard-step-item sb-gsap"
            ref="serviceDashboardStep02"
          >
            <strong><span class="pc">STEP</span> 02</strong>
            <h4>
              가벼운<br class="mo" />
              실행
            </h4>
          </div>
          <div
            class="sb-service-dashboard-step-item sb-gsap"
            ref="serviceDashboardStep03"
          >
            <strong><span class="pc">STEP</span> 03</strong>
            <h4>
              매출<br class="mo" />
              모니터링
            </h4>
          </div>
        </div>
      </div>
      <div
        class="sb-service-dashboard-circle sb-gash"
        ref="serviceDashboardCircle"
      ></div>
    </div>
    <div class="sb-service-introduce">
      <div class="sb-service-introduce-card" ref="serviceIntroduce01">
        <div class="pc">
          <img src="./../../../assets/images/service/introduce01.png" alt="" />
        </div>
        <div class="mo">
          <img
            src="./../../../assets/images/service/introduce01-mo.png"
            alt=""
          />
        </div>
      </div>
      <div class="sb-service-introduce-card" ref="serviceIntroduce02">
        <div class="pc">
          <img src="./../../../assets/images/service/introduce02.png" alt="" />
        </div>
        <div class="mo">
          <img
            src="./../../../assets/images/service/introduce02-mo.png"
            alt=""
          />
        </div>
      </div>
      <div class="sb-service-introduce-card" ref="serviceIntroduce03">
        <div class="pc">
          <img src="./../../../assets/images/service/introduce03.png" alt="" />
        </div>
        <div class="mo">
          <img
            src="./../../../assets/images/service/introduce03-mo.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="sb-service-loadmap">
      <div class="sb-service-loadmap__title sb-gsap" ref="serviceLoadmapTitle">
        <h2>
          셀링부스터는<br class="mo" />
          셀러의 성장단계에 맞는<br />
          로드맵을 제공합니다.
        </h2>
      </div>
      <div class="sb-service-loadmap-list" ref="serviceLoadmapList">
        <div class="sb-service-loadmap-list-item level01 active">
          <div class="sb-service-loadmap-list-item__tooltip">
            <p>이커머스 진입 준비</p>
          </div>
          <div class="sb-service-loadmap-list-item-chart">
            <div class="sb-service-loadmap-list-item-chart__title">
              <div class="sb-service-loadmap-list-item-chart__badge">
                <Badge value="Level 1" severity="level1"></Badge>
              </div>
              <h4>VISITER</h4>
            </div>
            <SbChartLoadmap :score="scores[0]" end-color="#FFC13D" />
          </div>
          <ul>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />사업자 정보 입력
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />관심 카테고리 설정
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />온보딩 시나리오
            </li>
          </ul>
        </div>
        <div class="sb-service-loadmap-list-item level02">
          <div class="sb-service-loadmap-list-item__tooltip">
            <p>첫 주문 발생 유도</p>
          </div>
          <div class="sb-service-loadmap-list-item-chart">
            <div class="sb-service-loadmap-list-item-chart__title">
              <div class="sb-service-loadmap-list-item-chart__badge">
                <Badge value="Level 2" severity="level2"></Badge>
              </div>
              <h4>STARTER</h4>
            </div>
            <SbChartLoadmap :score="scores[1]" end-color="#FB7310" />
          </div>
          <div class="sb-service-loadmap-list-item__line">
            <IconProfileLevelLine class="ico-profile-level-line" />
          </div>
          <ul>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />상품 분석 가이드
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />상세페이지 제작 팁
            </li>
          </ul>
        </div>
        <div class="sb-service-loadmap-list-item level03">
          <div class="sb-service-loadmap-list-item__tooltip">
            <p>매출 가속화</p>
          </div>
          <div class="sb-service-loadmap-list-item-chart">
            <div class="sb-service-loadmap-list-item-chart__title">
              <div class="sb-service-loadmap-list-item-chart__badge">
                <Badge value="Level 3" severity="level3"></Badge>
              </div>
              <h4>BOOSTER</h4>
            </div>
            <SbChartLoadmap :score="scores[2]" end-color="#F04755" />
          </div>

          <div class="sb-service-loadmap-list-item__line">
            <IconProfileLevelLine class="ico-profile-level-line" />
          </div>
          <ul>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />자금 진단 및 대출
              조회
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />경쟁사 정밀
              모니터링
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />광고 효율 관리
            </li>
          </ul>
        </div>
        <div class="sb-service-loadmap-list-item level04">
          <div class="sb-service-loadmap-list-item__tooltip">
            <p>시장 지배력 확대</p>
          </div>
          <div class="sb-service-loadmap-list-item-chart">
            <div class="sb-service-loadmap-list-item-chart__title">
              <div class="sb-service-loadmap-list-item-chart__badge">
                <Badge value="Level 4" severity="level4"></Badge>
              </div>
              <h4>MASTER</h4>
            </div>
            <SbChartLoadmap :score="scores[3]" end-color="#6466FA" />
          </div>

          <div class="sb-service-loadmap-list-item__line">
            <IconProfileLevelLine class="ico-profile-level-line" />
          </div>
          <ul>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />심층 외부
              동향(뉴스/논문)
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />
              커뮤니티 노하우 공유
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sb-service-ecosystem">
      <div
        class="sb-service-ecosystem__title sb-gsap"
        ref="serviceEcosystemTitle"
      >
        <h2>
          셀링부스터는 함께 성장하는<br />
          생태계를 만듭니다.
        </h2>
      </div>
      <div class="sb-service-ecosystem-card sb-gsap" ref="serviceEcosystemCard">
        <div class="sb-service-ecosystem-card-item">
          <img src="./../../../assets/images/service/ecosystem01.png" alt="" />
        </div>
        <div class="sb-service-ecosystem-card-item">
          <img src="./../../../assets/images/service/ecosystem02.png" alt="" />
        </div>
        <div class="sb-service-ecosystem-card-item">
          <img src="./../../../assets/images/service/ecosystem03.png" alt="" />
        </div>
      </div>
    </div>
    <div class="sb-service-global" ref="serviceGlobal">
      <div class="sb-service-global__background01"></div>
      <div class="sb-service-global__background02"></div>
      <div class="sb-service-global__title" ref="serviceGlobalTitle">
        <h2>
          <span class="text-left">한국을 넘어 </span>
          <span class="text-right">글로벌로 나아갑니다.</span>
        </h2>
      </div>
    </div>
    <div class="sb-service-foot" ref="serviceFoot">
      <div class="sb-service-map">
        <div class="pc">
          <img src="./../../../assets/images/service/map.png" alt="" />
        </div>
        <div class="mo">
          <img src="./../../../assets/images/service/map-mo.png" alt="" />
        </div>
      </div>
      <div class="sb-service-foot__contents" ref="serviceFootContents">
        <div class="sb-service-foot__title">
          <h1>
            지금,<br />
            셀링부스터를<br class="mo" />
            무료로 시작하세요
          </h1>
          <p>당신도 셀러로 성공할 수 있습니다!</p>
        </div>
        <div class="sb-service-foot__button">
          <Button
            severity="contrast"
            outlined
            size="large"
            label="서비스 소개서 다운로드"
          />
        </div>
        <div class="sb-service-foot__background"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  layoutClass: 'sb--company',
});
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';
import IconProfileLevelLine from '@/assets/icons/profile/level-line.svg?component';
import SbChartLoadmap from './SbChartLoadmap.vue';

//animation
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceWord = ref(null);
const serviceWordBackground = ref(null);
const serviceWordTitle = ref(null);
const serviceWordArrow = ref(null);
const serviceDashboardTitle = ref(null);
const serviceDashboardCircle = ref(null);
const serviceDashboardImage = ref(null);
const serviceDashboardStep01 = ref(null);
const serviceDashboardStep02 = ref(null);
const serviceDashboardStep03 = ref(null);
const serviceLoadmapTitle = ref(null);
const serviceLoadmapList = ref(null);
const serviceEcosystemTitle = ref(null);
const serviceEcosystemCard = ref(null);
const serviceGlobal = ref(null);
const serviceGlobalTitle = ref(null);
const serviceFootContents = ref(null);
const serviceFoot = ref(null);

const scores = ref([0, 0, 0, 0]);

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

  // 1. 대상 선정
  const section = document.querySelector('.sb-service-word');
  const headContainer = serviceWord.value; // .sb-service-word-head
  const words = headContainer.querySelectorAll('h2, h4');

  // 2. 타임라인 생성
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=2500', // 타이틀 애니메이션 시간을 확보하기 위해 길이를 늘려줍니다.
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // 단어들이 다 나오는 시점(전체 2500px 중 약 50~60% 지점)을 계산
        // 진행도(progress)가 0.5(50%)를 넘어가면 end 추가, 아니면 제거
        if (self.progress > 0.8) {
          headContainer.classList.add('end');
        } else {
          headContainer.classList.remove('end');
        }
      },
    },
  });

  // 3. 텍스트 순차 활성화
  words.forEach((word, index) => {
    tl.to(
      word,
      {
        onStart: () => word.classList.add('active'),
        onReverseComplete: () => word.classList.remove('active'),
        duration: 0.5,
        invalidateOnRefresh: true,
      },
      index === 0 ? '0' : '>0.2', // 첫 번째 단어는 즉시, 나머지는 간격을 둡니다.
    );
  });

  // 4. 모든 단어가 켜진 후 타이틀 등장 (타임라인에 연결)
  // ">0.5"는 마지막 단어가 활성화된 지점으로부터 약간 뒤에 시작한다는 의미입니다.
  tl.fromTo(
    serviceWordTitle.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1, // 스크롤 진행 비율에 따른 상대적 시간
      ease: 'power2.out',
      invalidateOnRefresh: true,
    },
    '>0.5',
  );

  // 5. 배경 이동 (텍스트 활성화와 동시에 시작하거나 타이틀과 같이 조절 가능)
  // 단독 ScrollTrigger보다는 타임라인에 넣는 것이 싱크 맞추기 편합니다.
  tl.fromTo(
    serviceWordBackground.value,
    { bottom: '284px', right: '-232px' },
    {
      bottom: '120px',
      right: '-106px',
      ease: 'power2.out',
      duration: tl.duration(), // 타임라인 전체 길이에 걸쳐 부드럽게 이동
    },
    '0', // 타임라인 시작점부터 끝까지 배경이 천천히 움직이게 설정
  );
  tl.fromTo(
    serviceWordArrow.value,
    { y: 5, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1, // 스크롤 진행 비율에 따른 상대적 시간
      ease: 'power2.out',
    },
    '>0.5',
  );
  tl.to({}, { duration: 2 });

  gsap.fromTo(
    serviceDashboardTitle.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: serviceDashboardTitle.value,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );

  // --- Dashboard 섹션 애니메이션 (새로운 타임라인) ---
  const dashboardSection = document.querySelector('.sb-service-dashboard');

  const dashboardTl = gsap.timeline({
    scrollTrigger: {
      trigger: dashboardSection,
      start: 'top top',
      end: '+=1500', // 전체 애니메이션 길이 (충분히 줌)
      pin: true, // 섹션 고정
      scrub: 1, // 스크롤에 동기화
    },
  });

  // 1. 서클 크기 확장 (1520px까지)
  dashboardTl.to(serviceDashboardCircle.value, {
    width: 1520,
    duration: 1, // 상대적 시간
    ease: 'power1.inOut',
  });

  // 2. 서클 확장 끝나고 이미지 등장
  // ">" 기호를 사용해 앞선 서클 확장이 끝난 직후 시작하게 합니다.
  dashboardTl.fromTo(
    serviceDashboardImage.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    '>',
  );
  dashboardTl.fromTo(
    serviceDashboardStep01.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    '>',
  );
  dashboardTl.fromTo(
    serviceDashboardStep02.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    '>',
  );
  dashboardTl.fromTo(
    serviceDashboardStep03.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    },
    '>',
  );

  // --- Introduce 섹션 수정 코드 ---
  const introduceSection = document.querySelector('.sb-service-introduce');
  const introCards = introduceSection.querySelectorAll(
    '.sb-service-introduce-card',
  );

  introCards.forEach((card, index) => {
    const isLast = index === introCards.length - 1;

    // 수정: 특정 이미지가 아니라 이미지들을 감싸고 있는 div들을 타겟팅합니다.
    // 또는 card 내부에 애니메이션용 래퍼를 따로 두지 않았다면 .pc와 .mo 모두를 선택합니다.
    const animatedContent = card.querySelectorAll('.pc, .mo');

    if (!isLast) {
      // 1. 카드가 뒤로 눕고 작아지는 효과
      gsap.to(animatedContent, {
        rotationX: 20,
        rotationZ: (index % 2 === 0 ? 1 : -1) * 3,
        scale: 0.8,
        y: -50,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top top',
          end: '+=80%',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      // 2. 투명도 조절
      gsap.to(animatedContent, {
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top+=70% top',
          end: 'top+=100% top',
          scrub: true,
        },
      });
    } else {
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        pin: true,
        pinSpacing: true,
      });
    }
  });

  gsap.fromTo(
    serviceLoadmapTitle.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: serviceLoadmapTitle.value,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    serviceLoadmapList.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: serviceLoadmapList.value,
        start: 'top 50%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  // --- Loadmap 섹션 순차 활성화 애니메이션 ---

  const loadmapItems = serviceLoadmapList.value.querySelectorAll(
    '.sb-service-loadmap-list-item',
  );
  const loadmapSection = document.querySelector('.sb-service-loadmap');

  const loadmapTl = gsap.timeline({
    scrollTrigger: {
      trigger: loadmapSection,
      start: 'top top',
      end: '+=2000', // 아이템이 4개이므로 충분한 스크롤 길이 확보
      pin: true,
      scrub: 1,
    },
  });

  // 타이틀이 이미 위에서 나오고 있으므로, 여기서는 아이템 활성화에 집중합니다.
  loadmapItems.forEach((item, index) => {
    const targetScoreValue = 36; // 목표 점수: 25, 50, 75, 100

    loadmapTl.to(
      item,
      {
        duration: 0.5,
        onStart: () => {
          // 1. 클래스 활성화
          item.classList.add('active');

          // 2. 해당 인덱스의 스코어만 애니메이션
          // scores.value[index]를 직접 타겟팅하기 위해 임시 객체를 활용하는 것이 가장 안전합니다.
          const tempObj = { val: scores.value[index] };

          gsap.to(tempObj, {
            val: targetScoreValue,
            duration: 1, // 1초 동안 부드럽게 상승
            ease: 'power2.out',
            onUpdate: () => {
              // 계산된 값을 실제 ref 배열에 할당하고, 새 배열로 복사하여 반응성 트리거
              scores.value[index] = tempObj.val;
              scores.value = [...scores.value];
            },
          });
        },
        onReverseComplete: () => {
          item.classList.remove('active');

          // 역방향 스크롤 시 다시 0으로 내림
          const tempObj = { val: scores.value[index] };
          gsap.to(tempObj, {
            val: 0,
            duration: 0.5,
            onUpdate: () => {
              scores.value[index] = tempObj.val;
              scores.value = [...scores.value];
            },
          });
        },
      },
      index === 0 ? '+=0.2' : '+=0.5', // 간격을 조금씩 둬서 스크롤 시점을 명확히 함
    );
  });

  gsap.fromTo(
    serviceEcosystemTitle.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: serviceEcosystemTitle.value,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 1,
      },
    },
  );

  gsap.fromTo(
    serviceEcosystemCard.value,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: serviceEcosystemCard.value,
        start: 'top 60%',
        end: 'top 40%',
        scrub: 1,
      },
    },
  );

  // --- Ecosystem 섹션 카드 겹쳤다 펼쳐지는 애니메이션 ---
  const ecosystemSection = document.querySelector('.sb-service-ecosystem');
  const ecoCards = document.querySelectorAll('.sb-service-ecosystem-card-item');

  // 초기 세팅: 첫 번째 카드만 보이고 나머지는 중앙 대기
  gsap.set(ecoCards, {
    xPercent: -50,
    yPercent: -50,
    left: '50%',
    top: '50%',
    opacity: 0,
  });
  gsap.set(ecoCards[0], { opacity: 1 });

  const ecoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ecosystemSection,
      start: 'top top',
      end: '+=2000', // 애니메이션 진행 스크롤 길이
      pin: true,
      scrub: 1,
    },
  });

  // 1. 카드 순차적으로 나타나기 (중앙에서 겹침)
  ecoTl.to(ecoCards[1], { opacity: 1, duration: 1 }, '+=0.5');
  ecoTl.to(ecoCards[2], { opacity: 1, duration: 1 }, '+=0.5');

  // 2. 약간의 대기 시간 (정지 상태 유지)
  ecoTl.to({}, { duration: 0.5 });

  // 3. 카드 사방으로 펼쳐지기
  // x: -120% (왼쪽), 0 (중앙), 120% (오른쪽) 형식으로 분산
  ecoTl.to(
    ecoCards[0],
    { y: 50, x: '-108%', duration: 1.5, ease: 'power2.inOut' },
    'spread',
  );
  ecoTl.to(
    ecoCards[1],
    { y: 50, x: '0%', duration: 1.5, ease: 'power2.inOut' },
    'spread',
  );
  ecoTl.to(
    ecoCards[2],
    { y: 50, x: '108%', duration: 1.5, ease: 'power2.inOut' },
    'spread',
  );

  // --- Global 섹션 텍스트 합치기 (만난 후 Scale 적용) ---
  const globalSection = serviceGlobal.value;
  const globalTitle = serviceGlobalTitle.value;
  const textLeft = globalTitle.querySelector('.text-left');
  const textRight = globalTitle.querySelector('.text-right');

  const globalTl = gsap.timeline({
    scrollTrigger: {
      trigger: globalSection,
      start: 'top top',
      end: '+=2000', // 연출 시간을 위해 길이를 넉넉히 설정
      pin: true,
      scrub: 1,
    },
  });

  // 초기 상태 세팅 (크게 시작)
  gsap.set(globalTitle, { scale: 3 });

  // 1. 먼저 양옆의 글자가 중앙으로 모임
  globalTl.fromTo(
    textLeft,
    { x: '-100%', opacity: 0 },
    { x: '0%', opacity: 1, duration: 1, ease: 'power1.in' },
  );

  globalTl.fromTo(
    textRight,
    { x: '100%', opacity: 0 },
    { x: '0%', opacity: 1, duration: 1, ease: 'power1.in' },
    '<', // textLeft와 동시에 시작
  );

  // 2. [핵심] 글자가 만난 직후(또는 만나는 끝부분)에 전체 Scale을 1로 줄임
  // '>-0.2'는 위 애니메이션이 끝나기 0.2초 전부터 시작하라는 의미 (부드러운 연결)
  globalTl.to(
    globalTitle,
    {
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    },
    '>+0.2',
  );

  // 3. 마지막 강조 (약간의 대기 시간)
  globalTl.to({}, { duration: 0.5 });

  // --- Foot 섹션: Map Scale 후 Contents Reveal 애니메이션 ---

  const footSection = serviceFoot.value;
  const footContents = serviceFootContents.value;

  // 초기 상태 세팅
  gsap.set(footContents, { yPercent: 100, opacity: 0 });
  gsap.set('.sb-service-map', { scale: 0.5, opacity: 0 }); // 지도는 크게 시작

  const footTl = gsap.timeline({
    scrollTrigger: {
      trigger: footSection,
      start: 'top top', // 섹션이 상단에 닿으면 고정
      end: '+=2500', // 두 단계 애니메이션을 위해 길이를 충분히 확보
      pin: true,
      scrub: 1,
    },
  });

  // 1단계: 지도가 나타나며 원래 크기로 스케일 다운
  footTl.to('.sb-service-map', {
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: 'power2.out',
  });

  // 2단계: 텀(Term) 두기 - 빈 애니메이션을 추가하여 스크롤 여백 생성
  footTl.to({}, { duration: 0.4 });

  // 3단계: 푸터 콘텐츠가 아래에서 위로 등장
  footTl.to(footContents, {
    yPercent: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
  });

  // 마지막 여운을 위한 대기
  footTl.to({}, { duration: 0.3 });

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
</script>
