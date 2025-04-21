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
  <div class="">
    <button v-for="tab in tabs" :key="tab" :class="[
            'px-[15px] py-[9px] font-styrene-bold font-bold text-[15px] leading-[120%] hover:bg-[#FFA30033] hover:text-[#FFA300] rounded-[10px]',
            modelValue === tab
              ? 'bg-[#FFA30033] text-[#FFA300]'
              : 'text-black/25',
          ]" @click="selectTab(tab)">
            {{ tab }}
          </button>
  </div>
</template>
