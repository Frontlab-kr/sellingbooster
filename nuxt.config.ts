export default defineNuxtConfig({
  app: {
    baseURL: '/sellingbooster/', // 리포지토리 이름을 입력하세요 (예: /my-nuxt-project/)
    buildAssetsDir: 'assets',
  },
  nitro: {
    preset: 'github-pages',
  },
  modules: ['@primevue/nuxt-module', '@nuxt/icon'],

  css: ['@/assets/scss/layout.scss'],
  // 여기에 Sass 경고 무시 설정을 추가합니다
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // 최신 컴파일러 사용
          quietDeps: true, // 외부 라이브러리(PrimeFlex) 경고 무시
        },
      },
    },
  },
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
