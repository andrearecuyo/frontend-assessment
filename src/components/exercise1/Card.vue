<template>
  <b-container fluid="lg" class="mb-3">
     <b-row>
       <b-col col lg="12" class="d-flex justify-content-center">
        <b-card-group class="justify-content-center align-item-center">
          <b-card
            img-alt="Image 400x300"
            img-top
            class="card text-center m-3"
            v-for="item in items" 
            :key="item.message"
          >
           <b-card-body>
              <img
              :src="image"
              class="card-img img-fluid" />
              <b-card-text class="mt-3">
                {{ item.message }}
              </b-card-text>
            </b-card-body>
            <template #footer class="btn">
              <b-button
                  href="#"
                  variant="outline-dark"
                  pill
                  class="btn__outline-dark text-uppercase mb-2"
                >
                  Read More
                </b-button>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
     </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'Card',
  data() {
    return {
      image: [require("../../assets/img/400x300.png")],
      items: [
        {
          message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sunt, rem inventore aliquam maiores. Quae sunt quo, quod nam harum itaque repellendus nemo fugit ex ipsum eius amet assumenda?"
        },
        {
          message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sunt, rem inventore aliquam maiores."
        },
        {
          message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sunt, rem inventore aliquam maiores. Ipsa voluptates sunt, rem inventore aliquam maiores."
        }
      ]
    };
  }
}
</script>

<style lang="scss">
  .card-group {
    .card:not(:first-child) {
      border-radius: calc(0.50rem - 1px);
    }
    .card:not(:last-child) {
      border-radius: calc(0.50rem - 1px);
    }
  }
  .card {
    max-width: 20rem;
    border-radius: 10px;
    box-shadow: #49505747 0px 2px 5px 0px;

    .card-body {
      flex: 1 1 auto;
      padding: .5rem .5rem;
    }
    .card-text {
      font-family: 'Roboto', sans-serif;
    }
    .card-img {
      border-radius: calc(0.50rem - 1px);
    }
    .card-footer {
      padding: 0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.00);
      border-top: 1px solid rgba(0, 0, 0, 0.0);
    }
  }
  .btn {
    &__outline-dark {
      color: #212529;
      border-color: #212529;
      border-width: medium;
      font-weight: 500;
      letter-spacing: .1em;
    }
  }

</style>