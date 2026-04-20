<template>
  <div
    :class="[
      'sb sb--layout-guide',
      {
        'sb--fold': isFolded,
        'sb--mo-menu': isMoMenuOpen,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();
const isFolded = useState('isFolded', () => false);
const isMoMenuOpen = useState('isMoMenuOpen', () => false);
</script>
