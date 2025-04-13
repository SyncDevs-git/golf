<template>
  <div class="rounded-[20px] bg-white mt-[30px]">
    <!-- Header slot or fallback to CardTitle -->
    <div class="mb-4 border-b border-black/10 py-[18px] px-[25px]">
      <slot name="header">
        <CardTitle :title="title" :tooltip="tooltip" />
      </slot>
    </div>
    <div class="p-[25px]">
      <div>
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
