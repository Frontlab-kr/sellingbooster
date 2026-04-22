<template>
  <div class="sb-service">
    <div class="sb-service-word">
      <div class="sb-service-word-head">
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
      <div class="sb-service-word-title">
        <h1>
          무엇을 팔아야 할지 아직도
          <span class="text-primary">고민 중</span>이신가요?
        </h1>
        <Button severity="primary" size="large" label="무료로 시작하기" />
      </div>
      <div class="sb-service-word-background"></div>
    </div>
    <div class="sb-service-dashboard">
      <div class="sb-service-dashboard__title">
        <h2>셀링부스터는 흩어진 판매 데이터를</h2>
        <h2>통합 대시보드로 제공합니다.</h2>
      </div>
    </div>
    <div class="sb-service-introduce">
      <img src="./../../../assets/images/service/introduce01.png" alt="" />
    </div>
    <div class="sb-service-loadmap">
      <div class="sb-service-loadmap__title">
        <h2>
          셀링부스터는 셀러의 성장단계에 맞는<br />
          로드맵을 제공합니다.
        </h2>
      </div>
      <div class="sb-service-loadmap-list">
        <div class="sb-service-loadmap-list-item level01">
          <SbChartLoadmap :score="36" />
          <ul>
            <li class="active">
              <IconSystemCheckS class="ico-system-check-s" />사업자 정보 입력
            </li>
            <li class="active">
              <IconSystemCheckS class="ico-system-check-s" />관심 카테고리 설정
            </li>
            <li class="active">
              <IconSystemCheckS class="ico-system-check-s" />온보딩 시나리오
            </li>
          </ul>
        </div>
        <div class="sb-service-loadmap-list-item level02 active">
          <div class="sb-service-loadmap-list-item__tooltip">
            <p>현재 레벨</p>
          </div>
          <div class="sb-service-loadmap-list-item__line">
            <IconProfileLevelLine class="ico-profile-level-line" />
          </div>
          <ul>
            <li class="active">
              <IconSystemCheckS class="ico-system-check-s" />스토어 연동
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />상품명 점검(35/50
            </li>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />최적가 조정(42/50)
            </li>
          </ul>
        </div>
        <div class="sb-service-loadmap-list-item level03">
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
          <div class="sb-service-loadmap-list-item__line">
            <IconProfileLevelLine class="ico-profile-level-line" />
          </div>
          <ul>
            <li>
              <IconSystemCheckS class="ico-system-check-s" />매출 달성 및 성장율
              조회
            </li>
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
      <div class="sb-service-ecosystem__title">
        <h2>
          셀링부스터는 함께 성장하는<br />
          생태계를 만듭니다.
        </h2>
      </div>
      <img src="./../../../assets/images/service/ecosystem01.png" alt="" />
    </div>
    <div class="sb-service-global">
      <div class="sb-service-global__background01"></div>
      <div class="sb-service-global__background02"></div>
      <div class="sb-service-global__title">
        <h2>한국을 넘어 글로벌로 나아갑니다.</h2>
      </div>
    </div>
    <div class="sb-service-map">
      <ServiceMap />
    </div>
    <div class="sb-service-foot">
      <div class="sb-service-foot__title">
        <h1>
          지금,<br />
          셀링부스터를 무료로 시작하세요
        </h1>
        <p>당신도 셀러로 성공할 수 있습니다!</p>
      </div>
      <div class="sb-service-foot__button">
        <Button
          severity="primary"
          outlined
          size="large"
          label="서비스 소개서 다운로드"
        />
      </div>
      <div class="sb-service-foot__background"></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
  layoutClass: 'sb--company',
});

import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';
import IconProfileLevelLine from '@/assets/icons/profile/level-line.svg?component';

import ServiceMap from '@/assets/images/service/map.svg';

import SbChartLoadmap from './SbChartLoadmap.vue';
</script>
