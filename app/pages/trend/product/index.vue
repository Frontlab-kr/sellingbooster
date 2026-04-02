<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>상품 분석</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>성공적인 판매 전략을 위한 데이터 기반 상품 분석의 시작</h4>
        <div class="sb-trend-search-form">
          <div class="sb-trend-search-form-item">
            <SbInput
              show-search
              @search="onSearch"
              placeholder="https://smartstore.naver.com/으로 시작하는 전체 URL을 입력해주세요"
              size="large"
            />
          </div>
        </div>
      </div>
      <div class="sb-trend-product__info-text">
        네이버 쇼핑 기준 데이터 입니다.
      </div>
      <div class="sb-trend-product">
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              분석 가능한 월 횟수<span><strong>2</strong>/3</span>
            </h5>
          </div>
          <div
            class="sb-trend-table-head__popover"
            @mouseenter="togglePopover"
            @mouseleave="togglePopover"
          >
            <IconSystemInformationCircle
              class="ico-system-information-circle"
            />
          </div>
        </div>
        <div class="sb-trend-product-list">
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconActionFavoriteFull class="ico-action-favorite-full" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>
                무드등 LED 수유등 수면등 미니조명 인테리어조명무드등 LED 수유등
                수면등 미니조명 인테리어조명무드등 LED 수유등 수면등 미니조명
                인테리어조명무드등 LED 수유등 수면등 미니조명 인테리어조명무드등
                LED 수유등 수면등 미니조명 인테리어조명
              </h6>
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
              <IconActionFavoriteFull class="ico-action-favorite-full" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>무드등 LED 수유등 수면등 미니조명 인테리어조명</h6>
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
      <div class="sb-trend-product__info-text">
        네이버 쇼핑 기준 데이터 입니다.
      </div>
      <div class="sb-trend-product">
        <div class="sb-trend-product-head">
          <div class="sb-trend-product-head__title">
            <h5>
              나의 관심 상품<span><strong>5</strong>/5</span>
            </h5>
          </div>
          <div
            class="sb-trend-table-head__popover"
            @mouseenter="togglePopover"
            @mouseleave="togglePopover"
          >
            <IconSystemInformationCircle
              class="ico-system-information-circle"
            />
          </div>
        </div>
        <div class="sb-trend-product-list">
          <div class="sb-trend-product-list-item">
            <div class="sb-trend-product-list-item__favorite">
              <IconActionFavoriteFull class="ico-action-favorite-full" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>무드등 LED 수유등 수면등 미니조명 인테리어조명</h6>
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
              <IconActionFavoriteFull class="ico-action-favorite-full" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>무드등 LED 수유등 수면등 미니조명 인테리어조명</h6>
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
              <IconActionFavoriteFull class="ico-action-favorite-full" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>무드등 LED 수유등 수면등 미니조명 인테리어조명</h6>
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
              <IconActionFavorite class="ico-action-favorite" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>무드등 LED 수유등 수면등 미니조명 인테리어조명</h6>
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
              <IconActionFavorite class="ico-action-favorite" />
            </div>
            <div class="sb-trend-product-list-item__thumb">
              <img src="https://picsum.photos/id/1/800/800" alt="" />
            </div>
            <div class="sb-trend-product-list-item__title">
              <div class="sb-trend-product-list-item__platform">
                <span>인테리어조명</span>
                <span>네이버쇼핑</span>
              </div>
              <h6>무드등 LED 수유등 수면등 미니조명 인테리어조명</h6>
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
      <Popover
        ref="popoverScore"
        :pt="{
          root: {
            class: 'p-popover-flipped sb-popover-score',
          },
        }"
      >
        <SbLegend />
      </Popover>
      <SbBanner />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '상품 분석' },
]);

//popover
const popoverScore = ref();
const togglePopover = (event) => {
  if (event.type === 'mouseenter') {
    popoverScore.value.show(event);
  } else {
    popoverScore.value.hide();
  }
};
</script>
