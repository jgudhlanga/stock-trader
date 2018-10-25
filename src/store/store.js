import Vue from 'vue';
import VueX from 'vuex';

import StocksModule from './modules/stocks-module';
import PortfolioModule from './modules/portfolio-modules';

import * as actions from './actions';

Vue.use(VueX);
export default new VueX.Store({
  actions,
  modules: {
    StocksModule,
    PortfolioModule
  }
});
