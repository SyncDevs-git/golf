<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Header.vue';

export default defineComponent({
  components: { Navbar },
});
</script>