<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>나의 랭킹 찾기</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>순위 체크, 실시간 데이터로 빠르게 확인하세요.</h4>
        <div class="sb-trend-search-form">
          <div class="sb-trend-search-form-item">
            <div class="sb-trend-search-form-item__body">
              <SbInput
                placeholder="키워드를 입력해주세요."
                value="두바이쫀득쿠키"
              />
              <SbInput
                placeholder="스토어명 또는 상품 URL을 입력해주세요."
                value="가온베이커리 일산버터스콘"
              />
              <Button severity="primary" label="검색" />
            </div>
          </div>
        </div>
        <div class="sb-trend-search-form__button">
          <SbSearchHistory :historyData="searchList" />
        </div>
      </div>
      <div class="sb-trend-ranking">
        <div class="sb-trend-result">
          <div class="sb-trend-result-head">
            <p>네이버 쇼핑 기준 1,200위 이내의 데이터 입니다.</p>
            <div class="sb-trend-result-head__title">
              <h5>검색 결과</h5>
              <div class="sb-trend-result-head__status">
                <span>광고 : <strong class="text-primary">0</strong>건</span>
                <span>일반 : <strong class="text-primary">0</strong>건</span>
              </div>
            </div>
          </div>
          <div class="sb-nodata">
            <IconIllustrationFrown class="ico-illustration-frown" />
            <div class="sb-nodata__text">
              <p>검색 결과 매칭되는 상품이 없습니다.</p>
            </div>
            <div class="sb-caution">
              <ul>
                <li>네이버 로그인이 안 되어 있어 검색이 제한될 수 있습니다.</li>
                <li>일반상품 노출 순위 800위 밖일 수 있습니다.</li>
                <li>광고상품 노출 옵션을 별도 설정했을 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="sb-trend-ranking">
        <div class="sb-trend-result">
          <div class="sb-trend-result-head">
            <div class="sb-trend-result-head__title">
              <h5>광고 상품</h5>
              <p>
                네이버 쇼핑 기준 광고주의 광고 설정에 따라 검색 결과가 없거나
                다를 수 있습니다.
              </p>
            </div>
          </div>
          <div class="sb-nodata">
            <IconIllustrationFrown class="ico-illustration-frown" />
            <div class="sb-nodata__text">
              <p>검색되는 상품이 없습니다.</p>
            </div>
            <div class="sb-caution">
              <ul>
                <li>네이버 로그인이 안 되어 있어 검색이 제한될 수 있습니다.</li>
                <li>광고상품이 없거나 불가한 키워드일 수 있습니다.</li>
                <li>광고상품 노출 옵션을 별도 설정했을 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemRefresh from '@/assets/icons/system/refresh.svg?component';
import IconIllustrationFrown from '@/assets/icons/illustration/frown.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천 기회' },
  { label: '나의 랭킹 찾기' },
]);

//searchList
const searchList = ref([]);
</script>
