<template>
  <div class="rounded-[20px] pt-[41px] px-5 pb-5 bg-white sticky top-[130px] -translate-y-[10px]">
    <div class="flex flex-col items-center">
      <div class="flex items-center flex-row lg:flex-col gap-4">
        <img :src="data.img" alt="Avatar" class="w-14 lg:w-[112px] h-w-14 lg:h-[112px] rounded-full lg:mb-[22px]" />
        <div class="">
          <h2 class="font-playfair font-bold text-[20px] leading-[120%] text-gray-light md:mb-[28px]">
            Hello, <span class="text-black">{{ data.name }}</span>
          </h2>
          <div class="flex items-center gap-2 flex-wrap w-full text-center">
            <div v-for="(item, index) in data.status" :key="index" class="lg:hidden flex items-center gap-2">
              <span class="font-styrene-medium font-medium text-[12px] leading-[20px] text-gray-light">{{ item.name
                }}</span>
              <span class="text-[12px] font-semibold text-gray-light">{{
                item.points
                }}</span>
              <!-- Dot after each item except the last -->
              <span v-if="index !== data.status.length - 1" class="w-1 h-1 bg-gray-light rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 w-full text-center mb-[28px]">
        <div v-for="(item, index) in data.status" :key="index"
          class="hidden lg:flex items-center justify-between gap-1 py-[13px] border-t border-dashed border-gray-light ">
          <span class="font-styrene-medium font-medium text-[15px] leading-[20px] text-gray-light">{{ item.name
            }}</span>
          <span class="text-base font-semibold text-gray-light">{{
            item.points
            }}</span>
        </div>
      </div>
      <div class="border-[2px] border-[rgba(0,0,0,0.08)] rounded-xl w-full">
        <div class="pt-[27px] pb-[23px] ">
          <div class="top-section flex items-center justify-center gap-[13px]">
            <p
              class="bg-black rounded-xl font-styrene-bold font-bold max-xl:text-base text-[26px] leading-[100%] text-white px-[12px] py-[15px]">
              {{ data.mainValue }}</p>
            <div class="delta-section">
              <span
                class="delta flex items-center justify-start text-red font-styrene-bold text-lg leading-[100%] mb-[10px]"
                :class="{ negative: delta < 0, positive: delta > 0 }">
                {{ formattedDelta }}
                <span class="rotate-0">
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.35982 4.46651C4.73066 4.77555 5.26934 4.77555 5.64018 4.46651L8.87814 1.76822C9.59665 1.16946 9.17325 0 8.23795 0H1.76205C0.826753 0 0.403351 1.16946 1.12187 1.76822L4.35982 4.46651Z"
                      fill="#FF0000" />
                  </svg>
                </span>
              </span>
              <span class="font-styrene-medium font-medium max-xl:text-sm text-base leading-[20px] text-gray-light">SG/Round</span>
            </div>
          </div>
          <p class="font-playfair font-extrabold text-base leading-[155%] text-black text-center mt-4">
            Your Stokes Gained<br />
            (SG) Breakdown
          </p>
        </div>

        <NuxtLink href="#"
          class="border-t-[2px] border-black/[10%] py-[14px] px-[17px] font-styrene-medium font-medium text-[12px] leading-[20px] text-black flex items-center justify-center">
          Show Handicap Breakdown
          <span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0098 9.87891H3.5332C3.0477 9.87891 2.6543 9.48551 2.6543 9C2.6543 8.51449 3.0477 8.12109 3.5332 8.12109H14.0098C14.4953 8.12109 14.8887 8.51449 14.8887 9C14.8887 9.48551 14.4953 9.87891 14.0098 9.87891Z"
                fill="black" />
              <path
                d="M9.98474 14.0361C9.74885 14.0361 9.5133 13.9416 9.33998 13.7549C9.00986 13.3991 9.03095 12.8429 9.38674 12.5128L13.165 9.00881L9.27248 5.49529C8.91213 5.17009 8.88365 4.61427 9.20884 4.25392C9.53404 3.89357 10.0899 3.86509 10.4502 4.19029L15.0557 8.34752C15.2388 8.51275 15.344 8.74724 15.3457 8.99404C15.3475 9.24084 15.2455 9.47674 15.0645 9.64443L10.582 13.8017C10.4129 13.9585 10.1985 14.0361 9.98474 14.0361Z"
                fill="black" />
            </svg>

          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'

interface StatusItem {
  name: string
  points: number
}

interface ProfileData {
  img: string
  name: string
  status: StatusItem[]
  mainValue: string
}

const props = defineProps<{
  data: ProfileData
}>()

const delta = computed(() => Number(props.data.mainValue))
const formattedDelta = computed(() => `${Math.abs(delta.value).toFixed(1)}`)
</script>