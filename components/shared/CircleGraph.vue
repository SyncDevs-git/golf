<template>
  <div class="flex flex-col items-center justify-center">
    <!-- Title -->
    <div class="relative w-32 h-32 mt-2">
      <svg class="w-full h-full transform -rotate-90">
        <circle class="text-gray-200" stroke-width="10" stroke="currentColor" fill="transparent" r="50" cx="64"
          cy="64" />
        <circle :class="circleColor" stroke-width="10" :stroke-dasharray="circumference" :stroke-dashoffset="dashOffset"
          stroke-linecap="round" stroke="currentColor" fill="transparent" r="50" cx="64" cy="64" />
      </svg>
      <!-- Inner Content -->
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="text-xl font-bold">
          {{ value >= 0 ? '+' : '' }}{{ value }}
        </div>
        <div v-if="!unitsAsSubtitle" class="text-sm text-gray-600 flex items-center space-x-1">
          <span>{{ units }}</span>
        </div>
      </div>
    </div>
    <p class="font-styrene-bold font-bold text-sm leading-[125%] text-black">{{ title }} 
      <span v-if="unitsAsSubtitle && units" class="font-styrene-medium font-medium text-[13px] leading-[20px] text-red ml-[7px]">{{units}}</span> 
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PieChartProps } from '~/types';

const props = defineProps<PieChartProps>()

const radius = 50
const circumference = 2 * Math.PI * radius

const absValue = computed(() => Math.min(Math.abs(props.value), props.maxValue))
const progress = computed(() => absValue.value / props.maxValue)

const dashOffset = computed(() => circumference * (1 - progress.value))

const circleColor = computed(() => {
    switch (props.mode) {
      case 'positive':
        return 'text-brandGreen'
      case 'neutral':
        return 'text-amber'
      case 'negative':
        return 'text-red'
      default:
        return 'text-blue'
    }
  })
</script>

<style scoped>
svg {
  width: 128px;
  height: 128px;
}
</style>