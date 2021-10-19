import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import Checkout from "./Pages/Checkout/Checkout";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <h1>404 page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
