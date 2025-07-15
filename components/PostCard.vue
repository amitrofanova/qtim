<template>
  <NuxtLink :to="`/posts/${post.id}`">
    <div
      class="group h-full transition-transform transform hover:-translate-y-4"
    >
      <img :src="imgUrl" alt="" class="h-48 object-cover mb-2 rounded" />
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.preview }}</p>
        <span class="opacity-0 group-hover:opacity-100 transition-opacity"
          >Read more</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  post: {
    id: string;
    title: string;
    preview: string;
    image: string;
  };
}>();

const imgUrl = "https://placehold.jp/150x150.png";
</script>
