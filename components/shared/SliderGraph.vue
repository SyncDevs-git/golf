<template>
    <div class="slider-graph">
      <div class="title">{{ title }}</div>
      <div class="bar-container">
        <div class="bar">
          <div
            class="bar-fill"
            :style="{ width: fillPercentage + '%', backgroundColor: barColor }"
          ></div>
        </div>
        <div
          class="value-bubble"
          :style="{ left: 'calc(' + fillPercentage + '% - 1.25rem)' }"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  export type ColorDisplayMode = 'default' | 'success' | 'warning' | 'danger'
  
  interface Props {
    title: string
    mode: ColorDisplayMode
    value: number
    maxValue: number
  }
  
  const props = defineProps<Props>()
  
  const fillPercentage = computed(() => {
    if (props.maxValue === 0) return 0
    return Math.min(100, (props.value / props.maxValue) * 100)
  })
  
  const barColor = computed(() => {
    switch (props.mode) {
      case 'success':
        return '#4CAF50'
      case 'warning':
        return '#FFC107'
      case 'danger':
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
    height: 10px;
    overflow: hidden;
  }
  
  .bar-fill {
    height: 100%;
    border-radius: 12px;
    transition: width 0.3s ease-in-out;
  }
  
  .value-bubble {
    position: absolute;
    top: -10px;
    transform: translateX(-50%);
    background-color: #4CAF50;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 12px;
    min-width: 2.5rem;
    text-align: center;
    line-height: 1.5;
  }
  </style>
  