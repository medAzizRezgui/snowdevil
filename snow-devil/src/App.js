import './App.css';
import NavigationBar from './components/Navigation Bar/NavigationBar';
import Carousel from './components/Carousel/Carousel';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (

    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <Carousel />
          <Home />
        </Route>
      </Switch>



    </Router>


  );
}

export default App;
