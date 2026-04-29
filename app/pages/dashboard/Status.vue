<template>
  <div class="sb-dashboard-status">
    <div class="sb-dashboard-status-info">
      <h5>현재 매출 기록</h5>
      <div class="sb-dashboard-status-info-badge">
        <div class="pc">
          <Badge value="Level 2" severity="level2"></Badge>
        </div>
        <div class="mo">
          <Badge value="Lv.2" severity="level2"></Badge>
        </div>
      </div>
      <div class="sb-dashboard-status-info-price">
        <h3>12,680,760</h3>
        <h3>원</h3>
      </div>
      <div class="sb-dashboard-status-info-text">
        Lv.3 <span>목표</span>까지 <strong>22,319,240원</strong>
        <span>남았어요!</span>
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
        <p>달성율</p>
        <div class="sb-dashboard-status-chart-text__percent">
          <h1>36</h1>
          <h3>%</h3>
        </div>
      </div>
      <SbChartGaugeCircle :score="36" />
    </div>
  </div>
</template>

<script setup>
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
</script>
