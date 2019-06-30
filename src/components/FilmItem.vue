<template lang="html">
  <div>
    <li v-on:click="handleSelectClick">{{ film.title }}</li>
    <button v-on:click="handleFaveClick"> Add to Favourites</button>
    <button v-on:click="handleWatchedClick"> Add to Watched List</button>
  </div>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: 'film-item',
  props: [ "film" ],
  methods: {
    handleFaveClick() {
      eventBus.$emit("fave-button-clicked", this.film);
    },
    handleWatchedClick() {
      eventBus.$emit("watched-button-clicked", this.film);
    },
    handleSelectClick() {
      eventBus.$emit("film-selected", this.film);
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    list-style-type: none;
  }
</style>
