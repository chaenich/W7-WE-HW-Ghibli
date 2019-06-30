<template lang="html">
  <div>
    <p>Please select which list to see or click on film name for more details</p>
    <p></p>
    <nav-bar></nav-bar>
    <router-view v-bind:films="films" v-bind:favourites="favourites" v-bind:watched="watched"></router-view>
    <item-detail v-bind:film="selectedFilm"></item-detail>
  </div>
</template>

<script>
import {eventBus} from "./main.js"
import NavBar from "@/components/NavBar"
import ItemDetail from "@/components/ItemDetail"

export default {
  name: "app",
  data() {
    return {
      films: [],
      favourites: [],
      watched: [],
      selectedFilm: null
    }
  },
  mounted () {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(data => this.films = data)
    eventBus.$on("fave-button-clicked", film => this.favourites.push(film))
    eventBus.$on("watched-button-clicked", film => this.watched.push(film))
    eventBus.$on("film-selected", film => this.selectedFilm = film)
  },
  components: {
    "nav-bar": NavBar,
    "item-detail": ItemDetail
  }
}
</script>

<style lang="css" scoped>
</style>
