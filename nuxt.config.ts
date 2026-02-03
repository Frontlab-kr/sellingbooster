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
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          quietDeps: true,
        },
      },
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'sb',
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
