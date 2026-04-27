<template>
  <SbMobileInfo />
  <div class="sb-team">
    <div class="sb-team-head">
      <h5>한눈에 파악하고 한 번에 관리하는 팀 워크 스페이스</h5>
    </div>
    <div class="sb-team-workspace">
      <div class="sb-team-workspace-head">
        <strong>팀 워크스페이스를 시작해보세요.</strong>
        <div class="sb-team-workspace-head-form">
          <div v-if="!isEditMode" class="sb-team-workspace-head-form__text">
            <p>
              {{
                workspaceDescription ||
                '워크스페이스 30자 이내의 설명이 노출됩니다.'
              }}
            </p>
            <Button @click="toggleEditMode">
              <template #icon>
                <IconSystemEdit class="ico-system-edit" />
              </template>
            </Button>
          </div>
          <div v-else class="sb-team-workspace-head-form__input">
            <SbInput
              v-model="tempDescription"
              cancel
              placeholder="워크스페이스 30자 이내의 설명 내용이 노출됩니다."
              @cancel="toggleEditMode"
            />
            <Button label="저장" severity="primary" @click="saveDescription" />
          </div>
        </div>
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
            <strong>2026년 4월 15일</strong>
          </dd>
          <span>신용카드 자동 결제</span>
        </dl>
      </div>
      <div class="sb-team-workspace-list">
        <div class="sb-team-workspace-list-head">
          <strong>멤버 초대</strong>
          <Button variant="text">
            <template #icon>
              <IconSystemPlus class="ico-system-plus" />
            </template>
          </Button>
        </div>
        <div class="sb-table">
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
              style="width: 156px"
            >
              <template #body="slotProps">
                <span
                  :class="slotProps.index === 0 ? 'text-primary font-bold' : ''"
                  v-html="slotProps.data.email"
                ></span>
              </template>
            </Column>

            <Column
              field="joinedAt"
              header="가입일"
              bodyClass="text-center"
              style="width: 156px"
            >
              <template #body="{ data }">
                <div class="date-container">
                  <span>{{ data.joinedAt.split(' ')[0] }}</span
                  ><br />
                  <span class="time-text">{{
                    data.joinedAt.split(' ')[1]
                  }}</span>
                </div>
              </template>
            </Column>

            <Column
              field="role"
              header="구분"
              bodyClass="text-center"
              style="width: 156px"
            >
              <template #body="{ data }">
                <div v-if="data.isOwner">
                  <span
                    :class="[
                      'font-bold',
                      data.role.includes('소유권 이전')
                        ? 'text-danger'
                        : 'text-primary',
                    ]"
                  >
                    {{ data.role }}
                  </span>
                </div>
                <Select
                  v-else
                  v-model="data.role"
                  :options="roleOptions"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="권한 선택"
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
              </template>
            </Column>

            <Column
              field="isOwner"
              header="관리"
              bodyClass="text-center"
              style="width: 156px"
            >
              <template #body="{ data }">
                <div
                  v-if="data.isOwner && data.role.includes('소유권 이전')"
                  class="sb-table-body-owner"
                >
                  <Badge value="취소하기" severity="contrast"></Badge>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemTrash class="ico-system-trash" />
                    </template>
                  </Button>
                </div>

                <div v-else-if="!data.isOwner" class="sb-table-body-owner">
                  <Badge value="권한 변경" severity="secondary"></Badge>
                  <Button variant="text">
                    <template #icon>
                      <IconSystemTrash class="ico-system-trash" />
                    </template>
                  </Button>
                </div>

                <span v-else>-</span>
              </template>
            </Column>

            <template #empty>
              <div class="sb-nodata">
                <IconIllustrationSmile class="ico-illustration-smile" />
                <div class="sb-nodata__text">
                  <p>
                    등록된 멤버가 없습니다.<br />
                    새로운 멤버를 초대해보세요.
                  </p>
                </div>
              </div>
            </template>
          </DataTable>
        </div>
        <SbPaginator />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconSystemPlus from '@/assets/icons/system/plus.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';

const isEditMode = ref(false);
const workspaceDescription = ref('워크스페이 30자 이내의 설명이 노출됩니다.');
const tempDescription = ref(''); // 수정 중 취소를 대비한 임시 변수

const toggleEditMode = () => {
  if (!isEditMode.value) {
    tempDescription.value = workspaceDescription.value; // 모드 진입 시 현재 값 복사
  }
  isEditMode.value = !isEditMode.value;
};

const saveDescription = () => {
  workspaceDescription.value = tempDescription.value; // 저장 시 반영
  isEditMode.value = false;
};

// 멤버 데이터 (v-model 연결을 위해 role을 value 값으로 관리 권장)
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

// 권한 옵션 데이터
const roleOptions = ref([
  { label: '멤버(편집 가능)', value: '멤버(편집 가능)' },
  { label: '멤버(뷰어만 가능)', value: '멤버(뷰어만 가능)' },
]);
</script>
