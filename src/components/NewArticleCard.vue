<script setup>
import Card from "./Card.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/new" style="text-decoration: none">
    <Card class="card-link">
      <h1>Add New Article</h1>
    </Card>
  </RouterLink>
</template>

<style scoped>
.card-link {
  justify-content: center;
  text-align: center;
  background-color: #36ad6a;
  color: white;
}

.card-link:hover {
  cursor: pointer;
}
</style>
