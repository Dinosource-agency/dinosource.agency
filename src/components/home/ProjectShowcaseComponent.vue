<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkComponent from "@/components/base/LinkComponent.vue";
import ProjectShowcaseModel from "@/components/home/projectShowcaseModel.vue";
const projectsWrapper = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  if (ScrollTrigger.getAll().length === 0) {
    gsap.to(".o-project-showcase-component__projects-wrapper", {
      xPercent: -117,
      x: () => innerWidth,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".o-project-showcase-component",
        end: () => projectsWrapper.value.innerWidth * 50,
        scrub: true,
        pin: true,
        // markers: true,
      },
    });
  }
  ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
      <div
        ref="projectsWrapper"
        class="o-project-showcase-component__projects-wrapper"
      >
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
