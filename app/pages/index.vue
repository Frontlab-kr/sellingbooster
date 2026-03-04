<template>
  <div class="flex flex-column gap-5">
    <div>
      <h5 class="mb-2">가이드</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/guide/common">common</NuxtLink>
          </div>
        </template>
      </Card>
    </div>
    <div>
      <h5 class="mb-2">로그인</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/auth/login">로그인</NuxtLink>
            <NuxtLink to="/auth/signup">회원가입</NuxtLink>
            <NuxtLink to="/auth/signup/code">회원가입 인증코드</NuxtLink>
            <NuxtLink to="/auth/signup/error">회원가입 에러</NuxtLink>
            <NuxtLink to="/auth/signup/complete">회원가입 완료</NuxtLink>
            <NuxtLink to="/auth/find">비밀번호찾기</NuxtLink>
            <NuxtLink to="/setting/seller/onboarding/">온보딩</NuxtLink>
            <NuxtLink to="/setting/seller/onboarding/complete"
              >온보딩 완료</NuxtLink
            >
          </div>
        </template>
      </Card>
    </div>
    <div>
      <h5 class="mb-2">커뮤니티</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/community/qna/">Q&A</NuxtLink>
            <NuxtLink to="/community/qna/nodata">Q&A Nodata</NuxtLink>
            <NuxtLink to="/community/notice/">공지사항</NuxtLink>
            <NuxtLink to="/community/notice/view">공지사항 상세</NuxtLink>
            <NuxtLink to="/community/notice/hasdata"
              >공지사항 상세 HasData</NuxtLink
            >
            <NuxtLink to="/community/notice/nodata">공지사항 Nodata</NuxtLink>
            <NuxtLink to="/community/notice/empty"
              >공지사항 SearchEmpty</NuxtLink
            >
            <NuxtLink to="/community/faq/">Faq</NuxtLink>
            <NuxtLink to="/community/faq/nodata">Faq Nodata</NuxtLink>
            <NuxtLink to="/community/story/">성장스토리</NuxtLink>
            <NuxtLink to="/community/story/view">성장스토리 상세</NuxtLink>
            <NuxtLink to="/community/story/write"
              >성장스토리 쓰기/수정</NuxtLink
            >
            <NuxtLink to="/community/story/nodata">성장스토리 Nodata</NuxtLink>

            <NuxtLink to="/community/board/">자유게시판</NuxtLink>
            <NuxtLink to="/community/board/view">자유게시판 상세</NuxtLink>
            <NuxtLink to="/community/board/write"
              >자유게시판 쓰기/수정</NuxtLink
            >
            <NuxtLink to="/community/board/nodata">자유게시판 Nodata</NuxtLink>
            <NuxtLink to="/community/board/empty"
              >자유게시판 SearchEmpty</NuxtLink
            >
          </div>
        </template>
      </Card>
    </div>
    <div>
      <h5 class="mb-2">마켓 트렌드</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/trend/keyword">키워드</NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
