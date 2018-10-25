<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
        <router-view></router-view>
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
  }
}
</script>
<style>
  .box-shadow {
    box-shadow: 1px 2px 2px #999;
  }
</style>
