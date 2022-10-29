<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        document.querySelector(
          ".o-project-showcase-component__projects-wrapper"
        ).innerWidth * 150,
      scrub: true,
      pin: true,
      markers: true,
    },
  });
});
</script>
<template>
  <div class="o-project-showcase-component">
    <div class="u-layout-grid">
      <div class="o-project-showcase-component__projects-wrapper">
        <div
          class="o-project-showcase-component__projects-wrapper__project"
        ></div>
        <div
          class="o-project-showcase-component__projects-wrapper__project"
        ></div>
        <div
          class="o-project-showcase-component__projects-wrapper__project"
        ></div>
        <div
          class="o-project-showcase-component__projects-wrapper__project"
        ></div>
        <div
          class="o-project-showcase-component__projects-wrapper__project"
        ></div>
      </div>
    </div>
    <span class="o-project-showcase-component__title">Work</span>
  </div>
</template>
