import { createRouter, createWebHistory } from "vue-router";
import NavLogin from "../views/navigation/LoginView.vue";
import NavRatings from "../views/navigation/RatingsView.vue";
import NavTrailers from "../views/navigation/TrailersView.vue";
import NavWatchlist from "../views/navigation/WatchlistView.vue";
import MainSection from "../views/MainSection.vue";

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
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

export default router;
