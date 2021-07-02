<template>
  <div>
		<b-container fluid="lg" class="mt-5">
			<b-row>
				<b-col col lg="12" class="d-flex justify-content-center">
					<div class="accordion" role="tablist">
            <b-card no-body class="accordion__card mb-1" v-for="(item) in items" :key="item.title">
              <b-card-header header-tag="header" class="accordion__header p-3" role="tab" v-b-toggle="createAccordionId(item.title)">
                {{ item.title }}
              </b-card-header>
              <b-collapse :id="createAccordionId(item.title)" visible accordion="my-accordion" role="tabpanel">
                <b-card-body >
                  <b-card-text class="accordion__text">
                    <p v-html="item.content"></p>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
				</b-col>
			</b-row>
		</b-container>
	</div>
  
</template>

<script>
import itemsContent from '../../data/data.json'

export default {
	data() {
		return {
			items: itemsContent
		}
	},
  methods: {
    createAccordionId(title) { //create function createAccordionId
      let id = title.split(' ') //split title Section.1
      id = String(id.join('-')) //join Section.1 as Section-1

      return id.toLowerCase() // convert into lowercase as section-1
    }
  }
  
}

</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
  }

  .accordion {
    &__card {
      border-radius: 0px;
    }
    &__header {
      color: white;
      padding: 0.5rem 1rem;
      margin-bottom: 0;
      background-color: #092e65;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__text {
      font-family: 'Montserrat', sans-serif;
      line-height: 1.61em;
      font-weight: 300;
      color: #2c2c2c;
      font-size: 15px;
      padding: 1.25rem;
    }
    .card-text {
      font-family: 'Montserrat', sans-serif;
    }
  }
</style>