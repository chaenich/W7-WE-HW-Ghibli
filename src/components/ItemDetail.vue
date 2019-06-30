<template lang="html">
  <div v-if="film">
    <div class="film-details">
      <p>Title: {{ film.title }}</p>
      <p>Description: {{ film.description }}</p>
      <p>Director: {{ film.director }}</p>
      <p>Producer: {{ film.producer }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <p>Rotten Tomatoes score:{{ film.rt_score }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-detail",
  props: [ "film"]
}
</script>

<style lang="css" scoped>

  .film-details {
    font-size: 13px;
    width: 460px;
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    border-color: lightgreen;
    margin: 40px;
  }
</style>
