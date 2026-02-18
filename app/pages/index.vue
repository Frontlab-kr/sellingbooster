<template>
  <h5 class="mb-2">커뮤니티</h5>
  <Card>
    <template #content>
      <div class="flex flex-column gap-2">
        <NuxtLink to="/community/Qna">Q&A</NuxtLink>
        <NuxtLink to="/community/QnaNodata">Q&A Nodata</NuxtLink>
        <NuxtLink to="/community/Notice">공지사항</NuxtLink>
        <NuxtLink to="/community/NoticeView">공지사항 상세</NuxtLink>
        <NuxtLink to="/community/NoticeHasdata">공지사항 상세 HasData</NuxtLink>
        <NuxtLink to="/community/NoticeNodata">공지사항 Nodata</NuxtLink>
        <NuxtLink to="/community/NoticeSearchEmpty"
          >공지사항 SearchEmpty</NuxtLink
        >
        <NuxtLink to="/community/Faq">Faq</NuxtLink>
        <NuxtLink to="/community/FaqNodata">Faq Nodata</NuxtLink>
        <NuxtLink to="/community/Story">성장스토리</NuxtLink>
        <NuxtLink to="/community/StoryView">성장스토리 상세</NuxtLink>
        <NuxtLink to="/community/StoryWrite">성장스토리 쓰기/수정</NuxtLink>
        <NuxtLink to="/community/StoryNodata">성장스토리 Nodata</NuxtLink>
      </div>
    </template>
  </Card>
</template>
