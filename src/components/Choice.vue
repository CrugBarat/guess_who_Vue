<template lang="html">
  <div>
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
</style>
