import Home from './components/Home';
import Portfolio from './components/portifolio/Portfolio';
import Stocks from './components/stocks/Stocks';

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks },
];
