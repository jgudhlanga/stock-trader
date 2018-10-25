<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <router-link class="navbar-brand text-success" to="/">Stock Trader App</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/portfolio" active-class="active" exact>
            Portfolio<span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/stocks" active-class="active" exact>
            Stocks
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-warning" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-warning" data-toggle="dropdown" href="#" role="button"
             aria-haspopup="true" aria-expanded="false" @click="isDropDownOpen = !isDropDownOpen">Save & Load</a>
          <div class="dropdown-menu" :class="{ show : isDropDownOpen }">
            <a class="dropdown-item text-warning" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item text-warning" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right text-light"> | Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "Header",
    data() {
      return {
        isDropDownOpen: false
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData : 'loadData'
    }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          portfolioStocks: this.$store.getters.portfolioStocks,
          stocks: this.$store.getters.stocks
        };
        this.$http.put('data.json', data);
        this.isDropDownOpen = false;
      },
      loadData() {
        this.fetchData();
      }
    },
    computed: {
      ...mapGetters({
        funds: 'funds'
      })
    }
  }
</script>

<style scoped>

</style>
