<template>
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h4>마켓 트렌드</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-trend-contents">
      <div class="sb-keyword-detail">
        <div class="sb-keyword-detail-head">
          <div class="sb-keyword-detail-head__title">
            <h4><span>유산균</span> 시장 분석 리포트</h4>
            <p>2026년 04월 기준</p>
          </div>
          <div class="sb-keyword-detail-head__button">
            <Button label="연관 리포트" severity="contrast" outlined />
            <Button label="비교하기" severity="primary" />
          </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="sb-keyword-report">
              <div class="sb-keyword-report-head">
                <div class="sb-keyword-report-product">
                  <div class="sb-keyword-report-product__thumb">
                    <img src="/temp/keyword2.png" alt="" />
                  </div>
                  <div class="sb-keyword-report-product__contents">
                    <h5>뉴오리진 이너플로라 UREX 프로바이오틱스 170mg</h5>
                    <div class="sb-keyword-report-product__category">
                      <Breadcrumb :model="breadcrumb" />
                    </div>
                  </div>
                </div>
                <div class="sb-keyword-report-menu">
                  <Button rounded severity="white">
                    <template #icon>
                      <IconSystemKakaotalk class="ico-system-kakaotalk" />
                    </template>
                  </Button>
                  <Button rounded severity="white">
                    <template #icon>
                      <IconSystemMail class="ico-system-mail" />
                    </template>
                  </Button>
                  <Button rounded severity="white">
                    <template #icon>
                      <IconSystemCopy class="ico-system-copy" />
                    </template>
                  </Button>
                  <Button rounded severity="white">
                    <template #icon>
                      <IconActionFavorite class="ico-action-favorite" />
                      <!-- <IconActionFavoriteFull class="ico-action-favorite-full" /> -->
                    </template>
                  </Button>
                </div>
              </div>
              <div class="sb-keyword-report-body">
                <h6>‘유산균’</h6>
                <p>
                  키워드는 최근 3개월 평균 대비 약 12% 상승하며 꾸준한 수요
                  증가세를 보이고 있습니다. 현재 유산균 시장의 경쟁 강도는 동일
                  카테고리 내 상품 수와 광고 침투율을 고려했을 때 '보통'
                  수준으로 분류됩니다. <br />
                  평균 CPC는 1,850원으로 카테고리 평균 대비 낮은 편에 속하여
                  광고 효율이 상대적으로 유리한 구간입니다. <br />
                  상위 노출 상품들의 가격은 주로 2~3만원대에 집중되어 있어, 해당
                  가격 구간에서의 시장 진입 및 경쟁이 가장 치열할 것으로
                  분석됩니다.
                </p>
                <h6>‘유산균’ 광고 경쟁 및 CPC 분석</h6>
                <ul>
                  <li>
                    <strong>경쟁 강도: 보통 (0.53)</strong><br />
                    동일 카테고리 내 등록 상품 수와 1페이지 내 광고 비중을
                    종합한 결과, 과열 상태는 아니나 중위권 경쟁이 지속되고
                    있습니다.
                  </li>
                  <li>
                    <strong>광고 효율성: 높음</strong><br />
                    동일 카테고리 평균 CPC(2,200원) 대비 약 15% 저렴한 비용으로
                    노출이 가능하여, 동일 예산 대비 노출 효율이 유리합니다.
                  </li>
                </ul>
              </div>
              <div class="sb-keyword-report-status">
                <dl>
                  <dt>월 검색량</dt>
                  <dd>
                    <h6>39,800회</h6>
                  </dd>
                </dl>
                <dl>
                  <dt>광고 클릭 수</dt>
                  <dd>
                    <h6>9,999건</h6>
                  </dd>
                </dl>
                <dl>
                  <dt>경쟁강도</dt>
                  <dd>
                    <h6>9,999.0</h6>
                    <Badge value="매우 높음" severity="danger"></Badge>
                  </dd>
                </dl>
                <dl>
                  <dt>월 평균 노출 광고 수</dt>
                  <dd>
                    <h6>9,999건</h6>
                  </dd>
                </dl>
                <dl>
                  <dt>예상 광고비</dt>
                  <dd>
                    <h6>9,999,999원</h6>
                  </dd>
                </dl>
                <dl>
                  <dt>평균 CPC</dt>
                  <dd>
                    <h6>9,999,999원</h6>
                  </dd>
                </dl>
              </div>
              <div class="sb-keyword-report-button">
                <Button severity="contrast" outlined>
                  <span class="p-button-label">상세 지표 접기</span>
                  <IconArrowAchevronDown class="ico-arrow-achevron-down" />
                </Button>
              </div>
              <div class="sb-keyword-report-trend">
                <div class="sb-keyword-report-trend__title">
                  <h6>최근 3개월 검색 추이</h6>
                  <p>
                    최근 3개월 검색량이 12% 증가하여 성장 추세를 보이고
                    있습니다.
                  </p>
                </div>
                <div class="sb-keyword-report-trend-search">
                  <div class="sb-keyword-report-trend-search__form">
                    <SbInput placeholder="비교 키워드" />
                    <Button label="추가" severity="primary" outlined />
                  </div>
                  <div class="sb-keyword-report-trend-search__chip">
                    <div class="sb-chip">
                      <div class="sb-chip-list">
                        <Chip label="유산균" size="large" severity="primary" />

                        <Chip
                          label="가루 유산균"
                          removable
                          size="large"
                          severity="success"
                        />
                        <Chip
                          label="어린이 유산균 "
                          removable
                          size="large"
                          severity="info"
                        />
                        <Chip
                          label="고함량 유산균"
                          removable
                          size="large"
                          severity="warn"
                        />
                        <Chip
                          label="임산부 유산균"
                          removable
                          size="large"
                          severity="danger"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sb-keyword-report-trend-chart">
                  <div class="sb-keyword-report-trend-chart-col">
                    <dl>
                      <dt>광고클릭량</dt>
                      <dd></dd>
                    </dl>
                  </div>
                  <div class="sb-keyword-report-trend-chart-col">
                    <div class="sb-keyword-report-trend-chart-row">
                      <dl>
                        <dt>디바이스</dt>
                        <dd></dd>
                      </dl>
                      <dl>
                        <dt>성별</dt>
                        <dd></dd>
                      </dl>
                    </div>
                    <div class="sb-keyword-report-trend-chart-row">
                      <dl>
                        <dt>연령</dt>
                        <dd></dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="sb-keyword-history">
              <div class="sb-keyword-history__title">
                <h5>최근 3개월 검색 추이</h5>
                <p>
                  최근 3개월 검색량이 12% 증가하여<br />
                  성장 추세를 보이고 있습니다.
                </p>
              </div>
              <div>
                <SbChartBar :percent="0" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-6">
            <div class="sb-keyword-analyze">
              <div class="sb-keyword-analyze__title">
                <h5>키워드 분석</h5>
              </div>
              <div class="sb-keyword-analyze-chart">
                <SbChartWave :percent="85" />
                <div class="sb-keyword-analyze-chart__text">
                  <h6 class="text-primary">좋아요!</h6>
                  <p>
                    경잴률이 매우 높고<br />
                    잘파는 사람들도 있어요.
                  </p>
                </div>
              </div>
              <div class="sb-keyword-analyze-state">
                <dl>
                  <dt>트렌드</dt>
                  <dd>
                    <p>0.0445</p>
                  </dd>
                </dl>
                <dl>
                  <dt>경쟁지수</dt>
                  <dd>
                    <p>0.7</p>
                  </dd>
                </dl>
                <dl>
                  <dt>경쟁강도</dt>
                  <dd>
                    <p>9,999.0</p>
                    <Badge value="매우 높음" severity="danger"></Badge>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-keyword-analyze">
              <div class="sb-keyword-analyze__title">
                <h5>상품 분석</h5>
              </div>
              <div class="sb-keyword-analyze-chart">
                <SbChartWave :percent="39" />
                <div class="sb-keyword-analyze-chart__text">
                  <h6 class="text-warn">좋아요!</h6>
                  <p>
                    경잴률이 매우 높고<br />
                    잘파는 사람들도 있어요.
                  </p>
                </div>
              </div>
              <div class="sb-keyword-analyze-state">
                <dl>
                  <dt>상품 평균가</dt>
                  <dd>
                    <p>9,999원</p>
                  </dd>
                </dl>
                <dl>
                  <dt>TOP10 평균가</dt>
                  <dd>
                    <p>14,599원</p>
                  </dd>
                </dl>
                <dl>
                  <dt>전체 상품 수</dt>
                  <dd>
                    <p>9,999건</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-6">
            <div class="sb-keyword-table">
              <div class="sb-keyword-table__title">
                <h5>연관 키워드</h5>
                <p>※ 2026년 04월 기준</p>
              </div>
              <div class="sb-table">
                <ClientOnly>
                  <DataTable
                    :value="products"
                    responsiveLayout="scroll"
                    removableSort
                    class="p-datatable-custom"
                  >
                    <Column field="ranking" header="랭킹" style="width: 10%">
                      <template #body="slotProps">
                        <span class="font-medium">{{
                          slotProps.data.ranking
                        }}</span>
                      </template>
                    </Column>

                    <Column field="keyword" header="키워드" style="width: 25%">
                      <template #body="slotProps">
                        <span class="text-gray-800 font-semibold">{{
                          slotProps.data.keyword
                        }}</span>
                      </template>
                    </Column>

                    <Column
                      field="category"
                      header="카테고리"
                      style="width: 25%"
                      headerClass="text-center"
                      bodyClass="text-center"
                    >
                      <template #body="slotProps">
                        <span class="text-gray-600">{{
                          slotProps.data.category
                        }}</span>
                      </template>
                    </Column>

                    <Column
                      field="searchVolume"
                      header="월 검색량"
                      style="width: 20%"
                      headerClass="text-center"
                      bodyClass="text-center"
                    >
                      <template #body="slotProps">
                        {{ slotProps.data.searchVolume.toLocaleString() }}건
                      </template>
                    </Column>

                    <Column
                      field="competition"
                      sortable
                      headerClass="text-right"
                      bodyClass="text-right"
                      style="width: 150px"
                    >
                      <template #header>
                        <div
                          class="sb-table-header-title"
                          @mouseenter="togglePopover"
                          @mouseleave="togglePopover"
                        >
                          <span
                            class="p-datatable-column-title"
                            data-pc-section="columntitle"
                            >경쟁강도</span
                          >
                          <IconSystemInformationCircle
                            class="ico-system-information-circle"
                          />
                        </div>
                      </template>
                      <template #body="slotProps">
                        <div class="sb-legend">
                          <span
                            class="sb-legend-item"
                            :class="
                              slotProps.data.competition >= 0.8
                                ? 'text-primary'
                                : slotProps.data.competition >= 0.6
                                  ? 'text-success'
                                  : slotProps.data.competition >= 0.4
                                    ? 'text-info'
                                    : slotProps.data.competition >= 0.2
                                      ? 'text-warn'
                                      : 'text-danger'
                            "
                          >
                            {{ slotProps.data.competition.toFixed(2) }}
                          </span>
                        </div>
                      </template>
                    </Column>
                  </DataTable>
                </ClientOnly>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-keyword-ranking">
              <div class="sb-keyword-ranking__title">
                <h5>연관 상품 랭킹 TOP20</h5>
              </div>
              <div class="sb-tab">
                <Button label="스마트스토어" variant="text" class="active" />
                <Button label="쿠팡" variant="text" />
                <Button label="11번가" variant="text" />
                <Button label="G마켓" variant="text" />
              </div>
              <div>
                <div class="sb-tab-circle">
                  <Button label="Top20" variant="text" class="active" />
                  <Button label="5천원" variant="text" />
                  <Button label="1만원" variant="text" />
                  <Button label="3만원" variant="text" />
                  <Button label="5만원 이상 " variant="text" />
                </div>
              </div>
              <div class="sb-trend-top sb-trend-top--small">
                <div class="sb-trend-top-list">
                  <NuxtLink
                    v-for="item in tumblerList"
                    :key="item.rank"
                    to="/"
                    class="sb-trend-top-list-item"
                  >
                    <div class="sb-trend-top-list-item__thumb">
                      <Badge
                        :value="item.rank"
                        size="small"
                        class="p-badge-circle"
                        :severity="item.rank > 3 ? 'contrast' : undefined"
                      ></Badge>
                      <img :src="item.imgSrc" :alt="item.title" />
                    </div>
                    <div class="sb-trend-top-list-item__contents">
                      <div class="sb-trend-top-list-item__category">
                        <span>{{ item.brand }}</span>
                        <span>{{ item.mall }}</span>
                      </div>
                      <div class="sb-trend-top-list-item__title">
                        {{ item.title }}
                      </div>
                      <div class="sb-trend-top-list-item__price">
                        {{ item.price.toLocaleString() }}원
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="sb-keyword-faq">
              <div class="sb-keyword-faq__title">
                <h5>‘유산균’ 시장 자주 묻는 질문</h5>
              </div>
              <div class="sb-keyword-faq-list">
                <Accordion value="0">
                  <AccordionPanel value="0">
                    <AccordionHeader>
                      <div class="sb-keyword-faq-list__title">
                        <strong>Q</strong>
                        <p>유산균 시장의 경쟁은 심한 편인가요?</p>
                      </div>
                    </AccordionHeader>
                    <AccordionContent>
                      <div class="sb-keyword-faq-list__contents">
                        <strong>A</strong>
                        <p>
                          현재 유산균 키워드의 경쟁 강도는 0.53으로 동일
                          카테고리 내에서 '보통' 수준입니다. <br />
                          상품 공급량은 많으나 광고 침투율이 상대적으로 낮아
                          틈새 전략이 가능합니다.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <AccordionPanel value="1">
                    <AccordionHeader>
                      <div class="sb-keyword-faq-list__title">
                        <strong>Q</strong>
                        <p>유산균 광고비는 어느 정도 예상해야 하나요?</p>
                      </div>
                    </AccordionHeader>
                    <AccordionContent>
                      <div class="sb-keyword-faq-list__contents">
                        <strong>A</strong>
                        <p>
                          현재 유산균 키워드의 경쟁 강도는 0.53으로 동일
                          카테고리 내에서 '보통' 수준입니다. <br />
                          상품 공급량은 많으나 광고 침투율이 상대적으로 낮아
                          틈새 전략이 가능합니다.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <AccordionPanel value="2">
                    <AccordionHeader>
                      <div class="sb-keyword-faq-list__title">
                        <strong>Q</strong>
                        <p>유산균 시장의 최근 수요 트렌드는 어떤가요?</p>
                      </div>
                    </AccordionHeader>
                    <AccordionContent>
                      <div class="sb-keyword-faq-list__contents">
                        <strong>A</strong>
                        <p>
                          현재 유산균 키워드의 경쟁 강도는 0.53으로 동일
                          카테고리 내에서 '보통' 수준입니다. <br />
                          상품 공급량은 많으나 광고 침투율이 상대적으로 낮아
                          틈새 전략이 가능합니다.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <AccordionPanel value="3">
                    <AccordionHeader>
                      <div class="sb-keyword-faq-list__title">
                        <strong>Q</strong>
                        <p>상위 노출을 위한 적정 판매 가격은 얼마인가요?</p>
                      </div>
                    </AccordionHeader>
                    <AccordionContent>
                      <div class="sb-keyword-faq-list__contents">
                        <strong>A</strong>
                        <p>
                          현재 유산균 키워드의 경쟁 강도는 0.53으로 동일
                          카테고리 내에서 '보통' 수준입니다. <br />
                          상품 공급량은 많으나 광고 침투율이 상대적으로 낮아
                          틈새 전략이 가능합니다.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <AccordionPanel value="4">
                    <AccordionHeader>
                      <div class="sb-keyword-faq-list__title">
                        <strong>Q</strong>
                        <p>상위 노출을 위한 적정 판매 가격은 얼마인가요?</p>
                      </div>
                    </AccordionHeader>
                    <AccordionContent>
                      <div class="sb-keyword-faq-list__contents">
                        <strong>A</strong>
                        <p>
                          현재 유산균 키워드의 경쟁 강도는 0.53으로 동일
                          카테고리 내에서 '보통' 수준입니다. <br />
                          상품 공급량은 많으나 광고 침투율이 상대적으로 낮아
                          틈새 전략이 가능합니다.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-6">
            <div class="sb-keyword-ktrend">
              <div class="sb-keyword-ktrend__title">
                <h5>K트렌드 콘텐츠</h5>
              </div>
              <div class="sb-tab">
                <Button label="블로그" variant="text" class="active" />
                <Button label="카페" variant="text" />
                <Button label="뉴스" variant="text" />
              </div>
              <div class="sb-keyword-ktrend-list">
                <NuxtLink to="/" class="sb-keyword-ktrend-list-item">
                  <h6>두바이 쫀득쿠키 GS25 말차초코 두쫀볼 편의점 디저트</h6>
                  <div class="sb-keyword-ktrend-list-item__text">
                    2026년에 가장 핫한 디저트하면 단연 두바이 쫀득쿠키잖아요.
                    씨유 두바이 쫀득 찹쌀떡 후기 현시점 편의점 두바이 쫀득쿠키
                    중 원탑, 이건 찹쌀떡 버전이라 겉부분이 코코아 파우더가 아닌
                    초코 코팅으로 되어있어요. 가격 3,100원으로 판매되고 있어요
                  </div>
                  <div class="sb-keyword-ktrend-list-item__meta">
                    <span>2026-01-11</span>
                    <span>망디의먹로그</span>
                  </div>
                </NuxtLink>
                <NuxtLink to="/" class="sb-keyword-ktrend-list-item">
                  <h6>두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피</h6>
                  <div class="sb-keyword-ktrend-list-item__text">
                    두바이 쫀득쿠키 만들기 두바이 쫀득쿠키
                  </div>
                  <div class="sb-keyword-ktrend-list-item__meta">
                    <span>2026-01-08</span>
                    <span>축복받은 유전자 완소남매의 엄마표 먹거리</span>
                  </div>
                </NuxtLink>
                <NuxtLink to="/" class="sb-keyword-ktrend-list-item">
                  <h6>두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피</h6>
                  <div class="sb-keyword-ktrend-list-item__text">
                    두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오
                    스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에
                    피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진
                    디저트를 기억하실겁니다.
                  </div>
                  <div class="sb-keyword-ktrend-list-item__meta">
                    <span>2026-01-08</span>
                    <span>축복받은 유전자 완소남매의 엄마표 먹거리</span>
                  </div>
                </NuxtLink>
                <NuxtLink to="/" class="sb-keyword-ktrend-list-item">
                  <h6>두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피</h6>
                  <div class="sb-keyword-ktrend-list-item__text">
                    두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오
                    스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에
                    피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진
                    디저트를 기억하실겁니다.
                  </div>
                  <div class="sb-keyword-ktrend-list-item__meta">
                    <span>2026-01-08</span>
                    <span>축복받은 유전자 완소남매의 엄마표 먹거리</span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-keyword-ksnapp">
              <div class="sb-keyword-ksnapp__title">
                <h5>
                  <img src="./../../../assets/images/ksnapp.png" alt="KSnapp" />
                </h5>
                <div class="sb-keyword-ksnapp__menu">
                  <Button rounded severity="white">
                    <template #icon>
                      <IconSystemLinkNew class="ico-system-link-new" />
                    </template>
                  </Button>
                  <SbMenu :items="menuItems" />
                </div>
              </div>
              <div class="sb-tab">
                <Button label="인기기사" variant="text" class="active" />
                <Button label="K컬처" variant="text" />
              </div>
              <div class="sb-keyword-ksnapp-list">
                <NuxtLink to="/" class="sb-keyword-ksnapp-list-item">
                  <div class="sb-keyword-ksnapp-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-keyword-ksnapp-list-item__title">
                    <h6>
                      장원영이 쏘아올린 '두쫀쿠' 열풍, 한국 강타…냉면집에서도
                      판다
                    </h6>
                  </div>
                </NuxtLink>
                <NuxtLink to="/" class="sb-keyword-ksnapp-list-item">
                  <div class="sb-keyword-ksnapp-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-keyword-ksnapp-list-item__title">
                    <h6>
                      안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은
                      ‘두쫀쿠’ 열풍안성재 셰프도 쩔쩔매더니... 안성재도 무릎
                      꿇린 음식 전국은 ‘두쫀쿠’ 열풍
                    </h6>
                  </div>
                </NuxtLink>
                <NuxtLink to="/" class="sb-keyword-ksnapp-list-item">
                  <div class="sb-keyword-ksnapp-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-keyword-ksnapp-list-item__title">
                    <h6>
                      장원영이 쏘아올린 '두쫀쿠' 열풍, 한국 강타…냉면집에서도
                      판다
                    </h6>
                  </div>
                </NuxtLink>
                <NuxtLink to="/" class="sb-keyword-ksnapp-list-item">
                  <div class="sb-keyword-ksnapp-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-keyword-ksnapp-list-item__title">
                    <h6>
                      안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은
                      ‘두쫀쿠’ 열풍안성재 셰프도 쩔쩔매더니... 안성재도 무릎
                      꿇린 음식 전국은 ‘두쫀쿠’ 열풍
                    </h6>
                  </div>
                </NuxtLink>
              </div>
              <div class="sb-keyword-ksnapp-banner">
                <h5>
                  전 세계가 주목하는 K-트렌드 <br />
                  <strong>KSNAP</strong> 에서 확인하세요
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="sb-keyword-relation">
              <div class="sb-keyword-relation__contents">
                <div class="sb-keyword-relation__title">
                  <h5>연관 시장 분석 리포트</h5>
                  <p>‘유산균’과 연관된 시장 분석 리포트를 추천해드릴게요!</p>
                </div>
                <div class="sb-chip sb-chip--large">
                  <div class="sb-chip-list">
                    <Chip label="어린이 유산균" size="large" />
                    <Chip label="가루 유산균" size="large" />
                    <Chip label="고함량 유산균" size="large" />
                    <Chip label="임산부 유산균" size="large" />
                    <Chip label="건강기능식품" size="large" />
                  </div>
                </div>
              </div>
              <div class="sb-keyword-relation__img">
                <img src="/temp/keyword1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="sb-banner">
          <img src="/temp/banner.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemMail from '@/assets/icons/system/mail.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemLinkNew from '@/assets/icons/system/link-new.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '키워드 분석' },
]);

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

//
const products = ref([
  {
    ranking: 1,
    keyword: '어린이 유산균',
    category: '건강기능식품',
    searchVolume: 896000,
    competition: 6.05,
    status: '최적',
  },
  {
    ranking: 2,
    keyword: '가루 유산균',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 3,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 4,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 5,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 6,
    keyword: '락토핏',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 7,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 8,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 9,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
  {
    ranking: 10,
    keyword: '락토핏',
    category: '헬스케어',
    searchVolume: 449700,
    competition: 0.41,
    status: '최적',
  },
]);

const tumblerList = ref([
  {
    rank: 1,
    imgSrc: '/temp/top1.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 H2.0 플로우스테이트 텀블러',
    price: 28000,
  },
  {
    rank: 2,
    imgSrc: '/temp/top2.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 스텐리1913 젠처 프로듀어 플립 스트로 텀블러 887ml 크림',
    price: 22580,
  },
  {
    rank: 3,
    imgSrc: '/temp/top3.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title:
      '락앤락 텀블러 손잡이 스텐 텀블러 메트로 머그 475ml 보온 보냉 컵 커피 티',
    price: 23200,
  },
  {
    rank: 4,
    imgSrc: '/temp/top4.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 퀜처 플로우 스테이트 텀블러 H2.0',
    price: 38630,
  },
  {
    rank: 5,
    imgSrc: '/temp/top5.png',
    brand: '스텐리1913',
    mall: '네이버쇼핑',
    title: '스텐리 바이탈라이즈 쉐이커 텀블러 591ml + 컨테이너 103ml 세트',
    price: 57660,
  },
  {
    rank: 6,
    imgSrc: '/temp/top6.png',
    brand: '보아르',
    mall: '네이버쇼핑',
    title: '보아르 투웨이 대용량 손잡이 스텐 보온 보냉 텀블러...',
    price: 22700,
  },
  {
    rank: 7,
    imgSrc: '/temp/top7.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title: '락앤락 모그 스텐 머그컵 텀블러',
    price: 24790,
  },
  {
    id: 'stanley-aerolight-33',
    rank: 8,
    imgSrc: '/temp/top8.png',
    brand: '스텐리',
    mall: '네이버쇼핑',
    title: '스텐리 아이스플로우 에어로라이트 패스트플로우 텀블러',
    price: 33490,
    to: '/product/stanley-aerolight-33',
  },
  {
    rank: 9,
    imgSrc: '/temp/top9.png',
    brand: '락앤락',
    mall: '네이버쇼핑',
    title: '락앤락 메트로카페 세라믹 텀블러 바닐라라떼 650ml',
    price: 24570,
  },
]);
</script>
