<template>
  <div class="sb-alarm">
    <h5 class="sb-alarm__title">
      중요한 소식, 특별한 혜택<br />
      원하는 채널로 받아보세요.
    </h5>

    <div class="sb-alarm__contents">
      <div class="sb-alarm-agree">
        <label>마케팅 정보 수신 동의<strong>*</strong></label>
        <div class="sb-alarm-agree__text">
          <Message size="small" severity="neutral" variant="simple">
            마케팅 정보를 수신하시면 사업에 도움이 되는 다양한 정보를 받아 보실
            수 있습니다.<br />
            미동의 시 일부 핵심 서비스가 제한 될 수 있으며,<br />
            마케팅 정보 수신 동의는 [환경 설정 > 알림 설정]에서 변경할 수
            있습니다.
          </Message>
        </div>
        <div class="sb-radio">
          <div class="sb-radio-item">
            <RadioButton
              v-model="radioNotification"
              inputId="radioNotificationNo"
              name="radioNotification"
              value="radioNotificationNo"
            />
            <label for="radioNotificationNo">지금은 받지 않을게요.</label>
          </div>
          <div class="sb-radio-item">
            <RadioButton
              v-model="radioNotification"
              inputId="radioNotificationYes"
              name="radioNotification"
              value="radioNotificationYes"
            />
            <label for="radioNotificationYes">알림 받을게요.</label>
          </div>
        </div>
        <div
          class="sb-alarm-agree__checkbox"
          v-if="radioNotification === 'radioNotificationYes'"
        >
          <div class="sb-checkbox">
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-mail"
                value="mail"
              />
              <label for="check-mail"> 메일 </label>
            </div>
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-sms"
                value="sms"
              />
              <label for="check-sms"> 문자 </label>
            </div>
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-kakao"
                value="kakao"
              />
              <label for="check-kakao"> 알림톡 </label>
            </div>
            <div class="sb-checkbox-item">
              <Checkbox
                v-model="selectedServices"
                inputId="check-push"
                value="push"
              />
              <label for="check-push"> 앱푸시 </label>
            </div>
          </div>
        </div>
        <div class="sb-alarm-agree__button">
          <Button
            label="저장하기"
            severity="primary"
            outlined
            @click="confirm1()"
          />
        </div>
      </div>
      <div class="sb-tab">
        <Button label="전체(82개)" variant="text" class="active" />
        <Button label="시스템" variant="text" />
        <Button label="공지" variant="text" />
        <Button label="서비스" variant="text" />
        <Button label="긴급" variant="text" />
        <Button label="중요" variant="text" />
      </div>
      <div class="sb-alarm-sort">
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
      <div class="sb-alarm-list">
        <NuxtLink
          v-for="item in alarmItems"
          :key="item.id"
          to="/setting/seller/alarm/view"
          class="sb-alarm-list-item"
        >
          <div class="sb-alarm-list-item-head">
            <Badge :value="item.category" :severity="item.severity"></Badge>
            <p>{{ item.date }}</p>
          </div>
          <div class="sb-alarm-list-item-title">
            <p>{{ item.title }}</p>
          </div>
        </NuxtLink>
      </div>
      <div class="sb-alarm-list-button">
        <Button severity="contrast" outlined>
          <span class="p-button-label">더보기(16/83)</span>
          <IconArrowAchevronDown class="ico-arrow-achevron-down" />
        </Button>
      </div>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';

//alert
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: '저장하시겠습니까?',
    rejectProps: {
      label: '아니오',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '예',
    },
  });
};

//sort
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '댓글 수' },
  { name: '좋아요 수' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

//알림 수신 동의
const radioNotification = ref('radioNotificationNo');
const selectedServices = ref([]);

//list
const alarmItems = ref([
  {
    id: 1,
    category: '공지',
    severity: 'warn',
    date: '2026.01.14',
    title: '2026.03.071(월) 시스템 정기 점검 안내',
  },
  {
    id: 2,
    category: '서비스',
    severity: 'info',
    date: '2026.01.14',
    title: '2026.03.071(월) 시스템 정기 점검 안내',
  },
  {
    id: 3,
    category: '시스템',
    severity: 'secondary',
    date: '2026.01.14',
    title: 'SNS 계정 회원가입 방법',
  },
  {
    id: 4,
    category: '서비스',
    severity: 'info',
    date: '2026.01.14',
    title: '이용제한 게시물 유형 안내',
  },
  {
    id: 5,
    category: '서비스',
    severity: 'info',
    date: '2026.01.14',
    title: '셀링부스터 멤버십 혜택 업그레이드 방법 및 가격 안내',
  },
  {
    id: 6,
    category: '공지',
    severity: 'warn',
    date: '2026.01.14',
    title: 'SNS 계정 회원가입 방법',
  },
  {
    id: 7,
    category: '시스템',
    severity: 'secondary',
    date: '2026.01.14',
    title: '[긴급] 이용제한 게시물 유형 안내',
  },
  {
    id: 8,
    category: '공지',
    severity: 'warn',
    date: '2026.01.14',
    title: '셀링부스터 멤버십 혜택 업그레이드 방법 및 가격 안내',
  },
  {
    id: 9,
    category: '시스템',
    severity: 'secondary',
    date: '2026.01.14',
    title: '이용제한 게시물 유형 안내',
  },
  {
    id: 10,
    category: '서비스',
    severity: 'info',
    date: '2026.01.14',
    title: '[긴급] 이용제한 게시물 유형 안내',
  },
]);
</script>
