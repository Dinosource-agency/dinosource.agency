<script setup>
import { WorkListingComponent, CardComponent } from "@/components";
import { WorkDetailMock } from "@/mocks";
</script>
<template>
  <main>
    <work-listing-component
      class="p-work__listing--desktop"
      :projects="WorkDetailMock.projects"
    ></work-listing-component>
    <section class="p-work__listing--tablet">
      <div class="u-layout-constrain">
        <div class="p-about-team__grid">
          <card-component
            v-for="card in WorkDetailMock.projects"
            :key="card.slug"
            :title="card.title"
            :image-alt="card.alt"
            :image-src="card.logo"
            :card-title="card.title"
            :card-tags="card.tags"
            class="p-about-team__grid__card"
          >
          </card-component>
        </div>
      </div>
    </section>
  </main>
</template>
