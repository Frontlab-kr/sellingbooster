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
root/
├── app.vue                    # Nuxt 앱 루트
├── gate.vue                   # 8. 기타 – Gate 페이지
├── feedback.vue               # 10. etc – 사용자 피드백 수집(윙배너)
├── loading.vue                # 로딩 화면
├── error.vue                  # 에러 페이지
│
├── pages/                     # 페이지 라우팅
│   ├── dashboard/             # 1. Main (대시보드)
│   │   └── index.vue          # 오늘의 할 일
│   ├── auth/                  # 2. Util Menu
│   │   ├── login.vue          # 2.1 로그인
│   │   ├── signup.vue         # 2.2 회원가입
│   │   └── find.vue           # 2.3 아이디/비밀번호 찾기
│   ├── util/                  # # Util Menu (전역)
│   │   ├── language.vue       # 2.4 다국어
│   │   └── notification.vue   # 2.5 알림
│   ├── opportunity/           # 3. 기회 찾기(가칭)
│   │   ├── recommend.vue      # 3.1 추천 기회
│   │   └── search.vue         # 3.2 직접(검색) 탐색
│   ├── execution/             # 4. 바로 실행(가칭)
│   │   ├── center.vue         # 4.1 실행 센터
│   │   └── result.vue         # 4.2 실행 결과
│   ├── performance/           # 5. 성과 보기(가칭)
│   │   ├── summary.vue        # 5.1 성과 요약
│   │   ├── insight.vue        # 5.2 성장 인사이트
│   │   └── history.vue        # 5.3 성장 히스토리
│   ├── community/             # 6. 커뮤니티
│   │   ├── qna.vue            # 6.1 Q&A
│   │   ├── notice.vue         # 6.2 공지사항
│   │   ├── faq.vue            # 6.3 FAQ
│   │   ├── story.vue          # 6.4 성장 스토리
│   │   └── news.vue           # 6.5 뉴스/법령
│   ├── setting/               # 7. 환경 설정
│   │   ├── account.vue        # 7.1 계정 관리
│   │   ├── product.vue        # 7.2 상품 관리
│   │   ├── keyword.vue        # 7.3 키워드 관리
│   │   ├── channel.vue        # 7.4 채널 연동 관리
│   │   ├── notification.vue   # 7.5 알림 설정
│   │   ├── team.vue           # 7.6 팀 / 권한 관리
│   │   └── subscription.vue   # 7.7 구독 관리
│   └── policy/                # 9. Footer
│       ├── privacy.vue        # 9.1 개인정보처리방침
│       ├── terms.vue          # 9.2 서비스 이용약관
│       ├── service.vue        # 9.3 셀링부스터 서비스 소개
│       └── company.vue        # 9.4 회사 소개
│
├── assets/
│   ├── scss/                  # 스타일 시트
│   │   ├── layout.scss        # 공통 레이아웃 (Header, Sidebar, Footer)
│   │   ├── dashboard.scss     # 대시보드 스타일
│   │   ├── auth.scss          # 로그인 / 회원가입
│   │   ├── util.scss          # 다국어 / 알림
│   │   ├── opportunity.scss   # 기회 찾기
│   │   ├── execution.scss     # 실행 센터 / 결과
│   │   ├── performance.scss   # 성과 보기
│   │   ├── community.scss     # 커뮤니티
│   │   ├── setting.scss       # 환경 설정
│   │   ├── gate.scss          # Gate 페이지
│   │   ├── policy.scss        # 약관 / 정책
│   │   └── etc.scss           # 피드백 / 로딩 / 에러
│   └── images/                # 이미지 리소스
│
└── public/                    # 정적 리소스
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

화면 크기에 따른 유연한 레이아웃 대응을 위해 아래의 표준 브레이크 포인트를 사용합니다. (수치 확정 시 업데이트 예정)

```js
sm:  *px   // 모바일 가로
md:  *px   // 태블릿
lg:  *px  // 데스크탑
xl:  *px  // 대형
```

## 컴포넌트 및 아이콘 (Draft)

현재 정의된 공통 컴포넌트 및 아이콘 가이드는 아래와 같습니다.

- 컴포넌트: PrimeVue의 기본 컴포넌트를 우선적으로 활용하며, 복합 컴포넌트 생성 시 @/components/common/ 하위에 배치합니다.

- 아이콘: **(미정)**

## 차트

ECharts https://echarts.apache.org/ **(미정)**

####

공식지원하는 nuxt icon 쓰다가 작동이 잘 안되서 딴거 쓰는거 적어두고

css 작성방식

생각나는거 그때그때 적어두기
