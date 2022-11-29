<template>
  <div class="o-navigation__wrapper">
    <div class="u-layout-grid">
      <nav class="o-navigation">
        <link-component link-type="internal" to="/" title="Home">
          <img
            class="o-navigation__logo--desktop"
            src="/images/svg/logo/main-logo.svg"
            alt="main-logo"
          />
          <img
            class="o-navigation__logo--mobile"
            src="/images/svg/logo/main-logo-mobile.svg"
            alt="main-logo"
          />
        </link-component>
        <div class="o-navigation__items">
          <link-component
            title="Home"
            to="/"
            link-type="internal"
            class="a-button o-navigation__items__item"
            @click="scrollToTop"
            >How we roll</link-component
          >
          <link-component
            title="Work"
            to="/work"
            link-type="internal"
            class="a-button o-navigation__items__item"
            @click="scrollToTop"
            >What we do</link-component
          >
          <link-component
            title="About"
            to="/about"
            link-type="internal"
            class="a-button o-navigation__items__item"
            @click="scrollToTop"
            >Who we are</link-component
          >
          <link-component
            title="contact"
            to="/contact"
            link-type="internal"
            class="a-button a-button--primary o-navigation__items__item--primary"
            @click="scrollToTop"
            >Reach out</link-component
          >
        </div>
        <button
          @click="toggleMenu"
          class="o-navigation__menu-button a-button a-button--primary"
        >
          {{ menuButtonText }}
        </button>
      </nav>
    </div>

    <nav
      class="o-navigation__mobile"
      :class="{ 'o-navigation__mobile--open': !mobileMenuOpen }"
    >
      <div class="o-navigation__mobile__items u-layout-constrain">
        <link-component
          title="Home"
          to="/"
          link-type="internal"
          class="o-navigation__mobile__items__item"
          >Home</link-component
        >
        <link-component
          title="Work"
          to="/work"
          link-type="internal"
          class="o-navigation__mobile__items__item"
          >Work</link-component
        >
        <link-component
          title="About"
          to="/about"
          link-type="internal"
          class="o-navigation__mobile__items__item"
          >About</link-component
        >
        <link-component
          title="Contact"
          to="/contact"
          link-type="internal"
          class="o-navigation__mobile__items__item"
          >Contact</link-component
        >
      </div>
    </nav>
  </div>
</template>
<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
let mobileMenuOpen = ref(false);
let menuButtonText = ref("MENU");
const route = useRoute();
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    menuButtonText.value = "CLOSE";
    //hiding the scroll
    document.body.style.overflow = "hidden";
  } else {
    menuButtonText.value = "MENU";
    //showing the scroll
    document.body.style.overflow = "scroll";
  }
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
    menuButtonText.value = "MENU";
    document.body.style.overflow = "scroll";
  }
);
</script>
