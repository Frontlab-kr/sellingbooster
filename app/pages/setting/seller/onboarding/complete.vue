<template>
  <div class="sb-onboarding-complete">
    <div class="sb-onboarding-complete__icon">
      <IconIllustrationCheckCircle class="ico-illustration-check-circle" />
    </div>
    <div class="sb-onboarding-complete__title">
      <h4>셀러 정보 등록을 완료했어요.</h4>
      <p>
        이제 셀링부스터가<br />
        회원님에게 맞는 최적의 정보와 서비스를 제공합니다.
      </p>
    </div>
    <div class="sb-onboarding-complete__info">
      <strong>지금부터 경험할 수 있어요!</strong>
      <ul>
        <li>
          <span>
            <IconEtcShoppingbag />
          </span>
          <p>상품 추천 기준이 관심/판매 분야에 맞춰 제공됩니다.</p>
        </li>
        <li>
          <span>
            <IconEtcSearch />
          </span>
          <p>잘 팔리는 스토어와 상품을 분석해보세요.</p>
        </li>
        <li>
          <span>
            <IconEtcMagicwand />
          </span>
          <p>판매 단계에 따른 코칭을 받을 수 있어요.</p>
        </li>
      </ul>
    </div>
    <div class="sb-onboarding-complete__button">
      <Button
        severity="contrast"
        outlined
        label="셀러 확장 기능 설정하기"
        size="large"
      />
      <Button label="셀러님의 대시보드 보러 가실까요?" size="large" />
    </div>
    <div class="sb-caution">
      <ul>
        <li>
          입력하신 정보는 추천 정확도를 높이기 위해서만 사용되어, 언제든지
          설정에서 변경 할 수 있습니다.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconIllustrationCheckCircle from '@/assets/icons/illustration/check-circle.svg?component';
import IconEtcShoppingbag from '@/assets/icons/etc/shoppingbag.svg?component';
import IconEtcSearch from '@/assets/icons/etc/search.svg?component';
import IconEtcMagicwand from '@/assets/icons/etc/magicwand.svg?component';
</script>
