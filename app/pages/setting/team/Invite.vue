<template>
  <div class="p-dialog-inner">
    <div class="sb-dialog-workspace">
      <h6 class="p-dialog-title">워크스페이스 멤버 초대</h6>
      <div class="sb-dialog-workspace-head">
        <p>※ 워크스페이스 멤버는 최대 5인까지 구성 가능</p>
        <p>
          ※ 초대 메일 유효 시간은 발송 시점부터 12시간 입니다. 이후 초대 메일은
          무효화 됩니다.
        </p>
        <p>※ 초대 메일 유효 시간 만료시 다시 초대하셔야 합니다.</p>
      </div>
      <div class="sb-tab">
        <Button
          label="이메일 초대"
          variant="text"
          :class="{ active: activeTab === 'email' }"
          @click="activeTab = 'email'"
        />
        <Button
          label="링크 초대"
          variant="text"
          :class="{ active: activeTab === 'link' }"
          @click="activeTab = 'link'"
        />
      </div>
      <div v-if="activeTab === 'email'">
        <div class="sb-table sb-table--hover-none">
          <DataTable
            v-scroll-end
            :value="memberList"
            responsiveLayout="scroll"
            removableSort
            scrollable
          >
            <Column
              field="email"
              header="이메일 주소"
              bodyClass="text-center"
              style="width: 530px"
            >
              <template #body="slotProps">
                <SbInput
                  placeholder="이메일 주소를 입력해주세요."
                  class="w-full"
                />
                <!-- <Message size="small" severity="error" variant="simple">
                  이메일 형식이 아닙니다. 다시 입력해주세요.
                </Message> -->
              </template>
            </Column>

            <Column
              field="role"
              header="역할"
              bodyClass="text-center"
              style="width: 190px"
            >
              <template #body="{ data }">
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="구분 선택"
                  class="w-full"
                  style="min-width: 190px"
                />
              </template>
            </Column>
          </DataTable>
        </div>
        <div class="sb-dialog-workspace-button">
          <Button severity="primary" label="초대 메일 발송" />
        </div>
      </div>
      <div v-else>
        <div class="sb-dialog-workspace-link">
          <div class="sb-dialog-workspace-link-head">
            <strong>초대 링크</strong>
            <div class="sb-dialog-workspace-link-head__switch">
              <p>초대 링크 활성화</p>
              <ToggleSwitch v-model="checked" />
            </div>
          </div>
          <div class="sb-dialog-workspace-link-item">
            <div class="sb-dialog-workspace-link-item__input">
              <SbInput
                placeholder="https://www.sellboo.hectodata.co.kr/workidkr/workidkr/workidkr/workid"
                time="11:59:59"
                class="w-full"
              />
            </div>
            <Button label="복사" severity="primary" outlined />
          </div>
        </div>
        <div class="sb-dialog-workspace-button">
          <Button severity="primary" label="초대 링크 재 생성" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const activeTab = ref('email');

const searchKeyword = ref('');

//datepicker
const dates = ref(null);
const datePickerRef = ref(null);

const onDateSelect = async () => {
  if (
    Array.isArray(dates.value) &&
    dates.value.length === 2 &&
    dates.value[1]
  ) {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 400));

    const dp = datePickerRef.value;
    if (dp) {
      dp.overlayVisible = false;
      if (typeof dp.hide === 'function') {
        dp.hide();
      }
    }
  }
};

//
const selectedValue = ref();
const selectedOption = ref([
  { name: '멤버(편집 가능)' },
  { name: '멤버(뷰어만 가능)' },
]);

const memberList = ref([
  {
    email: 'selling@hecto.co.kr',
    joinedAt: '2026.03.31 18:02:35',
    role: '소유자(모든 권한)',
    isOwner: true,
  },
  {
    email: 'selling@hecto.co.kr',
    joinedAt: '2026.03.31 18:02:35',
    role: '소유권 이전 진행 중',
    isOwner: true,
  },
  {
    email: 'selling@hecto.co.kr',
    joinedAt: '2026.03.31 18:02:35',
    role: '멤버(뷰어만 가능)',
    isOwner: false,
  },
  {
    email: 'selling@hecto.co.kr',
    joinedAt: '2026.03.31 18:02:35',
    role: '멤버(편집 가능)',
    isOwner: false,
  },
  {
    email: 'selling@hecto.co.kr',
    joinedAt: '2026.03.31 18:02:35',
    role: '멤버(편집 가능)',
    isOwner: false,
  },
]);
</script>
