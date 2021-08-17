import './App.css';
import NavigationBar from './components/Navigation Bar/NavigationBar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import CartState from './context/Cart-context/CartState';
import SnowBoardPage from './components/SnowBoardPage/SnowBoardPage';
import SkateProduct from './components/SkateProduct/SkateProduct';
import Checkout from './components/checkout/Checkout';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Shipping from './components/Shipping/Shipping';
import {

  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (

    <CartState>

      <NavigationBar />

      <Switch>
        <Route path='/checkout'>
          <Checkout />
          <CheckoutForm />
        </Route>
        <Route path='/payment'>
          <Checkout />
          <Shipping />
        </Route>
        <Route path='/snowboard'>
          <SnowBoardPage />
        </Route>
        <Route path='/skateproduct'>
          <SkateProduct />
        </Route>
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
