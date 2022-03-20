<template>
  <div class="recommendation">
    <h1 class="recommendation__header">RECOMMENDATION OF THE DAY</h1>
    <div class="recommendation__main">
      <div class="recommendation__cover-container">
        <img class="recommendation__cover" :src="song[1].url">
      </div>
      <div class="recommendation_text">
        <p>{{ song[1].description }}</p>
      </div>
      <div class="recommendation__price">
        <p>{{ song[1].price }}$</p>
        <router-link class="button" to="">Buy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    song() {
      return this.$store.getters.songs;
    }
  }
}
</script>

<style scoped>

.recommendation {
  margin: 0 auto;
  height: 22rem;
  width: 100%;
  border-bottom: 1px solid black;
  background: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.recommendation__header {
  text-align: center;
  margin: 0;
  padding: 1rem 0;
}

.recommendation__main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
}

.recommendation__cover-container {
  width: 150px;
  height: 150px;
  margin: 0 1rem;
}

.recommendation__cover {
  width: 100%;
  height: 100%;
}

.recommendation_text {
  max-width: 50%;
  margin: 0 1rem;
}

.recommendation_text p {
  margin: 0;
}

.recommendation__price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 1rem;
}

.recommendation__price p {
  font-size: 2rem;
}
</style>