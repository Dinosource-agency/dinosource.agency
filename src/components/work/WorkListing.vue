<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
import { onMounted } from "vue";

onMounted(() => {
  const links = document.querySelectorAll(".work-listing__item");
  const linkImages = document.querySelectorAll(
    ".work-listing__item__hover-reveal__inner__img"
  );

  links.forEach((link, idx) => {
    link.addEventListener("mousemove", (e) => {
      link.children[1].style.opacity = 1;
      link.children[0].style.zIndex = 3;
      link.children[1].style.transform = `translate(${e.clientX - 300}px, -${
        e.clientY / 6
      }px) rotate(${e.clientX / 50}deg)`;
      linkImages[idx].style.transform = `scale(1,1)`;
      link.style.zIndex = 2;
    });
    link.addEventListener("mouseleave", (e) => {
      link.children[1].style.opacity = 0;
      link.children[1].style.transform = `translate(${-e.cleintX}px, -300px)`;
      linkImages[idx].style.transform = `scale(0.8,0.8)`;
      link.style.zIndex = 0;
    });
  });
});

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const tagsToString = (tags) => {
  let tagsString = "";
  tags.forEach((tag, idx) => {
    tagsString += tag;
    if (idx !== tags.length - 1) {
      tagsString += ", ";
    }
  });
  return tagsString;
};
</script>
<template>
  <div class="work-listing">
    <div class="u-layout-grid">
      <link-component
        v-for="project in projects"
        v-bind:key="project.name"
        :title="project.name"
        :to="project.link"
        link-type="internal"
        class="work-listing__item"
      >
        <span class="work-listing__item__title">{{ project.name }}</span>
        <div class="work-listing__item__hover-reveal">
          <div class="work-listing__item__hover-reveal__inner">
            <div class="work-listing__item__hover-reveal__inner__img">
              <img
                class="work-listing__item__hover-reveal__inner__img__image"
                src="https://picsum.photos/400/400"
              />
            </div>
          </div>
        </div>
        <div class="work-listing__item__tags">
          {{ tagsToString(project.tags) }}
        </div>
      </link-component>
    </div>
  </div>
</template>
