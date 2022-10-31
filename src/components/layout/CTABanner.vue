<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
//get ctaBanner object from AboutPageMock
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  button: {
    type: Object,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="o-ctabanner-component">
    <span class="o-ctabanner-component__title">{{ props.title }}</span>
    <link-component
      :title="props.button.title"
      :to="props.button.to"
      :link-type="props.button.linkType"
      class="o-ctabanner-component__button"
    >
      <button
        class="a-button a-button--primary o-navigation__items__item--primary"
      >
        {{ props.buttonText }}
      </button>
    </link-component>
  </div>
</template>
