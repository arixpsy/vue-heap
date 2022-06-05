<script setup>
import { RouterView } from "vue-router";
import { NLayout } from "naive-ui";
</script>

<template>
  <NLayout>
    <RouterView />
  </NLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
