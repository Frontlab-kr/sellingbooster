<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Select Control (셀렉트 컨트롤)</h1>
      <p>
        셀렉트는 사용자에게 여러 개의 옵션 목록을 팝업으로 제공하여<br />
        그 중 한 개의 값을 선택할 수 있도록 하는 경우에 사용합니다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>체크 / 라디오 버튼 사이즈</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>Large (폰트 사이즈 : 16pt)</h6>
              <div class="sb-guide-item-box-item-contents">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox01"
                      v-model="checkbox01"
                      :binary="true"
                      value=""
                    />
                    <label for="checkbox01"> Text </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>Medium (폰트 사이즈 : 14pt)</h6>
              <div class="sb-guide-item-box-item-contents breakpoint-mo">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox02"
                      v-model="checkbox02"
                      :binary="true"
                      value=""
                    />
                    <label for="checkbox02"> Text </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Check Button_light</h2>
            <h5>
              여러 개의 옵션 중 여러 개의 값을 선택할 수 있도록 하는 경우에
              사용합니다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox03"
                          v-model="checkbox03"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox04"
                          v-model="checkbox04"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox05"
                          v-model="checkbox05"
                          :binary="true"
                          value=""
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Large</h6>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox06"
                          v-model="checkbox06"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox06"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox07"
                          v-model="checkbox07"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox07"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox08"
                          v-model="checkbox08"
                          :binary="true"
                          value=""
                          disabled
                        />
                        <label for="checkbox08"> Text </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox09"
                          v-model="checkbox09"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox09"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox10"
                          v-model="checkbox10"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox10"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox11"
                          v-model="checkbox11"
                          :binary="true"
                          value=""
                          disabled
                        />
                        <label for="checkbox11"> Text </label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Radio Button_light</h2>
            <h5>
              여러 개의 옵션 중 한 개의 값을 선택할 수 있도록 하는 경우에
              사용합니다. <br />
              사용자가 옵션 목록에서 새로운 옵션을 선택했을 때, 기존에
              선택되었던 옵션은 자동으로 선택이 해제되어야 합니다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio01"
                          v-model="radio01"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio02"
                          v-model="radio02"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio03"
                          v-model="radio03"
                          :binary="true"
                          value=""
                          disabled=""
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Large</h6>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio04"
                          v-model="radio04"
                          :binary="true"
                          value=""
                        />
                        <label for="radio04"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio05"
                          v-model="radio05"
                          :binary="true"
                          value=""
                        />
                        <label for="radio05"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio06"
                          v-model="radio06"
                          :binary="true"
                          value=""
                          disabled=""
                        />
                        <label for="radio06"> Text </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio07"
                          v-model="radio07"
                          :binary="true"
                          value=""
                        />
                        <label for="radio07"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio08"
                          v-model="radio08"
                          :binary="true"
                          value=""
                        />
                        <label for="radio08"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio09"
                          v-model="radio09"
                          :binary="true"
                          value=""
                          disabled
                        />
                        <label for="radio09"> Text </label>
                      </div>
                    </div>
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
            <h2>Check Button_dark</h2>
            <h5>
              여러 개의 옵션 중 여러 개의 값을 선택할 수 있도록 하는 경우에
              사용합니다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox03"
                          v-model="checkbox03"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox04"
                          v-model="checkbox04"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox05"
                          v-model="checkbox05"
                          :binary="true"
                          value=""
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Large</h6>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox06"
                          v-model="checkbox06"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox06"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox07"
                          v-model="checkbox07"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox07"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox08"
                          v-model="checkbox08"
                          :binary="true"
                          value=""
                          disabled
                        />
                        <label for="checkbox08"> Text </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox09"
                          v-model="checkbox09"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox09"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox10"
                          v-model="checkbox10"
                          :binary="true"
                          value=""
                        />
                        <label for="checkbox10"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-checkbox">
                      <div class="sb-checkbox-item">
                        <Checkbox
                          inputId="checkbox11"
                          v-model="checkbox11"
                          :binary="true"
                          value=""
                          disabled
                        />
                        <label for="checkbox11"> Text </label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Radio Button_dark</h2>
            <h5>
              여러 개의 옵션 중 한 개의 값을 선택할 수 있도록 하는 경우에
              사용합니다. <br />
              사용자가 옵션 목록에서 새로운 옵션을 선택했을 때, 기존에
              선택되었던 옵션은 자동으로 선택이 해제되어야 합니다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio01"
                          v-model="radio01"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio02"
                          v-model="radio02"
                          :binary="true"
                          value=""
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio03"
                          v-model="radio03"
                          :binary="true"
                          value=""
                          disabled=""
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Large</h6>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio04"
                          v-model="radio04"
                          :binary="true"
                          value=""
                        />
                        <label for="radio04"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio05"
                          v-model="radio05"
                          :binary="true"
                          value=""
                        />
                        <label for="radio05"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio06"
                          v-model="radio06"
                          :binary="true"
                          value=""
                          disabled=""
                        />
                        <label for="radio06"> Text </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio07"
                          v-model="radio07"
                          :binary="true"
                          value=""
                        />
                        <label for="radio07"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio08"
                          v-model="radio08"
                          :binary="true"
                          value=""
                        />
                        <label for="radio08"> Text </label>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-radio">
                      <div class="sb-radio-item">
                        <RadioButton
                          inputId="radio09"
                          v-model="radio09"
                          :binary="true"
                          value=""
                          disabled
                        />
                        <label for="radio09"> Text </label>
                      </div>
                    </div>
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
            <h2>셀렉트 칩 사이즈</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>Large (폰트 사이즈 : 16pt)</h6>
              <div class="sb-guide-item-box-item-contents">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div class="sb-checkbox-item">
                      <Checkbox
                        v-model="chip01"
                        inputId="chip01"
                        value="chip01"
                        :binary="true"
                      />
                      <label for="chip01">Filter Chip</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>Medium (32px)</h6>
              <div class="sb-guide-item-box-item-contents breakpoint-mo">
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div class="sb-checkbox-item">
                      <Checkbox
                        v-model="chip02"
                        inputId="chip02"
                        value="chip02"
                        :binary="true"
                      />
                      <label for="chip02">Filter Chip</label>
                    </div>
                  </div>
                </div>
                <div class="sb-chip">
                  <div class="sb-checkbox">
                    <div class="sb-checkbox-item">
                      <Checkbox
                        v-model="chip03"
                        inputId="chip03"
                        value="chip03"
                        :binary="true"
                      />
                      <label for="chip03">
                        <IconSystemFaceHappy class="ico-system-face-happy" />
                        Filter Chip</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Chip_light</h2>
            <h5>필요한 항목을 선택할 수 있도록 돕습니다.</h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Large (40px)</h6>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip04"
                            inputId="chip04"
                            value="chip04"
                            :binary="true"
                          />
                          <label for="chip04">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip05"
                            inputId="chip05"
                            value="chip05"
                            :binary="true"
                          />
                          <label for="chip05">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip06"
                            inputId="chip06"
                            value="chip06"
                            :binary="true"
                            disabled
                          />
                          <label for="chip06">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium (32px)</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip07"
                            inputId="chip07"
                            value="chip07"
                            :binary="true"
                          />
                          <label for="chip07">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip08"
                            inputId="chip08"
                            value="chip08"
                            :binary="true"
                          />
                          <label for="chip08">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip09"
                            inputId="chip09"
                            value="chip09"
                            :binary="true"
                            disabled
                          />
                          <label for="chip09">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium (32px) / icon</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip07"
                            inputId="chip07"
                            value="chip07"
                            :binary="true"
                          />
                          <label for="chip07">
                            <IconSystemFaceHappy
                              class="ico-system-face-happy"
                            />
                            Filter Chip
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip08"
                            inputId="chip08"
                            value="chip08"
                            :binary="true"
                          />
                          <label for="chip08">
                            <IconSystemFaceHappy
                              class="ico-system-face-happy"
                            />
                            Filter Chip
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip09"
                            inputId="chip09"
                            value="chip09"
                            :binary="true"
                            disabled
                          />
                          <label for="chip09">
                            <IconSystemFaceHappy
                              class="ico-system-face-happy"
                            />
                            Filter Chip
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Input Chip_light</h2>
            <h5>선택, 입력된 값이 보여지고 값을 삭제할 수 있습니다.</h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 788px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>No close</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-chip-list">
                        <Chip label="Chip" removable />
                      </div>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <h6>Color label</h6>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-chip-list">
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="success"
                        />
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="info"
                        />
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="warn"
                        />
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="danger"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <Chip label="Chip" size="large" severity="primary" />
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
            <h2>Chip_dark</h2>
            <h5>필요한 항목을 선택할 수 있도록 돕습니다.</h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Off</th>
                  <th>On</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Large (40px)</h6>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip04"
                            inputId="chip04"
                            value="chip04"
                            :binary="true"
                          />
                          <label for="chip04">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip05"
                            inputId="chip05"
                            value="chip05"
                            :binary="true"
                          />
                          <label for="chip05">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip06"
                            inputId="chip06"
                            value="chip06"
                            :binary="true"
                            disabled
                          />
                          <label for="chip06">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium (32px)</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip07"
                            inputId="chip07"
                            value="chip07"
                            :binary="true"
                          />
                          <label for="chip07">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip08"
                            inputId="chip08"
                            value="chip08"
                            :binary="true"
                          />
                          <label for="chip08">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip09"
                            inputId="chip09"
                            value="chip09"
                            :binary="true"
                            disabled
                          />
                          <label for="chip09">Filter Chip</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium (32px) / icon</h6>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip07"
                            inputId="chip07"
                            value="chip07"
                            :binary="true"
                          />
                          <label for="chip07">
                            <IconSystemFaceHappy
                              class="ico-system-face-happy"
                            />
                            Filter Chip
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip08"
                            inputId="chip08"
                            value="chip08"
                            :binary="true"
                          />
                          <label for="chip08">
                            <IconSystemFaceHappy
                              class="ico-system-face-happy"
                            />
                            Filter Chip
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="breakpoint-mo">
                    <div class="sb-chip">
                      <div class="sb-checkbox">
                        <div class="sb-checkbox-item">
                          <Checkbox
                            v-model="chip09"
                            inputId="chip09"
                            value="chip09"
                            :binary="true"
                            disabled
                          />
                          <label for="chip09">
                            <IconSystemFaceHappy
                              class="ico-system-face-happy"
                            />
                            Filter Chip
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Input Chip_light</h2>
            <h5>선택, 입력된 값이 보여지고 값을 삭제할 수 있습니다.</h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 496px" />
                <col style="width: 788px" />
                <col style="width: 394px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>No close</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Default</h6>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-chip-list">
                        <Chip label="Chip" removable />
                      </div>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <h6>Color label</h6>
                  </td>
                  <td>
                    <div class="sb-chip">
                      <div class="sb-chip-list">
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="success"
                        />
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="info"
                        />
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="warn"
                        />
                        <Chip
                          label="Chip"
                          removable
                          size="large"
                          severity="danger"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <Chip label="Chip" size="large" severity="primary" />
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
import IconSystemFaceHappy from '@/assets/icons/system/face-happy.svg?component';

const checkbox01 = ref(false);
const checkbox02 = ref(false);
const checkbox03 = ref(false);
const checkbox04 = ref(true);
const checkbox05 = ref(false);
const checkbox06 = ref(false);
const checkbox07 = ref(true);
const checkbox08 = ref(false);
const checkbox09 = ref(false);
const checkbox10 = ref(true);
const checkbox11 = ref(false);

const radio01 = ref(false);
const radio02 = ref(true);
const radio03 = ref(false);
const radio04 = ref(false);
const radio05 = ref(true);
const radio06 = ref(false);
const radio07 = ref(false);
const radio08 = ref(true);
const radio09 = ref(false);

const chip01 = ref(true);
const chip02 = ref(true);
const chip03 = ref(true);
const chip04 = ref(false);
const chip05 = ref(true);
const chip06 = ref(false);
const chip07 = ref(false);
const chip08 = ref(true);
const chip09 = ref(false);
const chip10 = ref(false);
const chip11 = ref(true);
const chip12 = ref(false);
</script>
