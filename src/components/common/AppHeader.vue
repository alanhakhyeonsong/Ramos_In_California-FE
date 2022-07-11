<template>
  <header>
    <div>
      <router-link to="/" class="logo">Ramos In California</router-link>
    </div>
    <div class="navigations">
      <a href="https://github.com/alanhakhyeonsong">About</a>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 2;
  background-color: #BAB0FF;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.navigations a {
  text-decoration-line: none;
  margin-left: 10px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>