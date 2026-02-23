// useStatus.js
export function useStatus() {
  const statusConfig = {
    pending: {
      backgroundColor: 'var(--badge-pending-bg)',
      color: 'var(--badge-pending-text)',
      label: '답변 대기',
    },
    completed: {
      backgroundColor: 'var(--badge-completed-bg)',
      color: 'var(--badge-completed-text)',
      label: '답변 완료',
    },
    danger: {
      backgroundColor: 'var(--badge-danger-bg)',
      color: 'var(--badge-danger-text)',
      label: '긴급',
    },
    important: {
      backgroundColor: 'var(--badge-important-bg)',
      color: 'var(--badge-important-text)',
      label: '중요',
    },
    technical: {
      backgroundColor: 'var(--badge-technical-bg)',
      color: 'var(--badge-technical-text)',
      label: '기술',
    },
    default: {
      backgroundColor: 'var(--badge-default-bg)',
      color: 'var(--badge-default-text)',
      label: '기본',
    },
    etc: {
      backgroundColor: 'var(--badge-etc-bg)',
      color: 'var(--badge-etc-text)',
      label: '기타',
    },
    signup: {
      backgroundColor: 'var(--badge-signup-bg)',
      color: 'var(--badge-signup-text)',
      label: '가입방법',
    },
    guide: {
      backgroundColor: 'var(--badge-guide-bg)',
      color: 'var(--badge-guide-text)',
      label: '사용방법',
    },
    feature: {
      backgroundColor: 'var(--badge-feature-bg)',
      color: 'var(--badge-feature-text)',
      label: '기능소개',
    },
  };

  const getStatusDetail = (status) => {
    return statusConfig[status] || statusConfig['default'];
  };

  return { getStatusDetail };
}
