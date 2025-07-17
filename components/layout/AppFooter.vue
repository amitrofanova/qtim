<template>
  <footer>
    <div class="relative pt-34 pb-10 px-26 overflow-hidden bg-accent text-sm">
      <div class="flex">
        <div class="pr-100">
          <p class="mb-16">Is there a project?</p>
          <NuxtLink to="#" class="relative inline-block">
            <span
              class="block pb-2 text-8xl underline underline-offset-16 decoration-1"
              >Let’s work</span
            >
            <span class="text-8xl underline underline-offset-16 decoration-1"
              >to</span
            >
            <span class="text-8xl relative"
              >g<span
                class="absolute bottom-[12px] left-[-16px] h-[1px] w-[20px] bg-accent" /><span
                class="absolute bottom-[12px] right-[-16px] h-[1px] w-[20px] bg-accent" /></span
            ><span class="text-8xl underline underline-offset-16 decoration-1"
              >ether</span
            >
          </NuxtLink>
        </div>
        <ul class="grid pt-20">
          <li
            v-for="contact in contacts"
            :key="contact.title"
            class="grid mb-5 last:pt-4"
          >
            <span class="pb-2">{{ contact.title }}</span>
            <a v-if="contact.phone" href="tel:+79999999999" class="pb-2">{{
              contact.phone
            }}</a>
            <a v-if="contact.email" href="mailto:#" class="pb-4">{{
              contact.email
            }}</a>
            <span v-if="contact.address" class="w-40 pb-2">{{
              contact.address
            }}</span>
            <a
              v-if="contact.link"
              href="#"
              class="w-[32px] h-[32px] grid place-items-center rounded-[50%] bg-primary"
              ><img src="~/assets/img/tg.svg" alt="english"
            /></a>
          </li>
        </ul>
      </div>
      <nav
        aria-label="social links"
        class="flex flex-wrap mt-62 [&>a:nth-child(n+4)]:justify-self-end"
      >
        <NuxtLink
          v-for="(link, index) in socialLinks"
          :key="link.text"
          :to="link.url"
          external
          class="mr-10 underline underline-offset-6"
          :style="{ 'margin-left': index === 3 ? 'auto' : '0' }"
          >{{ link.text }}</NuxtLink
        >
      </nav>
      <button
        class="grid p-30 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[358px] h-[358px] rounded-full bg-primary text-2xl cursor-pointer text-white"
      >
        Go
      </button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const socialLinks = [
  { text: "Facebook", url: "#" },
  { text: "Instagram", url: "#" },
  { text: "Telegram", url: "#" },
  { text: "Behance", url: "#" },
  { text: "Linkedn", url: "#" },
  { text: "Privacy Policy", url: "#" },
];

const contacts = [
  {
    title: "For all questions",
    phone: "+7 (920) 278—00—68",
    email: "qtim@agency.com",
  },
  {
    title: "Office in Russia",
    link: "#",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
  {
    title: "Office in Dubai",
    link: "#",
    address: "139 Ruben Station Lake Drew, NM 52678",
  },
];
</script>
