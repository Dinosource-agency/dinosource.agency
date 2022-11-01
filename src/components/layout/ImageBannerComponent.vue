<script setup>
import ImageBannerComponent from "@/components/base/ImageComponent.vue";
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";

defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  sideNote: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  imageLeft: {
    type: Boolean,
    default: false,
  },
  alignTextBottom: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="o-image-banner">
    <div class="u-layout-grid">
      <div
        class="o-image-banner__info"
        :class="[
          alignTextBottom ? 'o-image-banner__info--align-bottom' : '',
          imageLeft ? 'o-image-banner__info--right' : '',
        ]"
      >
        <dynamic-heading-component
          class="o-image-banner__info__title"
          v-if="title"
          heading-type="h3"
          heading-style="h3"
          >{{ title }}</dynamic-heading-component
        >
        <p class="o-image-banner__info__description">{{ description }}</p>
        <p class="o-image-banner__info__side-note">{{ sideNote }}</p>
      </div>
      <image-banner-component
        class="o-image-banner__image"
        :class="
          imageLeft
            ? 'o-image-banner__image--left'
            : 'o-image-banner__image--right'
        "
        :alt="alt"
        :src="image"
      ></image-banner-component>
    </div>
  </section>
</template>
