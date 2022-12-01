<script setup>
import { contactInfoComponent, PictorialComponent } from "@/components";
import { contactPageMock } from "@/mocks";
</script>
<template>
  <main>
    <contact-info-component
      :title="contactPageMock.contactInfo.title"
      :items="contactPageMock.contactInfo.items"
    >
    </contact-info-component>
    <pictorial-component
      :image="contactPageMock.pictorial.image"
      :alt="contactPageMock.pictorial.alt"
      class="pictorial-component--contact"
    ></pictorial-component>
  </main>
</template>
