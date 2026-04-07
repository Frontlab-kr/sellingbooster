<template>
  <div class="sb-url">
    <div>
      <h5>가이드</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/guide/GuideTypography">Typography</NuxtLink>
            <NuxtLink to="/guide/GuideColorLight">Color Light</NuxtLink>
            <NuxtLink to="/guide/GuideColorDark">Color Dark</NuxtLink>
            <NuxtLink to="/guide/GuideShadow">Shadow</NuxtLink>
            <NuxtLink to="/guide/GuideIcon">01 Icon</NuxtLink>
            <NuxtLink to="/guide/GuideButton">02 Button</NuxtLink>
            <NuxtLink to="/guide/GuideSelectControl"
              >03 Select Control</NuxtLink
            >
            <NuxtLink to="/guide/GuideSelectBox">04 Select box</NuxtLink>
            <NuxtLink to="/guide/GuideTextInput">05 Text input</NuxtLink>
            <NuxtLink to="/guide/GuideTab">06 Tab</NuxtLink>
            <NuxtLink to="/guide/GuideBadge">07 Badge</NuxtLink>
            <NuxtLink to="/guide/GuideTooltip">08 Tool tip</NuxtLink>
            <NuxtLink to="/guide/GuideHeader">09 Header</NuxtLink>
            <NuxtLink to="/guide/GuideAlert">10 Alert</NuxtLink>
          </div>
        </template>
      </Card>
    </div>
    <!-- <div>
      <h5>대시보드</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/dashboard">대시보드</NuxtLink>
          </div>
        </template>
      </Card>
    </div> -->
    <div>
      <h5>로그인</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/auth/login">로그인</NuxtLink>
            <NuxtLink to="/auth/signup">회원가입</NuxtLink>
            <NuxtLink to="/auth/signup/code">회원가입 인증코드</NuxtLink>
            <NuxtLink to="/auth/signup/error">회원가입 에러</NuxtLink>
            <NuxtLink to="/auth/signup/complete">회원가입 완료</NuxtLink>
            <NuxtLink to="/auth/find">비밀번호찾기</NuxtLink>
            <NuxtLink to="/auth/onboarding/">온보딩</NuxtLink>
            <NuxtLink to="/auth/onboarding/complete">온보딩 완료</NuxtLink>
          </div>
        </template>
      </Card>
    </div>

    <div>
      <h5>마켓 트렌드</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/trend/recommend/">추천기회</NuxtLink>
            <NuxtLink to="/trend/recommend/nodata">추천기회 - Nodata</NuxtLink>
            <NuxtLink to="/trend/recommend/write"
              >추천기회 - 상품명 생성하기</NuxtLink
            >
            <!-- <NuxtLink to="/trend/recommend/item">추천기회 아이템 소싱</NuxtLink> -->
            <NuxtLink to="/trend/recommend/ranking"
              >추천기회 - 나의 랭킹 찾기</NuxtLink
            >
            <NuxtLink to="/trend/recommend/ranking/result"
              >추천기회 - 나의 랭킹 찾기 결과</NuxtLink
            >
            <NuxtLink to="/trend/recommend/ranking/nodata"
              >추천기회 - 나의 랭킹 찾기 Nodata</NuxtLink
            >

            <NuxtLink to="/trend/keyword/">키워드 분석</NuxtLink>
            <NuxtLink to="/trend/keyword/nodata">키워드 분석 - Nodata</NuxtLink>
            <NuxtLink to="/trend/keyword/detail">키워드 분석 - 상세</NuxtLink>
            <NuxtLink to="/trend/keyword/detail02"
              >키워드 분석 - 상세 미로그인</NuxtLink
            >
            <NuxtLink to="/trend/keyword/detail03"
              >키워드 분석 - 상세 FAQ Nodata</NuxtLink
            >
            <NuxtLink to="/trend/product/">상품 분석</NuxtLink>
            <NuxtLink to="/trend/product/nodata">상품 분석 - Nodata</NuxtLink>
            <NuxtLink to="/trend/product/detail">상품 분석 - 상세</NuxtLink>
            <NuxtLink to="/trend/analysis/">분석 결과</NuxtLink>
          </div>
        </template>
      </Card>
    </div>

    <div>
      <h5>판매 가속</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/sales/price/">가격실행</NuxtLink>
            <NuxtLink to="/sales/price/nodata">가격실행 - Nodata</NuxtLink>
            <NuxtLink to="/sales/cs/">CS센터</NuxtLink>
            <NuxtLink to="/sales/product/">상품명 점검</NuxtLink>
            <NuxtLink to="/sales/product/nodata01"
              >상품명 점검 - 채널 미연동</NuxtLink
            >
            <NuxtLink to="/sales/product/nodata02"
              >상품명 점검 - 검색 실패</NuxtLink
            >
          </div>
        </template>
      </Card>
    </div>

    <!-- <div>
      <h5>셀링 플래너</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/planner/timeline">타임라인</NuxtLink>
            <NuxtLink to="/planner/calender">캘린더</NuxtLink>
            <NuxtLink to="/planner/memo">메모</NuxtLink>
          </div>
        </template>
      </Card>
    </div> -->

    <div>
      <h5>커뮤니티</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/community/qna/">Q&A</NuxtLink>
            <NuxtLink to="/community/qna/nodata">Q&A - Nodata</NuxtLink>
            <NuxtLink to="/community/notice/">공지사항</NuxtLink>
            <NuxtLink to="/community/notice/view">공지사항 - 상세</NuxtLink>
            <NuxtLink to="/community/notice/hasdata"
              >공지사항 - 상세 HasData</NuxtLink
            >
            <NuxtLink to="/community/notice/nodata">공지사항 - Nodata</NuxtLink>
            <NuxtLink to="/community/notice/empty"
              >공지사항 - SearchEmpty</NuxtLink
            >
            <NuxtLink to="/community/faq/">Faq</NuxtLink>
            <NuxtLink to="/community/faq/nodata">Faq - Nodata</NuxtLink>
            <NuxtLink to="/community/faq/hasdata">Faq - HasData</NuxtLink>
            <NuxtLink to="/community/story/">성장스토리</NuxtLink>
            <NuxtLink to="/community/story/view">성장스토리 - 상세</NuxtLink>
            <NuxtLink to="/community/story/write"
              >성장스토리 - 쓰기/수정</NuxtLink
            >
            <NuxtLink to="/community/story/nodata"
              >성장스토리 - Nodata</NuxtLink
            >

            <NuxtLink to="/community/board/">자유게시판</NuxtLink>
            <NuxtLink to="/community/board/view">자유게시판 - 상세</NuxtLink>
            <NuxtLink to="/community/board/write"
              >자유게시판 - 쓰기/수정</NuxtLink
            >
            <NuxtLink to="/community/board/nodata"
              >자유게시판 - Nodata</NuxtLink
            >
            <NuxtLink to="/community/board/empty"
              >자유게시판 - SearchEmpty</NuxtLink
            >

            <NuxtLink to="/community/blog/">블로그</NuxtLink>
            <NuxtLink to="/community/blog/view">블로그 상세</NuxtLink>

            <!-- <NuxtLink to="/community/ktrend">K-trend</NuxtLink> -->
          </div>
        </template>
      </Card>
    </div>

    <div>
      <h5>환경설정</h5>
      <Card>
        <template #content>
          <div class="flex flex-column gap-2">
            <NuxtLink to="/setting/account/">개인정보</NuxtLink>
            <NuxtLink to="/setting/seller/onboarding/">온보딩</NuxtLink>
            <NuxtLink to="/setting/seller/onboarding/complete"
              >온보딩 완료</NuxtLink
            >
            <NuxtLink to="/setting/account/delete">회원탈퇴</NuxtLink>
            <NuxtLink to="/setting/seller/channel">채널연동</NuxtLink>
            <NuxtLink to="/setting/seller/alarm">알림 설정</NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
