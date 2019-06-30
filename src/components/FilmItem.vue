<template lang="html">
  <div class="film-list-container">
    <div class="film-list">
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
    flex: row;
  }

  .film-list-container {
    width: 450px;
  }

  .film-list {
    width: 200px;
    float: left;
  }

  .button-container {
    float: right;
  }

  /* .button {
    border-color: lightgreen;
    margin-right: 5px;
    margin-left: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 5px;
  } */

  .button:hover {
    background-color: lightgreen;
  }
</style>
