<template>
  <div class="main-menu">
    <div class="main-menu__block">1</div>
    <div class="main-menu__block">2</div>
    <div class="main-menu__block">3</div>
  </div>
</template>

<script>
export default {
  name: "MainMenu"
}
</script>

<style scoped>

.main-menu {
  margin: 1rem auto;
  height: 15rem;
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*border: 1px solid black;*/
}

.main-menu__block {
  border: 1px solid black;
  width: 15%;
  height: 80%;
}
</style>