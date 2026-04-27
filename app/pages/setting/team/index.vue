<template>
  <SbMobileInfo />
  <div class="flex gap-2 mb-4">
    <Button variant="text" @click="confirm1()" label="alert01" />
    <Button variant="text" @click="confirm2()" label="alert02" />
    <Button variant="text" @click="confirm3()" label="alert03" />
    <Button variant="text" @click="confirm4()" label="alert04" />
  </div>
  <div class="sb-team">
    <div class="sb-team-head">
      <h5>한눈에 파악하고 한 번에 관리하는 팀 워크 스페이스</h5>
    </div>
    <div class="sb-team-workspace">
      <div class="sb-team-workspace-head">
        <strong>팀 워크스페이스를 시작해보세요.</strong>
        <p>워크스페이가 아직 생성되지 않았습니다.</p>
      </div>
      <div class="sb-team-workspace-status">
        <dl>
          <dt>전체 멤버 수</dt>
          <dd><strong>150명</strong>/300명</dd>
        </dl>
        <dl>
          <dt>현재 유료 멤버 수</dt>
          <dd>
            <strong>35명</strong>
          </dd>
        </dl>
        <dl>
          <dt>다음 결제 예정일</dt>
          <dd>
            등록된 결제 정보가<br />
            없습니다.
          </dd>
        </dl>
      </div>
      <div class="sb-team-workspace-index">
        <IconIllustrationEmptyNotice class="ico-illustration-empty-notice" />
        <p>
          효율적인 관리의 시작,<br />
          함께일 때 더 강력해지는 팀스페이스!<br />
          지금 멤버를 구성하세요.
        </p>
        <Button
          label="워크스페이스 생성하기"
          severity="primary"
          outlined
          @click="dialogRegister = true"
        />
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogRegister" modal>
    <Register />
  </Dialog>

  <ConfirmDialog></ConfirmDialog>
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
import Register from './Register.vue';
import IconIllustrationEmptyNotice from '@/assets/icons/illustration/empty-notice.svg?component';

const dialogRegister = ref(false);

//alert
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: '초대 멤버의 이메일 주소 입력은\n검색을 통해서 선택 등록해주세요.',
    rejectClass: 'hidden',
    acceptProps: {
      label: '확인',
    },
  });
};
const confirm2 = () => {
  confirm.require({
    message: '워크스페이 설명을 수정하시겠습니까?',
    rejectProps: {
      label: '취소',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '확인',
    },
  });
};
const confirm3 = () => {
  confirm.require({
    message: '해당 멤버를 삭제하시겠습니까? ',
    rejectProps: {
      label: '취소',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '확인',
    },
  });
};
const confirm4 = () => {
  confirm.require({
    message:
      '초대 가능한 최대 인원 5명이 충족되어\n더 이상 초대는 불가능합니다.\n기존 멤버를 삭제 하시고 초대 하시기 바랍니다.',
    rejectProps: {
      label: '취소',
      severity: 'contrast',
      outlined: true,
    },
    acceptProps: {
      label: '확인',
    },
  });
};
</script>
