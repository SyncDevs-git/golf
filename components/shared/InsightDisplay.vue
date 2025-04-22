<template>
  <div class="flex items-center justify-between py-[22px]">
    <!-- Index -->
    <div class="flex items-center justify-start gap-4 ">
      <div class="flex items-center justify-center w-12 h-12 border-[2px] border-black/[8%] rounded-full font-styrene-bold font-bold text-xl leading-5 text-black">
        {{ index + 1 }}
      </div>
      <!-- Title & Subtitle -->
      <div class="flex flex-col items-start justify-start">
        <p class="font-styrene-medium font-medium text-[15px] leading-[20px] text-gray-light">{{ title }}</p>
        <p class="font-playfair font-extrabold text-[20px] leading-[120%] text-black">{{ subtitle }}</p>
      </div>
    </div>
    <!-- Tag -->
    <p class="rounded-[10px] bg-sonfSliver px-[14px] py-[9px] font-styrene-medium font-medium text-sm leading-5 text-black">
      {{ tag }}
    </p>
    <!-- Value -->
    <div class="flex items-center justify-start">
      <p class="font-styrene-medium font-medium text-[20px] leading-[120%]" :class="colorClass">
        {{ value }} SG
      </p>
      <!-- Icon -->
      <div class="w-[36px] h-[36px]">
        <img :src="icon" alt="" class="w-full h-full">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ColorDisplayMode } from '~/types';

const props = defineProps< {
    title: string;
    subtitle: string;
    tag: string;
    index: number;
    value: number;
    mode: ColorDisplayMode;
    icon: string;
}>();

const colorClass = computed(() => {
  switch (props.mode) {
    case 'positive':
      return 'text-brandGreen';
    case 'negative':
      return 'text-red';
    case 'neutral':
      return 'text-medium-gray';
    default:
      return '';
  }
});
</script>
