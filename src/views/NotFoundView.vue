<script setup>
import { DynamicHeadingComponent, LinkComponent } from "@/components";
import { useGtm } from "@gtm-support/vue-gtm";
useGtm();
</script>
<template>
  <section>
    <div class="p-error__wrapper u-layout-constrain">
      <span class="h2 p-error__subtitle">404</span>
      <DynamicHeadingComponent
        class="p-error__title"
        heading-style="h1"
        heading-type="h1"
        >PAGE NOT FOUND</DynamicHeadingComponent
      >
      <p class="p-error__paragraph">
        Just like your dad hasn’t been found yet. We can get you back to home
        with the button below if you prefer that.
      </p>
      <link-component title="Home" to="/" class="p-error__button">
        <button class="a-button a-button--primary">Home</button>
      </link-component>
    </div>
  </section>
</template>
