// import vue router
import { createRouter, createWebHistory } from "vue-router";
//importer
import Home from "../components/Home.vue";

//define a routes
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Home,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Home,
  },
  {
    path: "/connect",
    name: "connect",
    component: Home,
  },
  {
    path: "/timeline",
    name: "timeline",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
