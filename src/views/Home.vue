<template lang="html">
  <div>
    <div class="app-conatiner">
      <div class="rules-container">
        <router-link class="link" :to="{name: 'rules'}">
          <img class="rules" :src="rules">
        </router-link>
      </div>
      <div class="logo-container">
        <router-link class="link" :to="{name: 'home'}">
        <img class="logo" :src="logo">
        </router-link>
      </div>
      <game-board v-if="characters.length" :characters="characters"></game-board>
    </div>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue';
import logo from '../assets/logo.png';
import rules from '../assets/rules.png';

export default {
    name: 'app',
    data() {
      return {
        characters: [],
        choices: [],
        logo: logo,
        rules: rules
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

  .rules-container {
    width: 80px;
    float: left;
    margin: 5px;
  }

  .rules {
    width: 80px;
  }

  .app-conatiner {
    margin: 60px;
    background-color: white;
  }

  .logo-container {
    display: block;
    text-align: center;
  }

  .logo {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 40px;
    float: left;
    margin-left: 20%;
    width: 40vw;
  }

  .link:hover {
    cursor: url('../assets/cursor.png'), auto;
  }

</style>
