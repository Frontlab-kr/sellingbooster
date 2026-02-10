<template>
  <div class="sb-community">
    <div class="sb-community-head">
      <div class="sb-community-head__title">
        <h4>FAQ</h4>
        <Breadcrumb :model="breadcrumb" />
      </div>
    </div>
    <div class="sb-community-menu">
      <div class="sb-community-menu-tab">
        <Button label="전체(999)" variant="text" />
        <Button label="사용방법" variant="text" />
        <Button label="가입방법" variant="text" />
        <Button label="기능소개" variant="text" />
      </div>
      <div class="sb-community-menu-search">
        <InputGroup>
          <InputText placeholder="Keyword" />
          <InputGroupAddon>
            <Button rounded size="large">
              <template #icon>
                <Icon name="sb:24-search" class="ico-24-search" />
              </template>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
    <div class="sb-faq">
      <div class="sb-faq-list">
        <FaqItem
          v-for="faq in faqList"
          :key="faq.id"
          :item="faq"
          @item-click="viewOpen"
        />
      </div>
      <div class="sb-faq-list-button">
        <Button outlined size="small" severity="contrast">
          <span class="p-button-label">더보기(12/83)</span>
          <Icon name="sb:24-plus" class="ico-24-plus" />
        </Button>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="dialogView" modal>
    <FaqView />
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import FaqItem from './FaqItem.vue';
import FaqView from './FaqView.vue';

//dialog
const dialogWrite = ref(false);
const dialogView = ref(false);

// breadcrumb
const breadcrumb = ref([
  { label: 'Home' },
  { label: '커뮤니티' },
  { label: 'FAQ' },
]);

//data
const faqList = ref([
  {
    id: 1,
    title: '판매 데이터를 엑셀 파일로 한 번에 내려받으려면 어떻게 하나요?',
    status: 'waiting',
  },
]);

const viewOpen = () => {
  dialogView.value = true;
};
</script>
