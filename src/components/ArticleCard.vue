<script setup>
import Card from "./Card.vue";
import { NButton } from "naive-ui";
import router from "./../router";
import { defineEmits } from "vue";

const emit = defineEmits(["deleteArticle"]);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "Card Title",
  },
  date: {
    type: String,
    default: "1 Dec 2022",
  },
  description: {
    type: String,
    default: "My somewhat long description",
  },
});

const goToArticle = () => {
  router.push({
    path: "/article",
    query: {
      id: props.id,
    },
  });
};
const deleteArticle = () => {
  emit("deleteArticle", props.id);
};
</script>

<template>
  <Card>
    <h1>{{ title }}</h1>
    <span>{{ date }}</span>
    <div class="description">{{ description }}</div>
    <NButton type="primary" @click="goToArticle">View</NButton>
    <NButton type="error" style="margin-top: 0.5rem" @click="deleteArticle"
      >Delete</NButton
    >
  </Card>
</template>

<style scoped>
.description {
  height: 100%;
  padding-top: 20px;
}
</style>
