<script setup>
import { useRoute } from "vue-router";
import router from "@/router";
import {
  CTABanner,
  MissionTextComponent,
  ImageBannerComponent,
  TopBarComponent,
  DynamicHeadingComponent,
  PictorialComponent,
  CardComponent,
  QuoteBannerComponent,
  VideoComponent,
} from "@/components";

import { WorkDetailMock } from "@/mocks";

const route = useRoute();
const projectName = route.params.projectName;
const project = WorkDetailMock.projects.find(
  (project) => project.slug === projectName
);

if (!project) {
  router.replace({ name: "about" });
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

  <!-- project video -->
  <section class="p-work-detail__video-section">
    <div class="u-layout-constrain">
      <video-component
        class="p-work-detail__video-section__video"
        :source="project.projectVideo"
      ></video-component>
    </div>
  </section>

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

  <!-- quote block -->
  <quote-banner-component
    v-if="project.quoteBlock"
    :quote="project.quoteBlock.quote"
    :description="project.quoteBlock.description"
  ></quote-banner-component>

  <!-- big images -->
  <pictorial-component
    class="p-work-detail__bigImage"
    :key="image.id"
    v-for="image in project.projectImages"
    :alt="image.alt"
    :image="image.image"
  ></pictorial-component>

  <section class="p-work-detail__team">
    <div class="u-layout-constrain">
      <div class="p-work-detail__team__wrapper">
        <dynamic-heading-component
          class="p-work-detail__team__title"
          heading-style="h2"
          heading-type="h2"
          >THE TEAM THAT MADE THIS HAPPEN</dynamic-heading-component
        >
        <div class="p-work-detail__team__grid">
          <card-component
            v-for="member in project.team"
            :key="member.id"
            :image-src="member.personPicture"
            :image-alt="member.personAlt"
            :card-tag="member.personName"
            class="p-work-detail__team__grid__card"
          >
          </card-component>
        </div>
      </div>
    </div>
  </section>

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
