<template>
  <div class="sb-privacypolicy">
    <div class="sb-privacypolicy-title">
      <h4>개인정보 처리 방침</h4>

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
    <div class="sb-privacypolicy-index">
      <div class="sb-privacypolicy-index-item">
        <NuxtLink to="#section01">
          <p>제1조 개인정보의 처리 목적</p>
        </NuxtLink>
        <NuxtLink to="#section02">
          <p>제2조 개인정보의 수집 항목 및 방법</p>
        </NuxtLink>
        <NuxtLink to="#section03">
          <p>제3조 개인정보의 처리 및 보유 기간</p>
        </NuxtLink>
        <NuxtLink to="#section04">
          <p>제4조 개인정보의 제3자 제공</p>
        </NuxtLink>
        <NuxtLink to="#section05">
          <p>제5조 개인정보 처리 위탁</p>
        </NuxtLink>
        <NuxtLink to="#section06">
          <p>제6조 개인정보의 국외 이전</p>
        </NuxtLink>
        <NuxtLink to="#section07">
          <p>제7조 개인정보의 파기</p>
        </NuxtLink>
        <NuxtLink to="#section08">
          <p>제8조 정보주체와 법정대리인의 권리•의무 및 행사방법</p>
        </NuxtLink>
      </div>
      <div class="sb-privacypolicy-index-item">
        <NuxtLink to="#section09">
          <p>제9조 개인정보의 안전성 확보조치</p>
        </NuxtLink>
        <NuxtLink to="#section10">
          <p>제10조 링크사이트</p>
        </NuxtLink>
        <NuxtLink to="#section11">
          <p>제11조 광고성 정보 전송</p>
        </NuxtLink>
        <NuxtLink to="#section12">
          <p>
            제12조 개인정보의 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항
          </p>
        </NuxtLink>
        <NuxtLink to="#section13">
          <p>제13조 개인정보보호 책임자 및 관리자</p>
        </NuxtLink>
        <NuxtLink to="#section14">
          <p>제14조 의견수렴 및 불만처리</p>
        </NuxtLink>
        <NuxtLink to="#section15">
          <p>제15조 고지의 의무</p>
        </NuxtLink>
      </div>
    </div>
    <div class="sb-privacypolicy-contents">
      <div class="sb-privacypolicy-section">
        <p>
          (주)헥토데이터(이하 회사)는 「개인정보 보호법, 제30조에 따라
          정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
          처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
          수립•공개합니다.<br />
          본 방침은 개인정보 관련 법령, 지침, 고시 또는 회사 정책의 변경에 따라
          변경될 수 있습니다.
        </p>
      </div>
      <div class="sb-privacypolicy-section" id="section01">
        <h6>제1조 개인정보의 처리 목적</h6>
        <p>
          회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
          개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
          변경되는 경우에는 “개인정보보호법 제18조”에 따라 별도의 동의를 받는 등
          필요한 조치를 이행합니다.
        </p>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>회원가입 및 관리</p>
              </div>
              <ul>
                <li>
                  회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증,
                  회원자격 유지•관리, 서비스 부정이용 방지, 각종 고지•통지, 고충
                  처리
                </li>
                <li>
                  통합 계정 관리 : 회사 내부 서비스 간 통합 ID(SSO) 연동 및 중복
                  가입 방지
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>서비스 제공</p>
              </div>
              <ul>
                <li>
                  유료 서비스 이용 시 콘텐츠 등의 요금 결제 및 정산, 서비스
                  이용현황 통계 분석 및 활용, 콘텐츠 제공, 맞춤형 서비스 제공,
                  서비스 개선
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>체험단 및 이벤트 운영</p>
              </div>
              <ul>
                <li>
                  체험단 선정 및 미션 관리, 체험 상품(리워드) 배송, 우수 리뷰어
                  선정, 부정 참여 방지, 후기 수집 및 서비스 개선 활용, 후기 기반
                  홍보 활용, 정식 서비스 안내 및 회원 전환 안내.
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>4)</strong>
                <p>신규 서비스 개발 및 마케팅 광고에의 활용 (선택)</p>
              </div>
              <ul>
                <li>
                  신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보
                  제공 및 참여 기회 제공, 인구 통계학적 특성에 따른 서비스 제공
                  및 광고 게재, 서비스의 유효성 확인, 광고성 정보 제공, 접속빈도
                  파악, 이용자의 서비스 이용에 대한 통계
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section02">
        <h6>제2조 개인정보의 수집 항목 및 방법</h6>
        <p>
          회사는 동의를 받은 경우에 한하여 아래와 같은 경로로 이용자의
          개인정보를 수집합니다.
        </p>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>홈페이지(PC/모바일/APP)</p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>이메일, 상담 게시판을 통한 이용자 자발적 정보제공</p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>당사 및 제휴사로부터의 제공</p>
              </div>
              <ul>
                <li>
                  또한 회원가입, 고객상담, 서비스 이용 등을 위해 아래와 같은
                  개인정보를 수집하고 있습니다.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="sb-privacypolicy-table">
          <table>
            <colgroup>
              <col style="width: 150px" />
              <col style="width: 150px" />
              <col style="width: 520px" />
              <col style="width: 180px" />
            </colgroup>
            <thead>
              <tr>
                <th>수집 단계</th>
                <th>구분</th>
                <th>수집 항목</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">회원가입</td>
                <td>필수</td>
                <td>
                  아이디(이메일), 비밀번호, 이름, 휴대전화번호, CI/DI(본인인증
                  시)
                </td>
                <td rowspan="2">통합계정 연동 시 CI 공유</td>
              </tr>
              <tr>
                <td>선택</td>
                <td>회사명, 직급, 마케팅 수신 동의 여부</td>
              </tr>
              <tr>
                <td>유료결제</td>
                <td>필수</td>
                <td>
                  카드사명, 카드번호(일부), 유효기간, 생년월일(또는 사업자번호),
                  계좌 정보
                </td>
                <td>PG사 위탁 처리</td>
              </tr>
              <tr>
                <td>체험단 신청</td>
                <td>필수</td>
                <td>
                  이름, 이메일 주소, 배송지 주소, SNS/운영채널 URL, 지원 동기
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>상담 및 문의</td>
                <td>필수</td>
                <td>성명, 회사, 휴대폰번호, 이메일(아이디)</td>
                <td>-</td>
              </tr>
              <tr>
                <td>안내사항 고지</td>
                <td>선택</td>
                <td>이메일(아이디), 휴대폰번호</td>
                <td>-</td>
              </tr>
              <tr>
                <td>개인정보 열람 청구</td>
                <td>필수</td>
                <td>이메일(아이디), 휴대폰번호</td>
                <td>-</td>
              </tr>
              <tr>
                <td>자동 수집</td>
                <td>필수</td>
                <td>IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 결제기록</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section03">
        <h6>제3조 개인정보의 처리 및 보유 기간</h6>
        <p>
          회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터
          개인정보를 수집 시에 동의 받은 개인정보 보유·이용 기간 내에서
          개인정보를 처리·보유합니다. 각각의 개인정보 처리 및 보유 기간은 다음과
          같습니다.
        </p>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>회사 내부 방침에 의해 개인정보 파기가 유보되는 경우</p>
              </div>
              <ul>
                <li>유료서비스 이용자일 경우 요금 결제 및 정산 완료 시까지</li>
                <li>이용자의 서비스 남용 및 부정이용 시</li>
                <li>
                  회사와 고객 간 민원, 소송 등 분쟁이 있는 경우 : 분쟁 해결 시
                  까지
                </li>
                <li>
                  체험단 정보: 이벤트 종료 후 1년간 보유하며, 이후 자동
                  파기함<br />
                  (단, 정식 회원으로 전환된 경우 회원정보는 별도 탈퇴 요청
                  시까지 보유)
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>회사가 개별적으로 고객의 동의를 받는 경우</p>
              </div>
              <ul>
                <li>동의 받은 기간까지</li>
                <li>
                  이용자의 기본정보는 탈퇴 즉시 삭제되고 있습니다. 다만 관련
                  법령준수, 부정이용 및 남용방지, 분쟁 및 민원처리를 위해
                  개인정보를 최소한의 일정 기간동안 보존하게 됩니다. 보존 사유
                  및 기간은 아래와 같습니다.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="sb-privacypolicy-table">
          <table>
            <colgroup>
              <col style="width: 333px" />
              <col style="width: 333px" />
              <col style="width: 333px" />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>보유기간</th>
                <th>관련법안</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>계약 또는 청약철회 / 대금 결제 및 재화 공급 기록</td>
                <td>5년</td>
                <td>전자상거래 등에서의 소비자 보호에 관한 법률</td>
              </tr>
              <tr>
                <td>소비자 불만 또는 분쟁처리에 관한 기록</td>
                <td>3년</td>
                <td>전자상거래 등에서의 소비자 보호에 관한 법률</td>
              </tr>
              <tr>
                <td>표시/광고에 관한 기록</td>
                <td>6개월</td>
                <td>전자상거래 등에서의 소비자 보호에 관한 법률</td>
              </tr>
              <tr>
                <td>세법이 규정하는 모든 거래에 관한 장부 및 증빙서류</td>
                <td>5년</td>
                <td>국세 기본법</td>
              </tr>
              <tr>
                <td>전자금융 거래에 관한 기록</td>
                <td>5년</td>
                <td>전자금융거래법</td>
              </tr>
              <tr>
                <td>서비스 이용 관련 개인정보 (접속 기록)</td>
                <td>3개월</td>
                <td>통신비밀보호법</td>
              </tr>
              <tr>
                <td>전송 받은 신용정보 내역</td>
                <td>통지 의무 이행 시</td>
                <td>신용정보법</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section04">
        <h6>제4조 개인정보의 제3자 제공</h6>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>
                  회사는 정보주체의 동의, 법률의 특별한 규정 등 「개인정보
                  보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를
                  제3자에게 제공합니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>
                  회사는 이용자의 개인정보를 「제1조 개인정보의 처리 목적」에서
                  고지한 범위 내에서 사용하며, 이용자의 사전동의 없이 제3자에게
                  제공하지 않습니다. 
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>
                  회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div class="sb-privacypolicy-table">
          <table>
            <colgroup>
              <col style="width: 250px" />
              <col style="width: 250px" />
              <col style="width: 250px" />
              <col style="width: 250px" />
            </colgroup>
            <thead>
              <tr>
                <th>제공받는 자</th>
                <th>제공 목적</th>
                <th>제공 항목</th>
                <th>보유 및 이용 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>㈜헥토파이낼셜</td>
                <td>결제 대행(PG) 업무 목적</td>
                <td>회원 식별정보, 결제 이력</td>
                <td>서비스 이용 종료 후 5년</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section05">
        <h6>제5조 개인정보 처리 위탁</h6>
        <p>
          회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
          처리업무를 위탁하고 있습니다.
        </p>
        <div class="sb-privacypolicy-table">
          <table>
            <colgroup>
              <col style="width: 333px" />
              <col style="width: 333px" />
              <col style="width: 333px" />
            </colgroup>
            <thead>
              <tr>
                <th>수탁업체</th>
                <th>위탁업무 내용</th>
                <th>보유 기간 및 이용기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazon Web Services (AWS)</td>
                <td>서비스 데이터 저장 및 클라우드 서버 운영</td>
                <td>회원탈퇴 시 혹은 위탁계약 종료시까지</td>
              </tr>
              <tr>
                <td>리워드 제공 협력사</td>
                <td>체험단 혜택(상품권 등) 지급 목적</td>
                <td>지급 완료 후 즉시 파기</td>
              </tr>
              <tr>
                <td>코리아크레딧뷰로㈜</td>
                <td>각 이동통신사(SKT, KT, LGU+ 및 MVNO)를 통한 본인인증</td>
                <td>회원탈퇴 시 혹은 위탁계약 종료시까지</td>
              </tr>
              <tr>
                <td>(주)헥토파이낸셜</td>
                <td>결제 대행(PG) 업무 목적</td>
                <td>회원탈퇴 시 혹은 위탁계약 종료시까지</td>
              </tr>
              <tr>
                <td>채널톡</td>
                <td>온라인 상담 및 안내 서비스</td>
                <td>회원탈퇴 시 혹은 위탁계약 종료시까지</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sb-privacypolicy-list">
          <ul>
            <li>
              회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무
              수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁
              제한, 수탁자에 대한 관리·감독, <br />손해배상 등 책임에 관한
              사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게
              처리하는지를 감독하고 있습니다.
            </li>
          </ul>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section06">
        <h6>제6조 개인정보의 국외 이전</h6>
        <p>
          회사는 글로벌 결제 편의 제공 및 안정적인 서비스 운영을 위해 다음과
          같이 개인정보를 국외로 이전(처리 위탁)하고 있습니다.
        </p>
        <div class="sb-privacypolicy-table">
          <table>
            <colgroup>
              <col style="width: 200px" />
              <col style="width: 200px" />
              <col style="width: 200px" />
              <col style="width: 200px" />
              <col style="width: 200px" />
            </colgroup>
            <thead>
              <tr>
                <th>이전받는 자</th>
                <th>국가</th>
                <th>이전 목적</th>
                <th>이전 항목</th>
                <th>이전 시기 및 방법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AWS</td>
                <td>미국 등</td>
                <td>데이터 백업(DR)</td>
                <td>서비스 데이터 일체</td>
                <td>필요 시 암호화 전송</td>
              </tr>
              <tr>
                <td>TenPay (WeChat)</td>
                <td>중국</td>
                <td>해외 결제 승인</td>
                <td>결제ID, 거래정보</td>
                <td>결제 시 네트워크 전송</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section07">
        <h6>제7조 개인정보의 파기</h6>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>
                  회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가
                  불필요하게 되었을 때에는 지체 없이 해당 개인정보를
                  파기합니다. 
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>
                  정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나
                  처리목적이 달성 되었음에도 불구하고 다른 법령에 따라
                  개인정보를 계속 보존하여야 하는 경우에는,<br />해당 개인정보를
                  별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여
                  일정기간 보존한 후 파기합니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>
                  종이에 출력된 개인정보는 분쇄기로 분쇄 또는 소각하거나
                  화학약품 처리를 하여 용해하여 파기하고, 전자적 파일형태로
                  저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
                  삭제합니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section08">
        <h6>제8조 정보주체와 법정대리인의 권리·의무 및 행사방법</h6>
        <p>
          정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구
          등의 권리를 행사할 수 있습니다. 회사는 만 14세 미만 아동의 회원가입을
          원칙적으로 제한하고 있습니다. 다만, 예외적으로 처리가 필요한 경우
          법정대리인의 동의를 받습니다.
        </p>
      </div>
      <div class="sb-privacypolicy-section" id="section09">
        <h6>제9조 개인정보의 안전성 확보조치</h6>
        <p>
          회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
          있습니다.
        </p>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육.</p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>
                  기술적 조치: 개인정보처리시스템 등의 접근권한 관리,
                  접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램
                  설치.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>물리적 조치: 전산실, 자료보관실 등의 접근통제.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section10">
        <h6>제10조 링크사이트</h6>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>
                  회사는 ‘이용자’에게 다른 회사의 웹사이트 또는 자료에 대한
                  링크를 제공할 수 있습니다. 이 경우 회사는 ‘이용자’가 제공받는
                  서비스나 자료의 유용성에 대한 통제권이 없으므로, ‘이용자’와
                  해당 인터넷 사이트의 거래에 대해서 회사는 어떠한 책임도 지지
                  않습니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>
                  링크 페이지 또는 연결된 페이지로 옮겨갈 경우 해당 인터넷
                  사이트의 개인정보처리방침은 회사와 무관하므로 새로 방문한
                  인터넷 사이트의 정책을 검토해 보시기 바랍니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section11">
        <h6>제11조 광고성 정보 전송</h6>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>
                  회사는 이용자의 사전 동의를 받지 않으면 영리목적의 광고성
                  정보를 전송하지 않습니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>
                  회사는 이용자가 이메일 전송에 대한 동의를 한 경우 상품정보
                  안내 등 온라인 마케팅을 위해 광고성 정보를 이메일로 전송할 수
                  있습니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section12">
        <h6>
          제12조  개인정보의 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항
        </h6>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>
                  회사는 이용자에게 개인화된 서비스 제공을 위해 "쿠키(cookie)"를
                  사용합니다. 쿠키는 웹사이트가 이용자의 컴퓨터
                  브라우저(크롬, 인터넷 익스플로러 등)로 전송하는 소량의 정보
                  입니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
              </div>
              <ul>
                <li>이용자의 관심 분야에 따라 차별화된 정보 제공</li>
                <li>이용자의 이용기록을 분석하여 서비스 개선</li>
                <li>유입 분석 및 전환율 측정 등 마케팅 성과 분석 목적</li>
                <li>
                  검색창 설정 유지, 최근 검색 기록 저장 등 사용자 편의 개선 목적
                </li>
              </ul>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>
                  이용자는 웹 브라우저의 옵션을 조정하여 모든 쿠키를
                  받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면
                  모든 쿠키를 거부할 수 있습니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section13">
        <h6>제13조 개인정보보호 책임자 및 관리자</h6>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
          관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이
          개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <div class="sb-privacypolicy-table">
          <table class="data-table">
            <colgroup>
              <col style="width: 250px" />
              <col style="width: 250px" />
              <col style="width: 250px" />
              <col style="width: 250px" />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>개인정보 보호책임자</th>
                <th>개인정보보호 담당부서</th>
                <th>개인정보 민원 처리센터</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>담당</td>
                <td>조성준</td>
                <td>정보인프라팀</td>
                <td>컴플라이언스실</td>
              </tr>
              <tr>
                <td>전화번호</td>
                <td>02-6953-0352</td>
                <td>02-6953-0352</td>
                <td>02-6953-0944</td>
              </tr>
              <tr>
                <td>이메일</td>
                <td>hd_sec_info@hecto.co.kr</td>
                <td>hd_sec_info@hecto.co.kr</td>
                <td>privacy@hectodata.co.kr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section14">
        <h6>제14조 의견수렴 및 불만처리</h6>
        <div class="sb-privacypolicy-list">
          <ol>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>1)</strong>
                <p>
                  회사는 이용자가 타인의 개인정보를 도용하여 회원 가입 등을
                  하였음을 알게 된 때에는 지체 없이 해당 아이디에 대한 서비스
                  이용정지 또는 회원 탈퇴 등 필요한 조치를 취합니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>2)</strong>
                <p>
                  회사는 자신의 개인정보 도용을 인지한 이용자가 해당 아이디에
                  대해 서비스 이용정지 또는 회원 탈퇴를 요구하는 경우에는 즉시
                  조치를 취합니다.
                </p>
              </div>
            </li>
            <li>
              <div class="sb-privacypolicy-list__title">
                <strong>3)</strong>
                <p>
                  기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
                  기관에 문의하시기 바랍니다.
                </p>
              </div>
              <ul>
                <li>
                  한국인터넷진흥원 개인정보침해신고센터:<br class="mo" />
                  <a href="https://privacy.kisa.or.kr/" target="_blank"
                    >privacy.kisa.or.kr</a
                  >
                  / 국번없이 118
                </li>
                <li>
                  개인정보분쟁조정 위원회:<br class="mo" />
                  <a href="https://www.kopico.go.kr/" target="_blank"
                    >www.kopico.go.kr</a
                  >
                  / 1833-6972
                </li>
                <li>
                  대검찰청 사이버수사과:<br class="mo" />
                  <a href="https://www.spo.go.kr/" target="_blank"
                    >www.spo.go.kr</a
                  >
                  / 국번없이 1301
                </li>
                <li>
                  경찰청 사이버안전국:<br class="mo" />
                  <a href="https://ecrm.police.go.kr/" target="_blank"
                    >ecrm.cyber.go.kr</a
                  >
                  / 국번없이 182
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="sb-privacypolicy-section" id="section15">
        <h6>제15조 고지의 의무</h6>
        <p>
          회사는 현 개인정보 처리방침을 변경하는 경우에는 변경 및 시행의 시기,
          변경된 내용을 지속적으로 공개하며, 7일전부터 홈페이지의 ‘공지사항＇을
          통해 고지할 것입니다. <br />다만 개인정보의 수집 및 활용, 제3자 정보
          등과 같이 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에
          공지하여야 한다.
        </p>
      </div>
    </div>
    <div class="sb-privacypolicy-foot">
      <p>공고일자 : 2026년 01월 15일</p>
      <p>시행일자 : 2026년 01월 15일</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'main',
});

//sort
const selectRef = ref(null);
const selectedSortOption = ref([{ name: '2026년 01월 15일 (현행)' }]);
const selectedSort = ref(selectedSortOption.value[0]);
</script>
