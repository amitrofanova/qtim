<template>
  <div class="w-[1216px] max-w-7xl mx-auto py-30 grid gap-16">
    <h1 class="text-7xl font-normal">Articles</h1>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] auto-rows-fr gap-8"
    >
      <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
    </div>
    <div class="flex justify-start space-x-2">
      <button
        v-if="page > 1"
        :disabled="page === 1"
        class="w-[44px] h-[44px] grid place-items-center border border-secondary bg-white rounded-[12px] disabled:opacity-50 cursor-pointer"
        @click="prevPage"
      >
        <img
          src="~/assets/img/arrow.svg "
          alt="previous page"
          class="rotate-180"
        />
      </button>

      <button
        v-for="p in totalPages"
        :key="p"
        :class="[
          'w-[44px] h-[44px] grid place-items-center  rounded-[12px]  cursor-pointer',
          p === page ? 'bg-primary text-white' : 'bg-secondary',
        ]"
        @click="setPage(p)"
      >
        {{ p }}
      </button>

      <button
        v-if="page < totalPages"
        :disabled="page === totalPages"
        class="w-[44px] h-[44px] grid place-items-center border border-secondary bg-white rounded-[12px] disabled:opacity-50 cursor-pointer"
        @click="nextPage"
      >
        <img src="~/assets/img/arrow.svg" alt="next page" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
