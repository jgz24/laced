import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [allProducts, setAllProducts] = useState({});

  // Get all shoes on initial site visit
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:8080/", {
        method: "GET"
      });
      const result = await res.json();
      setAllProducts(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Look for individual shoes via search bar.
  // Takes in all filter options other than
  // "Sort By"
  const handleSearch = async searchTerm => {
    let url =
      searchTerm.length > 0
        ? `http://localhost:8080/search/${searchTerm}`
        : "http://localhost:8080/";
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

  return (
    <React.Fragment>
      <NavBar handleSearch={handleSearch} />
      <Results products={allProducts} />
    </React.Fragment>
  );
}
