<template lang="html">
  <div>
    <mystery-card class="mystery" v-if="mysteryCard" :mysteryCard="mysteryCard" hidden></mystery-card>
    <character v-for="character in editedCharacters" :character="character"></character>
  </div>
</template>

<script>
import Character from './Character.vue';
import MysteryCard from './MysteryCard.vue';
import {eventBus} from '../main.js';

export default {
  name: 'game-board',
  props: ['characters'],
  data() {
    return {
      selectedCharacter: null,
      mysteryCard: this.characters[this.randomIndex()],
      editedCharacters: this.characters
    }
  },
  components: {
    'character': Character,
    'mystery-card': MysteryCard
  },
  mounted () {
    eventBus.$on('character-selected', (character) => {
      this.selectedCharacter = character;
      this.isMysteryCard(character);
    });
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * 23)
    },
    isMysteryCard(character) {
      if(character === this.mysteryCard) {
        alert (`YOU WON! You picked ${character.name}!`)
      } else {
        this.removeCharacter(character);
        alert ('Please try again!')
      }
    },
    removeCharacter(selectedCharacter) {
      let characterIndex = this.editedCharacters.indexOf(selectedCharacter);
      this.editedCharacters.splice(characterIndex, 1);
    }
    }
  }
</script>

<style lang="css" scoped>
.mystery {
  border-style: solid;
}
</style>
