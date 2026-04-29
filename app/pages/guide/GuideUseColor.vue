<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Use color (색상 사용)</h1>
      <p>
        사용자의 상태와 정보의 중요도를 구분하기 위한 역할 기반 색상 체계입니다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Customer level</h2>
            <h5>
              사용자 레벨에 사용되는 컬러값으로, 라이트 모드와 다크 모드 동일한
              컬러로 사용한다.
            </h5>
          </div>
          <div class="sb-guide-color">
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="background-color: var(--color-level1)"
              ></div>
              <div class="sb-guide-color-item__text">
                <p>level 01</p>
                <strong>#FFCF52</strong>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="background-color: var(--color-level2)"
              ></div>
              <div class="sb-guide-color-item__text">
                <p>level 02</p>
                <strong>#FB7310</strong>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="background-color: var(--color-level3)"
              ></div>
              <div class="sb-guide-color-item__text">
                <p>level 03</p>
                <strong>#F04755</strong>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="background-color: var(--color-level4)"
              ></div>
              <div class="sb-guide-color-item__text">
                <p>level 04</p>
                <strong>#6466FA</strong>
              </div>
            </div>
          </div>
          <div class="sb-guide-color">
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="
                  background: var(
                    --Gradation-01,
                    linear-gradient(90deg, #ffaf26 0%, #ffe356 100%)
                  );
                "
              ></div>
              <div
                class="sb-guide-color-item__text flex-row justify-content-between"
              >
                <div class="sb-guide-color-item__text-start">
                  <p>level 01</p>
                  <strong>#ffaf26</strong>
                </div>
                <div class="sb-guide-color-item__text-end">
                  <p>&nbsp;</p>
                  <strong>#ffe356</strong>
                </div>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="
                  background: var(
                    --Gradation-01,
                    linear-gradient(90deg, #fb7310 0%, #ffcc00 100%)
                  );
                "
              ></div>
              <div
                class="sb-guide-color-item__text flex-row justify-content-between"
              >
                <div class="sb-guide-color-item__text-start">
                  <p>level 01</p>
                  <strong>#FB7310</strong>
                </div>
                <div class="sb-guide-color-item__text-end">
                  <p>&nbsp;</p>
                  <strong>#FFCC00</strong>
                </div>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="
                  background: var(
                    --Gradation-01,
                    linear-gradient(90deg, #ff3748 0%, #ffa12e 100%)
                  );
                "
              ></div>
              <div
                class="sb-guide-color-item__text flex-row justify-content-between"
              >
                <div class="sb-guide-color-item__text-start">
                  <p>level 01</p>
                  <strong>#FF3748</strong>
                </div>
                <div class="sb-guide-color-item__text-end">
                  <p>&nbsp;</p>
                  <strong>#FFA12E</strong>
                </div>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div
                class="sb-guide-color-item__bg"
                style="
                  background: var(
                    --Gradation-01,
                    linear-gradient(90deg, #6466fa 0%, #2916d5 100%)
                  );
                "
              ></div>
              <div
                class="sb-guide-color-item__text flex-row justify-content-between"
              >
                <div class="sb-guide-color-item__text-start">
                  <p>level 01</p>
                  <strong>#6466FA</strong>
                </div>
                <div class="sb-guide-color-item__text-end">
                  <p>&nbsp;</p>
                  <strong>#2916D5</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Review level_light</h2>
            <h5>
              상품, 키워드 분석과 검색에 사용되는 레벨 컬러값으로, 민트컬러는
              지양한다.
            </h5>
          </div>
          <div class="sb-guide-color">
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-green-500"></div>
              <div class="sb-guide-color-item__text">
                <p>success-500</p>
                <strong>#03ab67</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘최고’ </span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-slate-500"></div>
              <div class="sb-guide-color-item__text">
                <p>secondary-500</p>
                <strong>#6466FA</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘좋음’ </span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-blue-500"></div>
              <div class="sb-guide-color-item__text">
                <p>blue-500</p>
                <strong>#278CF2</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘보통’ </span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-orange-600"></div>
              <div class="sb-guide-color-item__text">
                <p>warning-600</p>
                <strong>#FFB22E</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘낮음’</span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-red-600"></div>
              <div class="sb-guide-color-item__text">
                <p>destructive-600</p>
                <strong>#E42636</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘최저’</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-guide-dark p-dark">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Review level_dark</h2>
          </div>
          <div class="sb-guide-color">
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-green-400"></div>
              <div class="sb-guide-color-item__text">
                <p>success-400</p>
                <strong>#15C17C</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘최고’ </span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-slate-400"></div>
              <div class="sb-guide-color-item__text">
                <p>secondary-400</p>
                <strong>#8385FC</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘좋음’ </span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-blue-400"></div>
              <div class="sb-guide-color-item__text">
                <p>blue-400</p>
                <strong>#52A3F5</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘보통’ </span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-orange-400"></div>
              <div class="sb-guide-color-item__text">
                <p>warning-400</p>
                <strong>#FFCF52</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘낮음’</span>
              </div>
            </div>
            <div class="sb-guide-color-item">
              <div class="sb-guide-color-item__bg bg-red-400"></div>
              <div class="sb-guide-color-item__text">
                <p>destructive-400</p>
                <strong>#F6606B</strong>
                <span>사용 범위 예시 : 상품 키워드 상태 ‘최저’</span>
              </div>
            </div>
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
