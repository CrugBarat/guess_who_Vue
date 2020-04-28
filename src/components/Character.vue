<template lang="html">
  <p class="character" v-on:click="handleClick()">{{character.name}}</p>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: 'character',
  props: ['character'],
  methods: {
    handleClick() {
      eventBus.$emit('character-selected', this.character)
    }
  }
}
</script>

<style lang="css" scoped>
p:hover {
  cursor: pointer;
}

.character {
    border-style: solid;
    width: 23%;
    height: 75px;
}
</style>
