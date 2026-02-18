<template>
  <div class="sb-comment">
    <div class="sb-comment-write">
      <div class="sb-comment-write__textarea">
        <Textarea
          v-model="newComment"
          placeholder="댓글을 남겨보세요"
          :maxlength="maxChars"
        />
      </div>
      <div class="sb-comment-write__button">
        <p>
          <strong>{{ newComment.length }}</strong> / {{ maxChars }}
        </p>
        <Button
          size="small"
          severity="primary"
          label="등록"
          :disabled="!newComment.trim()"
        />
      </div>
    </div>
    <div class="sb-comment-write-mo">
      <InputText />
      <Button variant="text">
        <Icon24commentCheck class="ico-24-comment-check" />
      </Button>
    </div>
    <div class="sb-comment-item">
      <div class="sb-comment-item__head">
        <div class="sb-comment-item__thumb">
          <img src="../assets/icons/profile/default.svg" alt="" />
        </div>
        <div class="sb-comment-item__name">
          <p>셀링부스터</p>
          <span>2026.01.25 19:30</span>
        </div>
        <div class="sb-comment-item__menu">
          <SbMenu :items="commentMenuItems01" />
        </div>
      </div>

      <div class="sb-comment-item__contents">
        순조롭지 않았던 시작을 솔직하게 공유해주셔서 감사합니다. 매출이 안
        나오던 시절 제 모습이 떠올라 울컥하네요. 꾸준함이 정답이라는 걸 결과로
        보여주셔서 정말 든든합니다!
      </div>
      <div class="sb-comment-item__foot">
        <SbSocial
          :visible-buttons="['like', 'comment', 'reply']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>
      <div class="sb-comment-item-reply">
        <div class="sb-comment-item">
          <div class="sb-comment-item__head">
            <Icon24reply class="ico-24-reply" />
            <div class="sb-comment-item__thumb">
              <img src="../assets/icons/profile/default.svg" alt="" />
            </div>
            <div class="sb-comment-item__name">
              <p>셀링부스터</p>
              <span>2026.01.25 19:30</span>
            </div>
            <div class="sb-comment-item__menu">
              <SbMenu :items="commentMenuItems01" />
            </div>
          </div>

          <div class="sb-comment-item__contents">
            <strong>@셀링부스터</strong> 따뜻한 조언 감사드려요! 말씀해주신 대로
            고객 리뷰 하나하나 정성껏 답변 달기부터 다시 시작해보려고요. 큰 힘이
            되었습니다.
          </div>
          <div class="sb-comment-item__foot">
            <SbSocial
              :visible-buttons="['like', 'reply']"
              :like-count="item.likeCount"
              :comment-count="item.commentCount"
              :share-count="item.shareCount"
            />
          </div>
        </div>
        <div class="sb-comment-item__button">
          <Button size="small" variant="text">
            <span class="p-button-label"
              ><strong>답글 2개 더 보기</strong></span
            >
            <Icon20down class="ico-20-down" />
          </Button>
        </div>
      </div>
    </div>
    <div class="sb-comment-item">
      <div class="sb-comment-item__head">
        <div class="sb-comment-item__thumb">
          <img src="../assets/icons/profile/default.svg" alt="" />
        </div>
        <div class="sb-comment-item__name">
          <p>셀링부스터</p>
          <span>2026.01.25 19:30</span>
        </div>
        <div class="sb-comment-item__menu">
          <SbMenu :items="commentMenuItems02" />
        </div>
      </div>

      <div class="sb-comment-item__contents">
        작은 시작이 결국 큰 변화를 만든다는 말에 깊이 공감하고 갑니다. 저도 오늘
        상품 등록 하나에 한 시간을 고민했는데, 셀러님 글 보니 다시 힘이 나네요!
        함께 완주해요.
      </div>
      <div class="sb-comment-item__foot">
        <SbSocial
          :visible-buttons="['like', 'comment', 'reply']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>
      <div class="sb-comment-item-reply">
        <div class="sb-comment-item" v-for="i in 2">
          <div class="sb-comment-item__head">
            <Icon24reply class="ico-24-reply" />
            <div class="sb-comment-item__thumb">
              <img src="../assets/icons/profile/default.svg" alt="" />
            </div>
            <div class="sb-comment-item__name">
              <p>셀링부스터</p>
              <span>2026.01.25 19:30</span>
            </div>
            <div class="sb-comment-item__menu">
              <SbMenu :items="commentMenuItems01" />
            </div>
          </div>

          <div class="sb-comment-item__contents">
            <strong>@셀링부스터</strong> 따뜻한 조언 감사드려요! 말씀해주신 대로
            고객 리뷰 하나하나 정성껏 답변 달기부터 다시 시작해보려고요. 큰 힘이
            되었습니다.
          </div>
          <div class="sb-comment-item__foot">
            <SbSocial
              :visible-buttons="['like', 'reply']"
              :like-count="item.likeCount"
              :comment-count="item.commentCount"
              :share-count="item.shareCount"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="sb-comment-item">
      <div class="sb-comment-item__head">
        <div class="sb-comment-item__thumb">
          <img src="../assets/icons/profile/default.svg" alt="" />
        </div>
        <div class="sb-comment-item__name">
          <p>행복마켓</p>
          <span>2026.01.25 19:30</span>
        </div>
        <div class="sb-comment-item__menu">
          <SbMenu :items="commentMenuItems01" />
        </div>
      </div>

      <div class="sb-comment-item__contents">
        저도 비슷한 업종이라 그런지 남 일 같지 않네요. 저는 최근에 상세페이지를
        수정하면서 조금씩 반응이 오고 있는데, 셀러님은 어떤 시점에서 '아, 이제
        진짜 성장이 시작됐구나'라고 느끼셨나요?
      </div>
      <div class="sb-comment-item__foot">
        <SbSocial
          :visible-buttons="['like', 'comment', 'reply']"
          :like-count="item.likeCount"
          :comment-count="item.commentCount"
          :share-count="item.shareCount"
        />
      </div>

      <div class="sb-comment-write">
        <div class="sb-comment-write__name">행복마켓</div>
        <div class="sb-comment-write__textarea">
          <Textarea
            v-model="replyComment"
            placeholder="댓글을 남겨보세요"
            :maxlength="maxChars"
          />
        </div>
        <div class="sb-comment-write__button">
          <p>
            <strong>{{ replyComment.length }}</strong> / {{ maxChars }}
          </p>
          <Button size="small" severity="neutral" label="취소" />
          <Button
            size="small"
            severity="primary"
            label="답글 등록"
            :disabled="!replyComment.trim()"
          />
        </div>
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
import StoryReport from './../pages/community/StoryReport.vue';
import Icon24reply from '@/assets/icons/24/reply.svg?component';
import Icon20down from '@/assets/icons/20/down.svg?component';
import Icon24commentCheck from '@/assets/icons/24/comment-check.svg?component';

//dialog
const dialogReport = ref(false);

const item = ref({
  likeCount: '9,000',
  commentCount: '9,000',
  shareCount: '9,000',
});

const maxChars = 1000;
const newComment = ref('');
const replyComment = ref('');

const commentMenuItems01 = ref([
  {
    label: '수정',
    icon: 'ico-24-edit',
  },
  {
    label: '삭제',
    icon: 'ico-24-trash',
  },
]);
const commentMenuItems02 = ref([
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
]);

const reportOpen = () => {
  dialogReport.value = true;
};
</script>
