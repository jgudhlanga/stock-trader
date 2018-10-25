<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-header': Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>
<style type="scss">
  .box-shadow {
    box-shadow: 1px 2px 2px #999;
  }
  .card-header {
    padding:0.3rem;
  }
  .card-body{
    padding:1rem 0.3rem;
  }
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

</style>
