<template>
  <div class="pie-graph-container">
    <!-- Custom Legend -->
    <div class="legend">
      <div v-for="(header, index) in Headers" :key="index" class="legend-item">
        <span class="legend-color" :style="{ backgroundColor: header.color }"></span>
        <span class="legend-label">{{ header.name }}</span>
        <span class="legend-value">{{ formatValue(header.value) }}</span>
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
      series: [
        {
          type: 'pie',
          radius: '60%', // Size of the pie chart
          center: ['50%', '50%'], // Center the pie chart
          data: props.data.map((item, index) => ({
            name: item.name,
            value: Math.abs(item.value), // Use absolute value for pie chart proportions
            itemStyle: {
              color: props.Headers[index].color // Use color from Headers
            }
          })),
          label: {
            position: 'edge',
            show: true,
            formatter: (params: any) => {
              const header = props.Headers.find(h => h.name === params.name);
              return header ? formatValue(header.value) : '';
            },
            fontSize: 14,
            color: '#000',
          },
          labelLine: {
            show: false // Disable label lines since labels are inside
          },
          emphasis: {
            focus: 'self', // Focus only on the hovered slice
            label: {
              fontSize: 16, // Slightly increase label size on hover
              show: true,
            },
            series:{
              center: ['10%', '50%'],
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