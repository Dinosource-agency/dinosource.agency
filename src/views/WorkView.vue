<script setup>
import {
  WorkListingComponent,
  CardComponent,
  LinkComponent,
} from "@/components";
import { WorkDetailMock } from "@/mocks";
import { useGtm } from "@gtm-support/vue-gtm";
useGtm();
</script>
<template>
  <main>
    <work-listing-component
      class="p-work__listing--desktop"
      :projects="WorkDetailMock.projects"
    ></work-listing-component>
    <section class="p-work__listing--tablet">
      <div class="u-layout-constrain">
        <div class="p-work__grid">
          <link-component
            v-for="card in WorkDetailMock.projects"
            :key="card.slug"
            :title="card.title"
            :to="`/work/${card.slug}`"
            class="p-work__grid__card"
          >
            <card-component
              :title="card.title"
              :image-alt="card.alt"
              :image-src="card.logo"
              :card-title="card.title"
              :card-tags="card.tags"
              class="p-work__grid__card"
            >
            </card-component>
          </link-component>
        </div>
      </div>
    </section>
  </main>
</template>
