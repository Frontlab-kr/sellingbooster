<template>
  <div class="sb-privacypolicy">
    <div class="sb-privacypolicy-title">
      <h4>개인정보 처리 방침</h4>

      <Select
        ref="selectRef"
        v-model="selectedSort"
        :options="selectedSortOption"
        optionLabel="name"
        size="small"
        class="p-select-text"
        panelClass="p-select-overlay--text"
        :pt="{
          overlay: {
            onclick: (event) => {
              if (event.target === event.currentTarget) {
                selectRef.hide();
              }
            },
          },
        }"
      />
    </div>
    <div class="sb-privacypolicy-index">
      <div class="sb-privacypolicy-index-item">
        <NuxtLink to="#section01">제1조 개인정보의 처리 목적</NuxtLink>
        <NuxtLink to="#section02">제2조 개인정보의 수집 항목 및 방법</NuxtLink>
        <NuxtLink to="#section03">제3조 개인정보의 처리 및 보유 기간</NuxtLink>
        <NuxtLink to="#section04">제4조 개인정보의 제3자 제공</NuxtLink>
        <NuxtLink to="#section05">제5조 개인정보 처리 위탁</NuxtLink>
        <NuxtLink to="#section06">제6조 개인정보의 국외 이전</NuxtLink>
        <NuxtLink to="#section07">제7조 개인정보의 파기</NuxtLink>
        <NuxtLink to="#section08"
          >제8조 정보주체와 법정대리인의 권리•의무 및 행사방법</NuxtLink
        >
      </div>
      <div class="sb-privacypolicy-index-item">
        <NuxtLink to="#section09">제9조 개인정보의 안전성 확보조치</NuxtLink>
        <NuxtLink to="#section010">제10조 링크사이트</NuxtLink>
        <NuxtLink to="#section011">제11조 광고성 정보 전송</NuxtLink>
        <NuxtLink to="#section012"
          >제12조 개인정보의 자동 수집 장치의 설치, 운영 및 그 거부에 관한
          사항</NuxtLink
        >
        <NuxtLink to="#section013"
          >제13조 개인정보보호 책임자 및 관리자</NuxtLink
        >
        <NuxtLink to="#section014">제14조 의견수렴 및 불만처리</NuxtLink>
        <NuxtLink to="#section015">제15조 고지의 의무</NuxtLink>
      </div>
    </div>
    <div class="sb-privacypolicy-contents">
      <div class="sb-privacypolicy-section">
        <p>
          (주)헥토데이터(이하 회사)는 「개인정보 보호법, 제30조에 따라
          정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
          처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
          수립•공개합니다.<br />
          본 방침은 개인정보 관련 법령, 지침, 고시 또는 회사 정책의 변경에 따라
          변경될 수 있습니다.
        </p>
      </div>
      <div class="sb-privacypolicy-section" id="section01">
        <h6>제1조 개인정보의 처리 목적</h6>
        <p>
          회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
          개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
          변경되는 경우에는 “개인정보보호법 제18조”에 따라 별도의 동의를 받는 등
          필요한 조치를 이행합니다.
        </p>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                회원가입 및 관리
              </div>
              <ul>
                <li>
                  회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증,
                  회원자격 유지•관리, 서비스 부정이용 방지, 각종 고지•통지, 고충
                  처리
                </li>
                <li>
                  통합 계정 관리 : 회사 내부 서비스 간 통합 ID(SSO) 연동 및 중복
                  가입 방지
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                서비스 제공
              </div>
              <ul>
                <li>
                  유료 서비스 이용 시 콘텐츠 등의 요금 결제 및 정산, 서비스
                  이용현황 통계 분석 및 활용, 콘텐츠 제공, 맞춤형 서비스 제공,
                  서비스 개선
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                체험단 및 이벤트 운영
              </div>
              <ul>
                <li>
                  체험단 선정 및 미션 관리, 체험 상품(리워드) 배송, 우수 리뷰어
                  선정, 부정 참여 방지, 후기 수집 및 서비스 개선 활용, 후기 기반
                  홍보 활용, 정식 서비스 안내 및 회원 전환 안내.
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>4)</strong>
                신규 서비스 개발 및 마케팅 광고에의 활용 (선택)
              </div>
              <ul>
                <li>
                  신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보
                  제공 및 참여 기회 제공, 인구 통계학적 특성에 따른 서비스 제공
                  및 광고 게재, 서비스의 유효성 확인, 광고성 정보 제공, 접속빈도
                  파악, 이용자의 서비스 이용에 대한 통계
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
});

//sort
const selectRef = ref(null);
const selectedSortOption = ref([{ name: '2026년 01월 15일 (현행)' }]);
const selectedSort = ref(selectedSortOption.value[0]);
</script>
