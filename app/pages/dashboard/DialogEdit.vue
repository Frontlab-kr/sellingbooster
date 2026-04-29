<template>
  <div class="dashboard-edit">
    <div class="edit-content-wrapper">
      <div class="preview-area">
        <div class="preview-header">
          <div class="gnb-util-mock">GNB + Util Menu</div>
        </div>
        <div class="preview-body">
          <div class="lnb-mock">LNB</div>
          <div class="content-mock">
            <div class="fixed-item full">알림</div>
            <div class="fixed-group">
              <div class="fixed-item half">현재 매출 기록</div>
              <div class="fixed-item half">셀링 플래너</div>
            </div>

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
                    <button
                      class="btn-close"
                      @click="toggleVisible(element.id)"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </template>

              <template #footer>
                <div class="drag-item add-item full-width">
                  <div class="item-content">
                    <span>컨텐츠를 추가해주세요.</span>
                    <span class="plus-icon">+</span>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>

      <aside class="control-sidebar">
        <div class="info-box">
          <h6>컨텐츠 노출 관리</h6>
          <ul>
            <li>
              대시보드의 컨텐츠를 셀러님의 성향에 맞춰 순서 변경 및 추가/삭제
              관리 하실 수 있습니다.
            </li>
            <li>
              우측 항목을 체크 선택 하시면 대시보드에 해당 컨텐츠가 노출됩니다.
            </li>
            <li>마우스로 드래그해서 원하는 위치에 놓으세요.</li>
          </ul>
        </div>

        <ul class="check-list">
          <template v-for="widget in tempWidgets" :key="widget.id">
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
        </ul>
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
  initialData: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['save']);

// 부모 데이터를 복사하여 내부 편집 상태로 관리
const tempWidgets = ref(
  props.initialData ? JSON.parse(JSON.stringify(props.initialData)) : [],
);

// 드래그 리스트: 체크된 항목들만 노출
const draggableWidgets = computed({
  get: () => tempWidgets.value.filter((w) => w.visible),
  set: (newOrder) => {
    const hiddenItems = tempWidgets.value.filter((w) => !w.visible);
    tempWidgets.value = [...newOrder, ...hiddenItems];
  },
});

// 왼쪽 X 버튼 클릭 시 해제 로직
const toggleVisible = (id) => {
  const target = tempWidgets.value.find((w) => w.id === id);
  if (target) {
    target.visible = false;
  }
};

const handleSave = () => {
  emit('save', tempWidgets.value);
};
</script>

<style lang="scss" scoped>
/* 기존 스타일 그대로 유지 (제이드 그린 톤 버튼 및 드래그 그리드 포함) */
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
  }
}
.add-item {
  border: 1px dashed #6366f1;
  background-color: #f0f4ff;
  color: #4338ca;
  .plus-icon {
    font-size: 18px;
    margin-left: 6px;
  }
}
.control-sidebar {
  width: 310px;
  background: #f1f5f9;
  border-radius: 16px;
  padding: 20px;
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
