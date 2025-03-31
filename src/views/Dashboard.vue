<template>
    <div>
      <h1 class="text-xl font-bold">Dashboard</h1>
      <StatsCard />
      <Chart />
      <Insights />
      <TrendAnalysis />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import StatsCard from '../components/StatsCard.vue';
  import Chart from '../components/Chart.vue';
  import Insights from '../components/Insights.vue';
  import TrendAnalysis from '../components/TrendAnalysis.vue';
  
  export default defineComponent({
    components: { StatsCard, Chart, Insights, TrendAnalysis },
  });
  </script>