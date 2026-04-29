<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Shadow</h1>
      <p>
        레이어의 위계에 따라 그림자를 사용합니다. 라이트 모드와 다크 모드를
        고려하여 각각 3단계의 Shadow를 정의했습니다.<br />
        PC 팝업, 모바일 팝업, 드롭다운 등 Layer UI 요소에 사용됩니다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Shadow_light</h2>
          </div>
          <div
            class="sb-guide-item-box justify-content-center gap-8 p-8 bg-gray-300"
          >
            <div
              class="sb-guide-item-box-item gap-4 bg-white"
              style="
                width: 420px;
                height: 225px;
                box-shadow: 0 4px 10px 0 rgba(0, 177, 189, 0.1);
              "
            >
              <h5>Shadow 1</h5>
              <h6 class="font-normal">500 10% / X : 0, Y : 4, Blur : 10</h6>
            </div>

            <div
              class="sb-guide-item-box-item gap-4 bg-white"
              style="
                width: 420px;
                height: 225px;
                box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
              "
            >
              <h5>Shadow 2</h5>
              <h6 class="font-normal">black 10% / X : 0, Y : 10, Blur : 30</h6>
            </div>

            <div
              class="sb-guide-item-box-item gap-4 bg-white"
              style="
                width: 420px;
                height: 225px;
                box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.15);
              "
            >
              <h5>Shadow 3</h5>
              <h6 class="font-normal">black 15% / X : 0, Y : 20, Blur : 40</h6>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Shadow_dark</h2>
          </div>
          <div
            class="sb-guide-item-box justify-content-center gap-8 p-8 bg-gray-300"
          >
            <div
              class="sb-guide-item-box-item gap-4 bg-gray-800 border-1 border-1 border-gray-500 text-white"
              style="
                width: 420px;
                height: 225px;
                box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
              "
            >
              <h5>Shadow 1</h5>
              <h6 class="font-normal">black 50% / X : 0, Y : 4, Blur : 10</h6>
            </div>

            <div
              class="sb-guide-item-box-item gap-4 bg-gray-800 border-1 border-1 border-gray-500 text-white"
              style="
                width: 420px;
                height: 225px;
                box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.5);
              "
            >
              <h5>Shadow 2</h5>
              <h6 class="font-normal">black 50% / X : 0, Y : 10, Blur : 30</h6>
            </div>

            <div
              class="sb-guide-item-box-item gap-4 bg-gray-800 border-1 border-1 border-gray-500 text-white"
              style="
                width: 420px;
                height: 225px;
                box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.8);
              "
            >
              <h5>Shadow 3</h5>
              <h6 class="font-normal">black 80% / X : 0, Y : 20, Blur : 40</h6>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h4>
              PC 팝업 그림자 적용 예시
              <span class="text-red-500">(Shadow 3 적용)</span>
            </h4>
          </div>
          <div class="sb-guide-item-box">
            <img
              src="./../../assets/images/guide/shadow-img01.png"
              alt=""
              class="w-full"
            />
          </div>
          <div class="sb-guide-item-box mt-4">
            <img
              src="./../../assets/images/guide/shadow-img02.png"
              alt=""
              class="w-full"
            />
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h4>
              모바일 팝업 그림자 적용 예시
              <span class="text-red-500">(Shadow 2 적용)</span>
            </h4>
          </div>
          <div class="sb-guide-item-box">
            <img
              src="./../../assets/images/guide/shadow-img03.png"
              alt=""
              class="w-full"
            />
          </div>
          <div class="sb-guide-item-box mt-4">
            <img
              src="./../../assets/images/guide/shadow-img04.png"
              alt=""
              class="w-full"
            />
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h4>
              PC/ 모바일 화면 UI 요소
              <span class="text-red-500">(Shadow 1 적용)</span>
            </h4>
          </div>
          <div class="sb-guide-item-box">
            <img
              src="./../../assets/images/guide/shadow-img05.png"
              alt=""
              class="w-full"
            />
          </div>
          <div class="sb-guide-item-box mt-4">
            <img
              src="./../../assets/images/guide/shadow-img06.png"
              alt=""
              class="w-full"
            />
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
