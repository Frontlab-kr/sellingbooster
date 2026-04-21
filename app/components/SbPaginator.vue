<template>
  <Paginator
    v-model:first="first"
    :rows="rows"
    :totalRecords="totalRecords"
    @page="onPageChange"
  >
    <template
      #container="{ page, pageCount, prevPageCallback, nextPageCallback }"
    >
      <div class="sb-paginator">
        <button @click="prevPageCallback" :disabled="page === 0">
          <IconArrowAchevronLeft class="ico-arrow-achevron-left" />
        </button>

        <div class="sb-paginator-pages">
          <button class="current">
            {{ page + 1 }}
          </button>

          <template
            v-for="n in Math.min(visibleCount, pageCount - (page + 1))"
            :key="n"
          >
            <button @click="goToPage(page + n)">
              {{ page + 1 + n }}
            </button>
          </template>

          <div v-if="pageCount > 7" class="sb-paginator-ellipsis">
            <IconSystemDot class="ico-system-dot" />
          </div>

          <button
            v-if="pageCount > 6 && page + 1 !== pageCount"
            @click="goToPage(pageCount - 1)"
          >
            {{ pageCount }}
          </button>
        </div>

        <button
          @click="nextPageCallback"
          :disabled="page === pageCount - 1"
          class="sb-paginator-next"
        >
          <IconArrowAchevronRight class="ico-arrow-achevron-right" />
        </button>
      </div>
    </template>
  </Paginator>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Paginator from 'primevue/paginator';
import IconSystemDot from '@/assets/icons/system/dot.svg?component';
import IconArrowAchevronLeft from '@/assets/icons/arrow/achevron-left.svg?component';
import IconArrowAchevronRight from '@/assets/icons/arrow/achevron-right.svg?component';

const first = ref(0);
const rows = ref(10);
const totalRecords = ref(9990);

const isMobile = ref(false);

const updateVisibleCount = () => {
  isMobile.value = window.innerWidth <= 1440;
};

const visibleCount = computed(() => {
  return isMobile.value ? 3 : 5;
});

const onPageChange = (event) => {
  first.value = event.first;
};

const goToPage = (targetPage) => {
  first.value = targetPage * rows.value;
};

// 화면 크기 변경 감지
onMounted(() => {
  updateVisibleCount();
  window.addEventListener('resize', updateVisibleCount);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount);
});
</script>
