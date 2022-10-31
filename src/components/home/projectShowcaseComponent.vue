<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkComponent from "@/components/base/LinkComponent.vue";
import projectShowcaseModel from "@/components/home/projectShowcaseModel.vue";
gsap.registerPlugin(ScrollTrigger);
const projectsWrapper = ref(null)
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".o-project-showcase-component__projects-wrapper", {
    xPercent: -117,
    x: () => innerWidth,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: ".o-project-showcase-component",
      start: "top top",
      end: () =>
          projectsWrapper.value.innerWidth *175,
      scrub: true,
      pin: true,
      markers: true,
    },
  });
});

const props = defineProps({
  projectShowcase: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="o-project-showcase-component">
    <div class="u-layout-grid">
      <div ref="projectsWrapper" class="o-project-showcase-component__projects-wrapper">
        <project-showcase-model
          v-for="project in props.projectShowcase.projects"
          :key="project.name"
          :project="project"
          :image="project.image"
        ></project-showcase-model>
      </div>
      <link-component
        title="All Projects"
        to="/work"
        link-type="internal"
        class="o-project-showcase-component__link"
      >
        ALL PROJECTS &nbsp; <img src="/images/icons/arrow-right.svg" />
      </link-component>
    </div>
    <span class="o-project-showcase-component__title">Work</span>
  </div>
</template>
