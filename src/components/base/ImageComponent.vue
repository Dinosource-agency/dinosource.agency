<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <figure>
    <img :src="src" :alt="alt" />
    <figcaption>
      {{ alt }}
    </figcaption>
  </figure>
</template>
