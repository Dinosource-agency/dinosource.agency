<script setup>
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";
import CardComponent from "@/components/layout/CardComponent.vue";
import MissionTextComponent from "@/components/layout/MissionTextComponent.vue";
const AboutPageMock = {
  title: "MEET the npcs at DINOSOURCE V12",
  about:
    "ELEVEN CREATIVE CRACKHEADS THAT BUILD EXPLOSIVE EXPERIENCES FOR big league BRANDS.",
  team: {
    title: "THESE ARE THE PEOPLE YOU NEED TO KNOW",
    members: [
      {
        id: 1,
        imageSrc: "/images/team/seppe.webp",
        imageAlt: "Picture of Seppe",
        cardTitle: "Seppe",
        name: ["Seppe"],
      },
      {
        id: 2,
        imageSrc: "/images/team/elien.webp",
        imageAlt: "Picture of Elien",
        cardTitle: "Elien",
        name: ["Elien"],
      },
      {
        id: 3,
        imageSrc: "/images/team/ismael.webp",
        imageAlt: "Picture of Ismael",
        cardTitle: "Ismael",
        name: ["Ismael"],
      },
      {
        id: 4,
        imageSrc: "/images/team/ellen.webp",
        imageAlt: "Picture of Ellen",
        cardTitle: "Ellen",
        name: ["Ellen"],
      },
      {
        id: 5,
        imageSrc: "/images/team/robbe.webp",
        imageAlt: "Picture of robbe",
        cardTitle: "robbe",
        name: ["Robbe"],
      },
      {
        id: 6,
        imageSrc: "/images/team/alejandro.webp",
        imageAlt: "Picture of alejandro",
        cardTitle: "alejandro",
        name: ["Alejandro"],
      },
      {
        id: 7,
        imageSrc: "/images/team/lukas.webp",
        imageAlt: "Picture of lukas",
        cardTitle: "lukas",
        name: ["Lukas"],
      },
      {
        id: 8,
        imageSrc: "/images/team/rickey.webp",
        imageAlt: "Picture of rickey",
        cardTitle: "rickey",
        name: ["Rickey"],
      },
      {
        id: 9,
        imageSrc: "/images/team/robin.webp",
        imageAlt: "Picture of robin",
        cardTitle: "robin",
        name: ["Robin"],
      },
      {
        id: 10,
        imageSrc: "/images/team/aimane.webp",
        imageAlt: "Picture of aimane",
        cardTitle: "aimane",
        name: ["Aimane"],
      },
      {
        id: 11,
        imageSrc: "/images/team/sien.webp",
        imageAlt: "Picture of sien",
        cardTitle: "sien",
        name: ["Sien"],
      },
    ],
  },
};
</script>
<template>
  <MissionTextComponent
    class="p-about__header"
    size="medium"
    backgroundColor="black"
    heading-style="h1"
    heading-type="h1"
    alignment="center"
    :title="AboutPageMock.title"
  ></MissionTextComponent>
  <MissionTextComponent
    class="p-about__header"
    size="medium"
    backgroundColor="black"
    heading-style="h2"
    heading-type="h2"
    alignment="left"
    :title="AboutPageMock.about"
  ></MissionTextComponent>
  <section class="p-about-team">
    <div class="u-layout-grid">
      <div class="p-about-team__wrapper">
        <dynamic-heading-component
          class="p-about-team__title"
          heading-style="h2"
          heading-type="h2"
          >{{
            AboutPageMock.team.title.toLocaleUpperCase()
          }}</dynamic-heading-component
        >
        <div class="p-about-team__grid">
          <card-component
            v-for="member in AboutPageMock.team.members"
            :key="member.id"
            :image-src="member.imageSrc"
            :image-alt="member.imageAlt"
            :card-tags="member.name"
            class="p-about-team__grid__card"
          >
          </card-component>
        </div>
      </div>
    </div>
  </section>
</template>
