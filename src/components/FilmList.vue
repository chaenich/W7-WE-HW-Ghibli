<template lang="html">
  <div>
    <ul>
      <film-item v-for="film in films" v-bind:film="film"></film-item>
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
</style>
