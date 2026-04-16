<template>
  <div class="sb-onboarding" ref="onboardingContainer">
    <Stepper v-model:value="currentStep">
      <StepList>
        <Step value="1">기본 정보</Step>
        <Step value="2">판매자 정보</Step>
        <Step value="3">오픈마켓 정보</Step>
      </StepList>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <h5 class="sb-onboarding__title">
            셀러 성공의 시작<br />
            맞춤형으로 든든하게 도와드릴게요.
          </h5>
          <div class="sb-onboarding-form">
            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  사업자 등록을 하셨나요?<strong>*</strong>
                </div>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div>
                  <div class="sb-radio sb-radio--mo-row">
                    <div class="sb-radio-item">
                      <RadioButton
                        v-model="selectedLicense"
                        inputId="selectedLicenseYes"
                        name="selectedLicense"
                        value="Y"
                      />
                      <label for="selectedLicenseYes">네</label>
                    </div>
                    <div class="sb-radio-item">
                      <RadioButton
                        v-model="selectedLicense"
                        inputId="selectedLicenseNo"
                        name="selectedLicense"
                        value="N"
                      />
                      <label for="selectedLicenseNo">아니요</label>
                    </div>
                  </div>
                  <div
                    class="sb-auth-form-item__checkbox"
                    v-if="selectedLicense === 'Y'"
                  >
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          v-model="userTypes"
                          inputId="user-individual"
                          value="individual"
                        />
                        <label for="user-individual"> 개인 </label>
                      </div>

                      <div class="sb-radio-item">
                        <RadioButton
                          v-model="userTypes"
                          inputId="user-corporate"
                          value="corporate"
                        />
                        <label for="user-corporate"> 법인 </label>
                      </div>

                      <div class="sb-radio-item">
                        <RadioButton
                          v-model="userTypes"
                          inputId="user-overseas"
                          value="overseas"
                        />
                        <label for="user-overseas"> 해외 </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  어떤 상품에 관심이 있나요?<strong>*</strong>
                </div>
                <p>여러개 선택 가능해요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div
                      class="sb-checkbox-item"
                      v-for="item in interestOptions"
                      :key="item.value"
                    >
                      <Checkbox
                        v-model="selectedInterests"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item" v-if="selectedLicense === 'Y'">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  어떤 상품을 판매하나요?<strong>*</strong>
                </div>
                <p>여러개 선택 가능해요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div
                      class="sb-checkbox-item"
                      v-for="item in sellOptions"
                      :key="item.value"
                    >
                      <Checkbox
                        v-model="selectedProducts"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item" v-if="selectedLicense === 'Y'">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  현재 매출 규모는 어느 정도인가요?
                </div>
                <p>연 매출 기준으로 알려주세요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-radio">
                    <div
                      class="sb-radio-item"
                      v-for="item in revenueOptions"
                      :key="item.value"
                    >
                      <RadioButton
                        v-model="selectedRevenue"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item" v-if="selectedLicense === 'Y'">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  어떤 분들이 주로 구매하시나요?
                </div>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-radio">
                    <div
                      class="sb-radio-item"
                      v-for="item in targetOptions"
                      :key="item.value"
                    >
                      <RadioButton
                        v-model="selectedTargets"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item" v-if="selectedLicense === 'Y'">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  고객님들의 연령대가 궁금해요
                </div>
                <p>여러개 선택 가능해요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div
                      class="sb-checkbox-item"
                      v-for="item in ageOptions"
                      :key="item.value"
                    >
                      <Checkbox
                        v-model="selectedAges"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item" v-if="selectedLicense === 'Y'">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  어느 지역의 고객들과 만나고 계신가요?
                </div>
                <p>여러개 선택 가능해요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div
                      class="sb-checkbox-item"
                      v-for="item in regionOptions"
                      :key="item.value"
                    >
                      <Checkbox
                        v-model="selectedRegions"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  요즘 어떤 고민이 있으신가요?<strong>*</strong>
                </div>
                <p>여러개 선택 가능해요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div
                      class="sb-checkbox-item"
                      v-for="item in concernOptions"
                      :key="item.value"
                    >
                      <Checkbox
                        v-model="selectedConcerns"
                        :inputId="item.id"
                        :value="item.value"
                      />
                      <label :for="item.id">{{ item.label }}</label>
                    </div>
                  </div>
                </div>
                <div
                  class="sb-onboarding-form-item__input"
                  v-if="selectedConcerns.includes('custom')"
                >
                  <SbInput
                    v-model="customConcernText"
                    placeholder="내용을 입력해주세요."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="sb-caution">
            <ul>
              <li>
                셀러 정보 등록은 지금 안하셔도 [환경설정 >
                <NuxtLink to="/">셀러 정보 관리</NuxtLink>] 메뉴에서 언제든지
                등록 하실 수 있으세요.
              </li>
            </ul>
          </div>
          <div class="sb-onboarding__button">
            <Button
              label="다음에 할래요"
              size="large"
              severity="contrast"
              outlined
            />
            <Button label="다음" size="large" @click="activateCallback('2')" />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <h5 class="sb-onboarding__title">
            셀러 성공의 시작<br />
            맞춤형으로 든든하게 도와드릴게요.
          </h5>
          <div class="sb-onboarding-form">
            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  판매자 휴대폰 번호<strong>*</strong>
                </div>
              </div>
              <div
                v-if="!isEditingPhone"
                class="sb-onboarding-form-item__input"
              >
                <SbInput value="010-1111-2222" readonly />
                <Button
                  label="변경"
                  severity="primary"
                  outlined
                  @click="enablePhoneEdit"
                />
              </div>
              <template v-else>
                <div class="sb-onboarding-form-item__input">
                  <SbInput
                    placeholder="휴대폰 번호를 입력해주세요."
                    value="010-1111-2222"
                    cancel
                    @cancel="disablePhoneEdit"
                  />
                  <Button label="인증하기" severity="primary" outlined />
                </div>
                <div class="sb-auth-form-item__message">
                  <Message size="small" severity="error" variant="simple"
                    >입력하신 휴대폰 번호로 발송된 인증 번호를
                    입력해주세요.</Message
                  >
                </div>
                <div class="sb-onboarding-form-item__input">
                  <SbInput
                    placeholder="인증코드를 입력해주세요."
                    time="03:59"
                    number
                  />
                  <Button
                    label="코드 인증"
                    severity="primary"
                    outlined
                    disabled
                  />
                </div>
                <div class="sb-auth-form-item__message">
                  <Message size="small" severity="neutral" variant="simple"
                    >인증 시간이 만료되었거나 인증 번호가 오지 않았을 경우
                    재인증을 해주세요.</Message
                  >
                </div>
              </template>
            </div>
            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  판매자 이메일<strong>*</strong>
                </div>
              </div>
              <div
                v-if="!isEditingEmail"
                class="sb-onboarding-form-item__input"
              >
                <SbInput value="user_email@mail.com" readonly />
                <Button
                  label="인증 코드 발송"
                  severity="primary"
                  outlined
                  @click="enableEmailEdit"
                />
              </div>
              <template v-else>
                <div class="sb-onboarding-form-item__input">
                  <SbInput
                    placeholder="이메일 주소를 입력해주세요."
                    value="user_emil1234@mail.com"
                    cancel
                    @cancel="disableEmailEdit"
                  />
                  <Button label="인증하기" severity="primary" outlined />
                </div>
                <div class="sb-onboarding-form-item__input">
                  <SbInput
                    placeholder="인증코드를 입력해주세요."
                    time="03:59"
                    number
                  />
                  <Button
                    label="코드 인증"
                    severity="primary"
                    outlined
                    disabled
                  />
                </div>
                <div class="sb-auth-form-item__message">
                  <Message size="small" severity="neutral" variant="simple"
                    >링크가 만료되었거나 메일이 오지 않았을 경우 재인증을
                    해주세요.</Message
                  >
                </div>
              </template>

              <!-- <div class="sb-onboarding-form-item__input">
                <SbInput placeholder="이메일 주소를 입력해주세요." />
                <Button
                  label="인증 코드 발송"
                  severity="primary"
                  outlined
                  disabled
                />
              </div>
              <div class="sb-onboarding-form-item__input">
                <SbInput
                  placeholder="인증코드를 입력해주세요."
                  time="03:59"
                  number
                />
                <Button
                  label="코드 인증"
                  severity="primary"
                  outlined
                  disabled
                />
              </div> -->
            </div>
            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  마케팅 정보 수신 동의<strong>*</strong>
                </div>
              </div>
              <div class="sb-onboarding-form-item__text">
                마케팅 정보를 수신하시면 사업에 도움이 되는 다양한 정보를 받아
                보실 수 있습니다.<br />
                미동의 시 일부 핵심 서비스가 제한 될 수 있으며,<br />
                마케팅 정보 수신 동의는 [환경 설정 > 알림 설정]에서 변경할 수
                있습니다.
              </div>
              <div class="sb-radio">
                <div class="sb-radio-item">
                  <RadioButton
                    v-model="marketingConsent"
                    inputId="marketingNo"
                    name="marketingConsent"
                    value="N"
                  />
                  <label for="marketingNo">지금은 받지 않을게요.</label>
                </div>
                <div class="sb-radio-item">
                  <RadioButton
                    v-model="marketingConsent"
                    inputId="marketingYes"
                    name="marketingConsent"
                    value="Y"
                  />
                  <label for="marketingYes">알림 받을게요.</label>
                </div>
              </div>

              <div
                class="sb-auth-form-item__checkbox"
                v-if="marketingConsent === 'Y'"
              >
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      v-model="consentMethods"
                      inputId="method-email"
                      value="email"
                    />
                    <label for="method-email"> 메일 </label>
                  </div>

                  <div class="sb-checkbox-item">
                    <Checkbox
                      v-model="consentMethods"
                      inputId="method-sms"
                      value="sms"
                    />
                    <label for="method-sms"> 문자 </label>
                  </div>

                  <div class="sb-checkbox-item">
                    <Checkbox
                      v-model="consentMethods"
                      inputId="method-talk"
                      value="talk"
                    />
                    <label for="method-talk"> 알림톡 </label>
                  </div>

                  <div class="sb-checkbox-item">
                    <Checkbox
                      v-model="consentMethods"
                      inputId="method-push"
                      value="push"
                    />
                    <label for="method-push"> 앱푸시 </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-caution">
            <ul>
              <li>
                셀러 정보 등록은 지금 안하셔도 [환경설정 >
                <NuxtLink to="/">셀러 정보 관리</NuxtLink>] 메뉴에서 언제든지
                등록 하실 수 있으세요.
              </li>
            </ul>
          </div>
          <div class="sb-onboarding__button">
            <Button
              label="이전"
              size="large"
              severity="contrast"
              outlined
              @click="activateCallback('1')"
            />
            <Button label="다음" size="large" @click="activateCallback('3')" />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <h5 class="sb-onboarding__title">
            셀러 성공의 시작<br />
            맞춤형으로 든든하게 도와드릴게요.
          </h5>
          <div class="sb-onboarding-form">
            <div class="sb-onboarding-form-item">
              <div class="sb-onboarding-form-item-head">
                <div class="sb-onboarding-form-item-head__title">
                  현재 오픈마켓에 입점하여 사업 중이신 경우, 체크해주세요.
                </div>
                <p>여러개 선택 가능해요.</p>
              </div>
              <div class="sb-onboarding-form-item-body">
                <dl>
                  <dt>국내</dt>
                  <dd>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div
                          class="sb-checkbox-item"
                          v-for="item in domesticOptions"
                          :key="item.value"
                        >
                          <Checkbox
                            v-model="selectedPlatforms"
                            :inputId="item.id"
                            :value="item.value"
                          />
                          <label :for="item.id">{{ item.label }}</label>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt>해외</dt>
                  <dd>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div
                          class="sb-checkbox-item"
                          v-for="item in overseasOptions"
                          :key="item.value"
                        >
                          <Checkbox
                            v-model="selectedPlatforms"
                            :inputId="item.id"
                            :value="item.value"
                          />
                          <label :for="item.id">{{ item.label }}</label>
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="sb-caution">
            <ul>
              <li>
                셀러 정보 등록은 지금 안하셔도 [환경설정 >
                <NuxtLink to="/">셀러 정보 관리</NuxtLink>] 메뉴에서 언제든지
                등록 하실 수 있으세요.
              </li>
            </ul>
          </div>
          <div class="sb-onboarding__button">
            <Button
              label="이전"
              size="large"
              severity="contrast"
              outlined
              @click="activateCallback('2')"
            />
            <Button label="완료" size="large" />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>

<script setup>
const onboardingContainer = ref(null);
const currentStep = ref('2');

const selectedLicense = ref('Y');
const selectedInterests = ref([]);
const selectedProducts = ref([]);
const selectedRevenue = ref([]);
const selectedTargets = ref([]);
const selectedAges = ref([]);
const selectedRegions = ref([]);
const selectedConcerns = ref([]);
const customConcernText = ref('');
const selectedPlatforms = ref([]);

const userTypes = ref('individual');
const marketingConsent = ref('N');
const consentMethods = ref([]);

const interestOptions = [
  { id: 'interest-health', label: '건강기능 식품', value: 'health' },
  { id: 'interest-inner', label: '이너뷰티', value: 'innerbeauty' },
  { id: 'interest-cos', label: '코스메틱', value: 'cosmetic' },
  { id: 'interest-fashion', label: '패션', value: 'fashion' },
  { id: 'interest-pet', label: '펫', value: 'pet' },
  { id: 'interest-etc', label: '기타', value: 'etc' },
  { id: 'interest-none', label: '없음', value: 'none' },
];

const sellOptions = [
  { id: 'sell-health', label: '건강기능 식품', value: 'health' },
  { id: 'sell-inner', label: '이너뷰티', value: 'innerbeauty' },
  { id: 'sell-cos', label: '코스메틱', value: 'cosmetic' },
  { id: 'sell-fashion', label: '패션', value: 'fashion' },
  { id: 'sell-pet', label: '펫', value: 'pet' },
  { id: 'sell-etc', label: '기타', value: 'etc' },
];

const revenueOptions = [
  { id: 'rev-under1', label: '100만원 미만', value: 'under1' },
  { id: 'rev-over1', label: '100만원 이상', value: 'over1' },
  { id: 'rev-over5', label: '500만원 이상', value: 'over5' },
  { id: 'rev-over10', label: '1,000만원 이상', value: 'over10' },
  { id: 'rev-over50', label: '5,000만원 이상', value: 'over50' },
  { id: 'rev-over100', label: '1억원 이상', value: 'over100' },
];

const targetOptions = [
  { id: 'target-all', label: '전체', value: 'all' },
  { id: 'target-man', label: '남성', value: 'man' },
  { id: 'target-woman', label: '여성', value: 'woman' },
];

const ageOptions = [
  { id: 'age-10', label: '10대', value: '10' },
  { id: 'age-20', label: '20대', value: '20' },
  { id: 'age-30', label: '30대', value: '30' },
  { id: 'age-40', label: '40대', value: '40' },
  { id: 'age-50', label: '50대', value: '50' },
  { id: 'age-60', label: '60대 이상', value: '60' },
];

const regionOptions = [
  { id: 'reg-china', label: '중국', value: 'china' },
  { id: 'reg-japan', label: '일본', value: 'japan' },
  { id: 'reg-viet', label: '베트남', value: 'vietnam' },
  { id: 'reg-asia', label: '동남아시아', value: 'asia' },
  { id: 'reg-north', label: '북미권', value: 'north' },
  { id: 'reg-south', label: '남미권', value: 'south' },
  { id: 'reg-eur', label: '유럽', value: 'europe' },
  { id: 'reg-afr', label: '아프리카', value: 'africa' },
  { id: 'reg-kor', label: '국내만 해당', value: 'korea' },
];

const concernOptions = [
  { id: 'con-item', label: '판매 아이템 발굴', value: 'item' },
  { id: 'con-biz', label: '사업자 등록 절차', value: 'biz' },
  { id: 'con-fund', label: '초기 창업 자금', value: 'fund' },
  { id: 'con-side', label: '직장인 부업 병행', value: 'side' },
  { id: 'con-tax', label: '세금/행정 절차', value: 'tax' },
  { id: 'con-custom', label: '직접 입력', value: 'custom' },
];

const domesticOptions = [
  { id: 'dom-naver', label: '네이버 쇼핑', value: 'naver' },
  { id: 'dom-coupang', label: '쿠팡', value: 'coupang' },
  { id: 'dom-11', label: '11번가', value: '11st' },
  { id: 'dom-auction', label: '옥션', value: 'auction' },
  { id: 'dom-gmarket', label: 'G마켓', value: 'gmarket' },
  { id: 'dom-musinsa', label: '무신사', value: 'musinsa' },
  { id: 'dom-29cm', label: '29CM', value: '29cm' },
  { id: 'dom-kurly', label: '컬리', value: 'kurly' },
  { id: 'dom-olive', label: '올리브영', value: 'oliveyoung' },
  { id: 'dom-toss', label: '토스', value: 'toss' },
  { id: 'dom-round', label: '라운드', value: 'round' },
  { id: 'dom-etc', label: '기타(국내 오픈 마켓)', value: 'dom-etc' },
];

const overseasOptions = [
  { id: 'over-amazon', label: '아마존', value: 'amazon' },
  { id: 'over-ali', label: '알리', value: 'ali' },
  { id: 'over-temu', label: '테무', value: 'temu' },
  { id: 'over-shein', label: '쉬인', value: 'shein' },
  { id: 'over-rakuten', label: '라쿠텐', value: 'rakuten' },
  { id: 'over-iherb', label: '아이허브', value: 'iherb' },
  { id: 'over-holland', label: '홀란드앤버렛', value: 'holland' },
  { id: 'over-etc', label: '기타', value: 'over-etc' },
];

//
const isEditingPhone = ref(false);
const enablePhoneEdit = () => {
  isEditingPhone.value = true;
};
const disablePhoneEdit = () => {
  isEditingPhone.value = false;
};

const isEditingEmail = ref(false);
const enableEmailEdit = () => {
  isEditingEmail.value = true;
};
const disableEmailEdit = () => {
  isEditingEmail.value = false;
};

watch(currentStep, () => {
  if (onboardingContainer.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

watch(selectedInterests, (newValue, oldValue) => {
  const noneValue = 'none';

  if (newValue.includes(noneValue) && !oldValue.includes(noneValue)) {
    selectedInterests.value = [noneValue];
  } else if (newValue.includes(noneValue) && newValue.length > 1) {
    selectedInterests.value = newValue.filter((val) => val !== noneValue);
  }
});

watch(selectedConcerns, (newValue, oldValue) => {
  const customValue = 'custom';

  if (oldValue.includes(customValue) && !newValue.includes(customValue)) {
    customConcernText.value = '';
  }
});

watch(selectedRegions, (newValue, oldValue) => {
  const koreaOnly = 'korea';

  if (newValue.includes(koreaOnly) && !oldValue.includes(koreaOnly)) {
    selectedRegions.value = [koreaOnly];
  } else if (newValue.includes(koreaOnly) && newValue.length > 1) {
    selectedRegions.value = newValue.filter((val) => val !== koreaOnly);
  }
});
</script>
