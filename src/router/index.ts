import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
const routers = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/demos/home.vue"),
  },
  {
    path: "/realtime",
    name: "RealTime",
    component: () => import("../views/demos/realtime.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () => import("../views/demos/weather.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: routers,
});
