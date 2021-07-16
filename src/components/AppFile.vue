<template>
  <div
    class="flex items-center justify-between px-3 border-b-2 border-gray-100"
    :class="{ 'bg-red-300/30': loading }"
  >
    <div class="flex items-center w-6/12 text-sm truncate overflow-ellipsis">
      <svg
        v-if="!loading"
        class="w-6 h-6 text-gray-700 fill-current"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33 12v23c0 4.42-3.58 8-8 8s-8-3.58-8-8v-25c0-2.76 2.24-5 5-5s5 2.24 5 5v21c0 1.1-.89 2-2 2-1.11 0-2-.9-2-2v-19h-3v19c0 2.76 2.24 5 5 5s5-2.24 5-5v-21c0-4.42-3.58-8-8-8s-8 3.58-8 8v25c0 6.08 4.93 11 11 11s11-4.92 11-11v-23h-3z"
        />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>

      <svg
        v-else
        class="w-5 h-5 mr-3 text-indigo-500 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <span>{{ file.name }}</span>
    </div>
    <div class="flex items-center">
      <button class="inline-block p-3 text-sm text-indigo-500">
        Get shareable link
      </button>
      <button
        @click="deleteFile"
        class="inline-block p-3 text-sm text-pink-500"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps, ref } from "vue";
const store = useStore();
const loading = ref(false);

const props = defineProps({
  file: Object,
});

function deleteFile() {
  loading.value = true;
  store.dispatch("files/deleteFile", props.file.uuid);
}
</script>
