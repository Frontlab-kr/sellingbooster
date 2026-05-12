# 🚀 셀링부스터() 퍼블리싱 가이드

본 문서는 **PrimeVue**를 기반으로 하는 셀링부스터 프로젝트의 UI/UX 일관성과 효율적인 협업을 위한 퍼블리싱 규약을 정의합니다.

---

## 🛠 환경 설정 및 테마

### 기술 스택

- **Framework**: Nuxt 4.3.0
- **UI Library**: PrimeVue 4.5.4
- **Core Theme**: Aura
- **Custom Preset**: `sellingbooster`
- **Style Preprocessor**: SCSS (Dart Sass)

### Nuxt 설정

프로젝트의 전역 테마로 커스텀 프리셋을 지정합니다.

nuxt.config.ts

```js
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      ripple: true, // 클릭 시 리플 효과 활성화
    },
    importTheme: { from: '@/themes/sellingbooster.js' },
  },
});
```

/themes/sellingbooster.js

```js
// 셀링부스터 테마의 맞게 수정 예정
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

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: '.p-dark',
  },
};
```

## 폴더 구조

```
├── app/
│   ├── app.vue
│   │
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── action/
│   │   │   ├── ai/
│   │   │   ├── arrow/
│   │   │   ├── card/
│   │   │   ├── chart/
│   │   │   ├── etc/
│   │   │   ├── gate/
│   │   │   ├── gonfalon/
│   │   │   ├── illustration/
│   │   │   ├── profile/
│   │   │   ├── snb/
│   │   │   └── system/
│   │   │
│   │   ├── images/
│   │   │
│   │   └── scss/
│   │       ├── component/
│   │       ├── _auth.scss
│   │       ├── _chart.scss
│   │       ├── _colors.scss
│   │       ├── _community.scss
│   │       ├── _component.scss
│   │       ├── _dashboard.scss
│   │       ├── _etc.scss
│   │       ├── _footer.scss
│   │       ├── _gate.scss
│   │       ├── _guide.scss
│   │       ├── _icon.scss
│   │       ├── _layout.scss
│   │       ├── _mixins.scss
│   │       ├── _overlay.scss
│   │       ├── _planner.scss
│   │       ├── _report.scss
│   │       ├── _sales.scss
│   │       ├── _setting.scss
│   │       ├── _trend.scss
│   │       └── _variables.scss
│   │       └── common.scss
│   │
│   ├── components/
│   │   ├── analyze.vue
│   │   ├── AppChromeExtension.vue
│   │   ├── AppFeedback.vue
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   ├── AppHeaderMenu.vue
│   │   ├── AppHeaderMobile.vue
│   │   ├── AppHeaderMobileMenu.vue
│   │   ├── AppSnb.vue
│   │   ├── ExtensionTable.vue
│   │   ├── PolicyMarketing.vue
│   │   ├── PolicyPersonalPrivacy.vue
│   │   ├── PolicyServicePolicy.vue
│   │   ├── SbBanner.vue
│   │   ├── SbChartBar.vue
│   │   ├── SbChartBarDashboard.vue
│   │   ├── SbChartCombined.vue
│   │   ├── SbChartCombinedSmall.vue
│   │   ├── SbChartComparisonBar.vue
│   │   ├── SbChartComparisonBarHorizontal.vue
│   │   ├── SbChartDoughnut.vue
│   │   ├── SbChartDoughnutCs.vue
│   │   ├── SbChartDoughnutReport.vue
│   │   ├── SbChartGauge.vue
│   │   ├── SbChartGaugeCircle.vue
│   │   ├── SbChartGaugeCredit.vue
│   │   ├── SbChartGaugeFace.vue
│   │   ├── SbChartLine.vue
│   │   ├── SbChartSegmentBar.vue
│   │   ├── SbChartStackedBar.vue
│   │   ├── SbChartWave.vue
│   │   ├── SbFileupload.vue
│   │   ├── SbImageupload.vue
│   │   ├── SbInfo.vue
│   │   ├── SbInput.vue
│   │   ├── SbLegend.vue
│   │   ├── SbLoading.vue
│   │   ├── SbLoadingDialog.vue
│   │   ├── SbMenu.vue
│   │   ├── SbMobileInfo.vue
│   │   ├── SbPaginator.vue
│   │   ├── SbPriceSetting.vue
│   │   ├── SbSearchHistory.vue
│   │   ├── SbSocial.vue
│   │   ├── SbTextarea.vue
│   │   └── TiptapEditor.vue
│   │
│   ├── layouts/
│   │   ├── auth.vue
│   │   ├── default.vue
│   │   ├── error.vue
│   │   ├── guide.vue
│   │   └── main.vue
│   │
│   ├── pages/
│   │   ├── about/
│   │   ├── auth/
│   │   ├── community/
│   │   ├── dashboard/
│   │   ├── etc/
│   │   ├── gate/
│   │   ├── guide/
│   │   ├── planner/
│   │   ├── policy/
│   │   ├── report/
│   │   ├── sales/
│   │   ├── setting/
│   │   └── trend/
```

## 마크업 및 클래스 명명 규칙 (BEM & Prefix)

### 접두어(Prefix) 사용

외부 라이브러리(PrimeVue, Tailwind 등) 및 기존 CSS와의 클래스명 충돌을 방지하고, 셀링부스터 전용 스타일임을 명확히 하기 위해 모든 커스텀 클래스에는 **`sb-`** 접두어를 필수로 사용합니다.

- **규칙**: `.sb-[Block]`
- **장점**: 코드 가독성 향상, 스타일 오염 방지, 유지보수 효율 증대

### BEM 방법론 준수

구조적 명확성을 위해 **BEM (Block\_\_Element--Modifier)** 패턴과 접두어를 결합하여 작성합니다.

- **Block**: 독립적인 컴포넌트 단위 (`.sb-card`, `.sb-button`)
- **Element**: 블록에 종속된 구성 요소 (`.sb-card__header`, `.sb-button__icon`)
- **Modifier**: 상태나 변형 스타일 (`.sb-card--active`, `.sb-button--large`)

#### SCSS 작성 예시

```scss
// 셀링부스터 전용 카드 컴포넌트
.sb-card {
  display: flex;
  flex-direction: column;
  background-color: var(--p-surface-0);

  &__header {
    // .sb-card__header
    padding: 1.25rem;
    border-bottom: 1px solid var(--p-surface-200);
  }

  &__body {
    // .sb-card__body
    padding: 1.25rem;
  }

  &--highlight {
    // .sb-card--highlight
    border: 2px solid var(--p-primary-color);
  }
}
```

## 타이포그래피 (Typography)

글로벌 서비스(한국, 일본, 중국) 대응을 위해 국가별 글리프(Glyph) 표현이 최적화된 시스템 및 웹 폰트 스택을 사용합니다.

특히 중화권의 경우 Apple 시스템 폰트인 **PingFang SC**를 우선 배치하여 가독성을 높입니다.

- **KR / EN / JP**: `Pretendard JP Variable` (일관된 디자인 언어 및 가독성 유지)
- **CN (간체)**: `PingFang SC`, `Noto Sans SC` (Apple 시스템 서체 및 구글 웹폰트 대응)
- **CN (번체)**: `PingFang TC`, `Noto Sans TC` (번체 전용 글리프 구현)

```css
/* 글로벌 폰트 적용 규칙 */
font-family:
  'Pretendard JP Variable',
  'Pretendard JP',
  /* 중국어 간체(SC) 대응: Apple 시스템 폰트 최우선 */ 'PingFang SC',
  'Hiragino Sans GB',
  'Microsoft YaHei',
  'Noto Sans SC',
  /* 중국어 번체(TC) 대응 */ 'PingFang TC',
  'Noto Sans TC',
  sans-serif;
```

## 반응형 레이아웃 (Breakpoint)

1440px기준으로 모바일 구분

## 차트

ECharts https://echarts.apache.org/
