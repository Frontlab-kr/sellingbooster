<template>
  <div class="sb-alarm">
    <h5 class="sb-alarm__title">
      중요한 소식, 특별한 혜택<br />
      원하는 채널로 받아보세요.
    </h5>

    <div class="sb-alarm__contents">
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
      <div class="sb-nodata">
        <IconIllustrationSmile class="ico-illustration-smile" />
        <div class="sb-nodata__text">
          <p>알림이 없습니다.</p>
        </div>
      </div>
    </div>
  </div>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

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
    severity: 'secondary',
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
    severity: 'secondary',
    date: '2026.01.14',
    title: '이용제한 게시물 유형 안내',
  },
  {
    id: 5,
    category: '서비스',
    severity: 'secondary',
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
    severity: 'secondary',
    date: '2026.01.14',
    title: '[긴급] 이용제한 게시물 유형 안내',
  },
]);
</script>
