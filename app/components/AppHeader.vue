<template>
  <AppHeaderMenu />

  <AppHeaderMobile />

  <AppHeaderMobileMenu />

  <Dialog v-model:visible="dialogMarketing" modal>
    <div class="p-dialog-inner">
      <h6 class="p-dialog-title">마케팅 정보 수집동의</h6>
      <div class="sb-dialog-marketing">
        <div class="sb-dialog-marketing__text">
          마케팅 정보를 수신하시면 사업에 도움이 되는 다양한 정보를 받아 보실 수
          있어요.<br />
          미동의 시 일부 핵심 서비스가 제한 될 수 있어요.
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
        <div class="sb-dialog-marketing__button">
          <Button label="저장하기" severity="primary" outlined />
        </div>
      </div>
    </div>
  </Dialog>

  <Dialog
    v-model:visible="dialogNotification"
    modal
    class="p-dialog--full sb-dialog-notification"
  >
    <div class="p-dialog-inner">
      <h6 class="p-dialog-title">
        알림함

        <Button variant="text" @click="openMarketing">
          <template #icon>
            <IconSystemSetting class="ico-system-setting" />
          </template>
        </Button>
      </h6>
      <div class="sb-dialog-notification-body">
        <div class="sb-dialog-notification-tab">
          <div class="sb-tab">
            <Button label="전체" variant="text" class="active" />
            <Button label="시스템" variant="text" />
            <Button label="공지" variant="text" />
            <Button label="서비스" variant="text" />
            <Button label="긴급" variant="text" />
            <Button label="중요" variant="text" />
          </div>
        </div>
        <div class="sb-dialog-notification-text">
          <p>최근 7일간의 알림</p>
        </div>
        <div class="sb-dialog-notification-list">
          <NuxtLink
            to="/"
            class="sb-dialog-notification-list-item"
            v-for="n in 10"
          >
            <div class="sb-dialog-notification-list-item__head">
              <Badge value="공지" severity="warn"></Badge>
              <!-- <Badge value="서비스" severity="secondary"></Badge>
                  <Badge value="시스템" severity="contrast"></Badge> -->
              <p>2026.02.01</p>
            </div>
            <div class="sb-dialog-notification-list-item__title">
              셀링부스터님은 1인 사업자로 2025년 2기 부가가치세 확정신고를 1월
              26일까지 하셔야 해요.셀링부스터님은 1인 사업자로 2025년 2기
              부가가치세 확정신고를 1월 26일까지 하셔야 해요.
            </div>
          </NuxtLink>
        </div>
        <div class="sb-dialog-notification-button">
          <Button severity="contrast" outlined>
            <span class="p-button-label">알람 더보기</span>
            <IconArrowAchevronRight class="ico-arrow-achevron-right" />
          </Button>
        </div>
      </div>
    </div>
  </Dialog>

  <AppSnb />
</template>

<script setup>
import IconSystemSetting from '@/assets/icons/system/setting.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

// dialog
const dialogMarketing = ref(false);
const dialogNotification = ref(false);

const openMarketing = () => {
  dialogMarketing.value = true;
};
const openNotification = () => {
  dialogNotification.value = true;
};

// marketing
const userTypes = ref('individual');
const marketingConsent = ref('N');
const consentMethods = ref([]);

provide('dialogControls', {
  openMarketing,
  openNotification,
});
</script>
