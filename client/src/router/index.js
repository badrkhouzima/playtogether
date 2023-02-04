import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DistrictSelected from "../views/DistrictSelected.vue";
import RegisteredParentHome from "@/views/RegisteredParentHome.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/districtselected/:district",
    name: "districtselected",
    component: DistrictSelected,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/registeredParentHome",
    name: "registeredParentHome",
    component: RegisteredParentHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
