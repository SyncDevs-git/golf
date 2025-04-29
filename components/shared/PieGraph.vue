<template>
  <div class="flex items-center gap-5 pt-[22px] pb-[26px]">
    <!-- Custom Legend -->
    <div class="flex flex-row gap-[30px] basis-[69%] flex-wrap justify-between">
      <div v-for="(header, index) in Headers" :key="index" class="flex items-center gap-2 w-auto">
        <span class="w-[15px] h-[15px] inline-block rounded-[5px]" :style="{ backgroundColor: header.color }"></span>
        <span class="font-styrene-medium font-medium text-sm leading-[125%]">{{ header.name }}</span>
        <span class="w-min border border-[#ddd] rounded-[5px] py-1 px-2 relative bg-white ml-1">{{
          formatValue(header.value) }}
          <span
            class="absolute top-1/2 left-[-8px] -translate-y-1/2 w-0 h-0 border-t-[5px] border-b-[5px] border-r-[7px] border-r-sky-blue border-t-transparent border-b-transparent"></span>
        </span>
      </div>
    </div>
    <!-- Pie Chart -->
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

// Define the PieChartHeader interface
interface PieChartHeader {
  name: string;
  color: string;
  value: number;
}

const chartRef = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// Function to format the value (e.g., -2.1 to "-2.1", 2.1 to "+2.1")
const formatValue = (value: number) => {
  return value >= 0 ? `+${value}` : `${value}`;
};

// Initialize or update the chart
const initChart = () => {
  if (chartRef.value) {
    if (!chartInstance) {
      chartInstance = echarts.init(chartRef.value);
    }

    chartInstance.setOption({
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Stokes Gained',
          type: 'pie',
          radius: '90%', // Size of the pie chart
          center: ['50%', '50%'], // Center the pie chart
          data: props.data.map((item, index) => ({
            name: item.name,
            value: Math.abs(item.value),
            itemStyle: {
              color: props.Headers[index].color
            }
          })),
          label: {
            position: '',
            show: true,
            formatter: (params: any) => {
              const header = props.Headers.find(h => h.name === params.name);
              return header ? formatValue(header.value) : '';
            },
            fontSize: 12,
            color: '#000',
          },
          labelLine: {
            show: false
          },
          emphasis: {
            // focus: 'self', 
            label: {
              fontSize: 16, 
              show: true,
            },
            series: {
              center: ['50%', '50%'],
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 5
            },
          }
        }
      ]
    });
  }
};

// Watch for changes in data or Headers to update the chart
const props = defineProps<{
  data: any[];
  Headers: PieChartHeader[];
}>();

watch([() => props.data, () => props.Headers], () => {
  initChart();
});

// Initialize the chart on mount
onMounted(() => {
  initChart();
});
</script>