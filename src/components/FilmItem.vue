<template lang="html">
  <div>
    <li>{{ film.title }}</li>
  </div>

</template>

<script>
export default {
  name: 'film-item',
  props: [ "film" ]
}
</script>

<style lang="css" scoped>
  li {
    list-style-type: none;
  }
</style>
