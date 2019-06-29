<template lang="html">
  <div>
    <router-link v-bind:to="{ name: 'film-view' }">All Films</router-link> |
    <router-link v-bind:to="{ name: 'favourite-view' }">Favourites</router-link> | 
    <router-link v-bind:to="{ name: 'watched-view' }">Watched already</router-link>
</div>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style lang="css" scoped>
</style>
