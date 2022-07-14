import { createRouter, createWebHashHistory } from "vue-router";

const publicrRoutes = [
  {
    path: "/",
    name: "Layout",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../views/layout/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicrRoutes,
});

export default router;
