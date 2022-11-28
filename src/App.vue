<script setup>
import { RouterLink, RouterView } from "vue-router";
import CardContact from "@/components/CardContact/index.vue";
import CardNavbar from "@/components/CardNavbar/index.vue";
</script>

<template>
  <main>
    <CardContact />
    <div class="main-content">
      <CardNavbar />
      <RouterView />
    </div>
  </main>
</template>
