<template lang="html">
  <div>
    <h1>GUESS WHO?</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      characters: [],
      choices: []
    }
  },
  methods: {
    buildUrl(path) {
      const basUrl = "https://codeclan-guess-who.herokuapp.com/api/"
      return basUrl + path
    },

    getCharacters(path) {
      let url = this.buildUrl(path);
      fetch(url).then(res => res.json())
      .then(data => this.characters = data)
    },

    getChoices(path) {
      let url = this.buildUrl(path);
      fetch(url).then(res => res.json())
      .then(data => this.choices = data)
    }
  },
  mounted() {
    this.getCharacters('characters');
    this.getChoices('choices');
  }
}
</script>

<style lang="css" scoped>
</style>
