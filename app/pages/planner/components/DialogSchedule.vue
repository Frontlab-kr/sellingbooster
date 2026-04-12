<template>
  <div class="sb-dialog-schedule-head">
    <h3>03.25</h3>
    <p>수요일 일정</p>
  </div>
  <div class="sb-dialog-schedule-body">
    <ul>
      <li class="color-warn">
        <div class="sb-dialog-schedule-body__title">
          <p>원천세 및 지방세 납부 원천세 및 지방세 납부 원천세</p>
        </div>
      </li>
      <li class="color-contrast">
        <div class="sb-dialog-schedule-body__title">
          <p>광고 예산 점검 광고 예산 점검 광고 광고 예산 점검</p>
          <div class="sb-dialog-schedule-body__button">
            <Button variant="text">
              <template #icon>
                <IconSystemEdit class="ico-system-edit" />
              </template>
            </Button>
            <Button variant="text">
              <template #icon>
                <IconSystemDelete class="ico-system-delete" />
              </template>
            </Button>
          </div>
        </div>
        <div class="sb-dialog-schedule-body__text">
          <p>
            광고 예산 점검 광고 예산 점검 광고 광고 예산 점검 광고 예산 점검
            광고 광고 예산 점검
          </p>
          <p>
            광고 예산 점검 광고 예산 점검 광고 광고 예산 점검 광고 예산 점검
            광고 광고 예산 점검
          </p>
        </div>
      </li>
      <li class="color-danger">
        <div class="sb-dialog-schedule-body__title">
          <p>11번가 정산</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';
</script>
