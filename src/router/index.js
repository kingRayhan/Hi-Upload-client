import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import MyFiles from "../views/MyFiles.vue";
import auth from "../middlewares/auth";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/my-files",
    name: "my-files",
    component: MyFiles,
    meta: {
      middlewares: [auth],
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middlewares) next();

  to.meta.middlewares.forEach((middleware) => {
    middleware({ next, store });
  });
});

export default router;
