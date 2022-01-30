import React from 'react';
import './App.css';
import "./css/List.css"
import "./css/Button.css";
import "./css/Cart.css"
import ListDemo from './Components/List/ListDemo';
import ProductListDemo from './Components/ProductList/ProductListDemo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AllProvider from './Context/AllProvider/AllProvider';


function App() {

  return (
    <AllProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/product-details">
              <ProductDetails></ProductDetails>
            </Route>
            <Route exact path="/">
              {/* <ListDemo></ListDemo> */}
              <ProductListDemo></ProductListDemo>
            </Route>
          </Switch>
        </Router>
      </div>
    </AllProvider>
  );
}

export default App;
