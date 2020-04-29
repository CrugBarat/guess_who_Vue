<template lang="html">
  <div>
    <div class="app-conatiner">
      <div class="logo-container">
        <router-link class="link" :to="{name: 'home'}">
        <img class="logo" :src="logo">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/logo.png';

  export default {
    name: 'rules',
    data() {
      return {
        logo: logo
      }
    },
  }
</script>

<style lang="css" scoped>

    .app-conatiner {
      margin: 60px;
      background-color: white;
    }

    .logo-container {
      display: block;
      text-align: center;
    }

    .logo {
      display: inline-block;
    }

    .link:hover {
      cursor: url('../assets/cursor.png'), auto;
    }
</style>
