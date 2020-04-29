<template lang="html">
  <div>
    <div class="logo-container">
      <img class="logo" src="./assets/logo.png">
    </div>
    <game-board v-if="characters.length" :characters="characters"></game-board>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';

export default {
  name: 'app',
  data() {
    return {
      characters: [],
      choices: []
    }
  },
  mounted() {
    const baseUrl = "https://codeclan-guess-who.herokuapp.com/api/"

    const characterPromise = fetch(baseUrl + 'characters').then(res => res.json());
    const choicePromise = fetch(baseUrl + 'choices').then(res => res.json());

    Promise.all([characterPromise, choicePromise])
    .then(data => {
      this.characters = data[0]
      this.choices = data[1]
    });
  },
  components: {
    'game-board': GameBoard
  }
}
</script>

<style lang="css" scoped>

  .logo-container {
    display: block;
    text-align: center;
  }

  .logo {
    display: inline-block;
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

<style>
  body {
    cursor: url('./assets/cursor.png'), auto;
  }

</style>
