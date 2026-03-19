<template>
  <div class="sb-auth">
    <h5 class="sb-auth__title">
      예비 셀러를 위한 채널 연동<br />
      셀러 성공 시작! 어렵고 복잡한 오픈 마켓 입점을 도와드릴게요.
    </h5>
    <div class="sb-tab">
      <Button
        label="오픈 마켓 신청"
        variant="text"
        :class="{ active: currentTab === 'apply' }"
        @click="currentTab = 'apply'"
      />
      <Button
        label="오픈 마켓 연동"
        variant="text"
        :class="{ active: currentTab === 'link' }"
        @click="currentTab = 'link'"
      />
    </div>
    <div class="sb-auth-form" v-if="currentTab === 'apply'">
      <div class="sb-auth-form-item">
        <label>입점 마켓 선택<strong>*</strong></label>
        <div class="sb-radio">
          <div class="sb-radio-item">
            <RadioButton
              v-model="selectedMarket"
              inputId="marketNaver"
              name="marketSelection"
              value="naver"
            />
            <label for="marketNaver">네이버쇼핑</label>
          </div>
          <div class="sb-radio-item">
            <RadioButton
              v-model="selectedMarket"
              inputId="marketCoupang"
              name="marketSelection"
              value="coupang"
            />
            <label for="marketCoupang">쿠팡</label>
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>네이버 쇼핑 사전 준비 체크 사항</label>
        <div class="sb-caution">
          <div class="sb-caution__title">1. 준비물</div>
          <ul>
            <li>
              개인 (사업자 아님) : 본인 명의 휴대폰 / 인증 가능한 은행 계좌
            </li>
            <li>
              사업자 : 사업자 등록증, 대표자/사업자 명의 동장, 구매안전 서비스
              이용확인증(스토어에서 발급 가능)
            </li>
          </ul>
        </div>
        <div class="sb-caution">
          <div class="sb-caution__title">2. 등록 절차</div>
          <ul>
            <li>
              가입 신청 : 스마트스토어센터 접속 >'가입하기'> 판매자
              유형(개인/사업자/해외사업자) 선택
            </li>
            <li>
              인증 및 약관 동의 : 네이버 아이디 또는 이메일로 가입,
              휴대폰/이메일 인증 진행
            </li>
            <li>스토어 정보 입력 : 스토어 이름, URL, 소개글, 카테고리 설정</li>
            <li>정산/배송 정보 : 정산받을 계좌 인증, 배송/반품지 주소 입력</li>
            <li>
              서류 제출 및 심사 : 사업자 정보 입력 후 관련 서류 제출. 개인은
              즉시 개설, 사업자는 심사 후 승인
            </li>
          </ul>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>네이버쇼핑 신청 / 심사 체크 리스트</label>
        <div class="sb-caution">
          <div class="sb-caution__title">1. 준비물</div>
          <ul>
            <li>사업자등록증</li>
            <li>통신판매업신고증</li>
            <li>인감/서명</li>
            <li>대표지 명의 통장</li>
            <li>구매안전서비스</li>
          </ul>
        </div>
        <div class="sb-caution">
          <div class="sb-caution__title">
            2. 미구비 서류 발급처 (관련 서류를 준비해주세요.)
          </div>
          <ul>
            <li>사업자등록증</li>
            <li>통신판매업신고증</li>
            <li>인감/서명(주민센터 확인)</li>
            <li>대표지 명의 통장(은행 개설)</li>
          </ul>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>네이버쇼핑 스토어 URL 등록<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <SbInput
            placeholder="입점 승인이 완료 되셨다면 스토어의 URL을 입력 해주세요."
          />
          <Button label="입점 여부 체크" severity="primary" outlined disabled />
        </div>
      </div>
    </div>
    <div v-else-if="currentTab === 'link'" class="sb-auth-form">
      <div class="sb-auth-form-item">
        <label>입점 마켓 선택<strong>*</strong></label>
        <div class="sb-radio">
          <div class="sb-radio-item">
            <RadioButton
              v-model="selectedMarket"
              inputId="marketNaver"
              name="marketSelection"
              value="naver"
            />
            <label for="marketNaver">네이버쇼핑</label>
          </div>
          <div class="sb-radio-item">
            <RadioButton
              v-model="selectedMarket"
              inputId="marketCoupang"
              name="marketSelection"
              value="coupang"
            />
            <label for="marketCoupang">쿠팡</label>
          </div>
        </div>
      </div>
      <div class="sb-auth-form-item">
        <label>네이버쇼핑 마켓 연동 수집 정보 가이드</label>
        <div class="sb-caution">
          <ol>
            <li>
              네이버 스마트스토어 로그인, 좌측 메뉴 스토어관리 > API 관리 선택
            </li>
            <li>API 사용 설정 "사용"선택</li>
            <li>
              API 대행사 선택 및 저장<br />
              상품 API: “셀픽(SELLPICK)" 선택 / 주문 API: “셀픽(SELLPICK)" 선택
            </li>
            <li>"API 연동용 판매자 ID" 드래그 하여 복사</li>
          </ol>
          <img
            src="./../../../../assets/images/screenshot/naver-smartstore.png"
            alt=""
          />
        </div>
      </div>

      <div class="sb-auth-form-item">
        <label>네이버쇼핑 스토어 판매자 URL 등록<strong>*</strong></label>
        <div class="sb-auth-form-item__input">
          <SbInput
            placeholder="복사하신 스토어의 API 연동용 판매자 ID를 입력해주세요."
          />
          <Button label="ID 체크" severity="primary" outlined disabled />
        </div>
      </div>
    </div>

    <div class="sb-auth__button">
      <Button
        :label="
          currentTab === 'apply' ? '오픈마켓 신청하기' : '마켓 신청 추가하기'
        "
        severity="contrast"
        size="large"
        outlined=""
      />
      <Button label="저장하기" severity="primary" size="large" disabled />
    </div>
  </div>
</template>

<script setup>
// 현재 활성화된 탭 ('apply' 또는 'link')
const currentTab = ref('apply');

// 선택된 마켓
const selectedMarket = ref('naver');
</script>
