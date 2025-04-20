<template>
  <div class="rounded-[20px]">
    <div class="">
      <!-- Chart -->
      <div
        class="linePie flex items-center justify-between border rounded-[20px] border-black/10 px-5 pt-[22px] pb-[7px] mb-[30px]">
        <span>
          <img src="/assets/images/golf.svg" alt="">
        </span>
        <div ref="chartRef" style="width: 100%; height: 200px;"></div>
        <span>
          <img src="/assets/images/golf-flag.svg" alt="">
        </span>
      </div>
      <div class="grid grid-cols-12 gap-4 divide-x divide-slate-200">
        <CircleGraph class="col-span-3" title="Driving" subTitle="" :value="+0.2" :maxValue="100" units="SG" />
        <CircleGraph class="col-span-3" title="Approach" subTitle="" :value="0.2" :maxValue="100" units="SG" />
        <CircleGraph class="col-span-3" title="Short" subTitle="" :value="-0.2" :maxValue="100" units="SG" />
        <CircleGraph class="col-span-3" title="Putting" subTitle="" :value="0.2" :maxValue="100" units="SG" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'


// defineProps<{
//   title: string
//   tooltip: string
// }>()

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
          lineStyle: {
            width: 2
          }
        }
      ]
    });
  }
});
</script>
