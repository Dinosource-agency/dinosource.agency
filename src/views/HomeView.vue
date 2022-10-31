<script setup>
import DinoHeadHero from "@/components/layout/DinoHeadHero.vue";
import MissionTextComponent from "@/components/layout/MissionTextComponent.vue";
import ProjectShowcaseComponent from "@/components/home/projectShowcaseComponent.vue";

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
    <MissionTextComponent
      size="big"
      backgroundColor="green"
      heading-style="h2"
      heading-type="h2"
      alignment="center"
      title="WE PRAY FOR GREAT DESIGN, AMAZING DEVELOPMENT AND MEME-TECHNO"
    ></MissionTextComponent>
  </main>
</template>
