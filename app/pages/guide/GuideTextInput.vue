<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Text input (텍스트 입력필드)</h1>
      <p>
        사용자가 직접 정보를 입력하는 기본 입력 요소로, 데이터를 수집하는데
        사용한다.<br />
        입력 목적을 명확히 안내하고, 상태 변화를 시각적으로 전달한다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>텍스트 필드 사이즈</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>Large (48px)</h6>
              <div class="sb-guide-item-box-item-contents">
                <div>
                  <SbInput placeholder="Text" />
                  <Message size="small" severity="neutral" variant="simple">
                    Help text
                  </Message>
                </div>
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>Medium (40px)</h6>
              <div class="sb-guide-item-box-item-contents breakpoint-mo">
                <div>
                  <SbInput placeholder="Text" />
                  <Message size="small" severity="neutral" variant="simple">
                    Help text
                  </Message>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Text Field_light</h2>
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
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      placeholder="Text"
                      class="focus"
                    />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      v-model="Filled"
                      placeholder="Text"
                      class="focus"
                    />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbInput v-model="Filled" placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput v-model="Filled" placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbInput v-model="Filled" placeholder="Text" disabled />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput v-model="Filled" placeholder="Text" disabled />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Error</h6>
                  </td>
                  <td>
                    <SbInput placeholder="Text" invalid="false" />
                    <Message size="small" severity="error" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput placeholder="Text" invalid="false" />
                    <Message size="small" severity="error" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Success</h6>
                  </td>
                  <td>
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="success" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="success" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Text Area_light</h2>
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
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      class="focus"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      class="focus"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbTextarea
                      model-value="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      model-value="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      disabled
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Error</h6>
                  </td>
                  <td>
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      invalid="false"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      invalid="false"
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
            <h2>Text Field_light</h2>
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
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      placeholder="Text"
                      class="focus"
                    />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      v-model="Filled"
                      placeholder="Text"
                      class="focus"
                    />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbInput v-model="Filled" placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput v-model="Filled" placeholder="Text" />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbInput v-model="Filled" placeholder="Text" disabled />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput v-model="Filled" placeholder="Text" disabled />
                    <Message size="small" severity="neutral" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Error</h6>
                  </td>
                  <td>
                    <SbInput placeholder="Text" invalid="false" />
                    <Message size="small" severity="error" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput placeholder="Text" invalid="false" />
                    <Message size="small" severity="error" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Success</h6>
                  </td>
                  <td>
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="success" variant="simple">
                      Help text
                    </Message>
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput placeholder="Text" />
                    <Message size="small" severity="success" variant="simple">
                      Help text
                    </Message>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Text Area_light</h2>
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
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      class="focus"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      class="focus"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbTextarea
                      model-value="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      model-value="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      disabled
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Error</h6>
                  </td>
                  <td>
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      invalid="false"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbTextarea
                      v-model="textarea01"
                      maxlength="1000"
                      placeholder="문의 하실 내용을 입력해주세요.
최대 1,000자 이내"
                      invalid="false"
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
            <h2>Search bar (메인 검색)</h2>
            <h5>메인에 사용되는 키워드, 상품 검색 시 사용되는 Search bar</h5>
          </div>
          <div class="sb-guide-table sb-guide-table-background">
            <table>
              <colgroup>
                <col style="width: 200px" />
                <col style="width: 1000px" />
              </colgroup>

              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                      class="focus"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Search bar</h2>
            <h5>서브 페이지에서 게시물 검색 등에 사용되는 Search bar</h5>
          </div>
          <div class="sb-guide-table sb-guide-table-background">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 700px" />
                <col style="width: 700px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Large (폰트 사이즈 : 16pt)</th>
                  <th>Medium (폰트 사이즈 :14pt)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      class="focus"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      class="focus"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      disabled
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
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
            <h2>Search bar (메인 검색)</h2>
            <h5>메인에 사용되는 키워드, 상품 검색 시 사용되는 Search bar</h5>
          </div>
          <div class="sb-guide-table sb-guide-table-background">
            <table>
              <colgroup>
                <col style="width: 200px" />
                <col style="width: 1000px" />
              </colgroup>

              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                      class="focus"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      size="large"
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Search bar</h2>
            <h5>서브 페이지에서 게시물 검색 등에 사용되는 Search bar</h5>
          </div>
          <div class="sb-guide-table sb-guide-table-background">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 700px" />
                <col style="width: 700px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Large (폰트 사이즈 : 16pt)</th>
                  <th>Medium (폰트 사이즈 :14pt)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>OnFocus</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      class="focus"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      class="focus"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      v-model="Filled"
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Disabled</h6>
                  </td>
                  <td>
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      disabled
                    />
                  </td>
                  <td class="breakpoint-mo">
                    <SbInput
                      show-search
                      @search="onSearch"
                      placeholder="Text"
                      disabled
                    />
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
definePageMeta({
  layout: 'guide',
});
const Filled = ref('Text');
const textarea01 = ref('');
</script>
