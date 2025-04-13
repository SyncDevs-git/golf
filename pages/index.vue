<script setup lang="ts">
import LineGraph from "@/components/shared/LineGraph.vue";
import PieGraph from "@/components/shared/PieGraph.vue";

// Sidebar data
const strokesGained = -2.0;
const handicap = 56;
const rounds = 1500;

// Tabs
const tabs = ['Overview', 'Game', 'Driving', 'Approach', 'Short Game', 'Putting', 'Another Tab'];
const activeTab = ref('Overview');

// Format the value (e.g., -2.0 to "-2.0", 0.2 to "+0.2")
const formatValue = (value: number) => {
  return value >= 0 ? `+${value}` : `${value}`;
};

// Color for strokes gained (red for negative, teal for positive)
const strokesGainedColor = strokesGained < 0 ? '#FF0000' : '#00A1A1';

// Color for insights (red for negative, teal for positive)
const getInsightColor = (value: number) => {
  return value < 0 ? '#FF0000' : '#00A1A1';
};

const pieData = [
  { name: 'Total Strokes Gained', value: -2.1 },
  { name: 'SG Driving', value: -2.1 },
  { name: 'SG Short', value: 2.1 },
  { name: 'SG Approach', value: 2.1 },
  { name: 'SG Putting', value: 2.1 },
];

const pieHeaders = [
  { name: 'Total Strokes Gained', color: '#000000', value: -2.1 },
  { name: 'SG Driving', color: '#FF0000', value: -2.1 },
  { name: 'SG Short', color: '#00A1A1', value: 2.1 },
  { name: 'SG Approach', color: '#FFD700', value: 2.1 },
  { name: 'SG Putting', color: '#808080', value: 2.1 },
];
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3">
        <div class="rounded-[20px] p-5 shadow-md bg-white">
          <div class="flex flex-col items-center gap-3">
            <img src="/assets/images/profile-2.png" alt="Avatar" class="w-[112px] h-[112px] rounded-full" />
            <h2 class="text-lg font-semibold text-black">Hello, Smith William</h2>
            <div class="flex flex-col gap-2 w-full text-center">
              <div class="flex flex-col gap-1">
                <p class="font-playfair font-bold text-base text-gray-light">Hello, <span class="text-white">Smith</span></p>
                <span :style="{ color: strokesGainedColor }" class="text-base font-semibold">
                  {{ formatValue(strokesGained) }}
                </span>
                <span class="text-xs text-gray-500">Your Stokes Gained (SG) Breakdown</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-base font-semibold text-black">{{ handicap }}</span>
                <span class="text-xs text-gray-500">Handicap</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-base font-semibold text-black">{{ rounds }}</span>
                <span class="text-xs text-gray-500">Rounds</span>
              </div>
            </div>
            <a href="#" class="text-sm text-blue-500 hover:underline mt-3">Show Handicap Breakdown →</a>
          </div>
        </div>
      </div>
      <div class="col-span-9">
        <!-- Header: Tabs -->
        <div class="flex gap-2 bg-white rounded-[15px] p-[15px] shadow-md">
          <button v-for="tab in tabs" :key="tab" :class="[
            'px-[15px] py-[9px] font-styrene-bold font-bold text-[15px] leading-[120%] hover:bg-[#FFA30033] hover:text-[#FFA300] rounded-[10px]',
            activeTab === tab ? 'bg-[#FFA30033] text-[#FFA300]' : 'text-black/25'
          ]" @click="activeTab = tab">
            {{ tab }}
          </button>
        </div>
        <div class="scroll">
          <ContentCard title="Your Stokes Gained (SG) Breakdown Chart" tooltip="SG is a way to measure performance">
            <template #body>
              <LineGraph />
            </template>
        
            <template #footer>
              <div class="bg-sonfSliver py-[23px] rounded-[10px] text-center mt-[30px]">
                <div class="max-w-[588px] mx-auto">
                  <span class="bg-white inline-flex w-[47px] h-[47px] rounded-full  items-center justify-center mb-[14px]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.7285 13.6172C19.7285 12.9404 19.1748 12.3867 18.498 12.3867C19.1748 12.3867 19.7285 11.833 19.7285 11.1563C19.7285 10.4795 19.1748 9.92578 18.498 9.92578H13.4532C14.2037 7.67398 14.1914 6.95625 14.1914 5.57813C14.1914 4.55433 13.352 3.73242 12.3457 3.73242H11.9766C11.7428 3.73242 11.4475 3.91703 11.3859 4.2C10.7772 6.56992 9.8255 9.28938 7.42383 9.84022V18.7432L9.5525 19.4496C10.18 19.6587 10.8322 19.7695 11.4967 19.7695H17.2676C17.9472 19.7695 18.498 19.2186 18.498 18.5391C18.498 17.8595 17.9472 17.3086 17.2676 17.3086H18.498C19.1748 17.3086 19.7285 16.7549 19.7285 16.0781C19.7285 15.4014 19.1748 14.8477 18.498 14.8477C19.1748 14.8477 19.7285 14.2939 19.7285 13.6172Z"
                        fill="black" />
                      <path
                        d="M4.34766 8.69531H1.88672C1.54666 8.69531 1.27148 8.97049 1.27148 9.31055V20.3848C1.27148 20.7248 1.54666 21 1.88672 21H4.34766C5.36542 21 6.19336 20.1721 6.19336 19.1543V10.541C6.19336 9.52325 5.36542 8.69531 4.34766 8.69531ZM4.34766 18.5391C4.00788 18.5391 3.73242 18.2636 3.73242 17.9238C3.73242 17.584 4.00788 17.3086 4.34766 17.3086C4.68743 17.3086 4.96289 17.584 4.96289 17.9238C4.96289 18.2636 4.68743 18.5391 4.34766 18.5391Z"
                        fill="black" />
                      <path
                        d="M9.73514 2.71287L8.86516 1.84289C8.62485 1.60258 8.23548 1.60258 7.99517 1.84289C7.75486 2.0832 7.75486 2.47256 7.99517 2.71287L8.86516 3.58286C9.10547 3.82317 9.49479 3.82317 9.73514 3.58286C9.97545 3.34255 9.97545 2.95318 9.73514 2.71287Z"
                        fill="black" />
                      <path
                        d="M16.6962 1.84289C16.4559 1.60258 16.0665 1.60258 15.8262 1.84289L14.9562 2.71287C14.7159 2.95318 14.7159 3.34255 14.9562 3.58286C15.1965 3.82317 15.5859 3.82317 15.8262 3.58286L16.6962 2.71287C16.9365 2.47256 16.9365 2.0832 16.6962 1.84289Z"
                        fill="black" />
                      <path
                        d="M12.3457 0C12.0011 0 11.7305 0.270662 11.7305 0.615234V1.88672C11.7305 2.23129 12.0011 2.50195 12.3457 2.50195C12.6903 2.50195 12.9609 2.23129 12.9609 1.88672V0.615234C12.9609 0.270662 12.6903 0 12.3457 0Z"
                        fill="black" />
                    </svg>
                  </span>
                  <div class="font-playfair font-extrabold text-xl leading-[153%] text-black mb-[5px]">Keep Grinding</div>
                  <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black">
                    Magna lectus enim adipiscing tortor gravida dolor. Quis aliquam ornare vive tellus viverra mauris
                    pulvinar.
                  </p>
                </div>
              </div>
            </template>
          </ContentCard>
          <ContentCard title="Your Stokes Gained (SG) Breakdown Chart" tooltip="SG is a way to measure performance">
            <template #body>
              <PieGraph :data="pieData" :Headers="pieHeaders" />
            </template>
            <template #footer>
              <div class="bg-sonfSliver py-[23px] rounded-[10px] text-center mt-[30px]">
                <div class="max-w-[588px] mx-auto">
                  <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black">
                    Meriwether National GC - West
                    11/06/2024
                    Score: 45
                    @ 15 HCP
                  </p>
                </div>
              </div>
            </template>
          </ContentCard>
        </div>
      </div>
    </div>
  </div>
</template>
