import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import HomeAllPets from "../components/HomeAllPets";
import SinglePet from "../components/SinglePet";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    children: [
      {
        path: "allPets",
        name: "allPets",
        component: HomeAllPets,
      },
      {
        path: "pet/:name",
        name: "pet",
        component: SinglePet,
      },
      {
        path: "",
        name: "default",
        component: HomeAllPets,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
