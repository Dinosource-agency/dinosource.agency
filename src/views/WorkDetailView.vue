<script setup>
import { useRoute } from "vue-router";
import router from "@/router";
import CTABanner from "@/components/layout/CTABanner.vue";
import MissionTextComponent from "@/components/layout/MissionTextComponent.vue";
import ImageBannerComponent from "@/components/layout/ImageBannerComponent.vue";
import TopBarComponent from "@/components/work-detail/TopBarComponent.vue";

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
  <section class="p-work-detail__top-bar">
    <div class="u-layout-constrain">
      <top-bar-component
        :generation="project.generation"
        :tags="project.tags"
      ></top-bar-component>
    </div>
  </section>
  <mission-text-component
    heading-style="h1"
    heading-type="h1"
    background-color="black"
    size="big"
    :title="project.title"
  ></mission-text-component>
  <image-banner-component
    :description="project.projectDescription"
    :image="project.logo"
    :alt="project.alt"
  ></image-banner-component>
  <image-banner-component
    :title="project.imageBanner.title"
    :description="project.imageBanner.description"
    :image="project.imageBanner.image"
    :alt="project.imageBanner.alt"
    :image-left="true"
    :align-text-bottom="true"
  ></image-banner-component>
  <mission-text-component
    alignment="center"
    heading-style="h2"
    heading-type="h1"
    :title="project.bigText"
  ></mission-text-component>
  <c-t-a-banner
    :to="WorkDetailMock.ctaBanner.button.to"
    :label="WorkDetailMock.ctaBanner.button.title"
    :link-type="WorkDetailMock.ctaBanner.button.linkType"
    :title="WorkDetailMock.ctaBanner.title"
    :buttonText="WorkDetailMock.ctaBanner.buttonText"
  ></c-t-a-banner>
</template>
