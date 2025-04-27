<script setup lang="ts">
import LineGraph from "@/components/shared/LineGraph.vue";
import PieGraph from "@/components/shared/PieGraph.vue";
import redFlag from '~/assets/images/red-flag.svg'
import profileImg from '~/assets/images/profile-2.png'
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
// import required modules
import { FreeMode, Navigation, Thumbs, A11y } from 'swiper/modules'

// Tabs
const tabs = [
  "Overview",
  "Game",
  "Driving",
  "Approach",
  "Short Game",
  "Putting",
  "Another Tab",
];
const activeTab = ref("Overview");

const innerCardTabs = [
  "What to Work On",
  "What’s Helping You",
];
const innerCardActiveTab = ref("What to Work On");

const pieData = [
  { name: "Total Strokes Gained", value: -2.1 },
  { name: "SG Driving", value: -2.1 },
  { name: "SG Short", value: 2.1 },
  { name: "SG Approach", value: 2.1 },
  { name: "SG Putting", value: 2.1 },
];

const pieHeaders = [
  { name: "Total Strokes Gained", color: "#000000", value: -2.1 },
  { name: "SG Driving", color: "#FF0000", value: -2.1 },
  { name: "SG Short", color: "#00A1A1", value: 2.1 },
  { name: "SG Approach", color: "#FFD700", value: 2.1 },
  { name: "SG Putting", color: "#808080", value: 2.1 },
];

const graphsData1 = [
  {
    title: 'Driving',
    value: 0.2,
    maxValue: 100,
    units: 'SG',
    unitsAsSubtitle: false,
    mode: 'positive' as const
  },
  {
    title: 'Approach',
    value: 0.2,
    maxValue: 100,
    units: 'SG',
    unitsAsSubtitle: false,
    mode: 'positive' as const
  },
  {
    title: 'Short',
    value: -0.2,
    maxValue: 100,
    units: 'SG',
    unitsAsSubtitle: false,
    mode: 'negative' as const
  },
  {
    title: 'Putting',
    value: 0.2,
    maxValue: 100,
    units: 'SG',
    unitsAsSubtitle: false,
    mode: 'positive' as const
  }
]

const graphsData = [
  {
    title: 'Par 3s',
    units: '-0.5 SG / Hole',
    value: 4.9,
    maxValue: 100,
    unitsAsSubtitle: true,
    mode: 'neutral' as const
  },
  {
    title: 'Par 3s',
    units: '-0.5 SG / Hole',
    value: 4.9,
    maxValue: 100,
    unitsAsSubtitle: true,
    mode: 'neutral' as const
  },
  {
    title: 'Par 3s',
    units: '-0.5 SG / Hole',
    value: 4.9,
    maxValue: 100,
    unitsAsSubtitle: true,
    mode: 'neutral' as const
  }
]

const scoringBreakdownData = [
  {
    title: 'Birdies',
    startValue: '0.4',
    endValue: '0',
    mode: 'negative' as const,
  },
  {
    title: 'Pars',
    startValue: '4',
    endValue: '5.6',
    mode: 'neutral' as const,
  },
  {
    title: 'Bogeys',
    startValue: '8.9',
    endValue: '7.5',
    mode: 'positive' as const,
  },
  {
    title: 'Double +',
    startValue: '5.7',
    endValue: '4.8',
    mode: 'positive' as const,
  },
]

const insightItems = [
  {
    title: 'Game',
    subtitle: '150 - 200 Yard Approach',
    tag: 'Approach Game',
    index: 0,
    value: -2.2,
    mode: 'negative' as const,
    icon: redFlag
  },
  {
    title: 'Game',
    subtitle: '150 - 200 Yard Approach',
    tag: 'Approach Game',
    index: 1,
    value: 1.2,
    mode: 'positive' as const,
    icon: redFlag
  },
  {
    title: 'Game',
    subtitle: '150 - 200 Yard Approach',
    tag: 'Approach Game',
    index: 1,
    value: -2.2,
    mode: 'negative' as const,
    icon: redFlag
  }
]


const profileData = {
  img: profileImg,
  name: 'Smith William',
  status: [
    {
      name: 'Shots',
      points: 1300
    },
    {
      name: 'Handicap',
      points: 56
    },
    {
      name: 'Rounds',
      points: 60
    },
  ],
  mainValue: "-2.0"
}

const thumbsSwiper = ref()

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const modules = ref([FreeMode, Navigation, Thumbs, A11y])

const getImageURL = (id: number, highRes?: boolean) => {
  const resolution = highRes ? '800/600' : '200/100'

  return `https://picsum.photos/id/${110 + id}/${resolution}`
}
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3">
        <ProfileCard :data="profileData" />
      </div>
      <div class="col-span-9">
        <!-- Header: Tabs -->
        <div class="flex gap-2 bg-white rounded-[15px] p-[15px]">
          <ContainerCard :tabs="tabs" v-model="activeTab" />
        </div>
        <div class="scroll">
          <ContentCard title="Your Stokes Gained (SG) Breakdown Chart" tooltip="SG is a way to measure performance">
            <template #body>
              <div class="p-[25px]">
                <LineGraph />
                <div class="grid grid-cols-12 gap-4 divide-x divide-slate-200">
                  <CircleGraph class="col-span-3" v-for="(item, index) in graphsData1" :key="index" :title="item.title"
                    :value="item.value" :maxValue="item.maxValue" :units="item.units"
                    :unitsAsSubtitle="item.unitsAsSubtitle" :mode="item.mode" />
                </div>
              </div>
            </template>

            <template #footer>
              <div class="px-[25px] py-5">
                <div class="bg-sonfSliver py-[23px] rounded-[10px] text-center mt-[30px]">
                  <div class="max-w-[588px] mx-auto">
                    <span
                      class="bg-white inline-flex w-[47px] h-[47px] rounded-full items-center justify-center mb-[14px]">
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
                    <div class="font-playfair font-extrabold text-xl leading-[153%] text-black mb-[5px]">
                      Keep Grinding
                    </div>
                    <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black">
                      Magna lectus enim adipiscing tortor gravida dolor. Quis
                      aliquam ornare vive tellus viverra mauris pulvinar.
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </ContentCard>

          <ContentCard title="Top 3 Inshights" tooltip="SG is a way to measure performance">
            <template #tabs>
              <TabControls :tabs="innerCardTabs" v-model="innerCardActiveTab" />
            </template>
            <template #body>
              <div class="grid grid-cols-12 gap-4 divide-y divide-dashed divide-black/[15%] p-[25px]">
                <InsightDisplay class="col-span-12" v-for="(item, i) in insightItems" :key="i" :title="item.title"
                  :subtitle="item.subtitle" :tag="item.tag" :index="i" :value="item.value" :mode="item.mode"
                  :icon="item.icon" />
              </div>
            </template>
          </ContentCard>

          <ContentCard title="How to fix your golf swing via instruction lessons?"
            tooltip="SG is a way to measure performance">
            <template #body>
              <div class="grid grid-cols-12 gap-4 pt-[25px] pb-[29px]">
                <div class="col-span-12">
                  <div class="px-[25px]">
                    <h4 class="font-playfair font-extrabold text-[21px] leading-[153%] text-black">How to hit a plugged bunker shot with Brittany Lang</h4>
                    <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black mb-5">Enim ridiculus nullam varius semper. Nisl quis ornare sit Enim ridiculus nullam variu</p>
                  </div>
                  <div class="pb-[25px] mb-[25px]  border-b px-[25px]">
                    <swiper :spaceBetween="10" :navigation="false" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                      class="rounded-[20px]">
                      <swiper-slide v-for="i in 10" class="">
                        <img :src="getImageURL(i, true)" class="w-full"/>
                      </swiper-slide>
                    </swiper>
                  </div>
                  <div class="px-[25px]">
                    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="2.8" :navigation="false" :watchSlidesProgress="true"
                      :grabCursor="true" :modules="modules" >
                      <swiper-slide v-for="i in 10">
                        <img :src="getImageURL(i)" class="w-full rounded-[15px] mb-[10px]"/>
                        <p class="font-playfair font-extrabold text-[17px] leading-[153%] text-black">How to hit a plugged bunker shot with Brittany Lang</p>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
            </template>
          </ContentCard>

          <ContentCard title="Scoring Averages" tooltip="SG is a way to measure performance">
            <template #body>
              <div class="grid grid-cols-12 gap-4 divide-x divide-slate-200 py-[25px]">
                <CircleGraph class="col-span-4" v-for="(item, index) in graphsData" :key="index" :title="item.title"
                  :units="item.units" :value="item.value" :maxValue="item.maxValue"
                  :unitsAsSubtitle="item.unitsAsSubtitle" :mode="item.mode" />
              </div>
            </template>
            <template #footer>
              <div class="border-t px-[25px] py-5">
                <div class="bg-sonfSliver py-[23px] rounded-[10px] text-center">
                  <div class="">
                    <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black ">
                      You are
                      <span class="text-red">losing 0.5 stokes</span> on par
                      3s, But yout are
                      <span class="text-green-600">gaining 0.1 Stokes</span> on
                      par 4s
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </ContentCard>

          <ContentCard title="Scoring Breakdown" tooltip="SG is a way to measure performance">
            <template #body>
              <div class="grid grid-cols-12 gap-4 p-[25px]">
                <div class="col-span-6 border rounded-[20px] py-[30px] px-[25px]"
                  v-for="(card, index) in scoringBreakdownData">
                  <StartEndDisplay :key="index" :title="card.title" :startValue="card.startValue"
                    :endValue="card.endValue" :mode="card.mode" />
                  <SliderGraph :title="card.title" :value="parseFloat(card.endValue)" :maxValue="10"
                    :mode="card.mode" />
                </div>
              </div>
            </template>
            <template #footer>
              <div class="border-t px-[25px] py-5">
                <div class="bg-sonfSliver py-[23px] rounded-[10px] text-center">
                  <div class="">
                    <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black">
                      You are
                      <span class="text-red">losing 0.5 stokes</span> on par
                      3s, But yout are
                      <span class="text-green-600">gaining 0.1 Stokes</span> on
                      par 4s
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </ContentCard>

          <ContentCard title="Your Stokes Gained (SG) Breakdown Chart" tooltip="SG is a way to measure performance">
            <template #tabs>
              <NuxtLink to="#"
                class="bg-primary py-[10px] px-[15px] font-styrene-medium font-medium text-sm leading-4 text-black rounded-[10px] hover:text-white transition-all ease-linear duration-150">
                See Full Round Details
              </NuxtLink>
            </template>
            <template #body>
              <div class="px-[25px]">
                <PieGraph :data="pieData" :Headers="pieHeaders" />
              </div>
            </template>
            <template #footer>
              <div class="border-t px-[25px] py-5">
                <div class="bg-sonfSliver py-[23px] rounded-[10px] text-center">
                  <div class="max-w-[588px] mx-auto">
                    <p class="font-styrene-regular font-normal text-[15px] leading-[175%] text-black">
                      Meriwether National GC - West 11/06/2024 Score: 45 @ 15 HCP
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </ContentCard>
        </div>
      </div>
    </div>
  </div>
</template>
