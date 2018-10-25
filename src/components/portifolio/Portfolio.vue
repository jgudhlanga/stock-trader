<template>
  <div class="col-md-12">
    <div class="row" v-if="stocks.length > 0">
      <app-portfolio-stock v-for="stock in stocks" :stock="stock"></app-portfolio-stock>
    </div>
    <div class="row" v-else>
      <div class="col-md-12 mt-3">
        <div class="alert alert-warning">No stocks purchased yet!</div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import PortfolioStock from './Stock';
    export default {
        name: "Portfolio",
      computed: {
        ...mapGetters({
          stocks: 'portfolioStocks'
        })
      },
      components: {
          'app-portfolio-stock': PortfolioStock
      }
    }
</script>

<style scoped>

</style>
