<template>
  <div class="sb-board-list-item">
    <div class="sb-board-list-item__head">
      <div class="sb-board-list-item__thumb">
        <img v-if="item.thumb" :src="item.thumb" alt="썸네일" />
        <IconProfileDefault v-else class="ico-profile-default" />
      </div>
      <div class="sb-board-list-item__name">
        <p>{{ item.author }}</p>
        <span>{{ item.date }}</span>
      </div>
      <div class="sb-board-list-item__menu">
        <SbMenu :items="menuItems" />
      </div>
    </div>
    <NuxtLink to="/community/board/view">
      <h6 class="sb-board-list-item__title">{{ item.title }}</h6>
      <div class="sb-board-list-item__contents">
        {{ item.content }}
      </div>
      <div class="sb-board-list-item__image" v-if="item.image">
        <img :src="item.image" alt="" />
      </div>
      <div class="sb-board-list-item__foot">
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
      <h6 class="p-dialog-title">신고하기</h6>
      <Report />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Report from './report.vue';
import SbSocial from '@/pages/community/components/SbSocial.vue';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemBlock from '@/assets/icons/system/block.svg?component';
import IconSystemReport from '@/assets/icons/system/report.svg?component';
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

const menuItems = ref([
  {
    label: '차단',
    icon: IconSystemBlock,
    class: 'p-tieredmenu-item-link-danger',
  },
  {
    label: '신고',
    icon: IconSystemReport,
    class: 'p-tieredmenu-item-link-danger',
    command: () => {
      reportOpen();
    },
  },
  {
    label: '수정',
    icon: IconSystemEdit,
    command: () => {
      router.push('./write');
    },
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
