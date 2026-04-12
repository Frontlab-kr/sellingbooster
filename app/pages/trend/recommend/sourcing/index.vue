<template>
  <SbMobileInfo />
  <div class="sb-trend">
    <div class="sb-trend-head">
      <div class="sb-trend-head__title">
        <h5>아이템 소싱</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-trend-contents">
      <div class="sb-trend-search">
        <h4>
          사진 한 장이면 끝! AI가 상품 분석부터 연관 아이템까지 싹 찾아드려요
        </h4>
      </div>
      <div class="sb-trend-sourcing">
        <div class="sb-trend-sourcing-form">
          <div class="grid">
            <div class="col-8">
              <div class="grid">
                <div class="col-12">
                  <div>
                    <SbImageupload
                      ref="imageUploadChild"
                      :limit="1"
                      accept="image/*"
                      @update-files="handleFiles"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="sb-trend-sourcing-form-url">
                    <div class="sb-trend-sourcing-form-url__text">
                      <strong>이미지의 URL</strong>을 넣어보세요.<br />
                      AI가 사진 속 상품을 쏙쏙 분석해 드릴게요.
                    </div>
                    <SbInput placeholder="이미지 URL을 입력해주세요." />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="sb-trend-sourcing-form-preview">
                <div
                  class="flex gap-2"
                  style="position: absolute; top: 8px; right: 8px"
                >
                  <Button
                    label="팝업01"
                    variant="text"
                    @click="toggleLoading"
                  />
                  <Button label="팝업02" variant="text" @click="toggleError" />
                </div>
                <template v-if="sharedFiles && sharedFiles.length > 0">
                  <div class="sb-trend-sourcing-form-preview-image">
                    <div class="sb-trend-sourcing-form-preview-image__button">
                      <Button variant="text" @click="clearAll">
                        <template #icon>
                          <IconSystemDelete class="ico-system-delete" />
                        </template>
                      </Button>
                    </div>
                    <img
                      v-for="f in sharedFiles"
                      :key="f.name"
                      :src="f.objectURL"
                    />
                  </div>
                </template>
                <div class="sb-nodata" v-else>
                  <IconIllustrationSmile class="ico-illustration-smile" />
                  <div class="sb-nodata__text">
                    <p>
                      파일 업로드 또는 URL을 입력하고<br />
                      썸네일을 확인하세요
                    </p>
                  </div>
                </div>

                <div
                  class="sb-trend-sourcing-form-preview-loading w-auto"
                  :class="{ active: isLoading }"
                >
                  <IconEtcAiLoading class="ico-etc-ai-loading text-primary" />
                  <div class="sb-trend-sourcing-form-preview-loading__text">
                    <strong> AI 분석 진행중... </strong>
                    <p>아이템 분석 + 이미지 생성 중</p>
                  </div>
                </div>

                <div
                  class="sb-trend-sourcing-form-preview-loading"
                  :class="{ active: isError }"
                >
                  <div
                    class="sb-trend-sourcing-form-preview-loading__text text-danger"
                  >
                    <strong>재시도 또는 이미지 링크를 확인해주세요.</strong>
                    <p>
                      제공해주신 정보에는 구체적인 아이템 목록이 포함되어 있지
                      않습니다.<br />
                      일시적인 오류일 수도 있으니 재시도 또는 이미지 링크를
                      확인해주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-trend-sourcing-form-button">
            <Button label="AI 분석 시작" size="large" severity="primary" />
          </div>
        </div>
        <div class="sb-trend-sourcing-result">
          <div class="sb-trend-sourcing-result-head">
            <h5>분석 결과</h5>
            <p>분석된 아이템 : <strong class="text-primary">7</strong>개</p>
          </div>
          <div class="sb-trend-sourcing-result-body">
            <div class="sb-trend-sourcing-result-image">
              <div class="sb-trend-sourcing-result-image-inner">
                <div
                  class="sb-trend-sourcing-result-image__point"
                  style="top: 30px; left: 40px"
                >
                  <Button
                    variant="text"
                    @mouseenter="openPopover($event)"
                    @mouseleave="closePopover"
                  >
                    <template #icon>
                      <IconSystemPlus class="ico-system-plus" />
                    </template>
                  </Button>
                </div>
                <div
                  class="sb-trend-sourcing-result-image__point"
                  style="top: 430px; left: 240px"
                >
                  <Button
                    variant="text"
                    @mouseenter="openPopover($event)"
                    @mouseleave="closePopover"
                  >
                    <template #icon>
                      <IconSystemPlus class="ico-system-plus" />
                    </template>
                  </Button>
                </div>
                <div
                  class="sb-trend-sourcing-result-image__point"
                  style="top: 330px; left: 310px"
                >
                  <Button
                    variant="text"
                    @mouseenter="openPopover($event)"
                    @mouseleave="closePopover"
                  >
                    <template #icon>
                      <IconSystemPlus class="ico-system-plus" />
                    </template>
                  </Button>
                </div>
                <div
                  class="sb-trend-sourcing-result-image__point"
                  style="top: 230px; left: 40px"
                >
                  <Button
                    variant="text"
                    @mouseenter="openPopover($event)"
                    @mouseleave="closePopover"
                  >
                    <template #icon>
                      <IconSystemPlus class="ico-system-plus" />
                    </template>
                  </Button>
                </div>

                <img src="https://picsum.photos/360/600" alt="" />
              </div>
              <Popover
                ref="popoverSourcing"
                class="sb-popover-sourcing"
                :dismissable="true"
                :pt="{
                  root: { class: 'sb-popover-tag' },
                }"
                @mouseenter="cancelClose"
                @mouseleave="closePopover"
              >
                <div class="sb-trend-sourcing-result-list-item">
                  <div class="sb-trend-sourcing-result-list-item__contents">
                    <div class="sb-trend-sourcing-result-list-item__thumb">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div class="sb-trend-sourcing-result-list-item__text">
                      <div class="sb-trend-sourcing-result-list-item__badge">
                        <Badge value="기본" severity="neutral"></Badge>
                        <Badge value="기본" severity="neutral"></Badge>
                      </div>
                      <div class="sb-trend-sourcing-result-list-item__title">
                        크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷크롬 데님 재킷
                      </div>
                      <p>
                        <span>브랜드 : 유사브랜드</span>
                        <span>예상 가격대 : 250,000 ~ 350,000 </span>
                      </p>
                    </div>
                  </div>

                  <div class="sb-trend-sourcing-result-list-item__link">
                    <span><NuxtLink to="/">1688 검색</NuxtLink></span>
                    <span><NuxtLink to="/">도매꾹 검색</NuxtLink></span>
                    <span><NuxtLink to="/">네이버쇼핑 검색</NuxtLink></span>
                    <span
                      ><NuxtLink to="/" class="text-primary"
                        >셀링부스터 검색</NuxtLink
                      ></span
                    >
                  </div>
                </div>
              </Popover>
            </div>
            <div class="sb-trend-sourcing-result-list" v-scroll-end>
              <div class="sb-trend-sourcing-result-list-scroll">
                <div
                  class="sb-trend-sourcing-result-list-item"
                  v-for="item in 9"
                >
                  <div class="sb-trend-sourcing-result-list-item__contents">
                    <div class="sb-trend-sourcing-result-list-item__thumb">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div class="sb-trend-sourcing-result-list-item__text">
                      <div class="sb-trend-sourcing-result-list-item__badge">
                        <Badge value="기본" severity="neutral"></Badge>
                        <Badge value="기본" severity="neutral"></Badge>
                      </div>
                      <div class="sb-trend-sourcing-result-list-item__title">
                        크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷
                      </div>
                      <p>
                        <span>브랜드 : 유사브랜드</span>
                        <span>예상 가격대 : 250,000 ~ 350,000 </span>
                      </p>
                    </div>
                  </div>

                  <div class="sb-trend-sourcing-result-list-item__link">
                    <span><NuxtLink to="/">1688 검색</NuxtLink></span>
                    <span><NuxtLink to="/">도매꾹 검색</NuxtLink></span>
                    <span><NuxtLink to="/">네이버쇼핑 검색</NuxtLink></span>
                    <span
                      ><NuxtLink to="/" class="text-primary"
                        >셀링부스터 검색</NuxtLink
                      ></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sb-trend-sourcing-result-foot">
            <dl>
              <dt>공통 키워드</dt>
              <dd>
                <div class="sb-chip">
                  <div class="sb-chip-list">
                    <div v-for="chip in keywordChips" :key="chip.id">
                      <NuxtLink to="/">
                        <Chip>
                          <Button
                            variant="text"
                            @click.prevent="toggleFavorite(chip.id)"
                          >
                            <template #icon>
                              <IconActionFavoriteFull
                                v-if="chip.active"
                                class="ico-action-favorite-full"
                              />
                              <IconActionFavorite
                                v-else
                                class="ico-action-favorite"
                              />
                            </template>
                          </Button>
                          <div class="p-chip-label">{{ chip.label }}</div>
                        </Chip>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>주요 특징</dt>
              <dd>
                <div class="sb-trend-sourcing-result-tag">
                  <NuxtLink
                    v-for="(text, index) in featureList"
                    :key="index"
                    to="/"
                    class="sb-trend-sourcing-result-tag-item"
                  >
                    {{ text }}
                  </NuxtLink>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="sb-trend-sourcing-product">
          <div class="sb-trend-sourcing-product-head">
            <h5>연관 상품</h5>
          </div>
          <div class="sb-trend-sourcing-product-tab">
            <div class="sb-tab">
              <Button label="1688" variant="text" class="active" />
              <Button label="도매꾹" variant="text" />
              <Button label="네이버쇼핑" variant="text" />
            </div>
          </div>
          <div class="sb-trend-sourcing-product-list">
            <NuxtLink
              to="/"
              class="sb-trend-sourcing-product-list-item"
              v-for="item in 9"
            >
              <div class="sb-trend-sourcing-product-list-item__thumb">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div class="sb-trend-sourcing-product-list-item__contents">
                <p>
                  반하나핏 베이직 피치기모 티셔츠 긴팔 양기모 라운드 밑단 기본티
                  이너 레이어드 유넥반하나핏 베이직 피치기모 티셔츠 긴팔 양기모
                  라운드 밑단 기본티 이너 레이어드 유넥
                </p>
                <strong>28,000원</strong>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <SbBanner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import IconSystemInformationCircle from '@/assets/icons/system/information-circle.svg?component';
import IconIllustrationSmile from '@/assets/icons/illustration/smile.svg?component';
import IconSystemDelete from '@/assets/icons/system/delete.svg?component';
import IconEtcAiLoading from '@/assets/icons/etc/ai-loading.svg?component';
import IconSystemPlus from '@/assets/icons/system/plus.svg?component';
import IconActionFavorite from '@/assets/icons/action/favorite.svg?component';
import IconActionFavoriteFull from '@/assets/icons/action/favorite-full.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '마켓 트렌드' },
  { label: '추천 기회' },
  { label: '아이템 소싱' },
]);

//upload
const imageUploadChild = ref(null);
const sharedFiles = ref([]);

const handleFiles = (files) => {
  sharedFiles.value = files || [];
};

const clearAll = async () => {
  if (imageUploadChild.value) {
    await imageUploadChild.value.clear(); // async로 변경
  }
  // sharedFiles도 명시적으로 초기화
  sharedFiles.value = [];
};

//
const isLoading = ref(false);

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
};
const isError = ref(false);

const toggleError = () => {
  isError.value = !isError.value;
};

//popover
const popoverSourcing = ref();
let closeTimeout = null;

const openPopover = async (event) => {
  // 1. 기존 예약된 닫기(지연 닫기)가 있다면 무조건 취소
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }

  // 2. 중요: 이미 열려 있다면 "즉시" 닫아서 상태를 초기화합니다.
  // 이 과정이 있어야 태그 간 이동 시 팝오버가 잔상처럼 남지 않습니다.
  if (popoverSourcing.value?.visible) {
    popoverSourcing.value.hide();
  }

  // 3. 브라우저가 hide를 인지하고 난 뒤(다음 프레임) 새 타겟에 보여줍니다.
  // setTimeout 0 또는 nextTick을 사용합니다.
  const target = event.currentTarget;
  setTimeout(() => {
    popoverSourcing.value?.show(event, target);
  }, 0);
};

const closePopover = () => {
  // 태그를 벗어났을 때 0.1초 뒤에 닫기 (팝오버로 진입할 시간 확보)
  closeTimeout = setTimeout(() => {
    if (popoverSourcing.value) {
      popoverSourcing.value.hide();
    }
  }, 500);
};

const cancelClose = () => {
  // 팝오버 내부 진입 시 닫기 예약 취소
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

//
const keywordChips = ref([
  { id: 1, label: '겨울패션', active: false },
  { id: 2, label: '데일리룩', active: true },
  { id: 3, label: '봄 코디', active: false },
  { id: 4, label: '가을 코디', active: false },
  { id: 5, label: '레이어드', active: true },
  { id: 6, label: '트렌디룩', active: false },
  { id: 7, label: '꾸안꾸', active: false },
  { id: 8, label: '여성패션', active: false },
  { id: 9, label: '스타일링', active: false },
  { id: 10, label: '포인트 아이템', active: false },
  { id: 11, label: '감성 코디', active: false },
  { id: 12, label: '미니멀룩', active: true },
  { id: 13, label: '모던 스타일', active: false },
  { id: 14, label: '스트릿패션', active: false },
  { id: 15, label: '컬러매치', active: false },
  { id: 16, label: '톤온톤코디', active: false },
  { id: 17, label: '포멀캐주얼', active: false },
  { id: 18, label: '패션액세서리', active: false },
  { id: 19, label: '포멀캐주얼', active: false },
  { id: 20, label: '패션액세서리', active: false },
]);

// 별 아이콘 토글 함수
const toggleFavorite = (id) => {
  const target = keywordChips.value.find((chip) => chip.id === id);
  if (target) {
    target.active = !target.active;
  }
};

const featureList = [
  '데일리 활용성 높음',
  '캐주얼 기반 스타일',
  '시즌성 강조',
  '꾸안꾸 감성',
  '트렌디함 반영',
  '톤온톤 & 컬러 조화',
  '시즌성 강조',
  '꾸안꾸 감성',
  '트렌디함 반영',
  '톤온톤 & 컬러 조화',
  '레이어드에 최적화',
  '포인트 액세서리 활용',
  '레이어드에 최적화',
  '포인트 액세서리 활용',
  '시즌성 강조',
  '꾸안꾸 감성',
];
</script>
