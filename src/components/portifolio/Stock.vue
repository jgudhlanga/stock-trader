<template>
  <div class="col-md-4 my-3">
    <div class="card box-shadow">
      <div class="card-header">
        <h5 class="d-inline float-left text-primary">{{ stock.name }}</h5>
        <small class="float-right text-muted font-italic">(Price: $ {{ stock.price }} Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" :class="{'is-invalid' : inSufficientQuantity }" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button
            class="btn btn-secondary btn-sm"
            :disabled="!sellValidate"
            @click="sellStock">{{ inSufficientQuantity ? 'Little Stock!' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions} from 'vuex';

  export default {
    name: "Stock",
    props: ['stock'],
    data() {
      return {
        quantity:''
      }
    },
    methods: {
      ...mapActions({
        placeStockOrder: 'sellStock'
      }),
      sellStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          stockQuantity: this.quantity,
        };
        this.placeStockOrder(order);
        this.quantity = 0;
      }
    },
    computed: {
      sellValidate() {
        return this.quantity > 0 && (this.quantity % 1 === 0) && (this.quantity <= this.stock.quantity);
      },
      inSufficientQuantity() {
        return this.quantity > this.stock.quantity;
      }
    }
  }
</script>

<style scoped>

</style>
