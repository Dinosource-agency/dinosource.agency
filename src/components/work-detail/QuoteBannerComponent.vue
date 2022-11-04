<script setup>
import { QuoteComponent } from "@/components";
defineProps({
  quote: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="o-quote-banner">
    <div class="u-layout-grid">
      <quote-component class="o-quote-banner__quote">
        {{ quote }}
      </quote-component>
      <p class="o-quote-banner__description">{{ description }}</p>
    </div>
  </section>
</template>
