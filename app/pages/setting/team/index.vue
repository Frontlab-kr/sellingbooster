<template>
  <SbMobileInfo />
  <div class="sb-team">
    <div class="sb-team-head">
      <h5>한눈에 파악하고 한 번에 관리하는 팀 워크 스페이스</h5>
    </div>
    <div class="sb-team-workspace">
      <div class="sb-team-workspace__title">
        <strong>팀 워크스페이스를 시작해보세요.</strong>
        <p>워크스페이가 아직 생성되지 않았습니다.</p>
      </div>
      <div class="sb-team-workspace-status">
        <dl>
          <dt>전체 멤버 수</dt>
          <dd><strong>150명</strong>/300명</dd>
        </dl>
        <dl>
          <dt>전체 멤버 수</dt>
          <dd>
            <strong>35명</strong>
          </dd>
        </dl>
        <dl>
          <dt>전체 멤버 수</dt>
          <dd>등록된 결제 정보가 없습니다.</dd>
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
          @click="dialogWrite01 = true"
        />
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogWrite01" modal>
    <Write01 />
  </Dialog>
</template>

<script setup>
import Write01 from './Write01.vue';
import IconIllustrationEmptyNotice from '@/assets/icons/illustration/empty-notice.svg?component';

const dialogWrite01 = ref(true);
</script>
