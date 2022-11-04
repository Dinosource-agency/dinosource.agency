<script setup>
import { DynamicHeadingComponent, ImageComponent } from "@/components";

defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  cardTitle: {
    type: String,
  },
  cardTags: {
    type: Array,
  },
  cardTag: {
    type: String,
  },
});
</script>

<template>
  <div class="m-card">
    <image-component
      class="m-card__image"
      :src="imageSrc"
      :alt="imageAlt"
    ></image-component>
    <dynamic-heading-component
      v-if="cardTitle"
      class="m-card__title"
      heading-style="h3"
      heading-type="h3"
    >
      {{ cardTitle.toUpperCase() }}
    </dynamic-heading-component>
    <div class="m-card__tags" v-if="cardTags">
      <span :key="tag" v-for="tag in cardTags" class="a-tag">{{ tag }}</span>
    </div>
    <span v-else-if="cardTag" class="a-tag">{{ cardTag }}</span>
  </div>
</template>
