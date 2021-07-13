<template>
  <div class="flex items-center justify-between border-b-2 border-gray-100">
    <div class="w-6/12 text-sm truncate overflow-ellipsis">
      {{ file.name }}
    </div>
    <div class="flex items-center">
      <button class="inline-block p-3 text-sm text-indigo-500">
        Get shareable link
      </button>
      <button class="inline-block p-3 text-sm text-pink-500">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  file: Object,
});
</script>
