<template>
  <div class="rounded-[20px] p-5 shadow-md bg-white sticky top-[130px]">
    <div class="flex flex-col items-center gap-3">
      <img :src="data.img" alt="Avatar" class="w-[112px] h-[112px] rounded-full" />
      <h2 class="font-playfair font-bold text-[20px] leading-[120%] text-gray-light mb-[30px]">
        Hello, <span class="text-black">{{ data.name }}</span>
      </h2>
      <div class="flex flex-col gap-2 w-full text-center">
        <div v-for="(item, index) in data.status" :key="index" class="flex items-center justify-between gap-1 py-[15px] border-t border-dashed border-gray-light">
          <span class="text-xs text-gray-light">{{ item.name }}</span>
          <span class="text-base font-semibold text-gray-light">{{
            item.points
          }}</span>
        </div>
      </div>
      <div class="border-[2px] border-[rgba(0,0,0,0.08)] rounded-xl w-full">
        <div class="p-4">
          <div class="top-section flex items-center justify-center gap-[13px]">
            <div
              class="bg-black rounded-xl font-styrene-bold font-bold text-[26px] leading-[100%] text-white px-[12px] py-[15px]">
              {{ data.mainValue }}</div>
            <div class="delta-section">
              <span class="delta flex items-center justify-start text-red font-styrene-bold text-lg leading-[100%] mb-[10px]"
                :class="{ negative: delta < 0, positive: delta > 0 }">
                {{ formattedDelta }}
                <span class="arrow">
                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.35982 4.46651C4.73066 4.77555 5.26934 4.77555 5.64018 4.46651L8.87814 1.76822C9.59665 1.16946 9.17325 0 8.23795 0H1.76205C0.826753 0 0.403351 1.16946 1.12187 1.76822L4.35982 4.46651Z"
                      fill="#FF0000" />
                  </svg>
                </span>
              </span>
              <span class="label">SG/Round</span>
            </div>
          </div>
          <div class="description">
            Your Stokes Gained<br />
            (SG) Breakdown
          </div>
        </div>

        <div class="footer border-t-[2px] border-[rgba(0,0,0,0.08)] p-4 ">
          Show Handicap Breakdown
          <span class="arrow">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0098 9.87891H3.5332C3.0477 9.87891 2.6543 9.48551 2.6543 9C2.6543 8.51449 3.0477 8.12109 3.5332 8.12109H14.0098C14.4953 8.12109 14.8887 8.51449 14.8887 9C14.8887 9.48551 14.4953 9.87891 14.0098 9.87891Z"
                fill="black" />
              <path
                d="M9.98474 14.0361C9.74885 14.0361 9.5133 13.9416 9.33998 13.7549C9.00986 13.3991 9.03095 12.8429 9.38674 12.5128L13.165 9.00881L9.27248 5.49529C8.91213 5.17009 8.88365 4.61427 9.20884 4.25392C9.53404 3.89357 10.0899 3.86509 10.4502 4.19029L15.0557 8.34752C15.2388 8.51275 15.344 8.74724 15.3457 8.99404C15.3475 9.24084 15.2455 9.47674 15.0645 9.64443L10.582 13.8017C10.4129 13.9585 10.1985 14.0361 9.98474 14.0361Z"
                fill="black" />
            </svg>

          </span>
        </div>
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