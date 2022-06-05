<script setup>
import { onMounted, ref } from "vue";
import { getArticlesFromStorage } from "./../utils";
import { useRoute } from "vue-router";
import { NButton, NSpace } from "naive-ui";
import { ArrowBack } from "@vicons/ionicons5";
import { VueShowdown } from "vue-showdown";

const article = ref(undefined);
const route = useRoute();

onMounted(async () => {
  if (route.query.id !== "") {
    const idInNumber = Number.parseInt(route.query.id);
    const articles = (await getArticlesFromStorage()) || [];
    if (idInNumber !== Number.NaN && idInNumber < articles.length) {
      article.value = articles[idInNumber];
    }
  }
});
</script>

<template>
  <main>
    <nav>
      <NSpace>
        <RouterLink to="/">
          <NButton quaternary circle>
            <template #icon>
              <ArrowBack />
            </template>
          </NButton>
        </RouterLink>
        <h1>{{ article?.title || '' }}</h1>
      </NSpace>
    </nav>
    <VueShowdown
      v-bind:markdown="article?.markdownValue"
      style="height: calc(100vh - 75px); padding: 1rem"
      flavor="github"
    />
  </main>
</template>

<style>
nav {
  height: 75px;
  padding: 1rem;
  background-color: #36ad6a;
  color: white;
}

nav svg {
  color: white;
}
</style>
