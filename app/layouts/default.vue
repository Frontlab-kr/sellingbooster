<template>
  <div :class="['sb', { 'sb--fold': isFolded }]">
    <AppHeader />
    <div class="sb-contents">
      <slot />
    </div>
  </div>
</template>

<script setup>
const isFolded = useState('isFolded', () => false);
</script>
