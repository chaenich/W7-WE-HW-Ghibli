<template lang="html">
  <div v-if="film">
    <p>Title: {{ film.title }}</p>
    <p>Description: {{ film.description }}</p>
    <p>Director: {{ film.director }}</p>

    <p>Producer: {{ film.producer }}</p>
    <p>Release Date: {{ film.release_date }}</p>
    <p>Rotten Tonmatoes score:{{ film.rt_score }}</p>
  </div>
</template>

<script>
export default {
  name: "item-detail",
  props: [ "film"]
}
</script>

<style lang="css" scoped>
</style>
