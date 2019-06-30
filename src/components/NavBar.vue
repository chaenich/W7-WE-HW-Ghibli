<template lang="html">
  <div class="nav-bar">
    <router-link v-bind:to="{ name: 'film-view' }">All Films</router-link>
    <router-link v-bind:to="{ name: 'favourite-view' }">Favourites</router-link>
    <router-link v-bind:to="{ name: 'watched-view' }">Watched already</router-link>
</div>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style lang="css" scoped>

.nav-bar {
  align-content: center;
  display: flex;
  margin-left: 10%;
  margin-right: 20%;
}

a {
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font: bold 30px;
  border-radius: 10px;
  background-color: lightgreen;
}
</style>
