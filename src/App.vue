<template lang="html">
  <div>
    <h1>GUESS WHO?</h1>
    <mystery-card :characters="characters"></mystery-card>
    <img class="mystery-image" :src="questionMark">
    <game-board :characters="characters"></game-board>
  </div>
</template>

<script>
import MysterCard from '@/components/MysteryCard.vue';
import GameBoard from '@/components/GameBoard.vue';
import questionMark from '@/assets/avatars/question_mark.jpg'

export default {
  name: 'app',
  data() {
    return {
      characters: [],
      choices: [],
      questionMark: questionMark
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
    'mystery-card': MysterCard,
    'game-board': GameBoard
  }
}
</script>

<style lang="css" scoped>
.mystery-image {
  width: 25%;
}
</style>
