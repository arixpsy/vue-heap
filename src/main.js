import { createApp } from "vue";
import { VueShowdownPlugin } from "vue-showdown";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(VueShowdownPlugin, {
  flavor: "github",
  options: {
    emoji: false,
  },
});

app.mount("#app");
