import './App.css';
import NavigationBar from './components/Navigation Bar/NavigationBar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import CartState from './context/Cart-context/CartState';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (

    <Router>

      <NavigationBar />
      <CartState>
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
    </Router>


  );
}

export default App;
