<script setup>
import DinoHeadHero from "@/components/DinoHeadHero.vue";
import ProjectShowcaseComponent from "@/components/projectShowcaseComponent.vue";

const homeMockData = {
  missionText: "palceholder",
  projectShowcase: {
    projects: [
      {
        name: "Project1",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Project2",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Project3",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Project4",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Project5",
        image: "https://picsum.photos/200/300",
      },
      {
        name: "Project6",
        image: "https://picsum.photos/200/300",
      },
    ],
  },
};
</script>

<template>
  <main>
    <dino-head-hero></dino-head-hero>
    <project-showcase-component
      :projectShowcase="homeMockData.projectShowcase"
    ></project-showcase-component>
  </main>
</template>
