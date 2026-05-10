// plugins/directives.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-end', {
    mounted(el) {
      const container =
        el.querySelector('.p-datatable-table-container') ||
        el.querySelector('.sb-keyword-ranking__tab-list-scroll') || // 가로 스크롤 컨테이너 명시적 추가 가능
        el.firstElementChild ||
        el;

      const handleScroll = () => {
        const {
          scrollTop,
          clientHeight,
          scrollHeight,
          scrollLeft,
          clientWidth,
          scrollWidth,
        } = container;

        // 1. 세로 스크롤 감지 (스크롤이 생겼을 때만 작동)
        const hasVerticalScroll = scrollHeight > clientHeight;
        const isBottom =
          hasVerticalScroll && scrollTop + clientHeight >= scrollHeight - 1;

        if (isBottom) {
          el.classList.add('is-scroll-end-y');
        } else {
          el.classList.remove('is-scroll-end-y');
        }

        // 2. 가로 스크롤 감지 (스크롤이 생겼을 때만 작동)
        const hasHorizontalScroll = scrollWidth > clientWidth;
        const isRightEnd =
          hasHorizontalScroll && scrollLeft + clientWidth >= scrollWidth - 1;

        if (isRightEnd) {
          el.classList.add('is-scroll-end-x');
        } else {
          el.classList.remove('is-scroll-end-x');
        }

        // 3. 전체 상태 (가로든 세로든 스크롤이 생겼고, 끝에 도달했을 때)
        if (isBottom || isRightEnd) {
          el.classList.add('is-scroll-end');
        } else {
          el.classList.remove('is-scroll-end');
        }
      };

      const observer = new ResizeObserver(() => {
        handleScroll();
      });

      observer.observe(container);
      if (container.firstElementChild) {
        observer.observe(container.firstElementChild);
      }

      container.addEventListener('scroll', handleScroll);

      el._scrollTarget = { container, handleScroll, observer };

      // 레이아웃이 완전히 잡힌 후 계산하기 위해 nextTick이나 setTimeout 활용 고려
      setTimeout(() => handleScroll(), 0);
    },
    unmounted(el) {
      if (el._scrollTarget) {
        const { container, handleScroll, observer } = el._scrollTarget;
        if (container) container.removeEventListener('scroll', handleScroll);
        if (observer) observer.disconnect();
      }
    },
  });
});
