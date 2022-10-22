<script setup>
defineProps({
  linkType: {
    type: String,
    default: "internal",
  },
  title: {
    type: String,
    default: "Link",
  },
  to: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <!-- Internal link -->
  <router-link class="a-link" :to="to" :title="title" v-if="linkType === 'internal'">
    <slot></slot>
  </router-link>
  <!-- External link -->
  <a class="a-link" :title="title" :href="to" v-else-if="linkType === 'external'">
    <slot></slot>
  </a>
  <!-- Email link -->
  <a class="a-link" :title="title" :href="'mailto:' + to" v-else-if="linkType === 'email'">
    <slot></slot>
  </a>
</template>
