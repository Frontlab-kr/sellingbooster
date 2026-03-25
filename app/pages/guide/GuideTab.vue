<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Tab (탭)</h1>
      <p>
        상호 배타적인 여러개의 콘텐츠 섹션을 전환할 수 있는 컴포넌트 입니다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>1-Depth 탭 사이즈</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>Large (폰트 사이즈 : 18pt)</h6>
              <div class="sb-guide-item-box-item-contents">
                <div class="sb-tab sb-tab--large">
                  <Button label="Selected" variant="text" class="active" />
                  <Button label="Selected" variant="text" />
                  <Button label="Selected" variant="text" />
                </div>
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>Medium (폰트 사이즈 : 16pt)</h6>
              <div class="sb-guide-item-box-item-contents breakpoint-mo">
                <div class="sb-tab">
                  <Button label="Selected" variant="text" class="active" />
                  <Button label="Selected" variant="text" />
                  <Button label="Selected" variant="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>1-Depth Tab_light</h2>
            <h5>
              카드 UI 내에서 탭을 사용할 경우, 하단에 라인을 적용하여 탭 구조를
              직관적으로 인지할 수 있도록 한다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 600px" />
                <col style="width: 600px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Large (40px)</th>
                  <th>Medium (32px)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>2-Depth Tab_light</h2>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 600px" />
                <col style="width: 600px" />
              </colgroup>

              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="sb-tab-circle">
                      <Button label="Selected" variant="text" class="active" />
                      <Button label="Selected" variant="text" />
                      <Button label="Selected" variant="text" />
                      <Button label="Selected" variant="text" />
                      <Button label="Selected" variant="text" />
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="sb-guide-dark p-dark">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>2-Depth Tab_light</h2>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 345px" />
                <col style="width: 600px" />
                <col style="width: 600px" />
              </colgroup>

              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="sb-tab-circle">
                      <Button label="Selected" variant="text" class="active" />
                      <Button label="Selected" variant="text" />
                      <Button label="Selected" variant="text" />
                      <Button label="Selected" variant="text" />
                      <Button label="Selected" variant="text" />
                    </div>
                  </td>
                  <td></td>
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
</script>
