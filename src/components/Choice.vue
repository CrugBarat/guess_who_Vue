<template lang="html">
  <div class="buttons">
    <button v-if="choice !== '_id'">{{choice}}?</button>
  </div>
</template>

<script>
export default {
  name: 'user-choice',
  props: ['choice']
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
  font-size: 22px;
}

button:hover {
  background-color: #D2202F;
}

button:focus {
  outline: none;
}
</style>
