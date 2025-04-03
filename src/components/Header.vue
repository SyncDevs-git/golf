<template>
  <nav
    class="bg-[#0D1B1E] text-white flex items-center justify-between px-6 py-3 shadow-md"
  >
    <div class="flex items-center space-x-4">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="" srcset="" />
      </div>
      <nav class="flex space-x-4 text-sm">
        <ul class="flex space-x-4 text-sm">
          <li v-for="item in navItems" :key="item.to">
            <a
              :href="item.to"
              class="flex items-center space-x-1  font-semibold"
              :class="isActive(item.to) ? 'bg-secondary text-primary font-bold' : 'text-textSecondary hover:text-textPrimary'"
            >
            <span v-html="item.icon" :class="isActive(item.to) ? 'fill-primary text-orange-500' : 'fill-current text-gray-500'"></span>
              <span>{{ item.title }}</span>
            </a>
          </li>
        </ul>
        <!-- <a
          href="#"
          class="flex items-center space-x-1 text-yellow-500 font-semibold"
        >
          <span>📌</span>
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 opacity-60 hover:opacity-100"
        >
          <span>📄</span>
          <span>Your GOLF AI Trainer</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 opacity-60 hover:opacity-100"
        >
          <span>🎥</span>
          <span>Video Library</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 opacity-60 hover:opacity-100"
        >
          <span>🏌️</span>
          <span>Training Aids</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 opacity-60 hover:opacity-100"
        >
          <span>🛤️</span>
          <span>Journey</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-1 opacity-60 hover:opacity-100"
        >
          <span>📖</span>
          <span>Book Top 100</span>
        </a> -->
      </nav>
    </div>

    <div class="flex items-center space-x-4">
      <button
        class="bg-green-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-600"
      >
        Sync with Arccos
      </button>
      <div class="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/32"
          alt="User Avatar"
          class="w-8 h-8 rounded-full"
        />
        <div class="text-sm">
          <p class="font-semibold">Hello, Smith</p>
          <p class="text-xs opacity-70">smithwill@gmail.com</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { NavItem } from "../types";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Header",
  setup() {
    const route = useRoute();
    const navItems: NavItem[] = [
      {  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M8.3455 3.76368V6.38187C8.3455 6.90266 8.13862 7.40211 7.77037 7.77037C7.40211 8.13862 6.90266 8.3455 6.38187 8.3455H3.76368C3.2429 8.3455 2.74344 8.13862 2.37518 7.77037C2.00693 7.40211 1.80005 6.90266 1.80005 6.38187V3.76368C1.80005 3.2429 2.00693 2.74344 2.37518 2.37518C2.74344 2.00693 3.2429 1.80005 3.76368 1.80005H6.38187C6.90266 1.80005 7.40211 2.00693 7.77037 2.37518C8.13862 2.74344 8.3455 3.2429 8.3455 3.76368ZM14.2364 1.80005H11.6182C11.0974 1.80005 10.598 2.00693 10.2297 2.37518C9.86148 2.74344 9.65459 3.2429 9.65459 3.76368V6.38187C9.65459 6.90266 9.86148 7.40211 10.2297 7.77037C10.598 8.13862 11.0974 8.3455 11.6182 8.3455H14.2364C14.7572 8.3455 15.2567 8.13862 15.6249 7.77037C15.9932 7.40211 16.2 6.90266 16.2 6.38187V3.76368C16.2 3.2429 15.9932 2.74344 15.6249 2.37518C15.2567 2.00693 14.7572 1.80005 14.2364 1.80005ZM6.38187 9.65459H3.76368C3.2429 9.65459 2.74344 9.86148 2.37518 10.2297C2.00693 10.598 1.80005 11.0974 1.80005 11.6182V14.2364C1.80005 14.7572 2.00693 15.2567 2.37518 15.6249C2.74344 15.9932 3.2429 16.2 3.76368 16.2H6.38187C6.90266 16.2 7.40211 15.9932 7.77037 15.6249C8.13862 15.2567 8.3455 14.7572 8.3455 14.2364V11.6182C8.3455 11.0974 8.13862 10.598 7.77037 10.2297C7.40211 9.86148 6.90266 9.65459 6.38187 9.65459ZM14.2364 9.65459H11.6182C11.0974 9.65459 10.598 9.86148 10.2297 10.2297C9.86148 10.598 9.65459 11.0974 9.65459 11.6182V14.2364C9.65459 14.7572 9.86148 15.2567 10.2297 15.6249C10.598 15.9932 11.0974 16.2 11.6182 16.2H14.2364C14.7572 16.2 15.2567 15.9932 15.6249 15.6249C15.9932 15.2567 16.2 14.7572 16.2 14.2364V11.6182C16.2 11.0974 15.9932 10.598 15.6249 10.2297C15.2567 9.86148 14.7572 9.65459 14.2364 9.65459Z" fill="#FFFFFF4D"/>
</svg>`, title: "Dashboard", to: "/" },
      { icon: "📄", title: "Your GOLF AI Trainer", to: "/trainer" },
      { icon: "🎥", title: "Video Library", to: "/videos" },
    ];

    const isActive = (path: string) => route.path === path;

    return { navItems, isActive };
  },
});
</script>
