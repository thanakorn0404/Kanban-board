import { createWebHistory, createRouter } from "vue-router";

import submiss from "@/views/sub.vue";
import info from "@/views/duedate.vue";
import Login from "@/views/Login.vue";
import HomeView from "@/views/HomeView.vue";
import Register from "@/views/Register.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/submiss", name: "submission", component: submiss },
  { path: "/info", name: "info", component: info },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
