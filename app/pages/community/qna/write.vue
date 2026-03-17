<template>
  <div class="sb-qna-write">
    <div class="sb-form">
      <div class="sb-form-item">
        <label>문의 유형</label>
        <div class="sb-form-item-content">
          <div class="pc">
            <div class="sb-chip sb-chip--sm">
              <div class="sb-radio">
                <div
                  v-for="item in categories"
                  :key="item.id"
                  class="sb-radio-item"
                >
                  <RadioButton
                    v-model="radioCategory"
                    :inputId="item.id"
                    name="contactCategory"
                    :value="item.id"
                  />
                  <label :for="item.id">
                    <component :is="item.icon" :class="item.iconClass" />
                    {{ item.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mo">
            <Select
              v-model="selectedValue"
              :options="selectedOption"
              optionLabel="name"
              placeholder="신고 사유를 선택해주세요."
              class="w-full"
            />
          </div>
        </div>
      </div>
      <div class="sb-form-item">
        <label>문의 내용</label>
        <div class="sb-form-item-content">
          <SbTextarea
            v-model="textarea01"
            maxlength="1000"
            placeholder="최대 1,000자 이내로 문의 하실 내용을 입력해주세요."
            class="sb-textarea--simple"
          />
        </div>
      </div>
      <div class="sb-form-item">
        <label>파일 첨부</label>
        <div class="sb-form-item-content">
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
      </div>
      <div class="sb-form-item">
        <label>답변 알림 선택</label>
        <div class="sb-form-item-content">
          <div class="sb-radio">
            <div class="sb-radio-item">
              <RadioButton
                v-model="radioNotification"
                inputId="radioNotificationNo"
                name="radioNotification"
                value="radioNotificationNo"
              />
              <label for="radioNotificationNo">알림 받지 않기</label>
            </div>
            <div class="sb-radio-item">
              <RadioButton
                v-model="radioNotification"
                inputId="radioNotificationYes"
                name="radioNotification"
                value="radioNotificationYes"
              />
              <label for="radioNotificationYes">알림 받기</label>
            </div>
          </div>
          <div class="sb-form-item__text mt-2">
            <p>
              ※ 알림 수신 설정이 되어 있지 않으면 [환경설정 > 알림 설정]
              메뉴에서 알림 수신을 허용해주세요.
            </p>
            <p>※ 알림 수신이 허용되어 있지 않으면 알림이 발송되지 않습니다.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pc">
      <div class="sb-form-button">
        <Button label="취소" severity="contrast" outlined />
        <Button label="등록" />
      </div>
    </div>
    <div class="sb-caution">
      <div class="sb-caution__title">작성시 주의 사항</div>
      <ul>
        <li>
          서비스와 관련이 없는 비방, 욕설, 광고 등 부적절한 게시글은 예고 없이
          삭제되거나 서비스 이용이 제한될 수 있습니다.
        </li>
        <li>
          전화번호, 이메일 등 개인정보가 포함된 글 작성이 필요한 경우 노출에
          주의 하시기 바랍니다.
        </li>
      </ul>
    </div>
    <div class="mo">
      <div class="sb-form-button">
        <Button label="취소" size="large" severity="contrast" outlined />
        <Button label="등록" size="large" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, markRaw } from 'vue';

import IconEtcLogin from '@/assets/icons/etc/login.svg?component';
import IconEtcSmile from '@/assets/icons/etc/smile.svg?component';
import IconEtcProfile from '@/assets/icons/etc/profile.svg?component';
import IconEtcCard from '@/assets/icons/etc/card.svg?component';
import IconEtcAlertCircle from '@/assets/icons/etc/alert-circle.svg?component';
import IconEtcDocument from '@/assets/icons/etc/document.svg?component';

const radioCategory = ref('radioCategory01');
const categories = [
  {
    id: 'radioCategory01',
    label: '로그인 문의',
    icon: markRaw(IconEtcLogin),
    iconClass: 'ico-etc-login',
  },
  {
    id: 'radioCategory02',
    label: '서비스 이용 문의',
    icon: markRaw(IconEtcSmile),
    iconClass: 'ico-etc-smile',
  },
  {
    id: 'radioCategory03',
    label: '회원 문의',
    icon: markRaw(IconEtcProfile),
    iconClass: 'ico-etc-profile',
  },
  {
    id: 'radioCategory04',
    label: '결제/환불 문의',
    icon: markRaw(IconEtcCard),
    iconClass: 'ico-etc-card',
  },
  {
    id: 'radioCategory05',
    label: '서비스 탈퇴 문의',
    icon: markRaw(IconEtcAlertCircle),
    iconClass: 'ico-etc-alert-circle',
  },
  {
    id: 'radioCategory06',
    label: '기타 문의',
    icon: markRaw(IconEtcDocument),
    iconClass: 'ico-etc-document',
  },
];

const selectedValue = ref();
const selectedOption = ref([
  { name: '스팸홍보/도배글입니다.' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);

const textarea01 = ref('');

const radioNotification = ref('radioNotificationYes');
</script>
