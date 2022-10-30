<script setup>
const props = defineProps({
  image: {
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
  <div class="o-pictorial-component">
    <div class="u-layout-grid">
      <img
        class="o-pictorial-component__image"
        :src="props.image"
        :alt="props.alt"
      />
    </div>
  </div>
</template>
