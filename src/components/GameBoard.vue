<template lang="html">
  <div>
    <div>
      <mystery-card v-if="mysteryCard" :mysteryCard="mysteryCard" hidden></mystery-card>
    </div>
    <div class="choices-container">
      <div class="choices">
        <user-choices-list :choices="choices"></user-choices-list>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid">
        <div class="characters">
          <character v-for="character in editedCharacters" :character="character"></character>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Character from './Character.vue';
import MysteryCard from './MysteryCard.vue';
import ChoicesList from './ChoicesList.vue';
import {eventBus} from '../main.js';

export default {
  name: 'game-board',
  props: ['characters', 'choices'],
  data() {
    return {
      selectedCharacter: null,
      mysteryCard: this.characters[this.randomIndex()],
      editedCharacters: this.characters,
      selectedChoice: null
    }
  },
  components: {
    'character': Character,
    'mystery-card': MysteryCard,
    'user-choices-list': ChoicesList
  },
  mounted () {
    eventBus.$on('character-selected', (character) => {
      this.selectedCharacter = character;
      this.isMysteryCard(character);
    });

    eventBus.$on('choice-selected', (choice) => {
      this.selectedChoice = choice;
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
.grid-container {
  display: block;
  text-align: center;
}

.grid {
  display: inline-block;
  width: 90%;
}

.characters {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1vw;
}

.choices-container {
  display: block;
  text-align: center;
}

.choices {
  width: 60%;
  display: inline-block;
}

</style>
