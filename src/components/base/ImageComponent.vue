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
  <figure class="m-image">
    <img :src="src" :alt="alt" />
    <figcaption>
      {{ alt }}
    </figcaption>
  </figure>
</template>
