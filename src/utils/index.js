const ARTICLE_STORAGE_KEY = "myArticles";

export const getArticlesFromStorage = async () => {
  return await JSON.parse(localStorage.getItem(ARTICLE_STORAGE_KEY));
};

export const saveArticlesToStorage = (articles) => {
  localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(articles));
};

export const removeArticleFromStorage = async (index) => {
  const existingArticles = await getArticlesFromStorage();
  existingArticles.splice(index, 1);
  saveArticlesToStorage(existingArticles);
  return existingArticles;
};
