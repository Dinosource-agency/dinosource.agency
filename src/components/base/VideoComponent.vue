<script setup>
defineProps({
  source: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "video/mp4",
  },
});
</script>
<template>
  <video class="m-video" muted="muted" autoplay preload="metadata" loop>
    <source :src="source" :type="type" />
  </video>
</template>
