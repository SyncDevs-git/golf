<template>
  <div class="flex item-center justify-between border-b border-dashed pb-[25px] mb-[25px]">
    <h4 class="font-playfair font-extrabold text-lg leading-[3rem] text-black">{{ title }}</h4>
    <div class="flex justify-between items-center gap-[29px]">
      <span class="font-styrene-bold font-bold text-[26px] leading-[100%] text-black">{{ startValue }} <span class="block font-styrene-medium font-medium text-[15px] leading-5 text-gray-light pt-3">Starting</span></span>
      <span class="font-styrene-bold font-bold text-[26px] leading-[100%]" :class="colorClass">{{ endValue }}<span :class="colorClass" class="block font-styrene-medium font-medium text-[15px] leading-5 pt-3">Ending Point</span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ColorDisplayMode } from '~/types';

const props = defineProps<{
  title: string;
  startValue: string;
  endValue: string;
  mode: ColorDisplayMode;
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
