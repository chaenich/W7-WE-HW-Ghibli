<template lang="html">
  <div>
    <film-list v-bind:films="favourites"></film-list>
  </div>
</template>

<script>
import FilmList from "@/components/FilmList.vue"

export default {
  name: "favourite-view",
  props: [ "favourites" ],
  components: {
    "film-list": FilmList
}
}
</script>

<style lang="css" scoped>
</style>
