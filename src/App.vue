<template>
  <div id="app">
    <router-view/>
    <div id="footer" class="d-flex justify-content-end">
      <router-link to="/"> Exercise 1 </router-link> |
      <router-link to="/exercise-2"> Exercise 2 </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,900&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }

  #footer {
    padding: 30px;

    a {
      font-weight: normal;
      color: #2c3e50;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;

      &.router-link-exact-active {
        color: #092e65;
      }
    }
  }
</style>
