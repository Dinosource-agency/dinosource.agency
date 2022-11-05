<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
//get ctaBanner object from AboutPageMock
defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
  },
  label: {
    type: String,
  },
  linkType: {
    type: String,
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="o-ctabanner-component">
    <span class="o-ctabanner-component__title">{{ title }}</span>
    <link-component
      :title="label"
      :to="to"
      :link-type="linkType"
      class="o-ctabanner-component__button"
    >
      <button
        class="a-button a-button--primary o-navigation__items__item--primary"
      >
        {{ buttonText }}
      </button>
    </link-component>
  </div>
</template>
