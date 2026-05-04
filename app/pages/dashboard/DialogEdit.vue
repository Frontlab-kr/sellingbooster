<template>
  <div class="p-dialog-inner">
    <h6 class="p-dialog-title">대시보드 콘텐츠 추가/삭제</h6>
    <div class="sb-dialog-dashboard-edit">
      <div class="sb-dialog-dashboard-edit-contents">
        <div class="sb-dialog-dashboard-edit-preview">
          <div class="sb-dialog-dashboard-edit-preview-header">
            GNB + Util Menu
          </div>
          <div class="sb-dialog-dashboard-edit-preview-body">
            <div class="sb-dialog-dashboard-edit-preview-lnb">LNB</div>
            <div class="sb-dialog-dashboard-edit-preview-contents">
              <div class="sb-dialog-dashboard-edit-preview-item">
                <p>알림</p>
              </div>
              <div class="sb-dialog-dashboard-edit-preview-group">
                <div class="sb-dialog-dashboard-edit-preview-item">
                  <p>현재 매출 기록</p>
                </div>
                <div class="sb-dialog-dashboard-edit-preview-item">
                  <p>셀링 플래너</p>
                </div>
              </div>
              <draggable
                v-model="draggableWidgets"
                item-key="id"
                :animation="400"
                class="sb-dialog-dashboard-edit-preview-drag"
                ghost-class="ghost"
                drag-class="drag"
                handle=".sb-dialog-dashboard-edit-preview-item"
              >
                <template #item="{ element }">
                  <div
                    :class="['drag-item', { 'width-full': element.fullWidth }]"
                  >
                    <div class="sb-dialog-dashboard-edit-preview-item">
                      <p>{{ element.title }}</p>
                      <div
                        class="sb-dialog-dashboard-edit-preview-item__button"
                      >
                        <Button
                          variant="text"
                          @click="toggleVisible(element.id)"
                        >
                          <template #icon>
                            <IconSystemClose class="ico-system-close" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </div>
                </template>
                <template #footer>
                  <div v-if="isInvalidCount" class="drag-item is-placeholder">
                    <div class="sb-dialog-dashboard-edit-preview-item is-dummy">
                      관심 콘텐츠를 추가해주세요.
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
          </div>
        </div>

        <aside class="sb-dialog-dashboard-edit-sidebar">
          <strong>콘텐츠 노출 관리</strong>
          <div class="sb-dialog-dashboard-edit-sidebar-head">
            <ul>
              <li>콘텐츠의 순서와 구성을 자유롭게 관리해 보세요.</li>
              <li>항목을 체크하면 대시보드에 선택 콘텐츠가 노출되요.</li>
              <li>2단 영역은 콘텐츠 2개를 등록해야 설정이 완료되요.</li>
              <li>마우스로 드래그해서 원하는 위치에 놓으세요.</li>
            </ul>
          </div>
          <div class="sb-dialog-dashboard-edit-sidebar-list">
            <div class="sb-checkbox">
              <template v-for="widget in inactiveWidgets" :key="widget.id">
                <div
                  class="sb-checkbox-item"
                  :class="widget.fullWidth ? 'is-full' : 'is-half'"
                  v-if="widget.id !== 'banner'"
                >
                  <Checkbox
                    v-model="widget.visible"
                    :binary="true"
                    :inputId="'chk-' + widget.id"
                  />
                  <label :for="'chk-' + widget.id">{{ widget.title }}</label>
                </div>
              </template>

              <div
                v-if="inactiveWidgets.length === 0"
                class="sb-checkbox-empty"
              >
                추가할 수 있는 모든 컨텐츠가 노출 중입니다.
              </div>
            </div>
          </div>

          <div class="sb-dialog-dashboard-edit-sidebar-button">
            <Button variant="text" @click="handleReset">
              <IconSystemRefresh class="ico-system-refresh" />
              <span class="p-button-label">설정 초기화</span>
            </Button>
          </div>
        </aside>
      </div>
      <div class="sb-dialog-dashboard-edit-footer">
        <Button
          severity="primary"
          label="저장"
          :disabled="isInvalidCount"
          @click="handleSave"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconSystemRefresh from '@/assets/icons/system/refresh.svg?component';

const props = defineProps({
  initialData: { type: Array, required: true },
  defaultData: { type: Array, default: () => [] },
});

const emit = defineEmits(['save']);

const tempWidgets = ref(
  props.initialData ? JSON.parse(JSON.stringify(props.initialData)) : [],
);

// 1. 왼쪽: 체크된(visible: true) 항목들
const draggableWidgets = computed({
  get: () => tempWidgets.value.filter((w) => w.visible),
  set: (newOrder) => {
    const hiddenItems = tempWidgets.value.filter((w) => !w.visible);
    tempWidgets.value = [...newOrder, ...hiddenItems];
  },
});

// 2. 오른쪽: 미선택(visible: false) 상태인 항목들
const inactiveWidgets = computed(() => {
  return tempWidgets.value.filter((w) => !w.visible);
});

// ⭐ 추가된 로직: 2단 위젯(fullWidth가 false인 것)이 홀수인지 체크
const isInvalidCount = computed(() => {
  const halfWidthWidgets = tempWidgets.value.filter(
    (w) => w.visible && !w.fullWidth && w.id !== 'banner',
  );
  return halfWidthWidgets.length % 2 !== 0;
});

const toggleVisible = (id) => {
  const target = tempWidgets.value.find((w) => w.id === id);
  if (target) target.visible = false;
};

const handleReset = () => {
  tempWidgets.value = JSON.parse(JSON.stringify(props.defaultData));
};

const handleSave = () => {
  emit('save', tempWidgets.value);
};
</script>
