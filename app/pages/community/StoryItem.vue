<template>
  <div class="sb-story-list-item">
    <div class="sb-story-list-item__head">
      <div class="sb-story-list-item__thumb">
        <img :src="item.thumb" alt="썸네일" />
      </div>
      <div class="sb-story-list-item__name">
        <p>{{ item.author }}</p>
        <span>{{ item.date }}</span>
      </div>
      <div class="sb-story-list-item__menu">
        <Button variant="text" @click="menuToggle">
          <template #icon>
            <Icon name="sb:32-dotmenu" class="ico-32-dotmenu" />
          </template>
        </Button>
      </div>
    </div>
    <NuxtLink to="./StoryView">
      <h6 class="sb-story-list-item__title">{{ item.title }}</h6>
      <div class="sb-story-list-item__contents">
        {{ item.content }}
      </div>
      <div class="sb-story-list-item__image" v-if="item.image">
        <img :src="item.image" alt="" />
      </div>
      <div class="sb-story-list-item__foot">
        <Button size="small" variant="text" disabled>
          <Icon name="sb:24-like" class="ico-24-like" />
          <span class="p-button-label">{{ item.likeCount || 0 }}</span>
        </Button>
        <Button size="small" variant="text" disabled>
          <Icon name="sb:24-message" class="ico-24-message" />
          <span class="p-button-label">{{ item.commentCount || 0 }}</span>
        </Button>
        <Button size="small" variant="text" disabled>
          <Icon name="sb:24-share" class="ico-24-share" />
          <span class="p-button-label">{{ item.shareCount || 0 }}</span>
        </Button>
      </div>
    </NuxtLink>
  </div>
  <TieredMenu ref="menu" :model="menuItems" popup appendTo="body" />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

//menu
const menu = ref();
const menuItems = ref([
  {
    label: '차단',
    icon: 'ico-24-block',
  },
  {
    label: '신고',
    icon: 'ico-24-report',
    command: () => {
      reportOpen();
    },
  },
  {
    label: '수정',
    icon: 'ico-24-edit',
  },
  {
    label: '삭제',
    icon: 'ico-24-trash',
  },
]);
const menuToggle = (event) => {
  menu.value.toggle(event);
};
</script>
