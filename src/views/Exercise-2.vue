<template>
  <b-container
    fluid
    class="content d-flex flex-column justify-content-center align-item-center mb-3">
      <b-row>
          <b-col class="d-flex justify-content-center align-item-center">
            <Tabs class="tabs"/>
            <Accordion class="accordion"/>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Tabs from '../components/exercise2/Tabs.vue'
import Accordion from '../components/exercise2/Accordion.vue'

export default {
  name: 'Exercise-2',
  components: {
    Tabs,
    Accordion
  }
}
</script>

<style lang="scss" scoped>
  html,body{
    margin:0;
  }
  .content {
    height:85vh;
  }
  .accordion {
    display: none;
  }
  @media (max-width: 445px) {
    .accordion {
      display: block;
    }
    .tabs {
      display: none;
    }
  }
</style>
