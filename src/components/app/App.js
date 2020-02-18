import React from "react";
import "./App.css";
import NavBar from "../navbar/NavBar";
import Results from "../results/Results";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="lineBreak"></div>
      <Results />
    </React.Fragment>
  );
}
