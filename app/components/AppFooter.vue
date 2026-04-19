<template>
  <footer class="sb-footer">
    <div class="sb-footer-head">
      <div class="sb-footer-logo">Selling Booster</div>
    </div>
    <div class="sb-footer-body">
      <div class="sb-footer-info">
        <p>
          <span><strong>(주)헥토데이터</strong></span>
          <span>서을특별시 강남구 테헤란로 223 큰길타워 10F</span>
          <span>대표자 : 오승철</span>
          <span>사업자등록번호 : 113-86-32627</span>
          <span>통신판매업 신고 : 2023-서울강남-01633</span>
        </p>
        <p>
          <span>Tel : 02-6953-0257</span>
          <span>FAX : 02-6008-0255</span>
          <span
            >E-mail :
            <a href="mailto:hello@sellingbooster.io"
              >hello@sellingbooster.io</a
            ></span
          >
        </p>
      </div>
      <div class="sb-footer-select">
        <Select
          v-model="selectedValue"
          :options="familySites"
          optionLabel="name"
          placeholder="패밀리 사이트"
          class="sb-select sb-select--bottom"
          @change="onSiteChange"
        />
      </div>
    </div>
    <div class="sb-footer-foot">
      <div class="sb-footer-foot-start">
        <div class="sb-footer-link">
          <NuxtLink to="/policy/personalPrivacy" class="sb-footer-link-item">
            개인정보처리방침
          </NuxtLink>
          <NuxtLink to="/policy/servicePolicy" class="sb-footer-link-item"
            >서비스 이용약관</NuxtLink
          >
          <NuxtLink to="/" class="sb-footer-link-item">
            셀링부스터 서비스 소개
          </NuxtLink>
          <NuxtLink to="/" class="sb-footer-link-item">회사 소개</NuxtLink>
          <div class="pc">
            <NuxtLink to="/" class="sb-footer-link-item"
              >크롬 익스텐션</NuxtLink
            >
          </div>
        </div>
        <address>
          <span>COPYRIGHT</span>© HECTO DATA CO., LTE. ALL RIGHTS RESERVED.
        </address>
      </div>
      <div class="sb-footer-foot-end">
        <div class="sb-footer-sns">
          <NuxtLink to="/" class="sb-footer-sns-item">
            <Button rounded severity="white">
              <template #icon>
                <IconSystemBlog />
              </template>
            </Button>
          </NuxtLink>
          <NuxtLink to="/" class="sb-footer-sns-item">
            <Button rounded severity="white">
              <template #icon>
                <IconSystemNaverblog />
              </template>
            </Button>
          </NuxtLink>
          <NuxtLink to="/" class="sb-footer-sns-item">
            <Button rounded severity="white">
              <template #icon>
                <IconSystemInstagram />
              </template>
            </Button>
          </NuxtLink>
          <NuxtLink to="/" class="sb-footer-sns-item">
            <Button rounded severity="white">
              <template #icon>
                <IconSystemYoutube />
              </template>
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconSystemBlog from '@/assets/icons/system/blog.svg?component';
import IconSystemNaverblog from '@/assets/icons/system/naverblog.svg?component';
import IconSystemInstagram from '@/assets/icons/system/instagram.svg?component';
import IconSystemYoutube from '@/assets/icons/system/youtube.svg?component';

const selectedValue = ref();
const familySites = ref([
  { name: '헥토이노베이션', url: 'https://www.hectoinnovation.co.kr/corp' },
  { name: '헥토파이낸셜', url: 'https://www.hectofinancial.co.kr/main' },
  { name: '헥토헬스케어', url: 'https://www.hectohealthcare.com/corp' },
  {
    name: '헥토데이터',
    url: 'https://hectodata.co.kr/?utm_source=hecto&utm_medium=familysite&utm_campaign=hectodata',
  },
  { name: '헥토미디어', url: 'https://hectomedia.co.kr/' },
  { name: '헥토큐앤엠', url: 'https://www.hectoqnm.co.kr/' },
]);

const onSiteChange = (e) => {
  if (e.value && e.value.url) {
    window.open(e.value.url, '_blank');
    selectedValue.value = null;
  }
};
</script>
