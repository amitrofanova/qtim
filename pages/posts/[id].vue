<template>
  <div class="w-[1216px] mx-auto pt-30 pb-20">
    <div v-if="post" class="text-primary">
      <h1 class="text-7xl mb-20">{{ post.title }}</h1>
      <img :src="imgUrl" alt="" class="w-full h-[700px] mb-18 object-cover" />
      <small class="">About</small>
      <p class="py-8 max-w-[695px] text-3xl">{{ post.description }}</p>
    </div>
    <div v-else class="text-center py-10">Загрузка...</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Post {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

const post = ref<Post | null>(null);

const route = useRoute();

const fetchPostById = async (id: string) => {
  try {
    const res = await fetch(
      `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
    );
    if (!res.ok) throw new Error("Post not found");
    post.value = await res.json();
  } catch (error) {
    console.error(error);
    post.value = null; // Можно добавить обработку ошибки отображения сообщения
  }
};

onMounted(() => {
  const id = route.params.id as string;
  fetchPostById(id);
});

const imgUrl = "https://placehold.jp/280x280.png";
</script>
