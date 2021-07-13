<template>
  <div class="w-full md:w-8/12 lg:w-6/12 mx-auto px-6 mt-6 md:mt-20">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script setup>
import AppNavbar from "./components/AppNavbar.vue";
</script>
