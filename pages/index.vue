<script setup lang="ts">
import CardTitle from "@/components/shared/CardTitle.vue";
</script>

<template>
  <p>home page</p>
  <CardTitle
    title="Scoring Breakdown"
    tooltip="This section shows the breakdown of your scores."
  />
  <ContentCard
    title="Your Stokes Gained (SG) Breakdown Chart"
    tooltip="SG is a way to measure performance"
  >
    <template #body>
      <!-- Put your chart and SG metrics here -->
      <ChartComponent />
      <SGStats />
    </template>

    <template #footer>
      <div class="bg-gray-100 p-4 rounded text-center">
        <div class="text-lg font-semibold">Keep Grinding</div>
        <p class="text-sm text-gray-600 mt-1">
          Magna lectus enim adipiscing tortor gravida dolor. Quis aliquam ornare
          vive tellus viverra mauris pulvinar.
        </p>
      </div>
    </template>
  </ContentCard>
</template>
