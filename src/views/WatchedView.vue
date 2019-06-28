<template lang="html">
  <div>
    <film-list v-bind:films="watched"></film-list>
  </div>
</template>

<script>
import FilmList from "@/components/FilmList"

export default {
  name: 'watched-view',
  props: [ "watched" ],
  components: {
    'film-list': FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
