<template>
  <NuxtLink to="/community/blog/view" class="sb-blog-list-item" v-if="item">
    <div class="sb-blog-list-item__head">
      <div class="sb-blog-list-item__badge">
        <Badge
          v-for="(badge, index) in item.badges"
          :key="index"
          v-bind="badge"
        />
      </div>
      <div class="sb-blog-list-item__date">{{ item.date }}</div>
    </div>
    <div class="sb-blog-list-item__contents">
      <div class="sb-blog-list-item__thumb">
        <img :src="item.imgSrc" :alt="item.title" />
      </div>
      <div class="sb-blog-list-item__text">
        <h6 v-html="blogTitle"></h6>
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
    <div class="sb-blog-list-item__info">
      <SbInfo
        :visible-buttons="['view', 'read']"
        :view-count="item.viewCount"
        :read-time="item.readTime"
      />
    </div>
  </NuxtLink>
</template>

<script setup>
import SbInfo from '@/pages/community/components/SbInfo.vue';
import IconSystemPaperclip from '@/assets/icons/system/paperclip.svg?component';

// props 정의
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  searchText: {
    type: String,
    default: '',
  },
});

const blogTitle = computed(() => {
  const title = props.item.title;
  const target = props.searchText;

  if (!target || !title.includes(target)) {
    return title;
  }
  const regex = new RegExp(`(${target})`, 'gi');
  return title.replace(regex, `<span class="text-primary">$1</span>`);
});
</script>
