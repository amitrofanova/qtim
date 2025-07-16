<template>
  <header class="h-[120px] flex justify-between items-center px-20">
    <NuxtLink to="/"><img src="~/assets/img/logo.svg" alt="Qtim" /></NuxtLink>
    <div class="flex items-center gap-22">
      <nav class="flex gap-20">
        <NuxtLink v-for="link in nav" :key="link.text" :to="link.url">
          {{ link.text }}
        </NuxtLink>
      </nav>
      <div class="flex gap-3">
        <button
          class="w-[52px] h-[52px] grid place-items-center rounded-[50%] border-2 border-secondary-50 cursor-pointer"
        >
          <img src="~/assets/img/en.svg" alt="english" />
        </button>
        <UButton class="font-bold rounded-full px-10 cursor-pointer"
          >Let's work</UButton
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { UButton } from "#components";

const nav = [
  { text: "Work", url: "#" },
  { text: "About", url: "#" },
];
</script>
