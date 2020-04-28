<template lang="html">
  <div>
    <h1>GUESS WHO?</h1>
    <img class="mystery-image" :src="questionMark">
    <game-board v-if="characters.length" :characters="characters"></game-board>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';
import questionMark from '@/assets/avatars/question_mark.jpg';

export default {
  name: 'app',
  data() {
    return {
      characters: [],
      choices: [],
      questionMark: questionMark,
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
  },
  components: {
    'game-board': GameBoard
  }
}
</script>

<style lang="css" scoped>
.mystery-image {
  width: 80px;
}
</style>
