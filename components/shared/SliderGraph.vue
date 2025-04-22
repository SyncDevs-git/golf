<template>
  <div class="w-full">
    <div class="font-styrene-medium font-medium text-[17px] leading-[20px] text-black">{{ title }}</div>
    <div class="relative mt-[22px]">
      <div class="h-[5px] w-full bg-bright-gray">
        <div class="bar-fill" :style="{ width: fillPercentage + '%', backgroundColor: barColor }"></div>
      </div>
      <div
        class="value-bubble w-[34px] h-[30px] absolute top-1/2 -translate-y-1/2 font-styrene-bold font-bold text-[12px] leading-[30px] text-center text-white rounded-[7px]"
        :style="{ left: 'calc(' + fillPercentage + '% - 0rem)', backgroundColor: barColor }">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ColorDisplayMode } from '~/types';
const props = defineProps<{
  title: string;
  maxValue: number;
  value: number;
  mode: ColorDisplayMode;
}>()

const fillPercentage = computed(() => {
  if (props.maxValue === 0) return 0
  return Math.min(100, (props.value / props.maxValue) * 100)
})


const barColor = computed(() => {
  switch (props.mode) {
    case 'positive':
      return '#4CAF50'
    case 'neutral':
      return '#999999'
    case 'negative':
      return '#F44336'
    default:
      return '#2196F3'
  }
})
</script>

<style scoped>
.bar-container {
  position: relative;
  height: 24px;
}

.bar {
  background-color: #e0e0e0;
  border-radius: 12px;
  height: 5px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 12px;
  transition: width 0.3s ease-in-out;
}
</style>