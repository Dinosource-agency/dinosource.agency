<script setup>
import contactComponent from "@/components/contact/ContactComponent.vue";
import pictorialComponent from "@/components/layout/PictorialComponent.vue";
const ContactPageMock = {
  pictorial: {
    image: "/images/jpg/groepsfoto.jpg",
    alt: "Group photo",
  },
};
</script>
<template>
  <main>
    <contact-component></contact-component>
    <pictorial-component
      :image="ContactPageMock.pictorial.image"
      :alt="ContactPageMock.pictorial.alt"
      class="pictorial-component--contact"
    ></pictorial-component>
  </main>
</template>
