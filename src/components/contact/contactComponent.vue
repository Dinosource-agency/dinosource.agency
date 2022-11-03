<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
import { onMounted, ref } from "vue";

const props = defineProps({
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
        <span class="contact-component__wrapper__title">{{ props.title }}</span>
        <div ref="ready" class="contact-component__wrapper__animation">
          <img
            src="images/svg/hover-over.webp"
            class="contact-component__wrapper__animation__caption"
          />
          <img
            src="images/animation/ready4impact.webp"
            alt="hover over animation"
            class="contact-component__wrapper__animation__image"
          />
        </div>
      </div>
      <div class="contact-component__info">
        <div class="contact-component__info__item">
          <span class="contact-component__info__item__title"
            >For the writers:</span
          >
          <link-component
            :title="props.items.email.title"
            :to="props.items.email.to"
            class="contact-component__info__item__description"
            :link-type="props.items.email.linkType"
          >
            {{ props.items.email.title }}
          </link-component>
        </div>
        <div class="contact-component__info__item">
          <span class="contact-component__info__item__title"
            >For the speakers:</span
          >
          <link-component
            :title="props.items.phone.title"
            :to="props.items.phone.to"
            :link-type="props.items.phone.linkType"
          >
            {{ props.items.phone.title }}
          </link-component>
        </div>
        <div class="contact-component__info__item">
          <span class="contact-component__info__item__title">Find us at</span>
          <span class="contact-component__info__item__description">
            <link-component
              :title="props.items.adress.title"
              :to="props.items.adress.to"
              :link-type="props.items.adress.linkType"
            >
              {{ props.items.adress.title }} </link-component
            ><br /><link-component
              :title="props.items.campus.title"
              :to="props.items.campus.to"
              :link-type="props.items.campus.linkType"
            >
              {{ props.items.campus.title }}
            </link-component></span
          >
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
