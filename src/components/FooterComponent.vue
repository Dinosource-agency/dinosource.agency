<template>
  <footer class="o-footer">
    <div class="u-layout-grid">
      <div class="o-footer__contact">
        <h4 class="o-footer__contact__title">
          {{ footerMock.contact.title.toLocaleUpperCase() }}
        </h4>
        <link-component
          v-for="contact in footerMock.contact.links"
          :key="contact.title"
          :title="contact.title"
          :to="contact.to"
          :link-type="contact.linkType"
          >{{ contact.title }}</link-component
        >
      </div>
      <div class="o-footer__socials">
        <h4 class="o-footer__socials__title">{{ footerMock.socials.title }}</h4>
        <link-component
          v-for="link in footerMock.socials.links"
          :key="link.title"
          :link-type="link.linkType"
          :title="link.title"
          :to="link.to"
          >{{ link.title }}
        </link-component>
      </div>
      <link-component
        title="Home"
        to="/"
        link-type="internal"
        class="o-footer__logo"
      >
        <img src="/images/svg/logo/main-logo-black.svg" alt="main-logo" />
      </link-component>
      <section class="o-footer__bottom">
        <link-component class="o-footer__bottom__link" link-type="interal"
          >Privacy policy</link-component
        >
        <link-component class="o-footer__bottom__link" link-type="interal"
          >Terms of use</link-component
        >
        <span>2022 Dinosource, part of Thomas More Mechelen</span>
      </section>
    </div>
  </footer>
</template>

<script setup>
import LinkComponent from "@/components/LinkComponent.vue";

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
