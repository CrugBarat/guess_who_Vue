<template lang="html">
  <div>
    <user-choice v-for="choice in choices" :choice="choice"></user-choice>
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
  }
</script>

<style lang="css" scoped>
</style>
