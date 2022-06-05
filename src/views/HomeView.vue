<script setup>
import { onMounted, ref } from "vue";
import ArticleCard from "./../components/ArticleCard.vue";
import NewArticleCard from "../components/NewArticleCard.vue";
import { getArticlesFromStorage, removeArticleFromStorage } from "./../utils";

const articleList = ref([]);

onMounted(async () => {
  articleList.value = await getArticlesFromStorage();
});

const deleteArticle = async (id) => {
  const newList = await removeArticleFromStorage(id);
  articleList.value = newList;
};
</script>

<template>
  <main>
    <h1>My Articles</h1>
    <div class="scroll-container">
      <div class="card-container">
        <NewArticleCard />
        <ArticleCard
          v-for="(article, index) in articleList"
          :key="index"
          :title="article.title"
          :description="article.description"
          :date="article.date"
          :id="index"
          @deleteArticle="deleteArticle"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.scroll-container {
  width: 100%;
  overflow-x: auto;
}

.card-container {
  display: flex;
  gap: 100px;
  width: max-content;
  margin: 70px 150px;
}

::-webkit-scrollbar {
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 100vh;
}

::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 100vh;
  transition: all 0.2s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #36ad6a;
}

::-webkit-scrollbar-button:start:increment,
::-webkit-scrollbar-button:end:increment {
  width: 100px;
  display: block;
  background: transparent;
}
</style>
