<template>
  <navigation-component></navigation-component>
  <RouterView />
  <footer-component
    :contact="footerMock.contact"
    :socials="footerMock.socials"
  ></footer-component>
</template>
<script setup>
import { RouterView } from "vue-router";
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const footerMock = {
  contact: {
    title: "CONTACT",
    links: [
      {
        title: "hello@dinosource.be",
        linkType: "email",
        to: "hello@dinosource.be",
      },
      {
        title: "+32 492 94 15 49",
        linkType: "phone",
        to: "+32 492 94 15 49",
      },
      {
        title: "Thomas More Mechelen",
        linkType: "external",
        to: "https://www.thomasmore.be/",
      },
    ],
  },
  socials: {
    title: "FIND US HERE",
    links: [
      {
        title: "Instagram",
        linkType: "external",
        to: "https://www.instagram.com/dinosource.agency/",
      },
      {
        title: "Tiktok",
        linkType: "external",
        to: "https://www.tiktok.com/@dinosource.agency",
      },
      {
        title: "Facebook",
        linkType: "external",
        to: "https://www.facebook.com/dinosource.agency",
      },

      {
        title: "LinkedIn",
        linkType: "external",
        to: "https://www.tiktok.com/@dinosource.agency",
      },
    ],
  },
};
</script>

<style lang="sass">
@use "./assets/sass/style.scss"
</style>
