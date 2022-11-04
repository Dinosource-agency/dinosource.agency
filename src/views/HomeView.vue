<script setup>
import {
  DinoHeadHero,
  MissionTextComponent,
  ProjectShowcaseComponent,
  CardGridComponent,
  DynamicHeadingComponent,
  LinkComponent,
} from "@/components";
import { WorkDetailMock } from "@/mocks";
</script>

<template>
  <main>
    <dino-head-hero></dino-head-hero>
    <mission-text-component
      size="big"
      backgroundColor="green"
      heading-style="h2"
      heading-type="h2"
      alignment="center"
      title="WE PRAY FOR GREAT DESIGN, AMAZING DEVELOPMENT AND MEME-TECHNO"
    ></mission-text-component>

    <!-- project showcase -->
    <project-showcase-component
      class="p-home__project-showcase"
      :project-showcase="WorkDetailMock.projects.slice(0, 6)"
    ></project-showcase-component>

    <!-- card grid -->
    <section class="p-home__projects">
      <div class="u-layout-constrain">
        <div class="p-home__projects__navigation">
          <dynamic-heading-component heading-style="h3" heading-type="h2">
            SELECTED WORK
          </dynamic-heading-component>
          <link-component title="Work" to="/work">
            <div class="p-home__projects__navigation__link">
              <span>all projects</span>
              <img
                src="/images/icons/arrow-right.svg"
                alt="icon of arrow that points right"
              />
            </div>
          </link-component>
        </div>
        <card-grid-component
          :cards="WorkDetailMock.projects.slice(0, 3)"
        ></card-grid-component>
      </div>
    </section>
  </main>
</template>
