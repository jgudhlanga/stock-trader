<template>
    <div class="col mt-3">
      <h3>Trade or View your portfolio</h3>
      <hr>
      <h6>You may save & load data</h6>
      <h6>Click 'End Day' to begin a New Day!</h6>
      <hr>
      <p>Your funds : {{ funds | currency}}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Home",
        computed: {
          ...mapGetters({
            funds: 'funds'
          })
        }
    }
</script>

<style scoped>

</style>
