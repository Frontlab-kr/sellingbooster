<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>공지사항</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-notice-view">
      <div class="sb-notice-view__head">
        <div class="sb-notice-view__badge">
          <Badge value="기본" severity="secondary"></Badge>
        </div>
        <div class="sb-notice-view__title">
          <h6>국가정보자원관리원 화재로 인한 일부 서비스 복구 완료 안내</h6>
          <div class="sb-notice-view__date">2026.01.22</div>
        </div>
      </div>
      <div class="sb-notice-view__contents">
        안녕하세요. 셀링부스터 입니다.<br />
        ​<br />
        현재 국가정보자원관리원 화재로 인한 정부 시스템 장애의 영향으로,<br />
        셀링부스터 일부 서비스에서 발생했던 오류 현상이 복구되었습니다.<br />
        현재 정상적으로 서비스를 이용하실 수 있습니다.<br />
        ​<br />
        &lt;상세 내용&gt;<br />
        - 오류 현상: 셀링부스터 일부 서비스 접속 지연 및 기능 이용 불가<br />
        - 복구 영역 : 대시보드, 기회 찾기, 바로 실행, 성과 보기, 커뮤니티(Q&A,
        공지사항, FAQ, 성장스토리, 트랜드) 등<br />
        ​<br />
        기다려주신 여러분께 감사의 말씀드리며, 앞으로 더욱 편안한 서비스를 제공
        드릴 수 있도록 노력하겠습니다.<br />
        ​<br />
        ※ 국가정보자원관리원 화재 관련 대국민 공지 (링크)<br />
        ※ 국가정보자원관리원 화재 장애 복구 상황 안내 (링크)<br />
        ​<br />
        ※ 온라인 고객센터 바로가기<br />
        - 셀링부스터 고객센터(링크)<br />
        ​<br />
        ※ ARS 전화번호<br />
        - 셀링부스터서비스 대표: 1588-0000
      </div>
      <div class="sb-attachment">
        <NuxtLink
          to="https://picsum.photos/id/1/800/800"
          target="_blank"
          class="sb-attachment-item"
        >
          <p>
            파일 첨부했을 경우 첨부파일 정보가 노출.jpg파일 첨부했을 경우
            첨부파일 정보가 노출.jpg파일 첨부했을 경우 첨부파일 정보가
            노출.jpg파일 첨부했을 경우 첨부파일 정보가 노출.jpg
          </p>

          <div class="sb-attachment-item__size">13MB</div>
          <IconSystemDownload class="ico-system-download" />
        </NuxtLink>
      </div>
    </div>
    <div class="sb-notice-view__button">
      <NuxtLink to="/community/notice/">
        <Button severity="primary" outlined>
          <IconArrowLeft class="ico-arrow-left" />
          <span class="p-button-label">목록으로</span>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconSystemDownload from '@/assets/icons/system/download.svg?component';

const item = ref({
  status: 'danger',
});

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '공지사항' },
]);
</script>
