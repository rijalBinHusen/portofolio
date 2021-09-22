// import vue router
import { createRouter, createWebHistory } from "vue-router";
//importer
import Home from "../components/Home.vue";
import Dock from "../components/Dock.vue";

//define a routes
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/dock",
        name: "dock",
        component: Dock
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})

export default router;