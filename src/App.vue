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
import NavigationComponent from "@/components/app/NavigationComponent.vue";
import FooterComponent from "@/components/app/FooterComponent.vue";

const footerMock = {
  contact: {
    title: "Reach out",
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
    title: "Discover more on",
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

let origTitle = "Your fucking agency",
  animatedTitle,
  timer;
let animateTitle = () => {
  var currentState = false;
  origTitle = document.title;
  animatedTitle = "Get the fuck back here! ";
  timer = setInterval(() => {
    document.title = currentState ? origTitle : animatedTitle;
    currentState = !currentState;
  }, 1000);
};

let restoreTitle = () => {
  clearInterval(timer);
  document.title = origTitle;
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState == "visible") {
    restoreTitle();
  } else {
    animateTitle();
  }
});
</script>

<style lang="sass">
@use "./assets/sass/style.scss"
</style>
