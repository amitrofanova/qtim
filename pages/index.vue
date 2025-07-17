<template>
  <div class="w-[1216px] max-w-7xl mx-auto py-30 grid gap-16">
    <h1 class="text-7xl font-normal">Articles</h1>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] auto-rows-fr gap-8"
    >
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <UPagination
      v-model:page="currentPage"
      :items-per-page="ITEMS_PER_PAGE"
      :total="totalItems"
      :show-edges="false"
      color="primary"
      active-color="primary"
      variant="soft"
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
import PostCard from "~/components/PostCard.vue";

const currentPage = ref(1);
const posts = ref([]);
const ITEMS_PER_PAGE = 8;
// Должно быть получено из API
const totalItems = 82;

async function fetchPosts(page: number) {
  try {
    const response = await fetch(
      `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts?page=${page}&limit=8`
    );
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
}

fetchPosts(currentPage.value);

watch(currentPage, (newPage) => {
  fetchPosts(newPage);
});
</script>
