<template lang="html">
  <p class="character" v-on:click="handleClick()"><img :src="getImage(character)"></p>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: 'character',
  props: ['character'],
  data() {
    return {
      characterImage: null
    }
  },
  methods: {
    handleClick() {
      eventBus.$emit('character-selected', this.character)
    },
    getImage(character) {
      return require('@/assets/avatars/' + character.name + '.png');
    }
  }
}
</script>

<style lang="css" scoped>
p:hover {
  cursor: pointer;
}

img {
  height: 250px;
}
</style>
