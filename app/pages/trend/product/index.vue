<template>
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>마켓 트렌드</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>성공적인 판매 전략을 위한 데이터 기반 상품 분석의 시작</h4>
        <div class="sb-trend-search-form">
          <div class="sb-trend-search-form-item">
            <SbInput
              v-model="searchKeyword"
              show-search
              @search="onSearch"
              placeholder="https://smartstore.naver.com/으로 시작하는 전체 URL을 입력해주세요"
              size="large"
            />
          </div>
        </div>
      </div>
      <div class="sb-trend-product">
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              분석 가능한 월 횟수<span><strong>2</strong>/3</span>
            </h5>
            <p>※ 네이버 쇼핑 기준 데이터 입니다.</p>
          </div>
        </div>
        <div class="sb-trend-product-list">
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-info">보통 60점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-warn">낮음 36점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-trend-product">
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              나의 관심 상품<span><strong>5</strong>/5</span>
            </h5>
            <p>※ 네이버 쇼핑 기준 데이터 입니다.</p>
          </div>
        </div>
        <div class="sb-trend-product-list">
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-primary">최고 83점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-info">보통 61점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-danger">최저 18점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-warn">낮음 36점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconSystemStar class="ico-system-star" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>커피하우스 본점</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>글렌캐런 글라스 싱글몰트 위스키잔 200ML</h6>
            </div>
            <div class="sb-trend-product-list-item__category">
              <dl>
                <dt>카테고리</dt>
                <dd>
                  <span>가구/인테리어</span>
                  <span>인테리어 소품</span>
                  <span>조명</span>
                  <span>인테리어 조명</span>
                </dd>
              </dl>
            </div>
            <div class="sb-trend-product-list-item__score">
              <strong class="text-success">좋음 52점</strong>
              <p>2026.02.01</p>
            </div>
            <div class="sb-trend-product-list-item__button">
              <Button variant="text">
                <template #icon>
                  <IconSystemDelete class="ico-system-delete" />
                </template>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-banner">
        <img src="/temp/banner.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemStar from '@/assets/icons/system/star.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '상품 분석' },
]);

const searchKeyword = ref('');

const selectedValue = ref();
const selectedOption = ref([
  { name: '스팸홍보/도배글입니다.' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);

const products = ref([
  {
    keyword: '무선 키보드',
    category: '컴퓨터 주변기기',
    influence: '상',
    avgPrice: 45000,
    productCount: 12500,
    pcSearchVol: 5200,
    moSearchVol: 18000,
    avgClick: 450,
    competition: '높음',
  },
  {
    keyword: '친환경 텀블러',
    category: '주방용품',
    influence: '중',
    avgPrice: 18900,
    productCount: 3400,
    pcSearchVol: 1200,
    moSearchVol: 5400,
    avgClick: 210,
    competition: '보통',
  },
  {
    keyword: '캠핑용 의자',
    category: '스포츠/레저',
    influence: '상',
    avgPrice: 32000,
    productCount: 8900,
    pcSearchVol: 3100,
    moSearchVol: 12500,
    avgClick: 380,
    competition: '치열',
  },
  {
    keyword: '가습기 살균제 <i class="ico-24-back">ss</i>',
    category: '생활용품',
    influence: '하',
    avgPrice: 8500,
    productCount: 120,
    pcSearchVol: 450,
    moSearchVol: 900,
    avgClick: 45,
    competition: '낮음',
  },
]);
const productsNodata = ref(null);

//
const keywords = [
  { id: 1, name: '위스키테이스팅잔', category: '유리컵' },
  { id: 2, name: '싱글몰트잔', category: '도구' },
  { id: 3, name: '싱글몰트 위스키 잔', category: '유리컵' },
  { id: 4, name: '위스키테이스팅잔', category: '유리컵' },
  { id: 5, name: '튤립위스키잔', category: '주방용품' },
  { id: 6, name: '양주잔', category: '주방용품' },
  { id: 7, name: '위스키잔', category: '주방용품' },
];
</script>
