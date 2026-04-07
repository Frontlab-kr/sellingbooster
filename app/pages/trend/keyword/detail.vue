<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-contents">
      <div class="sb-keyword-detail">
        <div class="sb-keyword-detail-head">
          <div class="sb-keyword-detail-head__title">
            <h4><span class="text-primary">유산균</span> 시장 분석 리포트</h4>
            <p>2026년 04월 기준</p>
          </div>
          <div class="sb-keyword-detail-head__button">
            <Button label="연관 리포트" severity="contrast" outlined />
            <Button
              label="비교하기"
              severity="primary"
              @click="dialogCompare = true"
            />
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
                      <p>
                        <span>식품</span>
                        <span>건강식품</span>
                        <span>영양제</span>
                        <span>유산균</span>
                        <strong>(비율 90%)</strong>
                      </p>
                      <p>
                        <span>식품</span>
                        <span>건강식품</span>
                        <span>영양제</span>
                        <span>건강보조식품</span>
                        <strong>(비율 6%)</strong>
                      </p>
                      <p>
                        <span>식품</span>
                        <span>건강식품</span>
                        <span>영양제</span>
                        <span>헬스케어</span>
                        <strong>(비율 4%)</strong>
                      </p>
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
                <div class="sb-keyword-report-body-contents">
                  <h5 class="text-primary">유산균</h5>
                  <p>
                    키워드는 최근 3개월 평균 대비 약 12% 상승하며 꾸준한 수요
                    증가세를 보이고 있습니다. 현재 유산균 시장의 경쟁 강도는
                    동일 카테고리 내 상품 수와 광고 침투율을 고려했을 때 '보통'
                    수준으로 분류됩니다. 평균 CPC는 1,850원으로 카테고리 평균
                    대비 낮은 편에 속하여 광고 효율이 상대적으로 유리한
                    구간입니다. 상위 노출 상품들의 가격은 주로 2~3만원대에
                    집중되어 있어, 해당 가격 구간에서의 시장 진입 및 경쟁이 가장
                    치열할 것으로 분석됩니다.
                  </p>
                </div>
                <div class="sb-keyword-report-body-analysis">
                  <h6>
                    <span class="text-primary">‘유산균’</span> 광고 경쟁 및 CPC
                    분석
                  </h6>
                  <div class="sb-keyword-report-body-analysis__text">
                    <dl>
                      <dt>
                        경쟁 강도 : <span class="text-warn">낮음(0.53)</span>
                      </dt>
                      <dd>
                        주로 제품의 충전 문제와 배송 문제를 지적하고 있습니다.
                        충전 시간이 짧다는 불만과 충전이 아예 되지 않는 문제가
                        있었습니다. 주로 제품의 충전 문 제와 배송 문제를
                        지적하고 있습니다. 충전 시간이 짧다는 불만과 충전이 아예
                        되지 않는 문제가 있었습니다.
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        광고 효율성 : <span class="text-success">높음</span>
                      </dt>
                      <dd>
                        동일 카테고리 평균 CPC(2,200원) 대비 약 15% 저렴한
                        비용으로 노출이 가능하여, 동일 예산 대비 노출 효율이
                        유리합니다.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="sb-keyword-report-status">
                <div class="sb-keyword-report-status__button">
                  <Button variant="text" @click="dialogEdit = true">
                    <span class="p-button-label">항목 편집하기</span>
                    <IconSystemEdit class="ico-system-edit" />
                  </Button>
                </div>
                <draggable
                  v-model="reportData"
                  item-key="id"
                  tag="div"
                  class="drag-container"
                  ghost-class="ghost"
                >
                  <template #item="{ element }">
                    <dl
                      class="drag-item"
                      v-tooltip.top="{
                        value:
                          '데이터가 부족하거나 경쟁이 과도해 판단이 어렵습니다.',
                      }"
                    >
                      <dt>{{ element.title }}</dt>
                      <dd>
                        <h6>{{ element.value }}</h6>
                        <Badge
                          v-if="element.badge"
                          :value="element.badge.text"
                          :severity="element.badge.severity"
                        />
                      </dd>
                    </dl>
                  </template>
                </draggable>
              </div>

              <div class="sb-keyword-report-trend" v-if="showTrend">
                <div class="sb-tab">
                  <Button
                    label="검색량"
                    variant="text"
                    :class="{ active: activeTabIndex === 0 }"
                    @click="changeTab(0)"
                  />
                  <Button
                    label="광고클릭량"
                    variant="text"
                    :class="{ active: activeTabIndex === 1 }"
                    @click="changeTab(1)"
                  />
                </div>
                <div v-if="activeTabIndex === 0">
                  <div class="sb-keyword-report-trend__title">
                    <p>
                      지난 30일간의 PC•모바일 검색 데이터 를 분석해 산출한 하루
                      평균 검색량입니다.
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
                          <Chip
                            label="유산균"
                            size="large"
                            severity="primary"
                          />

                          <Chip
                            label="가루 유산균"
                            removable
                            size="large"
                            severity="secondary"
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
                  <div class="sb-keyword-report-trend-search-result">
                    <div class="sb-keyword-report-trend-search-result-col">
                      <dl>
                        <dt>검색량</dt>
                        <dd>
                          <SbChartLine />
                        </dd>
                      </dl>
                    </div>
                    <div class="sb-keyword-report-trend-search-result-col">
                      <div class="sb-keyword-report-trend-search-result-row">
                        <dl>
                          <dt>디바이스</dt>
                          <dd>
                            <SbChartDoughnut :chart-data="deviceStats" />
                          </dd>
                        </dl>
                        <dl>
                          <dt>성별</dt>
                          <dd>
                            <SbChartDoughnut :chart-data="genderStats" />
                          </dd>
                        </dl>
                      </div>
                      <div class="sb-keyword-report-trend-search-result-row">
                        <dl>
                          <dt>연령</dt>
                          <dd>
                            <SbChartStackedBar :chart-data="ageStats" />
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="activeTabIndex === 1">
                  <div class="sb-keyword-report-trend__title">
                    <p>
                      지난 30일간의 광고 집행 데이터를 분석해 산출한 매체별 평균
                      클릭량과 예상 비용입니다.
                    </p>
                  </div>
                  <div class="sb-keyword-report-trend-chart__button">
                    <Button variant="text">
                      <IconArrowAchevronLeft class="ico-arrow-achevron-left" />
                      <span class="p-button-label">이전 달</span>
                    </Button>
                    <Button variant="text">
                      <span class="p-button-label">다음 달</span>
                      <IconArrowAchevronRight
                        class="ico-arrow-achevron-right"
                      />
                    </Button>
                  </div>
                  <div class="sb-keyword-report-trend-chart">
                    <div class="sb-keyword-report-trend-chart-item">
                      <dl>
                        <dt>월 평균 클릭량</dt>
                        <dd>
                          <SbChartSegmentBar
                            :chart-data="clickCountStats"
                            :maxValue="500"
                            unit-text="건"
                            show-icon
                          />
                        </dd>
                      </dl>
                    </div>
                    <div class="sb-keyword-report-trend-chart-item">
                      <dl>
                        <dt>월 평균 클릭률</dt>
                        <dd>
                          <SbChartDoughnut
                            :chart-data="clickPercentStats"
                            class-name="sb-chart-doughnut--lg"
                            :chart-border-color="'--chart-doughnut-border-color02'"
                          />
                        </dd>
                      </dl>
                    </div>
                    <div class="sb-keyword-report-trend-chart-item">
                      <p>
                        <span>월 평균 노출 광고 수</span>
                        <strong>120,368건</strong>
                      </p>
                      <p>
                        <span>예상 광고비(PC)</span>
                        <strong>123,070원</strong>
                      </p>
                      <p>
                        <span>예상 광고비(Mobile)</span>
                        <strong>80,790원</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sb-keyword-report-button">
                <Button
                  severity="contrast"
                  outlined
                  size="small"
                  :class="{ 'is-toggle': showTrend }"
                  @click="showTrend = !showTrend"
                >
                  <span class="p-button-label">{{
                    showTrend ? '상세 지표 닫기' : '상세 지표 열기'
                  }}</span>
                  <IconArrowAchevronDown class="ico-arrow-achevron-down" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col">
            <div class="sb-keyword-history">
              <div class="sb-keyword-history__contents">
                <div class="sb-keyword-history__title">
                  <h5>최근 3개월 검색 추이</h5>
                  <p>
                    최근 3개월 검색량이 12% 증가하여 성장 추세를 보이고
                    있습니다.
                  </p>
                </div>
                <div class="sb-chip sb-chip--column">
                  <div class="sb-chip__title">예상원인</div>
                  <div class="sb-chip-list">
                    <NuxtLink to="/">
                      <Chip label="어린이 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="가루 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="고함량 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="임산부 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="건강기능식품" size="large" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="sb-keyword-history__chart">
                <strong>최근 3개월</strong>
                <SbChartBar :chart-data="trendData" />
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
                  <h6 class="text-success">좋아요!</h6>
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
                <SbChartWave :percent="33" />
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
                <p>2026년 04월 기준</p>
              </div>
              <div class="sb-table">
                <DataTable
                  v-scroll-end
                  :value="keywordList"
                  responsiveLayout="scroll"
                  removableSort
                  scrollable
                >
                  <Column field="ranking" header="랭킹" style="width: 80px">
                    <template #body="slotProps">
                      <span v-html="slotProps.data.ranking"></span>
                    </template>
                  </Column>
                  <Column field="keyword" header="키워드" style="width: 155x">
                    <template #body="slotProps">
                      <span v-html="slotProps.data.keyword"></span>
                    </template>
                  </Column>
                  <Column
                    field="category"
                    header="카테고리"
                    style="width: 155px"
                  >
                    <template #body="slotProps">
                      <span v-html="slotProps.data.category"></span>
                    </template>
                  </Column>

                  <Column
                    field="searchVol"
                    header="월 검색량"
                    bodyClass="text-right"
                    style="width: 155px"
                  >
                    <template #body="slotProps">
                      <span v-html="slotProps.data.searchVol"></span>
                    </template>
                  </Column>
                  <Column
                    field="competition"
                    header="경쟁강도"
                    bodyClass="text-right"
                    style="width: 155px"
                  >
                    <template #body="slotProps">
                      <div class="flex align-items-center justify-content-end">
                        <span class="mr-2">{{
                          slotProps.data.competition
                        }}</span>
                        <Badge
                          :value="slotProps.data.status"
                          severity="success"
                        ></Badge>
                      </div>
                    </template>
                  </Column>

                  <template #empty>
                    <div class="sb-nodata">
                      <IconIllustrationSmile class="ico-illustration-smile" />
                      <div class="sb-nodata__text">
                        <p></p>
                      </div>
                    </div>
                  </template>
                </DataTable>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-keyword-ranking">
              <div class="sb-keyword-ranking__title">
                <h5>연관 상품 랭킹 TOP20</h5>
              </div>
              <div class="sb-keyword-ranking__tab">
                <div class="sb-tab">
                  <Button label="ALL" variant="text" class="active" />
                  <Button label="5천원" variant="text" />
                  <Button label="1만원" variant="text" />
                  <Button label="3만원" variant="text" />
                  <Button label="5만원 이상" variant="text" />
                </div>
                <Select
                  ref="selectRef"
                  v-model="selectedTop20"
                  :options="selectedTop20Option"
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
        <div class="grid">
          <div class="col">
            <div class="sb-keyword-faq">
              <div class="sb-keyword-faq__title">
                <h5>‘유산균’ 시장 자주 묻는 질문</h5>
              </div>
              <div class="sb-keyword-faq-list">
                <Accordion :value="0">
                  <AccordionPanel
                    v-for="(item, index) in faqItems"
                    :key="index"
                    :value="index"
                  >
                    <AccordionHeader>
                      <div class="sb-keyword-faq-list__title">
                        <strong>Q</strong>
                        <p>{{ item.question }}</p>
                      </div>
                    </AccordionHeader>

                    <AccordionContent>
                      <div class="sb-keyword-faq-list__contents">
                        <strong>A</strong>
                        <p v-html="item.answer"></p>
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
              <div class="sb-keyword-ktrend-list" v-scroll-end>
                <div class="sb-keyword-ktrend-list-scroll">
                  <NuxtLink
                    v-for="(item, index) in ktrendList"
                    :key="index"
                    :to="item.link"
                    class="sb-keyword-ktrend-list-item"
                  >
                    <h6>{{ item.title }}</h6>

                    <div class="sb-keyword-ktrend-list-item__text">
                      {{ item.description }}
                    </div>

                    <div class="sb-keyword-ktrend-list-item__meta">
                      <span>{{ item.date }}</span>
                      <span>{{ item.author }}</span>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="sb-keyword-ksnapp">
              <div class="sb-keyword-ksnapp__title">
                <h5>KSnapp</h5>
                <div class="sb-keyword-ksnapp__menu">
                  <Button variant="text">
                    <template #icon>
                      <IconArrowUpRight class="ico-arrow-up-right" />
                    </template>
                  </Button>
                </div>
              </div>
              <div class="sb-tab">
                <Button label="인기기사" variant="text" class="active" />
                <Button label="K컬처" variant="text" />
              </div>
              <div class="sb-keyword-ksnapp-list" v-scroll-end>
                <div class="sb-keyword-ksnapp-list-scroll">
                  <NuxtLink
                    v-for="(item, index) in ksnappList"
                    :key="index"
                    :to="item.link"
                    class="sb-keyword-ksnapp-list-item"
                  >
                    <div class="sb-keyword-ksnapp-list-item__thumb">
                      <img :src="item.thumbnail" :alt="item.title" />
                    </div>

                    <div class="sb-keyword-ksnapp-list-item__title">
                      <h6>{{ item.title }}</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <!-- <div class="sb-keyword-ksnapp-banner">
                <h5>
                  전 세계가 주목하는 K-트렌드 <br />
                  <strong>KSNAP</strong> 에서 확인하세요
                </h5>
              </div> -->
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
                <div class="sb-chip">
                  <div class="sb-chip-list">
                    <NuxtLink to="/">
                      <Chip label="어린이 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="가루 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="고함량 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="임산부 유산균" size="large" />
                    </NuxtLink>
                    <NuxtLink to="/">
                      <Chip label="건강기능식품" size="large" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="sb-keyword-relation__img">
                <img src="/temp/keyword1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <SbBanner />
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogEdit" modal class="sb-trend-edit-wrap">
    <div class="p-dialog-inner">
      <div class="sb-trend-edit">
        <div class="sb-trend-edit__title">
          <h6>키워드 요약 정보 항목 편집</h6>
        </div>
        <div class="sb-caution">
          <ul>
            <li>
              키워드에 대한 관심 정보 항목을 선택하세요. (최소 5개 / 최대 8개)
            </li>
            <li>
              노출 순서는 저장 후 상세 화면에서 드래그를 통해 변경하실 수
              있습니다.
            </li>
          </ul>
        </div>
        <div class="sb-checkbox">
          <div
            class="sb-checkbox-item"
            v-for="item in keywordInterestItems"
            :key="item.value"
          >
            <Checkbox
              v-model="selectedInterests"
              :inputId="item.id"
              :value="item.value"
            />
            <label :for="item.id">{{ item.label }}</label>
          </div>
        </div>
        <div class="sb-trend-edit__button">
          <Button severity="primary" label="저장" />
        </div>
      </div>
    </div>
  </Dialog>

  <Dialog v-model:visible="dialogCompare" modal class="sb-compare-wrap">
    <div class="p-dialog-inner">
      <h6 class="p-dialog-title">
        키워드의 월 검색량, 경쟁 강도등을 한눈에! 스마트한 키워드 비교
      </h6>
      <div class="sb-compare">
        <div class="sb-compare-list">
          <div class="sb-compare-list-head">
            <h5>봄동비빔밥</h5>
          </div>
          <div class="sb-compare-list-body">
            <dl>
              <dt>월 검색량</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>월 검색량</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>상품 평균가</dt>
              <dd>
                <h6>123,456,789 원</h6>
              </dd>
            </dl>
            <dl>
              <dt>경쟁 강도</dt>
              <dd>
                <h6>9,999.0</h6>
                <Badge value="최저" severity="danger"></Badge>
              </dd>
            </dl>
            <dl>
              <dt>광고 클릭 수</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>월 평균 노출 광고 수</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>평균 CPC</dt>
              <dd>
                <h6>123,456,789 원</h6>
              </dd>
            </dl>
            <dl>
              <dt>상품 수</dt>
              <dd>
                <h6>123,456,789 개</h6>
              </dd>
            </dl>
          </div>
          <div class="sb-compare-list-foot"></div>
        </div>
        <div class="sb-compare-list">
          <div class="sb-compare-list-head">
            <h5>버터떡</h5>
            <Button variant="text">
              <template #icon>
                <IconSystemClose class="ico-system-close" />
              </template>
            </Button>
          </div>
          <div class="sb-compare-list-body">
            <dl>
              <dt>월 검색량</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>월 검색량</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>상품 평균가</dt>
              <dd>
                <h6>123,456,789 원</h6>
              </dd>
            </dl>
            <dl>
              <dt>경쟁 강도</dt>
              <dd>
                <h6>9,999.0</h6>
                <Badge value="최저" severity="danger"></Badge>
              </dd>
            </dl>
            <dl>
              <dt>광고 클릭 수</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>월 평균 노출 광고 수</dt>
              <dd>
                <h6>123,456,789 회</h6>
              </dd>
            </dl>
            <dl>
              <dt>평균 CPC</dt>
              <dd>
                <h6>123,456,789 원</h6>
              </dd>
            </dl>
            <dl>
              <dt>상품 수</dt>
              <dd>
                <h6>123,456,789 개</h6>
              </dd>
            </dl>
          </div>
          <div class="sb-compare-list-foot">
            <Button
              severity="contrast"
              outlined
              label="키워드 상세 레포트 보기"
            />
          </div>
        </div>
        <div class="sb-compare-list">
          <div class="sb-compare-list-nodata">
            <div class="sb-nodata">
              <IconIllustrationSmile class="ico-illustration-smile" />
              <div class="sb-nodata__text">
                <p>
                  비교할 키워드를 추가해주세요.<br />
                  키워드 비교는 최대 2개까지 추가 가능해요.
                </p>
              </div>
              <div class="sb-nodata__button">
                <SbInput
                  show-search
                  @search="onSearch"
                  placeholder="40자 내외 키워드를 입력하세요."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
import IconSystemKakaotalk from '@/assets/icons/system/kakaotalk.svg?component';
import IconSystemMail from '@/assets/icons/system/mail.svg?component';
import IconSystemCopy from '@/assets/icons/system/copy.svg?component';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconSystemEdit from '@/assets/icons/system/edit.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';
import IconEtcKsnapp from '@/assets/icons/etc/ksnapp.svg?component';
import IconSystemClose from '@/assets/icons/system/close.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

// 탭
const activeTabIndex = ref(0);
const changeTab = (index) => {
  activeTabIndex.value = index;
};

//dialog
const dialogEdit = ref(false);
const dialogCompare = ref(false);

const selectedInterests = ref([
  'monthly_search',
  'avg_views',
  'product_count',
  'competition',
  'avg_price',
]);
const keywordInterestItems = ref([
  { id: 'interest-01', label: '월 검색량', value: 'monthly_search' },
  { id: 'interest-02', label: '상품수', value: 'product_count' },
  { id: 'interest-03', label: '광고 클릭수', value: 'ad_clicks' },
  { id: 'interest-04', label: '전체 게시글수', value: 'total_posts' },
  { id: 'interest-05', label: '평균 조회수', value: 'avg_views' },
  { id: 'interest-06', label: '경쟁강도', value: 'competition' },
  { id: 'interest-07', label: '6개월 시장 규모', value: 'market_size_6m' },
  { id: 'interest-08', label: '상품 평균가 (이전 6개월)', value: 'avg_price' },
]);

//항목
const reportData = ref([
  { id: 1, title: '월 검색량', value: '39,800회' },
  { id: 2, title: '광고 클릭 수', value: '9,999건' },
  {
    id: 3,
    title: '경쟁강도',
    value: '9,999.0',
    badge: { text: '매우 높음', severity: 'danger' },
  },
  { id: 4, title: '월 평균 노출 광고 수', value: '9,999건' },
  { id: 5, title: '예상 광고비', value: '9,999,999원' },
  { id: 6, title: '평균 CPC', value: '9,999,999원' },
]);

//sort
const selectRef = ref(null);
const selectedTop20Option = ref([
  { name: '스마트스토어' },
  { name: '쿠팡' },
  { name: '11번가' },
  { name: 'G마켓' },
]);
const selectedTop20 = ref(selectedTop20Option.value[0]);

onMounted(async () => {
  await nextTick();
  if (selectRef.value) {
    selectRef.value.show();
  }
});

// 상세 지표 열기 토글 상태
const showTrend = ref(false);

//chart
const deviceStats = ref([
  { value: 91, name: '모바일', color: 'primaryColor' },
  { value: 9, name: 'PC', color: 'warnColor' },
]);
const genderStats = ref([
  { value: 74, name: '여성', color: 'dangerColor' },
  { value: 26, name: '남성', color: 'secondaryColor' },
]);
const clickCountStats = ref([
  { value: 58.5, name: 'PC', color: 'secondaryColor' },
  { value: 382.7, name: '모바일', color: 'primaryColor' },
]);
const clickPercentStats = ref([
  { value: 57, name: '모바일', color: 'primaryColor' },
  { value: 43, name: 'PC', color: 'warnColor' },
]);
const trendData = ref([
  { value: 15, name: '1월' },
  { value: 15, name: '2월' },
  { value: 18, name: '3월' },
  { value: 12, name: '4월' },
]);
const ageStats = ref([
  { name: '10', value: 3, color: '#C2F4F8' },
  { name: '20', value: 12, color: '#3ADDE9' },
  { name: '30', value: 26, color: '#00B1BD' },
  { name: '40', value: 35, color: '#23858C' },
  { name: '50', value: 24, color: '#1A6369' },
]);

//data
const keywordList = ref([
  {
    ranking: 1,
    keyword: '어린이 유산균',
    category: '건강기능식품',
    searchVol: '896,000건', // 필드명을 template과 일치시킴
    competition: '6.05',
    status: '최적',
  },
  {
    ranking: 2,
    keyword: '가루 유산균',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 3,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 4,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 5,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 6,
    keyword: '락토핏',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 7,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 8,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 9,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 10,
    keyword: '락토핏',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 1,
    keyword: '어린이 유산균',
    category: '건강기능식품',
    searchVol: '896,000건', // 필드명을 template과 일치시킴
    competition: '6.05',
    status: '최적',
  },
  {
    ranking: 2,
    keyword: '가루 유산균',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 3,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 4,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 5,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 6,
    keyword: '락토핏',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 7,
    keyword: '임산부 유산균',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 8,
    keyword: '멀티 비타민',
    category: '건강기능식품',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 9,
    keyword: '고함량 유산균',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 10,
    keyword: '락토핏',
    category: '헬스케어',
    searchVol: '449,700건',
    competition: '0.41',
    status: '최적',
  },
]);

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

const faqItems = [
  {
    question: '유산균 시장의 경쟁은 심한 편인가요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '유산균 광고비는 어느 정도 예상해야 하나요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '유산균 시장의 최근 수요 트렌드는 어떤가요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '상위 노출을 위한 적정 판매 가격은 얼마인가요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
  {
    question: '지금 유산균 시장에 진입하기에 광고 효율이 괜찮을까요?',
    answer:
      "현재 유산균 키워드의 경쟁 강도는 0.53으로 동일 카테고리 내에서 '보통' 수준입니다. <br /> 상품 공급량은 많으나 광고 침투율이 상대적으로 낮아 틈새 전략이 가능합니다.",
  },
];

const ktrendList = [
  {
    title: '두바이 쫀득쿠키 GS25 말차초코 두쫀볼 편의점 디저트',
    description:
      '2026년에 가장 핫한 디저트하면 단연 두바이 쫀득쿠키잖아요. 씨유 두바이 쫀득 찹쌀떡 후기 현시점 편의점 두바이 쫀득쿠키 중 원탑, 이건 찹쌀떡 버전이라 겉부분이 코코아 파우더가 아닌 초코 코팅으로 되어있어요. 가격 3,100원으로 판매되고 있어요',
    date: '2026-01-11',
    author: '망디의먹로그',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description: '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description:
      '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오 스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에 피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진 디저트를 기억하실겁니다.',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description:
      '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오 스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에 피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진 디저트를 기억하실겁니다.',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
  {
    title: '두바이 쫀득쿠키 만들기 피스타치오 스프레드 레시피',
    description:
      '두바이 쫀득쿠키 만들기 두바이 쫀득쿠키 레시피 피스타치오 스프레드 이게 뭐길래 그렇게 한한가....?? 한동안 초콜릿안에 피스타치오 크림과 카타이프를 같이 넣어서 만들어 낸 고급진 디저트를 기억하실겁니다.',
    date: '2026-01-08',
    author: '축복받은 유전자 완소남매의 엄마표 먹거리',
    link: '/',
  },
];

const ksnappList = [
  {
    title: "장원영이 쏘아올린 '두쫀쿠' 열풍, 한국 강타…냉면집에서도 판다",
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title: "장원영이 쏘아올린 '두쫀쿠' 열풍, 한국 강타…냉면집에서도 판다",
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
  {
    title:
      '안성재 셰프도 쩔쩔매더니... 안성재도 무릎 꿇린 음식 전국은 ‘두쫀쿠’ 열풍',
    thumbnail: 'https://picsum.photos/200/300',
    link: '/',
  },
];
</script>
