import './App.css';
import NavigationBar from './components/Navigation Bar/NavigationBar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import CartState from './context/Cart-context/CartState';

import {

  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (

    <CartState>
      <NavigationBar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <Carousel />
          <Home />
        </Route>
      </Switch>

    </CartState>

  );
}

export default App;
