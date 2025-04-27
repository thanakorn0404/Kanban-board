import { createWebHistory, createRouter } from "vue-router";

import ex from "@/views/Index.vue";
import login from "@/views/login.vue";
import register from "@/views/register.vue";
import submiss from "@/views/sub.vue";
import info from "@/views/duedate.vue";

const routes = [
  { path: "/ex", name: "ex", component: ex },
  { path: "/login", name: "login", component: login },
  { path: "/register", name: "register", component: register },
  { path: "/submiss", name: "submission", component: submiss },
  {path: "/info", name: "info", component: info},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
