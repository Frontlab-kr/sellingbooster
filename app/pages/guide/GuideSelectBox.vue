<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Select box (선택 박스)</h1>
      <p>
        화면에 모든 옵션을 노출하기 어려운 경우에 사용하는 선택 컨트롤입니다.<br />
        선택지는 목록 형태로 노출되며, 선택 후에는 즉시 닫혀 현재 선택된 값만
        표시됩니다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>선택 박스 사이즈</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>Large (48px)</h6>
              <div class="sb-guide-item-box-item-contents">
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="신고 사유를 선택해주세요."
                />
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>Medium (40px)</h6>
              <div class="sb-guide-item-box-item-contents breakpoint-mo">
                <Select
                  v-model="selectedValue"
                  :options="selectedOption"
                  optionLabel="name"
                  placeholder="신고 사유를 선택해주세요."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Select box_light</h2>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 700px" />
                <col style="width: 700px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Large (48px)</th>
                  <th>Medium (40px)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Selected</h6>
                  </td>
                  <td>
                    <Select
                      v-model="selectedOption[0]"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <Select
                      v-model="selectedOption[0]"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      disabled
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="sb-guide-dark p-dark">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Select box_dark</h2>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 700px" />
                <col style="width: 700px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Large (48px)</th>
                  <th>Medium (40px)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      @show="onSelectShow"
                      @hide="onSelectHide"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      @show="onSelectShow"
                      @hide="onSelectHide"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Selected</h6>
                  </td>
                  <td>
                    <Select
                      v-model="selectedOption[0]"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      @show="onSelectShow"
                      @hide="onSelectHide"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <Select
                      v-model="selectedOption[0]"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      @show="onSelectShow"
                      @hide="onSelectHide"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      disabled
                      @show="onSelectShow"
                      @hide="onSelectHide"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <Select
                      v-model="selectedValue"
                      :options="selectedOption"
                      optionLabel="name"
                      placeholder="신고 사유를 선택해주세요."
                      disabled
                      @show="onSelectShow"
                      @hide="onSelectHide"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>선택 메뉴 타입</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>기본 타입</h6>
              <div class="sb-guide-item-box-item-contents">
                <Select
                  ref="selectRef"
                  v-model="selectedSort"
                  :options="selectedSortOption"
                  optionLabel="name"
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
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>아이콘 타입</h6>
              <div class="sb-guide-item-box-item-contents">
                <SbMenu :items="menuItems" />
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Select menu_light</h2>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 700px" />
                <col style="width: 700px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Dot icon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h6>Default</h6></td>
                  <td>
                    <Select
                      ref="selectRef"
                      v-model="selectedSort"
                      :options="selectedSortOption"
                      optionLabel="name"
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
                  </td>
                  <td>
                    <SbMenu :items="menuItems" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="sb-guide-dark p-dark">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Select menu_dark</h2>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 700px" />
                <col style="width: 700px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Dot icon</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h6>Default</h6></td>
                  <td>
                    <Select
                      ref="selectRef"
                      v-model="selectedSort"
                      :options="selectedSortOption"
                      optionLabel="name"
                      size="small"
                      class="p-select-text"
                      panelClass="p-select-overlay--text"
                      @show="onSelectShow"
                      @hide="onSelectHide"
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
                  </td>
                  <td>
                    <div @click="toggleDarkMode" ref="menuWrapper">
                      <SbMenu :items="menuItems" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

definePageMeta({
  layout: 'guide',
});

const onSelectShow = () => {
  document.documentElement.classList.add('p-dark');
};

const onSelectHide = () => {
  document.documentElement.classList.remove('p-dark');
};

const toggleDarkMode = () => {
  const el = document.documentElement;
  el.classList.add('p-dark');

  // 메뉴가 닫히는 것을 감지하기 위해 전역 클릭 이벤트 리스너를 일시적으로 등록
  const closeHandler = (e) => {
    // 클릭한 대상이 메뉴 밖이면 다시 라이트모드로
    if (!document.querySelector('.p-tieredmenu')?.contains(e.target)) {
      el.classList.remove('p-dark');
      document.removeEventListener('click', closeHandler);
    }
  };

  // 즉시 실행되면 본인 클릭에 닫히므로 다음 틱에 등록
  setTimeout(() => {
    document.addEventListener('click', closeHandler);
  }, 0);
};

//
const selectedValue = ref();
const selectedOption = ref([
  { name: '스팸홍보/도배글입니다.' },
  { name: '음란물입니다.' },
  { name: '불법정보를 포함하고 있습니다.' },
  { name: '청소년에게 유해한 내용입니다.' },
  { name: '욕설/혐오/차별적 표현입니다.' },
  { name: '개인정보 노출 게시물입니다.' },
  { name: '블퀘한 표현이 있습니다.' },
  { name: '기타 (기타 사유를 입력해주세요.)' },
]);

//
const selectRef = ref(null);
const selectedSortOption = ref([
  { name: '최신 작성순' },
  { name: '답변 대기' },
  { name: '답변 완료' },
]);
const selectedSort = ref(selectedSortOption.value[0]);

//
const menuItems = ref([
  {
    label: '수정',
    icon: IconSystemEdit,
  },
  {
    label: '삭제',
    icon: IconSystemTrash,
  },
]);
</script>
