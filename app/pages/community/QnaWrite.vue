<template>
  <div class="sb-qna-write">
    <div class="sb-form">
      <div class="sb-form-item">
        <label>문의 유형</label>
        <div class="sb-form-item-content">
          <div class="sb-qna-write-category">
            <div class="sb-radio">
              <div class="sb-radio-item">
                <RadioButton
                  v-model="radioCategory"
                  inputId="radioCategory01"
                  name="radioCategory"
                  value="radioCategory01"
                />
                <label for="radioCategory01">
                  <Icon name="sb:16-login" class="ico-16-login" />
                  로그인 문의
                </label>
              </div>
              <div class="sb-radio-item">
                <RadioButton
                  v-model="radioCategory"
                  inputId="radioCategory02"
                  name="radioCategory"
                  value="radioCategory02"
                />
                <label for="radioCategory02">
                  <Icon name="sb:16-smiley-happy" class="ico-16-smiley-happy" />
                  서비스 이용 문의
                </label>
              </div>
              <div class="sb-radio-item">
                <RadioButton
                  v-model="radioCategory"
                  inputId="radioCategory03"
                  name="radioCategory"
                  value="radioCategory03"
                />
                <label for="radioCategory03">
                  <Icon name="sb:16-profile" class="ico-16-profile" />
                  회원 문의
                </label>
              </div>
              <div class="sb-radio-item">
                <RadioButton
                  v-model="radioCategory"
                  inputId="radioCategory04"
                  name="radioCategory"
                  value="radioCategory04"
                />
                <label for="radioCategory04">
                  <Icon name="sb:16-card" class="ico-16-card" />
                  결제/환불 문의
                </label>
              </div>
              <div class="sb-radio-item">
                <RadioButton
                  v-model="radioCategory"
                  inputId="radioCategory05"
                  name="radioCategory"
                  value="radioCategory05"
                />
                <label for="radioCategory05">
                  <Icon name="sb:16-alert-circle" class="ico-16-alert-circle" />
                  서비스 탈퇴 문의
                </label>
              </div>
              <div class="sb-radio-item">
                <RadioButton
                  v-model="radioCategory"
                  inputId="radioCategory06"
                  name="radioCategory"
                  value="radioCategory06"
                />
                <label for="radioCategory06">
                  <Icon name="sb:16-document" class="ico-16-document" />
                  기타 문의
                </label>
              </div>
            </div>
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
          />
        </div>
      </div>
      <div class="sb-form-item">
        <label>파일 첨부</label>
        <div class="sb-form-item-content">
          <p>※ 첨부파일은 50MB 이내 1개만 등록 가능합니다.</p>
          <p>※ 아래에 안내된 파일 형식만 첨부가 가능합니다.</p>
          <ul>
            <li>이미지 : jpg/jpeg, png, gif, webp, tiff, bmp, svg</li>
            <li>동영상 : mp4, avi, mov, wmv</li>
          </ul>
        </div>
      </div>
      <div class="sb-form-item">
        <label>답변 알림 선택</label>
        <div class="sb-form-item-content">
          <div class="sb-radio">
            <div class="sb-radio-item">
              <RadioButton
                v-model="radioNotification"
                inputId="radioNotificationYes"
                name="radioNotification"
                value="radioNotificationYes"
              />
              <label for="radioNotificationYes">알림 받지 않기</label>
            </div>
            <div class="sb-radio-item">
              <RadioButton
                v-model="radioNotification"
                inputId="radioNotificationNo"
                name="radioNotification"
                value="radioNotificationNo"
              />
              <label for="radioNotificationNo">알림 받기</label>
            </div>
          </div>
          <p>
            ※ 알림 수신 설정이 되어 있지 않으면 [환경설정 > 알림 설정] 메뉴에서
            알림 수신을 허용해주세요.
          </p>
          <p>※ 알림 수신이 허용되어 있지 않으면 알림이 발송되지 않습니다.</p>
        </div>
      </div>
      <div class="sb-form-button">
        <Button label="취소" outlined />
        <Button label="등록" />
      </div>
    </div>
    <div class="sb-caution">
      <div class="sb-caution__title">작성시 주의 사항</div>
      <ul>
        <li>
          서비스와 관련이 없는 비방/욕설/명예훼손성 게시글 및 광고글 등 부적절한
          게시글 등록 시 글쓰기 제한 및 게시글이 삭제 조치 될 수 있습니다.
        </li>
        <li>
          전화번호, 이메일 등 개인정보가 포함된 글 작성이 필요한 경우 노출에
          주의 하시기 바랍니다.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const textarea01 = ref('');

//
const radioNotification = ref('radioNotificationYes');
</script>
