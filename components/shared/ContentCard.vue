<template>
    <div class="border border-black rounded-md p-4 bg-white shadow-sm">
      <!-- Header slot or fallback to CardTitle -->
      <div class="mb-4">
        <slot name="header">
          <CardTitle :title="title" :tooltip="tooltip" />
        </slot>
      </div>
  
      <!-- Body slot -->
      <div class="mb-4">
        <slot name="body" />
      </div>
      <CircleGraph
  title="Growth"
  :value="75"
  :maxValue="100"
  units="%"
  mode="positive"
/>

<CircleGraph
  title="Revenue"
  :value="-40"
  :maxValue="100"
  units="$"
  mode="negative"
  :unitsAsSubtitle="true"
/>

  
      <!-- Footer slot -->
      <div>
        <slot name="footer" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import CardTitle from '@/components/shared/CardTitle.vue'
  
  defineProps<{
    title: string
    tooltip: string
  }>()
  </script>
  