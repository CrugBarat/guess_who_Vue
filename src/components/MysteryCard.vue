<template lang="html">
  <div>
    <p>{{mysteryCard.name}}</p>
  </div>
</template>

<script>

export default {
  name: 'mystery-card',
  props: ['mysteryCard'],
  }
</script>

<style lang="css" scoped>

p:hover {
  cursor: pointer;
}
</style>
