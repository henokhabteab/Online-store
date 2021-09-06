import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products';
import Offer from './components/Offer';
import NewArrivals from './components/NewArrivals';
import Newsletter from './components/Newsletter';
import Sponsors from './components/Sponsors';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
              <Navbar /> 
              <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/products" component={Products} />
              <Route path="/NewArrivals" component={NewArrivals} />
              <Offer />
              <Newsletter />
              <Sponsors />
              </Switch>
            </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
