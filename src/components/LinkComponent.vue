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
  <router-link
    class="a-link"
    :to="to"
    :title="title"
    v-if="linkType === 'internal'"
  >
    <slot></slot>
  </router-link>
  <!-- External link -->
  <a
    v-else-if="linkType.toString() === 'external'"
    class="a-link"
    target="_blank"
    :title="title"
    :href="to"
  >
    <slot></slot>
  </a>
  <!-- Email link -->
  <a
    class="a-link"
    :title="title"
    :href="'mailto:' + to"
    v-else-if="linkType === 'email'"
  >
    <slot></slot>
  </a>
  <!-- Phone link -->
  <a
    class="a-link"
    :title="title"
    :href="'tel:' + to"
    v-else-if="linkType === 'phone'"
  >
    <slot></slot>
  </a>
</template>
