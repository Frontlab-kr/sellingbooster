<template>
  <div class="sb-dashboard-card">
    <div class="sb-dashboard-card-head">
      <h5>금주 일정이 없습니다.</h5>
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
      <div class="sb-nodata">
        <IconIllustrationSmile class="ico-illustration-smile" />
        <div class="sb-nodata__text">
          <p>
            중요한 일정들을 등록해 두시면 <br />
            셀링부스터가 알려드립니다.
          </p>
        </div>
        <div class="sb-nodata__button">
          <Button severity="contrast" outlined>
            <span class="p-button-label">일정 등록 하기</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
</script>
