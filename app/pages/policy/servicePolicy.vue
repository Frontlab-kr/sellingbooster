<template>
  <div class="sb-servicepolicy">
    <div class="sb-servicepolicy-title">
      <h4>서비스 이용약관</h4>

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
    <div class="sb-servicepolicy-index">
      <div class="sb-servicepolicy-index-item">
        <dl>
          <dt>
            <NuxtLink to="#section-title01">제1장 총칙</NuxtLink>
          </dt>
          <dd>
            <ul>
              <li>
                <NuxtLink to="#section01">제1조 목적 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section02">제2조 용어의 정의 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section03">제3조 약관의 명시와 개정 </NuxtLink>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="sb-servicepolicy-index-item">
        <dl>
          <dt>
            <NuxtLink to="#section-title02">제2장 서비스 이용계약</NuxtLink>
          </dt>
          <dd>
            <ul>
              <li>
                <NuxtLink to="#section04">제4조 이용계약 체결 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section05">제5조 개인정보보호 의무 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section06"
                  >제6조 회원 탈퇴 및 자격상실
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section07"
                  >제7조 회원의 아이디 및 비밀번호의 관리에 대한 의무
                </NuxtLink>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="sb-servicepolicy-index-item">
        <dl>
          <dt>
            <NuxtLink to="#section-title03">제3장 서비스의 이용</NuxtLink>
          </dt>
          <dd>
            <ul>
              <li>
                <NuxtLink to="#section08">제8조 서비스의 제공</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section09">제9조 정보의 제공 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section10">제10조 서비스 이용요금 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section11">제11조 결제방법 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section12"
                  >제12조 서비스의 환불 및 변경
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section13"
                  >제13조 마케팅 정보 수신 및 활용
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section14">제14조 서비스의 이용시간 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section15"
                  >제15조 서비스의 변경 및 중지
                </NuxtLink>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="sb-servicepolicy-index-item">
        <dl>
          <dt>
            <NuxtLink to="#section-title04">제4장 계약 당사자의 의무</NuxtLink>
          </dt>
          <dd>
            <ul>
              <li>
                <NuxtLink to="#section16">제16조 회사의 의무 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section17">제17조 회원의 의무 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section18">제18조 회원에 대한 통지 </NuxtLink>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="sb-servicepolicy-index-item">
        <dl>
          <dt>
            <NuxtLink to="#section-title05">제5장 기타</NuxtLink>
          </dt>
          <dd>
            <ul>
              <li>
                <NuxtLink to="#section19">제19조 저작권 관리 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section20">제20조 면책조항 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section21">제21조 기타 사항 </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#section22">제22조 준거법 및 재판관할</NuxtLink>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="sb-servicepolicy-index-item">
        <dl>
          <dt>
            <NuxtLink to="#section-title06">부칙</NuxtLink>
          </dt>
        </dl>
      </div>
    </div>
    <PolicyServicePolicy />
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
