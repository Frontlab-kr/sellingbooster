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
                <span>광고 : <strong class="text-primary">2</strong>건</span>
                <span>일반 : <strong class="text-primary">1</strong>건</span>
              </div>
            </div>
          </div>
          <div class="sb-trend-result-list">
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <Badge value="광고" severity="secondary"></Badge>
                  <p>3위 - 3위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>131위 - 11위</p>
                  <p>4 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>226위 - 9위</p>
                  <p>7 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="sb-trend-ranking-button">
        <Button severity="contrast" outlined>
          <span class="p-button-label">더보기(10/30)</span>
          <IconArrowAchevronDown class="ico-arrow-achevron-down" />
        </Button>
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
          <div class="sb-trend-result-list">
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/" class="sb-trend-result-list-item">
              <div class="sb-trend-result-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-result-list-item__contents">
                <div class="sb-trend-result-list-item__ranking">
                  <p>1위 - 1위</p>
                  <p>1 페이지</p>
                </div>
                <div class="sb-trend-result-list-item__title">
                  <strong>한입에디저트</strong>
                  <p>
                    두바이쫀득쿠기 4개세트 개당 50g이상 두바이쫀득볼 수제디저트
                    답례품 선물포장 한입에디저트
                  </p>
                </div>
                <div class="sb-trend-result-list-item__info">
                  <strong>판매가 : 22,900원</strong>
                  <strong>리뷰 : 63개</strong>
                  <strong>평점 : 4.81</strong>
                  <span>이전 판매량(7일) : 125건</span>
                  <span>이전 매출액(7일) : 3,682,580원</span>
                  <span>예상 판매량(7일) : 125건</span>
                  <span>예상 매출액(7일) : 3,820,500원</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천 기회' },
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
  {
    title: '일산버터스콘',
    type: 'store',
    bodyText: '가온베이커리 일산버터스콘',
    date: '2026.02.27 15:40:12',
    productCount: 3,
  },
]);
</script>
