<template>
  <div class="sb-guide">
    <div class="sb-guide-head">
      <h1>Badge (배지)</h1>
      <p>
        배지와 태그는 콘텐츠의 상태나 속성을 간결하게 표현하는 요소로, 정보를
        빠르게 인지하도록 돕는다.<br />
        제한적인 사용은 의미 전달의 명확성을 유지한다.
      </p>
    </div>
    <div class="sb-guide-body">
      <div class="sb-guide-light">
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>뱃지 사이즈</h2>
          </div>
          <div class="sb-guide-item-box">
            <div class="sb-guide-item-box-item">
              <h6>Text Badge</h6>
              <div class="sb-guide-item-box-item-contents">
                <Badge value="Badge" severity="info"></Badge>
              </div>
            </div>
            <div class="sb-guide-item-box-item">
              <h6>Number Badge</h6>
              <div class="sb-guide-item-box-item-contents">
                <Badge value="9" size="small" class="p-badge-circle"></Badge>
                <Badge value="99+" size="small" class="p-badge-circle"></Badge>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Text Badge</h2>
            <h5>콘텐츠의 상태와 속성을 간결하게 표현하는 요소로 사용한다.</h5>
          </div>
          <div class="sb-guide-item-subbox">
            <div class="sb-guide-item-subbox-item">
              <div class="sb-guide-item-subbox-item-contents">
                <Badge value="Badge" severity="danger"></Badge>
                <Badge value="Badge" severity="warn"></Badge>
                <Badge value="Badge" severity="success"></Badge>
                <Badge value="Badge" severity="secondary"></Badge>
                <Badge value="Badge" severity="neutral"></Badge>
                <Badge value="Badge" severity="contrast"></Badge>
                <Badge value="Badge" severity="info"></Badge>
              </div>
            </div>
            <div class="sb-guide-item-subbox-item p-dark">
              <div class="sb-guide-item-subbox-item-contents">
                <Badge value="Badge" severity="danger"></Badge>
                <Badge value="Badge" severity="warn"></Badge>
                <Badge value="Badge" severity="success"></Badge>
                <Badge value="Badge" severity="secondary"></Badge>
                <Badge value="Badge" severity="neutral"></Badge>
                <Badge value="Badge" severity="contrast"></Badge>
                <Badge value="Badge" severity="info"></Badge>
              </div>
            </div>
          </div>
          <div class="sb-guide-item-sub">
            <h6>적용 범위_커뮤니티 Q&A</h6>
            <div class="sb-guide-item-subbox">
              <div class="sb-guide-item-subbox-item">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="답변 대기" severity="danger"></Badge>
                  <Badge value="답변 완료" severity="success"></Badge>
                </div>
              </div>
              <div class="sb-guide-item-subbox-item p-dark">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="답변 대기" severity="danger"></Badge>
                  <Badge value="답변 완료" severity="success"></Badge>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-guide-item-sub">
            <h6>적용 범위_커뮤니티 공지사항</h6>
            <div class="sb-guide-item-subbox">
              <div class="sb-guide-item-subbox-item">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="긴급" severity="danger"></Badge>
                  <Badge value="중요" severity="warn"></Badge>
                  <Badge value="기술" severity="secondary"></Badge>
                  <Badge value="기본" severity="neutral"></Badge>
                  <Badge value="기타" severity="contrast"></Badge>
                </div>
              </div>
              <div class="sb-guide-item-subbox-item p-dark">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="긴급" severity="danger"></Badge>
                  <Badge value="중요" severity="warn"></Badge>
                  <Badge value="기술" severity="secondary"></Badge>
                  <Badge value="기본" severity="neutral"></Badge>
                  <Badge value="기타" severity="contrast"></Badge>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-guide-item-sub">
            <h6>적용 범위_커뮤니티 FAQ</h6>
            <div class="sb-guide-item-subbox">
              <div class="sb-guide-item-subbox-item">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="가입방법" severity="secondary"></Badge>
                  <Badge value="기능소개" severity="warn"></Badge>
                  <Badge value="사용방법" severity="success"></Badge>
                </div>
              </div>
              <div class="sb-guide-item-subbox-item p-dark">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="가입방법" severity="secondary"></Badge>
                  <Badge value="기능소개" severity="warn"></Badge>
                  <Badge value="사용방법" severity="success"></Badge>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-guide-item-sub">
            <h6>적용 범위_환경설정 알림 관리</h6>
            <div class="sb-guide-item-subbox">
              <div class="sb-guide-item-subbox-item">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="공지" severity="warn"></Badge>
                  <Badge value="서비스" severity="secondary"></Badge>
                  <Badge value="시스템" severity="contrast"></Badge>
                </div>
              </div>
              <div class="sb-guide-item-subbox-item p-dark">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="공지" severity="warn"></Badge>
                  <Badge value="서비스" severity="secondary"></Badge>
                  <Badge value="시스템" severity="contrast"></Badge>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-guide-item-sub">
            <h6>적용 범위_경쟁강도</h6>
            <div class="sb-guide-item-subbox">
              <div class="sb-guide-item-subbox-item">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="최고" severity="success"></Badge>
                  <Badge value="좋음" severity="secondary"></Badge>
                  <Badge value="보통" severity="info"></Badge>
                  <Badge value="낮음" severity="warn"></Badge>
                  <Badge value="최저" severity="danger"></Badge>
                </div>
              </div>
              <div class="sb-guide-item-subbox-item p-dark">
                <div class="sb-guide-item-subbox-item-contents">
                  <Badge value="최고" severity="success"></Badge>
                  <Badge value="좋음" severity="secondary"></Badge>
                  <Badge value="보통" severity="info"></Badge>
                  <Badge value="낮음" severity="warn"></Badge>
                  <Badge value="최저" severity="danger"></Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Number Badge</h2>
            <h5>중요한 정보, 변경사항, 순위 등을 강조할 때 사용한다.</h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 180px" />
                <col style="width: 336px" />
                <col style="width: 1000px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>New</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="flex gap-3">
                      <Badge
                        value="9"
                        size="small"
                        severity="contrast"
                        class="p-badge-circle"
                      ></Badge>
                      <Badge
                        value="99+"
                        size="small"
                        severity="contrast"
                        class="p-badge-circle"
                      ></Badge>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-3">
                      <Badge
                        value="9"
                        size="small"
                        class="p-badge-circle"
                      ></Badge>
                      <Badge
                        value="99+"
                        size="small"
                        class="p-badge-circle"
                      ></Badge>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sb-guide-table p-dark">
            <table>
              <colgroup>
                <col style="width: 180px" />
                <col style="width: 336px" />
                <col style="width: 1000px" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>Default</th>
                  <th>New</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="flex gap-3">
                      <Badge
                        value="9"
                        size="small"
                        severity="contrast"
                        class="p-badge-circle"
                      ></Badge>
                      <Badge
                        value="99+"
                        size="small"
                        severity="contrast"
                        class="p-badge-circle"
                      ></Badge>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-3">
                      <Badge
                        value="9"
                        size="small"
                        class="p-badge-circle"
                      ></Badge>
                      <Badge
                        value="99+"
                        size="small"
                        class="p-badge-circle"
                      ></Badge>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Level Text Badge</h2>
            <h5>
              회원 레벨을 표기할 때 사용되는 뱃지로, 라이트 모드와 다크 모드
              모두 같은 컬러 값을 사용한다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 180px" />
                <col style="width: 336px" />
                <col style="width: 1000px" />
              </colgroup>

              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="flex gap-3">
                      <Badge value="Level 1" severity="level1"></Badge>
                      <Badge value="Level 2" severity="level2"></Badge>
                      <Badge value="Level 3" severity="level3"></Badge>
                      <Badge value="Level 4" severity="level4"></Badge>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="sb-guide-item">
          <div class="sb-guide-item-head">
            <h2>Level GNB Badge</h2>
            <h5>
              회원 레벨을 표기할 때 사용되는 뱃지로, 라이트 모드와 다크 모드
              모두 같은 컬러 값을 사용한다.<br />
              PC 상단 GNB에서 사용된다.
            </h5>
          </div>
          <div class="sb-guide-table">
            <table>
              <colgroup>
                <col style="width: 180px" />
                <col style="width: 336px" />
                <col style="width: 1000px" />
              </colgroup>

              <tbody>
                <tr>
                  <td>
                    <h6>item</h6>
                  </td>
                  <td>
                    <div class="flex gap-3">
                      <img
                        src="./../../assets/icons/profile/badge-level1-small.svg"
                        alt=""
                        class="ico-profile-lv"
                      />
                      <img
                        src="./../../assets/icons/profile/badge-level2-small.svg"
                        alt=""
                        class="ico-profile-lv"
                      />
                      <img
                        src="./../../assets/icons/profile/badge-level3-small.svg"
                        alt=""
                        class="ico-profile-lv"
                      />
                      <img
                        src="./../../assets/icons/profile/badge-level4-small.svg"
                        alt=""
                        class="ico-profile-lv"
                      />
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
