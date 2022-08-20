import { createRouter, createWebHistory } from "vue-router";
import NavLogin from "../views/navigation/NavLogin.vue";
import NavRatings from "../views/navigation/NavRatings.vue";
import NavTrailers from "../views/navigation/NavTrailers.vue";
import NavWatchlist from "../views/navigation/NavWatchlist.vue";
import MainSection from '../views/MainSection.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: NavLogin,
    },
    {
      path: "/ratings",
      component: NavRatings,
    },
    {
      path: "/trailers",
      component: NavTrailers,
    },
    {
      path: "/watchlist",
      component: NavWatchlist,
    },
    {
      path: "/home",
      component: MainSection,
    }, 
  ],
});

export default router;
