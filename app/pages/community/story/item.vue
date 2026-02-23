<template>
  <div class="sb-story-list-item">
    <div class="sb-story-list-item__head">
      <div class="sb-story-list-item__thumb">
        <img v-if="item.thumb" :src="item.thumb" alt="썸네일" />
        <IconProfileDefault v-else class="ico-profile-default" />
      </div>
      <div class="sb-story-list-item__name">
        <p>{{ item.author }}</p>
        <span>{{ item.date }}</span>
      </div>
      <div class="sb-story-list-item__menu">
        <SbMenu :items="storyMenuItems" />
      </div>
    </div>
    <NuxtLink to="./view">
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
import StoryReport from './report.vue';
import { useRouter } from 'vue-router';

import Icon24edit from '@/assets/icons/24/edit.svg?component';
import Icon24trash from '@/assets/icons/24/trash.svg?component';
import Icon24block from '@/assets/icons/24/block.svg?component';
import Icon24report from '@/assets/icons/24/report.svg?component';
import IconProfileDefault from '@/assets/icons/profile/default.svg?component';

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
    icon: Icon24block,
    class: 'p-tieredmenu-item-link-danger',
  },
  {
    label: '신고',
    icon: Icon24report,
    class: 'p-tieredmenu-item-link-danger',
    command: () => {
      reportOpen();
    },
  },
  {
    label: '수정',
    icon: Icon24edit,
    command: () => {
      router.push('./write');
    },
  },
  {
    label: '삭제',
    icon: Icon24trash,
  },
]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
