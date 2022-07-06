import { createRouter, createWebHashHistory } from "vue-router";

const publicrRoutes = [
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
