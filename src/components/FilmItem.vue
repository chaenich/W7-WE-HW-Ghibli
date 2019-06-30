<template lang="html">
  <div class="film-entry-container">
    <div class="film-entry">
      <li class="film-item" v-on:click="handleSelectClick">{{ film.title }}</li>
    </div>
    <div class="button-container">
      <button class="button" v-on:click="handleFaveClick"> Add to Favourites</button>
      <button class="button" v-on:click="handleWatchedClick"> Add to Watched List</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: 'film-item',
  props: [ "film" ],
  methods: {
    handleFaveClick() {
      eventBus.$emit("fave-button-clicked", this.film );
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

  .film-entry-container {
    width: 450px;
    border-color: lightgreen;
  }

  .film-entry {
    width: 200px;
    float: left;
  }

  .button-container {
    float: right;
  }

  .button:hover {
    background-color: lightgreen;
  }
</style>
