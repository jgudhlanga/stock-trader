<template>
  <div class="col-md-12">
    <transition enter-active-class="animated slideInDown" leave-active-class="animated slideInUp" mode="out-in">
      <div class="text-center text-danger" v-if="insufficientFunds">
         Insufficient Funds.!
      </div>
    </transition>
    <div class="row">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
   import Stock  from './Stock';
    export default {
        name: "Stocks",
        components: {
          'app-stock': Stock
        },
        computed: {
          stocks() {
            return this.$store.getters.stocks;
          },
          insufficientFunds() {
            return this.$store.getters.insufficientFunds;
          }
        }
    }
</script>

<style scoped>

</style>
