<script setup>
defineProps({
  tags: {
    type: Array,
  },
  generation: {
    type: String,
  },
});
</script>
<template>
  <div class="m-top-bar">
    <div class="m-top-bar__tags">
      <span class="a-tag m-top-bar__tags__tag" :key="tag" v-for="tag in tags">{{
        tag
      }}</span>
    </div>
    <span class="m-top-bar__generation">Generation {{ generation }}</span>
  </div>
</template>
