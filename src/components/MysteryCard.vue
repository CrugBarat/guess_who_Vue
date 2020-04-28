<template lang="html">
  <div>
    <p v-if="characters" v-for="character in chunkedCharacters(randomIndex())">{{character.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'mystery-card',
  props: ['characters'],
  methods: {
    chunkedCharacters(index) {
      let characters = this.characters;
      let i, j, chunkedArray = [], chunk = 1;
      for (i=0, j=0; i < characters.length; i += chunk, j++) {
        chunkedArray[j] = characters.slice(i,i+chunk);
      }
      return chunkedArray[index];
    },
    randomIndex() {
      return Math.floor(Math.random() * 23)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
