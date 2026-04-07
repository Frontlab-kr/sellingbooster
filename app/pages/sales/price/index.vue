<template>
  <SbMobileInfo />
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>가격 실행</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-contents-head">
        <h4>가격 조정으로 더 많은 판매 기회를 잡아보세요.</h4>
        <div class="sb-caution">
          <ul>
            <li>
              추천되는 분석 데이터는 이전 30일 데이터 기준으로 분석한 예상
              수치로 실제 수치와는 다를 수 있습니다.
            </li>
            <li>
              추천가의 가격 변경 여부는 셀러님께서 직접 결정하시는 사항으로,
              이에 따른 결과에 대해서는 당사가 별도의 책임을 지지 않는 점 양해
              부탁드립니다
            </li>
          </ul>
        </div>
      </div>
      <div class="sb-sales-info-text">
        2026.03.19일자 네이버 쇼핑 데이터 입니다.
      </div>
      <div class="sb-sales-price">
        <div class="sb-sales-price-list">
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                  <Button variant="text">
                    <span class="p-button-label">성장 리포트 확인 하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
            >
              <template #badge>
                <Badge value="매우 좋음" severity="success" />
              </template>
            </SbPriceSetting>
          </div>
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                  <Button variant="text">
                    <span class="p-button-label">성장 리포트 확인 하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="5000"
              :price-initial-recommended="4900"
              :price-average="8000"
            >
              <template #badge>
                <Badge value="좋음" severity="secondary" />
              </template>
            </SbPriceSetting>
          </div>
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                  <Button variant="text">
                    <span class="p-button-label">성장 리포트 확인 하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="10000"
              :price-initial-recommended="5000"
              :price-average="19000"
            >
              <template #badge>
                <Badge value="보통" severity="info" />
              </template>
            </SbPriceSetting>
          </div>
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                  <Button variant="text">
                    <span class="p-button-label">성장 리포트 확인 하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
            >
              <template #badge>
                <Badge value="매우 나쁨" severity="danger" />
              </template>
            </SbPriceSetting>
          </div>
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                  <Button variant="text">
                    <span class="p-button-label">성장 리포트 확인 하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="0"
              :price-initial-recommended="0"
              :price-average="0"
              :is-error="true"
            >
              <template #badge>
                <Badge value="매우 좋음" severity="success" />
              </template>
            </SbPriceSetting>
          </div>
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                  <Button variant="text">
                    <span class="p-button-label">성장 리포트 확인 하기</span>
                    <IconArrowRight class="ico-arrow-right" />
                  </Button>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
            >
              <template #badge>
                <Badge value="나쁨" severity="warn" />
              </template>
            </SbPriceSetting>
          </div>
        </div>
        <div class="sb-sales-price-button">
          <Button severity="contrast" outlined>
            <span class="p-button-label">더보기(16/83)</span>
            <IconArrowAchevronDown class="ico-arrow-achevron-down" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '가격 실행' },
]);
</script>
