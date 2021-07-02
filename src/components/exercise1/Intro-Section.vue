<template>
  <div class="intro">
    <b-container
      fluid
      class="intro__bg d-flex flex-column justify-content-center align-item-center mb-3">
        <b-row>
            <b-col
              class="intro__text text-center justify-content-center align-item-center">
                <h1>Hello Developer!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </b-col>
        </b-row>
    </b-container>
  </div>
  
</template>

<script>

export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
  .intro {
    &__bg {
      background: url(../../assets/img/1920x650.png) rgba(0, 0, 0, 0.3);
      background-blend-mode: multiply;
      height: 50vh;
      width: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__text h1, p {
      color: white;
      font-family: 'Roboto', sans-serif;
    }
    &__text h1 {
      font-weight: 800;
      font-size: 48px;
    }
    &__text p {
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    .intro {
      &__bg {
        background: url(../../assets/img/600x600.png)rgba(0, 0, 0, 0.3);
        background-blend-mode: multiply;
        height: 50vh;
        width: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
</style>