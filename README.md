# Vue 3 Workshop

### Agenda

1. What is Vue
2. Why do we use a framework
3. Process from code to website
4. Creating a Markdown Blog Editor

#### What is Vue
https://vuejs.org/guide/introduction.html#what-is-vue

#### Why do we use a frontend framework
- Reliable
- Faster Development
- Consistent?
- How do I choose between frameworks?

#### Process from code to website
- Node Project
  - package.json
  - node_modules
- Build Step
  - https://vitejs.dev/guide/why.html
  - https://webpack.js.org/
- Single Page Application
  - https://vue-heap.netlify.app/
- Vue Project Structure

### Coding Portion
1. Creating a Vue Project with NPM
https://vuejs.org/guide/quick-start.html#with-build-tools
```sh
npm init vue@latest .

√ Package name: ... vue-heap
√ Add TypeScript? ... No
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... No
√ Add Vitest for Unit Testing? ... No
√ Add Cypress for both Unit and End-to-End testing? ... Yes
√ Add ESLint for code quality? ... No

npm install
npm run dev

# install external libraries
npm i vue-showdown
npm i -D naive-ui
npm i -D @vicons/ionicons5
npm i vue3-ace-editor
```

https://vue-showdown.js.org/guide/

2. Clean up Files
- clear assets folder
- clear components folder
- delete routes
- Clean up App.vue

3. Create Views and update Router File
- ArticleView
- HomeView
- NewArticleView
- Update router/index.js

4. New Article View
- Creating Utils Functions
- Using Component Library
- Vue Ref

5. Home View
- Creating Small Components
- Vue onMounted, defineEmits, defineProps

6. Article View