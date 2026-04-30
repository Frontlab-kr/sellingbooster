<template>
  <div class="dashboard-edit">
    <div class="edit-content-wrapper">
      <!-- 왼쪽: 드래그 미리보기 영역 -->
      <div class="preview-area">
        <div class="preview-header">
          <div class="gnb-util-mock">GNB + Util Menu</div>
        </div>
        <div class="preview-body">
          <div class="lnb-mock">LNB</div>
          <div class="content-mock">
            <!-- 고정 영역 -->
            <div class="fixed-item full">알림</div>
            <div class="fixed-group">
              <div class="fixed-item half">현재 매출 기록</div>
              <div class="fixed-item half">셀링 플래너</div>
            </div>

            <!-- 가변 영역: 현재 대시보드에 노출 중인 위젯들 -->
            <draggable
              v-model="draggableWidgets"
              item-key="id"
              class="drag-container"
              ghost-class="ghost"
              drag-class="drag"
              handle=".item-content"
            >
              <template #item="{ element }">
                <div
                  :class="['drag-item', { 'full-width': element.fullWidth }]"
                >
                  <div class="item-content">
                    <span class="title">{{ element.title }}</span>
                    <!-- 여기서 ✕를 누르면 다시 우측 리스트로 돌아갑니다 -->
                    <button
                      class="btn-close"
                      @click="toggleVisible(element.id)"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>

      <!-- 오른쪽: 미선택 위젯 추가 영역 -->
      <aside class="control-sidebar">
        <div class="sidebar-top">
          <div class="info-box">
            <h6>컨텐츠 노출 관리</h6>
            <ul>
              <li>목록에서 항목을 체크하면 대시보드에 추가됩니다.</li>
              <li>
                대시보드에 이미 노출 중인 항목은 목록에 표시되지 않습니다.
              </li>
              <li>마우스로 드래그해서 원하는 위치에 놓으세요.</li>
            </ul>
          </div>

          <!-- ⭐ 미선택 상태인 위젯들만 노출되는 리스트 -->
          <ul class="check-list">
            <template v-for="widget in inactiveWidgets" :key="widget.id">
              <li v-if="widget.id !== 'banner'" class="check-item">
                <Checkbox
                  v-model="widget.visible"
                  :binary="true"
                  :inputId="'chk-' + widget.id"
                />
                <label :for="'chk-' + widget.id" class="ml-2">{{
                  widget.title
                }}</label>
              </li>
            </template>
            <!-- 모든 항목이 선택되었을 때의 피드백 -->
            <li v-if="inactiveWidgets.length === 0" class="empty-msg">
              추가할 수 있는 모든 컨텐츠가 노출 중입니다.
            </li>
          </ul>
        </div>

        <div class="sidebar-bottom">
          <Button
            label="설정 초기화"
            icon="pi pi-refresh"
            variant="text"
            class="btn-reset"
            @click="handleReset"
          />
        </div>
      </aside>
    </div>

    <div class="edit-footer">
      <Button label="저장" class="btn-save" @click="handleSave" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps({
  initialData: { type: Array, required: true },
  defaultData: { type: Array, default: () => [] },
});

const emit = defineEmits(['save']);

const tempWidgets = ref(
  props.initialData ? JSON.parse(JSON.stringify(props.initialData)) : [],
);

// 1. 왼쪽: 체크된(visible: true) 항목들 (드래그 가능)
const draggableWidgets = computed({
  get: () => tempWidgets.value.filter((w) => w.visible),
  set: (newOrder) => {
    const hiddenItems = tempWidgets.value.filter((w) => !w.visible);
    tempWidgets.value = [...newOrder, ...hiddenItems];
  },
});

// 2. ⭐ 오른쪽: 미선택(visible: false) 상태인 항목들만 계산
const inactiveWidgets = computed(() => {
  return tempWidgets.value.filter((w) => !w.visible);
});

const toggleVisible = (id) => {
  const target = tempWidgets.value.find((w) => w.id === id);
  if (target) target.visible = false;
};

const handleReset = () => {
  if (confirm('대시보드 설정을 초기 상태로 되돌리시겠습니까?')) {
    tempWidgets.value = JSON.parse(JSON.stringify(props.defaultData));
  }
};

const handleSave = () => {
  emit('save', tempWidgets.value);
};
</script>

<style lang="scss" scoped>
/* 기존 스타일 유지 및 추가 */
.dashboard-edit {
  padding: 10px;
}
.edit-content-wrapper {
  display: flex;
  gap: 20px;
  min-height: 550px;
}
.preview-area {
  flex: 1;
  background: #f8faff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e2e8f0;
}
.gnb-util-mock {
  height: 40px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  margin-bottom: 12px;
  font-size: 12px;
}
.preview-body {
  display: flex;
  gap: 12px;
}
.lnb-mock {
  width: 50px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
}
.content-mock {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.fixed-item,
.drag-item {
  height: 54px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.fixed-item {
  border: 1px dashed #cbd5e1;
  color: #94a3b8;
  &.full {
    width: 100%;
  }
  &.half {
    flex: 1;
  }
}
.fixed-group {
  display: flex;
  gap: 10px;
}

.drag-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  min-height: 100px;
}
.drag-item {
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: grab;
  font-weight: 700;
  &.full-width {
    grid-column: span 2;
  }
  .item-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 15px;
    .title {
      color: #1e293b;
    }
  }
  .btn-close {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #ef4444;
    }
  }
}

.control-sidebar {
  width: 310px;
  background: #f1f5f9;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .info-box {
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 20px;
    h6 {
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 8px;
    }
    ul {
      padding-left: 15px;
      font-size: 11px;
      color: #64748b;
      li {
        margin-bottom: 4px;
        list-style: disc;
      }
    }
  }
}

.check-list {
  list-style: none;
  padding: 0;
  .check-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    label {
      font-weight: 600;
      font-size: 13.5px;
      cursor: pointer;
      color: #334155;
    }
  }
  .empty-msg {
    text-align: center;
    color: #94a3b8;
    font-size: 12px;
    padding: 20px 0;
    border: 1px dashed #cbd5e1;
    border-radius: 8px;
  }
}

.sidebar-bottom {
  margin-top: 20px;
  border-top: 1px solid #e2e8f0;
  padding-top: 15px;
  text-align: right;
  .btn-reset {
    color: #64748b;
    font-size: 13px;
    font-weight: 600;
  }
}
.edit-footer {
  margin-top: 25px;
  text-align: center;
  .btn-save {
    background-color: #4dbbc4;
    border: none;
    padding: 12px 60px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 700;
  }
}
.ghost {
  opacity: 0;
}
</style>
