<template>
  <div class="col-md-4 my-3">
    <div class="card box-shadow">
      <div class="card-header">
        <h5 class="d-inline float-left text-success">{{ stock.name }}</h5>
        <small class="float-right text-muted font-italic">(Price: $ {{ stock.price }})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control " placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button
            class="btn btn-secondary btn-sm"
            :disabled="!purchaseValidation"
            @click="buyStock">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Stock",
    props: ['stock'],
    data() {
      return {
        quantity: ''
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          stockQuantity: this.quantity,
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    },
    computed: {
      purchaseValidation() {
        return this.quantity > 0 && (this.quantity % 1 === 0) && (this.quantity * this.stock.price <= this.$store.getters.funds);
      },
    },
    watch:{
      quantity() {
          this.$store.dispatch('setInSufficientFunds', (this.quantity * this.stock.price > this.$store.getters.funds));
      }
    }
  }
</script>

<style scoped>

</style>
