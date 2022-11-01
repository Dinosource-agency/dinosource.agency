<script setup>
import PictorialComponent from "@/components/layout/PictorialComponent.vue";
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
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
  <section class="o-image-banner">
    <div class="u-layout-grid">
      <div>
        <dynamic-heading-component heading-type="h3" heading-style="h3">{{
          title
        }}</dynamic-heading-component>
        <p>{{ description }}</p>
      </div>
      <pictorial-component class="o-image-banner__image" :image="image" :alt="alt"></pictorial-component>
    </div>
  </section>
</template>
