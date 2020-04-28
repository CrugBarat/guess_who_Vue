<template lang="html">
  <div>
    <character v-for="character in characters" :character="character"></character>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';

export default {
  name: 'game-board',
  props: ['characters'],
  components: {
    'character': Character
  }
}
</script>

<style lang="css" scoped>
</style>
