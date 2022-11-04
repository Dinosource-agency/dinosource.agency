<script setup>
import { WorkListingComponent, CardGridComponent } from "@/components";
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
      <card-grid-component :cards="WorkDetailMock.projects"></card-grid-component>
      </div>
    </section>
  </main>
</template>
