import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [allProducts, setAllProducts] = useState({});

  // Get all shoes on initial site visit
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then(res => res.json())
      .then(json => {
        setAllProducts(json);
      });
  }, []);

  // Bypass initial render that sends in
  // test = empty state object.
  if (Object.keys(allProducts).length === 0) return null;

  return (
    <React.Fragment>
      <NavBar />
      <Results products={allProducts} />
    </React.Fragment>
  );
}
