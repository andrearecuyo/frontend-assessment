<template>
	<div class="content">
		<b-container fluid="lg" class="content__container mt-5">
			<b-row>
				<b-col col lg="12" class="d-flex justify-content-center">
					<b-tabs content-class="tab mt-3" fill>
            <b-tab class="tab__link" :title="item.title" v-for="item in items" :key="item.title">
              <b-card-text class="tab__text">
                <p v-html="item.content"></p>
              </b-card-text>
            </b-tab>
					</b-tabs>
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
	}
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;700&display=swap');

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &__container {
      max-width: 600px;
      max-height: 100%;
      height: 50vh;
      width: 100%;
      margin-top: 10%;
      transition: 0.3s ease;
      box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.068);
      padding-right: 0;
      padding-left: 0;
      border-bottom: 5px solid #092e65;
    }
  }
  .tab {
    &__text {
      padding: 1.25rem;
    }
    &__text p {
      font-family: 'Montserrat', sans-serif;
      line-height: 1.61em;
      font-weight: 300;
      color: #2c2c2c;
      font-size: 16px;
    }
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .nav-tabs {
    border-bottom: none;
  }
  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }
  .nav-fill .nav-item .nav-link, .nav-justified .nav-item .nav-link {
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #092e65;
    border-radius: 0px;
  }
  .nav-tabs .nav-link {
    background: none;
    border: none;
  }
  .nav-tabs .nav-link:hover{
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    border-top: 5px solid #092e65;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }
  .nav-tabs .nav-link.active{
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    border-top: 5px solid #092e65;
  }
  .nav-link:hover, .nav-link:focus {
    color: #6c757d;
  }
  
  
</style>