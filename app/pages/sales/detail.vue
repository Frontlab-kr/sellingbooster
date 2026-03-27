<template>
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>판매 가속</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-contents-head">
        <h4>가격 조정으로 더 많은 판매 기회를 잡아보세요.</h4>
      </div>
      <SbPrice
        :min-price="0"
        :max-price="30000"
        :current-price="16500"
        :initial-recommended-price="10000"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemMail from '@/assets/icons/system/mail.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemLinkNew from '@/assets/icons/system/link-new.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '키워드 분석' },
]);

//menu
const menuItems = ref([
  {
    label: '수정',
    icon: IconSystemEdit,
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);

//chart
const deviceStats = ref([
  { value: 70, name: '모바일', color: 'primaryColor' },
  { value: 30, name: 'PC', color: 'successColor' },
]);
const genderStats = ref([
  { value: 50, name: '여성', color: 'primaryColor' },
  { value: 50, name: '남성', color: 'dangerColor' },
]);
const ageStats = ref([
  { name: '10', value: 3, color: '#C2F4F8' },
  { name: '20', value: 12, color: '#3ADDE9' },
  { name: '30', value: 26, color: '#00B1BD' },
  { name: '40', value: 35, color: '#23858C' },
  { name: '50', value: 24, color: '#1A6369' },
]);

//data
const keywordList = ref([
  {
    ranking: 1,
    keyword: '어린이 유산균',
    category: '건강기능식품',
    searchVolume: 896000,
    competition: 6.05,
    status: '최적',
  },
  {
    ranking: 2,
    keyword: '가루 유산균',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 3,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 4,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 5,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 6,
    keyword: '락토핏',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 7,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 8,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 9,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 10,
    keyword: '락토핏',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
]);

const top20List = ref([
  {
    rank: 1,
    imgSrc: '/temp/top1.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 H2.0 플로우스테이트 텀블러',
    price: 28000,
  },
  {
    rank: 2,
    imgSrc: '/temp/top2.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 프로듀어 플립 스트로 텀블러 887ml 크림',
    price: 22580,
  },
  {
    rank: 3,
    imgSrc: '/temp/top3.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title:
      '락앤락 텀블러 손잡이 스텐 텀블러 메트로 머그 475ml 보온 보냉 컵 커피 티',
    price: 23200,
  },
  {
    rank: 4,
    imgSrc: '/temp/top4.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 퀜처 플로우 스테이트 텀블러 H2.0',
    price: 38630,
  },
  {
    rank: 5,
    imgSrc: '/temp/top5.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 바이탈라이즈 쉐이커 텀블러 591ml + 컨테이너 103ml 세트',
    price: 57660,
  },
  {
    rank: 6,
    imgSrc: '/temp/top6.png',
    brand: '보아르',
    mall: '네이버쇼핑',
    title: '보아르 투웨이 대용량 손잡이 스텐 보온 보냉 텀블러...',
    price: 22700,
  },
  {
    rank: 7,
    imgSrc: '/temp/top7.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title: '락앤락 모그 스텐 머그컵 텀블러',
    price: 24790,
  },
  {
    id: 'stanley-aerolight-33',
    rank: 8,
    imgSrc: '/temp/top8.png',
    brand: '스텐리',
    mall: '네이버쇼핑',
    title: '스텐리 아이스플로우 에어로라이트 패스트플로우 텀블러',
    price: 33490,
    to: '/product/stanley-aerolight-33',
  },
  {
    rank: 9,
    imgSrc: '/temp/top9.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title: '락앤락 메트로카페 세라믹 텀블러 바닐라라떼 650ml',
    price: 24570,
  },
]);

const faqItems = [
  {
    question: '유산균 시장의 경쟁은 심한 편인가요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '유산균 광고비는 어느 정도 예상해야 하나요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '유산균 시장의 최근 수요 트렌드는 어떤가요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '상위 노출을 위한 적정 판매 가격은 얼마인가요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '지금 유산균 시장에 진입하기에 광고 효율이 괜찮을까요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
];

const ktrendList = [
  {
    title: '두바이 쫀득쿠키 GS25 말차초코 두쫀볼 편의점 디저트',
    description:
      '2026년에 가장 핫한 디저트하면 단연 두바이 쫀득쿠키잖아요. 씨유 두바이 쫀득 찹쌀떡 후기 현시점 편의점 두바이 쫀득쿠키 중 원탑, 이건 찹쌀떡 버전이라 겉부분이 코코아 파우더가 아닌 초코 코팅으로 되어있어요. 가격 3,100원으로 판매되고 있어요',
    date: '2026-01-11',
    author: '망디의먹로그',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description: '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description:
      '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오 스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에 피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진 디저트를 기억하실겁니다.',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description:
      '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오 스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에 피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진 디저트를 기억하실겁니다.',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description:
      '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오 스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에 피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진 디저트를 기억하실겁니다.',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
];

const ksnappList = [
  {
    title: "장원영이 쏘아올린 '두쫀쿠' 열풍, 한국 강타…냉면집에서도 판다",
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
];
</script>
