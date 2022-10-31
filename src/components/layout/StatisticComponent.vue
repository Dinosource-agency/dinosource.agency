<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="o-statistic-component">
    <div
      class="o-statistic-component__wrapper"
      v-for="item in props.items"
      v-bind:key="item.id"
    >
      <div class="o-statistic-component__wrapper__item">
        <span class="o-statistic-component__wrapper__item__value">{{
          item.value
        }}</span>
        <span class="o-statistic-component__wrapper__item__description">{{
          item.description
        }}</span>
      </div>
    </div>
  </div>
</template>
