<template lang="html">
  <div>
    <ul>
      <film-item v-for="film in films" v-bind:film="film"></film-item>
    </ul>

  </div>
</template>

<script>
import FilmItem from "@/components/FilmItem.vue"

export default {
  name: "film-list",
  props: [ "films" ],
  components: {
    "film-item": FilmItem
  }
}
</script>

<style lang="css" scoped>
</style>
