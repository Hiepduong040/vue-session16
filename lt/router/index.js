import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/contact", component: ContactView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
