<template>
  <div class="rounded-[20px] bg-white mt-[30px]">
    <!-- Header slot or fallback to CardTitle -->
    <div class="border-b border-black/10 py-[18px] px-[25px] flex item-center justify-between flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
      <slot name="header">
        <CardTitle :title="title" :tooltip="tooltip" />
      </slot>
      <slot name="tabs">
        
      </slot>
    </div>
    <div>
      <div class="">
        <slot name="body" />
      </div> 
      <!-- Footer slot -->
       <div>
        <slot name="footer" />
      </div>
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
