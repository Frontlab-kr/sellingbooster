<template>
  <Button
    variant="text"
    @click="togglePopoverAnalyze"
    :class="{ active: popoverAnalyze?.visible }"
  >
    <span class="p-button-label">점검 결과 보기</span>
    <IconArrowAchevronDown class="ico-arrow-achevron-down" />
  </Button>

  <Popover ref="popoverAnalyze" class="sb-popover-analyze">
    <div class="sb-popover-analyze__title">상품명 분석 결과</div>
    <div class="sb-popover-analyze-list">
      <dl>
        <dt class="text-success">신지모루</dt>
        <dd>
          <faceSuccess class="text-success" />
          <p>브랜드명 구분이 효과적이에요.</p>
        </dd>
      </dl>
      <dl>
        <dt class="text-danger">28도</dt>
        <dd>
          <faceDanger class="text-danger" />
          <p>실제 검색 빈도가 낮은 키워드에요.</p>
        </dd>
      </dl>
      <dl>
        <dt class="text-success">9H</dt>
        <dd>
          <faceDanger class="text-success" />
          <p>최근 검색량이 증가한 키워드에요.</p>
        </dd>
      </dl>
      <dl>
        <dt class="text-danger">루버</dt>
        <dd>
          <faceDanger class="text-danger" />
          <p>실제 검색 빈도가 낮은 키워드에요.</p>
        </dd>
      </dl>
    </div>
    <div class="sb-popover-analyze-propose">
      <div class="sb-popover-analyze-propose__title">
        <IconSystemAi class="ico-system-ai" />
        제안 상품명
      </div>
      <div class="sb-popover-analyze-propose-item">
        <p>
          신지모루 AR저반사고화질 풀커버 지문인식 강화유리 액정보호필름
          갤럭시S26 울트라, 2매입 신지모루 AR저반사고화질 풀커버 지문인식
          강화유리 액정보호필름 갤럭시S26 울트라, 2매입 신지모루 AR저반사고화질
          풀커버 지문인식 강화유리 액정보호필름 갤럭시S26 울트라, 2매입
        </p>
        <Button variant="text">
          <template #icon>
            <IconSystemCopy class="ico-system-copy" @click="onCopyClick" />
          </template>
        </Button>
      </div>
      <div class="sb-popover-analyze-propose-item">
        <p>
          신지모루 AG저반사지문방지 풀커버 지문인식 강화유리 액정보호필름
          갤럭시S26 울트라, 2매입
        </p>
        <Button variant="text">
          <template #icon>
            <IconSystemCopy class="ico-system-copy" @click="onCopyClick" />
          </template>
        </Button>
      </div>
      <div class="sb-popover-analyze-propose-item">
        <p>신지모루 지문인식 강화유리 액정보호필름 갤럭시S26 울트라, 2매입</p>
        <Button variant="text">
          <template #icon>
            <IconSystemCopy class="ico-system-copy" @click="onCopyClick" />
          </template>
        </Button>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { ref } from 'vue';

import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import faceSuccess from '@/assets/icons/etc/face-success.svg';
import faceDanger from '@/assets/icons/etc/face-danger.svg';
import IconSystemAi from '@/assets/icons/system/ai.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';

const popoverAnalyze = ref();
const togglePopoverAnalyze = (event) => {
  popoverAnalyze.value.toggle(event);
};

const emit = defineEmits(['copy']);

const onCopyClick = () => {
  emit('copy');
};
</script>
