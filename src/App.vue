<script setup>
import { RouterView } from "vue-router";
import NavigationComponent from "@/components/NavigationComponent.vue";
</script>

<template>
  <navigation-component></navigation-component>
  <RouterView />
</template>

<style lang="sass">
@use "./assets/sass/style.scss"
</style>
