<script setup>
import PictorialComponent from "../components/layout/PictorialComponent.vue";

const aboutMockupData = {
  pictorial: {
    image: "/images/jpg/groepsfoto.jpg",
    alt: "Group photo",
  },
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <pictorial-component
    :image="aboutMockupData.pictorial.image"
    :alt="aboutMockupData.pictorial.alt"
  ></pictorial-component>
</template>
