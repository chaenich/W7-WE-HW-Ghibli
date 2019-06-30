<template lang="html">
  <div>
    <film-list v-bind:films="films"></film-list>
  </div>

</template>

<script>
import FilmList from "@/components/FilmList.vue"

export default {
  name: "film-view",
  props: [ "films" ],
  components: {
    "film-list": FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
