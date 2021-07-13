import { createApp } from "vue";
import axios from "axios";
import Root from "./Root.vue";
import store from "./store";
import router from "./router";
import "./assets/app.css";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://hiupload-api.test";

store.dispatch("auth/fetchAuthenticatedUser").then(() => {
  const app = createApp(Root);
  app.use(store);
  app.use(router);
  app.mount("#app");
});
