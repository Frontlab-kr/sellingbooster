export function useStatus() {
  const getBadgeStyle = (badgeColor) => {
    const styles = {
      bg_ebfcfd: { backgroundColor: '#ebfcfd', color: '#2ca6af' },
      bg_9aa3af: { backgroundColor: '#9aa3af', color: '#ffffff' },

      bg_38414f: { backgroundColor: '#38414f', color: '#ffffff' },
      bg_ffd1d3: { backgroundColor: '#ffd1d3', color: '#cc1f2f' },
      bg_eaecf1: { backgroundColor: '#eaecf1', color: '#38414f' },

      bg_fff7e0: { backgroundColor: '#fff7e0', color: '#E98C11' },
      bg_eff0ff: { backgroundColor: '#eff0ff', color: '#6466FA' },
    };

    // 정의되지 않은 status가 들어오면 기본 스타일(secondary 등) 반환
    return styles[badgeColor] || styles['secondary'];
  };

  return { getBadgeStyle };
}
