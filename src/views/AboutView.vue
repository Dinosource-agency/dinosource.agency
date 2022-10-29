<script setup>
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";

const AboutPageMock = {
  team: {
    title: "THESE ARE THE PEOPLE YOU NEED TO KNOW",
  },
};
</script>
<template>
  <section class="p-about-team">
    <div class="u-layout-grid">
      <div class="p-about-team__wrapper">
        <dynamic-heading-component heading-style="h2" heading-type="h2">{{
          AboutPageMock.team.title
        }}</dynamic-heading-component>
      </div>
    </div>
  </section>
</template>
