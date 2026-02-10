<template>
  <div class="sb-guide">
    <div class="card flex justify-center flex-wrap gap-4">
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warn" severity="warn" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
      <Button label="Contrast" severity="contrast" />
    </div>

    <div>
      <h2>Button_Fixed</h2>
      <h5>
        사이즈는 180×40, 200×48, 240×60 3가지 크기로 구분하고, Disable 상태는
        색상과 상관없이 BG는 Gray300, Text+Line은 Gray400으로 표현한다.
      </h5>
      <div class="sb-guide-box">
        <Button label="Button" size="small" />
        <Button label="Button" />
        <Button label="Button" size="large" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Primary</th>
            <th>Contrast</th>
            <th>Neutral</th>
            <th>Outlined</th>
            <th>Outlined Contrast</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Default</th>
            <td>
              <Button label="Button" severity="primary" />
            </td>
            <td><Button label="Button" severity="contrast" /></td>
            <td><Button label="Button" severity="neutral" /></td>
            <td><Button label="Button" severity="primary" outlined /></td>
            <td><Button label="Button" severity="contrast" outlined /></td>
          </tr>
          <tr>
            <th>Hover</th>
            <td>
              <Button label="Button" severity="primary" class="hover" />
            </td>
            <td><Button label="Button" severity="contrast" class="hover" /></td>
            <td>
              <Button label="Button" severity="neutral" class="hover" />
            </td>
            <td>
              <Button
                label="Button"
                severity="primary"
                outlined
                class="hover"
              />
            </td>
            <td>
              <Button
                label="Button"
                severity="contrast"
                outlined
                class="hover"
              />
            </td>
          </tr>
          <tr>
            <th>Disabled</th>
            <td>
              <Button label="Button" severity="primary" disabled />
            </td>
            <td><Button label="Button" severity="contrast" disabled /></td>
            <td><Button label="Button" severity="neutral" disabled /></td>
            <td>
              <Button label="Button" severity="primary" outlined disabled />
            </td>
            <td>
              <Button label="Button" severity="contrast" outlined disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
