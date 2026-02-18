import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

import svgLoader from 'vite-svg-loader';

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
  modules: ['@primevue/nuxt-module', 'nuxt-tiptap-editor'],

  css: ['@/assets/scss/common.scss', 'remixicon/fonts/remixicon.css'],

  vite: {
    plugins: [svgLoader()],
    server: {
      watch: {
        usePolling: true,
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
  primevue: {
    //성능 저하 이슈로 필요한 컴포넌트만 불러옴
    components: {
      include: ['Button', 'Dialog', 'InputText', 'Textarea', 'TieredMenu'],
    },
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
