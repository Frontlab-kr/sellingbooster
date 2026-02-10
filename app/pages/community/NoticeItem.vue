<template>
  <NuxtLink to="./NoticeView" class="sb-notice-list-item">
    <div class="sb-notice-list-item__badge">
      <Badge :severity="getBadgeSeverity(notice.category)">{{
        notice.category
      }}</Badge>
    </div>
    <h6 class="sb-notice-list-item__title">
      {{ notice.title }}
    </h6>
    <div class="sb-notice-list-item__foot">
      <div v-if="notice.hasAttachment" class="sb-notice-list-item__attachment">
        <Icon name="sb:16-paperclip" class="ico-16-paperclip" />
      </div>
      <div class="sb-notice-list-item__date">{{ notice.date }}</div>
    </div>
  </NuxtLink>
</template>

<script setup>
// props 정의
const props = defineProps({
  notice: {
    type: Object,
    required: true,
  },
});

// 카테고리별 뱃지 색상(Severity) 정의 (PrimeVue Badge 기준 예시)
const getBadgeSeverity = (category) => {
  switch (category) {
    case '긴급':
      return 'danger';
    case '중요':
      return 'warning';
    case '기술':
      return 'info';
    case '기본':
      return 'secondary';
    default:
      return 'secondary';
  }
};
</script>
