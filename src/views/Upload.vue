<template>
  <div class="mb-8 text-xl">
    <AppUploader />
  </div>

  <div>
    <h2 class="pb-3 font-medium text-gray-800 border-b-2 border-gray-100">
      Your files
    </h2>

    <template v-if="files.length">
      <AppFile v-for="file in files" :file="file" :key="file.uuid" />
    </template>

    <p v-else class="mt-3 text-sm text-center text-gray-600">
      You did not upload any file yet
    </p>
  </div>
</template>

<script setup>
import AppFile from "../components/AppFile.vue";
import AppUploader from "../components/AppUploader.vue";

import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();
const files = computed(() => store.getters["files/files"]);

onMounted(() => {
  store.dispatch("files/getFiles");
});
</script>
