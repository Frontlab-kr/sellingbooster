<template>
  <ConfirmDialog></ConfirmDialog>
  <div class="sb-guide">
    <h2>Alert</h2>
    <div>
      <Button @click="confirm1()" label="alert01" />
      <Button @click="confirm2()" label="alert02" />
    </div>
  </div>
</template>

<script setup>
import { useConfirm } from 'primevue/useconfirm';

const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    header: '제목',
    message: '내용이 들어갑니다.',
    rejectProps: {
      label: '취소',
      severity: 'neutral',
      outlined: true,
    },
    acceptProps: {
      label: '등록',
    },
  });
};

const confirm2 = () => {
  confirm.require({
    message: '내용이 들어갑니다.\n 공지, 텍스트가 들어갑니다.',
    rejectProps: {
      label: '취소',
      severity: 'neutral',
      outlined: true,
    },
    acceptProps: {
      label: '등록',
    },
  });
};
</script>
