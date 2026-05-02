<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>K트렌드 매거진</h5>
      <div class="sb-dashboard-card-head-menu">
        <div class="sb-dashboard-card-head-menu__text">발행: 셀링부스터</div>
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
      <div class="sb-ktrend-trend-list" v-scroll-end>
        <div class="sb-ktrend-trend-list-scroll">
          <NuxtLink
            to="/"
            class="sb-ktrend-trend-list-item"
            v-for="n in 20"
            :key="n"
          >
            <div class="sb-ktrend-trend-list-item__thumb">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div class="sb-ktrend-trend-list-item__contents">
              <div class="sb-ktrend-trend-list-item__head">
                <span>
                  <Badge value="NEW" severity="warn"></Badge>
                </span>
                <p>2026.02.14</p>
              </div>
              <div class="sb-ktrend-trend-list-item__body">
                <p>
                  광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다. 초보
                  셀러가 먼저 잡아야 할 핵심 구조 정리
                </p>
              </div>
              <div class="sb-ktrend-trend-list-item__foot">
                <SbInfo
                  :visible-buttons="['view', 'read']"
                  :view-count="'12,325'"
                  :read-time="'12분 분량'"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
</script>
