<script setup>
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";

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
    <img class="m-card__image" :src="imageSrc" :alt="imageAlt" />
    <dynamic-heading-component
      v-if="cardTitle"
      heading-style="h3"
      heading-type="h3"
    >
      {{ cardTitle }}
    </dynamic-heading-component>
    <div v-if="cardTags">
      <span :key="tag" v-for="tag in cardTags" class="a-tag">{{ tag }}</span>
    </div>
    <span v-else-if="cardTag" class="a-tag">{{ cardTag }}</span>
  </div>
</template>
