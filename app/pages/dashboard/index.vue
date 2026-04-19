<template>
  <div class="sb-dashboard">
    <div class="sb-dashboard-head">
      <div class="sb-dashboard-head-title">
        <h4>반가워요 셀링부스터님</h4>
        <h3>시작 전 체크해 볼까요?</h3>
      </div>

      <div class="sb-dashboard-head-swiper">
        <div class="sb-dashboard-head-swiper-inner">
          <ClientOnly>
            <Swiper
              :slidesPerView="3"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }"
              :spaceBetween="8"
              :breakpoints="{
                0: {
                  slidesPerView: 'auto',
                  spaceBetween: 0,
                  loop: true,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                  loop: false,
                },
                1800: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                  loop: false,
                },
              }"
              :navigation="{
                nextEl: '.sb-swiper-controls__next',
              }"
              :modules="modules"
            >
              <SwiperSlide v-for="n in 10" :key="n">
                <div class="sb-dashboard-head-swiper-item">
                  <div class="sb-dashboard-head-swiper-item__text">
                    <strong>
                      네이버스토어 유입량
                      <span class="text-primary">20% 부족</span>
                    </strong>
                    <p>상품명 점검을 통해 검색 노출을 높여보세요.</p>
                  </div>
                  <div class="sb-dashboard-head-swiper-item__time">
                    6시간 전
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="pc"></SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
        <div class="sb-swiper-controls">
          <Button rounded severity="neutral" class="sb-swiper-controls__next">
            <template #icon>
              <IconArrowRight class="ico-arrow-right" />
            </template>
          </Button>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="col-6">
        <div class="sb-dashboard-status">
          <div class="sb-dashboard-status-info">
            <h5>현재 매출 기록</h5>
            <div class="sb-dashboard-status-info-badge">
              <div class="pc">
                <Badge value="Level 2" severity="level2"></Badge>
              </div>
              <div class="mo">
                <Badge value="Lv.2" severity="level2"></Badge>
              </div>
            </div>
            <div class="sb-dashboard-status-info-price">
              <h3>12,680,760</h3>
              <h3>원</h3>
            </div>
            <div class="sb-dashboard-status-info-text">
              Lv.3 <span>목표</span>까지 <strong>22,319,240원</strong>
              <span>남았어요!</span>
            </div>
            <div class="sb-dashboard-status-info-button">
              <Button severity="contrast" size="small">
                <span class="p-button-label">운영 목표 관리</span>
                <IconArrowRight class="ico-arrow-right" />
              </Button>
              <Button severity="contrast" size="small" outlined>
                <span class="p-button-label">온보딩 완료하기</span>
                <IconArrowRight class="ico-arrow-right" />
              </Button>
            </div>
          </div>
          <div class="sb-dashboard-status-chart">
            <div class="sb-dashboard-status-chart-text">
              <p>달성율</p>
              <div class="sb-dashboard-status-chart-text__percent">
                <h1>36</h1>
                <h3>%</h3>
              </div>
            </div>
            <SbChartGaugeCircle :score="36" />
          </div>
        </div>
      </div>
      <div class="col-6 sb-dashboard-planner">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>오늘(2026.04.06)의 플래너 체크하세요.</h5>
            <div class="sb-dashboard-card-head-menu">
              <NuxtLink to="/">
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </NuxtLink>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-dashboard-planner-list" v-scroll-end>
              <div class="sb-dashboard-planner-scroll">
                <NuxtLink
                  to="/"
                  class="sb-dashboard-planner-item"
                  v-for="n in 3"
                >
                  <div class="sb-dashboard-planner-item__title">
                    <p>
                      부가세신고일자 부가세 신고필 제목 입력 글자수는
                      30자부가세신고일자 부가세 신고필 제목 입력 글자수는
                      30자부가세신고일자 부가세 신고필 제목 입력 글자수는 30자
                    </p>
                  </div>
                  <div class="sb-dashboard-planner-item__text">
                    스마트스토어 키워드 광고종료 내용 영역의 최대 입력 글자수는
                    공백 포함해서 50자로 제안스마트스토어 키워드 광고종료 내용
                    영역의 최대 입력 글자수는 공백 포함해서 50자로
                    제안스마트스토어 키워드 광고종료 내용 영역의 최대 입력
                    글자수는 공백 포함해서 50자로 제안
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 sb-dashboard-keyword-top10">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>내 상품 키워드 TOP 10 분석</h5>
            <div class="sb-dashboard-card-head-menu">
              <div class="sb-dashboard-card-head-menu__text">
                전일 00시 기준
              </div>
              <NuxtLink to="/">
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </NuxtLink>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-table">
              <DataTable
                v-scroll-end
                :value="keywordTop10"
                responsiveLayout="scroll"
                removableSort
                scrollable
              >
                <Column
                  field="keyword"
                  header="키워드"
                  bodyClass="text-left"
                  style="width: 150px"
                >
                  <template #body="slotProps">
                    <span v-html="slotProps.data.keyword"></span>
                  </template>
                </Column>
                <Column
                  field="searchVol"
                  header="월 검색량"
                  bodyClass="text-right"
                  style="width: 136px"
                >
                  <template #body="slotProps">
                    <span v-html="slotProps.data.searchVol"></span>
                  </template>
                </Column>
                <Column
                  field="ranking"
                  header="카테고리내 순위"
                  bodyClass="text-right"
                  style="width: 136px"
                  class="sb-table-pc"
                >
                  <template #body="slotProps">
                    <span v-html="slotProps.data.ranking"></span>위
                  </template>
                </Column>
                <Column
                  field="productCount"
                  header="상품수"
                  bodyClass="text-right"
                  style="width: 136px"
                  class="sb-table-pc"
                >
                  <template #body="slotProps">
                    <span v-html="slotProps.data.productCount"></span>
                  </template>
                </Column>
                <Column
                  field="competition"
                  bodyClass="text-right"
                  style="width: 136px"
                >
                  <template #header>
                    <div class="sb-table-header-title">
                      <span
                        class="p-datatable-column-title"
                        data-pc-section="columntitle"
                        >경쟁강도</span
                      >
                      <div
                        class="sb-table-header-title__icon"
                        @mouseenter="togglePopover"
                        @mouseleave="togglePopover"
                      >
                        <IconSystemInformationCircle
                          class="ico-system-information-circle"
                        />
                      </div>
                    </div>
                  </template>
                  <template #body="slotProps">
                    <div class="sb-legend">
                      <span
                        class="sb-legend-item"
                        :class="
                          slotProps.data.competition >= 0.8
                            ? 'text-success'
                            : slotProps.data.competition >= 0.6
                              ? 'text-secondary'
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
                <template #empty>
                  <div class="sb-nodata">
                    <IconIllustrationSmile class="ico-illustration-smile" />
                    <div class="sb-nodata__text">
                      <p>
                        궁금한 카테고리가 있다면 지금 검색해보세요<br />
                        정확한 분석 데이터가 기다리고 있어요.
                      </p>
                    </div>
                  </div>
                </template>
              </DataTable>
            </div>
          </div>
          <Popover
            ref="popoverScore"
            :pt="{
              root: {
                class:
                  'p-popover-flipped sb-table-popover sb-table-popover-dashboard',
              },
            }"
          >
            <SbLegend />
          </Popover>
        </div>
      </div>
      <div class="col-6 sb-dashboard-price">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>판매 속도를 높이는 AI의 가격 제안</h5>
            <div class="sb-dashboard-card-head-menu">
              <NuxtLink to="/">
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </NuxtLink>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-sales-price-list-item-head">
              <div class="sb-sales-price-list-item-head__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-sales-price-list-item-head__contents">
                <div class="sb-sales-price-list-item-head__title">
                  <h6>뉴트리코어 하이퍼셀오메가3</h6>
                </div>
                <div class="sb-sales-price-list-item-head__category">
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>건가보조식품</span>
                    <span>혈행개선</span>
                    <span>오메가</span>
                    <span>오메가3</span>
                  </p>
                  <p>
                    <span>식품</span>
                    <span>건강식품</span>
                    <span>영양제</span>
                    <span>기타영양제</span>
                    <span>오메가3</span>
                  </p>
                </div>
              </div>
            </div>
            <SbPriceSetting
              :price-min="0"
              :price-max="25000"
              :price-current="16500"
              :price-initial-recommended="14900"
              :price-average="17800"
            >
              <template #badge>
                <Badge value="매우 좋음" severity="success" />
              </template>
            </SbPriceSetting>
          </div>
        </div>
      </div>
      <div class="col-12 sb-dashboard-trend">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>내 상품 카테고리 급상승 키워드</h5>
            <div class="sb-dashboard-card-head-menu">
              <div class="sb-dashboard-card-head-menu__text">최근 7일 기준</div>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-tab">
              <div class="pc">
                <Button label="건강기능식품" variant="text" class="active" />
              </div>
              <div class="mo">
                <Button label="건기식" variant="text" class="active" />
              </div>
              <Button label="이너뷰티" variant="text" />
              <Button label="코스메틱" variant="text" />
              <Button label="패션" variant="text" />
              <Button label="펫" variant="text" />
            </div>
            <div class="sb-dashboard-trend-contents">
              <div class="sb-dashboard-trend-table">
                <div class="sb-table">
                  <DataTable
                    v-scroll-end
                    :value="trendKeyword"
                    responsiveLayout="scroll"
                    removableSort
                    scrollable
                  >
                    <Column
                      field="keyword"
                      header="급상승 키워드"
                      bodyClass="text-left"
                      style="width: 346px"
                    >
                      <template #body="slotProps">
                        <span>{{ slotProps.data.keyword }}</span>
                      </template>
                    </Column>

                    <Column
                      field="growthRate"
                      header="상승률"
                      bodyClass="text-center"
                      style="width: 346px"
                    >
                      <template #body="slotProps">
                        <div class="pc">
                          <div class="sb-table-body-progress">
                            <div class="sb-table-body-progress__title">
                              {{ slotProps.data.growthRate }}%
                            </div>
                            <div class="sb-table-body-progress__contents">
                              <ProgressBar
                                :value="slotProps.data.growthRate"
                              ></ProgressBar>
                            </div>
                          </div>
                        </div>
                        <div class="mo">{{ slotProps.data.growthRate }}%</div>
                      </template>
                    </Column>

                    <Column
                      field="reason"
                      header="상승 사유 요약"
                      bodyClass="text-left"
                      style="width: 346px"
                    >
                      <template #body="slotProps">
                        <span>{{ slotProps.data.reason }}</span>
                      </template>
                    </Column>

                    <template #empty>
                      <div class="sb-nodata">
                        <IconIllustrationSmile class="ico-illustration-smile" />
                        <div class="sb-nodata__text">
                          <p>분석된 급상승 키워드가 없습니다.</p>
                        </div>
                      </div>
                    </template>
                  </DataTable>
                </div>
              </div>
              <div class="sb-dashboard-trend-product">
                <div class="sb-dashboard-trend-product-head">
                  <strong>시너지를 높여줄 추천 상품</strong>
                  <NuxtLink to="/">
                    <Button variant="text">
                      <span class="p-button-label">내 상품 랭킹 확인하기</span>
                      <IconArrowSmallRight class="ico-arrow-small-right" />
                    </Button>
                  </NuxtLink>
                </div>
                <div class="sb-dashboard-trend-product-list" v-scroll-end>
                  <div class="sb-dashboard-trend-product-list-scroll">
                    <NuxtLink
                      to="/"
                      class="sb-dashboard-trend-product-list-item"
                      v-for="n in 4"
                      :key="n"
                    >
                      <div class="sb-dashboard-trend-product-list-item__thumb">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div
                        class="sb-dashboard-trend-product-list-item__contents"
                      >
                        <div
                          class="sb-dashboard-trend-product-list-item__category"
                        >
                          <span>뉴트리코어</span>
                          <span>11번가</span>
                        </div>
                        <div
                          class="sb-dashboard-trend-product-list-item__title"
                        >
                          하이퍼셀 오메가3 식물성 알티지(RTG오메가 3)하이퍼셀
                          오메가3 식물성 알티지(RTG오메가 3)
                        </div>
                        <div
                          class="sb-dashboard-trend-product-list-item__price"
                        >
                          16,000원
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="sb-dashboard-mobile-notice">
                PC 브라우저로 더 많은 상세 정보를 확인하세요.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 sb-dashboard-report">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>채널별 페이스 리포트</h5>
            <div class="sb-tab-circle">
              <Button label="네이버쇼핑" variant="text" class="active" />
              <Button label="쿠팡" variant="text" />
              <Button label="11번가" variant="text" />
              <Button label="옥션" variant="text" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-dashboard-report-contents">
              <div class="sb-dashboard-report-info">
                <div class="sb-dashboard-report-info-item">
                  <div class="sb-dashboard-report-info-item__title">
                    <strong>주문</strong>
                    <Button variant="text">
                      <span class="p-button-label">26.01.14 15:38 기준</span>
                      <IconSystemRotateRight class="ico-system-rotate-right" />
                    </Button>
                  </div>
                  <div class="sb-dashboard-report-info-item__text">
                    <h3>12,356</h3>
                    <p>13,123,300원</p>
                  </div>
                </div>
                <div class="sb-dashboard-report-info-item">
                  <div class="sb-dashboard-report-info-item__title">
                    <strong>반품</strong>
                    <Button variant="text">
                      <span class="p-button-label">26.01.14 15:38 기준</span>
                      <IconSystemRotateRight class="ico-system-rotate-right" />
                    </Button>
                  </div>
                  <div class="sb-dashboard-report-info-item__text">
                    <h3>6</h3>
                    <p>325,300원</p>
                  </div>
                </div>
              </div>
              <div class="sb-dashboard-report-chart">
                <div class="sb-dashboard-report-chart-head">
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
                  <div class="sb-dashboard-report-chart-label">
                    <p class="color-primary">주문 건수</p>
                    <p class="color-secondary">주문 금액</p>
                  </div>
                </div>
                <div class="sb-dashboard-report-chart-body">
                  <SbChartBarDashboard :chart-data="trendData" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-dashboard-banner">
        <div class="sb-dashboard-banner__text">
          <h6>
            판매 속도를 높이는<br />
            AI의 가격 제안과 키워드 분석
          </h6>
          <p>PC버전에서 만나 보세요.</p>
        </div>
      </div>
      <div class="col-6 sb-dashboard-ksnapp">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>KSnapp</h5>
            <div class="sb-dashboard-card-head-menu">
              <div class="sb-dashboard-card-head-menu__text">
                정보 출처 K-snapp
              </div>

              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-ktrend-ksnapp-list" v-scroll-end>
              <div class="sb-ktrend-ksnapp-list-scroll">
                <NuxtLink
                  to="/"
                  class="sb-ktrend-ksnapp-list-item"
                  v-for="item in ksnappItems"
                  :key="item.rank"
                >
                  <div class="sb-ktrend-ksnapp-list-item__thumb">
                    <Badge
                      :value="item.rank"
                      size="small"
                      class="p-badge-circle"
                      :severity="item.rank > 3 ? 'contrast' : undefined"
                    ></Badge>
                    <img :src="item.thumbnail" :alt="item.title" />
                  </div>

                  <div class="sb-ktrend-ksnapp-list-item__text">
                    <IconSystemUp
                      v-if="item.trend === 'up'"
                      class="ico-system-up"
                    />
                    <IconSystemDown v-else class="ico-system-down" />

                    <h6>{{ item.title }}</h6>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 sb-dashboard-ktrend">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>K트렌드 매거진</h5>
            <div class="sb-dashboard-card-head-menu">
              <div class="sb-dashboard-card-head-menu__text">
                발행: 셀링부스터
              </div>
              <NuxtLink to="/">
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </NuxtLink>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-ktrend-trend-list" v-scroll-end>
              <div class="sb-ktrend-trend-list-scroll">
                <NuxtLink
                  to="/"
                  class="sb-ktrend-trend-list-item"
                  v-for="n in 20"
                  :key="n"
                >
                  <div class="sb-ktrend-trend-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-ktrend-trend-list-item__contents">
                    <div class="sb-ktrend-trend-list-item__head">
                      <span>
                        <Badge value="NEW" severity="warn"></Badge>
                      </span>
                      <p>2026.02.14</p>
                    </div>
                    <div class="sb-ktrend-trend-list-item__body">
                      <p>
                        광고비를 쓰지 않아도 매출은 충분히 만들 수 있습니다.
                        초보 셀러가 먼저 잡아야 할 핵심 구조 정리
                      </p>
                    </div>
                    <div class="sb-ktrend-trend-list-item__foot">
                      <SbInfo
                        :visible-buttons="['view', 'read']"
                        :view-count="'12,325'"
                        :read-time="'12분 분량'"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 sb-dashboard-interest">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>관심 키워드</h5>
            <div class="sb-dashboard-card-head-menu">
              <NuxtLink to="/">
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </NuxtLink>
              <SbMenu :items="menuItems" />
            </div>
          </div>

          <div class="sb-dashboard-card-body">
            <div class="sb-table">
              <DataTable
                v-scroll-end
                :value="interestKeyword"
                responsiveLayout="scroll"
                removableSort
                scrollable
              >
                <Column
                  field="keyword"
                  header="키워드"
                  bodyClass="text-left"
                  style="width: 150px"
                >
                  <template #body="slotProps">
                    <strong>{{ slotProps.data.keyword }}</strong>
                  </template>
                </Column>

                <Column
                  field="searchVol"
                  header="월 검색량"
                  bodyClass="text-right"
                  style="width: 133px"
                >
                  <template #body="slotProps">
                    <span>{{ slotProps.data.searchVol }}</span>
                  </template>
                </Column>

                <Column
                  field="avgClickPrice"
                  header="평균 클릭비"
                  bodyClass="text-right"
                  style="width: 150px"
                >
                  <template #body="slotProps">
                    <span>{{ slotProps.data.avgClickPrice }}</span>
                  </template>
                </Column>

                <Column
                  field="ranking"
                  header="카테고리내 순위"
                  bodyClass="text-right"
                  style="width: 133px"
                >
                  <template #body="slotProps">
                    <span>{{ slotProps.data.ranking }}위</span>
                  </template>
                </Column>

                <Column
                  field="productCount"
                  header="상품 수"
                  bodyClass="text-right"
                  style="width: 133px"
                >
                  <template #body="slotProps">
                    <span>{{ slotProps.data.productCount }}</span>
                  </template>
                </Column>

                <template #empty>
                  <div class="sb-nodata">
                    <IconIllustrationSmile class="ico-illustration-smile" />
                    <div class="sb-nodata__text">
                      <p>
                        궁금한 키워드가 있다면 지금 검색해보세요<br />
                        정확한 분석 데이터가 기다리고 있어요.
                      </p>
                    </div>
                  </div>
                </template>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 sb-dashboard-category-top10">
        <div class="sb-dashboard-card">
          <div class="sb-dashboard-card-head">
            <h5>관심 카테고리 상품 TOP 10</h5>
            <div class="sb-dashboard-card-head-menu">
              <div class="sb-dashboard-card-head-menu__text">
                네이버 쇼핑 기준
              </div>
              <NuxtLink to="/">
                <Button variant="text" severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </NuxtLink>
              <SbMenu :items="menuItems" />
            </div>
          </div>
          <div class="sb-dashboard-card-body">
            <div class="sb-tab">
              <Button label="패션" variant="text" class="active" />
              <Button label="이너뷰티" variant="text" />
              <Button label="코스메틱" variant="text" />
              <Button label="건강기능식품" variant="text" />
              <Button label="펫" variant="text" />
              <Button label="유아" variant="text" />
            </div>
            <div class="sb-trend-top sb-trend-top--small" v-scroll-end>
              <div class="sb-trend-top-list">
                <NuxtLink
                  v-for="item in top20List"
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
    </div>
    <SbBanner />
  </div>
  <AppFooter />
  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
definePageMeta({
  layoutClass: 'sb-dashboard',
});

import { ref, watch, onMounted } from 'vue';

import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconArrowSmallRight from '@/assets/icons/arrow/small-right.svg?component';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconSystemTrash from '@/assets/icons/system/trash.svg?component';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconSystemRotateRight from '@/assets/icons/system/rotate-right.svg';
import IconSystemUp from '@/assets/icons/system/up.svg?component';
import IconSystemDown from '@/assets/icons/system/down.svg?component';

//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const modules = [Autoplay, Navigation];

//menu
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

//toast
const toast = useToast();

const checkViewportAndShowToast = () => {
  if (window.innerWidth < 1024) {
    toast.add({
      detail:
        '일부 서비스는 PC에서만 지원이 됩니다. \n PC 브라우저로 접속해주세요.',
      group: 'bc',
      life: 4000,
    });
  }
};

//popover
const popoverScore = ref();
const togglePopover = (event) => {
  if (event.type === 'mouseenter') {
    popoverScore.value.show(event);
  } else {
    popoverScore.value.hide();
  }
};

//sort
const selectRef = ref(null);
const selectedSortOption = ref([{ name: '주간' }, { name: '월간' }]);
const selectedSort = ref(selectedSortOption.value[0]);

//data
const keywordTop10 = ref([
  {
    ranking: 18,
    isFavorite: false,
    keyword: '크림',
    productCount: '123,456개',
    searchVol: '896,000건',
    competition: 6.05,
  },
  {
    ranking: 9,
    isFavorite: false,
    keyword: '피부과',
    productCount: '1,456개',
    searchVol: '449,700건',
    competition: 0.41,
  },
  {
    ranking: 12,
    isFavorite: false,
    keyword: '마데카크림',
    productCount: '2,506개',
    searchVol: '113,700건',
    competition: 0.26,
  },
  {
    ranking: 24,
    isFavorite: false,
    keyword: '멜라논크림',
    productCount: '1,234개',
    searchVol: '102,580건',
    competition: 0.02,
  },
  {
    ranking: 5,
    isFavorite: false,
    keyword: '라로슈포제B5',
    productCount: '1,234개',
    searchVol: '51,520건',
    competition: 0.77,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '재생크림',
    productCount: '1,234개',
    searchVol: '51,000건',
    competition: 0.32,
  },
  {
    ranking: 24,
    isFavorite: false,
    keyword: '멜라논크림',
    productCount: '1,234개',
    searchVol: '102,580건',
    competition: 0.02,
  },
  {
    ranking: 5,
    isFavorite: false,
    keyword: '라로슈포제B5',
    productCount: '1,234개',
    searchVol: '51,520건',
    competition: 0.77,
  },
  {
    ranking: 10,
    isFavorite: false,
    keyword: '재생크림',
    productCount: '1,234개',
    searchVol: '51,000건',
    competition: 0.32,
  },
  {
    ranking: 24,
    isFavorite: false,
    keyword: '멜라논크림',
    productCount: '1,234개',
    searchVol: '102,580건',
    competition: 0.02,
  },
]);
const trendKeyword = ref([
  {
    keyword: '혈당컷',
    growthRate: 84,
    reason: '중장년 다이어트 관심 증가',
  },
  {
    keyword: '마그네슘 글라시네이트',
    growthRate: 59,
    reason: '수면/근육 이슈 콘텐츠 확산',
  },
  {
    keyword: 'NMN',
    growthRate: 52,
    reason: '항노화 트렌드 재부상',
  },
  {
    keyword: '관절 MSM',
    growthRate: 34,
    reason: '환절기 관절 키워드 증가',
  },
  {
    keyword: '프로바이오틱스',
    growthRate: 31,
    reason: '장 건강 이슈 지속',
  },
  {
    keyword: '혈당컷',
    growthRate: 84,
    reason: '중장년 다이어트 관심 증가',
  },
  {
    keyword: '마그네슘 글라시네이트',
    growthRate: 59,
    reason: '수면/근육 이슈 콘텐츠 확산',
  },
  {
    keyword: 'NMN',
    growthRate: 52,
    reason: '항노화 트렌드 재부상',
  },
  {
    keyword: '관절 MSM',
    growthRate: 34,
    reason: '환절기 관절 키워드 증가',
  },
  {
    keyword: '프로바이오틱스',
    growthRate: 31,
    reason: '장 건강 이슈 지속',
  },
]);
const ksnappItems = [
  {
    rank: 1,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title:
      '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템뷰티템',
  },
  {
    rank: 2,
    trend: 'down',
    thumbnail: 'https://picsum.photos/200/300',
    title: "안효섭, 올화이트 '수트핏' 눈길 ·· 고급미 물씬",
  },
  {
    rank: 3,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 4,
    trend: 'down',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 5,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 6,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 7,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
  {
    rank: 8,
    trend: 'up',
    thumbnail: 'https://picsum.photos/200/300',
    title: '[리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의 뷰티템',
  },
];
const top20List = ref([
  {
    rank: 1,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 2,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 3,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 4,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 5,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 6,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 7,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 8,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 9,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
  {
    rank: 10,
    imgSrc: 'https://picsum.photos/200/300',
    brand: '덴프스',
    mall: '네이버쇼핑',
    title: '덴프스 덴마크 유산균이야기 프로 170mg × 60캡슐',
    price: 79410,
  },
]);
const interestKeyword = ref([
  {
    keyword: '크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '피부과',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '마데카크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '멜라논크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '라로슈포제',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '도미나크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '재생크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '닥터지수분크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '키엘',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
  {
    keyword: '달팽이크림',
    searchVol: '896,000건',
    avgClickPrice: '120원',
    ranking: 18,
    productCount: '123,456개',
    isFavorite: false,
  },
]);
const trendData = ref([
  { date: '01.02', count: 2500, amount: 3000 },
  { date: '01.03', count: 4800, amount: 5800 },
  { date: '01.04', count: 12356, amount: 15423 }, // 스크린샷 강조 데이터
  { date: '01.05', count: 3200, amount: 4000 },
  { date: '01.06', count: 5600, amount: 8000 },
  { date: '01.07', count: 3800, amount: 5000 },
  { date: '01.08', count: 4800, amount: 9000 },
]);

onMounted(() => {
  checkViewportAndShowToast();
});
</script>
