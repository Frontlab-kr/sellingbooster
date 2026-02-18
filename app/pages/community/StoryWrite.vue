<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>성장스토리</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-story-write">
      <h5 class="sb-story-write__title">
        오늘 셀러님의 하루는 어땠나요?<br />
        작지만 소중한 기록을 남겨보세요
      </h5>
      <div class="sb-story-write-form">
        <div class="sb-story-write-form-item">
          <label>제목</label>
          <SbInput placeholder="성장스토리의 제목을 작성해 주세요." />
        </div>
        <div class="sb-story-write-form-item">
          <label>내용</label>
          <TiptapEditor />
        </div>
        <div class="sb-story-write-form-item">
          <label>파일 첨부</label>
          <SbFileupload />
          <div class="sb-fileupload__text">
            <p>※ 첨부파일은 50MB 이내 1개만 등록 가능합니다.</p>
            <p class="mb-0">※ 아래에 안내된 파일 형식만 첨부가 가능합니다.</p>
            <ul>
              <li>이미지 : jpg/jpeg, png, gif, webp, tiff, bmp, svg</li>
              <li>동영상 : mp4, avi, mov, wmv</li>
            </ul>
          </div>
        </div>
        <div class="sb-story-write-form-item">
          <div class="sb-caution">
            <div class="sb-caution__title">작성시 주의 사항</div>
            <ul>
              <li>
                서비스와 관련이 없는 비방/욕설/명예훼손성 게시글 및 광고글 등
                부적절한 게시글 등록 시 글쓰기 제한 및 게시글이 삭제 조치 될 수
                있습니다.
              </li>
              <li>
                전화번호, 이메일 등 개인정보가 포함된 글 작성이 필요한 경우
                노출에 주의 하시기 바랍니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sb-story-write__button">
        <Button severity="neutral" label="취소" />
        <Button severity="primary" label="발행" disabled />
      </div>
    </div>
  </div>
</template>

<script setup>
//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: '성장스토리' },
]);
</script>
