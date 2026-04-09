// plugins/directives.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-end', {
    mounted(el) {
      const container =
        el.querySelector('.p-datatable-table-container') ||
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

        // 1. 세로 스크롤 끝 감지 (1px 오차 허용)
        const isBottom = scrollTop + clientHeight >= scrollHeight - 1;
        // 스크롤 영역이 없을 때(scrollHeight <= clientHeight) 처리 포함
        if (isBottom || scrollHeight <= clientHeight) {
          el.classList.add('is-scroll-end-y');
        } else {
          el.classList.remove('is-scroll-end-y');
        }

        // 2. 가로 스크롤 끝 감지 (1px 오차 허용)
        const isRightEnd = scrollLeft + clientWidth >= scrollWidth - 1;
        // 가로 스크롤 영역이 없을 때 처리 포함
        if (isRightEnd || scrollWidth <= clientWidth) {
          el.classList.add('is-scroll-end-x');
        } else {
          el.classList.remove('is-scroll-end-x');
        }

        // 기존 클래스 유지용 (필요 시)
        if (isBottom && isRightEnd) {
          el.classList.add('is-scroll-end');
        } else {
          el.classList.remove('is-scroll-end');
        }
      };

      const observer = new ResizeObserver(() => {
        handleScroll();
      });

      observer.observe(container);
      // 자식 요소(테이블 내용)의 크기 변화도 감지해야 정확합니다
      if (container.firstElementChild) {
        observer.observe(container.firstElementChild);
      }

      container.addEventListener('scroll', handleScroll);

      el._scrollTarget = {
        container,
        handleScroll,
        observer,
      };

      handleScroll();
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
