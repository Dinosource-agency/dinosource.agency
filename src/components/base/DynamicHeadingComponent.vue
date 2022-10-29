<script setup>
defineProps({
  headingType: {
    type: String,
    required: true,
  },
  headingStyle: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <h1 :class="headingStyle" v-if="headingType === 'h1'">
    <slot></slot>
  </h1>
  <h2 :class="headingStyle" v-if="headingType === 'h2'">
    <slot></slot>
  </h2>
  <h3 :class="headingStyle" v-if="headingType === 'h3'">
    <slot></slot>
  </h3>
  <h4 :class="headingStyle" v-if="headingType === 'h4'">
    <slot></slot>
  </h4>
  <h5 :class="headingStyle" v-if="headingType === 'h5'">
    <slot></slot>
  </h5>
  <h6 :class="headingStyle" v-if="headingType === 'h6'">
    <slot></slot>
  </h6>
</template>
