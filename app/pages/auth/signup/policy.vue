<template>
  <div class="sb-policy">
    <div class="sb-policy-head">
      <div class="sb-policy-head__title">
        <h6>개인정보 처리방침</h6>
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
      <p>
        (주)헥토데이터(이하 ‘회사’)는 「개인정보 보호법」 제30조에 따라
        정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
        처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
        수립·공개합니다.<br />
        본 방침은 개인정보 관련 법령, 지침, 고시 또는 회사 정책의 변경에 따라
        변경될 수 있습니다.
      </p>
    </div>
    <div class="sb-policy-contents">
      <div class="sb-policy-contents__title">제 1 조 개인 정보의 처리 목적</div>
      <div class="sb-policy-contents__text">
        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
        개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
        변경되는 경우에는 “개인정보보호법 제18조”에 따라 별도의 동의를 받는 등
        필요한 조치를 이행합니다.
        <ol>
          <li>
            1) 회원가입 및 관리
            <ul>
              <li>
                회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
                회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충
                처리 [1] 
              </li>
              <li>
                통합 계정 관리: 회사 내부 서비스[2]  간 통합 ID(SSO) 연동 및
                중복 가입 방지
              </li>
            </ul>
          </li>
          <li>
            2) 서비스 제공<br />
            <p>
              유료 서비스 이용 시 콘텐츠 등의 요금 결제 및 정산, 서비스 이용현황
              통계 분석 및 활용, 콘텐츠 제공, 맞춤형 서비스 제공, 서비스 개선
            </p>
          </li>
        </ol>
      </div>
      <div class="sb-policy-contents__title">제 1 조 개인 정보의 처리 목적</div>
      <div class="sb-policy-contents__text">
        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
        개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
        변경되는 경우에는 “개인정보보호법 제18조”에 따라 별도의 동의를 받는 등
        필요한 조치를 이행합니다.
        <ol>
          <li>
            1) 회원가입 및 관리
            <ul>
              <li>
                회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
                회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충
                처리 [1] 
              </li>
              <li>
                통합 계정 관리: 회사 내부 서비스[2]  간 통합 ID(SSO) 연동 및
                중복 가입 방지
              </li>
            </ul>
          </li>
          <li>
            2) 서비스 제공<br />
            <p>
              유료 서비스 이용 시 콘텐츠 등의 요금 결제 및 정산, 서비스 이용현황
              통계 분석 및 활용, 콘텐츠 제공, 맞춤형 서비스 제공, 서비스 개선
            </p>
          </li>
        </ol>
      </div>
      <div class="sb-policy-contents__title">제 1 조 개인 정보의 처리 목적</div>
      <div class="sb-policy-contents__text">
        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
        개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
        변경되는 경우에는 “개인정보보호법 제18조”에 따라 별도의 동의를 받는 등
        필요한 조치를 이행합니다.
        <ol>
          <li>
            1) 회원가입 및 관리
            <ul>
              <li>
                회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
                회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충
                처리 [1] 
              </li>
              <li>
                통합 계정 관리: 회사 내부 서비스[2]  간 통합 ID(SSO) 연동 및
                중복 가입 방지
              </li>
            </ul>
          </li>
          <li>
            2) 서비스 제공<br />
            <p>
              유료 서비스 이용 시 콘텐츠 등의 요금 결제 및 정산, 서비스 이용현황
              통계 분석 및 활용, 콘텐츠 제공, 맞춤형 서비스 제공, 서비스 개선
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '공고일자 :  2026년 01월 15일 (현행)' },
  { name: '공고일자 :  2025년 01월 15일' },
  { name: '공고일자 :  2024년 01월 15일' },
]);
const selectedSort = ref(selectedSortOption.value[0]);
</script>
