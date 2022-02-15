<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__brand">
        <router-link to="/">
          <img src="../assets/brand.jpg" alt="Home Page">
        </router-link>
      </div>
      <ul class="header__items">
        <li class="header__item">Search</li>
        <li class="header__item">Exclusive</li>
        <li class="header__item">About Us</li>
      </ul>
      <div class="header__links">
        <router-link to="/">
          <img src="../assets/liked.png" alt="Home Page">
        </router-link><router-link to="/">
          <img src="../assets/cart.png" alt="Home Page">
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

.header {
  width: 100%;
  height: 100%;
  border-bottom: black solid 1px;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  height: 100%;
}

.header__brand {
  margin: 0.4rem;
}

.header__brand img {
  height: 3rem;
  vertical-align: middle;

  border: black solid 1px;
  cursor: pointer;
}

.header__links img {
  height: 1.5rem;
  vertical-align: middle;
  cursor: pointer;
  margin: 0 1rem;
}

.header__items {
  display: flex;
  list-style: none;
  height: 100%;
}

.header__item {
  margin: 0 2.5rem;
}
</style>