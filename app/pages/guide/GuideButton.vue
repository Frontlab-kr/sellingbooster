<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Button (버튼)</h1>
      <p>
        사용자의 행동을 유도하는 핵심 인터랙션 요소로, 기능의 중요도와 상태를
        명확히 전달한다.<br />
        일관된 버튼 스타일은 사용자 행동 흐름을 자연스럽게 안내하고,
        인터페이스의 명확성을 높인다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>버튼 스타일 위계</h2>
            <h5>
              위계에 따라 Primary > Secondary > Tertiary > Sub 을 구분하여
              사용합니다.
            </h5>
          </div>
          <div class="sb-guide-button-example"></div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>버튼 사이즈 (가변)</h2>
            <h5>
              PC : 버튼은 역할에 따라 56px / 48px / 40px 세 가지 크기로
              구분합니다.<br />
              Mobile : 화면 크기와 사용 환경을 고려하여 48px / 40px 두 가지
              크기로 적용합니다.
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
                  <th>Size</th>
                  <th>Normal</th>
                  <th>Icon-left</th>
                  <th>Icon-right</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Large (56px)</h6>
                    <p>
                      팝업이나 텍스트 필드 영역에서 고정 너비로 사용할 경우<br />
                      최소 너비는 160px으로 사용<br />
                      <br />
                      최종 CTA 버튼 사용 : 컨테이너 너비에 맞게 확장
                    </p>
                  </td>
                  <td>
                    <Button severity="primary" size="large" label="Button" />
                  </td>
                  <td>
                    <Button severity="primary" size="large" label="Button">
                      <template #icon>
                        <IconArrowLeft class="ico-arrow-left" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button
                      severity="primary"
                      size="large"
                      label="Button"
                      class="ico-right"
                    >
                      <template #icon>
                        <IconArrowRight class="ico-arrow-right" />
                      </template>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Medium (48px)</h6>
                    <p>
                      팝업, 텍스트 필드 영역에서 고정 너비로 사용할 경우<br />
                      최소 너비는 160px으로 사용<br />
                      <br />
                      최종 CTA 버튼 사용 : 컨테이너 너비에 맞게 확장
                    </p>
                  </td>
                  <td>
                    <Button severity="primary" label="Button" />
                  </td>
                  <td>
                    <Button severity="primary" label="Button">
                      <template #icon>
                        <IconArrowLeft class="ico-arrow-left" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="primary" label="Button" class="ico-right">
                      <template #icon>
                        <IconArrowRight class="ico-arrow-right" />
                      </template>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Small (40px)</h6>
                    <p>
                      텍스트 필드 영역에서 고정 너비로 사용할 경우<br />
                      최소 너비는 109px으로 사용
                    </p>
                  </td>
                  <td>
                    <Button severity="primary" size="small" label="Button" />
                  </td>
                  <td>
                    <Button severity="primary" size="small" label="Button">
                      <template #icon>
                        <IconArrowLeft class="ico-arrow-left" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button
                      severity="primary"
                      size="small"
                      label="Button"
                      class="ico-right"
                    >
                      <template #icon>
                        <IconArrowRight class="ico-arrow-right" />
                      </template>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h3>Button_light</h3>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 258px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h6>Primary (주요)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                        />
                        <Button severity="primary" size="large" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="primary" label="Button" />
                        <Button severity="primary" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                        />
                        <Button severity="primary" size="small" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          label="Button"
                          class="hover"
                        />
                        <Button severity="primary" label="Button" class="hover">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="primary" label="Button" disabled />
                        <Button severity="primary" label="Button" disabled>
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><h6>Secondary (중간)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="primary" outlined label="Button" />
                        <Button severity="primary" outlined label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><h6>Tertiary (보조)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="contrast" outlined label="Button" />
                        <Button severity="contrast" outlined label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><h6>Sub (부가)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                        />
                        <Button severity="contrast" size="large" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="contrast" label="Button" />
                        <Button severity="contrast" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                        />
                        <Button severity="contrast" size="small" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="contrast" label="Button" disabled />
                        <Button severity="contrast" label="Button" disabled>
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
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
            <h3>Text button_light</h3>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 258px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <Button variant="text" label="Text button">
                      <IconSystemCalendar class="ico-system-calendar" />
                      <span
                        class="p-button-label"
                        data-pc-section="label"
                        data-p=""
                        >Text button</span
                      >
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </td>
                  <td>
                    <Button variant="text" label="Text button" class="hover">
                      <IconSystemCalendar class="ico-system-calendar" />
                      <span
                        class="p-button-label"
                        data-pc-section="label"
                        data-p=""
                        >Text button</span
                      >
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </td>
                  <td>
                    <Button variant="text" label="Text button" disabled>
                      <IconSystemCalendar class="ico-system-calendar" />
                      <span
                        class="p-button-label"
                        data-pc-section="label"
                        data-p=""
                        >Text button</span
                      >
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h3>Icon button_light</h3>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 258px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <Button severity="primary">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="primary" class="hover">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="primary" disabled>
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Unfilled</h6>
                  </td>
                  <td>
                    <Button severity="white">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="white" class="hover">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="white" disabled>
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
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
            <h3>Button_light</h3>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 258px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h6>Primary (주요)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                        />
                        <Button severity="primary" size="large" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="primary" label="Button" />
                        <Button severity="primary" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                        />
                        <Button severity="primary" size="small" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          label="Button"
                          class="hover"
                        />
                        <Button severity="primary" label="Button" class="hover">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="primary" label="Button" disabled />
                        <Button severity="primary" label="Button" disabled>
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><h6>Secondary (중간)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="primary" outlined label="Button" />
                        <Button severity="primary" outlined label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="primary"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><h6>Tertiary (보조)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="contrast" outlined label="Button" />
                        <Button severity="contrast" outlined label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          outlined
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><h6>Sub (부가)</h6></td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                        />
                        <Button severity="contrast" size="large" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="contrast" label="Button" />
                        <Button severity="contrast" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                        />
                        <Button severity="contrast" size="small" label="Button">
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="ico-right"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="hover"
                        />
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="hover"
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="ico-right hover"
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="sb-guide-table-button">
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="large"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button severity="contrast" label="Button" disabled />
                        <Button severity="contrast" label="Button" disabled>
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
                      </div>
                      <div class="sb-guide-table-button-item">
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          disabled
                        />
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          disabled
                        >
                          <template #icon>
                            <IconArrowLeft class="ico-arrow-left" />
                          </template>
                        </Button>
                        <Button
                          severity="contrast"
                          size="small"
                          label="Button"
                          class="ico-right"
                          disabled
                        >
                          <template #icon>
                            <IconArrowRight class="ico-arrow-right" />
                          </template>
                        </Button>
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
            <h3>Text button_light</h3>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 258px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <Button variant="text" label="Text button">
                      <IconSystemCalendar class="ico-system-calendar" />
                      <span
                        class="p-button-label"
                        data-pc-section="label"
                        data-p=""
                        >Text button</span
                      >
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </td>
                  <td>
                    <Button variant="text" label="Text button" class="hover">
                      <IconSystemCalendar class="ico-system-calendar" />
                      <span
                        class="p-button-label"
                        data-pc-section="label"
                        data-p=""
                        >Text button</span
                      >
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </td>
                  <td>
                    <Button variant="text" label="Text button" disabled>
                      <IconSystemCalendar class="ico-system-calendar" />
                      <span
                        class="p-button-label"
                        data-pc-section="label"
                        data-p=""
                        >Text button</span
                      >
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h3>Icon button_light</h3>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 258px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
                <col style="width: 486px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>Hover</th>
                  <th>Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Filled</h6>
                  </td>
                  <td>
                    <Button severity="primary">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="primary" class="hover">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="primary" disabled>
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Unfilled</h6>
                  </td>
                  <td>
                    <Button severity="white">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="white" class="hover">
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
                  </td>
                  <td>
                    <Button severity="white" disabled>
                      <template #icon>
                        <IconArrowUp class="ico-arrow-up" />
                      </template>
                    </Button>
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

import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconSystemCalendar from '@/assets/icons/system/calendar.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconArrowUp from '@/assets/icons/arrow/up.svg?component';
</script>
