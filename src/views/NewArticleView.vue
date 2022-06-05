<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import router from "./../router";
import { VueShowdown } from "vue-showdown";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/theme-chrome";
import {
  NForm,
  NInput,
  NButton,
  NFormItemGridItem,
  NGrid,
  NSpace,
  createDiscreteApi,
} from "naive-ui";
import { ArrowBack } from "@vicons/ionicons5";
import { getArticlesFromStorage, saveArticlesToStorage } from "./../utils";

const formRef = ref(null);
const formValue = ref({
  title: "",
  date: "",
  description: "",
  markdownValue: "",
});

const { message } = createDiscreteApi(["message"]);
const formRules = {
  title: {
    required: true,
    message: "Please input a title",
    trigger: "blur",
  },
  date: {
    required: true,
    message: "Please input a date",
    trigger: "blur",
  },
  description: {
    required: true,
    message: "Please input a description",
    trigger: "blur",
  },
};

const submitForm = (e) => {
  e.preventDefault();
  formRef.value.validate(async (errors) => {
    if (!errors) {
      const exisitingArticles = (await getArticlesFromStorage()) || [];
      saveArticlesToStorage([...exisitingArticles, formValue.value]);
      message.success("Article Created!");
      router.push("/");
    } else {
      message.error("Something is missing!");
    }
  });
};
</script>

<template>
  <nav>
    <NSpace>
      <RouterLink to="/">
        <NButton quaternary circle>
          <template #icon>
            <ArrowBack />
          </template>
        </NButton>
      </RouterLink>
      <h1>New Article</h1>
    </NSpace>
    <NButton @click="submitForm" color="#333">Submit</NButton>
  </nav>
  <main>
    <NForm
      ref="formRef"
      :model="formValue"
      label-placement="top"
      class="form-container"
      :rules="formRules"
    >
      <NGrid :span="24" :x-gap="24">
        <NFormItemGridItem label="Article Title" path="title" :span="8">
          <NInput
            type="text"
            placeholder="Title"
            v-model:value="formValue.title"
          />
        </NFormItemGridItem>

        <NFormItemGridItem label="Article Date" path="date" :span="8">
          <n-input type="date" placeholder="" v-model:value="formValue.date" />
        </NFormItemGridItem>
        <NFormItemGridItem
          label="Article Description"
          path="description"
          :span="8"
        >
          <n-input
            type="textarea"
            placeholder="Description"
            v-model:value="formValue.description"
          />
        </NFormItemGridItem>
      </NGrid>
    </NForm>
    <div class="header">Markdown</div>
    <div class="header">Preview</div>
    <v-ace-editor
      v-model:value="formValue.markdownValue"
      theme="chrome"
      style="height: 100%; font-size: 1.3rem"
    />
    <VueShowdown
      v-bind:markdown="formValue.markdownValue"
      style="height: 100%; padding: 1rem"
      flavor="github"
    />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 75px;
  padding: 1rem;
  background-color: #36ad6a;
  color: white;
}

main {
  height: calc(100vh - 75px);
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: repeat(2, 1fr);
}

nav svg {
  color: white;
}

.form-container {
  padding: 1.5rem;
  grid-column: span 2;
}

.header {
  padding: 1rem;
}

main > div {
  border-top: 1px rgb(224, 224, 230) solid;
}

main > div:nth-child(odd) {
  border-left: 1px rgb(224, 224, 230) solid;
}
</style>
