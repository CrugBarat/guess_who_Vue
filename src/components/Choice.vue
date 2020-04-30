<template lang="html">
  <div class="buttons">
    <button v-if="choice !== '_id'" v-on:click="handleClick">{{choice}}?</button>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'user-choice',
  props: ['choice'],
  methods: {
    handleClick() {
      eventBus.$emit('choice-selected', this.choice)
    }
  }
}
</script>

<style lang="css" scoped>
.buttons {
  width: 11vw;
}

button {
  background-color: #065094;
  color: white;
  width: 10vw;
  height: 5vh;
  border-radius: 5%;
  margin: 0.2vw;
  font-size: 1.4vw;
}

button:hover {
  background-color: #D2202F;
}

button:focus {
  outline: none;
}
</style>
