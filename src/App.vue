<template>
  <div>
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.button {
  text-decoration: none;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
}
</style>
