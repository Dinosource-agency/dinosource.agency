<script setup>
import WorkListingComponent from "@/components";
import { WorkDetailMock } from "@/mocks";
</script>
<template>
  <main>
    <work-listing-component
      :projects="WorkDetailMock.projects"
    ></work-listing-component>
  </main>
</template>
