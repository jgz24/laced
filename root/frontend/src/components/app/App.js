import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";
import ProductInfo from "../product-info/ProductInfo";
import CheckOut from "../checkout/CheckOut";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [allProducts, setAllProducts] = useState({});
  const [searchString, setSearchString] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Get all shoes on initial site visit
  useEffect(() => {
    fetch("http://localhost:8080/", {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        setAllProducts(json);
        setSearchString("");
      })
      .catch(err => console.log(err));
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
      url = "http://localhost:8080/";
    } else {
      url = `http://localhost:8080/search/${searchTerm}`;
    }
    try {
      const res = await fetch(url, {
        method: "GET"
      });
      const result = await res.json();
      setAllProducts(result);
      setSearchString(searchTerm);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = product => {
    let tempCartItems = [...cartItems];
    tempCartItems.push(product);
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
            render={props => (
              <Results
                {...props}
                products={allProducts}
                searchString={searchString}
              />
            )}
          ></Route>
          <Route
            path="/checkout"
            exact
            render={props => <CheckOut {...props} cartItems={cartItems} />}
          ></Route>
          <Route
            path="/:product"
            render={props => (
              <ProductInfo {...props} handleAddToCart={handleAddToCart} />
            )}
          ></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
