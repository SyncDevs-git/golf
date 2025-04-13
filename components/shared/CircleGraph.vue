<template>
  <div class="flex flex-col items-center justify-center px-[65px]">
    <!-- Title -->
    <div class="text-lg font-semibold flex items-center space-x-1">
      <span v-if="unitsAsSubtitle" class="text-sm text-gray-500">({{ units }})</span>
    </div>
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
          {{ value }}
        </div>
        <div v-if="!unitsAsSubtitle" class="text-sm text-gray-600 flex items-center space-x-1">
          <span>{{ units }}</span>
          <!-- <span>{{ value >= 0 ? "▲" : "▼" }}</span> -->
        </div>
      </div>
    </div>
    <p class="font-styrene-bold font-bold text-sm leading-[125%] text-black">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ColorDisplayMode } from '~/types'

interface Props {
  title: string
  units: string
  mode: ColorDisplayMode
  value: number
  maxValue: number
  unitsAsSubtitle?: boolean
}

const props = defineProps<Props>()

const radius = 50
const circumference = 2 * Math.PI * radius
const progress = computed(() => Math.min(Math.max(props.value / props.maxValue, 0), 1))
const dashOffset = computed(() => circumference * (1 - progress.value))

const circleColor = computed(() => {
  switch (props.mode) {
    case 'positive':
      return 'text-[#189740]'
    case 'negative':
      return 'text-[#FF0000]'
    case 'neutral':
    default:
      return 'text-blue-500'
  }
})
</script>

<style scoped>
svg {
  width: 128px;
  height: 128px;
}
</style>