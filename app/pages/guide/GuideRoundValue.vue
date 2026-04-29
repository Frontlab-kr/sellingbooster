<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Round value (라운드)</h1>
      <p>
        사용자의 상태와 정보의 중요도를 구분하기 위한 역할 기반의 라운드
        시스템입니다.<br />
        요소의 성격과 계층에 따라 라운드 값을 차등 적용하여 일관된 UI 경험을
        제공합니다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>PC Round value</h2>
          </div>
          <div
            class="sb-guide-item-box justify-content-center gap-8 p-8 bg-gray-500"
          >
            <div
              class="sb-guide-item-box-item gap-1 bg-white border-round-4xl"
              style="width: 225px; height: 225px"
            >
              <h5>Round 1</h5>
              <h5 class="font-normal">32px</h5>
              <div
                class="absolute left-0 top-0 border-circle border-dashed border-2 border-red-500"
                style="width: 65px; height: 65px"
              ></div>
            </div>

            <div
              class="sb-guide-item-box-item gap-1 bg-white border-round-2xl"
              style="width: 225px; height: 225px"
            >
              <h5>Round 2</h5>
              <h5 class="font-normal">16px</h5>
              <div
                class="absolute left-0 top-0 border-circle border-dashed border-2 border-red-500"
                style="width: 35px; height: 35px"
              ></div>
            </div>

            <div
              class="sb-guide-item-box-item gap-1 bg-white border-round-lg"
              style="width: 225px; height: 225px"
            >
              <h5>Round 3</h5>
              <h5 class="font-normal">8px</h5>
              <div
                class="absolute left-0 top-0 border-circle border-dashed border-2 border-red-500"
                style="width: 20px; height: 20px"
              ></div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>모바일 Round value</h2>
          </div>
          <div
            class="sb-guide-item-box justify-content-center gap-8 p-8 bg-gray-500"
          >
            <div
              class="sb-guide-item-box-item gap-1 bg-white border-round-3xl"
              style="width: 225px; height: 225px"
            >
              <h5>Round 1</h5>
              <h5 class="font-normal">24px</h5>
              <div
                class="absolute left-0 top-0 border-circle border-dashed border-2 border-red-500"
                style="width: 50px; height: 50px"
              ></div>
            </div>

            <div
              class="sb-guide-item-box-item gap-1 bg-white border-round-2xl"
              style="width: 225px; height: 225px"
            >
              <h5>Round 2</h5>
              <h5 class="font-normal">16px</h5>
              <div
                class="absolute left-0 top-0 border-circle border-dashed border-2 border-red-500"
                style="width: 35px; height: 35px"
              ></div>
            </div>

            <div
              class="sb-guide-item-box-item gap-1 bg-white border-round-lg"
              style="width: 225px; height: 225px"
            >
              <h5>Round 3</h5>
              <h5 class="font-normal">8px</h5>
              <div
                class="absolute left-0 top-0 border-circle border-dashed border-2 border-red-500"
                style="width: 20px; height: 20px"
              ></div>
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
