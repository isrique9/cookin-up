import { createRouter, createWebHistory } from "vue-router";
import IngredientsPage from "@/views/IngredientsPage.vue";

const routes = [
  {
    path: "/",
    name: "ingredients",
    component: IngredientsPage,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
