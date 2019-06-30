<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>
    <router-view v-bind:films="films" v-bind:selectedFilm="selectedFilm" v-bind:favourites="favourites" v-bind:watched="watched"></router-view>
  </div>
</template>

<script>
import {eventBus} from "./main.js"
import NavBar from "@/components/NavBar"

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
    "nav-bar": NavBar
  }
}
</script>

<style lang="css" scoped>

#app {
  font-family: arial;
}
</style>
