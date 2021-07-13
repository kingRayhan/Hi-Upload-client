<template>
  <h1>Name : {{ hello }}</h1>
</template>

<script setup>
defineProps({
  hello: String,
});
</script>
