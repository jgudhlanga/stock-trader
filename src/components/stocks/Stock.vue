<template>
  <div class="col-md-4 my-3">
    <div class="card box-shadow">
      <div class="card-header">
        <h4 class="d-inline float-left">{{ stock.name }}</h4>
        <small class="float-right text-muted">(Price: $ {{ stock.price }})</small>
      </div>
      <div class="card-body">
        <div class="float-left"><input type="number" class="form-control " placeholder="Quantity"></div>
        <div class="float-right"><button class="btn btn-outline-success btn-sm">Buy</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Stock",
    props: ['stock']
  }
</script>

<style scoped>

</style>
