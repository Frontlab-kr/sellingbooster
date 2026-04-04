<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>K-trend</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-ktrend">
      <div class="grid">
        <div class="col-12">
          <div class="sb-ktrend-list">
            <div class="sb-tab">
              <Button label="건강기능식품" variant="text" class="active" />
              <Button label="이너뷰티" variant="text" />
              <Button label="코스메틱" variant="text" />
              <Button label="패션" variant="text" />
              <Button label="펫" variant="text" />
              <Button label="유아" variant="text" />
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="sb-ktrend-keyword">
            <div class="sb-ktrend-keyword-head">
              <h5>K-Culture 키워드</h5>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="sb-ktrend-ranking">
            <div class="sb-ktrend-ranking-head">
              <h5>K-Trend 키워드 랭킹</h5>
              <Button rounded severity="white">
                <template #icon>
                  <IconArrowUpRight class="ico-arrow-up-right" />
                </template>
              </Button>
            </div>
            <DataTable
              :value="rankingList"
              responsiveLayout="scroll"
              removableSort
              scrollable
              class="sb-ktrend-datatable"
            >
              <Column
                field="ranking"
                header="랭킹"
                style="width: 175px"
                headerClass="text-center"
                bodyClass="text-center"
              >
                <template #body="slotProps">
                  <span class="ranking-number">{{
                    slotProps.data.ranking
                  }}</span>
                </template>
              </Column>

              <Column field="keyword" header="키워드" style="min-width: 175px">
                <template #body="slotProps">
                  <span class="keyword-text">{{ slotProps.data.keyword }}</span>
                </template>
              </Column>

              <Column
                field="searchVol"
                header="검색량"
                headerClass="justify-content-end"
                bodyClass="text-right"
                style="width: 175px"
              >
                <template #body="slotProps">
                  <div
                    class="flex align-items-center justify-content-end gap-1"
                  >
                    <template v-if="slotProps.data.searchDir === 'up'">
                      <IconArrowUp
                        class="ico-arrow-up text-red-500"
                        style="width: 12px"
                      />
                      <span class="text-red-500 font-bold">{{
                        slotProps.data.searchVol
                      }}</span>
                    </template>
                    <template v-else>
                      <IconArrowDown
                        class="ico-arrow-down text-blue-500"
                        style="width: 12px"
                      />
                      <span class="text-blue-500 font-bold">{{
                        slotProps.data.searchVol
                      }}</span>
                    </template>
                  </div>
                </template>
              </Column>

              <Column
                field="competition"
                header="경쟁강도"
                headerClass="text-right"
                bodyClass="text-right"
                style="width: 175px"
              >
                <template #body="slotProps">
                  <div
                    class="flex align-items-center justify-content-end gap-2"
                  >
                    <span class="competition-value">{{
                      slotProps.data.competition
                    }}</span>
                    <Badge
                      :value="slotProps.data.status"
                      :severity="
                        slotProps.data.status === '최적' ? 'success' : 'danger'
                      "
                      class="sb-badge-sm"
                    />
                  </div>
                </template>
              </Column>

              <template #empty>
                <div class="sb-nodata">
                  <IconIllustrationSmile class="ico-illustration-smile" />
                  <div class="sb-nodata__text">
                    <p>조회된 데이터가 없습니다.</p>
                  </div>
                </div>
              </template>
            </DataTable>
          </div>
        </div>
        <div class="col-6">
          <div class="sb-ktrend-ksnapp">
            <div class="sb-ktrend-ksnapp-head">
              <h5>
                <img src="./../../../assets/images/ksnapp.png" alt="KSnapp" />
              </h5>
              <span>[정보 출처 K-snapp]</span>
            </div>
            <div class="sb-ktrend-ksnapp-list">
              <NuxtLink to="/" class="sb-ktrend-ksnapp-list-item">
                <div class="sb-ktrend-ksnapp-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-ktrend-ksnapp-list-item__text">
                  <IconSystemUp class="ico-system-up" />

                  <p>
                    [리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄 화제의
                    뷰티템 [리뷰] "백지영도 쓴다" ... 피부 고민 해결 해 줄
                    화제의 뷰티템 [리뷰] "백지영도 쓴다" ... 피부 고민 해결 해
                    줄 화제의 뷰티템
                  </p>
                </div>
              </NuxtLink>
              <NuxtLink to="/" class="sb-ktrend-ksnapp-list-item">
                <div class="sb-ktrend-ksnapp-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-ktrend-ksnapp-list-item__text">
                  <IconSystemDown class="ico-system-down" />
                  <p>안효섭, 올화이트 '수트핏' 눈길 .•• 고급미 물씬</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="sb-ktrend-trend">
            <div class="sb-ktrend-trend-head">
              <h5>Selling Trend</h5>
              <div class="sb-ktrend-trend-head__menu">
                <span>해당 컨텐츠는 셀링부스터가 편집하고 발행했습니다.</span>
                <Button rounded severity="white">
                  <template #icon>
                    <IconArrowUpRight class="ico-arrow-up-right" />
                  </template>
                </Button>
              </div>
            </div>
            <div class="sb-ktrend-trend-list" v-scroll-end>
              <div class="sb-ktrend-trend-list-scroll">
                <NuxtLink
                  to="/"
                  class="sb-ktrend-trend-list-item"
                  v-for="n in 10"
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
                        class="sb-info--small"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SbInfo from '@/pages/community/components/SbInfo.vue';
import IconArrowAchevronDown from '@/assets/icons/arrow/achevron-down.svg?component';
import IconArrowUpRight from '@/assets/icons/arrow/up-right.svg?component';
import IconSystemUp from '@/assets/icons/system/up.svg?component';
import IconSystemDown from '@/assets/icons/system/down.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';

const searchKeyword = ref('');

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'K-trend' },
]);

const rankingList = ref([
  {
    ranking: 1,
    keyword: '오메가3',
    searchVol: '12%',
    searchDir: 'up',
    competition: '6.06',
    status: '최적',
  },
  {
    ranking: 2,
    keyword: '정관장',
    searchVol: '4%',
    searchDir: 'down',
    competition: '0.41',
    status: '최적',
  },
  {
    ranking: 3,
    keyword: '유산균',
    searchVol: '8%',
    searchDir: 'up',
    competition: '0.26',
    status: '최적',
  },
  {
    ranking: 4,
    keyword: '마그네슘',
    searchVol: '3%',
    searchDir: 'up',
    competition: '0.02',
    status: '최저',
  },
  {
    ranking: 5,
    keyword: '알부민',
    searchVol: '25%',
    searchDir: 'up',
    competition: '0.07',
    status: '최적',
  },
  {
    ranking: 6,
    keyword: '비타민C',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.02',
    status: '최저',
  },
  {
    ranking: 7,
    keyword: '홍삼',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.06',
    status: '최적',
  },
  {
    ranking: 8,
    keyword: '뉴케어',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.26',
    status: '최적',
  },
  {
    ranking: 9,
    keyword: '코드로이친',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.06',
    status: '최적',
  },
  {
    ranking: 10,
    keyword: '카투트효소',
    searchVol: '12%',
    searchDir: 'up',
    competition: '0.26',
    status: '최적',
  },
]);
</script>
