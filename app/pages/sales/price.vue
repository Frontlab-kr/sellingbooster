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
      <div class="sb-sales-price">
        <div class="sb-sales-price-list">
          <div class="sb-sales-price-list-item">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <h6>뉴트리코어 하이퍼셀오메가3</h6>
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
              :price-initial-current="16500"
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
                <h6>뉴트리코어 하이퍼셀오메가3</h6>
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
              :price-initial-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
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
                <h6>뉴트리코어 하이퍼셀오메가3</h6>
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
              :price-initial-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
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
                <h6>뉴트리코어 하이퍼셀오메가3</h6>
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
              :price-initial-current="16500"
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
                <h6>뉴트리코어 하이퍼셀오메가3</h6>
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
              :price-initial-current="0"
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
                <h6>뉴트리코어 하이퍼셀오메가3</h6>
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
              :price-initial-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
            >
              <template #badge>
                <Badge value="나쁨" severity="warn" />
              </template>
            </SbPriceSetting>
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
  { label: '판매 가속' },
  { label: '가격 실행' },
]);
</script>
