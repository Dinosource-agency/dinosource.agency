<script setup>
import WorkListing from "@/components/layout/WorkListing.vue";
const workMockData = {
  projects: [
    {
      name: "Project1",
      image: "https://picsum.photos/400/400",
      tags: ["Branding", "Development", "Marketing"],
      link: "/work/project1",
    },
    {
      name: "Project2",
      image: "https://picsum.photos/400/400",
      tags: ["Branding"],
      link: "/work/project2",
    },
    {
      name: "Project3",
      image: "https://picsum.photos/400/400",
      tags: ["Marketing"],
      link: "/work/project3",
    },
    {
      name: "Project4",
      image: "https://picsum.photos/400/400",
      tags: ["Branding", "Development", "Marketing"],
      link: "/work/project4",
    },
    {
      name: "Project5",
      image: "https://picsum.photos/400/400",
      tags: ["Branding", "Development", "Marketing"],
      link: "/work/project5",
    },
    {
      name: "Project6",
      image: "https://picsum.photos/400/400",
      tags: ["Branding", "Marketing"],
      link: "/work/project6",
    },
  ],
};
</script>
<template>
  <main>
    <work-listing :projects="workMockData.projects"></work-listing>
  </main>
</template>
