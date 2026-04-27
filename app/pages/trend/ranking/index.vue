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
              <SbInput placeholder="키워드를 입력해주세요." />
              <SbInput placeholder="스토어명 또는 상품 URL을 입력해주세요." />
              <Button severity="primary" label="검색" />
            </div>
          </div>
        </div>
        <div class="sb-trend-search-form__button">
          <SbSearchHistory :historyData="searchList" />
        </div>
      </div>
      <div class="sb-trend-ranking">
        <div class="sb-trend-ranking-head">
          <h5>
            어떤 분석을 해주는지 궁금하다면, 예시 데이터로 경험을 해보세요.
          </h5>
          <p>네이버 쇼핑 기준 데이터 입니다.</p>
        </div>
        <div class="sb-trend-ranking-list">
          <div class="sb-trend-ranking-list-item">
            <div class="sb-trend-ranking-list-item-text">
              <div class="sb-trend-ranking-list-item-text__title">
                <Badge value="키워드+스토어명" severity="secondary"></Badge>
                <p>키워드 : <span>두바이쫀득쿠기</span></p>
                <p>스토어명 : <span>한입에디저트</span></p>
              </div>
              <p>
                → 키워드와 스토어명을 입력하면, 해당 키워드로 노출되는 상품을 한
                번에 보여드려요.
              </p>
            </div>
            <Button severity="contrast" outlined label="보기" size="small" />
          </div>
          <div class="sb-trend-ranking-list-item">
            <div class="sb-trend-ranking-list-item-text">
              <div class="sb-trend-ranking-list-item-text__title">
                <Badge value="키워드+상품 URL" severity="secondary"></Badge>
                <p>키워드 : <span>두바이쫀득쿠기</span></p>
                <p>
                  상품 URL :
                  <span>https://smartstore.naver.com/.../...312420</span>
                </p>
              </div>
              <p>
                → 키워드와 상품 URL을 입력하면, 검색 결과 속 랭킹 위치를 한눈에
                확인할 수 있어요.
              </p>
            </div>
            <Button severity="contrast" outlined label="보기" size="small" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '나의 랭킹 찾기' },
]);

//searchList
const searchList = ref([
  {
    title: '두바이쫀득쿠쿠기',
    type: 'default',
    bodyText: 'https://smartstore.naver.com/.../12345',
    date: '2026.02.27 13:20:56',
    productCount: 1,
  },
  {
    title: '일산버터스콘',
    type: 'store',
    bodyText: '가온베이커리 일산버터스콘',
    date: '2026.02.27 15:40:12',
    productCount: 3,
  },
  {
    title: '두바이쫀득쿠쿠기',
    type: 'default',
    bodyText: 'https://smartstore.naver.com/.../12345',
    date: '2026.02.27 13:20:56',
    productCount: 1,
  },
  {
    title: '일산버터스콘',
    type: 'store',
    bodyText: '가온베이커리 일산버터스콘',
    date: '2026.02.27 15:40:12',
    productCount: 3,
  },
  {
    title: '두바이쫀득쿠쿠기',
    type: 'default',
    bodyText: 'https://smartstore.naver.com/.../12345',
    date: '2026.02.27 13:20:56',
    productCount: 1,
  },
]);
</script>
