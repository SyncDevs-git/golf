<template>
  <div class="slider-graph">
    <div class="title">{{ title }}</div>
    <div class="bar-container">
      <div class="bar">
        <div class="bar-fill" :style="{ width: fillPercentage + '%', backgroundColor: barColor }"></div>
      </div>
      <div
        class="value-bubble w-[34px] h-[30px] absolute -top-1/2 -translate-y-[0px] font-styrene-bold font-bold text-[12px] leading-[30px] text-center text-white rounded-[7px]"
        :style="{ left: 'calc(' + fillPercentage + '% - 1.25rem)', backgroundColor: barColor }">
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
      return '#FFC107'
    case 'negative':
      return '#F44336'
    default:
      return '#2196F3'
  }
})
</script>

<style scoped>
.slider-graph {
  font-family: sans-serif;
  width: 100%;
  max-width: 400px;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
}

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