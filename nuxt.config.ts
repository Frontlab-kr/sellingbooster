import { fileURLToPath } from 'node:url';

import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
  },
});

export default defineNuxtConfig({
  app: {
    baseURL: '/sellingbooster/',
    buildAssetsDir: 'assets',
  },
  nitro: {
    preset: 'github-pages',
  },
  modules: ['@primevue/nuxt-module', '@nuxt/icon'],

  css: ['@/assets/scss/layout.scss'],

  vite: {
    server: {
      watch: {
        usePolling: true, // 파일 변화를 직접 주기적으로 체크합니다.
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'sb',
        dir: fileURLToPath(new URL('./app/assets/icons', import.meta.url)),
        recursive: true,
      },
    ],
  },
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'primevue, tailwind-utilities',
          },
        },
      },
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
