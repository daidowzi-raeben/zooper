<template>
<div>
    <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">최근 입금내역</h2>
    <div class="space-y-5">
      <div
        v-for="link in links"
        :key="link.icon"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <span>
          {{ link.icon }}
        </span>
      </div>
    </div>
  </div>
    <div class="mt-20">
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">최근 출금내역</h2>
    <div class="space-y-5">
      <div
        v-for="link in links"
        :key="link.icon"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <span>
          {{ link.icon }}
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/fayazara",
    icon: "mdi:twitter",
  },
  {
    name: "GitHub",
    url: "https://github.com/fayazara",
    icon: "mdi:github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/fayaz-aralikatti/",
    icon: "mdi:linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/fayazara",
    icon: "mdi:telegram",
  },
];
</script>
