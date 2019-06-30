<template lang="html">
  <div>
    <film-list v-bind:films="films"></film-list>
    <item-detail v-bind:film="selectedFilm"></item-detail>
  </div>

</template>

<script>
import FilmList from "@/components/FilmList.vue"
import ItemDetail from "@/components/ItemDetail"

export default {
  name: "film-view",
  props: [ "films", "selectedFilm" ],
  components: {
    "film-list": FilmList,
    "item-detail": ItemDetail
  }
}
</script>

<style lang="css" scoped>
</style>
