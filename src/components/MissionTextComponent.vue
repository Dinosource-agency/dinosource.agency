<script setup>
defineProps({
  title: {
    type: String,
    default: "TITLE",
    required: true,
  }
});
</script>
<template>
    <section class="o-mission-text-component">
        <span class="o-mission-text-component__title">{{ title }}</span>
    </section>
</template>