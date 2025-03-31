<template>
  <div>
    <Navbar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  components: { Navbar, Sidebar },
});
</script>