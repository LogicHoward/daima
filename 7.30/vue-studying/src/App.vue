<script setup>
import { RouterLink, RouterView } from "vue-router";
import navigation from "./views/navigation.vue";
</script>

<template>
  <navigation />
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  width: 80%;
  height: 100%;
  float: right;
  text-align: center;

  /* background-color: aquamarine; */
}
</style>
