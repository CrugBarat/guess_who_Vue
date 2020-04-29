<template lang="html">
  <div class="character" v-on:click="handleClick()">
    <img :src="getImage(character)">
  </div>
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

  img {
    height: 250px;
  }

  img:hover {
    opacity: 70%;
    padding-bottom: 10%;
  }
</style>
