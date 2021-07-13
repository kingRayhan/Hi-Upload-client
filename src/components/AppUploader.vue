<template>
  <div>
    <input type="file" ref="uploader" />
  </div>
</template>

<script setup>
import * as filepond from "filepond";
import { onMounted, ref } from "vue";
const uploader = ref(null);

onMounted(() => {
  filepond.create(uploader.value);
});
</script>
