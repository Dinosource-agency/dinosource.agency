<script setup>
import contactComponent from "@/components/contact/ContactComponent.vue";
import pictorialComponent from "@/components/layout/PictorialComponent.vue";
const ContactPageMock = {
  contactInfo: {
    title: "looking for this?",
    items: {
      email:{
        title: "hello@dinosource.agency",
        linkType: "email",
        to: "hello@dinosource.be",
      },
      phone: {
        title: "+32 492 94 15 49",
        linkType: "phone",
        to: "+32 492 94 15 49",
      },
      adress: {
        title: "Raghenoplein 21 bis 2800 Mechelen, BE",
        linkType: "external",
        to: "https://www.thomasmore.be/",
      },
      campus: {
        title: "Campus De Ham z0.14",
        linkType: "external",
        to: "https://www.thomasmore.be/",
      },
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
