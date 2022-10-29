<script setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});
const cssVars = computed(() => {
  if (props.size === "big") {
    return {
      "--padding-type-xxl": "12rem 6rem",
      "--padding-type-xl": "12rem 4rem",
      "--padding-type-lg": "9rem 1.5rem",
      "--padding-type-md": "6rem 2rem",
      "--padding-type-sm": "6rem 1rem",
      "--padding-type-xs": "6rem 1rem",
    };
  } else {
    return {
      "--padding-type-xxl": "4.25rem 6rem",
      "--padding-type-xl": "4.25rem 6rem",
      "--padding-type-lg": "4.25rem 4rem",
      "--padding-type-md": "4.25rem 1.5rem",
      "--padding-type-sm": "4.25rem 2rem",
      "--padding-type-xs": "4.25rem 1rem",
    };
  }
});
</script>
<template>
  <section class="o-mission-text-component" :style="cssVars">
    <div class="u-layout-grid">
      <div class="o-mission-text-component__wrapper">
        <span class="o-mission-text-component__title">{{ title }}</span>
      </div>
    </div>
  </section>
</template>
