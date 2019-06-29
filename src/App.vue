<template lang="html">
  <div>
    <nav-bar></nav-bar>
    <router-view v-bind:films="films" v-bind:favourites="favourites" v-bind:watched="watched"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
  name: "app",
  data() {
    return {
      films: [],
      favourites: [],
      watched: []
    }
  },
  mounted () {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(data => this.films = data)
  },
  components: {
    "nav-bar": NavBar
  }
}
</script>

<style lang="css" scoped>
</style>
