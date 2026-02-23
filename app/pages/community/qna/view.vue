<template>
  <div class="sb-qna-view">
    <div class="sb-qna-view__head">
      <div class="sb-qna-view__title">
        <Badge
          :value="getStatusDetail(item.status).label"
          :style="getStatusDetail(item.status)"
        />
        <h5>회원 문의</h5>
      </div>
      <div class="sb-qna-view__meta">
        <div class="sb-qna-view__date">2026.01.14</div>
        <div class="sb-qna-view__menu">
          <SbMenu :items="qnaMenuItems" />
        </div>
      </div>
    </div>

    <div class="sb-qna-view__body">
      <div class="sb-qna-view__contents">
        개인 셀러에서 법인 사업자로 변경하고 싶습니다. 처음에 개인 사업자로
        가입해서 대시보드를 이용 중이었는데, 이번에 법인으로 전환하게
        되었습니다. 계정을 새로 만들어야 하나요? 아니면 기존 데이터를 유지하면서
        사업자 정보만 변경할 수 있는지 확인 부탁드립니다.
      </div>
      <div class="sb-attachment">
        <NuxtLink to="/" class="sb-attachment-item">
          <p>
            파일 첨부했을 경우 첨부파일 정보가 노출.jpg파일 첨부했을 경우
            첨부파일 정보가 노출.jpg파일 첨부했을 경우 첨부파일 정보가
            노출.jpg파일 첨부했을 경우 첨부파일 정보가 노출.jpg
          </p>

          <div class="sb-attachment-item__size">13MB</div>
          <Icon24download class="ico-24-download" />
        </NuxtLink>
      </div>
    </div>

    <div class="sb-qna-view-answer">
      <div class="sb-qna-view-answer__head">
        <span class="sb-qna-view-answer__author">셀링부스터</span>
        <span class="sb-qna-view-answer__date">2026.01.14</span>
      </div>
      <div class="sb-qna-view-answer__content">
        사업자 유형 변경 절차를 안내해 드립니다. 기존 운영 데이터를 보존하시려면
        계정을 새로 만드시는 것보다 사업자 정보 전환 신청을 권장합니다.
        <strong>[마이페이지 > 계정 정보 > 사업자 인증]</strong> 메뉴에서 법인
        사업자 등록증과 통장 사본을 첨부해 주시면, 담당 부서 검토 후 영업일 기준
        2일 이내에 정보를 변경해 드립니다.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStatus } from '@/composables/useStatus';

import Icon24download from '@/assets/icons/24/download.svg?component';
import Icon24edit from '@/assets/icons/24/edit.svg?component';
import Icon24trash from '@/assets/icons/24/trash.svg?component';

const { getStatusDetail } = useStatus();

const item = ref({
  status: 'completed',
});

const qnaMenuItems = ref([
  {
    label: '수정',
    icon: Icon24edit,
  },
  {
    label: '삭제',
    icon: Icon24trash,
  },
]);
</script>
