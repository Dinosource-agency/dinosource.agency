<template>
  <footer class="o-footer">
    <div class="u-layout-grid">
      <div class="o-footer__contact">
        <h4 class="o-footer__contact__title">
          {{ contact.title.toLocaleUpperCase() }}
        </h4>
        <link-component
          v-for="contact in contact.links"
          :key="contact.title"
          :title="contact.title"
          :to="contact.to"
          :link-type="contact.linkType"
          >{{ contact.title }}</link-component
        >
      </div>
      <div class="o-footer__socials">
        <h4 class="o-footer__socials__title">{{ socials.title }}</h4>
        <link-component
          v-for="link in socials.links"
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
defineProps({
  contact: {
    type: Object,
  },
  socials: {
    type: Object,
  },
});
</script>
