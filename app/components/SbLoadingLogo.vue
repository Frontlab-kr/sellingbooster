<template>
  <div class="sb-loading-logo">
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.9934 9.69702C70.5778 14.2878 70.5715 21.7216 65.9808 26.306L49.891 42.3705C45.3003 46.9549 37.8664 46.9485 33.282 42.3578C28.6976 37.767 28.7039 30.3332 33.2947 25.7488L49.3844 9.68435C53.9752 5.09994 61.409 5.10628 65.9934 9.69702Z"
        fill="#F4F5F7"
      />
      <path
        d="M69.5883 39.0711C74.1727 43.6555 74.1727 51.0957 69.5883 55.6801L53.7075 71.5609C49.1231 76.1453 41.6829 76.1453 37.0985 71.5609C32.5141 66.9765 32.5141 59.5363 37.0985 54.9519L52.9793 39.0711C57.5637 34.4867 65.0039 34.4867 69.5883 39.0711Z"
        fill="#F4F5F7"
      />
      <path
        d="M31.4549 56.9586C34.2954 51.7639 32.3869 45.2501 27.1922 42.4096C21.9975 39.5691 15.4836 41.4776 12.6432 46.6723C9.80267 51.867 11.7111 58.3808 16.9059 61.2213C22.1006 64.0618 28.6144 62.1533 31.4549 56.9586Z"
        fill="#F4F5F7"
      />

      <mask
        id="mask0_loading"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="33"
        y="35"
        width="41"
        height="40"
      >
        <path
          d="M69.5883 39.0711C74.1727 43.6555 74.1727 51.0957 69.5883 55.6801L53.7075 71.5609C49.1231 76.1453 41.6829 76.1453 37.0985 71.5609C32.5141 66.9765 32.5141 59.5363 37.0985 54.9519L52.9793 39.0711C57.5637 34.4867 65.0039 34.4867 69.5883 39.0711Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_loading)">
        <path
          class="wave-01"
          d="M64.0796 53.8495C70.1674 52.6297 76.8639 55.6793 79.4512 57.3565V107.217H33.4887V51.7148C50.5344 60.5586 56.4699 55.3743 64.0796 53.8495Z"
          fill="#00B1BD"
        />
      </g>

      <mask
        id="mask1_loading"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="11"
        y="41"
        width="22"
        height="22"
      >
        <path
          d="M31.4549 56.9586C34.2954 51.7639 32.3869 45.2501 27.1922 42.4096C21.9975 39.5691 15.4836 41.4776 12.6432 46.6723C9.80267 51.867 11.7111 58.3808 16.9059 61.2213C22.1006 64.0618 28.6144 62.1533 31.4549 56.9586Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_loading)">
        <path
          class="wave-02"
          d="M18.1167 48.6464C24.2045 47.4266 30.901 50.4761 33.4883 52.1534V102.014H-12.4742V46.5117C4.57148 55.3554 10.507 50.1712 18.1167 48.6464Z"
          fill="#6466FA"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.sb-loading-logo {
  display: inline-block;
  width: 80px;
  height: 80px;
}

/* 첫 번째 물결 애니메이션 */
.wave-01 {
  animation: drift 1.2s infinite ease-in-out alternate;
  transform-origin: center bottom;
}

/* 두 번째 물결 애니메이션 (엇갈리게 설정) */
.wave-02 {
  animation: drift 1.5s infinite ease-in-out alternate-reverse;
  transform-origin: center bottom;
}

/* 차오르는 모션 - 마스크 0 (메인) */
@keyframes fill-up-01 {
  0% {
    transform: translateY(30px);
  }
  85% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(-40px);
  }
}

/* 차오르는 모션 - 마스크 1 (서브) */
@keyframes fill-up-02 {
  0% {
    transform: translateY(20px);
  }
  85% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(-25px);
  }
}

/* 좌우 흔들림 효과 */
@keyframes drift {
  from {
    translate: -4px 0;
  }
  to {
    translate: 4px 0;
  }
}
</style>
