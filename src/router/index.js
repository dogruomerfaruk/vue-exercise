import { createRouter, createWebHistory } from "vue-router";
import Details from "../views/Details.vue";
import Users from "../views/Users.vue";

const routes = [
  {
    path: "/UserDetails/:id",
    name: "UserDetails",
    component: Details,
  },
  {
    path: "/",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
