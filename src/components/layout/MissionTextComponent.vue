<script setup>
import { computed } from "vue";
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  headingType: {
    type: String,
  },
  headingStyle: {
    type: String,
  },
  alignment: {
    type: String,
  },
});

const cssVars = computed(() => {
  if (props.size === "big") {
    return {
      "--padding-type-xxl": "12rem 0rem",
      "--padding-type-xl": "12rem 0rem",
      "--padding-type-lg": "9rem 0rem",
      "--padding-type-md": "6rem 0rem",
      "--padding-type-sm": "6rem 0rem",
      "--padding-type-xs": "6rem 0rem",
    };
  } else if (props.size === "medium") {
    return {
      "--padding-type-xxl": "6rem 0rem",
      "--padding-type-xl": "6rem 0rem",
      "--padding-type-lg": "6rem 0rem",
      "--padding-type-md": "6rem 0rem",
      "--padding-type-sm": "6rem 0rem",
      "--padding-type-xs": "6rem 0rem",
    };
  } else {
    return {
      "--padding-type-xxl": "4.25rem 0rem",
      "--padding-type-xl": "4.25rem 0rem",
      "--padding-type-lg": "4.25rem 0rem",
      "--padding-type-md": "4.25rem 0rem",
      "--padding-type-sm": "4.25rem 0rem",
      "--padding-type-xs": "4.25rem 0rem",
    };
  }
});
</script>
<template>
  <section
    class="o-mission-text-component"
    :class="
      props.backgroundColor === 'black'
        ? 'o-mission-text-component--black'
        : 'o-mission-text-component--green'
    "
    :style="cssVars"
  >
    <div class="u-layout-grid">
      <div class="o-mission-text-component__wrapper">
        <dynamic-heading-component
          :heading-style="headingStyle"
          :heading-type="headingType"
          class="o-mission-text-component__title"
          :class="
            props.alignment === 'center'
              ? 'o-mission-text-component__title--center'
              : 'o-mission-text-component__title--left'
          "
        >
          {{ title }}
        </dynamic-heading-component>
      </div>
    </div>
  </section>
</template>
