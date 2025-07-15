<template>
  <div class="max-w-3xl mx-auto p-4">
    <UCard v-if="post" class="bg-white rounded shadow p-6">
      <img :src="post.image" alt="" class="w-full h-auto mb-4 rounded" />
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="mb-4 text-gray-700">{{ post.description }}</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline"
        >Назад к списку</NuxtLink
      >
    </UCard>

    <div v-else class="text-center py-10">Загрузка...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Post {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export default defineComponent({
  setup() {
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

    return { post };
  },
});
</script>
