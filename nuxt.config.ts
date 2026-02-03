export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxt/icon'],

  css: ['primeflex/primeflex.scss', '@/assets/scss/layout.scss'],
  icon: {
    customCollections: [
      {
        prefix: 'sb', // 내가 정한 아이콘 접두어
        dir: './app/assets/icons',
      },
    ],
  },
  primevue: {
    importTheme: { from: '@/themes/sellingbooster.js' },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
