<template>
  <div class="sb sb--layout-auth">
    <AppHeader />
    <div class="sb-contents">
      <slot />
    </div>
  </div>
</template>

<script setup>
const isFolded = useState('isFolded', () => false);
</script>
