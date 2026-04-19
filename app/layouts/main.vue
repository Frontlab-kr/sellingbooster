<template>
  <div
    :class="[
      'sb sb-main',
      route.meta.layoutClass,
      {
        'sb--fold': isFolded,
        'sb--mo-menu': isMoMenuOpen,
      },
    ]"
  >
    <AppHeader />
    <div class="sb-contents">
      <slot />
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
const route = useRoute();
const isFolded = useState('isFolded', () => false);
const isMoMenuOpen = useState('isMoMenuOpen', () => false);
</script>
