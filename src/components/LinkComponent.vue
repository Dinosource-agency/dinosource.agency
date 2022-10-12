<script setup>
import { defineProps } from "vue";
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
  <router-link :to="to" :title="title" v-if="linkType === 'internal'" exact>
    <slot></slot>
  </router-link>
  <!-- External link -->
  <a :title="title" :href="to" v-else-if="linkType === 'external'">
    <slot></slot>
  </a>
  <!-- Email link -->
  <a :title="title" :href="'mailto:' + to" v-else-if="linkType === 'email'">
    <slot></slot>
  </a>
</template>
