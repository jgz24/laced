import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";
import ProductInfo from "../product-info/ProductInfo";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [allProducts, setAllProducts] = useState({});
  const [searchString, setSearchString] = useState("");

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
    //window.document.location = `http://localhost:3000/search=${searchTerm}`;
  };

  return (
    <React.Fragment>
      <Router>
        <NavBar handleSearch={handleSearch} />
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
          <Route path="/:product" component={ProductInfo}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
