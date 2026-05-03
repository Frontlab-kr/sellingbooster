<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>판매 속도를 높이는 AI의 가격 제안</h5>
      <div class="sb-dashboard-card-head-menu">
        <NuxtLink to="/">
          <Button variant="text" severity="white">
            <template #icon>
              <IconArrowUpRight class="ico-arrow-up-right" />
            </template>
          </Button>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-dashboard-card-body">
      <!-- 최초 스토어 연동 전 -->
      <!-- <div class="sb-nodata">
        <IconIllustrationSmile class="ico-illustration-smile" />
        <div class="sb-nodata__text">
          <h6>아직 스토어 연동이 안되셨군요.</h6>
          <p>
            스토어를 연동하시면 시장의 흐름에 따라<br />
            AI가 분석을 통해 최적가 가격을 추천해드립니다.
          </p>
        </div>
        <div class="sb-nodata__button">
          <Button severity="contrast" outlined>
            <span class="p-button-label">채널 연동하기</span>
          </Button>
        </div>
      </div> -->

      <!-- 최적가 제안 상품이 없을 경우 -->
      <div class="sb-nodata">
        <IconIllustrationSmile class="ico-illustration-smile" />
        <div class="sb-nodata__text">
          <h6>
            현재 가격으로 좋은 판매 흐름을<br />
            보이며 최적 상태에요.
          </h6>
          <p>
            시장 변화가 생기면<br />
            AI가 새로운 제안을 드릴께요.
          </p>
        </div>
        <div class="sb-nodata__button">
          <Button severity="contrast" outlined>
            <span class="p-button-label">채널 연동하기</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
</script>
