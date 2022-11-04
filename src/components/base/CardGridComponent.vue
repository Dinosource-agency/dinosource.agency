<script setup>
import { CardComponent, LinkComponent } from "@/components";
defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="o-card-grid">
    <link-component
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
      :to="`/work/${card.slug}`"
      class="o-card-grid__card"
    >
      <card-component
        :image-alt="card.alt"
        :image-src="card.logo"
        :card-title="card.title"
        :card-tags="card.tags"
      ></card-component>
    </link-component>
  </div>
</template>
