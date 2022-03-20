<template>
  <div class="main-menu">
    <div class="main-menu__block">
      <p class="main-menu__block-text">Genre</p>
      <router-link class="button" to="">Search</router-link>
    </div>
    <div class="main-menu__block">
      <p class="main-menu__block-text">Rare</p>
      <router-link class="button" to="">Check</router-link>
    </div>
    <div class="main-menu__block">
      <p class="main-menu__block-text">Random</p>
      <router-link class="button" to="">Help</router-link>
    </div>
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
  height: 20rem;
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*border: 1px solid black;*/
}

.main-menu__block {
  border: 1px solid black;
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url("../../assets/rare2.jpg");
  color: white;
}

.main-menu__block-text {
  font-size: 1.5rem;
}

.button {
  color: white;
  border-color: white;
}
</style>