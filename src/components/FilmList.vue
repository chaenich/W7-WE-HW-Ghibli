<template lang="html">
  <div>
    <ul>
      <div class="film-list-container">
        <film-item v-for="film in films" v-bind:film="film"></film-item>
      </div>
        <item-detail v-bind:film="selectedFilm"></item-detail>
    </ul>

  </div>
</template>

<script>
import FilmItem from "@/components/FilmItem.vue"
import ItemDetail from "@/components/ItemDetail"

export default {
  name: "film-list",
  props: [ "films", "selectedFilm" ],
  components: {
    "film-item": FilmItem,
    "item-detail": ItemDetail
  }
}
</script>

<style lang="css" scoped>

  .film-list-container {
    width: 460px;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    border-color: lightgreen;
    padding: 10px;
    height: 190px;
    overflow: scroll;
  }
</style>
