<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h5>K-트렌드</h5>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-ktrend-view">
      <div class="sb-ktrend-view-head">
        <div class="sb-ktrend-view-head__badge">
          <Badge value="셀링트렌드" severity="success" size="xlarge" />
        </div>
        <div class="sb-ktrend-view-head__title">
          캠퍼스 룩의 화려한 귀환, '프레피 스포티즘'으로 완성하는 봄날의 무드
        </div>
        <div class="sb-ktrend-view-head__text">
          따뜻한 봄기운이 찾아왔습니다.<br />
          클래식한 캠퍼스 스타일과 활동적인 편안함을 조화시킨 완벽한 '프레피
          스포티즘' 룩을 만나보세요.
        </div>
        <div class="sb-ktrend-view-head__date">2026.02.14</div>
        <div class="sb-ktrend-view-head__menu">
          <Button rounded severity="white" @click="toggleLike">
            <IconSystemLikeActive
              v-if="isLiked"
              class="ico-system-like active"
            />
            <IconSystemLike v-else class="ico-system-like" />
          </Button>
          <Button rounded severity="white" @click="menuToggle">
            <IconSystemShare class="ico-system-share" />
          </Button>
          <TieredMenu
            ref="menu"
            :model="menuItems"
            popup
            class="sb-social-layer"
          >
            <template #item="{ item, props }">
              <a v-bind="props.action" class="p-tieredmenu-item-link">
                <component
                  :is="item.icon"
                  v-if="item.icon"
                  class="p-tieredmenu-item-icon"
                />
                <span class="p-tieredmenu-item-label">{{ item.label }}</span>
              </a>
            </template>
          </TieredMenu>
        </div>
      </div>
      <div class="sb-ktrend-view-body">
        <div class="sb-ktrend-view-product">
          <div class="sb-ktrend-view-product-image">
            <div class="sb-ktrend-view-product-image-inner">
              <div
                class="sb-ktrend-view-product-image__point"
                style="top: 30%; left: 90%"
              >
                <Button
                  variant="text"
                  @mouseenter="openPopover($event)"
                  @mouseleave="closePopover"
                  @click="handlePointClick($event)"
                >
                  <template #icon>
                    <IconSystemPlus class="ico-system-plus" />
                  </template>
                </Button>
              </div>
              <div
                class="sb-ktrend-view-product-image__point"
                style="top: 1%; left: 20%"
              >
                <Button
                  variant="text"
                  @mouseenter="openPopover($event)"
                  @mouseleave="closePopover"
                  @click="handlePointClick($event)"
                >
                  <template #icon>
                    <IconSystemPlus class="ico-system-plus" />
                  </template>
                </Button>
              </div>
              <div
                class="sb-ktrend-view-product-image__point"
                style="top: 30%; left: 31%"
              >
                <Button
                  variant="text"
                  @mouseenter="openPopover($event)"
                  @mouseleave="closePopover"
                  @click="handlePointClick($event)"
                >
                  <template #icon>
                    <IconSystemPlus class="ico-system-plus" />
                  </template>
                </Button>
              </div>
              <div
                class="sb-ktrend-view-product-image__point"
                style="top: 80%; left: 40%"
              >
                <Button
                  variant="text"
                  @mouseenter="openPopover($event)"
                  @mouseleave="closePopover"
                  @click="handlePointClick($event)"
                >
                  <template #icon>
                    <IconSystemPlus class="ico-system-plus" />
                  </template>
                </Button>
              </div>

              <img src="https://picsum.photos/1360/1600" alt="" />
            </div>
            <Popover
              ref="popoverSourcing"
              class="sb-popover-sourcing"
              :dismissable="true"
              @mouseenter="cancelClose"
              @mouseleave="closePopover"
            >
              <div class="sb-ktrend-view-product-list-item">
                <div class="sb-ktrend-view-product-list-item__contents">
                  <div class="sb-ktrend-view-product-list-item__thumb">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  <div class="sb-ktrend-view-product-list-item__text">
                    <div class="sb-ktrend-view-product-list-item__badge">
                      <Badge value="기본" severity="neutral"></Badge>
                      <Badge value="기본" severity="neutral"></Badge>
                    </div>
                    <div class="sb-ktrend-view-product-list-item__title">
                      크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                      재킷크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                      재킷크롬 데님 재킷크롬 데님 재킷
                    </div>
                    <p>
                      <span><span class="pc">브랜드 :</span> 유사브랜드</span>
                      <span
                        ><span class="pc">예상 가격대 :</span> 250,000 ~ 350,000
                      </span>
                    </p>
                  </div>
                </div>

                <div class="sb-ktrend-view-product-list-item__link">
                  <p>
                    <span><NuxtLink to="/">1688 검색</NuxtLink></span>
                    <span><NuxtLink to="/">도매꾹 검색</NuxtLink></span>
                  </p>
                  <p>
                    <span><NuxtLink to="/">네이버쇼핑 검색</NuxtLink></span>
                    <span
                      ><NuxtLink to="/" class="text-primary"
                        >셀링부스터 검색</NuxtLink
                      ></span
                    >
                  </p>
                </div>
              </div>
            </Popover>
          </div>
          <div class="sb-ktrend-view-product-end">
            <div class="sb-ktrend-view-product-head">
              <strong>분석 결과</strong>
              <p>분석된 아이템 : <span class="text-primary">7</span>개</p>
            </div>
            <div class="sb-ktrend-view-product-list" v-scroll-end>
              <div class="sb-ktrend-view-product-list-scroll">
                <div class="sb-ktrend-view-product-list-item" v-for="item in 9">
                  <div class="sb-ktrend-view-product-list-item__contents">
                    <div class="sb-ktrend-view-product-list-item__thumb">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div class="sb-ktrend-view-product-list-item__text">
                      <div class="sb-ktrend-view-product-list-item__badge">
                        <Badge value="기본" severity="neutral"></Badge>
                        <Badge value="기본" severity="neutral"></Badge>
                      </div>
                      <div class="sb-ktrend-view-product-list-item__title">
                        크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷크롬 데님 재킷크롬 데님 재킷크롬 데님
                        재킷크롬 데님 재킷
                      </div>
                      <p>
                        <span><span class="pc">브랜드 :</span> 유사브랜드</span>
                        <span
                          ><span class="pc">예상 가격대 :</span> 250,000 ~
                          350,000
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="sb-ktrend-view-product-list-item__link">
                    <p>
                      <span><NuxtLink to="/">1688 검색</NuxtLink></span>
                      <span><NuxtLink to="/">도매꾹 검색</NuxtLink></span>
                    </p>
                    <p>
                      <span><NuxtLink to="/">네이버쇼핑 검색</NuxtLink></span>
                      <span
                        ><NuxtLink to="/" class="text-primary"
                          >셀링부스터 검색</NuxtLink
                        ></span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sb-ktrend-view-contents">
          <div class="sb-ktrend-view-contents-item">
            <div class="sb-ktrend-view-contents-item__title">
              <h5 class="text-primary">01.</h5>
              <h6>클래식의 변주, 화이트 로고 바시티 자켓</h6>
            </div>
            이번 시즌, 패션계의 가장 큰 화두 중 하나는 단연 '바시티 자켓'의
            재해석입니다. 타미힐피거 특유의 깔끔한 로고 플레이가 돋보이는
            <strong class="text-secondary">화이트 바시티 자켓</strong>은 그
            자체만으로도 전체적인 룩의 톤을 밝고 산뜻하게 잡아줍니다. 바시티
            자켓은 보통 다크한 컬러가 많지만, 이번에는 화이트 컬러를
            선택해보세요.<br />
            칙칙했던 봄 스타일링에 반사판을 댄 듯 화사한 에너지를 불어넣어 줄
            거예요. 데님과 매치하면 정석적인 캐주얼 룩이 되지만, 오늘 우리가
            제안하는 스타일링은 조금 더 특별합니다.
          </div>
          <div class="sb-ktrend-view-contents-item">
            <div class="sb-ktrend-view-contents-item__title">
              <h5 class="text-primary">02.</h5>
              <h6>레이어드의 미학, 헨리넥 티셔츠의 힘</h6>
            </div>
            이너로 선택한 화이트
            <strong class="text-secondary">헨리넥 반팔 티셔츠</strong>는 이번
            룩의 '치트키'입니다. 일반적인 라운드 티셔츠보다 헨리넥 특유의 단추
            디테일이 주는 위트가 룩의 완성도를 높여주죠.<br />
            자켓을 살짝 걸쳤을 때 슬쩍 보이는 넥 라인의 단추가 단정하면서도
            세련된 인상을 줍니다. 화이트 톤으로 자켓과 컬러를 맞추면 훨씬 세련된
            '톤온톤(Tone-on-Tone)' 스타일링을 즐길 수 있어요.
          </div>
          <div class="sb-ktrend-view-contents-item">
            <div class="sb-ktrend-view-contents-item__title">
              <h5 class="text-primary">03.</h5>
              <h6>활동성과 스타일을 동시에, 네이비 플리츠 스커트</h6>
            </div>
            스포티한 무드를 극대화하는 핵심 아이템은 바로
            <strong class="text-secondary">네이비 플리츠 스커트</strong>입니다.
            찰랑이는 주름이 움직임마다 생동감을 주는 플리츠 스커트는 나이키와
            같은 스포츠 브랜드의 아이템을 믹스매치할 때 비로소 진가가
            드러납니다. 화이트와 네이비의 조합은 실패 없는 '프레피 룩'의
            근본이죠. 자켓의 로고와 스커트의 컬러를 맞추면 룩 전체에 안정감이
            생기고, 스포티한 샌들이나 깔끔한 화이트 스니커즈를 매치하면 완벽한
            봄날의 나들이 룩이 완성됩니다.
          </div>
          <div class="sb-ktrend-view-contents-item">
            <div class="sb-ktrend-view-contents-item__title">
              <h5 class="text-primary">04.</h5>
              <h6>엣지의 완성, 레드 뿔테 선글라스</h6>
            </div>
            전체적인 룩이 화이트와 네이비로 다소 차분하게 느껴진다면, 액세서리로
            강렬한 포인트를 주는 것이 에디터의 팁입니다. 젠틀몬스터 스타일의
            <strong class="text-secondary">레드 컬러 뿔테 선글라스</strong>는
            룩의 분위기를 단번에 반전시키는 히든카드입니다. 차분한 프레피 룩에
            팝한 레드 컬러 선글라스를 더하는 순간, 당신은 평범한 캠퍼스 룩을
            즐기는 사람이 아닌, 런웨이를 걷는 듯한 트렌드세터가 될 거예요.<br />
            선글라스의 볼드한 프레임이 얼굴의 윤곽을 잡아주어 전체적인 스타일의
            '텐션'을 한껏 끌어올려 줍니다.
          </div>
          <div class="sb-ktrend-view-contents-styling">
            <div class="sb-ktrend-view-contents-styling__title">
              💫 에디터의 스타일링 제안
            </div>
            <ul>
              <li>
                <strong>*</strong>
                <p>
                  <strong>스니커즈보다는 삭스! :</strong> 화이트 삭스에 스포티한
                  스니커즈를 매치하면 더욱 영(young)한 무드를 낼 수 있습니다.
                </p>
              </li>
              <li>
                <strong>*</strong>
                <p>
                  <strong>헤어 스타일링 :</strong>
                  깔끔한 프레피 룩에는 높게 묶은 하이 포니테일이나, 자연스럽게
                  늘어뜨린 웨이브 헤어가 선글라스와 아주 잘 어울립니다.
                </p>
              </li>
              <li>
                <strong>*</strong>
                <p>
                  <strong>레이어링 활용 :</strong>
                  날씨가 조금 더 따뜻해지면 바시티 자켓을 어깨에 살짝
                  걸쳐보세요. 그 위로 선글라스를 머리에 얹어 액세서리로 활용하는
                  것도 멋스러운 연출법이죠.
                </p>
              </li>
            </ul>
            <div class="sb-ktrend-view-contents-styling__text">
              <p>
                물론, 당신의 옷장에 생기를 불어넣어 줄 이 조합으로 매일의 데일리
                룩을 즐겨보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-chip">
        <div class="sb-chip-list">
          <NuxtLink to="/">
            <Chip label="초보셀러 처음 시작하는 방법" />
          </NuxtLink>
          <NuxtLink to="/">
            <Chip label="스마트스토어 처음 운영하는 법" />
          </NuxtLink>
          <NuxtLink to="/">
            <Chip label="쇼핑몰 창업준비 과정 정리" />
          </NuxtLink>
          <NuxtLink to="/">
            <Chip label="초보셀러 매출 올리는 방법" />
          </NuxtLink>
          <NuxtLink to="/">
            <Chip label="상품선정 어떻게 해야할까" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <products />
    <contents />
    <div class="sb-blog-view__button">
      <NuxtLink to="/community/blog/">
        <Button severity="primary" outlined>
          <IconArrowLeft class="ico-arrow-left" />
          <span class="p-button-label">목록으로</span>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import contents from '@/pages/community/components/contents';
import products from '@/pages/community/components/products';
import IconArrowLeft from '@/assets/icons/arrow/left.svg?component';
import IconSystemDownload from '@/assets/icons/system/download.svg?component';
import IconProfileDefault from '@/assets/icons/profile/default.svg?component';

import IconSystemLike from '@/assets/icons/system/like.svg?component';
import IconSystemLikeActive from '@/assets/icons/system/like-active.svg?component';
import IconSystemMessage from '@/assets/icons/system/message.svg?component';
import IconSystemShare from '@/assets/icons/system/share.svg?component';

import IconSocialFacebook from '@/assets/icons/social/facebook.svg?component';
import IconSocialX from '@/assets/icons/social/x.svg?component';
import IconSocialKakaotalk from '@/assets/icons/social/kakaotalk.svg?component';
import IconSocialNaverblog from '@/assets/icons/social/naverblog.svg?component';
import IconSocialCopy from '@/assets/icons/social/copy.svg?component';

import IconSystemPlus from '@/assets/icons/system/plus.svg?component';

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'K-트렌드' },
]);

//
const isLiked = ref(false);
const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const menu = ref();
const menuItems = ref([
  {
    label: '페이스북',
    icon: IconSocialFacebook,
    class: 'ico-social-facebook',
  },
  {
    label: '트위터',
    icon: IconSocialX,
    class: 'ico-social-x',
  },
  {
    label: '카카오톡',
    icon: IconSocialKakaotalk,
    class: 'ico-social-kakaotalk',
  },
  {
    label: '네이버블로그',
    icon: IconSocialNaverblog,
    class: 'ico-social-naverblog',
  },
  {
    label: 'URL',
    icon: IconSocialCopy,
    class: 'ico-social-copy',
  },
]);

const menuToggle = (event) => {
  if (menu.value) {
    menu.value.toggle(event);
  }
};

//popover
const popoverSourcing = ref();
let closeTimeout = null;
let currentTarget = null; // 현재 열린 타겟을 추적하기 위한 변수

// [공통] 팝오버 열기 로직 분리
const showPopover = (event, target) => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }

  // 같은 아이콘을 다시 조작하는 게 아니라면 초기화 후 새로 노출
  if (popoverSourcing.value?.visible && currentTarget !== target) {
    popoverSourcing.value.hide();
  }

  currentTarget = target;
  setTimeout(() => {
    popoverSourcing.value?.show(event, target);
  }, 0);
};

// [PC] 마우스 호버 시
const openPopover = (event) => {
  showPopover(event, event.currentTarget);
};

// [PC/Mobile] 클릭 시 (토글 기능 포함)
const handlePointClick = (event) => {
  const target = event.currentTarget;

  if (popoverSourcing.value?.visible && currentTarget === target) {
    // 이미 열려있는 걸 다시 클릭하면 닫기
    popoverSourcing.value.hide();
    currentTarget = null;
  } else {
    // 새로 열거나 다른 걸 열 때
    showPopover(event, target);
  }
};

// [PC] 마우스 아웃 시
const closePopover = () => {
  closeTimeout = setTimeout(() => {
    if (popoverSourcing.value) {
      popoverSourcing.value.hide();
      currentTarget = null;
    }
  }, 500);
};

const cancelClose = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};
</script>
