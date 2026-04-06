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
      <div class="sb-nodata">
        <IconIllustrationFrown class="ico-illustration-frown" />
        <div class="sb-nodata__text">
          <p>
            검색결과가 없습니다.<br />
            검색 키워드가 맞게 입력됐는지 다시 한번 확인해주세요.
          </p>
        </div>
        <div class="sb-nodata__button">
          <Button severity="contrast" outlined>
            <IconArrowAchevronLeft class="ico-arrow-achevron-left" />
            <span class="p-button-label">이전 페이지 이동</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconIllustrationFrown from '@/assets/icons/illustration/frown.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '가격 실행' },
]);
</script>
