export default defineNuxtPlugin(() => {
  if (typeof document === 'undefined') return;

  let isClickedOpen = false;

  // 특정 클래스가 포함된 팝오버만 타겟팅하는 선택자
  const TARGET_SELECTOR = '.p-popover.sb-popover-small';

  const updatePopoverClass = () => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        // [수정] sb-popover-small 클래스가 있는 요소만 선택
        const popovers = document.querySelectorAll(TARGET_SELECTOR);
        popovers.forEach((popover) => {
          const arrowLeftStr =
            getComputedStyle(popover).getPropertyValue(
              '--p-popover-arrow-left',
            ) || '0';
          const arrowLeft = parseFloat(arrowLeftStr);
          const popoverWidth = popover.offsetWidth || 280;

          if (arrowLeft >= popoverWidth / 2) {
            popover.classList.add('popover-right-side');
          } else {
            popover.classList.remove('popover-right-side');
          }
        });
      }, 10);
    });
  };

  const removePopoverClass = () => {
    if (isClickedOpen) return;
    // [수정] sb-popover-small 클래스가 있는 요소에서만 클래스 제거
    document.querySelectorAll(TARGET_SELECTOR).forEach((p) => {
      p.classList.remove('popover-right-side');
    });
  };

  const isTriggerElement = (target) => {
    if (!target || !(target instanceof Element)) return false;

    return (
      target.closest('button') ||
      target.closest('.p-button') ||
      target.closest('.p-popover-trigger') ||
      target.closest('[aria-haspopup="dialog"]') ||
      target.closest('[data-pc-name="button"]') ||
      target.closest('.cursor-pointer') ||
      target.closest('.p-icon') ||
      target.hasAttribute('style') ||
      target.className.toString().includes('hover')
    );
  };

  // 1. 클릭 이벤트
  document.addEventListener('click', (e) => {
    if (isTriggerElement(e.target)) {
      isClickedOpen = true;
      updatePopoverClass();
    } else if (!e.target.closest(TARGET_SELECTOR)) {
      // [수정] 대상 팝오버 내부 클릭인지 확인
      isClickedOpen = false;
      removePopoverClass();
    }
  });

  // 2. 호버 감지
  document.addEventListener(
    'mouseover',
    (e) => {
      if (isTriggerElement(e.target)) {
        updatePopoverClass();
      }
    },
    { passive: true },
  );

  // 3. 마우스 이탈 감지
  document.addEventListener(
    'mouseout',
    (e) => {
      const trigger = isTriggerElement(e.target);
      const movingTo = e.relatedTarget;

      if (trigger) {
        if (
          !movingTo ||
          (!movingTo.closest(TARGET_SELECTOR) && !isTriggerElement(movingTo)) // [수정]
        ) {
          removePopoverClass();
        }
      }
    },
    { passive: true },
  );
});
