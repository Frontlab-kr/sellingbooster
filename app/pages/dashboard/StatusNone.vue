<template>
  <div class="sb-dashboard-status">
    <div class="sb-dashboard-status-info">
      <div class="sb-dashboard-status-info-title">
        <h5><span class="text-primary">셀링부스터</span>님</h5>
        <h6>아직 목표 설정을 안 하셨네요.</h6>
      </div>
      <div class="sb-dashboard-status-info-none">
        나만의 목표를 만들고<br />
        성장을 시각적으로 확인하세요.
      </div>
      <div class="sb-dashboard-status-info-button">
        <Button severity="contrast" size="small">
          <span class="p-button-label">운영 목표 관리</span>
          <IconArrowRight class="ico-arrow-right" />
        </Button>
        <Button severity="contrast" size="small" outlined>
          <span class="p-button-label">온보딩 완료하기</span>
          <IconArrowRight class="ico-arrow-right" />
        </Button>
      </div>
    </div>
    <div class="sb-dashboard-status-chart">
      <div class="sb-dashboard-status-chart-text">
        <p>성장율</p>
        <div class="sb-dashboard-status-chart-text__percent">
          <h1 class="text-primary">UP</h1>
        </div>
      </div>
      <SbChartGaugeCircle :score="0" />
    </div>
  </div>
</template>

<script setup>
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
</script>
