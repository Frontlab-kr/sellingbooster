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
        <SbMenu :items="storyMenuItems" />
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
        <SbSocial
          class="sb-social--disabled"
          :visible-buttons="['like', 'comment', 'share']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>
    </NuxtLink>
  </div>
  <TieredMenu ref="menu" :model="menuItems" popup appendTo="body" />

  <Dialog v-model:visible="dialogReport" modal class="p-dialog-sm">
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">신고하기</h5>
      <StoryReport />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import StoryReport from './StoryReport.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dialogReport = ref(false);

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const emit = defineEmits(['report']);

const storyMenuItems = ref([
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
    command: () => {
      router.push('./storyWrite');
    },
  },
  {
    label: '삭제',
    icon: 'ico-24-trash',
  },
]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
