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
];

const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
