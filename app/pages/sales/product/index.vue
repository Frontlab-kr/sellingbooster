<template>
  <SbMobileInfo />
  <div class="sb-sales">
    <div class="sb-sales-head">
      <div class="sb-sales-head__title">
        <h5>상품명 점검</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>

    <div class="sb-sales-contents">
      <div class="sb-sales-search">
        <h4>
          내 상품명 SEO 점검, 가이드라인에 맞게 작성되었나요? <br />
          상품명 상태를 확인하고, 클릭하여 수정이 필요한 키워드를 체크하세요.
        </h4>
        <div class="sb-sales-search-form">
          <div class="sb-sales-search-form-item">
            <div class="sb-sales-search-form-item__body">
              <Select
                v-model="selectedValue"
                :options="selectedOption"
                optionLabel="name"
                placeholder="1차 카테고리"
                style="min-width: 190px"
              />
              <SbInput placeholder="상품 번호를 입력해주세요." />
              <Button severity="primary" label="검색" />
            </div>
          </div>
        </div>
      </div>
      <div class="sb-sales-product">
        <div class="sb-sales-product-head">
          <div class="sb-sales-product-head__amount">
            총 <strong>4999,999</strong>건
          </div>
          <div class="sb-sales-product-head__button">
            <p>진행 중인 점검 : <strong class="text-primary">2</strong>건</p>

            <Button outlined severity="primary" size="small">
              <IconSystemCheckS class="ico-system-check-s" />
              <span class="p-button-label">선택 점검 (1개)</span>
            </Button>

            <Button outlined severity="contrast" size="small">
              <IconSystemCheckS class="ico-system-check-s" />
              <span class="p-button-label"
                >현재 리스트 전체 점검 (<span class="text-primary">12</span
                >개)</span
              >
            </Button>
          </div>
        </div>
        <div class="sb-sales-product-body">
          <div class="sb-sales-product-body__text">
            상품 정보 수정 시 최신순으로 업데이트되어 먼저 보여요
          </div>
          <div class="sb-sales-product-list">
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox01"
                      v-model="checkbox01"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도 시야차단 사생활 강화유리 9H 마이크로 루버
                    액정보호필름 갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="점검시작" severity="neutral"></Badge>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox02"
                      v-model="checkbox02"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label"></span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemCoupang"
                      alt="Coupang"
                      class="ico-system-coupang"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도 시야차단 사생활 강화유리 9H 마이크로 루버
                    액정보호필름 갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="점검시작" severity="neutral"></Badge>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox03"
                      v-model="checkbox03"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemGmarket"
                      alt="gmarket"
                      class="ico-system-gmarket"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    <span class="text-success">신지모루</span>
                    <span class="text-danger">28도</span> 시야차단 사생활
                    강화유리 <span class="text-success">9H</span> 마이크로 루버
                    액정보호필름 갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="매우 좋음" severity="success"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox04"
                      v-model="checkbox04"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    <span class="text-success">신지모루</span>
                    <span class="text-danger">28도</span> 시야차단 사생활
                    강화유리 <span class="text-success">9H</span> 마이크로
                    <span class="text-danger">루버</span>
                    액정보호필름 갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="매우 나쁨" severity="danger"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox05"
                      v-model="checkbox05"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도 시야차단
                    <span class="text-success">사생활</span> 강화유리 9H
                    마이크로 <span class="text-danger">루버</span>
                    <span class="text-success">액정보호필름</span>
                    갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="나쁨" severity="warn"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox06"
                      v-model="checkbox06"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도 시야차단
                    <span class="text-success">사생활</span> 강화유리 9H
                    마이크로 <span class="text-danger">루버</span>
                    <span class="text-success">액정보호필름</span>
                    갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="좋음" severity="secondary"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox07"
                      v-model="checkbox07"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도
                    <span class="text-success">시야차단</span> 사생활 강화유리
                    9H <span class="text-success">마이크로</span>
                    <span class="text-danger">루버</span> 액정보호필름 갤럭시S26
                    울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="좋음" severity="secondary"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox08"
                      v-model="checkbox08"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도 시야차단
                    <span class="text-success">사생활</span> 강화유리 9H
                    마이크로 <span class="text-danger">루버</span>
                    <span class="text-success">액정보호필름</span>
                    갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="보통" severity="info"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox09"
                      v-model="checkbox09"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도 시야차단
                    <span class="text-success">사생활</span> 강화유리 9H
                    마이크로 <span class="text-danger">루버</span>
                    <span class="text-success">액정보호필름</span>
                    갤럭시S26 울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="보통" severity="info"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
            <div class="sb-sales-product-list-item">
              <div class="sb-sales-product-list-item-head">
                <div class="sb-checkbox">
                  <div class="sb-checkbox-item">
                    <Checkbox
                      inputId="checkbox10"
                      v-model="checkbox10"
                      :binary="true"
                      value=""
                    />
                  </div>
                </div>
                <Button variant="text">
                  <span class="p-button-label">상품 랭킹 찾기</span>
                  <IconArrowRight class="ico-arrow-right" />
                </Button>
              </div>
              <div class="sb-sales-product-list-item-body">
                <div class="sb-sales-product-list-item__thumb">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div class="sb-sales-product-list-item__contents">
                  <div class="sb-sales-product-list-item__number">
                    <img
                      :src="IconSystemSmartstore"
                      alt="smart store"
                      class="ico-system-smartstore"
                    />
                    <p>상품번호 : 20260310132535</p>
                  </div>
                  <div class="sb-sales-product-list-item__title">
                    신지모루 28도
                    <span class="text-success">시야차단</span> 사생활 강화유리
                    9H <span class="text-success">마이크로</span>
                    <span class="text-danger">루버</span> 액정보호필름 갤럭시S26
                    울트라, 2매입
                  </div>
                </div>
              </div>
              <div class="sb-sales-product-list-item-foot">
                <dl>
                  <dt>점검 상태</dt>
                  <dd>
                    <Badge value="매우 좋음" severity="success"></Badge>
                    <p>(2026.03.13 16:23:16)</p>
                  </dd>
                </dl>
                <analyze @copy="handleShowToast" />
              </div>
            </div>
          </div>
          <SbPaginator />
        </div>
      </div>
    </div>
  </div>

  <Toast position="bottom-center" group="bc" />
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import analyze from '@/pages/sales/components/analyze.vue';
import IconArrowRight from '@/assets/icons/arrow/right.svg?component';
import IconSystemSmartstore from '@/assets/icons/system/smartstore.png';
import IconSystemCoupang from '@/assets/icons/system/coupang.png';
import IconSystemGmarket from '@/assets/icons/system/gmarket.png';
import IconSystemCheckS from '@/assets/icons/system/check-s.svg?component';

//breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '판매 가속' },
  { label: '상품명 점검' },
]);

//select
const selectedOption = ref([{ name: '상품명' }, { name: '상품 번호' }]);
const selectedValue = ref(selectedOption.value[0]);

const activeTab = ref(0);

const toast = useToast();

const handleShowToast = () => {
  toast.add({
    detail: '추천 상품명이 복사 되었습니다. 이용하실 곳에 붙여넣기 하세요.',
    group: 'bc',
    life: 3000,
  });
};
</script>
