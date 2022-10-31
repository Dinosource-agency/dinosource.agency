<script setup>
import LinkComponent from "@/components/base/LinkComponent.vue";
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const projectName = props.project.name.toString();
</script>
<template>
  <div class="o-project-showcase-model">
    <link-component
      title="All Projects"
      link-type="internal"
      class="o-project-showcase-model__link"
      :to="`/work/${projectName}`"
    >
      <img class="o-project-showcase-model__image" :src="props.image" />
    </link-component>
  </div>
</template>
