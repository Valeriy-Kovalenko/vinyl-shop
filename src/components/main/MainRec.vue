<template>
  <div class="recommendation">
    <h1 class="recommendation__header">RECOMMENDATION OF THE DAY</h1>
    <div class="recommendation__main">
      <div class="recommendation__cover-container">
        <img class="recommendation__cover" src="../../assets/xx_cover.png">
      </div>
      <div class="recommendation_text">
        <p>xx is the debut album by English indie pop band the xx. It was released on 14 August 2009 by Young Turks,
          an imprint label of XL Recordings. After signing a record contract with XL,
          the xx recorded the album from December 2008 to February 2009 at the label's in-house studio in London.
          The audio engineer Rodaidh McDonald worked with the band during the recording sessions and attempted to reproduce the intimate,
          unembellished quality of their demos. The band's Jamie Smith produced xx on his laptop and created electronic beats for the songs,
          which he then mixed in a detailed process with McDonald.</p>
      </div>
      <div class="recommendation__price">
        <p>14$</p>
        <router-link class="button" to="">Buy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainRecommendation"
}
</script>

<style scoped>

.recommendation {
  margin: 0 auto;
  height: 20rem;
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
  font-size: 2rem;
  margin: 0 1rem;
}

.button,
a {
  background: antiquewhite;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  padding: 0.3rem 0.5rem;
}
</style>