<template>
  <div class="p-dialog-inner">
    <div class="sb-dialog-payment-detail">
      <h6 class="p-dialog-title">결제 상세 정보</h6>
      <div class="sb-dialog-payment-detail-head">
        <p>
          <span>셀링부스터</span>
          <span>Pro플랜(월간)</span>
        </p>
        <h3>29,000원</h3>
      </div>
      <div class="sb-dialog-payment-detail-item">
        <div class="sb-dialog-payment-detail-item__title">결제 정보</div>
        <table>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <td>
                <strong>20260401170323-001</strong>
              </td>
            </tr>
            <tr>
              <th>거래 종류</th>
              <td>
                <strong>신용(개인)</strong>
              </td>
            </tr>
            <tr>
              <th>결제 수단</th>
              <td>
                <strong>KB국민카드 (1234-****-****-6789)</strong>
              </td>
            </tr>
            <tr>
              <th>할부 개월</th>
              <td>
                <strong>일시불</strong>
              </td>
            </tr>
            <tr>
              <th>거래 일시</th>
              <td>
                <strong>2026.04.01 19:19:05</strong>
              </td>
            </tr>
            <tr>
              <th>승인 번호</th>
              <td>
                <strong>123456789</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sb-dialog-payment-detail-item">
        <div class="sb-dialog-payment-detail-item__title">구매 정보</div>
        <table>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <td>20260401170323-001</td>
            </tr>
            <tr>
              <th>과세 금액</th>
              <td>26,100원</td>
            </tr>
            <tr>
              <th>비과세 금액</th>
              <td>0원</td>
            </tr>
            <tr>
              <th>부가세</th>
              <td>2,900원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sb-dialog-payment-detail-item">
        <div class="sb-dialog-payment-detail-item__title">판매자 정보</div>
        <table>
          <tbody>
            <tr>
              <th>판매자 상호</th>
              <td>(주)헥토데이터</td>
            </tr>
            <tr>
              <th>대표자명</th>
              <td>오승철</td>
            </tr>
            <tr>
              <th>사업자등록번호</th>
              <td>023-서울강남-01633</td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>02-6953-0257</td>
            </tr>
            <tr>
              <th>사업장 주소</th>
              <td>서울특별시 강남구 테헤란로 233 큰길타워 10F</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sb-dialog-payment-detail-button">
        <Button severity="primary" label="영수증 출력" />
        <Button severity="primary" label="거래 명세표 출력" outlined />
      </div>
      <div class="sb-caution">
        <ul>
          <li>
            위 신용카드 매출전표는 부가가치세법 제32조의 2 제3항에 의거하여
            발행되었으며, 동법 시행령 제57조 제2항에 의거하여 세금계산서를
            교부하지 않습니다.
          </li>
          <li>
            카드사 측 정책 상, BC/국민카드 결제 건의 경우 가상 카드번호로 보여질
            수 있습니다. <br />
            실 카드번호의 내역이 필요하다면 해당 카드사로 문의 부탁드립니다.
          </li>
          <li>
            결제 취소는 결제하신 상품을 이용하지 않은 경우에 한해, 결제일로부터
            14일 이내에 [결제 취소]를 통해 진행하실 수 있습니다.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>
