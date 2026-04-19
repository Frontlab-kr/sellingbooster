<template>
  <div
    :class="[
      'sb sb--layout-auth',
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
</template>

<script setup>
const route = useRoute();
const isFolded = useState('isFolded', () => false);
const isMoMenuOpen = useState('isMoMenuOpen', () => false);
</script>
