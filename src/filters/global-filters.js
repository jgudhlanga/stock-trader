import Vue from 'vue';

export const currency = Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

