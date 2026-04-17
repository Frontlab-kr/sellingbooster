<template>
  <div class="sb-gate">
    <div class="sb-gate-keyvisual"></div>
    <div class="sb-gate-menu">
      <div class="sb-gate-search"></div>
      <div class="sb-gate-link">
        <NuxtLink to="/" class="sb-gate-link-item">
          <p>추천 기회</p>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-gate-introduce"></div>
    <div class="sb-gate-banner"></div>
    <div class="sb-gate-board"></div>
    <div class="sb-gate-news"></div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layoutClass: 'sb-main',
});
</script>
