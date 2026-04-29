<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Logo / Symbol (로고, 심볼)</h1>
      <p>
        브랜드를 상징하는 심볼과 로고는 일관된 커뮤니케이션을 위해 지정된 컬러,
        형태, 여백의 변형 없이 동일하게 사용해야 한다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Logo</h2>
            <h5>
              시그니처 형태로 가장 기본이 되는 로고 형태이다. 심볼을 제외하고
              로고타입만 단독으로 사용할 수 없다.
            </h5>
          </div>
          <div class="sb-guide-item-box gap-0">
            <div
              class="sb-guide-item-box-item border-round-lg border-noround-right"
            >
              <img src="./../../assets/images/logo.svg" alt="" />
            </div>
            <div
              class="sb-guide-item-box-item"
              style="background-color: var(--p-gray-700)"
            >
              <img src="./../../assets/images/logo-gray.svg" alt="" />
            </div>
            <div
              class="sb-guide-item-box-item"
              style="background-color: var(--p-gray-900)"
            >
              <img src="./../../assets/images/logo-white.svg" alt="" />
            </div>
            <div
              class="sb-guide-item-box-item border-1 border-round-lg border-noround-left border-gray-200"
              style="background-color: var(--p-gray-00)"
            >
              <img src="./../../assets/images/logo-black.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Symbol</h2>
            <h5>
              브랜드를 상징하는 최소 단위인 심볼이고, 단독으로 사용할 수 있다.
            </h5>
          </div>
          <div class="sb-guide-item-box gap-0">
            <div
              class="sb-guide-item-box-item border-round-lg border-noround-right"
            >
              <img src="./../../assets/images/symbol.svg" alt="" />
            </div>
            <div
              class="sb-guide-item-box-item"
              style="background-color: var(--p-gray-900)"
            >
              <img src="./../../assets/images/symbol-white.svg" alt="" />
            </div>
            <div
              class="sb-guide-item-box-item border-1 border-round-lg border-noround-left border-gray-200"
              style="background-color: var(--p-gray-00)"
            >
              <img src="./../../assets/images/symbol-black.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guide',
});
</script>
