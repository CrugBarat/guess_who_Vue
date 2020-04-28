<template lang="html">
  <div>
    <p v-for="character in characters">{{character.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'game-board',
  props: ['characters']
}
</script>

<style lang="css" scoped>
</style>
