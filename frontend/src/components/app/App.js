import React, { useEffect } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";
import ProductInfo from "../results/products/product-info/ProductInfo";
import CheckOut from "../navbar/checkout/CheckOut";
import { searchApiCall } from "../../actions";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();

  // Get all shoes on initial site visit
  // OR
  // Get shoes based on user input via URL enter press
  useEffect(() => {
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
        url = "/search";
      } else {
        url = `/search/${searchTerm}`;
      }
      console.log(url);

      dispatch(searchApiCall(url));
    };

    let searchTerm = window.location.search.slice(8);

    handleSearch(searchTerm);
  }, [dispatch]);

  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Results}></Route>
          <Route path="/?search=:searchTerm" component={Results}></Route>
          <Route path="/product/:product" component={ProductInfo}></Route>
          <Route path="/checkout" exact component={CheckOut}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
