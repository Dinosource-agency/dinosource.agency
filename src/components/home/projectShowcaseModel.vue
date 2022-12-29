<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
defineProps({
  slug: {
    type: String,
    required: true,
  },
  title: {
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
  <div class="o-project-showcase-model">
    <link-component
      :title="title"
      class="o-project-showcase-model__link"
      :to="`/work/${slug}`"
    >
      <img class="o-project-showcase-model__image" :alt="alt" :src="image" />
    </link-component>
  </div>
</template>
