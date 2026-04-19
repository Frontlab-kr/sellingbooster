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
  routeRules: {
    '/trend/trend': { prerender: false },
  },
  app: {
    baseURL: '/sellingbooster/',
    buildAssetsDir: 'assets',
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
        },
      ],
    },
  },
  nitro: {
    preset: 'github-pages',
  },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/content',
    'nuxt-tiptap-editor',
    '@pinia/nuxt',
  ],

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
      include: [
        'DatePicker',
        'Accordion',
        'Button',
        'Dialog',
        'InputText',
        'Textarea',
        'TieredMenu',
        'ConfirmDialog',
        'Toast',
        'Button',
        'Datatable',
        'Column',
        'Stepper',
        'Message',
        'Chip',
        'Popover',
      ],
    },
    options: {
      ripple: true,
      locale: {
        dayNames: [
          '일요일',
          '월요일',
          '화요일',
          '수요일',
          '목요일',
          '금요일',
          '토요일',
        ],
        showMonthAfterYear: true,
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        monthNamesShort: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        today: '오늘',
        clear: '초기화',
        weekHeader: '주',
        firstDayOfWeek: 0,
        dateFormat: 'yy.mm.dd',
        accept: '확인',
        reject: '취소',
      },
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
