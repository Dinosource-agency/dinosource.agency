<script setup>
import {
  LinkComponent,
  DynamicHeadingComponent,
  PictorialComponent,
} from "@/components";
import { onMounted, ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Object,
    required: true,
  },
});

const contactImages = ref(null);
const ready = ref(null);

onMounted(() => {
  const images = contactImages.value.querySelectorAll(
    ".contact-component__image-container__image"
  );

  let imagesArray = Array.from(images);
  let counter = 1;

  let moveImage = () => {
    let lastImage = imagesArray.pop();
    imagesArray.unshift(lastImage);
    imagesArray.forEach((image, index) => {
      image.style.zIndex = index + 1;
    });
    lastImage.style.left =
      Math.floor(
        Math.random() *
          (contactImages.value.offsetWidth - lastImage.offsetWidth)
      ) + "px";
    lastImage.style.top =
      Math.floor(
        Math.random() *
          (contactImages.value.offsetHeight - lastImage.offsetHeight)
      ) + "px";
    lastImage.innerHTML = `<img src="/images/contact/${counter}.webp" alt="contact image" class="contact-component__image-container__image__img">`;
    counter++;
    if (counter > 14) {
      counter = 1;
    }
  };
  setInterval(moveImage, 150);
  ready.value.addEventListener("mouseover", () => {
    contactImages.value.style.opacity = 1;
  });
  ready.value.addEventListener("mouseout", () => {
    contactImages.value.style.opacity = 0;
  });
});
</script>
<template>
  <div class="contact-component">
    <div class="u-layout-grid">
      <div class="contact-component__wrapper">
        <dynamic-heading-component
          heading-style="h1"
          heading-type="h1"
          class="contact-component__wrapper__title"
          >{{ title }}</dynamic-heading-component
        >
        <div ref="ready" class="contact-component__wrapper__animation">
          <pictorial-component
            image="images/svg/hover-over.webp"
            alt="hover over caption"
            class="contact-component__wrapper__animation__caption"
          ></pictorial-component>
          <pictorial-component
            image="images/animation/ready4impact.webp"
            alt="hover over animation"
            class="contact-component__wrapper__animation__image"
          ></pictorial-component>
        </div>
      </div>
      <div class="contact-component__info">
        <div
          class="contact-component__info__item"
          v-for="item in items"
          v-bind:key="item.id"
        >
          <span class="contact-component__info__item__title">{{
            item.title
          }}</span>
          <link-component
            :title="item.linkTitle"
            :to="item.to"
            :link-type="item.linkType"
          >
            {{ item.linkTitle }}
          </link-component>
        </div>
      </div>
    </div>

    <div ref="contactImages" class="contact-component__image-container">
      <div
        class="contact-component__image-container__image contact-component__image-container__one"
      ></div>
      <div
        class="contact-component__image-container__image contact-component__image-container__two"
      ></div>
      <div
        class="contact-component__image-container__image contact-component__image-container__three"
      ></div>
    </div>
  </div>
</template>
