<template lang="html">
  <div>
    <h1>GUESS WHO?</h1>
    <div class="container">
      <img class="mystery-image" :src="questionMark">
    </div>
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

h1 {
  text-align: center;
  font-size: 50px;
}

.container {
  display: block;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-left: 4vw;
  margin-left: 4vw;
  margin-top: 20px;
}

.mystery-image {
  display: inline-block;
  width: 80px;
  border-style: solid;
}
</style>
