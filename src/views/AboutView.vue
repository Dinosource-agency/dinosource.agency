<script setup>
import {
  DynamicHeadingComponent,
  CardComponent,
  StatisticComponent,
  CTABanner,
  MissionTextComponent,
  PictorialComponent,
  ImageBannerComponent,
} from "@/components";
import { AboutPageMock } from "@/mocks";
import { useGtm } from "@gtm-support/vue-gtm";
useGtm();
</script>
<template>
  <mission-text-component
    class="p-about__header"
    size="medium"
    backgroundColor="black"
    heading-style="h1"
    heading-type="h1"
    alignment="center"
    :title="AboutPageMock.title"
  ></mission-text-component>
  <pictorial-component
    :image="AboutPageMock.pictorial.image"
    :alt="AboutPageMock.pictorial.alt"
  ></pictorial-component>
  <mission-text-component
    size="medium"
    backgroundColor="black"
    heading-style="h2"
    heading-type="h2"
    alignment="left"
    :title="AboutPageMock.about"
  ></mission-text-component>
  <image-banner-component
    :title="AboutPageMock.imageBanner.title"
    :description="AboutPageMock.imageBanner.description"
    :side-note="AboutPageMock.imageBanner.sideNote"
    :image="AboutPageMock.imageBanner.image"
    :alt="AboutPageMock.imageBanner.alt"
    :align-text-bottom="true"
  ></image-banner-component>
  <statistic-component :items="AboutPageMock.statistics.items">
  </statistic-component>
  <section class="p-work-team">
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
  <c-t-a-banner
    :to="AboutPageMock.ctaBanner.button.to"
    :label="AboutPageMock.ctaBanner.button.title"
    :link-type="AboutPageMock.ctaBanner.button.linkType"
    :title="AboutPageMock.ctaBanner.title"
    :buttonText="AboutPageMock.ctaBanner.buttonText"
  ></c-t-a-banner>
</template>
