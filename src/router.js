import Vue from "vue";
import Router from "vue-router";
import FilmView from "@/views/FilmView";
import FavouriteView from "@/views/FavouriteView";
import WatchedView from "@/views/WatchedView";

Vue.use(Router);

const router = new Router( {
  routes: [
    {
      path: "/films",
      name: "film-view",
      component: FilmView
    },
    {
      path: "/favourites",
      name: "favourite-view",
      component: FavouriteView
    },
    {
      path: "/watched",
      name: "watched-view",
      component: WatchedView
    }
  ]
})

export default router;
