<template>
  <div class="rounded-[20px]">
      <!-- Chart -->
      <div
        class="linePie flex items-center justify-between border rounded-[20px] border-black/10 px-5 pt-[22px] pb-[7px] mb-[30px]">
        <span class="">
          <img src="/assets/images/golf.svg" alt="">
        </span>
        <div ref="chartRef" class="h-[200px] w-full" ></div>
        <span class="">
          <img src="/assets/images/golf-flag.svg" alt="">
        </span>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLDivElement | null>(null);

// Generate a sinusoidal wave pattern with gaps at the start and end
const numPoints = 52;
const timeData = Array.from({ length: numPoints }, (_, i) => i.toString());
const electricityData = Array.from({ length: numPoints }, (_, i) => {
  if (i === 0 || i === numPoints - 1) {
    return null;
  }
  return 20 * Math.sin(((i - 1) / (numPoints - 3)) * 4 * Math.PI);
});

onMounted(() => {
  if (chartRef.value) {
    const chart = echarts.init(chartRef.value);

    chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      responsive: true,
      toolbox: { show: false },
      xAxis: {
        show: true,
        type: 'category',
        boundaryGap: true,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W'
        },
        axisPointer: {
          snap: false
        },
        scale: true
      },
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
