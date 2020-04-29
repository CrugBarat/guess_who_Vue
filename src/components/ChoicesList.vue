<template lang="html">
  <div>
    <user-choice v-for="choice in getChoice" :choice="choice"></user-choice>
  </div>
</template>

<script>
  import Choice from './Choice.vue';

  export default {
    name: 'user-choices-list',
    props: ['choices'],
    components: {
      'user-choice': Choice
    },
    computed: {
      getChoice() {
        if (this.choices) {
        for (let choice of this.choices) {
          return Object.keys(choice);
        }
      }
    }
    }
  }
</script>

<style lang="css" scoped>
</style>
