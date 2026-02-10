<template>
  <div class="sb-comment">
    <div class="sb-comment-write">
      <div class="sb-comment-write__textarea">
        <Textarea placeholder="댓글을 남겨보세요" />
      </div>
      <div class="sb-comment-write__button">
        <p>0/1000</p>
        <Button size="small" severity="secondary" label="등록" rounded />
      </div>
    </div>
    <div class="sb-comment-item">
      <div class="sb-comment-item__head">
        <div class="sb-comment-item__thumb"></div>
        <div class="sb-comment-item__name">
          <p>셀링부스터</p>
          <span>2026.01.25 19:30</span>
        </div>
        <div class="sb-comment-item__menu">
          <Button variant="text" @click="menuToggle">
            <template #icon>
              <Icon name="sb:32-dotmenu" class="ico-32-dotmenu" />
            </template>
          </Button>
          <TieredMenu ref="menu" :model="menuItems" popup />
        </div>
      </div>

      <div class="sb-comment-item__contents">
        홀로 컴퓨터 앞에서 시작했던 판매가 어느덧 1주년을 맞이했습니다. 밤새워
        박스를 테이핑하던 기억들이 주마등처럼 스쳐 지나가네요. 스스로에게
        "고생했다"고 말해주며, 앞으로의 10년을 위한 새로운 목표를 세워봅니다.
      </div>
      <div class="sb-comment-item__foot">
        <Button size="small" variant="text">
          <Icon name="sb:24-like" class="ico-24-like" />
          <span class="p-button-label">9,000</span>
        </Button>
        <Button size="small" variant="text">
          <Icon name="sb:24-message" class="ico-24-message" />
          <span class="p-button-label">9,000</span>
        </Button>
        <Button size="small" variant="text" label="답글달기" />
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogReport" modal>
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">신고하기</h5>
      <StoryReport />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import StoryReport from '../pages/community/StoryReport.vue';

//dialog
const dialogReport = ref(false);

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
const reportOpen = () => {
  dialogReport.value = true;
};
</script>
