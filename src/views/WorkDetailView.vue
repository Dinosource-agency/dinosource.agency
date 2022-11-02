<script setup>
import { useRoute } from "vue-router";
import router from "@/router";
import CTABanner from "@/components/layout/CTABanner.vue";
import MissionTextComponent from "@/components/layout/MissionTextComponent.vue";
import ImageBannerComponent from "@/components/layout/ImageBannerComponent.vue";
import TopBarComponent from "@/components/work-detail/TopBarComponent.vue";
import DynamicHeadingComponent from "@/components/base/DynamicHeadingComponent.vue";
import PictorialComponent from "@/components/layout/PictorialComponent.vue";

const WorkDetailMock = {
  ctaBanner: {
    title: "THINK YOU CAN HANDLE US?",
    button: {
      title: "Contact",
      to: "contact",
      linkType: "internal",
    },
    buttonText: "CONTACT",
  },
  projects: [
    {
      id: 0,
      slug: "sweet-sixteen",
      tags: ["Design", "Development", "Branding", "Marketing"],
      generation: 9,
      title: "Sweet Sixteen",
      projectDescription:
        "One of the projects that involved the mentors of DesignoSource Generation 9 is One Woman Collective. Just like the name implies it’s a collective ran by one single woman named Linde Van Eijnde. She specialises in branding and creating immersive visual experiences which can be seen in all her projects.",
      logo: "/images/cases/sweet16/Sweet16_Logo.webp",
      alt: "Picture of logo sweet 16",
      projectVideo: "Project Video",
      imageBanner: {
        title: "Get to know the vision of one woman collective.",
        description:
          "A … paradox movement for the love of branding, interior and digital design. If you would like to  work with me. Or you can just about me. Actions speak louder than words: we throw ourselves into each project as if it were the first and the last.",
        image: "/images/cases/sweet16/sweet16_Posters.webp",
        alt: "Picture of posters from the sweet 16",
      },
      bigText: "ELLE VEUT DANSER",
      quoteBlock: {
        quote:
          "This should idealy be an optional section where we can put a quote from the client we worked with.",
        description:
          "As for this text we could include some more depth about our collab with Linde and how we worked on this project. With older projects like these, we can’t really incorporate both the quote and descriptive text since we haven’t worked on this project ourselves.",
      },
      projectImages: [
        {
          id: 1,
          image: "/images/cases/sweet16/Sweet16_InstagramPosts.webp",
          alt: "Picture of Instagram mockups in sweet 16 branding",
        },
        {
          id: 2,
          image: "/images/cases/sweet16/Sweet16_Macbook.webp",
          alt: "Picture of Macbook mockup in sweet 16 branding",
        },
      ],
      team: [
        {
          personName: "Robbe",
          personPicture: "/images/team/robbe.webp",
        },
      ],
    },
    {
      id: 1,
      slug: "project-title",
      projectTitle: "Project title",
      projectDescription: "Project Description",
      projectVideo: "Project Video",
      projectImages: [
        {
          image: "Project Image 1",
          alt: "Project Image 1 Alt",
        },
        {
          image: "Project Image 2",
          alt: "Project Image 2 Alt",
        },
        {
          image: "Project Image 3",
          alt: "Project Image 3 Alt",
        },
        {
          image: "Project Image 4",
          alt: "Project Image 4 Alt",
        },
        {
          image: "Project Image 5",
          alt: "Project Image 5 Alt",
        },
        {
          image: "Project Image 6",
          alt: "Project Image 6 Alt",
        },
      ],
    },
  ],
};
const route = useRoute();
const projectName = route.params.projectName;
const project = WorkDetailMock.projects.find(
  (project) => project.slug === projectName
);
console.log(project);
if (!project) {
  router.push({ name: "404" });
}
</script>
<template>
  <!-- top-bar component -->
  <section class="p-work-detail__top-bar">
    <div class="u-layout-constrain">
      <top-bar-component
        :generation="project.generation"
        :tags="project.tags"
      ></top-bar-component>
    </div>
  </section>

  <!-- Title -->
  <section v-if="project.title">
    <div class="u-layout-constrain">
      <dynamic-heading-component
        heading-style="h1"
        heading-type="h1"
        class="p-work-detail__title"
        >{{ project.title }}</dynamic-heading-component
      >
    </div>
  </section>

  <!-- logo banner -->
  <image-banner-component
    v-if="project.logo"
    :description="project.projectDescription"
    :image="project.logo"
    :alt="project.alt"
    class="p-work-detail__logo-banner"
  ></image-banner-component>

  <!-- image banner -->
  <image-banner-component
    v-if="project.imageBanner"
    :title="project.imageBanner.title"
    :description="project.imageBanner.description"
    :image="project.imageBanner.image"
    :alt="project.imageBanner.alt"
    :image-left="true"
    :align-text-bottom="true"
    class="p-work-detail__image-banner"
  ></image-banner-component>

  <!-- tag line -->
  <mission-text-component
    v-if="project.bigText"
    alignment="center"
    heading-style="h2"
    heading-type="h2"
    :title="project.bigText"
  ></mission-text-component>

  <!-- big images -->
  <pictorial-component
    class="p-work-detail__bigImage"
    :key="image.id"
    v-for="image in project.projectImages"
    :alt="image.alt"
    :image="image.image"
  ></pictorial-component>

  <!-- Cta banner -->
  <c-t-a-banner
    v-if="WorkDetailMock.ctaBanner"
    :to="WorkDetailMock.ctaBanner.button.to"
    :label="WorkDetailMock.ctaBanner.button.title"
    :link-type="WorkDetailMock.ctaBanner.button.linkType"
    :title="WorkDetailMock.ctaBanner.title"
    :buttonText="WorkDetailMock.ctaBanner.buttonText"
  ></c-t-a-banner>
</template>
