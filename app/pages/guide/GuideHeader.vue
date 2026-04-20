<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Header (헤더)</h1>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>헤더</h2>
          </div>
          <div class="sb-guide-header">
            <div class="sb-guide-appheader">
              <div class="has-login">
                <AppHeader />
              </div>
              <div class="not-login">
                <AppHeader />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guide',
});
</script>
