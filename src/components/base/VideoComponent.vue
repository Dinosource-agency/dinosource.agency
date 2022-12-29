<script setup>
import { useScriptTag } from "@vueuse/core";

//we need to use a composable to load the script tag
useScriptTag("https://player.vimeo.com/api/player.js");

//define the props
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});

const vimeoUrl = `https://player.vimeo.com/video/${props.videoId}?autoplay=1&loop=1&autopause=0&background=1&title=0&byline=0&portrait=0&api=1&player_id=player`;
</script>

<template>
  <div>
    <div style="padding: 66.67% 0 0 0; position: relative">
      <iframe
        :src="vimeoUrl"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="sweet16"
      ></iframe>
    </div>
  </div>
</template>
