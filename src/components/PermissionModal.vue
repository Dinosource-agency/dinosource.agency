<template>
  <div class="o-permission-modal">
    <span class="o-permission-modal__title">Orientation permission</span>
    <p class="o-permission-modal__description">
      We need to access the orientations of your device. Don’t worry it’s not to
      track you or something.
    </p>
    <div class="o-permission-modal__buttons">
      <button class="a-button a-button--deny" @click="$emit('cancel')">
        Cancel
      </button>
      <button class="a-button a-button--allow" @click="$emit('allow')">
        Allow
      </button>
    </div>
  </div>
</template>
<script setup>
defineEmits(["cancel", "allow"]);
</script>
