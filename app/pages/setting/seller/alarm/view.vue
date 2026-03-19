<template>
  <div class="sb-alarm">
    <h5 class="sb-alarm__title">
      중요한 소식, 특별한 혜택<br />
      원하는 채널로 받아보세요.
    </h5>

    <div class="sb-alarm-contents">
      <div class="sb-alarm-view">
        <div class="sb-alarm-view-head">
          <div class="sb-alarm-view-head__badge">
            <Badge value="공지" severity="warn"></Badge>
          </div>
          <div class="sb-alarm-view-head__title">
            <h6>[중요] 2026.03.01 시스템 정기 점검 예정 안내</h6>
            <p>2026.01.22</p>
          </div>
        </div>
        <div class="sb-alarm-view-contents">
          안녕하세요, 셀링부스터 관리자입니다.<br />
          <br />
          셀링부스터를 더욱 유익하고 빠르게 이용하실 수 있도록<br />
          2026년 03월 01일(월) 시스템 업데이트가 진행될 예정입니다.<br />
          <br />
          업데이트 시간 동안에는 서비스 접속이 원활하지 않을 수 있으니<br />작업
          내용을 참고하셔서 이용에 불편이 없으시길 바랍니다.
        </div>
        <div class="sb-alarm-view-button">
          <NuxtLink to="/setting/seller/alarm/">
            <Button severity="primary" outlined>
              <IconArrowLeft class="ico-arrow-left" />
              <span class="p-button-label">목록으로</span>
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
</script>
