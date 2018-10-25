const state = {
  funds: 10000,
  stocks: [],
  insufficientFunds: false
};

const mutations = {
  'BUY_STOCK'(state, {stockId, stockPrice, stockQuantity}) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += stockQuantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQuantity
      });
    }
    state.funds -= stockPrice * stockQuantity;
  },
  'SELL_STOCK' (state, {stockId, stockPrice, stockQuantity}) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > stockQuantity) {
      record.quantity -= stockQuantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * stockQuantity;
  },

  'SET_INSUFFICIENT_FUNDS' (state, isTrue) {
      state.insufficientFunds = isTrue;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.stocks = portfolio.portfolioStocks ? portfolio.portfolioStocks : [];
    state.funds = portfolio.funds;
    state.insufficientFunds = false;
  }
};

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order);
  },
  setInSufficientFunds({commit}, isTrue) {
    commit('SET_INSUFFICIENT_FUNDS', isTrue);
  }
};

const getters = {
    portfolioStocks (state, getters) {
      return state.stocks.map(stock => {
          const record  = getters.stocks.find(frameElement => frameElement.id === stock.id);
          return {
            id: stock.id,
            quantity: stock.quantity,
            name: record.name,
            price: record.price
          }
      });
    },
  funds(state) {
      return state.funds;
  },
  insufficientFunds(state) {
      return state.insufficientFunds;
  }
};
export default {
  state, mutations, actions, getters
}
