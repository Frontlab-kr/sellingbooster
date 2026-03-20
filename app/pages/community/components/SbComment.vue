<template>
  <div
    ref="commentRef"
    :class="['sb-comment', { 'sb-comment--write': isReplyMode }]"
  >
    <div class="sb-comment-write">
      <SbTextarea
        v-model="textarea01"
        maxlength="1000"
        placeholder="댓글을 남겨보세요"
      />
    </div>
    <div class="sb-comment-write-mo-mention" v-if="isReplyTo && mention">
      <p>{{ mention }}님에게 답글 남기는 중</p>
      <Button variant="text" @click="closeReplyTo">
        <IconEtcCommentDelete class="ico-etc-comment-delete" />
      </Button>
    </div>
    <div class="sb-comment-write-mo">
      <!-- <div
        class="sb-comment-write-mo__bg"
        @click="
          closeReplyMode();
          closeReplyTo();
        "
      ></div> -->
      <div class="sb-comment-write-mo__form">
        <InputText
          :placeholder="mention ? `@${mention}` : '댓글을 입력하세요.'"
          v-model="newComment"
        />
        <Button severity="primary" :disabled="!newComment.trim()" rounded="">
          <template #icon>
            <IconArrowUp class="ico-arrow-up" />
          </template>
        </Button>
      </div>
    </div>
    <div class="sb-comment-list">
      <div class="sb-comment-list-item">
        <div class="sb-comment-list-item__head">
          <div class="sb-comment-list-item__thumb">
            <IconProfileDefault class="ico-profile-default" />
          </div>
          <div class="sb-comment-list-item__name">
            <p>셀링부스터</p>
            <span>2026.01.25 19:30</span>
          </div>
          <div class="sb-comment-list-item__menu">
            <SbMenu :items="commentMenuItems01" />
          </div>
        </div>

        <div class="sb-comment-list-item__contents">
          작은 시작이 결국 큰 변화를 만든다는 말에 깊이 공감하고 갑니다. 저도
          오늘 상품 등록 하나에 한 시간을 고민했는데, 셀러님 글 보니 다시 힘이
          나네요! 함께 완주해요.
        </div>
        <div class="sb-comment-list-item__foot">
          <SbSocial
            :visible-buttons="['like', 'comment', 'reply']"
            :like-count="item.likeCount"
            :comment-count="item.commentCount"
            :share-count="item.shareCount"
            @reply="
              openReplyMode();
              openReplyTo();
            "
          />
        </div>
        <div class="sb-comment-list-item-reply">
          <div class="sb-comment-list-item">
            <div class="sb-comment-list-item__head">
              <IconArrowBentArrow class="ico-arrow-bent-arrow" />
              <div class="sb-comment-list-item__thumb">
                <IconProfileDefault class="ico-profile-default" />
              </div>
              <div class="sb-comment-list-item__name">
                <p>셀링부스터</p>
                <span>2026.01.25 19:30</span>
              </div>
              <div class="sb-comment-list-item__menu">
                <SbMenu :items="commentMenuItems01" />
              </div>
            </div>

            <div class="sb-comment-list-item__contents">
              <strong>@셀링부스터</strong> 따뜻한 조언 감사드려요! 말씀해주신
              대로 고객 리뷰 하나하나 정성껏 답변 달기부터 다시 시작해보려고요.
              큰 힘이 되었습니다.
            </div>
            <div class="sb-comment-list-item__foot">
              <SbSocial
                :visible-buttons="['like', 'comment', 'reply']"
                :like-count="item.likeCount"
                :comment-count="item.commentCount"
                :share-count="item.shareCount"
                @reply="
                  openReplyMode();
                  openReplyTo();
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-comment-list-item">
        <div class="sb-comment-list-item__head">
          <div class="sb-comment-list-item__thumb">
            <IconProfileDefault class="ico-profile-default" />
          </div>
          <div class="sb-comment-list-item__name">
            <p>셀링부스터</p>
            <span>2026.01.25 19:30</span>
          </div>
          <div class="sb-comment-list-item__menu">
            <SbMenu :items="commentMenuItems02" />
          </div>
        </div>

        <div class="sb-comment-list-item__contents">
          순조롭지 않았던 시작을 솔직하게 공유해주셔서 감사합니다. 매출이 안
          나오던 시절 제 모습이 떠올라 울컥하네요. 꾸준함이 정답이라는 걸 결과로
          보여주셔서 정말 든든합니다!
        </div>
        <div class="sb-comment-list-item__foot">
          <SbSocial
            :visible-buttons="['like', 'comment', 'reply']"
            :like-count="item.likeCount"
            :comment-count="item.commentCount"
            :share-count="item.shareCount"
            @reply="
              openReplyMode();
              openReplyTo();
            "
          />
        </div>
        <div class="sb-comment-list-item-reply">
          <div class="sb-comment-list-item">
            <div class="sb-comment-list-item__head">
              <IconArrowBentArrow class="ico-arrow-bent-arrow" />
              <div class="sb-comment-list-item__thumb">
                <IconProfileDefault class="ico-profile-default" />
              </div>
              <div class="sb-comment-list-item__name">
                <p>슈퍼맨사랑</p>
                <span>2026.01.25 19:30</span>
              </div>
              <div class="sb-comment-list-item__menu">
                <SbMenu :items="commentMenuItems01" />
              </div>
            </div>

            <div class="sb-comment-list-item__contents">
              <strong>@셀링부스터</strong> 따뜻한 조언 감사드려요! 말씀해주신
              대로 고객 리뷰 하나하나 정성껏 답변 달기부터 다시 시작해보려고요.
              큰 힘이 되었습니다.
            </div>
            <div class="sb-comment-list-item__foot">
              <SbSocial
                :visible-buttons="['like', 'comment', 'reply']"
                :like-count="item.likeCount"
                :comment-count="item.commentCount"
                :share-count="item.shareCount"
                @reply="
                  openReplyMode();
                  openReplyTo();
                "
              />
            </div>
          </div>
          <div class="sb-comment-list-item__button" v-if="!isReplyVisible">
            <Button
              size="small"
              variant="text"
              @click="isReplyVisible = !isReplyVisible"
            >
              <span class="p-button-label">답글 2개 더 보기</span>
              <IconArrowAchevronDown class="ico-arrow-achevron-down" />
            </Button>
          </div>
          <div
            class="sb-comment-list-item"
            v-for="i in 2"
            :key="'mo-' + i"
            v-if="!isMobile || isReplyVisible"
          >
            <div class="sb-comment-list-item__head">
              <IconArrowBentArrow class="ico-arrow-bent-arrow" />
              <div class="sb-comment-list-item__thumb">
                <IconProfileDefault class="ico-profile-default" />
              </div>
              <div class="sb-comment-list-item__name">
                <p>슈퍼맨사랑</p>
                <span>2026.01.25 19:30</span>
              </div>
              <div class="sb-comment-list-item__menu">
                <SbMenu :items="commentMenuItems01" />
              </div>
            </div>

            <div class="sb-comment-list-item__contents">
              <strong>@셀링부스터</strong> 따뜻한 조언 감사드려요! 말씀해주신
              대로 고객 리뷰 하나하나 정성껏 답변 달기부터 다시 시작해보려고요.
              큰 힘이 되었습니다.
            </div>
            <div class="sb-comment-list-item__foot">
              <SbSocial
                :visible-buttons="['like', 'comment', 'reply']"
                :like-count="item.likeCount"
                :comment-count="item.commentCount"
                :share-count="item.shareCount"
                @reply="
                  openReplyMode();
                  openReplyTo();
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-comment-list-item">
        <div class="sb-comment-list-item__head">
          <div class="sb-comment-list-item__thumb">
            <IconProfileDefault class="ico-profile-default" />
          </div>
          <div class="sb-comment-list-item__name">
            <p>셀링부스터</p>
            <span>2026.01.25 19:30</span>
          </div>
          <div class="sb-comment-list-item__menu">
            <SbMenu :items="commentMenuItems01" />
          </div>
        </div>

        <div class="sb-comment-list-item__contents">
          저도 비슷한 업종이라 그런지 남 일 같지 않네요. 저는 최근에
          상세페이지를 수정하면서 조금씩 반응이 오고 있는데, 셀러님은 어떤
          시점에서 '아, 이제 진짜 성장이 시작됐구나'라고 느끼셨나요?
        </div>
        <div class="sb-comment-list-item__foot">
          <SbSocial
            :visible-buttons="['like', 'comment', 'reply']"
            :like-count="item.likeCount"
            :comment-count="item.commentCount"
            :share-count="item.shareCount"
            @reply="
              openReplyMode();
              openReplyTo();
            "
          />
        </div>
        <div class="sb-comment-list-item__write">
          <SbTextarea
            v-model="textarea01"
            maxlength="1000"
            placeholder="댓글을 남겨보세요"
          />
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogReport" modal class="p-dialog-sm">
    <div class="p-dialog-inner">
      <h5 class="p-dialog-title">신고하기</h5>
      <StoryReport />
    </div>
  </Dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import StoryReport from '@/pages/community/story/report.vue';
import SbSocial from '@/pages/community/components/SbSocial.vue';

import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconArrowBentArrow from '@/assets/icons/arrow/bent-arrow.svg?component';
import IconArrowUp from '@/assets/icons/arrow/up.svg?component';
import IconEtcCommentDelete from '@/assets/icons/etc/comment-delete.svg?component';
import IconProfileDefault from '@/assets/icons/profile/default.svg?component';

import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemBlock from '@/assets/icons/system/block.svg?component';
import IconSystemReport from '@/assets/icons/system/report.svg?component';

const textarea01 = ref('');
const isReplyMode = ref(false);
const isReplyVisible = ref(false);
const isReplyTo = ref(false);
const isMobile = ref(false);

const commentRef = ref(null);
let observer = null;

const handleResize = () => {
  isMobile.value = window.innerWidth <= 1024;
};

onMounted(() => {
  // 모바일 체크 로직
  isMobile.value = window.innerWidth <= 1024;
  window.addEventListener('resize', handleResize);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 화면에 보일 때
          isReplyMode.value = true;
        } else {
          // 화면에서 완전히 벗어났을 때
          isReplyMode.value = false;
        }
      });
    },
    {
      // 요소가 조금이라도(0.1) 보이면 true, 아예 안 보이면 false가 됩니다.
      threshold: 0.1,
    },
  );

  if (commentRef.value) {
    observer.observe(commentRef.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  window.removeEventListener('resize', handleResize);
});

const openReplyMode = () => {
  isReplyMode.value = true;
};

const closeReplyMode = () => {
  isReplyMode.value = false;
};

const openReplyTo = () => {
  isReplyTo.value = true;
};

const closeReplyTo = () => {
  isReplyTo.value = false;
};

//dialog
const dialogReport = ref(false);

const item = ref({
  likeCount: '9,000',
  commentCount: '9,000',
  shareCount: '9,000',
});

const mention = ref('셀링부스터닉네임글자열다섯글자');
const newComment = ref('');

const commentMenuItems01 = ref([
  {
    label: '수정',
    icon: IconSystemEdit,
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);
const commentMenuItems02 = ref([
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
]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
