<template>
  <div class="rounded-[20px] mx-10">
    <!-- Header slot or fallback to CardTitle -->
    <div class="mb-4 border-b border-black/10 pb-[18px]">
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
import { ref, onMounted } from 'vue'
import CardTitle from '@/components/shared/CardTitle.vue'
// Import chart instance
import * as echarts from 'echarts'


defineProps<{
  title: string
  tooltip: string
}>()

const chartRef = ref<HTMLDivElement | null>(null);

// Generate a sinusoidal wave pattern with gaps at the start and end
const numPoints = 52; // Add 2 extra points for the gaps (one at each end)
const timeData = Array.from({ length: numPoints }, (_, i) => i.toString());
const electricityData = Array.from({ length: numPoints }, (_, i) => {
  if (i === 0 || i === numPoints - 1) {
    return null; // Create gaps at the start and end
  }
  return 20 * Math.sin(((i - 1) / (numPoints - 3)) * 4 * Math.PI); // Adjust wave for the remaining points
});

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);

    chart.setOption({
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: { show: false },
      xAxis: {
        show: true,
        type: 'category',
        boundaryGap: true,
        // data: timeData
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W'
        },
        axisPointer: {
          snap: false
        }
      },
      // Add middle dotted line using graphic elements
      graphic: [
        {
          type: 'line',
          left: '0%',
          right: '0%',
          top: '50%',
          style: {
            stroke: '#000',
            lineDash: [5, 5], // Dotted line pattern
            lineWidth: 1
          }
        }
      ],
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          { lte: 11, color: 'green' }, // Adjusted for the extra gap point
          { gt: 11, lte: 21, color: 'red' },
          { gt: 21, lte: 31, color: 'green' },
          { gt: 31, lte: 41, color: 'red' },
          { gt: 41, color: 'green' }
        ]
      },
      series: [
        {
          name: 'Result:',
          type: 'line',
          smooth: true,
          data: electricityData,
          symbol: 'none',
          symbolSize: 24,
          // markPoint: {
          //   data: [
          //     {
          //       coord: [0, 0], // Position the circle at the first point
          //       symbol: 'path://M15.803 16.0453C14.6444 16.5776 13.3563 16.875 12 16.875C10.6438 16.875 9.35583 16.5777 8.19727 16.0454C9.26986 17.0912 11.0464 19.2967 11.2728 22.5937H9.1875C8.79919 22.5937 8.48438 22.9086 8.48438 23.2969C8.48438 23.6852 8.79919 24 9.1875 24H14.8125C15.2008 24 15.5156 23.6852 15.5156 23.2969C15.5156 22.9086 15.2008 22.5937 14.8125 22.5937H12.727C12.8541 20.7033 13.497 18.953 14.6438 17.382C15.0517 16.8234 15.4624 16.3768 15.803 16.0453Z M12 0C7.73527 0 4.26562 3.46964 4.26562 7.73438C4.26562 11.9991 7.73527 15.4688 12 15.4688C16.2647 15.4688 19.7344 11.9991 19.7344 7.73438C19.7344 3.46964 16.2647 0 12 0ZM7.78125 8.4375C7.39294 8.4375 7.07812 8.12269 7.07812 7.73438C7.07812 7.34606 7.39294 7.03125 7.78125 7.03125C8.16956 7.03125 8.48438 7.34606 8.48438 7.73438C8.48438 8.12269 8.16956 8.4375 7.78125 8.4375ZM8.6903 5.41903C8.4157 5.14444 8.4157 4.69927 8.6903 4.42467C8.96489 4.15008 9.41006 4.15008 9.68466 4.42467C9.95925 4.69922 9.95925 5.14444 9.68466 5.41903C9.41011 5.69362 8.96489 5.69362 8.6903 5.41903ZM11.091 9.63778C10.8164 9.91238 10.3712 9.91238 10.0966 9.63778C9.822 9.36319 9.822 8.91802 10.0966 8.64342C10.3712 8.36883 10.8164 8.36883 11.091 8.64342C11.3655 8.91802 11.3655 9.36323 11.091 9.63778ZM12.4972 6.82528C12.2226 7.09987 11.7774 7.09987 11.5028 6.82528C11.2283 6.55069 11.2283 6.10552 11.5028 5.83092C11.7774 5.55633 12.2226 5.55633 12.4972 5.83092C12.7717 6.10552 12.7717 6.55073 12.4972 6.82528Z',
          //       itemStyle: { color: 'black' },
          //       symbolOffset: [-70, 0],
          //       symbolSize: 24
          //     },
          //     {
          //       coord: [timeData.length - 1, 0], // Position the boat at the last point
          //       symbol: 'path://M12.0005 1.24988C12.4147 1.24988 12.7505 1.58567 12.7505 1.99988V3.03635L17.7582 5.5402L17.8122 5.56719C18.5467 5.93435 19.1727 6.24731 19.6083 6.55137C20.0501 6.8597 20.5145 7.30738 20.5145 7.99988C20.5145 8.69238 20.0501 9.14006 19.6083 9.44839C19.1727 9.75245 18.5467 10.0654 17.8122 10.4326L12.7505 12.9634V17.9999C12.7505 18.4141 12.4147 18.7499 12.0005 18.7499C11.5863 18.7499 11.2505 18.4141 11.2505 17.9999V12.5161C11.2502 12.5057 11.2502 12.4952 11.2505 12.4848V3.51497C11.2502 3.50454 11.2502 3.49409 11.2505 3.48363V1.99988C11.2505 1.58567 11.5863 1.24988 12.0005 1.24988Z M12.0002 21.9999C17.523 21.9999 22.0002 20.4329 22.0002 18.4999C22.0002 16.8377 18.6896 15.4461 14.2504 15.0889V17.9999C14.2504 19.2425 13.243 20.2499 12.0004 20.2499C10.7577 20.2499 9.7504 19.2425 9.7504 17.9999V15.0888C5.31097 15.4461 2.00024 16.8377 2.00024 18.4999C2.00024 20.4329 6.47739 21.9999 12.0002 21.9999Z',
          //       itemStyle: { color: '#1C274C' },
          //       symbolOffset: [60, 0] ,
          //       symbolSize: 24
          //     }
          //   ]
          // },
          lineStyle: {
            width: 2
          }
        }
      ]
    });
  }
});
</script>
