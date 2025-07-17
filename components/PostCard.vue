<template>
  <NuxtLink :to="`/posts/${post.id}`">
    <div
      class="group h-full transition-transform transform hover:-translate-y-4 grid gap-4"
    >
      <img :src="imgUrl" alt="" class="w-100 object-cover mb-2" />
      <p class="text-md text-primary">{{ post.preview }}</p>
      <span
        class="opacity-0 group-hover:opacity-100 transition-opacity text-md text-accent"
        >Read more</span
      >
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

const imgUrl = "https://placehold.jp/280x280.png";
</script>
