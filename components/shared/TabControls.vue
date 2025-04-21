<script lang="ts" setup>
defineProps<{
  tabs: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function selectTab(tab: string) {
  emit('update:modelValue', tab);
}
</script>

<template>
  <div class="flex items-center gap-[8px]">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selectTab(tab)"
      :class="[
        'px-[15px] py-[9px] font-styrene-bold font-bold text-[15px] border leading-[120%] hover:bg-[#FFA30033] hover:text-[#FFA300] rounded-[10px]',
        modelValue === tab
          ? 'bg-[#FFA30033] text-[#FFA300] border-transparent'
          : 'text-black/25 border border-[#666666]/20 hover:bg-[#FFA30033] hover:text-[#FFA300] hvoer:border-[#FFA30033]'
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>
