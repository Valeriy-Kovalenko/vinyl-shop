<template>
  <div>
    <section>
      <main-rec></main-rec>
    </section>
    <section>
      <main-menu></main-menu>
    </section>
  </div>
</template>

<script>
import MainRec from '../components/main/MainRec.vue';
import MainMenu from '../components/main/MainMenu.vue';

export default {
  name: "Main",
  components: {
    MainRec,
    MainMenu
  }
}
</script>

<style scoped>

</style>