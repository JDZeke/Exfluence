import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Create from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
];

const router = new VueRouter({
  routes,
  // gets rid of the '#' in the url
  mode: "history",
});

export default router;
