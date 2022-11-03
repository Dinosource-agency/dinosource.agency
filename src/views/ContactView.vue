<script setup>
import contactComponent from "@/components/contact/ContactComponent.vue";
import pictorialComponent from "@/components/layout/PictorialComponent.vue";
const ContactPageMock = {
  contactInfo: {
    title: "looking for this?",
    items: {
      email: "hello@dinosource.agency",
      phone: "+32 492 94 15 49",
      adress: "Raghenoplein 21 bis 2800 Mechelen, BE",
      campus: "Campus De Ham z0.14",
    },
  },
  pictorial: {
    image: "/images/jpg/groepsfoto.jpg",
    alt: "Group photo",
  },
};
</script>
<template>
  <main>
    <contact-component
      :title="ContactPageMock.contactInfo.title"
      :items="ContactPageMock.contactInfo.items"
    ></contact-component>
    <pictorial-component
      :image="ContactPageMock.pictorial.image"
      :alt="ContactPageMock.pictorial.alt"
      class="pictorial-component--contact"
    ></pictorial-component>
  </main>
</template>
