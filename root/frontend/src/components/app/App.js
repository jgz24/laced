import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";
import ProductInfo from "../product-info/ProductInfo";
import CheckOut from "../checkout/CheckOut";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [allProducts, setAllProducts] = useState({});
  const [cartItems, setCartItems] = useState({});

  // Get all shoes on initial site visit
  // OR
  // Get shoes based on user input via URL enter press
  useEffect(() => {
    let searchTerm = window.location.search.slice(8);

    handleSearch(searchTerm);
  }, []);

  // Look for individual shoes via search bar.
  // Takes in all filter options other than
  // "Sort By"
  const handleSearch = async searchTerm => {
    let url = "";
    if (
      searchTerm.length === 0 ||
      searchTerm.toLowerCase() === "shoes" ||
      searchTerm.toLowerCase() === "shoe"
    ) {
      url = "http://localhost:8080/search";
    } else {
      url = `http://localhost:8080/search/${searchTerm}`;
    }
    try {
      const res = await fetch(url, {
        method: "GET"
      });
      const result = await res.json();
      setAllProducts(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = (action, product) => {
    let tempCartItems = { ...cartItems };
    let id = product.Id;

    // User wants to add item to cart
    if (action === "add") {
      // Individual shoes can only be
      // in the cart once.
      if (!tempCartItems[id]) {
        tempCartItems[id] = product;
      }
    }
    // User wants to remopve item from cart
    else {
      delete tempCartItems[id];
    }

    setCartItems(tempCartItems);
  };

  return (
    <React.Fragment>
      <Router>
        <NavBar handleSearch={handleSearch} cartItems={cartItems} />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Results {...props} products={allProducts} />}
          ></Route>
        </Switch>
        <Switch>
          <Route
            path="/?search=:searchTerm"
            render={props => <Results {...props} products={allProducts} />}
          ></Route>
          <Route
            path="/checkout"
            exact
            render={props => <CheckOut {...props} cartItems={cartItems} />}
          ></Route>
          <Route
            path="/product/:product"
            render={props => (
              <ProductInfo {...props} handleAddToCart={handleAddToCart} />
            )}
          ></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
