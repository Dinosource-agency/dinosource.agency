<script setup>
import { RouterView } from "vue-router";
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <navigation-component></navigation-component>
  <RouterView />
  <footer-component></footer-component>
</template>

<style lang="sass">
@use "./assets/sass/style.scss"
</style>
