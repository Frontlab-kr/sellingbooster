// plugins/directives.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-end', {
    mounted(el) {
      // 1. PrimeVue DataTable 내부 컨테이너를 먼저 찾고, 없으면 첫 번째 자식을 타겟으로 함
      const container =
        el.querySelector('.p-datatable-table-container') ||
        el.firstElementChild ||
        el;

      const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = container;

        // 스크롤이 없거나 바닥에 닿았을 때 true (1px 오차 허용)
        const isBottom = scrollTop + clientHeight >= scrollHeight - 1;

        if (isBottom) {
          el.classList.add('is-scroll-end');
        } else {
          el.classList.remove('is-scroll-end');
        }
      };

      // 요소 크기나 내부 데이터 변화 감지
      const observer = new ResizeObserver(() => {
        handleScroll();
      });

      observer.observe(container);
      container.addEventListener('scroll', handleScroll);

      // 언마운트 시 참조를 위해 저장
      el._scrollTarget = {
        container,
        handleScroll,
        observer,
      };

      // 초기 상태 즉시 반영 (스크롤 없는 짧은 리스트 대응)
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
