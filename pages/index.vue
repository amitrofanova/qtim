<template>
  <div class="max-w-7xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Блог</h1>

    <UContainer
      class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] auto-rows-fr gap-4"
    >
      <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
    </UContainer>

    <div class="flex justify-center space-x-2 mt-6">
      <UButton
        variant="outlined"
        size="sm"
        :disabled="page === 1"
        @click="prevPage"
      >
        Предыдущая
      </UButton>

      <div class="flex items-center space-x-1">
        <UButton
          v-for="p in totalPages"
          :key="p"
          size="sm"
          :variant="p === page ? 'solid' : 'outlined'"
          @click="setPage(p)"
        >
          {{ p }}
        </UButton>
      </div>

      <UButton
        variant="outlined"
        size="sm"
        :disabled="page === totalPages"
        @click="nextPage"
      >
        Следующая
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { usePosts } from "~/composables/usePosts";
import PostCard from "~/components/PostCard.vue";

const { paginatedPosts, page, totalPages, fetchPosts, setPage } = usePosts();

onMounted(() => {
  fetchPosts();
});

const prevPage = () => {
  if (page.value > 1) setPage(page.value - 1);
};

const nextPage = () => {
  if (page.value < totalPages.value) setPage(page.value + 1);
};
</script>
