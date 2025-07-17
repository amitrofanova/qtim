import { ref, computed } from "vue";

interface Post {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export function usePosts() {
  const posts = ref<Post[]>([]);
  const total = ref(0);
  const page = ref(1);
  const perPage = 8;

  const fetchPosts = async () => {
    try {
      const res = await fetch(
        "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts"
      );
      const data: Post[] = await res.json();
      posts.value = data;
      total.value = data.length;
    } catch (error) {
      alert(`Ошибка при загрузке постов: ${error}`);
    }
  };

  const paginatedPosts = computed(() => {
    const start = (page.value - 1) * perPage;
    return posts.value.slice(start, start + perPage);
  });

  const totalPages = computed(() => Math.ceil(total.value / perPage));

  return {
    posts,
    paginatedPosts,
    page,
    totalPages,
    total,
    fetchPosts,
    setPage: (p: number) => {
      page.value = p;
    },
  };
}
